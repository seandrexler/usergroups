import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsergroupTileComponent } from './usergroup-tile.component';

describe('UsergroupTileComponent', () => {
  let component: UsergroupTileComponent;
  let fixture: ComponentFixture<UsergroupTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsergroupTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsergroupTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
