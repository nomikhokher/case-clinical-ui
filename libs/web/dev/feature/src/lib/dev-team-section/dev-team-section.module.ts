import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevTeamSectionComponent } from './dev-team-section.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiTeamSectionModule } from '@schema-driven/web/ui/team-section'
@NgModule({
  declarations: [DevTeamSectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevTeamSectionComponent }]),
    WebUiPreviewModule,
    WebUiTeamSectionModule,
  ],
})
export class DevTeamSectionModule {}
