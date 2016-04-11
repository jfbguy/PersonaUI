import {Component, QueryList, ElementRef, AfterViewInit, ViewChildren} from 'angular2/core';
import {ROUTER_DIRECTIVES, OnActivate, OnDeactivate, ComponentInstruction} from 'angular2/router';
import {AnimationBuilder} from 'angular2/src/animate/animation_builder';
import {Animation} from 'angular2/src/animate/animation';
import {CssAnimationBuilder} from 'angular2/src/animate/css_animation_builder';
import {Rect} from '../panes/rect';
import {Pane} from '../panes/pane';
import {ActionLink} from '../action.link';
//import {Animation, AnimationStep} from '../animations/animations';
import {SVGFractal} from '../animations/svg.fractal';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.html',
    directives: [ROUTER_DIRECTIVES, Pane, SVGFractal]
})

export class HomeComponent implements OnActivate, OnDeactivate, AfterViewInit {
    @ViewChildren(Pane)
    viewPanes: QueryList<Pane>;

    exitAnimations: {element: ElementRef,animation: CssAnimationBuilder}[] = [];

    //menuItems: Pane[];
    menuItems: Object[];

    constructor(private animBuilder: AnimationBuilder, private element: ElementRef) {
        this.menuItems = [];
        this.menuItems.push({ id: "menu-skill", route: "Skill", background: "app/images/skill", rect: "48,11,39,12" });
        this.menuItems.push({ id: "menu-item", route: "Item", background: "app/images/item", rect: "57,21,34,12" });
        this.menuItems.push({ id: "menu-equip", route: "Equip", background: "app/images/equip", rect: "45,30,37,12" });
        this.menuItems.push({ id: "menu-persona", route: "Persona", background: "app/images/persona", rect: "33,40.5,40,12" });
        this.menuItems.push({ id: "menu-party", route: "Party", background: "app/images/party", rect: "41,51,37,12" });
        this.menuItems.push({ id: "menu-cooperation", route: "Cooperation", background: "app/images/cooperation", rect: "6,62,72,12" });
        this.menuItems.push({ id: "menu-mission", route: "Mission", background: "app/images/mission", rect: "21,72,43,12" });
        this.menuItems.push({ id: "menu-system", route: "System", background: "app/images/system", rect: "34,82,42,12" });
        /*
        

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
        this.menuItems.push({ id: "system", background: "app/images/system", rect: "34,82,42,12"});*/
    }

    ngAfterViewInit() {
        var panes = this.viewPanes.toArray();
        for (var i = 0; i < panes.length; i++) {
            if (panes[i].id == "main-menu") {
                var anim = this.animBuilder.css();
                anim.setDuration(500);
                anim.setFromStyles({ opacity: 100 }).setToStyles({ opacity: 0 });
                this.exitAnimations.push({ element: panes[i].element, animation: anim});
            }
        }
        
      //'background - red'
      //'background-right'
      //'hover-number'

    }

    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log('activate!!!',next, prev);

        
    }

    routerOnDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
        console.log('deactivate!!!', next, prev);
        console.log(this.exitAnimations[i]);

        for (var i = 0; i < this.exitAnimations.length; i++) {
            this.exitAnimations[i].animation.start(this.exitAnimations[i].element.nativeElement);
        }

        return new Promise((res, rej) => setTimeout(() => res(1), 500));
    }
}