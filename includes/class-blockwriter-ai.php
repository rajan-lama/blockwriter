<?php

/**
 * AI provider integration.
 *
 * Stores an OpenAI-compatible endpoint configuration (base URL, API key, and
 * model) in the WordPress options table and exposes a REST proxy that the
 * editor uses to generate content. The API key is only ever used on the
 * server and is never sent to the browser.
 *
 * @package Blockwriter
 */

namespace Blockwriter;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registers the BlockWriter AI settings page and REST proxy.
 */
final class AI {

	/**
	 * Option name that stores the AI settings.
	 *
	 * @var string
	 */
	const OPTION = 'blockwriter_ai_settings';

	/**
	 * REST namespace shared by the AI routes.
	 *
	 * @var string
	 */
	const REST_NAMESPACE = 'blockwriter/v1';

	/**
	 * Registers the hooks used by the AI integration.
	 *
	 * @return void
	 */
	public static function register() {
		add_action( 'admin_init', array( __CLASS__, 'register_settings' ) );
		add_action( 'admin_menu', array( __CLASS__, 'add_settings_page' ) );
		add_action( 'rest_api_init', array( __CLASS__, 'register_routes' ) );
	}

	/**
	 * Default AI settings.
	 *
	 * @return array
	 */
	public static function defaults() {
		return array(
			'base_url' => 'https://api.openai.com/v1',
			'api_key'  => '',
			'model'    => 'gpt-4o-mini',
		);
	}

	/**
	 * Returns the stored AI settings merged with the defaults.
	 *
	 * @return array
	 */
	public static function get_settings() {
		$settings = get_option( self::OPTION, array() );

		if ( ! is_array( $settings ) ) {
			$settings = array();
		}

		return wp_parse_args( $settings, self::defaults() );
	}

	/**
	 * Whether an API key, base URL, and model are all configured.
	 *
	 * @return bool
	 */
	public static function is_configured() {
		$settings = self::get_settings();

		return '' !== trim( (string) $settings['api_key'] )
			&& '' !== trim( (string) $settings['base_url'] )
			&& '' !== trim( (string) $settings['model'] );
	}

	/**
	 * Registers the setting used by the settings page.
	 *
	 * @return void
	 */
	public static function register_settings() {
		register_setting(
			'blockwriter_ai',
			self::OPTION,
			array(
				'type'              => 'array',
				'sanitize_callback' => array( __CLASS__, 'sanitize_settings' ),
				'default'           => self::defaults(),
			)
		);
	}

	/**
	 * Sanitizes the AI settings before they are stored.
	 *
	 * @param mixed $input Raw settings input.
	 *
	 * @return array
	 */
	public static function sanitize_settings( $input ) {
		$defaults = self::defaults();

		if ( ! is_array( $input ) ) {
			$input = array();
		}

		$base_url = isset( $input['base_url'] ) ? esc_url_raw( trim( (string) $input['base_url'] ) ) : '';
		$model    = isset( $input['model'] ) ? sanitize_text_field( trim( (string) $input['model'] ) ) : '';

		return array(
			'base_url' => '' !== $base_url ? $base_url : $defaults['base_url'],
			'api_key'  => isset( $input['api_key'] ) ? trim( (string) $input['api_key'] ) : '',
			'model'    => '' !== $model ? $model : $defaults['model'],
		);
	}

	/**
	 * Adds the settings page under the Settings menu.
	 *
	 * @return void
	 */
	public static function add_settings_page() {
		add_options_page(
			__( 'BlockWriter AI', 'blockwriter' ),
			__( 'BlockWriter AI', 'blockwriter' ),
			'manage_options',
			'blockwriter-ai',
			array( __CLASS__, 'render_settings_page' )
		);
	}

