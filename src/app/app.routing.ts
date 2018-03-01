import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { BoardListTopicsComponent } from './board-list-topics/board-list-topics.component';
import { TopicListPostsComponent } from './topic-list-posts/topic-list-posts.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  }, {
    path: 'boards',
    component: BoardListTopicsComponent
  }, {
    path: 'boards/board/:id',
    component: BoardListTopicsComponent
  }, {
    path: 'boards/topic/:title',
    component: TopicListPostsComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
