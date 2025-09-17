import { Component, OnInit } from '@angular/core';
import { Popover } from 'primeng/popover';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenu } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [Popover, InputGroupAddonModule, ButtonModule, InputTextModule, PanelMenu],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Транспорт',
        items: [
          {
            label: 'Documents',
          },
          {
            label: 'Images',
          },
        ],
      },
      {
        label: 'Животные',
        items: [
          {
            label: 'Upload',
          },
          {
            label: 'Download',
          },
          {
            label: 'Sync',
          },
        ],
      },
      {
        label: 'Для дома и дачи',
        items: [
          {
            label: 'Phone',
          },
          {
            label: 'Desktop',
          },
          {
            label: 'Tablet',
          },
        ],
      },
    ];
  }
}
