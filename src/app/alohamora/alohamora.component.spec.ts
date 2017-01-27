/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlohamoraComponent } from './alohamora.component';

describe('AlohamoraComponent', () => {
  let component: AlohamoraComponent;
  let fixture: ComponentFixture<AlohamoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlohamoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlohamoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
