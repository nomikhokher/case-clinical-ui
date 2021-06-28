import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevMultiCheckboxComponent } from './dev-multi-checkbox.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFormModule } from '@schema-driven/web/ui/form'

@NgModule({
  declarations: [DevMultiCheckboxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevMultiCheckboxComponent }]),
    WebUiPreviewModule,
    WebUiFormModule,
  ],
})
export class DevMultiCheckboxModule {}
