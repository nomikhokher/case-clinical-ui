import { NgModule } from '@angular/core'

import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'

import { WebUiColorPickerComponent } from './web-ui-color-picker.component'

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ClickOutsideModule],
  declarations: [WebUiColorPickerComponent],
  exports: [WebUiColorPickerComponent],
})
export class WebUiColorPickerModule {}
