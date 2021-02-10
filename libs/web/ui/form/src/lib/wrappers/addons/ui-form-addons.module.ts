import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'

import { UiFormAddonsComponent } from './ui-form-addons.component'
import { addonsExtension } from './ui-form-addons.extension'

@NgModule({
  declarations: [UiFormAddonsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      wrappers: [{ name: 'addons', component: UiFormAddonsComponent }],
      extensions: [{ name: 'addons', extension: { postPopulate: addonsExtension } }],
    }),
    WebUiIconModule,
  ],
})
export class UiFormAddonsModule {}
