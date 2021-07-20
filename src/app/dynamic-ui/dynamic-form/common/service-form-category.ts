import { ServiceForm } from './service-form';

export class ServiceFormCategory {
  id: any;
  svcName: string;
  description: string;
  svcDetails: svcDetails;

  constructor(options: {
    id?: any;
    svcName?: string;
    description?: string;
    svcDetails?: svcDetails;
  }) {
    console.log('cat======>', options);
    this.id = options.id;
    this.svcName = options.svcName;
    this.svcDetails = options.svcDetails;
  }
}

class svcDetails {
  forms: ServiceForm[];
}
