/// <reference path="../Scripts/typings/aurelia/aurelia.d.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>
/// <reference path="../Scripts/typings/kendo/kendo.all.d.ts"/>
/// <reference path="services/products.ts"/>

import products = require("./services/products");

export class AuKendoTest {
    constructor() {
        console.log("au-kendo-test constructed :)");
    }

    items: Array = [];
    dataSource: kendo.data.DataSource;

    activate() {

        console.log("au-kendo-test activate :)");

        var promise = new Promise((resolve, reject) => {

            this.dataSource = new kendo.data.DataSource({
                type: "json",
                transport: {
                    read: "./dist/services/products.json"
                },
                pageSize: 21
            });
            this.dataSource.fetch();

            this.items = this.dataSource.view();
            this.dataSource.bind("change", (e) => {
                this.items = this.dataSource.view();
                resolve();
            });
        });

        return promise;
    }

    bind() {
        console.log("au-kendo-test-json in bind :)");
    }
}

// http://demos.telerik.com/kendo-ui/content/shared/js/products.js