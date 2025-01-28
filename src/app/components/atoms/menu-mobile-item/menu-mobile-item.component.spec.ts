import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMobileItemComponent } from './menu-mobile-item.component';

describe('MenuMobileItemComponent', () => {
  let component: MenuMobileItemComponent;
  let fixture: ComponentFixture<MenuMobileItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMobileItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMobileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
