import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  loading = true;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.serversService.getServer(1,true).then(server => {
      this.loading = true;
      this.server = <{id:number,name:string,status:string}>server;
      this.loading = false;
    });

    this.activatedRoute.params.subscribe(param => {
      this.loading = true;
      this.serversService.getServer(+param['id'],true).then(server => {
        this.server = <{id:number,name:string,status:string}>server;
        this.loading = false;
      })})
  }

}
