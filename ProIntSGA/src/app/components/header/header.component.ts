import { Component,OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { HeaderService } from 'src/app/servicios/header.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usuario: Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(private headerService : HeaderService) {}

  ngOnInit(): void {
    this.getUser();
  }
  public getUser():void{
    this.headerService.getUser().subscribe({
      next: (response: Usuario) =>{
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
