import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComboComponent } from '../add-edit-combo/add-edit-combo.component';
import { EventEmitterService } from 'src/app/event-emitter.service';

export class ComboData {
  brand?: string;
  price?: number;
  type?: string;
  inventory?: number;
  itemTypeForShipping?: string;
  imagePath?: string;
  reel?: string;
  rod?: string;
  comboId?: number;

  constructor() {
    this.brand = this.brand ? this.brand : '';
    this.price = this.price ? this.price : 0;
    this.type = this.type ? this.type : '';
    this.inventory = this.inventory ? this.inventory : 0;
    this.itemTypeForShipping = this.itemTypeForShipping ? this.itemTypeForShipping : '';
    this.imagePath = this.imagePath ? this.imagePath : '';
    this.reel = this.reel ? this.reel : '';
    this.rod = this.rod ? this.rod : '';
    this.comboId = this.comboId ? this.comboId : 0;
  }
}

@Component({
  selector: 'app-show-combo',
  templateUrl: './show-combo.component.html',
  styleUrls: ['./show-combo.component.css']
})
export class ShowComboComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: SharedService, public dialog: MatDialog, private eventEmitterService: EventEmitterService) { }

  public displayedColumns = ['brand', 'price', 'type', 'inventory', 'itemTypeForShipping', 'imagePath', 'reel', 'rod', 'comboId', 'Options'];
  public dataSource = new MatTableDataSource<ComboData>();
  combo: ComboData;

  ngOnInit(): void {
    this.refreshComboList();
    if (this.eventEmitterService.refreshCombo == undefined) {
      this.eventEmitterService.refreshCombo = this.eventEmitterService.invokeRefreshComboList.subscribe(() => {
        this.refreshComboList();
      });
    }
  }

  ngAfterViewInit(): void{
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public refreshComboList = () => {
    this.service.getComboList().subscribe(res => {
      this.dataSource.data = res as ComboData[];
    })
  }

  addClick() {
    this.combo = new ComboData();
    const dialogRef = this.dialog.open(AddEditComboComponent, {
      data: { combo: this.combo }
    });
  }

  editClick(item: ComboData) {
    this.combo = item;
    const dialogRef = this.dialog.open(AddEditComboComponent, {
      data: { combo: this.combo }
    });
  }

  // Filter function
  public doFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Delete combo function
  deleteClick(element: ComboData) {
    if (confirm('Are you sure??')) {
      this.service.deleteCombo(element.comboId).subscribe(data => {
        this.refreshComboList();      // Refresh combo list after delete
      })
    }
  }

}
