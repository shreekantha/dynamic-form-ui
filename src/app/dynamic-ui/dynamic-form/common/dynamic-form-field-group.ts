import { DynamicFormField } from './dynamic-form-field';

export class DynamicFormFieldGroup {
  key:any;
  order: number;
  name:any;
  description:any;
  fields: DynamicFormField<any>[];

  constructor(options: {key?:any; order?: number; fields?: DynamicFormField<any>[] }) {
    console.log('field group:====', options);
    this.key=options.key;
    this.order = options.order;
    this.fields = options.fields;
  }
}
