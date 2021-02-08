const ucFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export class UiTableColumn {
  id?: string
  cell?: (item: any) => string
  className?: string
  header?: string
  headerClassName?: string
}

export class UiTable {
  static column(id: string, config: Omit<UiTableColumn, 'id'> = { cell: (item) => item[id] }): UiTableColumn {
    const defaultCell = (item) => item[id]
    return {
      id,
      ...config,
      cell: config.cell || defaultCell,
      header: config.header || ucFirst(id),
      headerClassName: config.headerClassName || 'text-left',
    }
  }
}
