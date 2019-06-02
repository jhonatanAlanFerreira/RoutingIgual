import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  loading = true;

  constructor(
    private serversService: ServersService,
    private activate: ActivatedRoute) { }

  ngOnInit() {
    this.setServer();
    this.activate.params.subscribe(param => this.setServer(+param['id']));
  }

  setServer(id=1){
    this.loading = true;
    this.serversService.getServer(id).then(server => {
      this.server = <{id:number,name:string,status:string}>server;
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
      this.loading = false;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
