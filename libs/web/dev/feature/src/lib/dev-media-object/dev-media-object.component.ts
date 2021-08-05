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
      <ui-preview [code]="codePreview[1]">
        <!-- you add only height '1,2,3,4,5,6,7,8,9,10,11,12,14,16' if use full height image then you not use vertical direction or 'full', by default set value is '16' -->
        <!-- you add only width '1,2,3,4,5,6,7,8,9,10,11,12,14,16' and not use 'full'value, by default set value is '16' -->
        <ui-media-object icon="imageAvatar" [circle]="circle" height="full" width="" horizontalDirection="right">
          <ng-container class="objectDataFullImage">
            <h4 class="text-lg font-bold">Lorem ipsum</h4>
            <p class="mt-1">
              Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
              quidem ipsam quia iusto.
            </p>
          </ng-container>
        </ui-media-object>
      </ui-preview>

      <ui-preview [code]="codePreview[2]">
        <ui-media-object [data]="data" [circle]="circle" height="" width="" horizontalDirection="rights">
          <ui-media-object
            class="objectData2"
            *ngFor="let childData of data1"
            [data]="childData"
            [circle]="circle"
            height=""
            width=""
            horizontalDirection="left"
          >
          </ui-media-object>
        </ui-media-object>
      </ui-preview>

      <ui-preview>
        <ui-media-object [data]="data" [circle]="circle" height="" width="" horizontalDirection="lefts">
          <ui-media-object
            class="objectData3"
            *ngFor="let childData of data1"
            [data]="childData"
            [circle]="circle"
            height=""
            width=""
            horizontalDirection="left"
          >
          </ui-media-object>
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

  public codePreview = [
    ` import { WebUiMediaObjectModule } from '@schema-driven/web/ui/media-object\n\n<ui-media-object icon="imageAvatar" [circle]="circle" verticalDirection="center" horizontalDirection="left">
    <ng-container class="objectData">
      <h4 class="text-lg font-bold">Lorem ipsum</h4>
      <p class="mt-1">
        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
        quidem ipsam quia iusto.
      </p>
    </ng-container>
  </ui-media-object> \n\n circle= false`,
    `import { WebUiMediaObjectModule } from '@schema-driven/web/ui/media-object\n\n<ui-media-object icon="imageAvatar" [circle]="circle" height="full" width="" horizontalDirection="right">
    <ng-container class="objectDataFullImage">
      <h4 class="text-lg font-bold">Lorem ipsum</h4>
      <p class="mt-1">
        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
        quidem ipsam quia iusto.
      </p>
    </ng-container>
  </ui-media-object> \n\n circle= false`,
    `import { WebUiMediaObjectModule } from '@schema-driven/web/ui/media-object\n\n<ui-media-object [data]="data" [circle]="circle" height="" width="" horizontalDirection="rights">
    <ui-media-object
      class="objectData2"
      *ngFor="let childData of data1"
      [data]="childData"
      [circle]="circle"
      height=""
      width=""
      horizontalDirection="left"
    >
    </ui-media-object>\n\ncircle= false`,
  ]

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
