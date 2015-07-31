define(["dojo/_base/declare", "require", "dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/text!./form.html",
        "dojo/dom-construct", "dojo/_base/window","dojo/on"],
    function (declare, require, _WidgetBase, _TemplatedMixin, template, domConstruct, window,on) {
        var cssAdded = false;
        return declare([ _WidgetBase, _TemplatedMixin ], {
            baseClass: "form",
            templateString: template,
            cssPath: require.toUrl("./form.css"),
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
                var self=this;
                on(this.btnCancle,"click",function(){
                    self.destroy();
                });
                on(this.age,"blur",function(){

                });

            }
        });

    });