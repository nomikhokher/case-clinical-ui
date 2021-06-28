import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevRangeSliderComponent } from './dev-range-slider.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

import { WebUiRangeSliderModule } from '@schema-driven/web/ui/range-slider'

@NgModule({
  declarations: [DevRangeSliderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevRangeSliderComponent }]),
    WebUiPreviewModule,
    WebUiRangeSliderModule,
  ],
})
export class DevRangeSliderModule {}
