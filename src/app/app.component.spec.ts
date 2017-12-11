import { Router } from '@angular/router';
import { browser } from 'protractor';
import { BrowserModule } from "@angular/platform-browser";
import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { appRoutes } from "./app.routes";

import { AppComponent } from './app.component';
import { HeaderComponent } from './parts/header/header.component';
import { FooterComponent } from './parts/footer/footer.component';
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { SecretComponent } from './components/secret/secret.component';
import { Location } from '@angular/common';
import { DebugElement } from '@angular/core/src/debug/debug_node';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let location, router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        WelcomeComponent,
        SecretComponent
      ],
      imports: [
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
  
  it(`should have as title 'app'`, async(() => {
    expect(component.title).toEqual('app');
  }));
  
  it('should render the header, the footer, and the main',()=>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  it('should load WelcomeComponent',async () => {
    await router.navigate(['/']);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-welcome')).toBeTruthy();
  });

  it('should load SecretComponent', async () => {
    await router.navigate(['appletree']);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-secret')).toBeTruthy();
  });
});
