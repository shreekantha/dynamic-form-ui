import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { DynamicForm } from './common/dynamic-form';

@Injectable({
  providedIn: 'root',
})
export class FormfieldControlService {
  constructor() {}

  toServiceFormGroup(category: DynamicForm): FormGroup {
    const group: any = {};

    category.formGroups.forEach((form) => {
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

            group[field.key] = new FormControl(
              field.value || defaultValue || '',
              validator
            );
          } else {
            group[field.key] = new FormControl(
              field.value || defaultValue || ''
            );
          }
        })
      );
    });

    return new FormGroup(group);
  }
}
