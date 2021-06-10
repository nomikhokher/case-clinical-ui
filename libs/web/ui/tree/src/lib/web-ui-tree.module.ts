import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { CdkTreeModule } from '@angular/cdk/tree'

import { WebUiTreeComponent } from './web-ui-tree.component'

@NgModule({
  imports: [CommonModule, RouterModule, CdkTreeModule],
  declarations: [WebUiTreeComponent],
  exports: [WebUiTreeComponent],
})
export class WebUiTreeModule {}
