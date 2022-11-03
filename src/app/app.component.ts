import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableColumn } from './dynamic-ui/dynamic-table/model/TableColumn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

 constructor(private router:Router){

 }

  ngOnInit(): void {
  //  this.router.navigate(['users',1]);
  }

  


}
