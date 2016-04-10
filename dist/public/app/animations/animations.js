System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Animation, AnimationStep;
    return {
        setters:[],
        execute: function() {
            Animation = (function () {
                function Animation(loop) {
                    this.timeline = {};
                    this.loop = loop;
                }
                Animation.prototype.start = function (object) {
                    var timer = 0;
                    // console.log('start',object);
                    this.tick(object, timer, this);
                };
                Animation.prototype.stop = function (ticker) {
                    clearInterval(ticker ? ticker : this.ticker);
                };
                Animation.prototype.tick = function (object, timer, animationHandle) {
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
                        if (steps[from].value && steps[from].value.constructor === Array) {
                            var array = [];
                            for (var j = 0; j < steps[from].value.length; j++) {
                                array.push(steps[from].value[j] + (steps[to].value[j] - steps[from].value[j]) * perc);
                            }
                            //Set Value
                            if (attr.startsWith('style:')) {
                                attr = attr.substring(6);
                                object.element.nativeElement.style[attr] = array;
                            }
                            else {
                                object[attr] = array;
                            }
                        }
                        else {
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
                        //timer = (timer + (1.0 / Animation.fps)) % steps[steps.length - 1].time;
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
                };
                Animation.prototype.addStep = function (step) {
                    if (typeof (this.timeline[step.attr]) == 'undefined')
                        this.timeline[step.attr] = [];
                    this.timeline[step.attr].push(step);
                };
                Animation.fps = 60;
                return Animation;
            }());
            exports_1("Animation", Animation);
            AnimationStep = (function () {
                function AnimationStep(time, attr, value, curve) {
                    this.time = time;
                    this.attr = attr;
                    this.value = value;
                    this.curve = curve;
                }
                return AnimationStep;
            }());
            exports_1("AnimationStep", AnimationStep);
        }
    }
});
//# sourceMappingURL=animations.js.map