import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  show = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private rota:Router) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  showCidades(){
    this.show = !this.show;
    this.rota.navigate([],{queryParams:{"showCidades":this.show}});
  }

}
