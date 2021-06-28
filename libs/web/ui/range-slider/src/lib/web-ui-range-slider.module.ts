import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { WebUiRangeSliderComponent } from './web-ui-range-slider.component'

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [WebUiRangeSliderComponent],
  exports: [WebUiRangeSliderComponent],
})
export class WebUiRangeSliderModule {}
