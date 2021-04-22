import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevContainerComponent } from './dev-container.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiContainerModule } from '@schema-driven/web/ui/container'

@NgModule({
  declarations: [DevContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevContainerComponent }]),
    WebUiPreviewModule,
    WebUiContainerModule,
  ],
})
export class DevContainerModule {}
