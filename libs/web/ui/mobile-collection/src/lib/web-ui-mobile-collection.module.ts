import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { WebUiMobileCollectionComponent } from './web-ui-mobile-collection.component'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiIconModule],
  declarations: [WebUiMobileCollectionComponent],
  exports: [WebUiMobileCollectionComponent],
})
export class WebUiMobileCollectionModule {}
