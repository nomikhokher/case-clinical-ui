import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { WebUiCategoryFiltersComponent } from './web-ui-category-filters.component'
import { WebUiProductListModule } from '@schema-driven/web/ui/product-list'

@NgModule({
  imports: [CommonModule, RouterModule, WebUiProductListModule],
  declarations: [WebUiCategoryFiltersComponent],
  exports: [WebUiCategoryFiltersComponent],
})
export class WebUiCategoryFiltersModule {}
