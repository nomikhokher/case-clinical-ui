import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevGroupButtonComponent } from './dev-group-button.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiGroupButtonModule } from '@schema-driven/web/ui/group-button'
import { WebUiDropdownButtonModule } from '@schema-driven/web/ui/dropdown-button'
import { WebUiCheckboxDropdownButtonModule } from '@schema-driven/web/ui/checkbox-dropdown-button'
@NgModule({
  declarations: [DevGroupButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevGroupButtonComponent }]),
    WebUiPreviewModule,
    WebUiGroupButtonModule,
    WebUiCheckboxDropdownButtonModule,
    WebUiDropdownButtonModule,
  ],
})
export class DevGroupButtonModule {}
