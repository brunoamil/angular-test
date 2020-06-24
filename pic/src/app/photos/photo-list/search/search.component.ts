import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

     @Output() onTyping = new EventEmitter<string>();
     @Input() value: string = '';
    //tratando o filtro para nao buscar na api ao digitar
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.debounce
        .pipe(debounceTime(400))
        .subscribe(filter => this.onTyping.emit(filter));
      }
      
    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
    
}