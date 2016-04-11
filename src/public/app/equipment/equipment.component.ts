import {Component, AfterViewInit, ViewChildren, QueryList, ElementRef} from 'angular2/core';
import {ROUTER_DIRECTIVES, OnActivate, OnDeactivate, ComponentInstruction} from 'angular2/router';
import {AnimationBuilder} from 'angular2/src/animate/animation_builder';
import {Animation} from 'angular2/src/animate/animation';
import {CssAnimationBuilder} from 'angular2/src/animate/css_animation_builder';
import {Rect} from '../panes/rect';
import {Pane} from '../panes/pane';
import {SVGFractal} from '../animations/svg.fractal';

@Component({
    selector: 'equipment',
    templateUrl: 'app/equipment/equipment.html',
    directives: [ROUTER_DIRECTIVES, Pane, SVGFractal]
})

export class EquipComponent implements OnActivate, OnDeactivate, AfterViewInit {
    @ViewChildren(Pane)
    viewPanes: QueryList<Pane>;

    exitAnimations: { element: ElementRef, animation: CssAnimationBuilder }[] = [];

    //menuItems: Pane[];
    menuItems: Object[];

    constructor(private animBuilder: AnimationBuilder, private element: ElementRef) {
        /*
        this.menuItems = [];
        this.menuItems.push({ id: "menu-skill", route: "Skill", background: "app/images/skill", rect: "48,11,39,12" });
        this.menuItems.push({ id: "menu-item", route: "Item", background: "app/images/item", rect: "57,21,34,12" });
        this.menuItems.push({ id: "menu-equip", route: "Equip", background: "app/images/equip", rect: "45,30,37,12" });
        this.menuItems.push({ id: "menu-persona", route: "Persona", background: "app/images/persona", rect: "33,40.5,40,12" });
        this.menuItems.push({ id: "menu-party", route: "Party", background: "app/images/party", rect: "41,51,37,12" });
        this.menuItems.push({ id: "menu-cooperation", route: "Cooperation", background: "app/images/cooperation", rect: "6,62,72,12" });
        this.menuItems.push({ id: "menu-mission", route: "Mission", background: "app/images/mission", rect: "21,72,43,12" });
        this.menuItems.push({ id: "menu-system", route: "System", background: "app/images/system", rect: "34,82,42,12" });*/
    }


    ngAfterViewInit() {
        //console.log('view children', this.viewPanes);
    }

    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log('activate!!!', next, prev);

        this.animBuilder.css().setFromStyles({ opacity: 0 }).setToStyles({ opacity: 100 }).setDuration(100).start(this.element.nativeElement);
    }

    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log('deactivate!!!', next, prev);
    }
}

