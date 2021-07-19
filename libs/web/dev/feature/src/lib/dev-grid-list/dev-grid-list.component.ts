import { Component } from '@angular/core'
import { DevGridListStore } from './dev-grid-list.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ui-preview
        [title]="vm.config.headerTitle"
        [githubURL]="vm.config.githubURL"
        [directory]="vm.config.directory"
        [breadcrumbs]="vm.config.breadcrumbs"
        [component_inputs]="vm.config.component_inputs"
        [code]="codePreview[0]"
      >
        <ui-grid-list
          [cols]="vm.config.items.cols"
          [gap]="vm.config.items.gap"
          [lg]="vm.config.items.lg"
          [md]="vm.config.items.md"
          [sm]="vm.config.items.sm"
          [xs]="vm.config.items.xs"
        >
          <section id="gridList">
            <div
              class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0">
                <a href="javascript:viod(0)" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">Leslie Alexander</p>
                  <p class="text-sm text-gray-500 truncate">Co-Founder / CEO</p>
                </a>
              </div>
            </div>
          </section>
          <section id="gridList1">
            <div
              class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0">
                <a href="javascript:viod(0)" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">Theresa Webb</p>
                  <p class="text-sm text-gray-500 truncate">Global Division Officer</p>
                </a>
              </div>
            </div>
          </section>
          <section id="gridList2">
            <div
              class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0">
                <a href="javascript:viod(0)" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">Courtney Henry</p>
                  <p class="text-sm text-gray-500 truncate">Investor Factors Associate</p>
                </a>
              </div>
            </div>
          </section>
          <section id="gridList3">
            <div
              class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0">
                <a href="javascript:viod(0)" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true"></span>
                  <p class="text-sm font-medium text-gray-900">Kristin Watson</p>
                  <p class="text-sm text-gray-500 truncate">Lead Security Associate</p>
                </a>
              </div>
            </div>
          </section>
        </ui-grid-list>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevGridListStore],
})
export class DevGridListComponent {
  readonly vm$ = this.store.vm$
  constructor(private readonly store: DevGridListStore) {}
  public codePreview = [
    `import { WebUiGridListModule} from '@schema-driven/web/ui/grid-list' \n\n
     gap = 3 \n lg = 4 \n md = 3 \n sm = 2 \n xs = 2 \n  cols = 1
     \n\n
     <div
     class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
   >
     <div class="flex-shrink-0">
       <img
         class="h-10 w-10 rounded-full"
         src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
         alt=""
       />
     </div>
     <div class="flex-1 min-w-0">
       <a href="#" class="focus:outline-none">
         <span class="absolute inset-0" aria-hidden="true"></span>
         <p class="text-sm font-medium text-gray-900">Leslie Alexander</p>
         <p class="text-sm text-gray-500 truncate">Co-Founder / CEO</p>
       </a>
     </div>
   </div>
    `,
  ]
}
