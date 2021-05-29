import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditReelComponent } from '../add-edit-reel/add-edit-reel.component';


export class ReelData {
  brand?: string;
  series?: string;
  model?: string;
  reelType?: string;
  price?: number;
  dragPower?: string;
  gearRatio?: string;
  bearings?: string;
  reelWeight?: string;
  retrievePerCrank?: string;
  braidCapacity?: string;
  monoCapacity?: string;
  diameterCapacity?: string;
  itemTypeForShipping?: string;
  imagePath?: string;
  inventory?: number;
  reelId?: number;


  constructor(){
    this.brand = this.brand ? this.brand : '';
    this.series = this.series ? this.series : '';
    this.model = this.model ? this.model : '';
    this.reelType = this.reelType ? this.reelType : '';
    this.price = this.price ? this.price : 0;
    this.dragPower = this.dragPower ? this.dragPower : '';
    this.gearRatio = this.gearRatio ? this.gearRatio : '';
    this.bearings = this.bearings ? this.bearings : '';
    this.reelWeight = this.reelWeight ? this.reelWeight : '';
    this.retrievePerCrank = this.retrievePerCrank ? this.retrievePerCrank : '';
    this.braidCapacity = this.braidCapacity ? this.braidCapacity : '';
    this.monoCapacity = this.monoCapacity ? this.monoCapacity : '';
    this.diameterCapacity = this.diameterCapacity ? this.diameterCapacity : '';
    this.itemTypeForShipping = this.itemTypeForShipping ? this.itemTypeForShipping : '';
    this.imagePath = this.imagePath ? this.imagePath : '';
    this.inventory = this.inventory ? this.inventory : 0;
    this.reelId = this.reelId ? this.reelId : 0;
  }
}

@Component({
  selector: 'app-show-reel',
  templateUrl: './show-reel.component.html',
  styleUrls: ['./show-reel.component.css']
})
export class ShowReelComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: SharedService, public dialog: MatDialog) { }

  public displayedColumns = ['brand', 'series', 'model', 'reelType', 'price', 'dragPower', 'gearRatio', 'bearings', 'reelWeight', 'retrievePerCrank', 'braidCapacity', 'monoCapacity', 'diameterCapacity', 'itemTypeForShipping', 'imagePath', 'inventory', 'reelId','Options'];
  public dataSource = new MatTableDataSource<ReelData>();

  reel: ReelData;
  ngOnInit(): void {
    this.refreshReelList();
  }

  addClick() {
    this.reel = new ReelData();
    const dialogRef = this.dialog.open(AddEditReelComponent, {
      data: {reel: this.reel}
    });
  }

  editClick(item: ReelData) {

    this.reel = item;
    const dialogRef = this.dialog.open(AddEditReelComponent, {
      data: {reel: this.reel}
    });
  }



  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public refreshReelList = () => {
    this.service.getReelList().subscribe(res => {
      this.dataSource.data = res as ReelData[];
    })
  }

  // Filter function
  public doFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Delete reel function
  deleteClick(element: ReelData) {
    if (confirm('Are you sure??')) {
      this.service.deleteReel(element.reelId).subscribe(data => {
        this.refreshReelList();
      })
    }
  }
}
