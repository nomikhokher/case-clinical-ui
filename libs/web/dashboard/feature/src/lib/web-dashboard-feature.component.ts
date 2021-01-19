import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@metadata/web/core/data-access'

@Component({
  template: `
    <div class="container mx-auto my-3 my-md-5">
      <div class="card">
        <div class="card-header">Dashboard</div>
        <div class="card-body">
          <pre>{{ me$ | async | json }}</pre>
        </div>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
      <pre>{{ tenants$ | async | json }}</pre>
    </div>
  `,
})
export class WebDashboardFeatureComponent {
  uptime$ = this.data.uptimeWatch()
  me$ = this.data.me()
  tenants$ = this.data.sdk.tenants()
  constructor(private readonly data: WebCoreDataAccessService) {}
}
