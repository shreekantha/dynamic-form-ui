import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceForm } from './common/service-form';
import { ServiceFormCategory } from './common/service-form-category';
import { FormField } from './common/service-form-field';
import { FormfieldControlService } from './formfield-control.service';

@Component({
  selector: 'DynamicForm',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  // @Input() formFields: FormField<string>[] = [];
  @Input() formData: ServiceFormCategory;
  form: FormGroup;
  displayThis: boolean;
  size: number;
  payLoad = ' ';
  listOfdependentFields: FormField<string>[] = [];

  constructor(
    private formfieldService: FormfieldControlService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.form = this.formfieldService.toServiceFormGroup(this.formData);
  }

  onChange(data) {
    //Object Destructuring
    const { dependentKeys, value, formKey, dependentType } = data;

    if (dependentKeys) {
      switch (dependentType) {
        case 'CONTROL':
          this.formFieldPrep(formKey, dependentKeys, value);
          break;

        case 'FORM':
          this.formPrep(dependentKeys, value);
          break;
      }
    }
  }

  formPrep(dependentKeys: any, value: any) {
    dependentKeys.forEach((dependentKey) => {
      this.formData.svcDetails.forms.forEach((form) => {
        if (form.key === dependentKey) {
          if (form.dependency.is === value && !form.visible) {
            form.visible = true;
            form.groups.forEach((group) => {
              group.fields.forEach((field) => {
                this.form.get(field.key).enable();
              });
            });
          } else {
            form.visible = false;
            form.groups.forEach((group) => {
              group.fields.forEach((field) => {
                this.form.get(field.key).disable();
              });
            });
          }
        }
      });
    });
  }

  private formFieldPrep(formKey: any, dependentKeys: any, value: any) {
    this.formData.svcDetails.forms
      .find((form) => form.key === formKey)
      .groups.forEach((group) => {
        group.fields.forEach((controlField) => {
          dependentKeys.forEach((dependentKey) => {
            if (dependentKey === controlField.key) {
              if (
                controlField.dependency.is === value &&
                !controlField.visible
              ) {
                // console.log('oprions:', field.options);
                controlField.visible = true;
                this.form.get(controlField.key).enable();
              } else {
                controlField.visible = false;
                this.form.get(controlField.key).disable();
              }
            }
          });
        });
      });
  }

  async getCalculations(serviceForm1: ServiceForm, url: string) {
    let templateForms = [];
    //templateForm['svcId'] = this.formData.id;
    this.formData.svcDetails.forms.map((serviceForm) => {
      let templateForm = {};

      serviceForm.groups.map((g) =>
        g.fields.map((f) => {
          templateForm[f.key] = this.form.get(f.key).value;
        })
      );
      templateForms.push({ id: serviceForm.key, dimensions: templateForm });
    });
    console.log('template forms:', templateForms);
    // this.http.post(url+"/"+serviceForm.key,templateForm).subscribe((data) => {
    //   this.calculation = data as Calculation;
    // });

    // this.http.post(url+"/"+serviceForm.key,templateForm).pipe().toPromise();

    return await this.http.get(url).pipe().toPromise();
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.form.reset();
  }
}
