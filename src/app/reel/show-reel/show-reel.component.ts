import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface ReelData {
  brand: string;
  series: string;
  model: string;
  reelType: string;
  price: number;
  dragPower: string;
  gearRatio: string;
  bearings: string;
  reelWeight: string;
  retrievePerCrank: string;
  braidCapacity: string;
  monoCapacity: string;
  diameterCapacity: string;
  itemTypeForShipping: string;
  imagePath: string;
  inventory: number;
  reelId: number;
}

@Component({
  selector: 'app-show-reel',
  templateUrl: './show-reel.component.html',
  styleUrls: ['./show-reel.component.css']
})
export class ShowReelComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['brand', 'series', 'model', 'reelType', 'price', 'dragPower', 'gearRatio', 'bearings', 'reelWeight', 'retrievePerCrank', 'braidCapacity', 'monoCapacity', 'diameterCapacity', 'itemTypeForShipping', 'imagePath', 'inventory', 'reelId','Options'];
  public dataSource = new MatTableDataSource<ReelData>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: SharedService) { }



  ngOnInit(): void {
    this.refreshReelList();
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
}
