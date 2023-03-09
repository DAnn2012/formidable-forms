<?php

class FrmTransLiteAppHelper {

	public static function plugin_path() {
		return FrmAppHelper::plugin_path() . '/stripe/';
	}

	public static function plugin_url() {
		return FrmAppHelper::plugin_url() . '/stripe/';
	}

    public static function plugin_folder() {
        return basename( self::plugin_path() );
    }

	public static function get_gateways() {
		$gateways = array(
			'manual' => array(
				'label' => __( 'Manual', 'formidable' ),
				'user_label' => __( 'Manual', 'formidable' ),
				'class' => 'Trans',
				'recurring' => true,
			),
		);
		$gateways = apply_filters( 'frm_payment_gateways', $gateways );
		return $gateways;
	}

	/**
	 * @param string $gateway
	 * @param string $setting
	 */
	public static function get_setting_for_gateway( $gateway, $setting ) {
		$gateways = self::get_gateways();
		$value = '';
		if ( isset( $gateways[ $gateway ] ) ) {
			$value = $gateways[ $gateway ][ $setting ];
		}
		return $value;
	}

	public static function show_status( $status ) {
		$statuses = array_merge( self::get_payment_statuses(), self::get_subscription_statuses() );
		return isset( $statuses[ $status ] ) ? $statuses[ $status ] : $status;
	}

	public static function get_payment_statuses() {
		return array(
			'authorized' => __( 'Authorized', 'formidable' ),
			'pending'  => __( 'Pending', 'formidable' ),
			'complete' => __( 'Completed', 'formidable' ),
			'failed'   => __( 'Failed', 'formidable' ),
			'refunded' => __( 'Refunded', 'formidable' ),
			'canceled' => __( 'Canceled', 'formidable' ),
		);
	}

	public static function get_subscription_statuses() {
		return array(
			'pending'  => __( 'Pending', 'formidable' ),
			'active'   => __( 'Active', 'formidable' ),
			'future_cancel' => __( 'Canceled', 'formidable' ),
			'canceled' => __( 'Canceled', 'formidable' ),
			'void'     => __( 'Void', 'formidable' ),
		);
	}

	/**
	 * Add a note to payment data that will get saved to the payment meta.
	 * This is called when processing events in the Stripe add on.
	 *
	 * @param array  $payment_values
	 * @param string $message
	 * @return void
	 */
	public static function add_note_to_payment( &$payment_values, $message = '' ) {
		if ( empty( $message ) ) {
			$message = sprintf( __( 'Payment %s', 'formidable' ), $payment_values['status'] );
		}
		$payment_values['meta_value'] = isset( $payment_values['meta_value'] ) ? $payment_values['meta_value'] : array();
		$payment_values['meta_value'] = self::add_meta_to_payment( $payment_values['meta_value'], $message );
	}

	public static function add_meta_to_payment( $meta_value, $note ) {
		$meta_value = (array) maybe_unserialize( $meta_value );
		$meta_value[] = array(
			'message' => $note,
			'date'    => date( 'Y-m-d H:i:s' ),
		);
		return $meta_value;
	}

	public static function get_currency( $currency ) {
		$currencies = self::get_currencies();
		if ( isset( $currencies[ $currency ] ) ) {
			$currency = $currencies[ $currency ];
		} else {
			$currency = $currencies['usd'];
		}
		return $currency;
	}

