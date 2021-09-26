import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSumarizeComponent } from './general-sumarize.component';

describe('GeneralSumarizeComponent', () => {
  let component: GeneralSumarizeComponent;
  let fixture: ComponentFixture<GeneralSumarizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralSumarizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSumarizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
