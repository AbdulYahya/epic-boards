import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UrlSerializer } from '@angular/router';

import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { CustomUrlSerializer } from './custom-url-serializer';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BoardListTopicsComponent } from './board-list-topics/board-list-topics.component';
import { TopicListPostsComponent } from './topic-list-posts/topic-list-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BoardListTopicsComponent,
    TopicListPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppBootstrapModule,
    routing
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: CustomUrlSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
