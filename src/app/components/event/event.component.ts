import { Component, OnInit } from '@angular/core';
import { Modal, FormSelect, Tabs, FloatingActionButton, CharacterCounter, Datepicker } from "materialize-css";
import { EventService } from "../../services/event.service";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(public eventService:EventService) { }

  ngOnInit(): void {
    console.log("cargando eventos...");
    this.getEvents();
  }

  initMaterialize() {
    console.log("inicializando materialize en client component...");
    let modales = document.querySelectorAll('.modal');
    let combos = document.querySelectorAll('.select');
    M.Modal.init(modales);
    M.FormSelect.init(combos);

    var secciones = document.querySelectorAll('.tabs');
    M.Tabs.init(secciones);

    var botonFlotante = document.querySelector('.fixed-action-btn');
    M.FloatingActionButton.init(botonFlotante, {
      hoverEnabled: false
    });

    var textuales = document.querySelectorAll('input[type="text"], textarea');
    M.CharacterCounter.init(textuales,);

    var camposFecha = document.querySelectorAll('.datepicker');
    M.Datepicker.init(camposFecha,
      {
        autoClose: true,
        format: "dd/mm/yyyy"
      });
  }

  getEvents() {
    this.eventService.getEvents().subscribe(
      res => {
        let events = this.eventService.events;
        // if (events.length==0) {

        // }
        events = res;
      },
      err => { console.error(err) }
    )
  }

  detalleEvento(eventId) {

  }

  pagarEvento(eventId) {

  }

  eliminarEvento(eventId) {

  }

  // sumarTotal() {
  //   let precio = precioEvento.value;
  //   let adicional = adicionalEvento.value;
  //   let total = totalEvento;

  //   precio = (precio == null || precio == "" || precio == undefined) ? 0 : precio;

  //   adicional = (adicional == null || adicional == "" || adicional == undefined) ? 0 : adicional;

  //   total.value = parseInt(precio) + parseInt(adicional);
  // }

}
