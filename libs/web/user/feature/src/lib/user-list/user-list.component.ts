import { Component, OnInit } from '@angular/core'
import { UserListStore } from './user-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <user-header title="Users" linkPath="create" linkTitle="Create User"></user-header>
      <ng-container *ngIf="vm.loading">
        <div class="flex py-36 animate-pulse justify-center align-center">LOADING...</div>
      </ng-container>
      <ng-container *ngIf="!vm.loading">
        <user-table [users]="vm.users"></user-table>
      </ng-container>
    </ng-container>
  `,
  providers: [UserListStore],
})
export class UserListComponent implements OnInit {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: UserListStore) {}

  ngOnInit(): void {
    this.store.loadUsersEffect()
  }
}
