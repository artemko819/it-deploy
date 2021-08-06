import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Message,Person} from "../interfaces";

@Injectable({
    providedIn:'root'
})
export  class PersonService{
    constructor(private http:HttpClient ){}

    fetch():Observable<Person[]>{
        return this.http.get<Person[]>('/api/person/get-person')
    }
    create(person:Person):Observable<Person>{
        return this.http.post<Person>('/api/person/add-person',person)
    }
    delete(person:Person):Observable<Message>{
        return this.http.delete<Message>(`/api/person/${person._id}`)
    }

}
