import {Component, ElementRef, AfterContentInit, Input} from 'angular2/core';
import {Animation, AnimationStep} from '../animations/svg.animations';

@Component({
    selector: 'SVGFractal',
    template: `<svg viewBox="0 0 100 100" preserveAspectRatio="none" color-interpolation="linear"> 
                    <defs>
                        <mask id="fractal-mask"  x="0" y="0" width="100" height="100">
                            <polygon points="{{points}}" style="fill:#000;"></polygon>
                        </mask>
                    </defs>
                    <polygon [attr.points]="points" style="fill:#1BFDFC" transform="scale(-1,-1) translate(-100,-100)"></polygon>
                    <polygon [attr.points]="points" style="fill:#ff0000;"></polygon>
                </svg>`
})

export class SVGFractal extends Animation implements AfterContentInit {
    @Input()
    points: string;

    constructor(public element: ElementRef) {
        super(true);

        this.points = "";

        this.addStep(new AnimationStep(0, "points", [100, 0, 70, 100, 0, 80, 35, 35]));
        this.addStep(new AnimationStep(.2, "points", [70, 5, 100, 100, 20, 100, 0, 50]));
        this.addStep(new AnimationStep(.4, "points", [80, 0, 100, 100, 0, 70, 20, 15]));
        this.addStep(new AnimationStep(.6, "points", [100, 0, 70, 100, 0, 80, 35, 35]));
    }

    ngAfterContentInit() {
        this.element.nativeElement.classList.add('fractal');
        super.start(this);
    }
}