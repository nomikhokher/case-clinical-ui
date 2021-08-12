import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { WebUiTreeSelectComponent } from './web-ui-tree-select.component'
import { CdkTreeModule } from '@angular/cdk/tree'

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, CdkTreeModule],
  declarations: [WebUiTreeSelectComponent],
  exports: [WebUiTreeSelectComponent],
})
export class WebUiTreeSelectModule {}
