import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@metadata/web/ui/form'
import { UserHeaderComponent } from './user-header.component'

@NgModule({
  declarations: [UserHeaderComponent],
  exports: [UserHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
})
export class UserHeaderModule {}
