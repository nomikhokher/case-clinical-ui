import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiCodeModule } from '@schema-driven/web/ui/code'
import { DevCodeComponent } from './dev-code.component'

@NgModule({
  declarations: [DevCodeComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevCodeComponent }]), WebUiCodeModule],
})
export class DevCodeModule {}
