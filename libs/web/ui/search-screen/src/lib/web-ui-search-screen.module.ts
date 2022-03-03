import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiSearchScreenComponent } from './web-ui-search-screen.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiSearchScreenComponent],
  exports: [WebUiSearchScreenComponent],
})
export class WebUiSearchScreenModule {}
