import { Component } from '@angular/core'
import { DevChipsStore } from './dev-chips.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-chips/dev-chips.component.ts
      </code>
      <ui-preview [code]="codePreview[0]">
        <ui-chips [chips]="chips"></ui-chips>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevChipsStore],
})
export class DevChipsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevChipsStore) {}

  public codePreview = [
    `import { WebUiChipsModule } from '@schema-driven/web/ui/chips' \n\n 
      <ui-chips [chips]="chips"></ui-chips> \n\nchips=[
        {
          text:'hello!',
          bgColor:'bg-gray-100',
          textColor:'text-gray-700',
          hoverColor:'bg-gray-200',
        },
        {
          text:'hello!',
          bgColor:'bg-blue-100',
          textColor:'text-blue-700',
          hoverColor:'bg-blue-200',
        },
        {
          text:'hello!',
          bgColor:'bg-pink-100',
          textColor:'text-pink-700',
          hoverColor:'bg-pink-200',
        },
        {
          text:'hello!',
          img:'https://randomuser.me/api/portraits/women/68.jpg',
          bgColor:'bg-purple-100',
          textColor:'text-purple-700',
          hoverColor:'bg-purple-200',
        },
        {
          text:'hello!',
          bgColor:'bg-red-700',
          textColor:'text-red-100',
          hoverColor:'bg-red-600',
        },
        {
          text:'hello!',
          bgColor:'bg-yellow-700',
          textColor:'text-yellow-100',
          hoverColor:'bg-yellow-600',
        },
        {
          text:'hello!',
          bgColor:'bg-green-100',
          textColor:'text-green-700',
          hoverColor:'bg-green-200',
        },
        {
          text:'hello!',
          bgColor:'bg-indigo-700',
          textColor:'text-indigo-100',
          hoverColor:'bg-indigo-600',
          cross:'cross',
        },
        {
          text:'hello!',
          img:'',
          icon:'heart',
          bgColor:'bg-yellow-700',
          textColor:'text-yellow-100',
          hoverColor:'bg-yellow-600',
          cross:'cross',
        },
      ]\n\n
    },`,
  ]
  public chips: Chips[] = [
    {
      text: 'hello!',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-700',
      hoverColor: 'bg-gray-200',
    },
    {
      text: 'hello!',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-700',
      hoverColor: 'bg-blue-200',
    },
    {
      text: 'hello!',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-700',
      hoverColor: 'bg-pink-200',
    },
    {
      text: 'hello!',
      img: 'https://randomuser.me/api/portraits/women/68.jpg',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-700',
      hoverColor: 'bg-purple-200',
    },
    {
      text: 'hello!',
      bgColor: 'bg-red-700',
      textColor: 'text-red-100',
      hoverColor: 'bg-red-600',
    },
    {
      text: 'hello!',
      bgColor: 'bg-yellow-700',
      textColor: 'text-yellow-100',
      hoverColor: 'bg-yellow-600',
    },
    {
      text: 'hello!',
      bgColor: 'bg-green-100',
      textColor: 'text-green-700',
      hoverColor: 'bg-green-200',
    },
    {
      text: 'hello!',
      bgColor: 'bg-indigo-700',
      textColor: 'text-indigo-100',
      hoverColor: 'bg-indigo-600',
      cross: 'cross',
    },
    {
      text: 'hello!',
      img: '',
      icon: 'heart',
      bgColor: 'bg-yellow-700',
      textColor: 'text-yellow-100',
      hoverColor: 'bg-yellow-600',
      cross: 'cross',
    },
  ]
}

export type Chips = {
  text: string
  img?: string
  icon?: string
  bgColor?: string
  textColor?: string
  hoverColor?: string
  cross?: string
}
