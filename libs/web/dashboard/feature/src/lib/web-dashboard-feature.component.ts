import { Component } from '@angular/core'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { map } from 'rxjs/operators'

@Component({
  template: `
    <ui-page headerTitle="Dashboard">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="dark:bg-gray-800 bg-white px-6 py-4 mb-3 md:mb-6 rounded-lg shadow">
          <ng-container *ngIf="me$ | async as user">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-20 w-20">
                  <img class="h-20 w-20 rounded-full" [attr.src]="user?.avatarUrl" alt="" />
                </div>
                <div class="ml-4">
                  <div class="text-lg font-medium text-gray-900 dark:text-gray-200">
                    {{ user?.name }}
                  </div>
                  <div class="text-lg text-gray-500">
                    {{ user?.email }}
                  </div>
                </div>
              </div>
              <div class="flex space-x-3">
                <ui-button routerLink="/account" label="Manage Account"></ui-button>
                <ui-button *ngIf="user.role == 'Admin'" routerLink="/admin" label="Admin"></ui-button>
              </div>
            </div>
          </ng-container>
        </div>
      </div>
    </ui-page>
  `,
})
export class WebDashboardFeatureComponent {
  me$ = this.sdk.me().pipe(map((res) => res.data.me))
  constructor(private readonly sdk: ApolloAngularSDK) {}
}
