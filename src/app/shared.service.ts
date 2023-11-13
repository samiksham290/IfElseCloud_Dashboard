import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from './shared.type';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _httpClient: HttpClient) { }

   /**
     * Get exam details
     */
   getDashboardData()
   {   
       return this._httpClient.get<Dashboard>('https://1.api.fy23ey05.careers.ifelsecloud.com');
   }

}
