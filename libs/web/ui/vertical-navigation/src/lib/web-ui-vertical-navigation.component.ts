import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-vertical-navigation',
  template: `
    <nav class="space-y-1" aria-label="Sidebar">
      <div class="mb-8">
        <a
          *ngFor="let i of menuItems"
          href="#"
          class="text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex items-center px-3 py-2 text-sm font-medium rounded-md"
          aria-current="page"
        >
          <ui-icon *ngIf="i.icon" size="lg" icon="{{ i.icon }}" class="h-5 w-5"></ui-icon>
          <span class="truncate ml-2"> {{ i.item }} </span>
          <span
            *ngIf="i.badge"
            class="bg-gray-100 text-gray-600 group-hover:bg-gray-200 ml-auto inline-block py-0.5 px-3 text-xs rounded-full"
          >
            {{ i.badge }}
          </span>
        </a>
      </div>
      <div *ngIf="secondaryNav" class="mt-8">
        <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider" id="projects-headline">
          Projects
        </h3>
        <div class="mt-1 space-y-1" aria-labelledby="projects-headline">
          <a
            *ngFor="let i of secondaryNav"
            href="#"
            class="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
          >
            <span class="truncate">{{ i.menu }}</span>
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class WebUiVerticalNavigationComponent {
  @Input() icon?: Boolean
  @Input() badges?: Boolean
  @Input() secondaryNav?: Array<any>
  @Input() menuItems?: Array<any>
  public str = `<path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />`
}
