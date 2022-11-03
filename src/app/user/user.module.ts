import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormModule } from '../dynamic-ui/dynamic-form/dynamic-form.module';
import { DynamicTableModule } from '../dynamic-ui/dynamic-table/dynamic-table.module';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
// import { UserComponent } from './user.component';



@NgModule({
  declarations: [
    UserFormComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
   
    HttpClientModule,
    DynamicFormModule,
    DynamicTableModule,
    UserRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class UserModule { }
