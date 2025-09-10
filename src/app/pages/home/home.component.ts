import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/smart/header/header.component";
import { AdsListComponent } from "../../shared/components/smart/ads-list/ads-list.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AdsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
