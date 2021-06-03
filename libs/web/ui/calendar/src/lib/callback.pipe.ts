import { PipeTransform, Pipe } from '@angular/core'

@Pipe({
  name: 'callback',
  pure: false,
})
export class CallbackPipe implements PipeTransform {
  transform(items: any[], year?: any, month?: any, date?: any): any {
    if (!items) {
      return items
    }

    console.log(date)
    console.log(year)
    console.log(month)
    console.log(items)
    // let data = items.filter(e => new Date(e.event_date).toDateString() ===  new Date(year, month, date).toDateString() )
  }
}
