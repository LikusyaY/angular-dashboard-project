import { Component } from '@angular/core';
import { AdCardComponent } from '../../../shared/components/smart';

@Component({
  selector: 'app-user-ads',
  imports: [AdCardComponent],
  templateUrl: './user-ads.component.html',
  styleUrl: './user-ads.component.scss',
})
export class UserAdsComponent {}
