import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Task} from '../../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TasksService, private route: ActivatedRoute, private router: Router) {
  }

  listId: string;

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params['listId'];
      }
    );
  }

  createTask(title: string): any {
    this.taskService.createTask(title, this.listId).subscribe((newTask: Task) => {
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

}
