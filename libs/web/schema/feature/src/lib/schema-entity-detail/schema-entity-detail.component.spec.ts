import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SchemaEntityDetailComponent } from './schema-entity-detail.component'

describe('SchemaEntityDetailComponent', () => {
  let component: SchemaEntityDetailComponent
  let fixture: ComponentFixture<SchemaEntityDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchemaEntityDetailComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaEntityDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
