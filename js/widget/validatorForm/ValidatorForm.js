define(["dojo/_base/declare", "require", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./validatorForm.html",
        "dojo/dom-construct", "dojo/_base/window","dojo/on"],
    function (declare, require, _WidgetBase, _TemplatedMixin, template, domConstruct, window,on) {
        var cssAdded = false;
        return declare([ _WidgetBase, _TemplatedMixin ], {
            baseClass: "validatorForm",
            templateString: template,
            cssPath: require.toUrl("./validatorForm.css"),
            constructor: function () {
                if (!cssAdded) {
                    domConstruct.create("link", {
                        rel: "stylesheet",
                        type: "text/css",
                        href: this.cssPath
                    }, window.doc.head || window.doc.getElementsByTagName("head")[0]);
                    cssAdded = true;
                }
            },
            postCreate: function () {
                //TODO

            }
        });

    });