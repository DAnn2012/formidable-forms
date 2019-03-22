<div class="frm-right-panel">
	<div class="frm_field_list">
		<ul id="frm-nav-tabs">
			<li class="frm-tabs">
				<a href="#frm-insert-fields" id="frm_insert_fields_tab">
					<?php esc_html_e( 'Add Fields', 'formidable' ); ?>
				</a>
			</li>
			<li class="hide-if-no-js">
				<a href="#frm-options-panel" id="frm-options-panel-tab">
					<?php esc_html_e( 'Field Options', 'formidable' ); ?>
				</a>
			</li>
			<?php do_action( 'frm_extra_form_instruction_tabs' ); ?>
		</ul>

		<div id="frm-insert-fields" class="tabs-panel">
			<ul class="field_type_list">
				<?php
				foreach ( $frm_field_selection as $field_key => $field_type ) {
					$field_label = FrmFormsHelper::get_field_link_name( $field_type );
					?>
					<li class="frmbutton <?php echo esc_attr( ' frm_t' . $field_key ); ?>" id="<?php echo esc_attr( $field_key ); ?>">
						<a href="#" class="frm_add_field frm_animate_bg" title="<?php echo esc_html( $field_label ); ?>">
							<i class="<?php echo esc_attr( FrmFormsHelper::get_field_link_icon( $field_type ) ); ?> frm_animate_bg"></i>
							<span><?php echo esc_html( $field_label ); ?></span>
						</a>
					</li>
					<?php
					unset( $field_key, $field_type );
				}
				?>
			</ul>
			<div class="clear"></div>
			<?php FrmTipsHelper::pro_tip( 'get_builder_tip' ); ?>
			<h3 class="frm-advanced-fields">
				<?php esc_html_e( 'Advanced Fields', 'formidable' ); ?>
			</h3>
			<ul class="field_type_list">
<?php

$no_allow_class = apply_filters( 'frm_noallow_class', 'frm_noallow' );
if ( $no_allow_class === 'frm_noallow' ) {
	$no_allow_class .= ' frm_show_upgrade';
}
FrmAppController::include_upgrade_overlay();

