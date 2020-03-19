import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { IndexComponent } from './Components/index/index.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot( {
      apiKey: 'AIzaSyC_QSmUEnYpuHxlx5KXE92ZU3LZGkuV6l4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
