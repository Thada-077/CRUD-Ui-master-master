import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './user';

class Product {
}

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http: HttpClient) { }

  fetchListFromRemote(): Observable<any>{
    return this._http.get<any>('http://localhost:8088/getuserlist');
  }
  addToRemote(product: Product): Observable<any>{
    return this._http.post<any>('http://localhost:8088/adduser',product);
  }
  updateToRemote(product: Product): Observable<any>{
    return this._http.post<any>('http://localhost:8088/edituser',product);
  }
  fetchBdyIdFromRemote(id: number): Observable<any> {
    return this._http.get<any>('http://localhost:8088/getuserbyid/'+id);
  }
  deleteBdyIdFromRemote(id: number): Observable<any> {
    return this._http.delete<any>('http://localhost:8088/deleteuserbyid/' + id);
  }
  fetchProvinceFromRemote(): Observable<any>{
    return this._http.get<any>('http://localhost:8088/address/getProvince');
  }
  fetchDistrictFromRemote(): Observable<any>{
    return this._http.get<any>('http://localhost:8088/getDistrict/');
  }
  fetchsubdistrictFromRemote(): Observable<any>{
    return this._http.get<any>('http://localhost:8088/getsubdistrict');
  }
  public loginUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:8088/login",user)
  }
  public registerUserFromRemote(user: User):Observable<any>{
    return this._http.post<any>("http://localhost:8088/registeruser",user)
  }
}
