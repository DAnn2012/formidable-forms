<?php

class FrmTransLiteListsController {

	/**
	 * @return void
	 */
	public static function add_list_hooks() {
		if ( ! class_exists( 'FrmAppHelper' ) ) {
			return;
		}

		$frm_settings = FrmAppHelper::get_settings();

		add_filter( 'manage_' . sanitize_title( $frm_settings->menu ) . '_page_formidable-payments_columns', 'FrmTransLiteListsController::payment_columns' );
	}

	/**
	 * @param array $columns
	 * @return array
	 */
	public static function payment_columns( $columns = array() ) {
		add_screen_option(
			'per_page',
			array(
				'label'   => __( 'Payments', 'formidable' ),
				'default' => 20,
				'option'  => 'formidable_page_formidable_payments_per_page',
			)
		);

		$type = isset( $_REQUEST['trans_type'] ) ? $_REQUEST['trans_type'] : 'payments';

		$columns['cb']      = '<input type="checkbox" />';
		$columns['user_id'] = __( 'Customer', 'formidable' );

		if ( 'subscriptions' === $type ) {
			$add_columns = array(
				'sub_id'     => __( 'Profile ID', 'formidable' ),
				'item_id'    => __( 'Entry', 'formidable' ),
				'form_id'    => __( 'Form', 'formidable' ),
				'amount'     => __( 'Billing Cycle', 'formidable' ),
				'end_count'      => __( 'Payments Made', 'formidable' ),
				'next_bill_date' => __( 'Next Bill Date', 'formidable' ),
			);
		} else {
			$add_columns = array(
				'receipt_id' => __( 'Receipt ID', 'formidable' ),
				'item_id'    => __( 'Entry', 'formidable' ),
				'form_id'    => __( 'Form', 'formidable' ),
				'amount'     => __( 'Amount', 'formidable' ),
				'sub_id'     => __( 'Subscription', 'formidable' ),
				'begin_date' => __( 'Begin Date', 'formidable' ),
				'expire_date' => __( 'Expire Date', 'formidable' ),
			);
		}

		$columns = $columns + $add_columns;

		$columns['status']     = __( 'Status', 'formidable' );
		$columns['created_at'] = __( 'Date', 'formidable' );
		$columns['paysys']     = __( 'Processor', 'formidable' );

		return $columns;
	}

	public static function save_per_page( $save, $option, $value ) {
		if ( $option === 'formidable_page_formidable_payments_per_page' ) {
			$save = absint( $value );
		}
		return $save;
	}

	/**
	 * Handle payment/subscription list routing.
	 *
	 * @param string $action
	 * @return void
	 */
	public static function route( $action ) {
		self::display_list();
	}

	/**
	 * Maybe process bulk actions.
	 *
	 * @param string $action
	 * @return void
	 */
	private static function bulk_actions( $action ) {
		$response = array(
			'errors'  => array(),
			'message' => '',
		);

		$items = FrmAppHelper::get_param( 'item-action', '' );
		if ( empty( $items ) ) {
			$response['errors'][] = __( 'No payments were selected', 'formidable' );
		} else {
			if ( ! is_array( $items ) ) {
				$items = explode( ',', $items );
			}

			$bulkaction = str_replace( 'bulk_', '', $action );
			if ( $bulkaction === 'delete' ) {
				self::bulk_delete( $items, $response );
			}
		}

		self::display_list( $response );
	}

	/**
	 * Handle bulk deleting payments.
	 *
	 * @param array $items
	 * @param array $response
	 * @return void
	 */
	private static function bulk_delete( $items, &$response ) {
		if ( ! current_user_can( 'frm_delete_entries' ) ) {
			$frm_settings         = FrmAppHelper::get_settings();
			$response['errors'][] = $frm_settings->admin_permission;
			return;
		}

		if ( is_array( $items ) ) {
			$frm_payment = new FrmTransLitePayment();
			foreach ( $items as $item_id ) {
				if ( $frm_payment->destroy( absint( $item_id ) ) ) {
					$response['message'] = __( 'Payments were Successfully Deleted', 'formidable' );
				}
			}
		}
	}

	/**
	 * @return array
	 */
	public static function list_page_params() {
		$values = array();
		foreach ( array( 'id' => '', 'paged' => 1, 'form' => '', 'search' => '', 'sort' => '', 'sdir' => '' ) as $var => $default ) {
			$values[ $var ] = FrmAppHelper::get_param( $var, $default );
		}

		return $values;
	}

	/**
	 * Display a list.
	 *
	 * @param array $response
	 * @return void
	 */
	public static function display_list( $response = array() ) {
		$defaults = array( 'errors' => array(), 'message' => '' );
		$response = array_merge( $defaults, $response );
		$errors   = $response['errors'];
		$message  = $response['message'];

		$wp_list_table = new FrmTransLiteListHelper( self::list_page_params() );

		$pagenum = $wp_list_table->get_pagenum();

		$wp_list_table->prepare_items();

		$total_pages = $wp_list_table->get_pagination_arg( 'total_pages' );
		if ( $pagenum > $total_pages && $total_pages > 0 ) {
			// if the current page is higher than the total pages,
			// reset it and prepare again to get the right entries
			$_GET['paged'] = $_REQUEST['paged'] = $total_pages;
			$pagenum       = $wp_list_table->get_pagenum();
			$wp_list_table->prepare_items();
		}

		include FrmTransLiteAppHelper::plugin_path() . '/views/lists/list.php';
	}
}
