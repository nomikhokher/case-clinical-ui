import { Component } from '@angular/core'
import { DevTableStore } from './dev-table.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex flex-col space-y-6">
        <ng-container *ngFor="let demo of vm.demos">
          <ui-preview [title]="demo.label" [code]="codePreview[0]">
            <ui-table [cols]="demo.cols" [data]="demo.data"></ui-table>
          </ui-preview>
        </ng-container>
      </div>
    </ng-container>
  `,
  providers: [DevTableStore],
})
export class DevTableComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevTableStore) {}
  public codePreview = [`<ui-table [cols]="demo.cols" [data]="demo.data"></ui-table>`]
}
