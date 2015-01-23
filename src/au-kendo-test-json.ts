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

    attached() {
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
        dataSource.bind("change", (e) => {
            this.items = dataSource.view();
        });

        $("#pager").kendoPager({
            dataSource: dataSource
        });
    }
}

// http://demos.telerik.com/kendo-ui/content/shared/js/products.js