import { DynamicFormGroup } from './dynamic-form-group';

export class DynamicForm {
  id: any;
  svcName: string;
  description: string;
  svcDetails: svcDetails;
  formGroups: DynamicFormGroup[];

  constructor(options: {
    id?: any;
    svcName?: string;
    description?: string;
    svcDetails?: svcDetails;
    formGroups?: DynamicFormGroup[];
  }) {
    console.log('cat======>', options);
    this.id = options.id;
    this.svcName = options.svcName;
    this.svcDetails = options.svcDetails;
    this.formGroups = options.formGroups;
  }
}

class svcDetails {
  forms: DynamicFormGroup[];
}
