import { ArrayDataSource } from '@angular/cdk/collections'
import { Component, Input } from '@angular/core'
import { UiTableColumn } from './web-ui-table.interfaces'

@Component({
  selector: 'ui-table',
  template: `
    <table cdk-table [dataSource]="dataSource">
      <ng-container *ngFor="let column of cols" [cdkColumnDef]="column.id">
        <th cdk-header-cell *cdkHeaderCellDef [class]="column?.headerClassName">{{ column.header }}</th>
        <td cdk-cell *cdkCellDef="let row" [class]="column?.className">{{ column.cell(row) }}</td>
      </ng-container>
      <tr cdk-header-row *cdkHeaderRowDef="columns"></tr>
      <tr cdk-row *cdkRowDef="let row; columns: columns"></tr>
    </table>
  `,
  styleUrls: ['./web-ui-table.component.css'],
})
export class WebUiTableComponent {
  @Input() cols: UiTableColumn[] = []
  @Input() data: any[] = []

  get dataSource(): ArrayDataSource<any> {
    return new ArrayDataSource(this.data || [])
  }

  get columns() {
    return this.cols?.map((c) => c.id)
  }
}
