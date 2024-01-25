import { server } from './server.model';

export class ServersService {
  private servers: server[] = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online',
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline',
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline',
    },
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number): server {
    //console.log('id', +id);

    const server = this.servers.find((x) => x.id === +id);

    //console.log('getServer', server);
    return server ? server : { id: -1, name: '', status: '' };
  }

  updateServer(id: number, serverInfo: { name: string; status: string }) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
