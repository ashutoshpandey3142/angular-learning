import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeMeDirective } from './shared/directives/change-me.directive';
import { RendererHighlightDirective } from './shared/directives/renderer-highlight.directive';
import { HostBindingDirective } from './shared/directives/host-binding.directive';
import { UnlessDirective } from './shared/directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangeMeDirective,
    RendererHighlightDirective,
    HostBindingDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
