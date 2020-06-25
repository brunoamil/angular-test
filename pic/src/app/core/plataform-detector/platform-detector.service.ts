import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root'})
export class PlatFormDetectorService{

    constructor(@Inject(PLATFORM_ID) private platformId: string) {}

    isPlatformBrowser(){
        console.log(isPlatformBrowser(this.platformId));
        return isPlatformBrowser(this.platformId);
    }
}