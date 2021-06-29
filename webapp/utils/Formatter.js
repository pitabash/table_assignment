sap.ui.define(
    ["sap/ui/core/format/NumberFormat"],
     function(NumberFormat) {
    'use strict';
    
    return {
        getMeName : function(inp){
			if(inp){
				return inp.toUpperCase();
			}
		},

        getFormattedCurrency : function(salary,currency){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
    		currencyCode: false
		});

            var res = oCurrencyFormat.format(salary, currency); // returns $1,234.57
            return res;
		}
        
    };

});