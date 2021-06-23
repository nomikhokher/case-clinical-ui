import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonComponent } from './web-ui-button.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

@NgModule({
  declarations: [WebUiButtonComponent],
  exports: [WebUiButtonComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule],
})
export class WebUiButtonModule {}
