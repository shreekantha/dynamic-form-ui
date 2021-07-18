import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicUiComponent } from './dynamic-ui/dynamic-ui.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'configure',
    component: DynamicUiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
