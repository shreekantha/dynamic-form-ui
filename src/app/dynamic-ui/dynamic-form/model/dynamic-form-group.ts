import { Dependency } from './dependency';
import { DynamicFormFieldGroup } from './dynamic-form-field-group';

export class DynamicFormGroup {
  id: any;
  key: string;
  name: string;
  description: string;
  visible: boolean;
  notVisible:boolean;
  fieldGroups: DynamicFormFieldGroup[] = [new DynamicFormFieldGroup({})];
  dependency: Dependency = new Dependency();
}
