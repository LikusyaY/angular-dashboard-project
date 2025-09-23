import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdvertSearchRequestDto, ShortAdvertDtoInterface } from '../dto';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdvertsApiService {
  private readonly http = inject(HttpClient);

  getList(filter: AdvertSearchRequestDto): Observable<ShortAdvertDtoInterface[]> {
    return this.http.post<ShortAdvertDtoInterface[]>(
      `${environment.baseApiURL}/Advert/search`,
      filter,
    );
  }
}
