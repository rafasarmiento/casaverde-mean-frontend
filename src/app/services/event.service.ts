import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Event } from "../models/event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  URL_API = "http://localhost:4000/apis/node/events"
  events: Event[];

  constructor(public http: HttpClient) { }

  getEvents() {
    return this.http.get<Event[]>(this.URL_API);
  }
}
