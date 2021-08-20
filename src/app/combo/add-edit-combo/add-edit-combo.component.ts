import { Component, OnInit, Input, Inject } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ComboData } from '../show-combo/show-combo.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitterService } from 'src/app/event-emitter.service';

@Component({
  selector: 'app-add-edit-combo',
  templateUrl: './add-edit-combo.component.html',
  styleUrls: ['./add-edit-combo.component.css']
})
export class AddEditComboComponent implements OnInit {

  constructor(private service: SharedService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddEditComboComponent>,
    private eventEmitterService: EventEmitterService) { }

  public comboForm: FormGroup;

  @Input() combo: ComboData;

  ngOnInit(): void {
    this.combo = this.data.combo;
    this.comboForm = new FormGroup({
      brand: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      type: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      inventory: new FormControl('', [Validators.required, Validators.min(0)]),
      itemTypeForShipping: new FormControl('', [Validators.maxLength(40)]),
      imagePath: new FormControl('', [Validators.maxLength(150)]),
      reel: new FormControl('', [Validators.required, Validators.maxLength(80)]),
      rod: new FormControl('', [Validators.required, Validators.maxLength(80)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.comboForm.controls[controlName].hasError(errorName);
  }

  refreshComboList() {
    this.eventEmitterService.onRefreshReelList();
  }

  addCombo() {
    this.service.addCombo(this.combo).subscribe(res => {
      this.dialogRef.close();
      this.refreshComboList();
    });
  }

  updateCombo() {
    this.service.updateCombo(this.combo, this.combo.comboId).subscribe((res: ComboData) => {
      this.dialogRef.close();
    });
  }
}
