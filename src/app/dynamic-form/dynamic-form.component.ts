import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Calculation } from './common/calculation';
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
  calculation: Calculation;

  constructor(
    private formfieldService: FormfieldControlService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    console.log('formData:', this.formData);
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
    dependentKeys.forEach((element) => {
      this.formData.svcDetails.forms.forEach((formField) => {
        if (formField.key === element) {
          if (
            formField.dependency.is === value &&
            formField.dependency.notShow
          ) {
            formField.dependency.notShow = false;
            console.log('coming in notshow false ');
            const serviceForm = this.formData.svcDetails.forms.find(
              (frm) => frm.key === element
            );
            console.log('serviceForm', serviceForm.key);
            serviceForm.groups.forEach((group) => {
              console.log('coming in notshow false group:', group);

              group.fields.forEach((field) => {
                this.form.get(field.key).enable();
              });
            });
          } else {
            formField.dependency.notShow = true;
            console.log('coming here');
            const serviceForm = this.formData.svcDetails.forms.find(
              (frm) => frm.key === element
            );
            console.log('serviceForm else', serviceForm.key);

            serviceForm.groups.forEach((group) => {
              console.log('form----->', group);
              group.fields.forEach((field) => {
                console.log('field.key', field.key);
                this.form.get(field.key).disable();
              });
            });
          }
        }
      });
    });

    console.log('formm--->', this.form);
  }

  private formFieldPrep(formKey: any, dependentKeys: any, value: any) {
    this.formData.svcDetails.forms
      .find((form) => form.key === formKey)
      // this.formData.svcDetails.forms.forEach(ele => {
      //   console.log("key ", ele.key)
      //   ele.
      .groups.forEach((element) => {
        element.fields.forEach((elem) => {
          dependentKeys.forEach((dependentKey) => {
            if (dependentKey === elem.key) {
              console.log(
                'dependentKey.dependency.is === elem.value && ',
                elem.dependency.is,
                '===',
                value
              );
              if (elem.dependency.is === value && elem.dependency.notShow) {
                elem.dependency.notShow = false;
                this.form.get(elem.key).enable();
              } else {
                elem.dependency.notShow = true;
                this.form.get(elem.key).disable();
              }
            }
          });
        });
      });
    // })
  }

  calc: any[] = [];

  getCalculations = async (serviceForm: ServiceForm, url: string) => {
    let templateForm = {};
    templateForm['templateKey'] = serviceForm.key;
    templateForm['svcId'] = this.formData.id;
    serviceForm.groups.map((g) =>
      g.fields.map((f) => {
        templateForm[f.key] = this.form.get(f.key).value;
      })
    );

    // this.http.post(url+"/"+serviceForm.key,templateForm).subscribe((data) => {
    //   this.calculation = data as Calculation;
    // });
    this.http.get(url).subscribe((data) => {
      this.calculation = data as Calculation;
    });
    console.log('form:', templateForm);
  };

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.form.reset();
  }
}