	public static function get_currencies() {
		$pro_currencies = array();
		if ( is_callable( 'FrmProCurrencyHelper::get_currencies' ) ) {
			$pro_currencies = FrmProCurrencyHelper::get_currencies();
		}

		$currencies = array(
			'aud' => array(
				'name' => __( 'Australian Dollar', 'formidable' ),
				'symbol_left' => '$', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'bdt' => array(
				'name' => __( 'Bangladeshi Taka', 'formidable' ),
				'symbol_left' => '৳', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'brl' => array(
				'name' => __( 'Brazilian Real', 'formidable' ),
				'symbol_left' => 'R$', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => '.', 'decimal_separator' => ',', 'decimals' => 2,
			),
			'cad' => array(
				'name' => __( 'Canadian Dollar', 'formidable' ),
				'symbol_left' => '$', 'symbol_right' => 'CAD', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'cny' => array(
				'name' => __( 'Chinese Renminbi Yuan', 'formidable' ),
				'symbol_left' => '¥', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'czk' => array(
				'name' => __( 'Czech Koruna', 'formidable' ),
				'symbol_left' => '', 'symbol_right' => '&#75;&#269;', 'symbol_padding' => ' ',
				'thousand_separator' => ' ', 'decimal_separator' => ',', 'decimals' => 2,
			),
			'dkk' => array(
				'name' => __( 'Danish Krone', 'formidable' ),
				'symbol_left' => 'Kr', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => '.', 'decimal_separator' => ',', 'decimals' => 2,
			),
			'eur' => array(
				'name' => __( 'Euro', 'formidable' ),
				'symbol_left' => '', 'symbol_right' => '&#8364;', 'symbol_padding' => ' ',
				'thousand_separator' => '.', 'decimal_separator' => ',', 'decimals' => 2,
			),
			'hkd' => array(
				'name' => __( 'Hong Kong Dollar', 'formidable' ),
				'symbol_left' => 'HK$', 'symbol_right' => '', 'symbol_padding' => '',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'huf' => array(
				'name' => __( 'Hungarian Forint', 'formidable' ),
				'symbol_left' => '', 'symbol_right' => 'Ft', 'symbol_padding' => ' ',
				'thousand_separator' => '.', 'decimal_separator' => ',', 'decimals' => 2,
			),
			'inr' => array(
				'name' => __( 'Indian Rupee', 'formidable' ),
				'symbol_left' => '&#8377;', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'ils' => array(
				'name' => __( 'Israeli New Sheqel', 'formidable' ),
				'symbol_left' => '&#8362;', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'jpy' => array(
				'name' => __( 'Japanese Yen', 'formidable' ),
				'symbol_left' => '&#165;', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '', 'decimals' => 0,
			),
			'myr' => array(
				'name' => __( 'Malaysian Ringgit', 'formidable' ),
				'symbol_left' => '&#82;&#77;', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'mxn' => array(
				'name' => __( 'Mexican Peso', 'formidable' ),
				'symbol_left' => '$', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'nzd' => array(
				'name' => __( 'New Zealand Dollar', 'formidable' ),
				'symbol_left' => '$', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'nok' => array(
				'name' => __( 'Norwegian Krone', 'formidable' ),
				'symbol_left' => 'Kr', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => '.', 'decimal_separator' => ',', 'decimals' => 2,
			),
			'pkr' => array(
				'name' => __( 'Pakistani Rupee', 'formidable' ),
				'symbol_left' => '₨', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => '', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'php' => array(
				'name' => __( 'Philippine Peso', 'formidable' ),
				'symbol_left' => 'Php', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'pln' => array(
				'name' => __( 'Polish Zloty', 'formidable' ),
				'symbol_left' => '&#122;&#322;', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => '.', 'decimal_separator' => ',', 'decimals' => 2,
			),
			'gbp' => array(
				'name' => __( 'Pound Sterling', 'formidable' ),
				'symbol_left' => '&#163;', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'sgd' => array(
				'name' => __( 'Singapore Dollar', 'formidable' ),
				'symbol_left' => '$', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'zar' => array(
				'name' => __( 'South African Rand', 'formidable' ),
				'symbol_left'        => 'R',
				'symbol_right'       => '',
				'symbol_padding'     => ' ',
				'thousand_separator' => ' ',
				'decimal_separator'  => '.',
				'decimals'           => 2,
			),
			'lkr' => array(
				'name' => __( 'Sri Lankan Rupee', 'formidable' ),
				'symbol_left' => '₨', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => '', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'sek' => array(
				'name' => __( 'Swedish Krona', 'formidable' ),
				'symbol_left' => '', 'symbol_right' => 'Kr', 'symbol_padding' => ' ',
				'thousand_separator' => ' ', 'decimal_separator' => ',', 'decimals' => 2,
			),
			'chf' => array(
				'name' => __( 'Swiss Franc', 'formidable' ),
				'symbol_left' => 'Fr.', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => "'", 'decimal_separator' => '.', 'decimals' => 2,
			),
			'twd' => array(
				'name' => __( 'Taiwan New Dollar', 'formidable' ),
				'symbol_left' => '$', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'thb' => array(
				'name' => __( 'Thai Baht', 'formidable' ),
				'symbol_left' => '&#3647;', 'symbol_right' => '', 'symbol_padding' => ' ',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
			'try' => array(
				'name' => __( 'Turkish Liras', 'formidable' ),
				'symbol_left' => '', 'symbol_right' => '&#8364;', 'symbol_padding' => ' ',
				'thousand_separator' => '.', 'decimal_separator' => ',', 'decimals' => 2,
			),
			'uyu' => array(
				'name' => __('Uruguayan Peso', 'formidable'),
				'symbol_left' => '$U', 'symbol_right' => '', 'symbol_padding' =>  '',
				'thousand_separator' => '.', 'decimal_separator' => ',', 'decimals' => 0,
			),
			'usd' => array(
				'name' => __( 'U.S. Dollar', 'formidable' ),
				'symbol_left' => '$', 'symbol_right' => '', 'symbol_padding' =>  '',
				'thousand_separator' => ',', 'decimal_separator' => '.', 'decimals' => 2,
			),
		);

		$currencies = array_merge( $currencies, $pro_currencies );
		$currencies = apply_filters( 'frm_currencies', $currencies );
            
		return $currencies;
	}

	/**
	 * @param string $option
	 * @param array $atts
	 */
	public static function get_action_setting( $option, $atts ) {
		$settings = self::get_action_settings( $atts );
		$value = isset( $settings[ $option ] ) ? $settings[ $option ] : '';

		return $value;
	}

	public static function get_action_settings( $atts ) {
		$settings = array();
		if ( isset( $atts['payment'] ) ) {
			$atts['payment'] = (array) $atts['payment'];
			if ( ! empty( $atts['payment']['action_id'] ) ) {
				$form_action = FrmTransLiteAction::get_single_action_type( $atts['payment']['action_id'], 'payment' );
				if ( $form_action ) {
					$settings = $form_action->post_content;
				}
			}
		}

		return $settings;
	}

	public static function get_action_description( $action_id ) {
		_deprecated_function( __FUNCTION__, '1.11', 'FrmTransLiteAppHelper::get_payment_description' );

		$atts = array( 'payment' => compact( 'action_id' ) );
		return self::get_action_setting( 'description', $atts );
	}

	/**
	 * Return the filtered payment description
	 *
	 * @since 1.11
	 *
	 * @param object $subscription
	 *
	 * @return string
	 */
	public static function get_payment_description( $subscription ) {
		$atts = array( 'payment' => array( 'action_id' => $subscription->action_id ) );
		$description = self::get_action_setting( 'description', $atts );

		if ( empty( $description ) ) {
			return '';
		}

		$entry = FrmEntry::getOne( $subscription->item_id, true );

		if ( ! $entry ) {
			return $description;
		}

		$form = FrmForm::getOne( $entry->form_id );

		if ( ! $form ) {
			return $description;
		}

		return self::process_shortcodes( array(
			'value' => $description,
			'form'  => $form,
			'entry' => $entry,
		) );
	}

	/**
	 * Allow entry values, default values, and other shortcodes
	 *
	 * @param array $atts - Includes value (required), form, entry
	 * @return string|int
	 */
	public static function process_shortcodes( $atts ) {
		$value = $atts['value'];
		if ( strpos( $value, '[' ) === false ) {
			return $value;
		}

		if ( is_callable( 'FrmProFieldsHelper::replace_non_standard_formidable_shortcodes' ) ) {
			FrmProFieldsHelper::replace_non_standard_formidable_shortcodes( array(), $value );
		}

		if ( isset( $atts['entry'] ) && ! empty( $atts['entry'] ) ) {
			if ( ! isset( $atts['form'] ) ) {
				$atts['form'] = FrmForm::getOne( $atts['entry']->form_id );
			}
			$value = apply_filters( 'frm_content', $value, $atts['form'], $atts['entry'] );
		}

		$value = do_shortcode( $value );
		return $value;
	}

	/**
	 * @param object $sub
	 * @return string
	 */
	public static function format_billing_cycle( $sub ) {
		$amount = FrmTransLiteAppHelper::formatted_amount( $sub );
		$interval = self::get_repeat_label_from_value( $sub->time_interval, $sub->interval_count );
		if ( $sub->interval_count == 1 ) {
			$amount = $amount . '/' . $interval;
		} else {
			$amount = $amount . ' every ' . $sub->interval_count . ' ' . $interval;
		}
		return $amount;
	}

	/**
	 * @return array
	 */
	public static function get_repeat_times() {
		return array(
			'day'   => __( 'day(s)', 'formidable' ),
			'week'  => __( 'week(s)', 'formidable' ),
			'month' => __( 'month(s)', 'formidable' ),
			'year'  => __( 'year(s)', 'formidable' ),
		);
	}

	/**
	 * @since 1.16
	 *
	 * @param int $number
	 * @return array
	 */
	private static function get_plural_repeat_times( $number ) {
		return array(
			'day'   => _n( 'day', 'days', $number, 'formidable' ),
			'week'  => _n( 'week', 'weeks', $number, 'formidable' ),
			'month' => _n( 'month', 'months', $number, 'formidable' ),
			'year'  => _n( 'year', 'years', $number, 'formidable' ),
		);
	}

	/**
	 * @since 1.16
	 *
	 * @param string $value
	 * @param int $number
	 * @return string
	 */
	public static function get_repeat_label_from_value( $value, $number ) {
		$times = self::get_plural_repeat_times( $number );
		if ( isset( $times[ $value ] ) ) {
			$value = $times[ $value ];
		}
		return $value;
	}

	/**
	 * @return string
	 */
	public static function formatted_amount( $payment ) {
		$currency = 'usd';
		$amount = $payment;

		if ( is_object( $payment ) || is_array( $payment ) ) {
			$payment = (array) $payment;
			$amount = $payment['amount'];
			$currency = self::get_action_setting( 'currency', array( 'payment' => $payment ) );
		}

		$currency = self::get_currency( $currency );

		self::format_amount_for_currency( $currency, $amount );

		return $amount;
	}

	/**
	 * @param array $currency
	 * @param float $amount
	 * @return string
	 */
	public static function format_amount_for_currency( $currency, &$amount ) {
		$amount = number_format( $amount, $currency['decimals'], $currency['decimal_separator'], $currency['thousand_separator'] );
		$left_symbol = $currency['symbol_left'] . $currency['symbol_padding'];
		$right_symbol = $currency['symbol_padding'] . $currency['symbol_right'];
		$amount = $left_symbol . $amount . $right_symbol;
	}

	/**
	 * @return string
	 */
	public static function get_date_format() {
		$date_format = 'm/d/Y';
		if ( class_exists('FrmProAppHelper') ){
			$frmpro_settings = FrmProAppHelper::get_settings();
			if ( $frmpro_settings ) {
				$date_format = $frmpro_settings->date_format;
			}
		} else {
			$date_format = get_option('date_format');
		}

		return $date_format;
	}

	/**
	 * @param string $date
	 * @param string $format
	 *
	 * @return string
	 */
	public static function format_the_date( $date, $format = '' ) {
		if ( empty( $format ) ) {
			$format = self::get_date_format();
		}
		return date_i18n( $format, strtotime( $date ) );
	}

	/**
	 * When a user is created at the same time payment is made,
	 * they won't be logged in yet. The user ID is in $_POST['frm_user_id']
	 *
	 * @return int
	 */
	public static function get_user_id_for_current_payment() {
		$user_id = 0;
		if ( is_user_logged_in() ) {
			$user_id = get_current_user_id();
		} elseif ( $_POST && isset( $_POST['frm_user_id'] ) ) {
			// TODO Pull this logic from Pro or something, and check that a regisration action is active.
		}
		return $user_id;
	}

	/**
	 * @param int $user_id
	 *
	 * @return string
	 */
	public static function get_user_link( $user_id ) {
		$user_link = __( 'Guest', 'formidable' );
		if ( $user_id ) {
			$user = get_userdata( $user_id );
			if ( $user ) {
				$user_link = '<a href="' . esc_url( admin_url('user-edit.php?user_id=' . $user_id ) ) . '">' . $user->display_name . '</a>';
			}
		}
		return $user_link;
	}

	public static function show_in_table( $value, $label ) {
		if ( ! empty( $value ) ) { ?>
			<tr valign="top">
				<th scope="row"><?php echo esc_html( $label ); ?>:</th>
				<td>
					<?php echo esc_html( $value ); ?>
				</td>
			</tr>
			<?php
		}
	}

	/**
	 * Echo a link that includes a data-deleteconfirm attribute.
	 * This includes refund links and links to cancel a subscription.
	 *
	 * @since x.x
	 *
	 * @param string $link
	 * @return void
	 */
	public static function echo_confirmation_link( $link ) {
		$filter = __CLASS__ . '::allow_deleteconfirm_data_attribute';
		add_filter( 'frm_striphtml_allowed_tags', $filter );
		echo FrmAppHelper::kses( $link, array( 'a' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		remove_filter( 'frm_striphtml_allowed_tags', $filter );
	}

	/**
	 * Allow the data-deleteconfirm attribute for confirmation links.
	 * The attribute is used for the confirmation message.
	 *
	 * @since x.x
	 *
	 * @param array $allowed
	 * @return array
	 */
	public static function allow_deleteconfirm_data_attribute( $allowed ) {
		$allowed['a']['data-deleteconfirm'] = true;
		return $allowed;
	}
}
