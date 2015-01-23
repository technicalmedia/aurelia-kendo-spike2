define(["require", "exports", "aurelia-framework"], function(require, exports, auf) {
    var MoneyValueConverter = (function () {
        function MoneyValueConverter() {
        }
        MoneyValueConverter.annotations = function () {
            return [new auf.ValueConverter("money")];
        };

        MoneyValueConverter.prototype.toView = function (value, option) {
            return value * 2;
        };
        return MoneyValueConverter;
    })();
    exports.MoneyValueConverter = MoneyValueConverter;
});
