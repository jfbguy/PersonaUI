System.register(['angular2/core', '../animations/animations'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, animations_1;
    var SVGFractal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (animations_1_1) {
                animations_1 = animations_1_1;
            }],
        execute: function() {
            SVGFractal = (function (_super) {
                __extends(SVGFractal, _super);
                function SVGFractal(element) {
                    _super.call(this, true);
                    this.element = element;
                    this.points = "";
                    this.addStep(new animations_1.AnimationStep(0, "points", [100, 0, 70, 100, 0, 80, 35, 35]));
                    this.addStep(new animations_1.AnimationStep(.2, "points", [70, 5, 100, 100, 20, 100, 0, 50]));
                    this.addStep(new animations_1.AnimationStep(.4, "points", [80, 0, 100, 100, 0, 70, 20, 15]));
                    this.addStep(new animations_1.AnimationStep(.6, "points", [100, 0, 70, 100, 0, 80, 35, 35]));
                }
                SVGFractal.prototype.ngAfterContentInit = function () {
                    this.element.nativeElement.classList.add('fractal');
                    _super.prototype.start.call(this, this);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SVGFractal.prototype, "points", void 0);
                SVGFractal = __decorate([
                    core_1.Component({
                        selector: 'SVGFractal',
                        template: "<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" color-interpolation=\"linear\"> \n                    <defs>\n                        <mask id=\"fractal-mask\"  x=\"0\" y=\"0\" width=\"100\" height=\"100\">\n                            <polygon points=\"{{points}}\" style=\"fill:#000;\"></polygon>\n                        </mask>\n                    </defs>\n                    <polygon [attr.points]=\"points\" style=\"fill:#1BFDFC\" transform=\"scale(-1,-1) translate(-100,-100)\"></polygon>\n                    <polygon [attr.points]=\"points\" style=\"fill:#ff0000;\"></polygon>\n                </svg>"
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], SVGFractal);
                return SVGFractal;
            }(animations_1.Animation));
            exports_1("SVGFractal", SVGFractal);
        }
    }
});
//# sourceMappingURL=svg.fractal.js.map