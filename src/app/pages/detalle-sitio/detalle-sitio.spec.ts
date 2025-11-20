import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSitio } from './detalle-sitio';

describe('DetalleSitio', () => {
  let component: DetalleSitio;
  let fixture: ComponentFixture<DetalleSitio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSitio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleSitio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
