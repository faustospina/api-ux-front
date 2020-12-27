import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs'
import { Activity } from '../components/dto/activity';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  constructor(private http: HttpClient) { }

  getActivities():Observable<Activity[]> {
    return this.http.get<Activity[]>(`http://localhost:8085/activities`);

  }

  getActivityById(id:number):Observable<Activity> {
    return this.http.get<Activity>(`http://localhost:8085/activities/${id}`);

  }

  deleteActivityById(id:number):Observable<any> {
    return this.http.delete<any>(`http://localhost:8085/activities/delete/${id}`);
  }

  saveActivity(activity:Activity): Observable<Activity>{
    return this.http.post<Activity>(`http://localhost:8085/activities/add`,activity);
  }

  aditActivity(activity:Activity): Observable<Activity>{
    return this.http.post<Activity>(`http://localhost:8085/activities/edit`,activity);
  }

  
}
