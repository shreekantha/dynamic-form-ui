import { DynamicFormGroup } from './dynamic-form-group';

export class DynamicForm {
  id: any;
  name: string;
  description: string;
  data: any;
  formGroups: DynamicFormGroup[];

  constructor(options: {
    id?: any;
    svcName?: string;
    description?: string;
    data?: any;
    formGroups?: DynamicFormGroup[];
  }) {
    console.log('cat======>', options);
    this.id = options.id;
    this.name = options.svcName;
    this.data = options.data;
    this.formGroups = options.formGroups;
  }
}

class svcDetails {
  forms: DynamicFormGroup[];
}
