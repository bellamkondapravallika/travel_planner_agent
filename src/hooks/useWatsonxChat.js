/**
 * useWatsonxChat — manages loading/error state for the IBM watsonx
 * Orchestrate Web Chat widget loader script.
 */
import { useState, useEffect } from 'react'
import WATSONX_CONFIG from '../config/watsonx.js'

export const LOAD_STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
}

function useWatsonxChat({ destinationName, enabled = true } = {}) {
  const [state, setState] = useState(LOAD_STATES.IDLE)
  const [error, setError] = useState(null)
  const [instance, setInstance] = useState(null)

  useEffect(() => {
    if (!enabled) return
    if (document.getElementById('wxo-loader-script')) {
      setState(LOAD_STATES.LOADED)
      return
    }

    setState(LOAD_STATES.LOADING)

    // Configure the Watson Assistant Chat options before loading the script
    window.watsonAssistantChatOptions = {
      integrationID: WATSONX_CONFIG.integrationID,
      region: WATSONX_CONFIG.region,
      serviceInstanceID: WATSONX_CONFIG.serviceInstanceID,
      agentID: WATSONX_CONFIG.agentID,
      agentEnvironmentID: WATSONX_CONFIG.agentEnvironmentID,
      openChatByDefault: true,
      headerConfig: {
        title: 'Travel Planner AI',
        tagline: 'Powered by IBM watsonx Orchestrate',
      },
      context: destinationName
        ? {
            skills: {
              'main skill': {
                user_defined: { destination: destinationName },
              },
            },
          }
        : undefined,
      onLoad: async (inst) => {
        await inst.render()
        setInstance(inst)
        setState(LOAD_STATES.LOADED)

        if (destinationName) {
          try {
            await inst.send({
              input: { text: `I want to plan a trip to ${destinationName}. Please help me.` },
            })
          } catch { /* non-critical */ }
        }
      },
    }

    const script = document.createElement('script')
    script.id = 'wxo-loader-script'
    script.src = `${WATSONX_CONFIG.loaderScriptURL}?v=${Date.now()}`
    script.async = true

    script.onerror = () => {
      setState(LOAD_STATES.ERROR)
      setError('Failed to load IBM watsonx Orchestrate. Check your connection and try again.')
    }

    document.head.appendChild(script)

    const timer = setTimeout(() => {
      if (state === LOAD_STATES.LOADING) {
        setState(LOAD_STATES.ERROR)
        setError('Connection timed out. The service may be temporarily unavailable.')
      }
    }, 20000)

    return () => clearTimeout(timer)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled])

  return { state, error, instance }
}

export default useWatsonxChat
