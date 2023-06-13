import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanAntonioComponent } from './san-antonio.component';

describe('SanAntonioComponent', () => {
  let component: SanAntonioComponent;
  let fixture: ComponentFixture<SanAntonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanAntonioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanAntonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
