import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './component/admin/admin.component';
import { StudentService } from './service/student.service';
import { PercentagePipe } from './pipes/percentage.pipe';
import {FormsModule} from '@angular/forms'
import { StudentFilterPipe } from './pipes/student-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PercentagePipe,
    StudentFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
