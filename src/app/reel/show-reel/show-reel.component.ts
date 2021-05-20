import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-reel',
  templateUrl: './show-reel.component.html',
  styleUrls: ['./show-reel.component.css']
})
export class ShowReelComponent implements OnInit {

  public displayedColumns = ['Brand', 'Series', 'Model', 'Reel_Type', 'Price', 'Drag_Power', 'Gear_Ratio', 'Bearings', 'Weight', 'Retrieve_Per_Crank', 'Braid_Capacity', 'Mono_Capacity', 'Diameter_Capacity', 'Item_Type_For_Shipping', 'Image_Path', 'Inventory', 'ID'];

  constructor(private service: SharedService) { }

  ReelList: any = [];

  ngOnInit(): void {
    this.refreshReelList();
  }

  refreshReelList() {
    this.service.getReelList().subscribe(data => {
      this.ReelList = data;
    });
  }
}
