import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { HttpClientModule } from "@angular/common/http";
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@NgModule({
  declarations: [AppComponent, CarouselComponent, CarouselItemComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
