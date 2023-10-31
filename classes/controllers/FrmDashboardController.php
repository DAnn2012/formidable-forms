<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}

class FrmDashboardController {

	/**
	 * Handle name used for registering controller scripts and style.
	 *
	 * @var string Handle name used for wp_register_script|wp_register_style
	 */
	public static $assets_handle_name = 'formidable-dashboard';

	private static $banner_closed_cookie_name = 'frm-welcome-banner-closed';

	public static function menu() {
		add_submenu_page( 'formidable', 'Formidable | ' . __( 'Dashboard', 'formidable' ), __( 'Dashboard', 'formidable' ), 'frm_view_forms', 'formidable-dashboard', 'FrmDashboardController::route' );
	}

	public static function route() {
		$dashboard_view = new FrmDashboardView(
			array(
				'counters' => array(
					'template-type' => '',
					'counters'      => array(
						array(
							'heading' => 'Total Forms',
							'type'    => 'default',
							'counter' => 120,
						),
						array(
							'heading' => 'Total Entries',
							'type'    => 'default',
							'counter' => 300,
						),
						array(
							'heading' => 'All Views',
							'counter' => 65,
							'type'    => 'default',
						),
						array(
							'heading' => 'Installed Apps',
							'counter' => 75,
							'type'    => 'default',
						),
					),
				),
			),
		);
		require FrmAppHelper::plugin_path() . '/classes/views/dashboard/dashboard.php';
	}

	public static function ajax_requests() {
		$dashboard_action = FrmAppHelper::get_post_param( 'dashboard_action', '', 'sanitize_text_field' );

		if ( 'welcome-banner-cookie' === $dashboard_action ) {
			if ( true === self::ajax_set_cookie_banner( FrmAppHelper::get_post_param( 'banner_has_closed' ) ) ) {
				echo wp_json_encode( array( 'success' => true ) );
				wp_die();
			}
			echo wp_json_encode( array( 'success' => false ) );
			wp_die();
		}
	}

	private static function ajax_set_cookie_banner( $banner_has_closed ) {
		if ( 1 === (int) $banner_has_closed ) {
			$expiration_time = time() + ( 400 * 24 * 60 * 60 ); // 400 days. Maximum expiration time allowed by Chrome.
			setcookie( self::$banner_closed_cookie_name, 1 . '|' . $expiration_time, $expiration_time );
			return true;
		}
		return false;
	}

	public static function welcome_banner_has_closed() {
		if ( isset( $_COOKIE[ self::$banner_closed_cookie_name ] ) ) {
			list( $cookie_value, $expiration_time ) = explode( '|', sanitize_text_field( wp_unslash( $_COOKIE[ self::$banner_closed_cookie_name ] ) ) );
			if ( 1 === (int) $cookie_value ) {
				// Refresh welcome banner cookie if it will expire in 45 days.
				if ( (int) $expiration_time <= time() + ( 45 * 24 * 60 * 60 ) ) {
					self::ajax_set_cookie_banner( 1 );
				}
				return true;
			}
			return false;
		}
		return false;
	}

	/**
	 * Register controller assets.
	 *
	 * @return void
	 */
	public static function register_assets() {
		wp_register_script( self::$assets_handle_name, FrmAppHelper::plugin_url() . '/js/formidable_dashboard.js', array(), FrmAppHelper::plugin_version(), true );
		wp_register_style( self::$assets_handle_name, FrmAppHelper::plugin_url() . '/css/admin/dashboard.css', array(), FrmAppHelper::plugin_version() );
	}

	/**
	 * Enqueue controller assets.
	 *
	 * @return void
	 */
	public static function enqueue_assets() {

		if ( 'formidable-dashboard' !== FrmAppHelper::simple_get( 'page', 'sanitize_title' ) ) {
			return;
		}

		wp_enqueue_style( self::$assets_handle_name );
		wp_enqueue_script( self::$assets_handle_name );
	}

}
