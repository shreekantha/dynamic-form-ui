import { FormField } from './service-form-field';

export class ServiceFormFieldGroup {
  order: number;
  fields: FormField<string>[];
}
