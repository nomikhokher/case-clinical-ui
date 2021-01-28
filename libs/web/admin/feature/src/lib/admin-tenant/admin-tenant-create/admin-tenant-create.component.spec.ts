import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminTenantCreateComponent } from './admin-tenant-create.component'

describe('TenantCreateComponent', () => {
  let component: AdminTenantCreateComponent
  let fixture: ComponentFixture<AdminTenantCreateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTenantCreateComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTenantCreateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
