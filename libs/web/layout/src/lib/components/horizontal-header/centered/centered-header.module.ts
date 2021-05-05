import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { CenteredHeaderComponent } from './centered-header.component'

@NgModule({
  declarations: [CenteredHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [CenteredHeaderComponent],
})
export class CenteredHeaderLayoutModule {}
