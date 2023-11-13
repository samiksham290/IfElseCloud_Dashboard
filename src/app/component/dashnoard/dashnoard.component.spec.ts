import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnoardComponent } from './dashnoard.component';

describe('DashnoardComponent', () => {
  let component: DashnoardComponent;
  let fixture: ComponentFixture<DashnoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DashnoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashnoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
