import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiAccordionComponent } from './web-ui-accordion.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiAccordionComponent],
  exports: [WebUiAccordionComponent],
})
export class WebUiAccordionModule {}
