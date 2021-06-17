import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiCardHeadingComponent } from './web-ui-card-heading.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiCardHeadingComponent],
  exports: [WebUiCardHeadingComponent],
})
export class WebUiCardHeadingModule {}
