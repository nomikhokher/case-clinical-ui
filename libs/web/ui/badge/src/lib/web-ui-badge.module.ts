import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiBadgeComponent } from './web-ui-badge.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiBadgeComponent],
  exports: [WebUiBadgeComponent],
})
export class WebUiBadgeModule {}
