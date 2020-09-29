import { Component, OnInit } from '@angular/core';
import { Modal, Tabs, FormSelect, CharacterCounter, Datepicker } from "materialize-css";
import Calendar from "js-year-calendar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  calendarHTML = document.querySelector('.calendar');
  tooltip = null;

  ngOnInit():void {
    this.initMaterialize();
    this.yearCalendar();
  }

  initMaterialize() {
    console.log("inicializando materialize en app component...");
    let modales = document.querySelectorAll('.modal');
    let combos = document.querySelectorAll('.select');
    Modal.init(modales);
    FormSelect.init(combos);

    var secciones = document.querySelectorAll('.tabs');
    Tabs.init(secciones);

    var textuales = document.querySelectorAll('input[type="text"], textarea');
    CharacterCounter.init(textuales,);

    var camposFecha = document.querySelectorAll('.datepicker');
    Datepicker.init(camposFecha,
      {
        autoClose: true,
        format: "dd/mm/yyyy"
      });
  }

  yearCalendar() {
    console.log("Inicializando Calendario...");
    var calendar = new Calendar('.calendar');
    calendar.setLanguage("es");
    calendar.setStyle("background");
    calendar.setEnableRangeSelection(false);
    calendar.setEnableContextMenu(false);
    //calendar.setMinDate(new Date());
    // calendar.mouseOnDay(this.calendarHTML, (e) => {
    //   e.ev
    // })

    /*this.calendarHTML.addEventListener('clickDay', (e) => {
      if (e.events.length > 0) {
        alert("Fecha ocupada");
      } else {
        let elem = document.getElementById('modaltest');
        let modal = M.Modal.getInstance(elem);
        modal.open();
        fechaEvento.value = moment(e.date).format('yyyy-MM-DD');
      }

    });

   this.calendarHTML.addEventListener('mouseOnDay', (e) => {
      if (e.events.length > 0) {
        var content = '';
        this.tooltip = null;
        this.tooltip = e.element;
        for (var i in e.events) {
          console.log("for events: " + JSON.stringify(e.events[i]));
          content += '<div class="">'
            + '<div class="event-name" style="color:' + e.events[i].color + '">' + e.events[i].name + '</div>'
            + '<div class="event-location">' + e.events[i].details + '</div>'
            + '</div>';
        }
        M.Tooltip.init(this.tooltip, {
          html: content
        });
        const instance = M.Tooltip.getInstance(this.tooltip);
        instance.open();
      }
   });

    this.calendarHTML.addEventListener('mouseOutDay', (e) => {
      if (e.events.length > 0) {
        if (this.tooltip !== null) {
          let instance = M.Tooltip.getInstance(this.tooltip);
          instance.destroy();
          this.tooltip = null;
          console.log("tooltip destruido");
        }

      }
  //   });*/
  }

  //#region calendario config



  //#endregion

}
