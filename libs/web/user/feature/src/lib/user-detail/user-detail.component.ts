import { Component } from '@angular/core'
import { AdminUpdateUserInput, Role } from '@metadata/web/core/data-access'
import { WebUiFormField } from '@metadata/web/ui/form'
import { UserDetailStore } from './user-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <user-header [title]="'Edit user ' + vm.user?.username" linkPath=".." linkTitle="Back"></user-header>
      <user-form [fields]="fields" [user]="vm.user" (submitForm)="updateUser($event)"></user-form>
    </ng-container>
  `,
  providers: [UserDetailStore],
})
export class UserDetailComponent {
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
    WebUiFormField.input('phone', { label: 'Phone' }),
    WebUiFormField.input('avatarUrl', { label: 'Avatar Url' }),
    WebUiFormField.input('location', { label: 'Location' }),
    WebUiFormField.textarea('bio', { label: 'Bio' }),
  ]

  constructor(private readonly store: UserDetailStore) {}

  updateUser(input: AdminUpdateUserInput) {
    const { role, email, username, firstName, lastName, phone, avatarUrl, location, bio } = input
    this.store.updateUserEffect({ role, email, username, firstName, lastName, phone, avatarUrl, location, bio })
  }
}
