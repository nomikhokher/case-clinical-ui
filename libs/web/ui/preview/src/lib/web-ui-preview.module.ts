import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiCodeModule } from '@schema-driven/web/ui/code'
import { WebUiPreviewComponent } from './web-ui-preview.component'
import { WebUiPageModule } from '@schema-driven/web/ui/page'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { FormsModule } from '@angular/forms'
import { ServiceCodepreview } from '../../../codepreview.service'
import { WebUiToggleSwitchButtonModule } from '@schema-driven/web/ui/toggle-switch-button'
import { ResizableModule } from 'angular-resizable-element'
import { ClipboardModule } from '@angular/cdk/clipboard'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WebUiCodeModule,
    WebUiPageModule,
    WebUiIconModule,
    WebUiButtonModule,
    FormsModule,
    ResizableModule,
    WebUiToggleSwitchButtonModule,
    ClipboardModule,
  ],
  declarations: [WebUiPreviewComponent],
  exports: [WebUiPreviewComponent],
  providers: [ServiceCodepreview],
})
export class WebUiPreviewModule {}
