import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../user';
import { Observable } from 'rxjs';
import { Login } from '../login';
import { ReturnedFromLogin } from '../returnedFromLogin';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API = 'http://localhost:5176/user';
  private readonly APILogin = 'http://localhost:5176/login';

  constructor(private http: HttpClient) { }

  Login(userLogin: Login): Observable<ReturnedFromLogin> {
    return this.http.post<ReturnedFromLogin>(this.APILogin, userLogin)
  }

  ListUser(id: number, token: string): Observable<User> {
    return this.http.get<User>(`${this.API}/id/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    })
  }

  UpdateUser(id: number, token: string, user: User) {
    return this.http.put(`${this.API}/${id}`, user, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    })
  }

  RegisterUser(user: User) {
    return this.http.post(this.API, user)
  }
}
