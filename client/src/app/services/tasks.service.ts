import {Injectable} from '@angular/core';
import {WebRequestsService} from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private webRequestsService: WebRequestsService) {
  }

  createList(title: string): any {
    return this.webRequestsService.post('lists', {title});
  }

  getLists(): any {
    return this.webRequestsService.get('lists');
  }

  getTasks(listId): any {
    return this.webRequestsService.get(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string): any {
    return this.webRequestsService.post(`lists/${listId}/tasks `, {title});
  }
}
