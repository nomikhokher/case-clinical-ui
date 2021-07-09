import { ElementRef } from '@angular/core'

export interface EditorFroalaOptions {
  firstModel?: Details
  froalaOptions?: FroalaOptionsObject
}

export interface ComponentProp {
  label?: string
  description?: string
  dataType?: string
  prop?: string
}

type Details = {
  details: any
}

type FroalaOptionsObject = {
  charCounterCount?: boolean
  fileUpload?: boolean
  attribution?: boolean
  toolbarButtons?: Array<string[]>
  toolbarSticky?: boolean
  language?: string
  fontFamily?: FontFamily
  events?: Events | any
  contentChanged?: () => void
}

type FontFamily = {
  arial?: FontFamilyEnum[0]
  courier?: FontFamilyEnum[1]
  georgia?: FontFamilyEnum[2]
  impact?: FontFamilyEnum[3]
  lucida?: FontFamilyEnum[4]
  tahoma?: FontFamilyEnum[5]
  times?: FontFamilyEnum[6]
  verdana?: FontFamilyEnum[7]
}

enum FontFamilyEnum {
  Arial = 'Arial,Helvetica,sans-serif',
  Courier = "'Courier New',Courier,monospace",
  Georgia = 'Georgia,serif',
  Impact = 'Impact,Charcoal,sans-serif',
  Lucida = "'Lucida Console',Monaco,monospace",
  Tahoma = 'Tahoma,Geneva,sans-serif',
  Times = "'Times New Roman',Times,serif",
  Verdana = 'Verdana,Geneva,sans-serif',
}

type Events = {
  froalaEditorEvent: FroalaEditorEvent[0]
}

enum FroalaEditorEvent {
  froalaEditorEventValue = 'froalaEditor.image.beforeUpload',
}
