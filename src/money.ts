/// <reference path="../Scripts/typings/aurelia/aurelia.d.ts"/>
import auf = require("aurelia-framework");

export class MoneyValueConverter {
  toView(value, option){
    return kendo.toString(value, 'c');
  }
}