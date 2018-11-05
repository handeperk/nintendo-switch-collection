import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionListDetailComponent } from './collection-list-detail.component';

describe('CollectionListDetailComponent', () => {
  let component: CollectionListDetailComponent;
  let fixture: ComponentFixture<CollectionListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
