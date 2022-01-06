import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { WebUiContactSectionSlideBrandPanelComponent } from './web-ui-contact-section-slide-brand-panel.component'

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [WebUiContactSectionSlideBrandPanelComponent],
  exports: [WebUiContactSectionSlideBrandPanelComponent],
})
export class WebUiContactSectionSlideBrandPanelModule {}
