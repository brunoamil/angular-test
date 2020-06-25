import { NgModule } from "@angular/core";

import { SigInComponent } from "./signin/signin.component";
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";
import { SignUpComponent } from "./signup/signup.component";

@NgModule({
    declarations: [ SigInComponent, SignUpComponent ],
    imports: [ CommonModule, ReactiveFormsModule, VMessageModule, RouterModule, FormsModule ]
})
export class HomeModule {}