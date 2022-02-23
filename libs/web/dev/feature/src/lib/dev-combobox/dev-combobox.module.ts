import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevComboboxComponent } from './dev-combobox.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'

@NgModule({
  declarations: [DevComboboxComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevComboboxComponent }]), WebUiPreviewModule],
})
export class DevComboboxModule {}
