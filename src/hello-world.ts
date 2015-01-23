/// <reference path="../Scripts/typings/aurelia/aurelia.d.ts"/>
import au = require("aurelia-framework");
export class HelloWorld {
    static annotations() {
        return [new au.CustomElement('hello-world'), new au.Property("name", "callBack")]
    }

    constructor() {
    }

    callBack(val) {
        console.log(val)
    }
}
