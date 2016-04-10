import {Injectable, EventEmitter} from 'angular2/core';
import {Location, Router} from 'angular2/router';

@Injectable()
export class ActionNavigation{
    private static actionEmit: EventEmitter<any>;
    private static eventEmitters: { [id: string]: EventEmitter<any> } = {};

    static getEmitter(): EventEmitter<any> {
        if (!this.actionEmit)
            this.actionEmit = new EventEmitter()
        return this.actionEmit;
    }

    static getEventEmitter(id) {
        //console.log('getting emitter for' + id);
        if (!this.eventEmitters[id]) {
            this.eventEmitters[id] = new EventEmitter<any>();
        }

        return this.eventEmitters[id];
    }

}