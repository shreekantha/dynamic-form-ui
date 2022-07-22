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
  //   options: {
  //     value?: T;
  //     key?: string;
  //     label?: string;
  //     order?: number;
  //     controlType?: string;
  //     type?: string;
  //     visible?:boolean;
  //     dependency?: Dependency;
  //     dependents?: string[];
  //     dependentType?: string;
  //     validator?: Validator;
  //     options?: { key: string; value: string; checked: boolean }[];
  //   } = {}
  // ) {
  //   this.value = options.value;
  //   this.key = options.key || '';
  //   this.label = options.label || '';
  //   this.validator = options.validator || ({} as Validator);
  //   this.order = options.order === undefined ? 1 : options.order;
  //   this.controlType = options.controlType || '';
  //   this.type = options.type || '';
  //   this.dependency =
  //     options.dependency === undefined
  //       ? ({} as Dependency)
  //       : options.dependency;
  //   this.dependents = options.dependents;
  //   this.dependentType =
  //     options.dependentType === undefined ? 'CONTROL' : options.dependentType;
  //   this.options = options.options || [];

  //   console.log('options:======>', this.options);
  // }
}
