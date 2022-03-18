import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileSearchAllComponent } from './web-ui-mobile-search-all.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileSearchAllComponent],
  exports: [WebUiMobileSearchAllComponent],
})
export class WebUiMobileSearchAllModule {}
