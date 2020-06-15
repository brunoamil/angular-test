import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo.comment';
import { PhotoService } from '../../photo/photo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html',
    styleUrls: ['./photo-comment.css']
})

export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;
    commentForm: FormGroup;
    comments$: Observable<PhotoComment[]>;

    constructor(private photoService: PhotoService, private formBuild: FormBuilder){}

    ngOnInit(): void {
        
        this.comments$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuild.group({
            comment: [ '', Validators.maxLength(300)]
        });

    }

    save(){
        const comment = this.commentForm.get('comment').value as string;
        this.comments$ = this.photoService.addComment(this.photoId, comment)
        .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
        .pipe(tap(() => {
            this.commentForm.reset();
        }))
        
    }

}