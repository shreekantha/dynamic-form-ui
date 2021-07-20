import { FormField } from './service-form-field';

export class ServiceFormFieldGroup {
  order: number;
  fields: FormField<any>[];

  constructor(options: { order?: number; fields?: FormField<any>[] }) {
    console.log('field group:====', options);
    this.order = options.order;
    this.fields = options.fields;
  }
}
