import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="app-container">
            <!--<button mat-button color="primary">Click me!</button>-->
            <!--<h1>Angular Universal Demo utilizing Angular & Angular CLI</h1>-->
            <!--<nav class="nav-links">-->
            <a routerLink="/login">Home(doesnt work)</a>
            <br>
            <a routerLink="/lazy">Lazy-loaded Route(works fine)</a>
            <!--<a routerLink="/lazy/nested">Nested Routes work too</a>-->
            <!--</nav>-->
            <div class="router-container">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
})
export class AppComponent {

}
