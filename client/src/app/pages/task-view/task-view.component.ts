import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../services/tasks.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Task} from '../../models/task.model';
import {List} from '../../models/list.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[];
  tasks: Task[];

  constructor(private tasksService: TasksService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.listId){
        this.tasksService.getTasks(params.listId).subscribe((tasks: Task[]) => {
          this.tasks = tasks;
        });
      }else {
        this.tasks = undefined;
      }
    });
    this.tasksService.getLists().subscribe((lists: List[]) => {
      this.lists = lists;
    });
  }

  onTaskClick(task: Task): any {
    this.tasksService.complete(task).subscribe(() => {
      console.log('Completed successfully!');
      task.completed = !task.completed;
    });
  }
}
