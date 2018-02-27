import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardListTopicsComponent } from './board-list-topics.component';

describe('BoardListTopicsComponent', () => {
  let component: BoardListTopicsComponent;
  let fixture: ComponentFixture<BoardListTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardListTopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardListTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
