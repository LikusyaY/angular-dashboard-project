import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { NavigationService } from './service/navigation.service';
import { CategoriesComponent } from '../categories/categories.component';
// import { AuthFormComponent } from '../auth-form/auth-form.component';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderSearchComponent } from '../header-search/header-search.component';
import { NewAdvertBtnComponent } from '../new-advert-btn/new-advert-btn.component';
import { Checkbox } from 'primeng/checkbox';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CategoriesComponent,
    Dialog,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule,
    HeaderSearchComponent,
    NewAdvertBtnComponent,
    FormsModule,
    Checkbox,
    FormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // formGroup!: FormGroup;
  value!: string;

  // ngOnInit() {
  //   this.formGroup = new FormGroup({
  //     value: new FormControl(),
  //   });

  //   this.formGroup = new FormGroup({
  //     text: new FormControl<string | null>(null),
  //   });
  // }

  // constructor(private router: Router) { }

  //     goToComponentCategories() {
  //       this.router.navigate(['/categories']);
  //     }

  visible = false;

  showDialog() {
    this.visible = true;
  }

  checked = false;
  //TODO вернуться после лекции по формам
  // checked: boolean = false;

  // constructor(
  //   private router: Router,
  //   private navigationService: NavigationService,
  // ) {}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // goToComponentCategories() {
  //   if (this.router.url === '/categories') {
  //     const prevUrl = this.navigationService.getPreviousUrl();
  //     if (prevUrl) {
  //       this.router.navigateByUrl(prevUrl);
  //     } else {
  //       this.router.navigate(['/']); // если история пуста
  //     }
  //   } else {
  //     this.router.navigate(['/categories']);
  //   }
  // }
}
