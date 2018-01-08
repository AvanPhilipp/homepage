import { Router } from '@angular/router';
import { browser } from 'protractor';
import { BrowserModule } from "@angular/platform-browser";
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { appRoutes } from "./app.routes";

import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { DebugElement } from '@angular/core/src/debug/debug_node';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from './material/material.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let location, router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        LayoutModule,
        PagesModule,
        RouterTestingModule.withRoutes(appRoutes)
      ]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  });

  beforeEach(inject([Router, Location],(_router, _location)=>{
    location = _location;
    router = _router;
  }));

  it('should create the app', async(() => { 
    expect(component).toBeTruthy();
  }));
  
  it('should render the header, the sidebar, the footer, and the main',()=>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('fea-header')).toBeTruthy();
    expect(compiled.querySelector('fea-sidebar')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
    expect(compiled.querySelector('fea-footer')).toBeTruthy();
  });

  it('should load WelcomeComponent',async () => {
    await router.navigate(['/']);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('fea-welcome')).toBeTruthy();
  });

  it('should load SecretComponent', async () => {
    await router.navigate(['appletree']);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-secret')).toBeTruthy();
  });
});
