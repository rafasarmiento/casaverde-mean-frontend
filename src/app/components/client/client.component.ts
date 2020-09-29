import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { Modal, FormSelect, Tabs, FloatingActionButton, CharacterCounter, Datepicker } from "materialize-css";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(public clientService: ClientService) { }



  ngOnInit(): void {
    console.log("cargando clientes...");
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

  initMaterialize() {
    console.log("inicializando materialize en client component...");
    let modales = document.querySelectorAll('.modal');
    let combos = document.querySelectorAll('.select');
    Modal.init(modales);
    FormSelect.init(combos);

    var secciones = document.querySelectorAll('.tabs');
    Tabs.init(secciones);

    var botonFlotante = document.querySelector('.fixed-action-btn');
    FloatingActionButton.init(botonFlotante, {
      hoverEnabled: false
    });

    var textuales = document.querySelectorAll('input[type="text"], textarea');
    CharacterCounter.init(textuales,);

    var camposFecha = document.querySelectorAll('.datepicker');
    Datepicker.init(camposFecha,
      {
        autoClose: true,
        format: "dd/mm/yyyy"
      });
  }

}
