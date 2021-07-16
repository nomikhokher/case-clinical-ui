import { Component } from '@angular/core'
import { DevToolbarStore } from './dev-toolbar.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [code]="codePreview[0]"
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_outputs]="vm.config.component_outputs"
        [component_inputs]="vm.config.component_inputs"
      >
        <ui-toolbar [buttons]="vm.config.items.buttons" [background]="vm.config.items.background"></ui-toolbar>
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
      ]\n background = "gray"
    },`,
  ]
}
