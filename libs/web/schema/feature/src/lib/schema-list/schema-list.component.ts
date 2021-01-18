import { Component, OnInit } from '@angular/core'
import { SchemaListStore } from './schema-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <schema-header
        title="Schemata"
        linkPath="create"
        [linkTitle]="vm.data.isOwner ? 'Create Schema' : null"
      ></schema-header>
      <ng-container *ngIf="vm.loading">
        <div class="flex py-36 animate-pulse justify-center align-center">LOADING...</div>
      </ng-container>
      <ng-container *ngIf="!vm.loading">
        <schema-table [isOwner]="vm.data?.isOwner" [schemata]="vm?.data?.schemata"></schema-table>
      </ng-container>
    </ng-container>
  `,
  providers: [SchemaListStore],
})
export class SchemaListComponent implements OnInit {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: SchemaListStore) {}

  ngOnInit(): void {
    this.store.loadSchemataEffect()
  }
}
