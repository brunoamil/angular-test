import { NgModule } from "@angular/core";
import { PhotoDetailComponent } from "./photo-detail.componet";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";

@NgModule({
    declarations: [ PhotoDetailComponent],
    exports: [ PhotoDetailComponent],
    imports: [CommonModule, PhotoModule]
})
export class PhotoDetailModule {}