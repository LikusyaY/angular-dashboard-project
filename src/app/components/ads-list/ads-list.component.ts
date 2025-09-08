import { Component } from '@angular/core';
import { AdCardComponent } from "../ad-card/ad-card.component";

@Component({
  selector: 'app-ads-list',
  imports: [AdCardComponent],
  templateUrl: './ads-list.component.html',
  styleUrl: './ads-list.component.scss'
})
export class AdsListComponent {

}
