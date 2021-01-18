import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { UserFormModule, UserHeaderModule } from '@metadata/web/user/ui'
import { UserDetailComponent } from './user-detail.component'

const routes: Routes = [{ path: '', component: UserDetailComponent }]

@NgModule({
  declarations: [UserDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UserFormModule, UserHeaderModule],
})
export class UserDetailModule {}
