import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ClickOutsideModule } from 'ng-click-outside'
import { WebUiDraggableComponent } from './web-ui-draggable.component'

@NgModule({
  imports: [CommonModule, RouterModule, DragDropModule, ClickOutsideModule, ReactiveFormsModule, FormsModule],
  declarations: [WebUiDraggableComponent],
  exports: [WebUiDraggableComponent],
})
export class WebUiDraggableModule {}
