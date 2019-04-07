import { Component, Input, HostListener } from "@angular/core";
import { Card } from "../cards.interface";

@Component({
  selector: "app-carousel-item",
  templateUrl: "./carousel-item.component.html",
  styleUrls: ["./carousel-item.component.scss"]
})
export class CarouselItemComponent {
  @Input() card: Card;
  public isReverse = false;
  public reverseUrl = "https://cards.photos/tiles/reverse.svg";

  @HostListener("click", ["$event"])
  public cardClick(): void {
    this.isReverse = !this.isReverse;
  }
}
