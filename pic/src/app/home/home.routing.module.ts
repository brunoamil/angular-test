import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home.component";
import { SigInComponent } from "./signin/signin.component";
import { SignUpComponent } from "./signup/signup.component";
import { LoginGuard } from "../core/auth/login.guard";



const routes: Routes = [
    { 
        path: '',
        component: HomeComponent,
        canActivate: [ LoginGuard ],
        children: [
            { 
                path: '',
                component: SigInComponent
            },
            { 
                path: 'signup',
                component: SignUpComponent
            },
        ]
    }
];

@NgModule({
    imports: [ 
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {}