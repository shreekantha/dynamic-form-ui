import { Dependency } from './dependency';
import { ServiceFormFieldGroup } from './service-form-field-group';

export class ServiceForm {
  id: any;
  key: string;
  name: string;
  description: string;
  visible: boolean;
  showCalcs: boolean;
  groups: ServiceFormFieldGroup[] = [new ServiceFormFieldGroup({})];
  dependency: Dependency = new Dependency();
}
