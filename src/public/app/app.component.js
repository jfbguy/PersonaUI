System.register(['angular2/core', './home/home.component', 'angular2/router', './action.navigation'], function(exports_1, context_1) {
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
    var core_1, home_component_1, router_1, action_navigation_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (action_navigation_1_1) {
                action_navigation_1 = action_navigation_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(location, route) {
                    this.location = location;
                    this.route = route;
                    this.locationChanged = false;
                    this.actionEmitter = action_navigation_1.ActionNavigation.getEmitter();
                    this.actionEmitter.subscribe(function (event) {
                        //this.location.go('/'+event);
                        //console.log('emitting', ActionNavigation.getEventEmitter(event));
                        action_navigation_1.ActionNavigation.getEventEmitter(event).emit('start');
                        //this.route.recognize(event);
                    });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<router-outlet></router-outlet>",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true } /*,
                        {path:'/equip', name: 'Equipment', component: EquipComponent},
                        {path:'/equip/:id', name: 'EquipDetail', component: EquipDetailComponent}*/
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map