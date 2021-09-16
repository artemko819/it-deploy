import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Message, Anketa} from "../interfaces";

@Injectable({
    providedIn:'root'
})
export  class AnketaService{
    constructor(private http:HttpClient ){}

    fetch():Observable<Anketa[]>{
        return this.http.get<Anketa[]>('/api/ankets/get-ankets')
    }
    create(consult:Anketa):Observable<Anketa>{
        console.log(consult)
        return this.http.post<Anketa>('/api/ankets/add-ankets',consult)
    }
    delete(consult:Anketa):Observable<Message>{
        return this.http.delete<Message>(`/api/ankets/${consult._id}`)
    }

}
