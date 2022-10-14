import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Calculations } from './common/calculation';
import { DynamicForm } from './common/dynamic-form';
import { DynamicFormField } from './common/dynamic-form-field';
import { DynamicFormGroup } from './common/dynamic-form-group';
import { FormfieldControlService } from './formfield-control.service';

@Component({
  selector: 'DynamicForm',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  // @Input() formFields: FormField<string>[] = [];
  @Input() formData: DynamicForm;
  form: UntypedFormGroup;
  displayThis: boolean;
  size: number;
  payLoad = ' ';
  listOfdependentFields: DynamicFormField<string>[] = [];
  calculations: Calculations;
  @Output() handleSubmit = new EventEmitter();

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

        case 'FORM_GROUP':
          this.formPrep(dependentKeys, value);
          break;
      }
    }
  }

  formPrep(dependentKeys: any, value: any) {
    dependentKeys.forEach((dependentKey) => {
      this.formData.formGroups.forEach((form) => {
        if (form.key === dependentKey) {
          if (form.dependency.is === value && !form.visible) {
            form.visible = true;
            form.fieldGroups.forEach((group) => {
              group.fields.forEach((field) => {
                this.form.get(field.key).enable();
              });
            });
          } else {
            form.visible = false;
            form.fieldGroups.forEach((group) => {
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
    this.formData.formGroups
      .find((form) => form.key === formKey)
      .fieldGroups.forEach((group) => {
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

  

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    console.log('payload: ', this.payLoad);
    this.handleSubmit.emit(this.payLoad);
    this.form.reset();
  }
}
