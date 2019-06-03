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
  cidades:any[];
  show = 0;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.serversService.getServer(1,true).then(server => {
      this.loading = true;
      this.server = <{id:number,name:string,status:string}>server;
      this.loading = false;
      this.serversService.toarray();

      this.cidades = this.serversService.toarray();

      this.activatedRoute.queryParams.subscribe(query => this.show = query['showCidades'] == 'true'? 1:0);
    });

    this.activatedRoute.params.subscribe(param => {
      this.loading = true;
      this.serversService.getServer(+param['id'],true).then(server => {
        this.server = <{id:number,name:string,status:string}>server;
        this.loading = false;
      })})
  }

}
