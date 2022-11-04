import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { DynamicFormInputComponent } from './dynamic-form-input/dynamic-form-input.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DynamicFormInputComponent,
    DynamicFormComponent,
    ErrorMessageComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    MatCardModule,
   
    MatButtonModule,
    
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    
    MatDividerModule
  ],
  exports:[
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
