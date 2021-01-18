import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUserFeatureComponent } from './web-user-feature.component'

@NgModule({
  declarations: [WebUserFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebUserFeatureComponent,
        children: [
          { path: '', loadChildren: () => import('./user-list/user-list.module').then((m) => m.UserListModule) },
          {
            path: 'create',
            loadChildren: () => import('./user-create/user-create.module').then((m) => m.UserCreateModule),
          },
          {
            path: ':userId',
            loadChildren: () => import('./user-detail/user-detail.module').then((m) => m.UserDetailModule),
          },
        ],
      },
    ]),
  ],
})
export class WebUserFeatureModule {}
