import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject, BehaviorSubject } from 'rxjs';
import { WidgetApiService } from '../../services/widget-api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  widgets: any[] = [];
  tobeDisplayedWidgets: any[] = [];
  name = "";
  constructor(private widgetService: WidgetApiService,private http: HttpClient) { }

  ngOnInit() {
    this.getTemperatures1();
  }


  getTemperatures1() {
    this.widgetService.getCheckedWidgets()
    .subscribe(checkedWidgets => {
      checkedWidgets.forEach(widget => {
        if(widget.state==true){
          this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+widget.city+'&APPID=4f4b2e0412021adcf05f743a51e3b51b')
          .subscribe(widget => {
              this.tobeDisplayedWidgets.push(widget);
          });
        }
        
      });
    });
    
  }

}
