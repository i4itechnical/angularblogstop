import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogstopmaterialModule } from './blogstopmaterial.module';
import { BlogstopcoreModule } from './blogstopcore/blogstopcore.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogstopmaterialModule,
    BlogstopcoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
