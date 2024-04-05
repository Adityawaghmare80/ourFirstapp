import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabngforComponent } from './tabngfor.component';

describe('TabngforComponent', () => {
  let component: TabngforComponent;
  let fixture: ComponentFixture<TabngforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabngforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
