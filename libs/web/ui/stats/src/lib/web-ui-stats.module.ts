import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiStatsComponent } from './web-ui-stats.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiStatsComponent],
  exports: [WebUiStatsComponent],
})
export class WebUiStatsModule {}
