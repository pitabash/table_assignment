sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "wipro/tableassignment/utils/Formatter"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,Formatter) {
		"use strict";

		return Controller.extend("wipro.tableassignment.controller.Overview", {
			onInit: function () {

            },
            formatter : Formatter,
            onRowSelect : function(oEvent){
				
                var sPath = oEvent.getParameter("rowContext").sPath;
            
                 var oDetailView = sap.ui.getCore().byId("container-table_assignment---idDetail");

               
                 
                 var oSimpleForm = oDetailView.byId("idForm");
                 oSimpleForm.bindElement(sPath);
                this.getOwnerComponent().getRouter().navTo("detail");
            },
            
		});
	});
