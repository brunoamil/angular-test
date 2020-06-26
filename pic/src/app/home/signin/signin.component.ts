import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { PlatFormDetectorService } from "src/app/core/plataform-detector/platform-detector.service";

@Component({
    templateUrl: './signin.component.html'
})
export class SigInComponent implements OnInit {

    loginForm: FormGroup;
    //focus para o input login
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatFormDetectorService
        ){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: [ '', Validators.required]
        });

        this.platformDetectorService.isPlatformBrowser() &&
                     this.userNameInput.nativeElement.focus();
    }

    login(){
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
        .authenticate(userName, password)
        .subscribe(
            () => this.router.navigate(['user', userName]),
            erro => {
                console.log(erro);
                this.loginForm.reset();
                this.platformDetectorService.isPlatformBrowser() &&
                     this.userNameInput.nativeElement.focus();
                alert("usuário inválido");
            }
        );
    }

    
}