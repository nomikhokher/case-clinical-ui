import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiFormModule } from '@schema-driven/web/ui/form'
import { WebUiSignInAndRegistrationComponent } from './web-ui-sign-in-and-registration.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule, WebUiFormModule, ReactiveFormsModule, FormsModule],
  declarations: [WebUiSignInAndRegistrationComponent],
  exports: [WebUiSignInAndRegistrationComponent],
})
export class WebUiSignInAndRegistrationModule {}
