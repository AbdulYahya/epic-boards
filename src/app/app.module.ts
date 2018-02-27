import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UrlSerializer } from '@angular/router';

import { routing } from './app.routing';
import { CustomUrlSerializer } from './custom-url-serializer';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BoardListTopicsComponent } from './board-list-topics/board-list-topics.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    BoardListTopicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AppBootstrapModule
  ],
  providers: [
    { provide: UrlSerializer, useClass: CustomUrlSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
