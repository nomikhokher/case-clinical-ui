import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiAlertModule } from '@schema-driven/web/ui/alert'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { DevAlertComponent } from './dev-alert.component'

@NgModule({
  declarations: [DevAlertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevAlertComponent }]),
    WebUiAlertModule,
    WebUiIconModule,
  ],
})
export class DevAlertModule {}
