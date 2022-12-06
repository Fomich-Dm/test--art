import { Component } from '@angular/core';
import {Card} from "../../models/card";
import {Cards} from "../../mock/mock-card";

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent {
  cards: Card[] = Cards
}
