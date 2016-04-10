System.register(['angular2/core', 'angular2/router', '../panes/pane', '../action.link', '../animations/svg.fractal'], function(exports_1, context_1) {
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
    var core_1, router_1, pane_1, action_link_1, svg_fractal_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pane_1_1) {
                pane_1 = pane_1_1;
            },
            function (action_link_1_1) {
                action_link_1 = action_link_1_1;
            },
            function (svg_fractal_1_1) {
                svg_fractal_1 = svg_fractal_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.menuItems = [];
                    var item = {};
                    item['id'] = "skill";
                    item['background'] = "app/images/skill";
                    item['rect'] = "48,11,39,12";
                    item['animations'] = JSON.stringify([{
                            event: 'skill',
                            loop: false,
                            steps: [{ time: 0, attr: 'style:left', value: 48 },
                                { time: 1, attr: 'style:left', value: -50 }
                            ]
                        }]);
                    /*
                        {event: 'skill',
                            loop: false,
                            steps: [{ time: 0, attr: 'style:left', value: 48 },
                                { time: 1, attr: 'style:left', value: -50 }
                            ]
                        }*/
                    this.menuItems.push(item);
                    this.menuItems.push({ id: "item", background: "app/images/item", rect: "57,21,34,12" });
                    this.menuItems.push({ id: "equip", background: "app/images/equip", rect: "45,30,37,12" });
                    item['animations'] = JSON.stringify([{
                            event: 'skill',
                            loop: false,
                            steps: [{ time: 0, attr: 'style:left', value: 48 },
                                { time: 1, attr: 'style:left', value: -50 }
                            ]
                        }]);
                    this.menuItems.push({ id: "persona", background: "app/images/persona", rect: "33,40.5,40,12" });
                    this.menuItems.push({ id: "party", background: "app/images/party", rect: "41,51,37,12" });
                    this.menuItems.push({ id: "cooperation", background: "app/images/cooperation", rect: "6,62,72,12" });
                    this.menuItems.push({ id: "mission", background: "app/images/mission", rect: "21,72,43,12" });
                    this.menuItems.push({ id: "system", background: "app/images/system", rect: "34,82,42,12" });
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/home/home.html',
                        directives: [router_1.ROUTER_DIRECTIVES, action_link_1.ActionLink, pane_1.Pane, svg_fractal_1.SVGFractal]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map