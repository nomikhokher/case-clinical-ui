import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ServiceCodepreview {
  codePreview$ = new BehaviorSubject<any>('No Data')

  searchBar$ = new BehaviorSubject<any>('')
  searchIcon$ = new BehaviorSubject<any>('')
  searchedArray$ = new BehaviorSubject<any>('')
}
