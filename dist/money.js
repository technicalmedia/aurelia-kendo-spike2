define(["require", "exports"], function(require, exports) {
    var MoneyValueConverter = (function () {
        function MoneyValueConverter() {
        }
        MoneyValueConverter.prototype.toView = function (value, option) {
            return kendo.toString(value, 'c');
        };
        return MoneyValueConverter;
    })();
    exports.MoneyValueConverter = MoneyValueConverter;
});
