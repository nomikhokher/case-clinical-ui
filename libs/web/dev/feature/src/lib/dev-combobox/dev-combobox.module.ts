import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevComboboxComponent } from './dev-combobox.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiComboboxModule } from '@schema-driven/web/ui/combobox'
@NgModule({
  declarations: [DevComboboxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevComboboxComponent }]),
    WebUiPreviewModule,
    WebUiComboboxModule,
  ],
})
export class DevComboboxModule {}
