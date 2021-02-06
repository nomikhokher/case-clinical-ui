import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { UiCodeLanguage } from '@schema-driven/web/ui/code'

export interface Demo {
  label?: string
  lang?: UiCodeLanguage
  code?: string
}

interface DevCodeState {
  demos?: Demo[]
}

const demos: Demo[] = [
  {
    label: 'GraphQL',
    lang: 'graphql',
    code: `fragment UserDetails on User {
  id
  username
  email
}

query Me {
  me {
    ...UserDetails
  }
}

mutation Login($input: LoginInput!) {
  login(input: $input) {
    ...UserDetails
  }
}`,
  },
  {
    label: 'HTML',
    lang: 'html',
    code: `<ng-container *ngIf="vm$ | async as vm">
  <div class="flex flex-col space-y-6">
    <ng-container *ngFor="let demo of vm.demos">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <ui-code [code]="demo.code" [language]="demo.lang"></ui-code>
      </div>
    </ng-container>
  </div>
</ng-container>`,
  },
  {
    label: 'JavaScript',
    lang: 'javascript',
    code: `export async function main() {
  console.log('Hello world! ' + 1)
  await Promise.resolve(true)
}`,
  },
  {
    label: 'JSON',
    lang: 'json',
    code: `{
  "name": "my-app",
  "version": "1.0.0",
  "license": "MIT",
  "private": true
}`,
  },
  {
    label: 'Markdown',
    lang: 'markdown',
    code: `# Hello Markdown

> This is an example file

- this
- is
- a
- list

We can also do **bold**, _italic_ and ~~strike~~

Or [links](https://example.com)`,
  },
  {
    label: 'TypeScript',
    lang: 'typescript',
    code: `@Injectable()
export class DevCodeStore extends ComponentStore<DevCodeState> {
  constructor() {
    super({ demos })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly vm$ = this.select(this.demos$, (demos) => ({ demos }))
}
`,
  },
]

@Injectable()
export class DevCodeStore extends ComponentStore<DevCodeState> {
  constructor() {
    super({ demos })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly vm$ = this.select(this.demos$, (demos) => ({ demos }))
}
