import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [CollapseModule, ModalModule]
})
export class AppBootstrapModule { }
