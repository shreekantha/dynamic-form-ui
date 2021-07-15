import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServiceFormCategory } from '../dynamic-form/common/service-form-category';
import { FormfieldControlService } from '../dynamic-form/formfield-control.service';

@Component({
  selector: 'app-dynamic-form-main-component',
  templateUrl: './dynamic-form-main-component.component.html',
  styleUrls: ['./dynamic-form-main-component.component.css'],
})
export class DynamicFormMainComponentComponent {
  serviceFormCategory: Observable<ServiceFormCategory>;
  url: any;
  constructor(
    service: FormfieldControlService,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.url = this.route.snapshot.queryParams['url'];
    console.log('url:{}', this.url);
    this.httpClient.get(this.url).subscribe((data) => {
      this.serviceFormCategory = of(data as ServiceFormCategory);
      console.log('service form cat:', this.serviceFormCategory);
    });
  }
}
