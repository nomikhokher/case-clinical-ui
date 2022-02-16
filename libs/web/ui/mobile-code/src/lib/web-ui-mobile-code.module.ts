import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NumberedCodeblockModule } from '@ctrl/ngx-numbered-codeblock'
import { WebUiMobileCodeComponent } from './web-ui-mobile-code.component'

@NgModule({
  declarations: [WebUiMobileCodeComponent],
  imports: [CommonModule, RouterModule, NumberedCodeblockModule],
  exports: [WebUiMobileCodeComponent],
})
export class WebUiMobileCodeModule {}
