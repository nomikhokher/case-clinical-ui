import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiCategoryFiltersComponent } from './web-ui-category-filters.component'

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [WebUiCategoryFiltersComponent],
  exports: [WebUiCategoryFiltersComponent],
})
export class WebUiCategoryFiltersModule {}
