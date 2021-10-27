import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = ""
  constructor() { }
}
declare module "*.json" {
  const value: any;
  export default value;
}