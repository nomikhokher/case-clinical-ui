import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { EnterpriseHeaderComponent } from './enterprise-header.component'

@NgModule({
  declarations: [EnterpriseHeaderComponent],
  imports: [CommonModule, RouterModule, ClickOutsideModule],
  exports: [EnterpriseHeaderComponent],
})
export class EnterpriseHeaderLayoutModule {}
