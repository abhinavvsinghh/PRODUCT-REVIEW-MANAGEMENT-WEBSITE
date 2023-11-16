import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRecordComponent } from './review-record.component';

describe('ReviewRecordComponent', () => {
  let component: ReviewRecordComponent;
  let fixture: ComponentFixture<ReviewRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
