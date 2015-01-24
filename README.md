# aurelia-kendo-spike2
new spike into making kendo work with aurelia

## notice that the value converter is working:

* [view with value converter reference](https://github.com/technicalmedia/aurelia-kendo-spike2/blob/master/src/au-kendo-test-json.html#L14)
* [view model](https://github.com/technicalmedia/aurelia-kendo-spike2/blob/master/src/au-kendo-test-json.ts#L8)
* [money value converter](https://github.com/technicalmedia/aurelia-kendo-spike2/blob/master/src/money.ts#L5)

## kendoPager example of Aurelia GlobalBehavior usage

1. [added aurelia-templating-resources as 1st level jspm dependency](https://github.com/technicalmedia/aurelia-kendo-spike2/blob/master/config.js#L16)
2. [app.ts: import templating-resources](https://github.com/technicalmedia/aurelia-kendo-spike2/blob/master/src/app.ts#L3)
3. [app.ts: register kendoPager with GlobalBehavior](https://github.com/technicalmedia/aurelia-kendo-spike2/blob/master/src/app.ts#L11)
4. [declare kendo pager in view](https://github.com/technicalmedia/aurelia-kendo-spike2/blob/master/src/au-kendo-test-json.html#L17)
