import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DynamicForm } from 'src/app/dynamic-ui/dynamic-form/model/dynamic-form';
import { TableColumn } from 'src/app/dynamic-ui/dynamic-table/model/TableColumn';
import userForm from './form-sample.json';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  formData: DynamicForm;
  


  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    const url = this.route.snapshot.params['id'];
    console.log("form data :", userForm);


    // this.httpClient.get<DynamicForm>("./user-form.json").subscribe((data) => {
    //   this.formData = of(userForm);

    // });
  }


  populateForm() {
    const id = this.route.snapshot.params['id'];
    if (id === 'new') {
      this.formData = userForm;
      return;
    } else {
      this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts/' + id).subscribe(data => {
       
        this.formData = userForm;
        this.formData.data = data;
      })
      // this.data
    }
  }

  ngOnInit(): void {

    this.populateForm()

  }

  onSubmit(data: any) {
    console.log("data:", data);
    if (data && data.id) {
      this.httpClient.put<any>('https://jsonplaceholder.typicode.com/posts/' + data.id, data).subscribe(data => {
        console.log("response:", data);

      })
    } else {

      this.httpClient.post<any>('https://jsonplaceholder.typicode.com/posts/', data).subscribe(data => {
        console.log("response:", data);

      })
    }

  }
}
