import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiMobileCodeModule } from '@schema-driven/web/ui/mobile-code'
import { WebUiMobilePreviewComponent } from './web-ui-mobile-preview.component'
import { WebUiPageModule } from '@schema-driven/web/ui/page'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { FormsModule } from '@angular/forms'
import { ServiceCodepreview } from '../../../codepreview.service'
import { WebUiToggleSwitchButtonModule } from '@schema-driven/web/ui/toggle-switch-button'
import { ResizableModule } from 'angular-resizable-element'
import { ClipboardModule } from '@angular/cdk/clipboard'
// import { WebUiMutatorModule } from '@schema-driven/web/ui/mutator'
import { WebUiMobileMutatorModule } from '@schema-driven/web/ui/mobile-mutator'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    WebUiMobileCodeModule,
    WebUiPageModule,
    WebUiIconModule,
    WebUiButtonModule,
    FormsModule,
    ResizableModule,
    WebUiToggleSwitchButtonModule,
    ClipboardModule,
    WebUiMobileMutatorModule,
  ],
  declarations: [WebUiMobilePreviewComponent],
  exports: [WebUiMobilePreviewComponent],
  providers: [ServiceCodepreview],
})
export class WebUiMobilePreviewModule {}
