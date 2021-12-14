import {
  Component,
  ViewChild,
  ContentChildren,
  OnInit,
  ChangeDetectorRef,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { DataTableColumnDirective } from '@swimlane/ngx-datatable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterContentInit {
  @ContentChildren(DataTableColumnDirective)
  columnDirectives: QueryList<DataTableColumnDirective>;

  @ViewChild('myTable', { static: true }) table: any;
  // to hold expanded row IDs
  expandedId = [];

  expanded: any = { id: 1, name: 'Dany', gender: 'Male', age: 30 };

  rows = [
    {
      id: 0,
      name: 'Austin',
      gender: 'Male',
      age: 20,
      prop: 'A',
      gruppen: [
        { gruppe: 'gA', menge: 42 },
        { gruppe: 'gB', menge: 2 },
      ],
    },
    {
      id: 1,
      name: 'Dany',
      gender: 'Male',
      age: 30,
      prop: 'B',
      gruppen: [
        { gruppe: '', menge: 0 },
        { gruppe: 'gB', menge: 24 },
      ],
    },
    { id: 2, name: 'Molly', gender: 'Female', age: 40, prop: 'C' },
  ];

  columns = '';

  meinecolumnsleer = [];

  meinecolumns = [
    {
      name: 'spalte',
    },
    {
      name: 'nocheine',
    },
  ];
  meinecolumnsstring = ['gA', 'gB'];

  isCheck: boolean = true;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterContentInit() {
    // contentChildren is set
    console.log(this.columnDirectives);
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  buttonClick() {
    this.meinecolumnsleer = this.meinecolumnsstring;
  }

  ngOnInit() {}
  ngAfterViewChecked() {
    if (this.table && this.table.rowDetail) {
      // this.table.rowDetail.expandAllRows();
      // this.cdRef.detectChanges();
    }
  }
}
