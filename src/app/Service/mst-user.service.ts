import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MstUser } from '../Model/mst-user.model';

@Injectable({
  providedIn: 'root'
})
export class MstUserService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  public getAll() {
    return this.http.get<MstUser[]>(this.apiUrl + '/user/');
  }

  public getAllPaging(page: number, pagingSize: number) {
    return this.http.get<MstUser[]>(this.apiUrl + '/user/' + page + '/' + pagingSize);
  }

  public getById(id: String) {
      return this.http.get<MstUser>(this.apiUrl + '/user/' + id);
  }

  public create(mstUser: MstUser) {
      return this.http.post(this.apiUrl + '/user/', mstUser);
  }

  public update(mstUser: any) {
      return this.http.put(this.apiUrl + '/user/' + mstUser.userId, mstUser);
  }

  public delete(userId: String) {
      return this.http.delete(this.apiUrl + '/user/' + userId);
  }
}
