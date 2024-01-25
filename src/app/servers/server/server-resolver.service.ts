import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { server } from '../server.model';
import { ServersService } from '../servers.service';

@Injectable({
  providedIn: 'root',
})
export class ServerResolverService implements Resolve<server> {
  constructor(private serversService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): server | Observable<server> | Promise<server> {
    return this.serversService.getServer(+route.params['id']);
  }
}
