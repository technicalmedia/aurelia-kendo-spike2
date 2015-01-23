/// <reference path="../Scripts/typings/aurelia/aurelia.d.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/kendo/kendo.all.d.ts"/>
/// <reference path="services/products.ts"/>
define(["require", "exports"], function(require, exports) {
    var KendoTest = (function () {
        function KendoTest() {
            console.log("kendo-test constructed :)");
        }
        KendoTest.prototype.attached = function () {
            console.log("kendo-test attached :)");

            var dataSource = new kendo.data.DataSource({
                type: "json",
                transport: {
                    read: "./dist/services/products.json"
                },
                pageSize: 21
            });

            $("#pager").kendoPager({
                dataSource: dataSource
            });

            $("#listView").kendoListView({
                dataSource: dataSource,
                template: kendo.template($("#template").html())
            });
        };
        return KendoTest;
    })();
    exports.KendoTest = KendoTest;
});
// http://demos.telerik.com/kendo-ui/content/shared/js/products.js
