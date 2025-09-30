import { Component, OnInit } from '@angular/core';
import { AdCardComponent } from '../ad-card/ad-card.component';
import { ShortAdvertDtoInterface } from '../../../../infrastructure/adverts/dto';
import { AdvertsApiService } from '../../../../infrastructure/adverts/services';
import { AdvertDtoInterface } from '../../../../infrastructure/adverts/dto/advert.dto.interface';
import { environment } from '../../../../../environments/environment';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ads-list',
  imports: [AdCardComponent, NgFor],
  templateUrl: './ads-list.component.html',
  styleUrl: './ads-list.component.scss',
})
export class AdsListComponent implements OnInit {
  adverts: AdvertDtoInterface[] = [];
  constructor(private adsService: AdvertsApiService) {}

  ngOnInit(): void {
    this.adsService.getList().subscribe((dtoList: ShortAdvertDtoInterface[]) => {
      this.adverts = dtoList.map((dto) => ({
        id: dto.id,
        name: dto.name,
        location: dto.location || 'Не указано',
        date: dto.createdAt,
        image: dto.imagesIds.length
          ? `${environment.baseApiURL}/Images/${dto.imagesIds[0]}`
          : '/placeholder.png',
        price: dto.cost,
      }));
    });
  }
}
