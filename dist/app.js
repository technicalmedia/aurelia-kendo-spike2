define(["require", "exports", "aurelia-router"], function(require, exports, aur) {
    var App = (function () {
        function App(router) {
            this.router = router;
            this.router.configure(function (config) {
                config.title = "Aurelia VS/TS";
                config.map([
                    { route: ["", "welcome"], moduleId: "welcome", nav: true, title: "Welcome to VS/TS" },
                    { route: "flickr", moduleId: "flickr", nav: true },
                    { route: "child-router", moduleId: "child-router", nav: true, title: "Child Router" },
                    { route: ["kendo-test"], moduleId: "kendo-test", nav: true, title: "Kendo Test" },
                    { route: ["kendo-test-json"], moduleId: "kendo-test-json", nav: true, title: "Kendo Test json" },
                    { route: ["au-kendo-test-json"], moduleId: "au-kendo-test-json", nav: true, title: "Aurelia Kendo DataSource Test" }
                ]);
            });
        }
        App.inject = [aur.Router];
        return App;
    })();
    exports.App = App;
});
