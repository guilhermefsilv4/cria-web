import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitensComponent } from './menuitens.component';

describe('MenuitensComponent', () => {
  let component: MenuitensComponent;
  let fixture: ComponentFixture<MenuitensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuitensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuitensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
