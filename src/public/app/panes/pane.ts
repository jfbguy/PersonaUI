import {Component, ElementRef, QueryList, AfterViewInit, AfterContentInit, Input, ContentChildren, Attribute, EventEmitter} from 'angular2/core';
import {Animation, AnimationStep} from '../animations/animations';
import {Rect} from './rect';
import {ActionNavigation} from '../action.navigation';

//export enum TYPE { Image, SVG };

@Component({
    selector: 'pane',
    templateUrl: 'app/panes/pane.html',
    directives: []
})

export class Pane implements AfterViewInit, AfterContentInit{
    @ContentChildren('Pane')
    paneChildren: QueryList<Pane>;

    private eventAnimations: { [id: string]: Animation };
    private emitters: { [id: string]: EventEmitter<any> } = {};

    @Input()
    points: string;

    @Input()
    id: string;
    @Input()
    rect: string;
    @Input()
    background: string;

    @Input()
    animations: string;

    paneAnimation: Animation;
    currentRect: Rect;

    constructor(public element: ElementRef) {
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

    ngAfterViewInit() {
        this.element.nativeElement.classList.add('pane');
        this.setRect(new Rect(this.rect));
        //this.paneAnimation = SVGAnimations.getAnimation(this.animation);
    }

    ngAfterContentInit() {
        if (this.animations) {
            var animations = JSON.parse(this.animations);

            for (var i = 0; i < animations.length; i++) {
                var anim = new Animation(animations[i].loop);
                for (var j = 0; j < animations[i].steps.length; j++) {
                    anim.addStep(new AnimationStep(animations[i].steps[j].time, animations[i].steps[j].attr,
                        animations[i].steps[j].value, animations[i].steps[j].curve));
                }
                this.addAnimation(animations[i].event, anim);
            }
        }
    }

    public setRect(rect: Rect) {
        this.currentRect = rect;

        //update css
        this.element.nativeElement.style.top = this.currentRect.y + '%';
        this.element.nativeElement.style.left = this.currentRect.x + '%';
        this.element.nativeElement.style.width = this.currentRect.w + '%';
        this.element.nativeElement.style.height = this.currentRect.h + '%';
    }

    public addAnimation(id: string, animation: Animation) {
        this.eventAnimations[id] = animation;

        this.emitters[id] = ActionNavigation.getEventEmitter(id);

        this.emitters[id].subscribe(event => {
            this.eventAnimations[id].start(this);
        });
    }

    public addEventAnimation() {
            
    }

    public activateAnimation(event: string) {
        if (this.eventAnimations[event]) {
            this.eventAnimations[event].start(this);
        }
    }
}



