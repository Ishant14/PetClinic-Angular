import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
//import {PageNotFoundComponent} from './parts/page-not-found/page-not-found.component';
//import {WelcomeComponent} from './parts/welcome/welcome.component';

const appRoutes: Routes = [
  {path:'' , redirectTo:'/home' , pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path:'ownersmodule', loadChildren:'app/owner/owner.module#OwnerModule'}
//   {path: '', component: WelcomeComponent},
//   {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{enableTracing:true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}