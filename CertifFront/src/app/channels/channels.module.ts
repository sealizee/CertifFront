import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ServiceComponent } from './service/service.component';


@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ]
})
export class ChannelsModule { }
