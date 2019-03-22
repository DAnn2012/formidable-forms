<div id="frm_form_editor_container">

	<div class="frm_no_fields <?php echo ( isset( $values['fields'] ) && ! empty( $values['fields'] ) ) ? 'frm_hidden' : ''; ?>">

		<div class="frm_drag_inst">
			<?php esc_html_e( 'Add Fields Here', 'formidable' ); ?>
		</div>
		<p>
			<?php esc_html_e( 'Click or drag a field from the sidebar to add it to your form', 'formidable' ); ?>
		</p>
		<div class="clear"></div>
	</div>

	<div id="frm-fake-page" class="frm_hidden">
		<div class="frm-page-break">
			<div class="frm-collapse-page button frm-button-secondary">
				<?php
				/* translators: %s: The page number */
				printf( esc_html__( 'Page %s', 'formidable' ), '<span class="frm-page-num">1</span>' ) ;
				?>
				<i class="fas fa-chevron-down"></i>
			</div>
		</div>
	</div>

	<ul id="new_fields" class="frm_sorting inside">
		<?php
		if ( isset( $values['fields'] ) && ! empty( $values['fields'] ) ) {
			$values['count'] = 0;
			foreach ( $values['fields'] as $field ) {
				$values['count']++;
				FrmFieldsController::load_single_field( $field, $values );
				unset( $field );
			}
		}
		?>
	</ul>
</div>
