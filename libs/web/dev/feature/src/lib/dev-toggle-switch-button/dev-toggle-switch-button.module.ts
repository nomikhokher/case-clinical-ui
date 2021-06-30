import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevToggleSwitchButtonComponent } from './dev-toggle-switch-button.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiToggleSwitchButtonModule } from '@schema-driven/web/ui/toggle-switch-button'

@NgModule({
  declarations: [DevToggleSwitchButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevToggleSwitchButtonComponent }]),
    WebUiPreviewModule,
    WebUiToggleSwitchButtonModule,
  ],
})
export class DevToggleSwitchButtonModule {}
