import { NgModule } from "@angular/core";
import { PhotoDetailComponent } from "./photo-detail.componet";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";

@NgModule({
    declarations: [ PhotoDetailComponent, PhotoCommentsComponent],
    exports: [ PhotoDetailComponent, PhotoCommentsComponent],
    imports: [CommonModule, PhotoModule, RouterModule, ReactiveFormsModule, VMessageModule]
})
export class PhotoDetailModule {}