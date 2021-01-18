import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { UserHeaderModule, UserTableModule } from '@metadata/web/user/ui'
import { UserListComponent } from './user-list.component'

const routes: Routes = [{ path: '', component: UserListComponent }]

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UserTableModule, UserHeaderModule],
})
export class UserListModule {}
