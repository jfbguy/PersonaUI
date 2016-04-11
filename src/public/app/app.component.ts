import {Component, OnInit, Inject, HostListener, EventEmitter} from 'angular2/core';
import {HomeComponent} from './home/home.component';
import {Pane} from './panes/pane';
import {RouteConfig, ROUTER_DIRECTIVES, Location, Router} from 'angular2/router';
import {EquipComponent} from './equipment/equipment.component';
import {ActionLink} from './action.link';
import {ActionNavigation} from './action.navigation';

@Component({
    selector: 'my-app',
	template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/skill', name: 'Skill', component: EquipComponent },
    { path: '/item', name: 'Item', component: EquipComponent },
    { path: '/equip', name: 'Equip', component: EquipComponent },
    { path: '/persona', name: 'Persona', component: EquipComponent },
    { path: '/party', name: 'Party', component: EquipComponent },
    { path: '/cooperation', name: 'Cooperation', component: EquipComponent },
    { path: '/mission', name: 'Mission', component: EquipComponent },
    { path: '/system', name: 'System', component: EquipComponent }
])

export class AppComponent{
    locationChanged: boolean;

    actionEmitter: EventEmitter<any>;

    constructor(public location: Location, public route: Router) {
        this.locationChanged = false;
        this.actionEmitter = ActionNavigation.getEmitter();

        this.actionEmitter.subscribe(event => {
            //this.location.go('/'+event);

            //console.log('emitting', ActionNavigation.getEventEmitter(event));
            ActionNavigation.getEventEmitter(event).emit('start');
             
            //this.route.recognize(event);
        });
    }
}