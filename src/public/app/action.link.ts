import {Directive, Attribute, HostListener, Output, EventEmitter} from 'angular2/core';
import {Router, Location} from 'angular2/router';
import {ActionNavigation} from './action.navigation';

@Directive({
    selector: '[action-link]',
    inputs: [
        'href: action-link'
    ]
})

export class ActionLink {
    href: string;
    actionEmitter: EventEmitter<any>;

    constructor() {
        this.actionEmitter = ActionNavigation.getEmitter();
    }

    @HostListener('click', ['$event.target'])
    onClick($event) {
        //console.log('emit?', this.actionEmitter.emit);
        this.actionEmitter.emit(this.href);
    }
}