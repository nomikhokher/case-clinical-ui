import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevColorPickerComponent } from './dev-color-picker.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiColorPickerModule } from '@schema-driven/web/ui/color-picker'

@NgModule({
  declarations: [DevColorPickerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevColorPickerComponent }]),
    WebUiPreviewModule,
    WebUiColorPickerModule,
  ],
})
export class DevColorPickerModule {}
