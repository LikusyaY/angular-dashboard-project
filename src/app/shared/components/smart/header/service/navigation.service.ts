import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// 
export class NavigationService {
  private history: string[] = [];

  constructor(private router: Router) {
    // Загружаем историю из localStorage
    const savedHistory = localStorage.getItem('navHistory');
    if (savedHistory) {
      this.history = JSON.parse(savedHistory);
    }

    // Подписываемся на события роутера
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.history.push(event.urlAfterRedirects);
        localStorage.setItem('navHistory', JSON.stringify(this.history));
      });
  }

  public getPreviousUrl(): string | null {
    if (this.history.length > 1) {
      return this.history[this.history.length - 2];
    }
    return null;
  }
} 