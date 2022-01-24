import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMaskComponent } from './dev-mask.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiMaskModule } from '@schema-driven/web/ui/mask'

@NgModule({
  declarations: [DevMaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMaskComponent }]),
    WebUiPreviewModule,
    WebUiMaskModule,
  ],
})
export class DevMaskModule {}
