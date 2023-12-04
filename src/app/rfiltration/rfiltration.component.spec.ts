import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfiltrationComponent } from './rfiltration.component';

describe('RfiltrationComponent', () => {
  let component: RfiltrationComponent;
  let fixture: ComponentFixture<RfiltrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfiltrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfiltrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
