import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiTeamSectionComponent } from './web-ui-team-section.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiTeamSectionComponent],
  exports: [WebUiTeamSectionComponent],
})
export class WebUiTeamSectionModule {}
