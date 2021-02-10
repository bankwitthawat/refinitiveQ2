import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class InitDataService {

    constructor(private http: HttpClient) {

    }


    getCategory() {
        return this.http.get<any>("https://api.publicapis.org/categories").subscribe();
    }
}