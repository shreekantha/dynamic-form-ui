import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServiceForm } from '../common/service-form';
import { FormField } from '../common/service-form-field';
import { ServiceFormFieldGroup } from '../common/service-form-field-group';

@Component({
  selector: 'FormInput',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css'],
})
export class DynamicFormInputComponent {
  @Input() input: FormField<string>;
  @Input() form: FormGroup;
  @Input() serviceForm: ServiceForm;
  @Input() group: ServiceFormFieldGroup;
  @Output() dependencyFieldData = new EventEmitter();
  dependent: any;
  listOfdependentFields: FormField<string>[] = [];
  displayThis = false;
  size: any;
  constructor() {
    // console.log(' ---------', this.group);
  }
  get isValid() {
    return this.form.controls[this.input.key].valid;
    return true;
  }

  onChange(formKey, value, dependentKeys, dependentType) {
    const data = { formKey, dependentKeys, value, dependentType }
    console.log("data:=========",data)
    this.dependencyFieldData.emit(data);
  
  }
}
