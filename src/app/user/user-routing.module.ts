import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DynamicUiComponent } from './dynamic-ui/dynamic-ui.component';
// import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user.component';
// import { UserComponent } from './user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
 
   
      {
        path: '',
        component: UsersComponent,
      },{
        path:':id',
        component: UserFormComponent,
      
      }
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
