import { Component } from '@angular/core'
import { AdminCreateUserInput, Role } from '@metadata/web/core/data-access'
import { WebUiFormField } from '@metadata/web/ui/form'
import { UserCreateStore } from './user-create.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <user-header title="Create User" linkPath=".." linkTitle="Back"></user-header>
      <user-form [fields]="fields" [user]="{}" (submitForm)="createUser($event)"></user-form>
    </ng-container>
  `,
  providers: [UserCreateStore],
})
export class UserCreateComponent {
  readonly vm$ = this.store.vm$
  fields = [
    WebUiFormField.select('role', {
      label: 'Role',
      required: true,
      options: Object.keys(Role).map((value) => ({ value, label: value })),
    }),
    WebUiFormField.input('email', { label: 'Email', required: true }),
    WebUiFormField.input('username', { label: 'Username' }),
    WebUiFormField.input('firstName', { label: 'First name' }),
    WebUiFormField.input('lastName', { label: 'Last name' }),
  ]
  constructor(private readonly store: UserCreateStore) {}

  createUser(input: AdminCreateUserInput) {
    this.store.createUserEffect(input)
  }
}
