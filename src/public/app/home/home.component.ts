import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Rect} from '../panes/rect';
import {Pane} from '../panes/pane';
import {ActionLink} from '../action.link';
import {Animation, AnimationStep} from '../animations/animations';
import {SVGFractal} from '../animations/svg.fractal';

@Component({
    selector: 'home',
	templateUrl: 'app/home/home.html',
    directives: [ROUTER_DIRECTIVES, ActionLink, Pane, SVGFractal]
})

export class HomeComponent {

    //menuItems: Pane[];
    menuItems: Object[];

    constructor() {
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
        this.menuItems.push({ id: "system", background: "app/images/system", rect: "34,82,42,12"});
    }
}