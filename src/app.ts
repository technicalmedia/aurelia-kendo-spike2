/// <reference path="../Scripts/typings/aurelia/aurelia.d.ts"/>
import aur = require("aurelia-router");

export class App {
    static inject = [aur.Router];

    constructor(private router:aur.Router) {
        this.router.configure((config) => {
            config.title = "Aurelia VS/TS";
            config.map([
                {route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome to VS/TS"},
                {route: "flickr", moduleId: "flickr", nav: true},
                {route: "child-router", moduleId: "child-router", nav: true, title: "Child Router"},
                {route: ["kendo-test"], moduleId: "kendo-test", nav: true, title: "Kendo Test"},
                {route: ["kendo-test-json"], moduleId: "kendo-test-json", nav: true, title: "Kendo Test json"},
                {route: ["au-kendo-test-json"], moduleId: "au-kendo-test-json", nav: true, title: "Aurelia Kendo DataSource Test"}

            ]);
        });
    }
}
