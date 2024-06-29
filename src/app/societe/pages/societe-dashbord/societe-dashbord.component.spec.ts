import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteDashbordComponent } from './societe-dashbord.component';

describe('SocieteDashbordComponent', () => {
  let component: SocieteDashbordComponent;
  let fixture: ComponentFixture<SocieteDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocieteDashbordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocieteDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
