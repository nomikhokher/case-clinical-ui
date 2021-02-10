import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiButtonModule } from '@schema-driven/web/ui/button'
import { DevToastComponent } from './dev-toast.component'

@NgModule({
  declarations: [DevToastComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevToastComponent }]), WebUiButtonModule],
})
export class DevToastModule {}
