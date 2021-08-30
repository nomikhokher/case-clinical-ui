import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevIncentivesComponent } from './dev-incentives.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiIncentivesModule } from '@schema-driven/web/ui/incentives'

@NgModule({
  declarations: [DevIncentivesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevIncentivesComponent }]),
    WebUiIncentivesModule,
    WebUiPreviewModule,
  ],
})
export class DevIncentivesModule {}
