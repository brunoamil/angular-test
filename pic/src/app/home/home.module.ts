import { NgModule } from "@angular/core";

import { SigInComponent } from "./signin/signin.component";
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SignUpComponent } from "./signup/signup.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing.module";
import { SignUpService } from "./signup/signup.service";

@NgModule({
    declarations: [ SigInComponent, SignUpComponent, HomeComponent],
    imports: [ 
        CommonModule, 
        ReactiveFormsModule, 
        VMessageModule, 
        RouterModule, 
        FormsModule, 
        HomeRoutingModule ],
    providers: [SignUpService]
})
export class HomeModule {}