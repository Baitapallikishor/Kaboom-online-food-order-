import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiryaniListComponent } from './biryani-list.component';

describe('BiryaniListComponent', () => {
  let component: BiryaniListComponent;
  let fixture: ComponentFixture<BiryaniListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiryaniListComponent]
    });
    fixture = TestBed.createComponent(BiryaniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
