import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindelComponent } from './mindel.component';

describe('MindelComponent', () => {
  let component: MindelComponent;
  let fixture: ComponentFixture<MindelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
