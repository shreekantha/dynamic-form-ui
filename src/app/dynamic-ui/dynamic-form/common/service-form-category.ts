import { ServiceForm } from './service-form';

export class ServiceFormCategory {
  id: any;
  svcName: string;
  description: string;
  svcDetails: svcDetails;
}

class svcDetails {
  forms: ServiceForm[];
}
