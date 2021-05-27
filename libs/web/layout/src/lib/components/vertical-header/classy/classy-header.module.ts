import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { ClassyHeaderLayout } from './classy-header.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  declarations: [ClassyHeaderLayout],
  imports: [CommonModule, RouterModule, WebUiIconModule, ClickOutsideModule],
  exports: [ClassyHeaderLayout],
})
export class ClassyHeaderLayoutModule {}
