import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevListContainerComponent } from './dev-list-container.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiListContainerModule } from '@schema-driven/web/ui/list-container'

@NgModule({
  declarations: [DevListContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevListContainerComponent }]),
    WebUiPreviewModule,
    WebUiListContainerModule,
  ],
})
export class DevListContainerModule {}
