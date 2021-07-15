import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularDynamicForms';
  // formFields: Observable<FormField<any>[]>;
  // constructor(service: FormfieldControlService,private httpClient: HttpClient,
  //   private router:Router) {
  //   // this.formFields = service.getFormFields();
  //   this.httpClient.get('/assets/DynamicFormData.json').subscribe( data => {
  //     this.formFields = service.getFormFields(data as []);
  //     this.formFields.forEach(a =>{
  //     })
  //   });
  // }
}
