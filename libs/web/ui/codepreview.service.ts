import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ServiceCodepreview {
  codePreview$ = new BehaviorSubject<any>('No Data')

  searchBar$ = new BehaviorSubject<any>('')
  searchedArray$ = new BehaviorSubject<any>('')
}
