import { Component, OnInit, Input, Inject  } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RodData } from '../show-rod/show-rod.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-edit-rod',
  templateUrl: './add-edit-rod.component.html',
  styleUrls: ['./add-edit-rod.component.css']
})
export class AddEditRodComponent implements OnInit {

  constructor(private service: SharedService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AddEditRodComponent>) { }

  public rodForm: FormGroup;

  @Input() rod: RodData;

  ngOnInit(): void {
    this.rod = this.data.rod;
    this.rodForm = new FormGroup({
      brand: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      series: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      model: new FormControl('', [Validators.required, Validators.maxLength(80)]),
      rodType: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      lineWeight: new FormControl('', [Validators.maxLength(20)]),
      perating: new FormControl('', [Validators.maxLength(20)]),
      pieces: new FormControl('', [Validators.maxLength(20)]),
      length: new FormControl('', [Validators.maxLength(20)]),
      rodGuides: new FormControl('', [Validators.maxLength(80)]),
      castWeight: new FormControl('', [Validators.maxLength(20)]),
      rodGrips: new FormControl('', [Validators.maxLength(20)]),
      rodButtAssembly: new FormControl('', [Validators.maxLength(40)]),
      inventory: new FormControl('', [Validators.required, Validators.min(0)]),
      itemTypeForShipping: new FormControl('', [Validators.maxLength(40)]),
      imagePath: new FormControl('', [Validators.maxLength(150)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.rodForm.controls[controlName].hasError(errorName);
  }

  addRod() {
    this.service.addRod(this.rod).subscribe(res => {
      this.dialogRef.close();
    });
  }

  updateRod() {
    this.service.updateRod(this.rod, this.rod.rodId).subscribe((res: RodData) => {
      this.dialogRef.close();
    });
  }


}
