import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiFormModule } from '@metadata/web/ui/form'
import { UserFormComponent } from './user-form.component'

@NgModule({
  declarations: [UserFormComponent],
  exports: [UserFormComponent],
  imports: [CommonModule, RouterModule, WebUiFormModule],
})
export class UserFormModule {}
