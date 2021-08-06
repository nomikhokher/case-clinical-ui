import { Component } from '@angular/core'
import { DevTestimonialsStore } from './dev-testimonials.store'

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
        [codeObj]="vm.config.items"
      >
        <ui-testimonials [data]="vm.config.items.data"></ui-testimonials>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevTestimonialsStore],
})
export class DevTestimonialsComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevTestimonialsStore) {}

  public codePreview = [
    `import { WebUiTestimonialsModule } from '@schema-driven/web/ui/testimonials' \n\n 
      <ui-testimonials [data]="vm.config.items.data"></ui-testimonials> \n\n 
      data=[
        {
          title: 'Judith Black',
          message:
            '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
          position: 'Director',
          img:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          title: 'Tom Cook',
          message:
            '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.”',
          position: 'Manager',
          img:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          title: 'Joseph Rodriguez',
          message:
            '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.”',
          position: 'CEO',
          img:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ]
    `,
  ]
}
