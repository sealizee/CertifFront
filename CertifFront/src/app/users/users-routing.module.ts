import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [

  {
  path: 'users',
  children: [
    {
      path:'',
      component: ListComponent
    },

    {
      path:'add',
      component: AddComponent
    },

    {
      path:':id',
      children: [
        {
        path: '',
        component: ShowComponent
      },  
      {
        path: 'edit',
        component: EditComponent
      },
      {
        path: 'delete',
        component: DeleteComponent
      },
      ]
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
