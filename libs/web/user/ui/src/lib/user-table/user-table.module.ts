import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UserTableComponent } from './user-table.component'

@NgModule({
  declarations: [UserTableComponent],
  exports: [UserTableComponent],
  imports: [CommonModule, RouterModule],
})
export class UserTableModule {}
