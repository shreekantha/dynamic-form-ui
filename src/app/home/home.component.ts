import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableColumn } from '../dynamic-ui/dynamic-table/TableColumn';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  catagories: any[] = [];
  total:number=0;

  ngOnInit(): void {
   
  }

  tableData: any[] = [];
  tableColumns: TableColumn[] = [
    { name: "Id", dataKey: 'id', isSortable: true, position: "right" },
    { name: "Email", dataKey: 'email',  position: "left" },
    { name: "FirstName", dataKey: 'first_name', isSortable: true, position: "left" },
    { name:'LastName',dataKey:'last_name',isSortable:true},
    { name: "View", icon: "view", action: 'view', isActionable: true },
    { name: "Delete", icon: "delete", action: 'delete', isActionable: true },
    { name: "Edit", icon: "edit", action: 'edit', isActionable: true }
  ]

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {
    const url = this.route.snapshot.queryParams['url'];
    this.getData();
  }

  getData(){
    this.httpClient.get<any>("https://reqres.in/api/users?page=1").subscribe(data => {
      this.tableData = data.data;
      console.table(this.tableData)
      this.total=data.total
    })
  }

  handleSort(event) {
    console.log("sort", event)
  }

  handleFilter(event) {
    console.log("filter :", event);
  }

  handleAction(event) {
    switch (event.action) {
      case 'view':
      console.log("view clickeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
      
        break;
      case 'edit':  // constructor(private router: Router, private http: HttpClient) { }

        console.log("edit clicked");
        
        break;
      case 'delete':
        console.log("delete clicked");
        this.getData()
        break;
      case 'paginate':
        console.log("pagination clicked");
        
        break;

      default:
        break;
    }
    console.log("action :", event);

  }
}
