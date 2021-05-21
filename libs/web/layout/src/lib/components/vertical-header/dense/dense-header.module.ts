import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { DenseHeaderComponent } from './dense-header.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

@NgModule({
  declarations: [DenseHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule],
  exports: [DenseHeaderComponent],
})
export class DenseHeaderLayoutModule {}
