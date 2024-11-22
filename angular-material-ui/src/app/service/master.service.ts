import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../Model/post";

@Injectable({
    providedIn: 'root'
})
export class MasterService {
    constructor(private http: HttpClient) {

    }

    getPost(): Observable<Post[]>{
        return this.http.get<Post[]>('http://localhost:3000/posts')
    }
}