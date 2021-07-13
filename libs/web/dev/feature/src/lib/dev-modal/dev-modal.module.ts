import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevModalComponent } from './dev-modal.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiModalModule } from '@schema-driven/web/ui/modal'
import { ClickOutsideModule } from 'ng-click-outside'

@NgModule({
  declarations: [DevModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevModalComponent }]),
    WebUiPreviewModule,
    WebUiModalModule,
    ClickOutsideModule,
  ],
})
export class DevModalModule {}
