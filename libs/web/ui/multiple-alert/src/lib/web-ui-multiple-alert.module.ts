import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMultipleAlertComponent } from './web-ui-multiple-alert.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMultipleAlertComponent],
  exports: [WebUiMultipleAlertComponent],
})
export class WebUiMultipleAlertModule {}
