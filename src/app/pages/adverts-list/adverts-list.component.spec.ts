import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertsListComponent } from './adverts-list.component';

describe('AdvertsListComponent', () => {
  let component: AdvertsListComponent;
  let fixture: ComponentFixture<AdvertsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
