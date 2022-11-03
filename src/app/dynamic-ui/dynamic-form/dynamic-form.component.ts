import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormGroup } from '@angular/forms';
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
  form: FormGroup;
  @Output() handleSubmit = new EventEmitter();

  constructor(
    private formfieldService: FormfieldControlService
  ) { }

  ngOnInit(): void {
    this.form = this.formfieldService.toServiceFormGroup(this.formData);
  }

  onChange(data) {
    //Object Destructuring
    const { dependentKeys, value, formKey, fieldGroupKey, dependentType } = data;
    // console.log("dependent Keys:", dependentKeys);

    if (dependentKeys) {
      switch (dependentType) {
        case 'CONTROL':
          this.formFieldPrep(formKey, dependentKeys, value);
          break;

        case 'FORM_GROUP':
          // this.formPrep(dependentKeys, value);
          this.prepFormGroup(dependentKeys, value);
          break;
      }
    }
    return;
  }


  formPrep(dependentKeys: any, value: any) {
    console.log("form value:", value);

    dependentKeys.forEach((dependentKey) => {
      this.formData.formGroups.forEach((formGroup) => {

        if (formGroup.key === dependentKey) {
          console.log("key:", formGroup.key, "-dependnetkey:", dependentKey);
          if (formGroup.dependency.is === value && !formGroup.visible) {
            formGroup.visible = true;
            formGroup.fieldGroups.forEach((fieldGroup) => {
              fieldGroup.fields.forEach((field) => {
                this.form.get(field.key).enable();
              });
            });
          } else {
            formGroup.visible = false;
            formGroup.fieldGroups.forEach((fieldGroup) => {
              fieldGroup.fields.forEach((field) => {
                this.form.get(field.key).disable();
              });
            });
          }
        }
      });
    });
  }

  private prepFormGroup(dependentKeys: any, value: any) {
    // console.log("keys : ", dependentKeys, "-value:", value);
    dependentKeys.forEach((dependentKey) => {
      let group = this.formData.formGroups.find(formGroup => formGroup?.key === dependentKey);
      if (group && group?.dependency?.is === value) {
        // group.visible = true
        group.notVisible = false
        group.fieldGroups.forEach(fg => {
          fg.fields.forEach(fd => {
            this.form.get(fd.key).enable();
          })
        })
      } else {
        // group.visible = false
        group.notVisible = true
        group.fieldGroups.forEach(fg => {
          fg.fields.forEach(fd => {
            this.form.get(fd.key).disable();
          })
        })
      }
    });
  }

  private formFieldPrep(formGroupKey: any, dependentKeys: any, value: any) {
    this.formData.formGroups
      .find((formGroup) => formGroup.key === formGroupKey)
      .fieldGroups.forEach((fieldGroup) => {
        fieldGroup.fields.forEach((controlField) => {
          // console.log("",controlField.dependency.is,":",controlField.visible);

          dependentKeys.forEach((dependentKey) => {
            if (dependentKey === controlField.key) {
              if (
                controlField.dependency.is === value &&
                controlField.notVisible
              ) {
                // console.log('oprions:', controlField.key);
                controlField.notVisible = false;
                this.form.get(controlField.key).enable();
              } else {
                // console.log('else oprions:', controlField.key);
                controlField.notVisible = true;
                this.form.get(controlField.key).disable();
                // console.log("control fields :", { ...controlField });
              }
            }
          });
        });
      });
    // console.log("form data in form prep :", this.formData);
  }

  onSubmit() {
    // this.payLoad = JSON.stringify(this.form.getRawValue());
   const payLoad = this.form.getRawValue();

    // console.log('payload: ', this.payLoad);
    this.handleSubmit.emit(payLoad);
    // this.form.reset();
  }
}
