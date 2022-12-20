import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ServiceComponent } from './service/service.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    ServiceComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    ShowComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
