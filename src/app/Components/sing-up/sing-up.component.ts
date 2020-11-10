import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


import { UserService } from '../../Services/user.service'
@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  signUpForm: FormGroup //Permite indicarle a Angular que el formulario debe aplicar a las validaciones se que crearán.

  
  constructor(
    private formBuilder: FormBuilder,
    private UserService: UserService
    ) {
    this.validator()
   }  

  ngOnInit(): void {
  }
  validator(){
    this.signUpForm= this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      role:['User',Validators.required],
      birthDate:[''],
      age:[''],

    })
  }
 
  saveUser(){
    if(this.signUpForm.valid){
      this.UserService.createUser(this.signUpForm.value).subscribe(
        (userCreated)=>{
          console.log(userCreated)
          alert('Usuario creado Correctamente')
        },
        (error)=>{
          console.error('tuvimos un error ->',error)
        }
      )

    }else{
      alert('El formulario no es valido')
    }
  }
}
