import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevCheckboxComponent } from './dev-checkbox.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFormModule } from '@schema-driven/web/ui/form'

@NgModule({
  declarations: [DevCheckboxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevCheckboxComponent }]),
    WebUiPreviewModule,
    WebUiFormModule,
  ],
})
export class DevCheckboxModule {}
