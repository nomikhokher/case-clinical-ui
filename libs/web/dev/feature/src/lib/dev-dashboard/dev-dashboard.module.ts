import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevDashboardComponent } from './dev-dashboard.component'

@NgModule({
  declarations: [DevDashboardComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevDashboardComponent }])],
})
export class DevDashboardModule {}
