import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';
import { ServiceFormCategory } from './common/service-form-category';
import { FormField } from './common/service-form-field';

@Injectable({
  providedIn: 'root',
})
export class FormfieldControlService {
  constructor() {}

  

  toServiceFormGroup(category: ServiceFormCategory): FormGroup {
    const group: any = {};

    console.log('category:{}', category);
    category.svcDetails.forms.forEach((form) => {
      form.groups.forEach((formgroup) =>
        formgroup.fields.forEach((input) => {
          console.log("input.validator.required",input.validator);
          if(input.validator){

            let validator: ValidatorFn[] = input.validator.required
            ? [Validators.required]
            : [];
            if(input.validator.minLength){
                   validator.push(Validators.minLength(input.validator.minLength));
            }
            if(input.validator.maxLength){
              validator.push(Validators.maxLength(input.validator.maxLength));
            }
            if(input.validator.pattern){
              validator.push(Validators.pattern(input.validator.pattern));
            }

            group[input.key] =  new FormControl(input.value || '', validator)
              
      
      }else{
        group[input.key] = new FormControl(input.value || '');
      }
      
    })
  )
});
         
   console.log("form--->",group);      
         
      
  

    return new FormGroup(group);
  }

  getFormFields(data: any) {
    const inputs: FormField<string>[] = [];
    data.forEach((element) => {
      inputs.push(new FormField<string>(element));
    });

    return of(inputs.sort((a, b) => a.order - b.order));
  }
}
