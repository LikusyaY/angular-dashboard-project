import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvertDtoInterface } from '../../../../infrastructure/adverts/dto/advert.dto.interface';

@Component({
  selector: 'app-ad-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './ad-card.component.html',
  styleUrl: './ad-card.component.scss',
})
export class AdCardComponent {
  @Input() data!: AdvertDtoInterface;
}
