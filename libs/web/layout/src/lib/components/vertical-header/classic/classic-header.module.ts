import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { ClassicHeaderComponent } from './classic-header.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  declarations: [ClassicHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule, ClickOutsideModule],
  exports: [ClassicHeaderComponent],
})
export class ClassicHeaderLayoutModule {}
