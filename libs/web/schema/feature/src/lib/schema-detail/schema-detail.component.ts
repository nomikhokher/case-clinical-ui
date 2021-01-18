import { Component } from '@angular/core'
import { SchemaDetailStore } from './schema-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm.errors">
        <pre class="bg-gray-300 text-red-800 rounded-md p-4">{{ vm.errors | json }}</pre>
      </ng-container>
      <ng-container *ngIf="!vm.errors">
        <schema-header
          [title]="'Schema Details: ' + vm?.schema?.name || ''"
          linkPath=".."
          linkTitle="Back"
        ></schema-header>
        <div class="flex py-48 animate-pulse justify-center align-center">TBD: Schema Editor</div>
        <pre class="bg-gray-900 text-gray-400 p-4 rounded-md">{{ vm.schema | json }}</pre>
      </ng-container>
    </ng-container>
  `,
  providers: [SchemaDetailStore],
})
export class SchemaDetailComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: SchemaDetailStore) {}
}
