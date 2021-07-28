import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Message,Consult} from "../interfaces";

@Injectable({
    providedIn:'root'
})
export  class PersonService{
    constructor(private http:HttpClient ){}

    fetch():Observable<Consult[]>{
        return this.http.get<Consult[]>('/api/consult/get-consult')
    }
    create(consult:Consult):Observable<Consult>{
        return this.http.post<Consult>('/api/consult/add-consult',consult)
    }
    delete(consult:Consult):Observable<Message>{
        return this.http.delete<Message>(`/api/consult/${consult._id}`)
    }

}
