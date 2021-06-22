import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiCodeModule } from '@schema-driven/web/ui/code'
import { WebUiPreviewComponent } from './web-ui-preview.component'
import { WebUiPageModule } from '@schema-driven/web/ui/page'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiCodeModule, WebUiPageModule],
  declarations: [WebUiPreviewComponent],
  exports: [WebUiPreviewComponent],
})
export class WebUiPreviewModule {}
