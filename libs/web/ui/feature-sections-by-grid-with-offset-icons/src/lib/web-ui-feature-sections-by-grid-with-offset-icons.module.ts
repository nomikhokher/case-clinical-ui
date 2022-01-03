import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { WebUiFeatureSectionsByGridWithOffsetIconsComponent } from './web-ui-feature-sections-by-grid-with-offset-icons.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiFeatureSectionsByGridWithOffsetIconsComponent],
  exports: [WebUiFeatureSectionsByGridWithOffsetIconsComponent],
})
export class WebUiFeatureSectionsByGridWithOffsetIconsModule {}
