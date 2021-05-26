import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { ModernHeaderComponent } from './modern-header.component'

@NgModule({
  declarations: [ModernHeaderComponent],
  imports: [CommonModule, RouterModule, ClickOutsideModule],
  exports: [ModernHeaderComponent],
})
export class ModernHeaderLayoutModule {}
