import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiCodeModule } from '@schema-driven/web/ui/code'
import { WebUiPreviewComponent } from './web-ui-preview.component'
import { WebUiStepModule } from '@schema-driven/web/ui/step'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiCodeModule, WebUiStepModule],
  declarations: [WebUiPreviewComponent],
  exports: [WebUiPreviewComponent],
})
export class WebUiPreviewModule {}
