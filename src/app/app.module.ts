import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {NgxsModule} from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      // { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'login', component: HomeComponent, pathMatch: 'full'},
      //
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      // { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxsModule.forRoot([
    ]),
    // NgxsStoragePluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
