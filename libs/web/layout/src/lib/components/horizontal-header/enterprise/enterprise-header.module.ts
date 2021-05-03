import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { EnterpriseHeaderComponent } from './enterprise-header.component'

@NgModule({
  declarations: [EnterpriseHeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [EnterpriseHeaderComponent],
})
export class EnterpriseHeaderLayoutModule {}
