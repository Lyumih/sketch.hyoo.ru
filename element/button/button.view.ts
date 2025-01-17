namespace $.$$ {

	export class $hyoo_sketch_element_button extends $.$hyoo_sketch_element_button {

		@ $mol_mem
		Element() {
			const button = this.button_type() === 'major' ? this.Button_major() : this.Button_minor()
			return button as $mol_button
		}

		button_type(next?: string) {
			return this.state().sub('button_type', $hyoo_crowd_reg).str(next) || super.button_type()
		}

		click() {
			const action = this.Nav().nav_action()
			const target_page = this.Nav().nav_target_page()
			const target_link = this.Nav().nav_target_link()

			if (action === 'none') return

			if (action === 'open') {
				this.Nav().nav_page_open( target_page )
			}

			if (action === 'close') {
				this.Nav().nav_page_close( target_page || this.page().id() )
			}

			if (action === 'replace') {
				this.Nav().nav_page_replace( target_page )
			}

			if (action === 'external') {
				$mol_dom_context.open(target_link, '_blank')
			}
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_button
			obj.element = $mol_const(element)

			obj.button_type(this.button_type())

			this.Text().duplicate(element)
			this.Nav().duplicate(element)

			return element
		}

	}

}
