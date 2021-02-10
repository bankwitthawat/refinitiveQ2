import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'pretest-q2';

  keyword?: string = "";

  category: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initialData();
  }

  initialData(): void {
    this.getCategory().subscribe(res =>{ this.category = res});
  }


  getCategory(): Observable<any> {
    return this.http.get<any>("https://api.publicapis.org/categories");
  }
}
