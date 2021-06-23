import { Component, ChangeDetectionStrategy } from '@angular/core'
import { FormControl } from '@angular/forms'
import { FieldType } from '@ngx-formly/core'
import { Subject, Observable } from 'rxjs'

interface Item {
  id: string
  name: string
}

@Component({
  template: `
    <ng-select
      class="custom"
      [items]="to?.items | async"
      [placeholder]="to.placeholder"
      [bindValue]="'id'"
      [bindLabel]="'name'"
      [multiple]="to.multiple"
      [virtualScroll]="true"
      [formControl]="formControl"
      [groupBy]="to.groupBy"
      (change)="onChange($event)"
      (search)="to?.onSearch($event)"
    ></ng-select>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFormTypeaheadComponent extends FieldType {
  formControl!: FormControl
  search$ = new Subject<string>()
  static = false
  selectedItem: Item
  items: Observable<Item[]>
  options$: Observable<string[]>
  public value: any

  onChange(selection) {
    if (this.to.onChange) {
      return this.to.onChange(selection)
    }
    return selection
  }

  onSearch({ term }) {
    console.log('searching', this.formState, this.options$, term)
    //this.search$.next(term);
  }

  inputMapFn(e: any) {
    if (this.to.mapFn) {
      return this.to.mapFn(e)
    }
    return e
  }

  outputMapFn(e: any) {
    if (this.to.convertOutput === true && e && this.to.mapFn) {
      this.formControl.setValue(this.to.mapFn(e))
      this.value = e
      return
    }
    this.formControl.setValue(e)
    this.value = e
  }
}
