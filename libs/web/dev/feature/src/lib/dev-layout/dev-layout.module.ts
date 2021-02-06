import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiLayoutModule } from '@schema-driven/web/ui/layout'
import { DevLayoutComponent } from './dev-layout.component'

@NgModule({
  declarations: [DevLayoutComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevLayoutComponent }]), WebUiLayoutModule],
})
export class DevLayoutModule {}
