import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UrlSerializer } from '@angular/router';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { CustomUrlSerializer } from './custom-url-serializer';
import { routing } from './app.routing';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BoardListTopicsComponent } from './board-list-topics/board-list-topics.component';
import { TopicListPostsComponent } from './topic-list-posts/topic-list-posts.component';
import { AdminComponent } from './admin/admin.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BoardListTopicsComponent,
    TopicListPostsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppBootstrapModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    // {
      // provide: UrlSerializer,
      // useClass: CustomUrlSerializer
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
