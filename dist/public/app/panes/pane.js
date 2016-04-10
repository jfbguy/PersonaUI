System.register(['angular2/core', '../animations/animations', './rect', '../action.navigation'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, animations_1, rect_1, action_navigation_1;
    var Pane;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (animations_1_1) {
                animations_1 = animations_1_1;
            },
            function (rect_1_1) {
                rect_1 = rect_1_1;
            },
            function (action_navigation_1_1) {
                action_navigation_1 = action_navigation_1_1;
            }],
        execute: function() {
            //export enum TYPE { Image, SVG };
            Pane = (function () {
                function Pane(element) {
                    this.element = element;
                    this.emitters = {};
                    this.eventAnimations = {};
                }
                /*
                public static createPane(id: string, background: string, rect: string) {
                    var pane = new Pane(null);
                    pane.rect = rect;
                    pane.id = id;
                    pane.background = background;
                    return pane;
                }*/
                Pane.prototype.ngAfterViewInit = function () {
                    this.element.nativeElement.classList.add('pane');
                    this.setRect(new rect_1.Rect(this.rect));
                    //this.paneAnimation = SVGAnimations.getAnimation(this.animation);
                };
                Pane.prototype.ngAfterContentInit = function () {
                    if (this.animations) {
                        var animations = JSON.parse(this.animations);
                        for (var i = 0; i < animations.length; i++) {
                            var anim = new animations_1.Animation(animations[i].loop);
                            for (var j = 0; j < animations[i].steps.length; j++) {
                                anim.addStep(new animations_1.AnimationStep(animations[i].steps[j].time, animations[i].steps[j].attr, animations[i].steps[j].value, animations[i].steps[j].curve));
                            }
                            this.addAnimation(animations[i].event, anim);
                        }
                    }
                };
                Pane.prototype.setRect = function (rect) {
                    this.currentRect = rect;
                    //update css
                    this.element.nativeElement.style.top = this.currentRect.y + '%';
                    this.element.nativeElement.style.left = this.currentRect.x + '%';
                    this.element.nativeElement.style.width = this.currentRect.w + '%';
                    this.element.nativeElement.style.height = this.currentRect.h + '%';
                };
                Pane.prototype.addAnimation = function (id, animation) {
                    var _this = this;
                    this.eventAnimations[id] = animation;
                    this.emitters[id] = action_navigation_1.ActionNavigation.getEventEmitter(id);
                    this.emitters[id].subscribe(function (event) {
                        _this.eventAnimations[id].start(_this);
                    });
                };
                Pane.prototype.addEventAnimation = function () {
                };
                Pane.prototype.activateAnimation = function (event) {
                    if (this.eventAnimations[event]) {
                        this.eventAnimations[event].start(this);
                    }
                };
                __decorate([
                    core_1.ContentChildren('Pane'), 
                    __metadata('design:type', core_1.QueryList)
                ], Pane.prototype, "paneChildren", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Pane.prototype, "points", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Pane.prototype, "id", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Pane.prototype, "rect", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Pane.prototype, "background", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Pane.prototype, "animations", void 0);
                Pane = __decorate([
                    core_1.Component({
                        selector: 'pane',
                        templateUrl: 'app/panes/pane.html',
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Pane);
                return Pane;
            }());
            exports_1("Pane", Pane);
        }
    }
});
//# sourceMappingURL=pane.js.map