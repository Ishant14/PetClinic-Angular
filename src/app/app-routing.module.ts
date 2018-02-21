import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OwnerModule } from './owner/owner.module';
//import {PageNotFoundComponent} from './parts/page-not-found/page-not-found.component';
//import {WelcomeComponent} from './parts/welcome/welcome.component';

const appRoutes: Routes = [
{path: 'owners', component: OwnerModule},
//   {path: '', component: WelcomeComponent},
//   {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}