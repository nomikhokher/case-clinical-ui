import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMediaObjectComponent } from './web-ui-media-object.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMediaObjectComponent],
  exports: [WebUiMediaObjectComponent],
})
export class WebUiMediaObjectModule {}
