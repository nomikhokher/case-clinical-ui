import { Component } from '@angular/core'
import { WebLayoutStore } from './web-layout.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <!-- This flex container takes the full height -->
      <div class="flex flex-col h-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
        <layout-header
          [name]="vm.brand?.name"
          [logo]="vm.brand?.logo"
          [links]="vm.links"
          [profile]="vm.profile"
        ></layout-header>
        <!-- The main area does not shrink, 'pushing down' the footer -->
        <main class="flex-grow h-full overflow-auto">
          <!-- This will render the routes -->
          <router-outlet></router-outlet>
        </main>
        <!-- This keeps the footer down if the main content does not fill up the space -->
        <footer class="mt-auto">
          <layout-footer [html]="vm.brand?.footer"></layout-footer>
        </footer>
      </div>
    </ng-container>
  `,
  providers: [WebLayoutStore],
})
export class WebLayoutComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: WebLayoutStore) {}
}
