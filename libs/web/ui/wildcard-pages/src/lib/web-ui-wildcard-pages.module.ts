import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiWildcardPagesComponent } from './web-ui-wildcard-pages.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiWildcardPagesComponent],
  exports: [WebUiWildcardPagesComponent],
})
export class WebUiWildcardPagesModule {}
