import { NgModule } from "@angular/core";

import { SigInComponent } from "./signin/signin.component";
import { ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [ SigInComponent ],
    imports: [ CommonModule, ReactiveFormsModule, VMessageModule, RouterModule ]
})
export class HomeModule {}