import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeroComponent } from '../hero/hero.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [HeroComponent, CommonModule, RouterModule],
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    menu: any = [
        {
            title: "Clothing",
            category: "CLOTHING",
            route: "/products",
        },
        {
            title: "Stuffed Animals",
            category: "STUFFED-ANIMALS",
            route: "/products",
        },
        {
            title: "Decorations",
            category: "DECORATIONS",
            route: "/products",
        },
        {
            title: "Crochet",
            category: "CROCHET",
            route: "/products",
        },
        {
            title: "About",
            category: "",
            route: "/about",
        },
        {
            title: "Contact",
            category: "",
            route: "/contact",
        },

    ];

    constructor(
        private router: Router, 
        private productService: ProductService,
    ) {  }

    ngOnInit() {
     
    }

    
}
