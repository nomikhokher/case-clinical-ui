import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-table-lists',
  template: `
    <div class="flex flex-col max-w-{{ width ? width : '7xl' }} dark:bg-gray-800">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 dark:bg-gray-800">
              <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                    *ngFor="let col of columns"
                  >
                    {{ col.title }}
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800">
                <tr
                  class="hover:opacity-75 dark:hover:opacity-0 bg-{{ background }}-200 dark:bg-gray-800"
                  *ngFor="let info of dataList; let i = index"
                  [ngClass]="{ 'opacity-80': i % 2 != 0 }"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {{ info.title }}
                        </div>
                        <div class="text-sm text-gray-500 dark:text-gray-300">
                          {{ info.tagLine }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900 dark:text-gray-100">{{ info.jobTitle }}</div>
                    <div class="text-sm text-gray-500 dark:text-gray-300">{{ info.jobTagLine }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {{ info.role }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="javascript:void(0)" class="text-indigo-600 hover:text-indigo-900">{{ info.button }}</a>
                  </td>
                </tr>
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

interface Columns {
  title?: string
}
interface Data {
  title?: string
  jobTitle?: string
  role?: string
  button?: string
  tagLine?: string
  jobTagLine?: string
}

interface Title {
  title?: string
  tagLine?: string
}
