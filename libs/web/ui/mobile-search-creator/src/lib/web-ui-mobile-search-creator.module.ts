import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileSearchCreatorComponent } from './web-ui-mobile-search-creator.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileSearchCreatorComponent],
  exports: [WebUiMobileSearchCreatorComponent],
})
export class WebUiMobileSearchCreatorModule {}
