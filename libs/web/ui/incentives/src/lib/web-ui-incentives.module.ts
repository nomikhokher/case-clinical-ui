import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiIncentivesComponent } from './web-ui-incentives.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiIncentivesComponent],
  exports: [WebUiIncentivesComponent],
})
export class WebUiIncentivesModule {}
