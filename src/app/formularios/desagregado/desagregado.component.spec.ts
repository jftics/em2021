import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesagregadoComponent } from './desagregado.component';

describe('DesagregadoComponent', () => {
  let component: DesagregadoComponent;
  let fixture: ComponentFixture<DesagregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesagregadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesagregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
