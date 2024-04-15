import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

// Modify the bootstrapApplication call to include HttpClientModule
bootstrapApplication(AppComponent, {
  ...appConfig, // Spread existing configurations from appConfig
  providers: [
    ...(appConfig.providers || []), // Include any existing providers from appConfig
    importProvidersFrom(HttpClientModule) // Add HttpClientModule
  ]
}).catch(err => console.error(err));

