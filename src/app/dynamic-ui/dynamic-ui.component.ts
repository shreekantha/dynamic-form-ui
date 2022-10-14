import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { DynamicForm } from './dynamic-form/common/dynamic-form';
import { TableActionColumn } from './dynamic-table/TableActionColumn';
import { TableColumn } from './dynamic-table/TableColumn';

@Component({
  selector: 'dynamic-ui',
  templateUrl: './dynamic-ui.component.html',
  styleUrls: ['./dynamic-ui.component.css'],
})
export class DynamicUiComponent {
  formData: Observable<DynamicForm>;
  tableData: any[] = [];
  tableColumns: TableColumn[] = [
    { name: "UserId", dataKey: 'userId', isSortable: false, position: "left" }, 
    { name: "Id", dataKey: 'id', isSortable: true, position: "left" }, 
    { name: "Title", dataKey: 'title', isSortable: true, position: "left"},
    { name: "Delete",icon:"delete",isActionable:true },
    { name: "Edit",icon:"edit",isActionable:true }
   ]
  
 
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    const url = this.route.snapshot.queryParams['url'];
  
    this.httpClient.get<DynamicForm>("/assets/amazonMySql.json").subscribe((data) => {
      this.formData = of(data);
    });

    this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
      console.table( data)
      this.tableData = data;
    })
  }


  sortData(event){
    console.log("event",event)
  }

  onSubmit(formData) {
    console.log('final data: ', formData);
  }
}
