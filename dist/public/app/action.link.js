System.register(['angular2/core', './action.navigation'], function(exports_1, context_1) {
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
    var core_1, action_navigation_1;
    var ActionLink;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (action_navigation_1_1) {
                action_navigation_1 = action_navigation_1_1;
            }],
        execute: function() {
            ActionLink = (function () {
                function ActionLink() {
                    this.actionEmitter = action_navigation_1.ActionNavigation.getEmitter();
                }
                ActionLink.prototype.onClick = function ($event) {
                    //console.log('emit?', this.actionEmitter.emit);
                    this.actionEmitter.emit(this.href);
                };
                __decorate([
                    core_1.HostListener('click', ['$event.target']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], ActionLink.prototype, "onClick", null);
                ActionLink = __decorate([
                    core_1.Directive({
                        selector: '[action-link]',
                        inputs: [
                            'href: action-link'
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ActionLink);
                return ActionLink;
            }());
            exports_1("ActionLink", ActionLink);
        }
    }
});
