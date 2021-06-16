import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiNavbarsComponent } from './web-ui-navbars.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiNavbarsComponent],
  exports: [WebUiNavbarsComponent],
})
export class WebUiNavbarsModule {}
