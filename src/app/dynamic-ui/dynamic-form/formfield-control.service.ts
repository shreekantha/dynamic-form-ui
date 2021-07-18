import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ServiceFormCategory } from './common/service-form-category';

@Injectable({
  providedIn: 'root',
})
export class FormfieldControlService {
  constructor() {}

  toServiceFormGroup(category: ServiceFormCategory): FormGroup {
    const group: any = {};

    category.svcDetails.forms.forEach((form) => {
      form.groups.forEach((formgroup) =>
        formgroup.fields.forEach((input) => {
          if (input.validator) {
            let validator: ValidatorFn[] = input.validator.required
              ? [Validators.required]
              : [];
            if (input.validator.minLength) {
              validator.push(Validators.minLength(input.validator.minLength));
            }
            if (input.validator.maxLength) {
              validator.push(Validators.maxLength(input.validator.maxLength));
            }
            if (input.validator.pattern) {
              validator.push(Validators.pattern(input.validator.pattern));
            }

            group[input.key] = new FormControl(input.value || '', validator);
          } else {
            group[input.key] = new FormControl(input.value || '');
          }
        })
      );
    });

    return new FormGroup(group);
  }
}
