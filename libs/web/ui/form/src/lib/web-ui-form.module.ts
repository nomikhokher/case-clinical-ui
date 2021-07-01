import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'

// Types
import { UiFormCheckboxModule } from './types/checkbox/ui-form-checkbox.module'
import { UiFormInputModule } from './types/input/ui-form-input.module'
import { UiFormMulticheckboxModule } from './types/multicheckbox/ui-form-multicheckbox.module'
import { UiFormRadioModule } from './types/radio/ui-form-radio.module'
import { UiFormRepeatModule } from './types/repeat/ui-form-repeat.module'
import { UiFormSelectModule } from './types/select/ui-form-select.module'
import { UiFormTextareaModule } from './types/textarea/ui-form-textarea.module'
import { UiFormTypeaheadModule } from './types/typeahead/ui-form-typeahead.module'
import { WebUiFormComponent } from './web-ui-form.component'

// Validators
import { UiFormValidatorsModule } from './validators/ui-form-validators.module'

// Wrappers
import { UiFormAddonsModule } from './wrappers/addons/ui-form-addons.module'
import { UiFormFieldModule } from './wrappers/form-field/ui-form-field.module'

@NgModule({
  declarations: [WebUiFormComponent],
  exports: [WebUiFormComponent],
  imports: [
    ReactiveFormsModule,
    FormlyModule.forRoot(),

    // Types
    UiFormCheckboxModule,
    UiFormInputModule,
    UiFormMulticheckboxModule,
    UiFormRadioModule,
    UiFormRepeatModule,
    UiFormSelectModule,
    UiFormTextareaModule,
    UiFormTypeaheadModule,

    // Validators
    UiFormValidatorsModule,

    // Wrappers
    UiFormAddonsModule,
    UiFormFieldModule,
  ],
})
export class WebUiFormModule {}
