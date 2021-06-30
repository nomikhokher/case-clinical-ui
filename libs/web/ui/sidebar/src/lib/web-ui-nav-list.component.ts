import { Component, Input, OnInit } from '@angular/core'
import { User } from '@schema-driven/web/core/data-access'
import { WebLayoutLink } from '@schema-driven/web/layout'

@Component({
  selector: 'ui-nav-list',
  template: ``,
})
export class WebUiNavListComponent {
  @Input() links: WebLayoutLink[] = []
}
