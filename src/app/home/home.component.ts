import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  catagories: any[] = [];
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get('https://gpet-server-app.herokuapp.com/gpet/api/scategory/')
      .subscribe((data) => {
        this.catagories = data as any;
        console.log(data);
      });
    //    this.catagories.push({ svcName: "Template", api: "/assets/amazonMySql.json" })
  }

  onClick(url) {
    console.log('-----------', url);
    this.router.navigate(['/configure'], { queryParams: { url: url } });
  }
}
