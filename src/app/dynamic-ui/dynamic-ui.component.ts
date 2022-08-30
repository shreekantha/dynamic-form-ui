import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DynamicForm } from './dynamic-form/common/dynamic-form';

@Component({
  selector: 'dynamic-ui',
  templateUrl: './dynamic-ui.component.html',
  styleUrls: ['./dynamic-ui.component.css'],
})
export class DynamicUiComponent {
  formData: Observable<DynamicForm>;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    const url = this.route.snapshot.queryParams['url'];

    this.httpClient.get<DynamicForm>(url).subscribe((data) => {
      this.formData = of(data);
    });
  }

  onSubmit(formData) {
    console.log('final data: ', formData);
  }
}
