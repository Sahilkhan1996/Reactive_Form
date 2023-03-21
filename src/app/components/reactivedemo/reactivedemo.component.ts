import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactivedemo',
  templateUrl: './reactivedemo.component.html',
  styleUrls: ['./reactivedemo.component.css']
})
export class ReactivedemoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
/**
 * Form group and Form control using high memory by creating new object everytime 
 */
  // public frmRegister = new FormGroup({
  //   Name: new FormControl(''),
  //   Age: new FormControl(0),
  //   frmAddress: new FormGroup({
  //     City: new FormControl(''),
  //     Pin: new FormControl('')
  //   })
  // })

  /**
   * Now using Form Builder to use less memory
   */
  constructor(private fb:FormBuilder){
  }

  public frmRegister=this.fb.group({
    Name:this.fb.control(''),
    Age:this.fb.control(0),
    frmAddress:this.fb.group({
      City:this.fb.control(''),
      Pin:this.fb.control('')
    })
  })

  get City() {
    return this.frmRegister.controls.frmAddress.controls.City;
  }

  get Pin() {
    return this.frmRegister.controls.frmAddress.controls.Pin;
  }

  public onSubmit(obj:any){
    alert(JSON.stringify(obj));
  }
public updateClicked(){
  this.frmRegister.patchValue({
    Age:26,
    frmAddress:{
      Pin:'441401'
    }
  })
}




}
