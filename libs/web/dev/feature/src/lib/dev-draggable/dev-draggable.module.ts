import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevDraggableComponent } from './dev-draggable.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiDraggableModule } from '@schema-driven/web/ui/draggable'

@NgModule({
  declarations: [DevDraggableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevDraggableComponent }]),
    WebUiPreviewModule,
    WebUiDraggableModule,
  ],
})
export class DevDraggableModule {}
