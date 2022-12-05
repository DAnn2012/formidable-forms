<?php
if ( ! defined( 'ABSPATH' ) ) {
	die( 'You are not allowed to call this page directly.' );
}
// This is the view for the "style page" where you can assign a style to a form and view the list of style templates.
// It is accessed from /wp-admin/admin.php?page=formidable-styles&frm_action=edit&form=782

?>
<div id="frm_style_preview">
	<div id="frm_active_style_form">
		<?php
		// The right side body shows a preview (of the target form) so you can see the form you're actually styling.
		add_filter( 'frm_is_admin', '__return_false' ); // Force is_admin to false so the "Entry Key" field doesn't render in the preview.

		// Filter form classes so the form uses the preview style, not the form's active style.
		add_filter(
			'frm_add_form_style_class',
			function( $class ) use ( $style ) {
				$split = array_filter(
					explode( ' ', $class ),
					/**
					 * @param string $class
					 */
					function( $class ) {
						return $class && 0 !== strpos( $class, 'frm_style_' );
					}
				);
				$split[] = 'frm_style_' . $style->post_name;
				return implode( ' ', $split );
			}
		);

		echo FrmFormsController::show_form(  $form->id, '', 'auto', 'auto' );
		?>
	</div>
	<?php // Add a sample form to toggle between. This is toggled by the #frm_toggle_sample_form below this. ?>
	<div id="frm_sample_form" class="frm_hidden">
		<?php 
		$style        = $default_style;
		$frm_settings = $frm_settings = FrmAppHelper::get_settings();
		include $style_views_path . '_sample_form.php';
		?>
	</div>
	<?php if ( 'edit' !== $view ) { ?>
		<a href="<?php echo esc_url( admin_url( 'admin.php?page=formidable-styles&frm_action=edit&form=' . $form->id ) ); ?>" id="frm_edit_style" class="frm_floating_style_button" tabindex="0" role="button">
			<?php FrmAppHelper::icon_by_class( 'frmfont frm_pencil_icon', array( 'echo' => true ) ); ?> <?php esc_html_e( 'Edit style', 'formidable' ); ?>
		</a>
	<?php } ?>
	<button id="frm_toggle_sample_form" class="frm_floating_style_button">
		<?php FrmAppHelper::icon_by_class( 'frmfont frm_sample_form_icon', array( 'echo' => true ) ); ?> <span><?php esc_html_e( 'View sample form', 'formidable' ); ?></span>
	</button>
</div>
