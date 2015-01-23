define(["require", "exports", "aurelia-framework"], function(require, exports, au) {
    var NavBar = (function () {
        function NavBar() {
        }
        NavBar.metadata = au.Behavior.withProperty("router");
        return NavBar;
    })();
    exports.NavBar = NavBar;
});
