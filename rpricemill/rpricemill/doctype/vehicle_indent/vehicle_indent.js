// Copyright (c) 2021, Aerele Technologies Private Limited and contributors
// For license information, please see license.txt

frappe.ui.form.on('Vehicle Indent', {
	onload: function(frm) {
		frm.fields_dict['vehicle_indent_details'].grid.get_field("account").get_query = function(doc) {
			return {
			  filters:  {
				"company" : frm.doc.company,
			  },
			};
		}
	}
});

