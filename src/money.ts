/// <reference path="../Scripts/typings/aurelia/aurelia.d.ts"/>
import auf = require("aurelia-framework");

export class MoneyValueConverter {
  static annotations(){ return [new auf.ValueConverter("money")]; }

  toView(value, option){
    return value * 2; // kendo.toString(value, 'c');
  }

  //fromView(value, option){
    //return convert back to model
  //}
}