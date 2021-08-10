import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevAccordionComponent } from './dev-accordion.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiAccordionModule } from '@schema-driven/web/ui/accordion'

@NgModule({
  declarations: [DevAccordionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevAccordionComponent }]),
    WebUiAccordionModule,
    WebUiPreviewModule,
  ],
})
export class DevAccordionModule {}
