import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-grab-by-pin',
  templateUrl: './grab-by-pin.component.html',
  styleUrls: ['./grab-by-pin.component.css']
})
export class GrabByPinComponent implements OnInit {
  grabByPin: FormGroup;

  constructor(private formBuilder:FormBuilder, private http: HttpClient) {
    this.grabByPin = this.formBuilder.group({
      pincode:['',[Validators.required,Validators.pattern('^[0-9]+$'), Validators.minLength(6)]],
      date:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.grabByPin.valid){
      this.http.get('http://localhost:8080/cowin/getByPin/pincode=400059&date=22-05-2021', this.grabByPin.value)
      .subscribe((response)=>{
        console.log('repsonse ',response);
      })
    }else{
      alert("Invalid Entries")
    }
  }

}
