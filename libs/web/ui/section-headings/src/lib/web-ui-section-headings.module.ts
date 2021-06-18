import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiSectionHeadingsComponent } from './web-ui-section-headings.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiSectionHeadingsComponent],
  exports: [WebUiSectionHeadingsComponent],
})
export class WebUiSectionHeadingsModule {}
