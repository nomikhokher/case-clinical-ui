import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { UserFormModule, UserHeaderModule } from '@metadata/web/user/ui'
import { UserCreateComponent } from './user-create.component'

const routes: Routes = [{ path: '', component: UserCreateComponent }]

@NgModule({
  declarations: [UserCreateComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UserFormModule, UserHeaderModule],
})
export class UserCreateModule {}
