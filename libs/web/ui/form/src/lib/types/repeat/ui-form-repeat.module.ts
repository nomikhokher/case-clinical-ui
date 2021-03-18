import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { WebUiIconModule } from '@schema-driven/web/ui/icon'
import { UiFormRepeatComponent } from './ui-form-repeat.component'

@NgModule({
  declarations: [UiFormRepeatComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'repeat',
          component: UiFormRepeatComponent,
        },
      ],
    }),
    WebUiIconModule,
  ],
})
export class UiFormRepeatModule {}
