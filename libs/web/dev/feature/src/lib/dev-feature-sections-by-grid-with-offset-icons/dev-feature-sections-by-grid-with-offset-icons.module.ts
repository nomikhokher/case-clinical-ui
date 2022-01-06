import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevFeatureSectionsByGridWithOffsetIconsComponent } from './dev-feature-sections-by-grid-with-offset-icons.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiFeatureSectionsByGridWithOffsetIconsModule } from 'libs/web/ui/feature-sections-by-grid-with-offset-icons/src'

@NgModule({
  declarations: [DevFeatureSectionsByGridWithOffsetIconsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevFeatureSectionsByGridWithOffsetIconsComponent }]),
    WebUiPreviewModule,
    WebUiFeatureSectionsByGridWithOffsetIconsModule,
  ],
})
export class DevFeatureSectionsByGridWithOffsetIconsModule {}
