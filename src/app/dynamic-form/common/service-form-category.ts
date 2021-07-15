import { ServiceForm } from './service-form';

export class ServiceFormCategory {
  svcName: string;
  description: string;
  svcDetails: svcDetails;
}

class svcDetails {
  forms: ServiceForm[];
}
