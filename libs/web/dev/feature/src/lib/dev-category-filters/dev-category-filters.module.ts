import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevCategoryFiltersComponent } from './dev-category-filters.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiCategoryFiltersModule } from '@schema-driven/web/ui/category-filters'

@NgModule({
  declarations: [DevCategoryFiltersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevCategoryFiltersComponent }]),
    WebUiPreviewModule,
    WebUiCategoryFiltersModule,
  ],
})
export class DevCategoryFiltersModule {}
