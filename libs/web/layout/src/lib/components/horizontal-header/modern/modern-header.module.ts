import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ModernHeaderComponent } from './modern-header.component'

@NgModule({
  declarations: [ModernHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [ModernHeaderComponent],
})
export class ModernHeaderLayoutModule {}
