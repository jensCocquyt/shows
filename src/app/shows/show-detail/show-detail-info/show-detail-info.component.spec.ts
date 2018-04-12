import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailInfoComponent } from './show-detail-info.component';

describe('ShowDetailInfoComponent', () => {
  let component: ShowDetailInfoComponent;
  let fixture: ComponentFixture<ShowDetailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDetailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
