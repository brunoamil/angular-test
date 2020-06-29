import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Alert, AlertType } from "./alert";
import { Router, NavigationStart } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepAfter = false;
    
    constructor(router: Router){
        router.events.subscribe(event => {
            if(event instanceof NavigationStart) {
                if(this.keepAfter) {
                    this.keepAfter = false;
                } else {
                    this.clear();
                }
            }
        });
    }

    success(message: string, keepAfter: boolean = false) {
        this.alert(AlertType.SUCCESS, message, keepAfter);
    }
    warning(message: string, keepAfter: boolean = false) {
        this.alert(AlertType.WARNING, message, keepAfter);
    }
    danger(message: string, keepAfter: boolean = false) {
        this.alert(AlertType.DANGER, message, keepAfter);
    }
    info(message: string, keepAfter: boolean = false) {
        this.alert(AlertType.INFO, message, keepAfter);
    }

    private alert(alertType: AlertType, message: string, keepAfter: boolean) {
        this.keepAfter = keepAfter;
        this.alertSubject.next(new Alert(alertType, message));
    }

    getAlert(){
        return this.alertSubject.asObservable();
    }
    clear() {
        this.alertSubject.next(null);
    }
}