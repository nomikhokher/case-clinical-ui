import { Component } from '@angular/core'
import { DevOrderHistoryStore } from './dev-order-history.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [githubURL]="vm.config.previewData.githubURL"
        [title]="vm.config.previewData.headerTitle"
        [directory]="vm.config.previewData.directory"
        [component_inputs]="vm.config.component_inputs"
        [codeObj]="vm.config.items"
        [code]="codePreview[0]"
      >
        <ui-order-history [orders]="vm.config.items.orderHistory"></ui-order-history>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevOrderHistoryStore],
})
export class DevOrderHistoryComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevOrderHistoryStore) {}
  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiOrderHistoryModule } from '@schema-driven/web/ui/order-history\n\n 
        <ui-order-history [orders]="vm.config.items.orderHistory"></ui-order-history> \n\n
      
        orders = ${JSON.stringify(result.config.items.orderHistory, null, '\t')}\n`,
      ]
    })
  }
}
