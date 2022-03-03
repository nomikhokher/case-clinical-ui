import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiMobileSearchComponent } from './web-ui-mobile-search.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileSearchComponent],
  exports: [WebUiMobileSearchComponent],
})
export class WebUiMobileSearchModule {}
