import { NgModule } from "@angular/core";
import { ShowLoggedDirective } from "./show-if-logged.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ ShowLoggedDirective],
    exports: [ ShowLoggedDirective],
    imports: [ CommonModule ]
})
export class ShowIfLoggedModule {}