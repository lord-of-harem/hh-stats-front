import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlHomeComponent } from './home.component';

describe('GirlHomeComponent', () => {
  let component: GirlHomeComponent;
  let fixture: ComponentFixture<GirlHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirlHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirlHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
