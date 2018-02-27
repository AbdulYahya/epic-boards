import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicListPostsComponent } from './topic-list-posts.component';

describe('TopicListPostsComponent', () => {
  let component: TopicListPostsComponent;
  let fixture: ComponentFixture<TopicListPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicListPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicListPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
