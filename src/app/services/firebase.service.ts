import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient) {}
  insertClient(url: string, body: {}) {
    return this.http.post(url, body);
  }
  getClient(url: string) {
    return this.http.get(url);
  }
  deleteClient(url: string, id: string) {
    console.log(`${url}/${id}.json`);
    return this.http.delete(`${url}/${id}.json`);
  }
}
