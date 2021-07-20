import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServiceFormCategory } from './dynamic-form/common/service-form-category';

@Component({
  selector: 'dynamic-ui',
  templateUrl: './dynamic-ui.component.html',
  styleUrls: ['./dynamic-ui.component.css'],
})
export class DynamicUiComponent {
  serviceFormCategory: Observable<ServiceFormCategory>;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    const url = this.route.snapshot.queryParams['url'];

    this.httpClient.get<ServiceFormCategory>(url).subscribe((data) => {
      this.serviceFormCategory = of(data);
    });
  }
}
