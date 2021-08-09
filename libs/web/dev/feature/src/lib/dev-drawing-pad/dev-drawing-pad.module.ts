import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevDrawingPadComponent } from './dev-drawing-pad.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiDrawingPadModule } from '@schema-driven/web/ui/drawing-pad'
@NgModule({
  declarations: [DevDrawingPadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevDrawingPadComponent }]),
    WebUiPreviewModule,
    WebUiDrawingPadModule,
  ],
})
export class DevDrawingPadModule {}
