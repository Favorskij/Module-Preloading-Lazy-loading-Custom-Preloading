import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CustomPreloadStrategy} from "./custom-preload-strategy";

const routes: Routes = [

  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(

    routes,
    {

      preloadingStrategy: PreloadAllModules
      // preloadingStrategy: CustomPreloadStrategy

    }
    )],


  exports: [RouterModule]
})
export class AppRoutingModule { }
