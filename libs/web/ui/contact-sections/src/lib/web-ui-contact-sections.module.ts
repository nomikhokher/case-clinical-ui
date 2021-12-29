import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { WebUiContactSectionsComponent } from './web-ui-contact-sections.component'

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [WebUiContactSectionsComponent],
  exports: [WebUiContactSectionsComponent],
})
export class WebUiContactSectionsModule {}
