<?php

class FrmTransLiteEntriesController {

	/**
	 * Include payment details in the entry sidebar.
	 *
	 * @param stdClass $entry
	 * @return void
	 */
	public static function sidebar_list( $entry ) {
		remove_action( 'frm_show_entry_sidebar', 'FrmPaymentsController::sidebar_list' );

		$frm_payment = new FrmTransLitePayment();
		$payments    = $frm_payment->get_all_for_entry( $entry->id );
		if ( ! $payments ) {
			return;
		}

		$frm_sub       = new FrmTransLiteSubscription();
		$subscriptions = $frm_sub->get_all_for_entry( $entry->id );
		$entry_total   = 0;
		$date_format   = get_option( 'date_format' );

		include FrmTransLiteAppHelper::plugin_path() . '/views/payments/sidebar_list.php';
	}
}
