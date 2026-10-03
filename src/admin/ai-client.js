/**
 * Client helpers for the BlockWriter AI REST proxy.
 *
 * The API key never reaches the browser: these calls hit the server, which
 * talks to the configured OpenAI-compatible endpoint.
 */
import apiFetch from '@wordpress/api-fetch';

/**
 * Returns the AI configuration status.
 *
 * @return {Promise<Object>} Status payload.
 */
export function getAiStatus() {
	return apiFetch( { path: '/blockwriter/v1/ai/status' } );
}

/**
 * Requests generated content from the AI proxy.
 *
 * @param {Object} options            Request options.
 * @param {string} options.mode       Generation mode (`section`, `blocks`, `content`).
 * @param {string} options.prompt     User prompt.
 * @param {string} [options.postType] Current post type, for context.
 *
 * @return {Promise<Object>} Response payload with `content`.
 */
export function generateAiContent( { mode, prompt, postType } ) {
	return apiFetch( {
		path: '/blockwriter/v1/ai/generate',
		method: 'POST',
		data: {
			mode,
			prompt,
			post_type: postType || '',
		},
	} );
}
