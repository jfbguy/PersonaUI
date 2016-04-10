System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rect;
    return {
        setters:[],
        execute: function() {
            Rect = (function () {
                function Rect(str) {
                    if (str == null)
                        return null;
                    var rect = str.split(',');
                    this.x = parseInt(rect[0]);
                    this.y = parseInt(rect[1]);
                    this.w = parseInt(rect[2]);
                    this.h = parseInt(rect[3]);
                }
                Rect.prototype.toString = function () {
                    return this.x + ',' + this.y + ',' + this.w + ',' + this.h;
                };
                return Rect;
            }());
            exports_1("Rect", Rect);
        }
    }
});
//# sourceMappingURL=rect.js.map