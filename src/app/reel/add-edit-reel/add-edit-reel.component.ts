import { Component, OnInit, Input, Inject } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReelData } from '../show-reel/show-reel.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-add-edit-reel',
  templateUrl: './add-edit-reel.component.html',
  styleUrls: ['./add-edit-reel.component.css']
})
export class AddEditReelComponent implements OnInit {
  public reelForm: FormGroup;

  constructor(private service: SharedService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddEditReelComponent>) { }

  @Input() reel: ReelData;

  ngOnInit(): void {
    this.reel = this.data.reel;
    this.reelForm = new FormGroup({
      brand: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      series: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      model: new FormControl('', [Validators.required, Validators.maxLength(80)]),
      reelType: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      dragPower: new FormControl('', [Validators.maxLength(20)]),
      gearRatio: new FormControl('', [Validators.maxLength(20)]),
      bearings: new FormControl('', [Validators.maxLength(30)]),
      reelWeight: new FormControl('', [Validators.maxLength(20)]),
      retrievePerCrank: new FormControl('', [Validators.maxLength(20)]),
      braidCapacity: new FormControl('', [Validators.maxLength(40)]),
      monoCapacity: new FormControl('', [Validators.maxLength(40)]),
      diameterCapacity: new FormControl('', [Validators.maxLength(40)]),
      itemTypeForShipping: new FormControl('', [Validators.maxLength(40)]),
      imagePath: new FormControl('', [Validators.maxLength(150)]),
      inventory: new FormControl('', [Validators.required, Validators.min(0)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.reelForm.controls[controlName].hasError(errorName);
  }

  addReel() {
    //var newReel = new ReelData();
    this.service.addReel(this.reel).subscribe(res => {
      this.dialogRef.close();
      //alert(JSON.stringify(res));
    })
  }

  updateReel() {
    this.service.updateReel(this.reel, this.reel.reelId).subscribe((res:ReelData) => {
      //alert(JSON.stringify(res));
      this.dialogRef.close();
    });
  }

}
