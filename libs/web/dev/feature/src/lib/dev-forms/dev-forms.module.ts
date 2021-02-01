import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevFormsComponent } from './dev-forms.component'

@NgModule({
  declarations: [DevFormsComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: DevFormsComponent }])],
})
export class DevFormsModule {}
