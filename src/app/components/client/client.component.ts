import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { M } from "materialize-css";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public clientService: ClientService) { }



  ngOnInit(): void {
    console.log("inicializando materialize en client component...");
    let modales = document.querySelectorAll('.modal');
    let combos = document.querySelectorAll('.select');
    var instanciaModal = M.Modal.init(modales);
    let instanciaCombos = M.FormSelect.init(combos);

    var secciones = document.querySelectorAll('.tabs');
    let tabs = M.Tabs.init(secciones);

    var botonFlotante = document.querySelector('.fixed-action-btn');
    let botonFlotanteInst = M.FloatingActionButton.init(botonFlotante, {
      hoverEnabled: false
    });

    var textuales = document.querySelectorAll('input[type="text"], textarea');
    let contadores = M.CharacterCounter.init(textuales,);

    var camposFecha = document.querySelectorAll('.datepicker');
    let fechas = M.Datepicker.init(camposFecha,
      {
        autoClose: true,
        format: "dd/mm/yyyy"
      });
    console.log(this.getClients())
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(
      res => {
        this.clientService.clients = res;
      },
      err => {
        console.error(err);
      }
    )
  }

}
