import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { DragDropModule } from '@angular/cdk/drag-drop'

import { WebUiDraggableComponent } from './web-ui-draggable.component'

@NgModule({
  imports: [CommonModule, RouterModule, DragDropModule],
  declarations: [WebUiDraggableComponent],
  exports: [WebUiDraggableComponent],
})
export class WebUiDraggableModule {}
