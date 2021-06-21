import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevSignInAndRegistrationComponent } from './dev-sign-in-and-registration.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiSignInAndRegistrationModule } from '@schema-driven/web/ui/sign-in-and-registration'
import { WebUiFormModule } from '@schema-driven/web/ui/form'

@NgModule({
  declarations: [DevSignInAndRegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevSignInAndRegistrationComponent }]),
    WebUiPreviewModule,
    WebUiSignInAndRegistrationModule,
    WebUiFormModule,
  ],
})
export class DevSignInAndRegistrationModule {}
