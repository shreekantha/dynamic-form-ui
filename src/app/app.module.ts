import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataPropertyGetterPipe } from './dynamic-ui/dynamic-table/data-property-getter-pipe/data-property-getter.pipe';
import { TableComponent } from './dynamic-ui/dynamic-table/table.component';
import { DynamicUiModule } from './dynamic-ui/dynamic-ui.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // DynamicFormInputComponent,
    // DynamicFormComponent,
    // DynamicUi,
    HomeComponent,
    // ErrorMessageComponent,
    TableComponent,
    DataPropertyGetterPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // DynamicUiModule,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
