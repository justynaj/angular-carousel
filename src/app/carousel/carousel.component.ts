import { Component, OnInit } from "@angular/core";
import { CardsService } from "../cards.service";
import { Card } from "../cards.interface";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  public cardsToShow: Card[];
  public isNextVisible = false;
  private cards: Card[];
  private batchIndex: number = null;
  private readonly batchSize = 4;

  constructor(private cardsService: CardsService) {}

  public ngOnInit(): void {
    this.getCards();
  }

  public showNext(): void {
    this.batchIndex += this.batchSize;
    this.setNextVisibility();
    this.getCardsBatch();
  }

  public showPrev(): void {
    this.batchIndex -= this.batchSize;
    if (this.batchIndex < 0) {
      this.batchIndex = 0;
    }
    this.setNextVisibility();
    this.getCardsBatch();
  }

  private setNextVisibility(): void {
    this.isNextVisible = !(
      this.batchIndex >
      this.cards.length - this.batchSize
    );
  }

  private getCardsBatch(): void {
    if (this.batchIndex === null) {
      this.batchIndex = 0;
    }
    this.cardsToShow = this.cards.slice(
      this.batchIndex,
      this.batchIndex + this.batchSize
    );
  }

  private getCards(): void {
    this.cardsService.getCardsJson().subscribe((data: Card[]) => {
      if (data) {
        this.cards = data;
        if (this.cards.length > this.batchSize) {
          this.isNextVisible = true;
        }
        this.getCardsBatch();
      }
    });
  }
}
