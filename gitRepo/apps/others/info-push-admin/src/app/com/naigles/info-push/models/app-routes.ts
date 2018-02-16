import { CreateSnypseComponent } from './../components/create-snypse/create-snypse.component';
import { CreateCategoryComponent } from './../components/create-category/create-category.component';
import { Routes, RouterModule } from "@angular/router";
export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    
    { path: 'create-category', component: CreateCategoryComponent },
    { path: 'create-snypse', component: CreateSnypseComponent },
    
];