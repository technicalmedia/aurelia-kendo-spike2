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
        AuKendoTest.prototype.activate = function () {
            var _this = this;
            console.log("au-kendo-test activate :)");

            var promise = new Promise(function (resolve, reject) {
                _this.dataSource = new kendo.data.DataSource({
                    type: "json",
                    transport: {
                        read: "./dist/services/products.json"
                    },
                    pageSize: 21
                });
                _this.dataSource.fetch();

                _this.items = _this.dataSource.view();
                _this.dataSource.bind("change", function (e) {
                    _this.items = _this.dataSource.view();
                    resolve();
                });
            });

            return promise;
        };
        return AuKendoTest;
    })();
    exports.AuKendoTest = AuKendoTest;
});
// http://demos.telerik.com/kendo-ui/content/shared/js/products.js
