import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { DevContactSectionsComponent } from './dev-contact-sections.component'
import { WebUiPreviewModule } from '@schema-driven/web/ui/preview'
import { WebUiContactSectionsModule } from 'libs/web/ui/contact-sections/src'

@NgModule({
  declarations: [DevContactSectionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DevContactSectionsComponent }]),
    WebUiPreviewModule,
    WebUiContactSectionsModule,
  ],
})
export class DevContactSectionsModule {}
