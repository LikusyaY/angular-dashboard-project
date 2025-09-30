import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-new-advert-btn',
  standalone: true,
  imports: [ToastModule, ButtonModule],
  providers: [MessageService],
  templateUrl: './new-advert-btn.component.html',
  styleUrl: './new-advert-btn.component.scss',
})
export class NewAdvertBtnComponent {
  constructor(
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router,
  ) {}

  onClick() {
    if (!this.authService.isLoggedIn()) {
      this.messageService.add({
        severity: 'error',
        summary: 'Необходимо пройти авторизацию.',
        life: 3000,
      });
      return;
    }

    this.router.navigate(['/ad-detailed-page']);
  }
}
