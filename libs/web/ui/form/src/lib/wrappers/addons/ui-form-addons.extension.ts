import { FormlyFieldConfig } from '@ngx-formly/core'

export function addonsExtension(field: FormlyFieldConfig): any {
  if (!field.templateOptions || (field.wrappers && field.wrappers.indexOf('addons') !== -1)) {
    return
  }

  if (field.templateOptions.addonLeft) {
    const paddingLeft = field.templateOptions.addonLeft?.paddingLeft || '2.5rem'
    field.wrappers = [...(field.wrappers || []), 'addons']
    field.templateOptions.attributes = {
      ...(field.templateOptions?.attributes || {}),
      style: `padding-left: ${paddingLeft};`,
    }
  }
  if (field.templateOptions.addonRight) {
    const padding = field.templateOptions.addonRight?.paddingRight || '2.5rem'
    field.wrappers = [...(field.wrappers || []), 'addons']
    field.templateOptions.attributes = {
      ...(field.templateOptions?.attributes || {}),
      style: `padding-right: ${padding};`,
    }
  }
}
