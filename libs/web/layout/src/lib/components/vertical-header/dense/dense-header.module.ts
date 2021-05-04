import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { DenseHeaderComponent } from './dense-header.component'

@NgModule({
  declarations: [DenseHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [DenseHeaderComponent],
})
export class DenseHeaderLayoutModule {}
