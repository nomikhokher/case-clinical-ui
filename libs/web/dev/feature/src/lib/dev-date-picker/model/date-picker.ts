export interface ComponentProp {
  label?: string
  description?: string
  prop?: string
  dataType?: string
}
export enum SetDateFormatEnum {
  DDMMYYYY = 'DD-MM-YYYY',
  MMDDYYYY = 'MM-DD-YYYY',
  YYYYMMDD = 'YYYY-MM-DD',
  DdMY = 'D d M, Y',
}
