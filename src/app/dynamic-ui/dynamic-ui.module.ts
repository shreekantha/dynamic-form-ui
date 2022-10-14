import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DynamicFormInputComponent } from './dynamic-form/dynamic-form-input/dynamic-form-input.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ErrorMessageComponent } from './dynamic-form/error-message/error-message.component';
import { DynamicUiComponent } from './dynamic-ui.component';
import { TableComponent } from "./dynamic-table/table.component";
import { MatTableModule } from '@angular/material/table';
import { DataPropertyGetterPipe } from './dynamic-table/data-property-getter-pipe/data-property-getter.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    DynamicUiComponent,
    DynamicFormComponent,
    DynamicFormInputComponent,
    ErrorMessageComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
})
export class DynamicUiModule {}
