import { Injectable } from '@angular/core';
import { WIDGETS } from './WidgetsMock';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WidgetApiService {
  checkedWidgets: any[] = WIDGETS;
  tobeDisplayedWidgets: any[] = [];
  constructor(private http: HttpClient) { }

  getCheckedWidgets(): Observable<any[]> {
    return of(this.checkedWidgets);
  }



  checkWidgets(widget){
    var index  = this.checkedWidgets.indexOf(widget)
    this.checkedWidgets[index].state = true;
  }

  uncheckWidgets(widget){
    var index  = this.checkedWidgets.indexOf(widget)
    this.checkedWidgets[index].state = false;
  }

}
