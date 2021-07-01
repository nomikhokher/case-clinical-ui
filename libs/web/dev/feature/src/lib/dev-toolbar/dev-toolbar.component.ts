import { Component } from '@angular/core'
import { DevToolbarStore } from './dev-toolbar.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-toolbar/dev-toolbar.component.ts
      </code>
      <ui-preview [code]="codePreview[0]">
        <ui-toolbar [buttons]="buttons"></ui-toolbar>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevToolbarStore],
})
export class DevToolbarComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevToolbarStore) {}

  public codePreview = [
    `import { WebUiToolbarModule } from '@schema-driven/web/ui/toolbar' \n\n 
      <ui-toolbar [buttons]="buttons"></ui-toolbar> \n\nbuttons=[
        {
          icon:'scissors',
          title:'Cut',
        },
        {
          icon:'copy',
          title:'Copy',
        },
        {
          icon:'clipboard',
          title:'Paste',
        },
        {
          icon:'colorPicker',
          title:'Color Picker',
        },
        {
          icon:'alignLeft',
          title:'Align Left',
        },
        {
          icon:'alignRight',
          title:'Align Right',
        },
        {
          icon:'alignCenter',
          title:'Align Center',
        },
        {
          icon:'arrowExpand',
          title:'Arrow Expand',
        },
        {
          icon:'setting',
          title:'Setting',
        },
        {
          icon:'cursor',
          title:'Cursor',
        },
        {
          icon:'download',
          title:'Download',
        },
        {
          icon:'upload',
          title:'Upload',
        },
        {
          icon:'mail',
          title:'Mail Box',
        },
        {
          icon:'edit',
          title:'Edit',
        },
      ]\n\n
    },`,
  ]

  public buttons: Buttons[] = [
    {
      icon: 'scissors',
      title: 'Cut',
    },
    {
      icon: 'copy',
      title: 'Copy',
    },
    {
      icon: 'clipboard',
      title: 'Paste',
    },
    {
      icon: 'colorPicker',
      title: 'Color Picker',
    },
    {
      icon: 'alignLeft',
      title: 'Align Left',
    },
    {
      icon: 'alignRight',
      title: 'Align Right',
    },
    {
      icon: 'alignCenter',
      title: 'Align Center',
    },
    {
      icon: 'arrowExpand',
      title: 'Arrow Expand',
    },
    {
      icon: 'setting',
      title: 'Setting',
    },
    {
      icon: 'cursor',
      title: 'Cursor',
    },
    {
      icon: 'download',
      title: 'Download',
    },
    {
      icon: 'upload',
      title: 'Upload',
    },
    {
      icon: 'mail',
      title: 'Mail Box',
    },
    {
      icon: 'edit',
      title: 'Edit',
    },
  ]
}

export type Buttons = {
  icon: string
  title?: string
}
