/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'paginator-demo',
  templateUrl: 'paginator-demo.html',
  styleUrls: ['paginator-demo.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PaginatorDemo {
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions: {[key: string]: string} = {5: '5', 10: '10', 25: '25', 100: 'All'};

  hidePageSize = false;
  showPageSizeOptions = true;
  showPageSizeOptionLabels = false;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  pageSizeOptionsString(): string {
    return JSON.stringify(this.pageSizeOptions);
  }

}
