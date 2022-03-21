import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileSearchCreatorComponent } from './web-ui-mobile-search-creator.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileSearchCreatorComponent],
  exports: [WebUiMobileSearchCreatorComponent],
})
export class WebUiMobileSearchCreatorModule {}
