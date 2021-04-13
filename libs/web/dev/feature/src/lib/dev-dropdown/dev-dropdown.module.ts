import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevDropdownComponent } from './dev-dropdown.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiDropdownModule } from '@schema-driven/web/ui/dropdown'

@NgModule({
  declarations: [DevDropdownComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevDropdownComponent }]),
    WebUiPreviewModule,
    WebUiDropdownModule,
  ],
})
export class DevDropdownModule {}
