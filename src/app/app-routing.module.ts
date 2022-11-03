import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DynamicUiComponent } from './dynamic-ui/dynamic-ui.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },{
    path:'users',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
