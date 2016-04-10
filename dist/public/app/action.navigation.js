System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ActionNavigation;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ActionNavigation = (function () {
                function ActionNavigation() {
                }
                ActionNavigation.getEmitter = function () {
                    if (!this.actionEmit)
                        this.actionEmit = new core_1.EventEmitter();
                    return this.actionEmit;
                };
                ActionNavigation.getEventEmitter = function (id) {
                    //console.log('getting emitter for' + id);
                    if (!this.eventEmitters[id]) {
                        this.eventEmitters[id] = new core_1.EventEmitter();
                    }
                    return this.eventEmitters[id];
                };
                ActionNavigation.eventEmitters = {};
                ActionNavigation = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ActionNavigation);
                return ActionNavigation;
            }());
            exports_1("ActionNavigation", ActionNavigation);
        }
    }
});
