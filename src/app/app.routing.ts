import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { BoardListTopicsComponent } from './board-list-topics/board-list-topics.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'boards/board/:title',
    component: BoardListTopicsComponent
  }

  // path: 'boards'
  // path: 'boards/topic/:topicTitle'
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
