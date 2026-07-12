/**
 * watsonxService — thin wrapper around the IBM watsonx Orchestrate
 * Web Chat instance API.
 *
 * All methods are no-ops when the instance is not yet available,
 * so callers don't need to guard for null.
 */

/**
 * Send a text message to the watsonx Orchestrate agent.
 *
 * @param {object} instance  - Watson Chat instance from onLoad callback
 * @param {string} text      - Message text to send
 */
export async function sendMessage(instance, text) {
  if (!instance || !text?.trim()) return
  try {
    await instance.send({ input: { text } })
  } catch (err) {
    console.error('[WatsonxService] sendMessage error:', err)
  }
}

/**
 * Open the chat panel programmatically.
 * @param {object} instance
 */
export function openChat(instance) {
  if (!instance) return
  try { instance.openWindow() } catch {}
}

/**
 * Close the chat panel programmatically.
 * @param {object} instance
 */
export function closeChat(instance) {
  if (!instance) return
  try { instance.closeWindow() } catch {}
}

/**
 * Set context variables for the active session.
 *
 * @param {object} instance
 * @param {object} context   - skill context variables
 */
export async function setContext(instance, context) {
  if (!instance) return
  try {
    await instance.updateUserContext(context)
  } catch (err) {
    console.error('[WatsonxService] setContext error:', err)
  }
}
