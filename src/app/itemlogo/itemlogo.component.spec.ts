import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemlogoComponent } from './itemlogo.component';

describe('ItemlogoComponent', () => {
  let component: ItemlogoComponent;
  let fixture: ComponentFixture<ItemlogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemlogoComponent]
    });
    fixture = TestBed.createComponent(ItemlogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
