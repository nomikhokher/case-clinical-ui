import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminTenantListComponent } from './admin-tenant-list.component'

describe('TenantListComponent', () => {
  let component: AdminTenantListComponent
  let fixture: ComponentFixture<AdminTenantListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTenantListComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTenantListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
