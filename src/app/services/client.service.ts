//considerado como una especie de modulo encargado de interactuar con la API para el manejo de la parte de los Clientes
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Client } from "../models/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  URL_API = "http://localhost:4000/apis/node/clients"

  clients: Client[];

  constructor(public http:HttpClient) { }

  getClients() {
    return this.http.get<Client[]>(this.URL_API);
}

}
