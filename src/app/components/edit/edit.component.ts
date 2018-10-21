import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { WidgetApiService } from '../../services/widget-api.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  checkedWidgets: any[];
  marked = false;

  constructor(private http: HttpClient, private widgetService: WidgetApiService) { }

  ngOnInit() {

    this.getCheckedWidgets();

    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
      destroy: true
    };
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.rerender();
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  getCheckedWidgets(): void {
    this.widgetService.getCheckedWidgets()
      .subscribe(checkedWidgets => this.checkedWidgets = checkedWidgets);
  }

  toggleVisibility(e, widget) {
    this.marked = e.target.checked;

    if (this.marked == true) {
      this.widgetService.checkWidgets(widget);
    }
    else {
      this.widgetService.uncheckWidgets(widget);
    }
  }

}
