import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Routes} from "@angular/router";
import {AppService} from "./app.service";
import {TvInfoComponent} from './tv-info/tv-info.component';
import {TvListComponent} from './tv-list/tv-list.component';
import {TvCreateComponent} from './tv-create/tv-create.component';
import {MatSortModule} from "@angular/material";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list'},
  { path:'list',component:TvListComponent},
  { path:'info',component:TvInfoComponent}
];

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    TvInfoComponent,
    TvListComponent,
    TvCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSortModule
  ],
  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }



