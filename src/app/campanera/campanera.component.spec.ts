import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaneraComponent } from './campanera.component';

describe('CampaneraComponent', () => {
  let component: CampaneraComponent;
  let fixture: ComponentFixture<CampaneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaneraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
