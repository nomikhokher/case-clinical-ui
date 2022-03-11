import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiMobileCollectionCreateComponent } from './web-ui-mobile-collection-create.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiMobileCollectionCreateComponent],
  exports: [WebUiMobileCollectionCreateComponent],
})
export class WebUiMobileCollectionCreateModule {}
