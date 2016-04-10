import {AppComponent} from './app.component';
import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
//import {ActionNavigation} from './action.navigation';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS
]);