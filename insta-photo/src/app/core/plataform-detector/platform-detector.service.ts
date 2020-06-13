import { Injectable, PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root'})

//platformID é um injecto token - injeta por um identificador - permite injetar algo especifico
export class PlatformDetectorService {
        constructor(@Inject(PLATFORM_ID) private platformId: string){

        }

        isPlatformBrowser(){
            return isPlatformBrowser(this.platformId);
        }
}