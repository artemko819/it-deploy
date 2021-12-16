import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Message,MainForm} from "../interfaces";

@Injectable({
    providedIn:'root'
})
export  class MainFormService{
    constructor(private http:HttpClient ){}

    fetch():Observable<MainForm[]>{
        return this.http.get<MainForm[]>('/api/landing/get-main')
    }
    create(form:MainForm):Observable<MainForm>{
        return this.http.post<MainForm>('/api/landing/add-main',form)
    }
    delete(form:MainForm):Observable<Message>{
        return this.http.delete<Message>(`/api/landing/${form._id}`)
    }

}