	/**
	 * Renders the AI settings page.
	 *
	 * @return void
	 */
	public static function render_settings_page() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$settings = self::get_settings();
		?>
		<div class="wrap">
			<h1><?php echo esc_html__( 'BlockWriter AI', 'blockwriter' ); ?></h1>
			<p>
				<?php
				echo esc_html__(
					'Connect an OpenAI-compatible API to power the AI content, block, and section generators. The API key is stored on this site and is only used on the server.',
					'blockwriter'
				);
				?>
			</p>
			<form action="options.php" method="post">
				<?php settings_fields( 'blockwriter_ai' ); ?>
				<table class="form-table" role="presentation">
					<tr>
						<th scope="row">
							<label for="blockwriter-ai-base-url"><?php echo esc_html__( 'API base URL', 'blockwriter' ); ?></label>
						</th>
						<td>
							<input
								type="url"
								id="blockwriter-ai-base-url"
								name="<?php echo esc_attr( self::OPTION . '[base_url]' ); ?>"
								value="<?php echo esc_attr( $settings['base_url'] ); ?>"
								class="regular-text"
								placeholder="https://api.openai.com/v1"
							/>
							<p class="description">
								<?php
								echo esc_html__(
									'OpenAI-compatible endpoint, for example https://api.openai.com/v1, https://openrouter.ai/api/v1, or a local server.',
									'blockwriter'
								);
								?>
							</p>
						</td>
					</tr>
					<tr>
						<th scope="row">
							<label for="blockwriter-ai-api-key"><?php echo esc_html__( 'API key', 'blockwriter' ); ?></label>
						</th>
						<td>
							<input
								type="password"
								id="blockwriter-ai-api-key"
								name="<?php echo esc_attr( self::OPTION . '[api_key]' ); ?>"
								value="<?php echo esc_attr( $settings['api_key'] ); ?>"
								class="regular-text"
								autocomplete="off"
							/>
							<p class="description">
								<?php
								echo esc_html__(
									'Provided by you and stored in the WordPress options table. It is never exposed to the browser.',
									'blockwriter'
								);
								?>
							</p>
						</td>
					</tr>
					<tr>
						<th scope="row">
							<label for="blockwriter-ai-model"><?php echo esc_html__( 'Model', 'blockwriter' ); ?></label>
						</th>
						<td>
							<input
								type="text"
								id="blockwriter-ai-model"
								name="<?php echo esc_attr( self::OPTION . '[model]' ); ?>"
								value="<?php echo esc_attr( $settings['model'] ); ?>"
								class="regular-text"
								placeholder="gpt-4o-mini"
							/>
						</td>
					</tr>
				</table>
				<?php submit_button(); ?>
			</form>
		</div>
		<?php
	}

	/**
	 * Registers the AI REST routes.
	 *
	 * @return void
	 */
	public static function register_routes() {
		register_rest_route(
			self::REST_NAMESPACE,
			'/ai/status',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( __CLASS__, 'rest_status' ),
				'permission_callback' => array( __CLASS__, 'can_generate' ),
			)
		);

		register_rest_route(
			self::REST_NAMESPACE,
			'/ai/generate',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( __CLASS__, 'rest_generate' ),
				'permission_callback' => array( __CLASS__, 'can_generate' ),
				'args'                => array(
					'mode'      => array(
						'type'     => 'string',
						'required' => true,
						'enum'     => array( 'section', 'blocks', 'content' ),
					),
					'prompt'    => array(
						'type'      => 'string',
						'required'  => true,
						'minLength' => 1,
					),
					'post_type' => array(
						'type'     => 'string',
						'required' => false,
					),
				),
			)
		);
	}

	/**
	 * Permission check for the AI routes.
	 *
	 * @return bool
	 */
	public static function can_generate() {
		return current_user_can( 'edit_posts' );
	}

	/**
	 * Returns the AI configuration status without exposing the key.
	 *
	 * @return \WP_REST_Response
	 */
	public static function rest_status() {
		$settings = self::get_settings();

		return rest_ensure_response(
			array(
				'configured'  => self::is_configured(),
				'model'       => $settings['model'],
				'endpoint'    => self::endpoint_host( $settings['base_url'] ),
				'settingsUrl' => admin_url( 'options-general.php?page=blockwriter-ai' ),
			)
		);
	}

	/**
	 * Generates content from a prompt.
	 *
	 * @param \WP_REST_Request $request REST request.
	 *
	 * @return \WP_REST_Response|\WP_Error
	 */
	public static function rest_generate( $request ) {
		if ( ! self::is_configured() ) {
			return new \WP_Error(
				'blockwriter_ai_not_configured',
				__( 'BlockWriter AI is not configured. Add your API key under Settings → BlockWriter AI.', 'blockwriter' ),
				array( 'status' => 400 )
			);
		}

		$mode   = (string) $request->get_param( 'mode' );
		$prompt = sanitize_textarea_field( (string) $request->get_param( 'prompt' ) );
		$prompt = trim( $prompt );

		if ( '' === $prompt ) {
			return new \WP_Error(
				'blockwriter_ai_empty_prompt',
				__( 'Enter a prompt before generating.', 'blockwriter' ),
				array( 'status' => 400 )
			);
		}

		if ( function_exists( 'mb_substr' ) ) {
			$prompt = mb_substr( $prompt, 0, 2000, 'UTF-8' );
		} else {
			$prompt = substr( $prompt, 0, 2000 );
		}

		$content = self::request_completion( $mode, $prompt );

		if ( is_wp_error( $content ) ) {
			return $content;
		}

		return rest_ensure_response(
			array(
				'mode'    => $mode,
				'content' => $content,
			)
		);
	}

	/**
	 * Sends a chat completion request to the configured endpoint.
	 *
	 * @param string $mode   Generation mode.
	 * @param string $prompt User prompt.
	 *
	 * @return string|\WP_Error Generated content or an error.
	 */
	private static function request_completion( $mode, $prompt ) {
		$settings = self::get_settings();
		$url      = trailingslashit( $settings['base_url'] ) . 'chat/completions';

		$body = array(
			'model'       => $settings['model'],
			'messages'    => array(
				array(
					'role'    => 'system',
					'content' => self::system_prompt( $mode ),
				),
				array(
					'role'    => 'user',
					'content' => $prompt,
				),
			),
			'temperature' => 0.6,
			'max_tokens'  => 'content' === $mode ? 1200 : 2000,
		);

		$response = wp_remote_post(
			$url,
			array(
				'timeout' => 60,
				'headers' => array(
					'Authorization' => 'Bearer ' . $settings['api_key'],
					'Content-Type'  => 'application/json',
				),
				'body'    => wp_json_encode( $body ),
			)
		);

		if ( is_wp_error( $response ) ) {
			self::log( 'BlockWriter AI request failed: ' . $response->get_error_message() );

			return new \WP_Error(
				'blockwriter_ai_request_failed',
				__( 'Could not reach the AI service. Please try again.', 'blockwriter' ),
				array( 'status' => 502 )
			);
		}

		$status = (int) wp_remote_retrieve_response_code( $response );
		$data   = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( $status < 200 || $status >= 300 ) {
			$detail = '';

			if ( is_array( $data ) && isset( $data['error']['message'] ) ) {
				$detail = (string) $data['error']['message'];
			}

			self::log( sprintf( 'BlockWriter AI returned HTTP %1$d: %2$s', $status, $detail ) );

			return new \WP_Error(
				'blockwriter_ai_api_error',
				__( 'The AI service returned an error. Check your API settings and try again.', 'blockwriter' ),
				array( 'status' => 502 )
			);
		}

		if ( ! is_array( $data ) || empty( $data['choices'][0]['message']['content'] ) ) {
			self::log( 'BlockWriter AI returned an unexpected response shape.' );

			return new \WP_Error(
				'blockwriter_ai_invalid_response',
				__( 'The AI service returned an unexpected response.', 'blockwriter' ),
				array( 'status' => 502 )
			);
		}

		return self::clean_output( (string) $data['choices'][0]['message']['content'] );
	}

	/**
	 * Builds the system prompt for a generation mode.
	 *
	 * @param string $mode Generation mode.
	 *
	 * @return string
	 */
	private static function system_prompt( $mode ) {
		$rules = 'Do not wrap the output in code fences or markdown. Do not include <html>, <head>, <body>, <script>, or <style> tags. Only output the requested markup with no commentary.';

		if ( 'content' === $mode ) {
			return 'You are a helpful copywriter. Write clear, well-structured prose. ' .
				'Return simple semantic HTML using only <p>, <h2>, <h3>, <ul>, <ol>, <li>, <strong>, <em>, <a>, and <blockquote> tags. ' .
				'Avoid images. ' . $rules;
		}

		if ( 'blocks' === $mode ) {
			return 'You are a WordPress Gutenberg content assistant. ' .
				'Return a short fragment of clean, semantic HTML that will be converted into a few Gutenberg blocks: one heading, a paragraph or two, and optionally a list or a button link. ' .
				'Use only <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <a>, and <blockquote> tags. ' . $rules;
		}

		return 'You are a WordPress Gutenberg layout assistant. ' .
			'Return a complete landing page section as clean, semantic HTML: a wrapper <section>, a heading, body copy, and where useful a list, a call-to-action <a>, and columns built with nested <div> elements. ' .
			'Use only <section>, <div>, <h2>, <h3>, <p>, <ul>, <ol>, <li>, <strong>, <em>, <a>, and <blockquote> tags. ' .
			'Do not include images. ' . $rules;
	}

	/**
	 * Removes code fences from model output.
	 *
	 * @param string $content Raw model content.
	 *
	 * @return string
	 */
	private static function clean_output( $content ) {
		$content = trim( $content );
		$content = preg_replace( '/^```[a-zA-Z]*\s*/', '', $content );
		$content = preg_replace( '/\s*```$/', '', $content );

		return trim( (string) $content );
	}

	/**
	 * Logs an AI error with context.
	 *
	 * Errors are written to the PHP error log so site owners can diagnose API
	 * problems. Secrets are never passed to this method.
	 *
	 * @param string $message Error message.
	 *
	 * @return void
	 */
	private static function log( $message ) {
		// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
		error_log( 'BlockWriter AI: ' . $message );
	}

	/**
	 * Returns only the host of an endpoint for display.
	 *
	 * @param string $base_url Base URL.
	 *
	 * @return string
	 */
	private static function endpoint_host( $base_url ) {
		$host = wp_parse_url( (string) $base_url, PHP_URL_HOST );

		return is_string( $host ) ? $host : '';
	}
}
