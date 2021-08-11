import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevPopConfirmComponent } from './dev-pop-confirm.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiPopConfirmModule } from '@schema-driven/web/ui/pop-confirm'

@NgModule({
  declarations: [DevPopConfirmComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevPopConfirmComponent }]),
    WebUiPreviewModule,
    WebUiPopConfirmModule,
  ],
})
export class DevPopConfirmModule {}
