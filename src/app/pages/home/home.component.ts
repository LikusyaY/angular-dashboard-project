import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { AdsListComponent } from "../../components/ads-list/ads-list.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, AdsListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
