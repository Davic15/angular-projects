import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { DetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let cardValue = 'Hello123';

  const mockedActivatedRoute = {
    params: of({ 'value': cardValue})
  } as any as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{ provide: ActivatedRoute, useValue: mockedActivatedRoute }],
      declarations: [ DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain card value', () => {
    const cardTitle: DebugElement = fixture.debugElement.query(By.css('.card__title'));
    expect(cardTitle.nativeElement.textContent).toEqual(`Card ""`)
  });
});
