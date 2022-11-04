import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { DynamicForm } from './model/dynamic-form';

@Injectable({
  providedIn: 'root',
})
export class FormfieldControlService {
  constructor() { }

  toServiceFormGroup(dynamicForm: DynamicForm, data?: any): FormGroup {
    // console.log("service form:", dynamicForm.data)
    const group: any = {};
    dynamicForm.formGroups.forEach((form) => {
      form.fieldGroups.forEach((formgroup) =>
        formgroup.fields.forEach((field) => {
          let defaultValue;
          if (field.options) {
            let opt = field.options.find((op) => op.default == true);
            if (opt) defaultValue = opt['key'];
            // console.log(opt.key, ':', defaultValue);
          }
          if (field.validator) {
            let validator: ValidatorFn[] = field.validator.required
              ? [Validators.required]
              : [];
            if (field.validator.minLength) {
              validator.push(Validators.minLength(field.validator.minLength));
            }
            if (field.validator.maxLength) {
              validator.push(Validators.maxLength(field.validator.maxLength));
            }
            if (field.validator.pattern) {
              validator.push(Validators.pattern(field.validator.pattern));
            }
            // console.log("value dataaaaaaaaaaaaaa:", dynamicForm?.data);
            group[field.key] = new FormControl(
              dynamicForm.data ? dynamicForm.data[field.key] : '',
              validator
            );

          } else {
            // console.log("value dataaaaaaaaaaaaaa:", dynamicForm?.data);
            group[field.key] = new FormControl(
              dynamicForm.data ? dynamicForm.data[field.key] : ''
            );
          }
        })
      );
    });

    return new FormGroup(group);
  }
}
