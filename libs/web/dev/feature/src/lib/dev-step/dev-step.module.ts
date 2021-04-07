import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevStepComponent } from './dev-step.component'

@NgModule({
  declarations: [DevStepComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevStepComponent }])],
})
export class DevStepModule {}
