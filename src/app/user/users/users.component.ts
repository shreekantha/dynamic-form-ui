import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Table } from 'src/app/dynamic-ui/dynamic-table/model/Table';
import { TableColumn } from 'src/app/dynamic-ui/dynamic-table/model/TableColumn';
import userTable from './users-table.json'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends Table implements OnInit {

  // tableColumns: TableColumn[] = [
  //   { label: 'Id', key: 'id' },
  //   { label: 'User ID', key: 'userId', isSortable: true,position:"right" },
  //   { label: 'Title', key: 'title' },
  //   { label: 'Body', key: 'body', isSortable: true,position:"left" },
  //   { label: "View", icon: 'pen', isActionable: true, action: 'view' },
  //   { label: "Edit", icon: 'pen', isActionable: true, action: 'edit' },
  //   { label: "Delete", icon: 'pen', isActionable: true, action: 'delete' }
  // ]


  table:any=userTable;




  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) {
    super()
  }



  ngOnInit(): void {
    this.tableColumns=this.table.columns;
    this.getData({'pageIndex':0})
  }

  getData(page): void {
    this.httpClient.get<any>('https://reqres.in/api/users?page='+(page.pageIndex+1)).subscribe(data => {
      this.tableData =[];
      this.tableData = data.data;
      this.total=data.total;
      console.log("data :",this.tableData);
      
    })
    // this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
    //   this.tableData = data;
    //   this.total = data.length;
    // })
  }

  handleSort(event: any): void {
    console.log("sort:", event);


  }

  handleFilter(event: any): void {
    console.log("filter:", event);
  }

  handleView(event: any) { }

  handleEdit(event: any) {
    console.log("event at handle :", event);

    this.router.navigate([event.id], { relativeTo: this.route });
  }
  handleDelete(event: any) { }
  handlePaginate(event: any) {
    console.log("paginate:",event);
    
    this.getData(event)
   }


}
