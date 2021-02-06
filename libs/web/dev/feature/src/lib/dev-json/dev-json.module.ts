import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiJsonModule } from '@schema-driven/web/ui/json'
import { DevJsonComponent } from './dev-json.component'

@NgModule({
  declarations: [DevJsonComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevJsonComponent }]), WebUiJsonModule],
})
export class DevJsonModule {}
