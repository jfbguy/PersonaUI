export class Animation {
    static fps: number = 60;

    loop: boolean;

    private timeline: { [attr: string]: AnimationStep[]; } = {};
    
    //Running Animation
    private ticker;
    private currentStep: AnimationStep;

    constructor(loop: boolean) {
        this.loop = loop;
    }

    public start(object: any) {
        var timer = 0;
        this.tick(object, timer, this);
    }

    public stop(ticker?: any) {
        clearInterval(ticker ? ticker : this.ticker);
    }

    public tick(object: any, timer: number, animationHandle: Animation) {
        
        for (var attr in animationHandle.timeline) {
            var steps = animationHandle.timeline[attr];

            //Optimize with binary search... actually, just keep it a sorted array
            var i;
            for (i = 0; i < steps.length; i++) {
                if (i == steps.length || timer < steps[i].time) {
                    i--;
                    break;
                }
            }

            //Calculate position on timeline
            var from = i;
            var to = i + 1 % steps.length;
            var perc = (timer - steps[from].time) / (steps[to].time - steps[from].time);

            if (steps[from].value && steps[from].value.constructor === Array) { //Array Tweening
                var array = [];
                for (var j = 0; j < steps[from].value.length; j++) {
                    array.push(steps[from].value[j] + (steps[to].value[j] - steps[from].value[j]) * perc);
                }

                //Set Value
                if (attr.startsWith('style:')){
                    attr = attr.substring(6);
                    object.element.nativeElement.style[attr] = array;
                }
                else {
                    object[attr] = array;
                }
            }
            else {  //Single Property tweening
                var value = steps[from].value + (steps[to].value - steps[from].value) * perc;

                //Set Value
                if (attr.startsWith('style:')) {
                    attr = attr.substring(6);
                    object.element.nativeElement.style[attr] = value.toFixed(1) + '%';
                }
                else {
                    object[attr] = value.toFixed(1) + '%';
                }
            }

            //Add to timer and repeat
            timer += (1.0 / Animation.fps);
            if (timer > steps[steps.length - 1].time) {
                if (animationHandle.loop) {
                    timer = timer % steps[steps.length - 1].time;
                }
                else {
                    return; //End Animation
                }
            }
        }
        setTimeout(animationHandle.tick, 1000 / Animation.fps, object, timer, animationHandle);
    }

    public addStep(step: AnimationStep) {
        if (typeof(this.timeline[step.attr]) == 'undefined') this.timeline[step.attr] = [];
        this.timeline[step.attr].push(step);
    }
}

export class AnimationStep {
    time: number;
    attr: any;
    value: any;
    curve: string;

    constructor(time: number, attr: any, value: any, curve?:string) {
        this.time = time;
        this.attr = attr;
        this.value = value;
        this.curve = curve;
    }
}
