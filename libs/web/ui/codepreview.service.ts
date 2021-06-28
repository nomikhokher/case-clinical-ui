import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ServiceCodepreview {
  codePreview$ = new BehaviorSubject<any>('No Data')
}
