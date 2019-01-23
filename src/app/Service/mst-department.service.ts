import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MstDepartment } from '../Model/mst-department.model';

@Injectable({
  providedIn: 'root'
})
export class MstDepartmentService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  public getAll() {
    return this.http.get<MstDepartment[]>(this.apiUrl + '/department/');
  }

  public getById(id: number) {
      return this.http.get<MstDepartment>(this.apiUrl + '/department/' + id);
  }

  public create(mstDepartment: MstDepartment) {
      return this.http.post(this.apiUrl + '/department/', mstDepartment);
  }

  public update(mstDepartment: any) {
      return this.http.put(this.apiUrl + '/department/' + mstDepartment.id, mstDepartment);
  }

  public delete(id: number) {
      return this.http.delete(this.apiUrl + '/department/' + id);
  }
}
