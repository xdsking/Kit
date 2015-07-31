/**
 * Created by Administrator on 2015/7/28.
 */
define(["dojo/_base/declare", "require", "dijit/_WidgetBase", "dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin", "dojo/text!./comboButton.html",
        "dojo/dom-construct", "dojo/_base/window","dojo/on","dijit/form/ComboButton","dijit/Menu","dijit/MenuItem","dijit/form/ComboBox"],
    function (declare, require, _WidgetBase, _TemplatedMixin,_WidgetsInTemplateMixin, template, domConstruct, window,on) {
        var cssAdded = false;
        return declare([ _WidgetBase, _TemplatedMixin,_WidgetsInTemplateMixin ], {
            baseClass: "comboButton",
            templateString: template,
            cssPath: require.toUrl("./comboButton.css"),
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