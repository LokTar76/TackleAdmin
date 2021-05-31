import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditRodComponent } from '../add-edit-rod/add-edit-rod.component';

export class RodData {
  brand?: string;
  series?: string;
  model?: string;
  rodType?: string;
  price?: number;
  lineWeight?: string;
  perating?: string;
  pieces?: string;
  length?: string;
  rodGuides?: string;
  castWeight?: string;
  rodGrips?: string;
  rodButtAssembly?: string;
  inventory?: number;
  itemTypeForShipping?: string;
  imagePath?: string;
  rodId?: number;


  constructor(){
    this.brand = this.brand ? this.brand : '';
    this.series = this.series ? this.series : '';
    this.model = this.model ? this.model : '';
    this.rodType = this.rodType ? this.rodType : '';
    this.price = this.price ? this.price : 0;
    this.lineWeight = this.lineWeight ? this.lineWeight : '';
    this.perating = this.perating ? this.perating : '';
    this.pieces = this.pieces ? this.pieces : '';
    this.length = this.length ? this.length : '';
    this.rodGuides = this.rodGuides ? this.rodGuides : '';
    this.castWeight = this.castWeight ? this.castWeight : '';
    this.rodGrips = this.rodGrips ? this.rodGrips : '';
    this.rodButtAssembly = this.rodButtAssembly ? this.rodButtAssembly : '';
    this.inventory = this.inventory ? this.inventory : 0;
    this.itemTypeForShipping = this.itemTypeForShipping ? this.itemTypeForShipping : '';
    this.imagePath = this.imagePath ? this.imagePath : '';
    this.rodId = this.rodId ? this.rodId : 0;
  }
}

@Component({
  selector: 'app-show-rod',
  templateUrl: './show-rod.component.html',
  styleUrls: ['./show-rod.component.css']
})
export class ShowRodComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: SharedService, public dialog: MatDialog) { }

  public displayedColumns = ['brand', 'series', 'model', 'rodType', 'price', 'lineWeight', 'perating', 'pieces', 'length', 'rodGuides', 'castWeight', 'rodGrips', 'rodButtAssembly', 'inventory', 'itemTypeForShipping', 'imagePath', 'rodId','Options'];
  public dataSource = new MatTableDataSource<RodData>();
  rod: RodData;

  ngOnInit(): void {
    this.refreshRodList();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public refreshRodList = () => {
    this.service.getRodList().subscribe(res => {
      this.dataSource.data = res as RodData[];
    })
  }

  addClick() {
    this.rod = new RodData();
    const dialogRef = this.dialog.open(AddEditRodComponent, {
      data: { rod: this.rod }
    });
  }

  editClick(item: RodData) {
    this.rod = item;
    const dialogRef = this.dialog.open(AddEditRodComponent, {
      data: { rod: this.rod }
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

  // Delete rod function
  deleteClick(element: RodData) {
    if (confirm('Are you sure??')) {
      this.service.deleteRod(element.rodId).subscribe(data => {
        this.refreshRodList();
      })
    }
  }
}
