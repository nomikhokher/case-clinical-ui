import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevButtonComponent } from './dev-button.component'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { WebUiGroupButtonModule } from '@schema-driven/web/ui/group-button'
import { WebUiIconButtonModule } from '@schema-driven/web/ui/icon-button'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevButtonComponent }]),
    WebUiButtonModule,
    WebUiPreviewModule,
    WebUiGroupButtonModule,
    WebUiIconButtonModule,
  ],
  exports: [DevButtonComponent],
})
export class DevButtonModule {}
