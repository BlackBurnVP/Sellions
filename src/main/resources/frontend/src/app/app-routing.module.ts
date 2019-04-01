import {Injectable, NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {TvListComponent} from "./tv-list/tv-list.component";
import {TvInfoComponent} from "./tv-info/tv-info.component";
import {TvCreateComponent} from "./tv-create/tv-create.component";

const routes: Routes = [
  {path:'list',component:TvListComponent},
  {path:'info',component:TvInfoComponent},
  {path:'info/:id',component:TvInfoComponent},
  {path:'add',component:TvCreateComponent},
  {path:'',component:TvListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
