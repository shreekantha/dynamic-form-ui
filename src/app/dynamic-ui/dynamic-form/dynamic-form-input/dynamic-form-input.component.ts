import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, UntypedFormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { DynamicFormField } from '../model/dynamic-form-field';
import { DynamicFormFieldGroup } from '../model/dynamic-form-field-group';
import { DynamicFormGroup } from '../model/dynamic-form-group';

@Component({
  selector: 'FormInput',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css'],
})
export class DynamicFormInputComponent {
  @Input() input: DynamicFormField<string>;
  @Input() form: FormGroup;
  @Input() group: DynamicFormGroup;
  @Input() fieldGroup: DynamicFormFieldGroup;
  @Output() dependencyFieldData = new EventEmitter();
  @ViewChild('select') private select: MatSelect;
  
  constructor() {
    console.log("onchange of cotrol");
  }
  get isValid() {
    return this.form.controls[this.input.key].valid;

  }

  onChange(formKey, fieldGroupKey, input, event) {
     console.log("event:",event,":",input);

    if (input.dependents) {
      const data = { formKey, fieldGroupKey, dependentKeys: input.dependents, value: input.controlType == 'radio' ? event.source.value : event.target.value, dependentType: input.dependentType };
       console.log('dependents data:=========', data);
      this.dependencyFieldData.emit(data);
    }
  }
}
