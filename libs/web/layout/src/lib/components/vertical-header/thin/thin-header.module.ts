import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { ThinHeaderComponent } from './thin-header.component'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
@NgModule({
  declarations: [ThinHeaderComponent],
  imports: [CommonModule, RouterModule, WebUiIconModule, ClickOutsideModule],
  exports: [ThinHeaderComponent],
})
export class ThinHeaderLayoutModule {}
