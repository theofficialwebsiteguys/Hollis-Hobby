import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../banner/banner.component';
import { CategoryCardsComponent } from '../category-cards/category-cards.component';
import { BestSellersComponent } from '../best-sellers/best-sellers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CommonModule, BannerComponent, CategoryCardsComponent, BestSellersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
