import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './service/navigation.service';
import { CategoriesComponent } from '../categories/categories.component';
// import { AuthFormComponent } from '../auth-form/auth-form.component';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderSearchComponent } from '../header-search/header-search.component';

@Component({
  selector: 'app-header',
  imports: [
    CategoriesComponent,
    Dialog,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    HeaderSearchComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl(),
    });

    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null),
    });
  }

  // constructor(private router: Router) { }

  //     goToComponentCategories() {
  //       this.router.navigate(['/categories']);
  //     }

  visible = false;

  showDialog() {
    this.visible = true;
  }

  constructor(
    private router: Router,
    private navigationService: NavigationService,
  ) {}

  goToComponentCategories() {
    if (this.router.url === '/categories') {
      const prevUrl = this.navigationService.getPreviousUrl();
      if (prevUrl) {
        this.router.navigateByUrl(prevUrl);
      } else {
        this.router.navigate(['/']); // если история пуста
      }
    } else {
      this.router.navigate(['/categories']);
    }
  }
}
