import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiAlertModule } from '@schema-driven/web/ui/alert'
import { DevAlertComponent } from './dev-alert.component'

@NgModule({
  declarations: [DevAlertComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevAlertComponent }]), WebUiAlertModule],
})
export class DevAlertModule {}
