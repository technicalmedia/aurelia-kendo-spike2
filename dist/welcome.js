define(["require", "exports"], function(require, exports) {
    /// <reference path="../Scripts/typings/aurelia/aurelia.d.ts"/>
    var Welcome = (function () {
        function Welcome() {
            this.heading = "Welcome to the Aurelia Navigation App (VS/TS)!";
            this.firstName = "John";
            this.lastName = "Doe";
        }
        Object.defineProperty(Welcome.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });

        Welcome.prototype.welcome = function () {
            alert("Welcome, " + this.fullName + "!");
        };
        return Welcome;
    })();
    exports.Welcome = Welcome;
});
