import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShortAdvertDtoInterface } from '../dto';
//import { AdvertSearchRequestDto } from '../dto';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdvertsApiService {
  private apiUrl = `${environment.baseApiURL}/Advert/search `;

  private readonly http = inject(HttpClient);

  getList(): Observable<ShortAdvertDtoInterface[]> {
    return this.http.post<ShortAdvertDtoInterface[]>(this.apiUrl, null);
  }
}
