define(["require", "exports", "aurelia-framework"], function(require, exports, au) {
    var HelloWorld = (function () {
        function HelloWorld() {
        }
        HelloWorld.annotations = function () {
            return [new au.CustomElement('hello-world'), new au.Property("name", "callBack")];
        };

        HelloWorld.prototype.callBack = function (val) {
            console.log(val);
        };
        return HelloWorld;
    })();
    exports.HelloWorld = HelloWorld;
});
