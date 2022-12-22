import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerPartComponent } from './lower-part.component';

describe('LowerPartComponent', () => {
  let component: LowerPartComponent;
  let fixture: ComponentFixture<LowerPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
