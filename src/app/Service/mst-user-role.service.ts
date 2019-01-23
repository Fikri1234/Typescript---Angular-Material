import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MstUserRole } from '../Model/mst-user-role.model';

@Injectable({
  providedIn: 'root'
})
export class MstUserRoleService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  public getAll() {
    return this.http.get<MstUserRole[]>(this.apiUrl + '/userRole/');
  }

  public getById(id: String) {
      return this.http.get<MstUserRole>(this.apiUrl + '/userRole/' + id);
  }

  public create(mstUserRole: MstUserRole) {
      return this.http.post(this.apiUrl + '/userRole/', mstUserRole);
  }

  public update(mstUserRole: any) {
      return this.http.put(this.apiUrl + '/userRole/' + mstUserRole.roleCode, mstUserRole);
  }

  public delete(roleCode: String) {
      return this.http.delete(this.apiUrl + '/userRole/' + roleCode);
  }
}
