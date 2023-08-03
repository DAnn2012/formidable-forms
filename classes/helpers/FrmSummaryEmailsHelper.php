<?php
/**
 * In-plugin summary emails helper
 *
 * @since x.x
 * @package Formidable
 */

/**
 * Class FrmSummaryEmailsHelper
 */
class FrmSummaryEmailsHelper {

	public static $option_name = 'frm_summary_emails_options';

	private static $options;

	/**
	 * Checks if summary emails are enabled.
	 *
	 * @return bool
	 */
	public static function is_enabled() {
		$frm_settings = FrmAppHelper::get_settings();
		return ! empty( $frm_settings->summary_emails ) && ! empty( $frm_settings->summary_emails_recipients );
	}

	private static function get_options() {
		$default_options = array(
			'last_monthly' => '',
			'last_yearly'  => '',
			'last_license' => '',
			'renewal'      => '',
		);
		if ( ! self::$options ) {
			self::$options = get_option( self::$option_name, $default_options );
		}
		return self::$options;
	}

	private static function save_options( $options ) {
		update_option( 'frm_summary_emails_options', $options );
	}

	public static function send_monthly_email() {
		error_log( 'Sending monthly email' );
	}

	public static function send_yearly_email() {
		error_log( 'Sending yearly email' );

		$yearly_email = new FrmYearlySummaryEmail();
		$yearly_email->send();
	}

	public static function send_license_expired_email() {
		error_log( 'Sending license expired email' );
	}

	/**
	 * Gets the renewal date and save to options. If it doesn't exist, get the created date of the lowest ID form then plus 1 year.
	 *
	 * @return string
	 */
	private static function get_renewal_date() {
		$options = self::get_options();
		if ( ! empty( $options['renewal'] ) ) {
			return $options['renewal'];
		}

		$license_info = FrmAddonsController::get_primary_license_info();
		if ( ! empty( $license_info['expires'] ) ) {
			$renewal_date       = date( 'Y-m-d', $license_info['expires'] );
			$options['renewal'] = $renewal_date;
			self::save_options( $options );
			return $renewal_date;
		}

		$first_form_date = FrmDb::get_var(
			'frm_forms',
			array(),
			'created_at',
			array( 'order_by' => 'id ASC' )
		);
		if ( $first_form_date ) {
			$renewal_date       = date( 'Y-m-d', strtotime( $first_form_date ) );
			$options['renewal'] = $renewal_date;
			self::save_options( $options );
			return $renewal_date;
		}

		return false;
	}

	public static function should_send_yearly_email() {

	}

	public static function should_send_monthly_email() {
		return false;
	}

	public static function should_send_license_expired_email() {
		return false;
	}

	/**
	 * Gets sent date of the last monthly, yearly, or license expired email.
	 *
	 * @param string $type Accepts `monthly`, `yearly`, or `license`.
	 * @return string|false
	 */
	public static function get_last_sent_date( $type ) {
		$tracking = self::get_tracking();
		if ( empty( $tracking[ 'last_' . $type ] ) ) {
			return false;
		}

		return $tracking[ 'last_' . $type ];
	}

	public static function set_last_send_date( $date = '' ) {

	}

	private static function get_lowest_form_created_date() {

	}
}
