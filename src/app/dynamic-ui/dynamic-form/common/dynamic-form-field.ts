import { Dependency } from './dependency';
import { Validator } from './validator';

export class DynamicFormField<T> {
  value: T;
  key: string;
  label: string;
  validator: Validator;
  order: number;
  controlType: string;
  type: string;
  visible: boolean;
  dependency: Dependency = new Dependency();
  dependents: string[];
  dependentType: string;
  options: { key: string; value: string; default: boolean }[];

  // constructor(
  //   keyoptions: {
  //     value?: T;
  //     key?: string;
  //     label?: string;
  //     validator?: Validator;
  //     order?: number;
  //     controlType?: string;
  //     type?: string;
  //     visible?:boolean;
  //     dependency?: Dependency;
  //     dependents?: string[];
  //     dependentType?: string;
   
  //     options?: { key: string; value: string; default: boolean }[];
  //   } = {}
  // ) {
  //   this.value = keyoptions.value;
  //   this.key = keyoptions.key || '';
  //   this.label = keyoptions.label || '';
  //   this.validator = keyoptions.validator || ({} as Validator);
  //   this.order = keyoptions.order === undefined ? 1 : keyoptions.order;
  //   this.controlType = keyoptions.controlType || '';
  //   this.type = keyoptions.type || '';
  //   this.visible=keyoptions.visible || true;
  //   this.dependency = keyoptions.dependency;
  //   this.dependents = keyoptions.dependents;
  //   this.dependentType =keyoptions.dependentType ;
  //   this.options = keyoptions.options || [];

  //   console.log('options:======>', this.options);
  // }
}
