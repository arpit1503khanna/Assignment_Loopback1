import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabularComponent } from './tabular/tabular.component';
import { UserAddComponent } from './tabular/user-add/user-add.component';
import { DateformatPipe } from './tabular/dateformat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TabularComponent,
    UserAddComponent,
    DateformatPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
