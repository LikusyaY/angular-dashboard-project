import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdvertBtnComponent } from './new-advert-btn.component';

describe('NewAdvertBtnComponent', () => {
  let component: NewAdvertBtnComponent;
  let fixture: ComponentFixture<NewAdvertBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAdvertBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdvertBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
