import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiCodeModule } from '@schema-driven/web/ui/code'
import { WebUiPreviewComponent } from './web-ui-preview.component'
import { FormsModule } from '@angular/forms'
import { ServiceCodepreview } from '../../../codepreview.service'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiCodeModule, FormsModule],
  declarations: [WebUiPreviewComponent],
  exports: [WebUiPreviewComponent],
  providers: [ServiceCodepreview],
})
export class WebUiPreviewModule {}
