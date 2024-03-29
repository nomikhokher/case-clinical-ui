import { Component } from '@angular/core'
import { DevMediaObjectStore } from './dev-media-object.store'

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
        <!-- you add vertical direction 'start' or 'center' or 'end' -->
        <!-- you add horizontal direction,  'left' or 'right' -->
        <ui-media-object
          [circle]="vm.config.items.circle"
          [verticalDirection]="vm.config.items.verticalDirection"
          [height]="vm.config.items.height"
          [width]="vm.config.items.width"
          [horizontalDirection]="vm.config.items.horizontalDirection"
        >
          <ng-container class="objectData">
            <h4 class="text-lg font-bold dark:text-gray-100">{{ vm.config.items.title }}</h4>
            <p class="mt-1 dark:text-gray-300">
              {{ vm.config.items.description }}
            </p>
          </ng-container>
          <ng-container class="objectDataFullImage">
            <h4 class="text-lg font-bold dark:text-gray-100">{{ vm.config.items.title }}</h4>
            <p class="mt-1 dark:text-gray-300">
              {{ vm.config.items.description }}
            </p>
          </ng-container>
        </ui-media-object>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMediaObjectStore],
})
export class DevMediaObjectComponent {
  readonly vm$ = this.store.vm$

  public circle: boolean = false

  constructor(private readonly store: DevMediaObjectStore) {}

  public codePreview: Array<any>
  ngOnInit(): void {
    this.vm$.subscribe((result) => {
      this.codePreview = [
        `import { WebUiMediaObjectModule } from '@schema-driven/web/ui/media-object' \n\n 
        <ui-media-object
        [circle]="vm.config.items.circle"
        [verticalDirection]="vm.config.items.verticalDirection"
        [height]="vm.config.items.height"
        [width]="vm.config.items.width"
        [horizontalDirection]="vm.config.items.horizontalDirection"
      >
        <ng-container class="objectData">
          <h4 class="text-lg font-bold dark:text-gray-100">{{ vm.config.items.title }}</h4>
          <p class="mt-1 dark:text-gray-300">
            {{ vm.config.items.description }}
          </p>
        </ng-container>
        <ng-container class="objectDataFullImage">
          <h4 class="text-lg font-bold dark:text-gray-100">{{ vm.config.items.title }}</h4>
          <p class="mt-1 dark:text-gray-300">
            {{ vm.config.items.description }}
          </p>
        </ng-container>
      </ui-media-object> \n\n


      
        direction = ${JSON.stringify(result.config.items.circle, null, '\t')}\n
        horizontalDirection = ${JSON.stringify(result.config.items.horizontalDirection, null, '\t')}\n
        verticalDirection = ${JSON.stringify(result.config.items.verticalDirection, null, '\t')}\n
        height = ${JSON.stringify(result.config.items.height, null, '\t')}\n
        width = ${JSON.stringify(result.config.items.width, null, '\t')}\n
        `,
      ]
    })
  }

  public data = {
    img: 'imageAvatar',
    name: 'Lorem ipsum 0',
    des: `Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
      quidem ipsam quia iusto.`,
  }

  public data1 = [
    {
      img: 'imageAvatar',
      name: 'Lorem ipsum 2',
      des: `Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
      quidem ipsam quia iusto. 2`,
    },
    {
      img: 'imageAvatar',
      name: 'Lorem ipsum 3',
      des: `Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
      quidem ipsam quia iusto. 2`,
    },
  ]
}
