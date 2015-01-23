/// <reference path="../Scripts/typings/aurelia/aurelia.d.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/kendo/kendo.all.d.ts"/>
/// <reference path="services/products.ts"/>
define(["require", "exports"], function(require, exports) {
    var AuKendoTest = (function () {
        function AuKendoTest() {
            this.items = [];
            console.log("au-kendo-test constructed :)");
        }
        AuKendoTest.prototype.attached = function () {
            var _this = this;
            console.log("au-kendo-test attached :)");

            var dataSource = new kendo.data.DataSource({
                type: "json",
                transport: {
                    read: "./dist/services/products.json"
                },
                pageSize: 21
            });
            dataSource.fetch();

            this.items = dataSource.view();
            dataSource.bind("change", function (e) {
                _this.items = dataSource.view();
            });

            $("#pager").kendoPager({
                dataSource: dataSource
            });
        };
        return AuKendoTest;
    })();
    exports.AuKendoTest = AuKendoTest;
});
// http://demos.telerik.com/kendo-ui/content/shared/js/products.js
