import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class CardsService {
  constructor(private http: HttpClient) {}

  public getCardsJson(): Observable<any> {
    return this.http.get(environment.cardsUrl);
  }
}
