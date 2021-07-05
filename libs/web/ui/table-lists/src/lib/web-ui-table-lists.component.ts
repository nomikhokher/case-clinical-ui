import { Component, Input } from '@angular/core'
import { Columns, Data } from '../../../../dev/feature/src/lib/dev-table-lists/dev-table-lists.component'

@Component({
  selector: 'ui-table-lists',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="flex flex-col max-w-{{ width ? width : '7xl' }}">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    *ngFor="let col of columns"
                  >
                    {{ col.title }}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr
                  class="hover:opacity-75 bg-{{ background }}-200"
                  *ngFor="let info of dataList; let i = index"
                  [ngClass]="{ 'opacity-60': i % 2 != 0 }"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ info.title.title }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ info.title.tagLine }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ info.jobTitle.title }}</div>
                    <div class="text-sm text-gray-500">{{ info.jobTitle.tagLine }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ info.role }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="javascript:void(0)" class="text-indigo-600 hover:text-indigo-900">{{ info.button }}</a>
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class WebUiTableListsComponent {
  @Input() columns: Columns
  @Input() dataList: Data
  @Input() width?: string
  @Input() background?: string
}
