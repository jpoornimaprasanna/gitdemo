sap.ui.controller("listReport1.ext.controller.ListReportExt", {

	onClickActionEmployees1: function (oEvent) {
		var oView = this.getView();
		var oDialog = oView.byId("idSelEmployees");
		if (!oDialog) {
			oDialog = sap.ui.xmlfragment(oView.getId(), "inventory.Inventory.view.tlDescription", this);
			oView.addDependent(oDialog);
		}
		oDialog.open();
	},
	onClickActionEmployees2: function (oEvent) {}
});