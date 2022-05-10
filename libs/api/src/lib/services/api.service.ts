import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserDto } from '../dto-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected API_PATH: string;

  constructor(
    private readonly httpClient: HttpClient,
  ) {
    this.API_PATH = `https://627a6c7173bad5068588a8f2.mockapi.io/api/v1`;
  }

  loadUsers$(): Observable<IUserDto[]> {
    return this.httpClient.get<IUserDto[]>(`${this.API_PATH}/users`)
  }

  loadUser$(userId: string): Observable<IUserDto> {
    return this.httpClient.get<IUserDto>(`${this.API_PATH}/users/${userId}`)
  }
}
