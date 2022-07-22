import { DynamicFormField } from './dynamic-form-field';

export class DynamicFormFieldGroup {
  order: number;
  fields: DynamicFormField<any>[];

  constructor(options: { order?: number; fields?: DynamicFormField<any>[] }) {
    console.log('field group:====', options);
    this.order = options.order;
    this.fields = options.fields;
  }
}
