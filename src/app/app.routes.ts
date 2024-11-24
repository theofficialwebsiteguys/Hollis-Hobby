import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemDisplayComponent } from './item-display/item-display.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDisplayComponent } from './product-display/product-display.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Set HomeComponent to the root path
    { path: 'home', redirectTo: '', pathMatch: 'full' },  // Redirect /home to the root path
    { path: 'products', component: ProductListComponent},
    { path: 'product', component: ProductDisplayComponent},
    { path: 'item/:id', component: ItemDisplayComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'contact', component: ContactComponent },
];
