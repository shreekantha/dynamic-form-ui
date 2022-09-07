import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { DynamicFormField } from '../common/dynamic-form-field';
import { DynamicFormFieldGroup } from '../common/dynamic-form-field-group';
import { DynamicFormGroup } from '../common/dynamic-form-group';

@Component({
  selector: 'FormInput',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css'],
})
export class DynamicFormInputComponent {
  @Input() input: DynamicFormField<string>;
  @Input() form: UntypedFormGroup;
  @Input() serviceForm: DynamicFormGroup;
  @Input() group: DynamicFormFieldGroup;
  @Output() dependencyFieldData = new EventEmitter();
  dependent: any;
  listOfdependentFields: DynamicFormField<string>[] = [];
  displayThis = false;
  size: any;
  constructor() {
    // console.log(' ---------', this.group);
  }
  get isValid() {
    return this.form.controls[this.input.key].valid;
    // return true;
  }

  onChange(formKey, value, dependentKeys, dependentType) {
    const data = { formKey, dependentKeys, value, dependentType };
    console.log('data:=========', data);
    this.dependencyFieldData.emit(data);
  }
}