foreach ( FrmField::pro_field_selection() as $field_key => $field_type ) {

	if ( is_array( $field_type ) && isset( $field_type['switch_from'] ) ) {
		continue;
	}

	if ( is_array( $field_type ) && isset( $field_type['types'] ) ) {
		$field_label = $field_type['name'];

		?>
				<li class="frmbutton <?php echo esc_attr( $no_allow_class . ' frm_t' . $field_key ); ?> dropdown" id="<?php echo esc_attr( $field_key ); ?>">
					<a href="#" id="frm-<?php echo esc_attr( $field_key ); ?>Drop" class="frm-dropdown-toggle" data-toggle="dropdown" title="<?php echo esc_html( $field_label ); ?>">
						<i class="<?php echo esc_attr( FrmFormsHelper::get_field_link_icon( $field_type ) ); ?> frm_animate_bg"></i>
						<span><?php echo esc_html( $field_label ); ?> <b class="caret"></b></span>
					</a>

					<ul class="frm-dropdown-menu" role="menu" aria-labelledby="frm-<?php echo esc_attr( $field_key ); ?>Drop">
					<?php foreach ( $field_type['types'] as $k => $type ) { ?>
						<li class="frm_t<?php echo esc_attr( $field_key ); ?>" id="<?php echo esc_attr( $field_key ); ?>|<?php echo esc_attr( $k ); ?>">
							<?php echo FrmAppHelper::kses( apply_filters( 'frmpro_field_links', $type, $id, $field_key . '|' . $k ), array( 'a', 'i', 'span' ) ); // WPCS: XSS ok. ?>
						</li>
						<?php
						unset( $k, $type );
					}
					?>
					</ul>
				</li>
		<?php
	} else {
		$field_label = '<i class="' . esc_attr( FrmFormsHelper::get_field_link_icon( $field_type ) ) . ' frm_animate_bg"></i>';
		$field_name  = FrmFormsHelper::get_field_link_name( $field_type );
		$field_label .= ' <span>' . $field_name . '</span>';

		/* translators: %s: Field name */
		$upgrade_label = sprintf( esc_html__( '%s fields', 'formidable' ), $field_name );

		// If the individual field isn't allowed, disable it.
		$run_filter      = true;
		$single_no_allow = ' ';
		$install_data    = '';
		if ( strpos( $field_type['icon'], ' frm_show_upgrade' ) ) {
			$single_no_allow   .= 'frm_show_upgrade';
			$field_type['icon'] = str_replace( ' frm_show_upgrade', '', $field_type['icon'] );
			$run_filter         = false;
			if ( isset( $field_type['addon'] ) ) {
				$upgrading = FrmAddonsController::install_link( $field_type['addon'] );
				if ( isset( $upgrading['url'] ) ) {
					$install_data = json_encode( $upgrading );
				}
			}
		}
		?>
					<li class="frmbutton <?php echo esc_attr( $no_allow_class . $single_no_allow . ' frm_t' . str_replace( '|', '-', $field_key ) ); ?>" id="<?php echo esc_attr( $field_key ); ?>" data-upgrade="<?php echo esc_attr( $upgrade_label ); ?>" data-medium="builder" data-oneclick="<?php echo esc_attr( $install_data ); ?>" data-content="<?php echo esc_attr( $field_key ); ?>">
		<?php
		if ( $run_filter ) {
			echo FrmAppHelper::kses( apply_filters( 'frmpro_field_links', $field_label, $id, $field_key ), array( 'a', 'i', 'span' ) ); // WPCS: XSS ok.
		} else {
			echo FrmAppHelper::kses( $field_label, array( 'i', 'span' ) ); // WPCS: XSS ok.
		}
		?>
					</li>
		<?php
	}

	unset( $field_key, $field_type, $field_label );
}
?>
			</ul>
			<div class="clear"></div>
		</div>
		<?php do_action( 'frm_extra_form_instructions' ); ?>

		<div id="frm-options-panel" class="tabs-panel frm_hidden">
			<div class="frm-single-settings">
				<?php esc_html_e( 'Select a field to see the options', 'formidable' ); ?>
			</div>
			<form method="post" id="frm_build_form">
				<input type="hidden" name="frm_action" value="update" />
				<input type="hidden" name="action" value="update" />
				<input type="hidden" name="id" id="form_id" value="<?php echo esc_attr( $values['id'] ); ?>" />
				<?php wp_nonce_field( 'frm_save_form_nonce', 'frm_save_form' ); ?>
				<input type="hidden" id="frm-end-form-marker" name="frm_end" value="1" />
			</form>
		</div>
		<div id="frm-layout-classes" class="tabs-panel frm_hidden">
			<ul>
				<li class="frm_show_inactive">
					<?php esc_html_e( 'Click inside the "CSS layout classes" field option in any field to enable the options below.', 'formidable' ); ?>
				</li>
				<li class="frm_show_active frm_hidden">
					<?php esc_html_e( 'Click on any box below to set the width for your selected field.', 'formidable' ); ?>
				</li>
			</ul>
			<ul class="frm_code_list frm_grid_container">
				<li class="frm_half frm_form_field">
					<a href="javascript:void(0);" data-code="frm_half" class="frm_insert_code show_frm_classes">
						1/2
					</a>
				</li>
				<?php
				foreach ( FrmFormsHelper::grid_classes() as $c => $d ) {
					?>
					<li class="<?php echo esc_attr( $c ); ?> frm_form_field">
						<a href="javascript:void(0);" data-code="<?php echo esc_attr( $c ); ?>" class="frm_insert_code show_frm_classes">
							<?php echo esc_html( FrmFormsHelper::style_class_label( $d, $c ) ); ?>
						</a>
					</li>
					<?php
					unset( $c, $d );
				}
				?>
			</ul>
			<ul class="frm_code_list">
			<?php
			$col = 'one';
			foreach ( FrmFormsHelper::css_classes() as $c => $d ) {
				$title = ( ! empty( $d ) && is_array( $d ) && isset( $d['title'] ) ) ? $d['title'] : '';
				?>
				<li class="frm_col_<?php echo esc_attr( $col ); ?>">
					<a href="javascript:void(0);" data-code="<?php echo esc_attr( $c ); ?>" class="frmbutton button frm_insert_code show_frm_classes<?php echo esc_attr( ! empty( $title ) ? ' frm_help' : '' ); ?>" <?php echo ( ! empty( $title ) ? ' title="' . esc_attr( $title ) . '"' : '' ); ?>>
						<?php echo esc_html( FrmFormsHelper::style_class_label( $d, $c ) ); ?>
					</a>
				</li>
				<?php
				$col = ( 'one' === $col ) ? 'two' : 'one';
				unset( $c, $d );
			}
			?>
			</ul>
		</div>
	</div>

	<form method="post" id="frm_js_build_form">
		<input type="hidden" id="frm_compact_fields" name="frm_compact_fields" value="" />
		<button class="frm_submit_form frm_submit_<?php echo esc_attr( ( isset( $values['ajax_load'] ) && $values['ajax_load'] ) ? '' : 'no_' ); ?>ajax frm_hidden frm_button_submit" type="button" id="frm_submit_side"><?php esc_html_e( 'Update', 'formidable' ); ?></button>
	</form>
</div>
