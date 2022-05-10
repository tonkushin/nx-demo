import { ApiService, IUserDto } from '@aaa/api';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'aaa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  users$: Observable<IUserDto[]> = of([]);

  constructor(private readonly apiService: ApiService) {
  }

  ngOnInit() {
    this.users$ = this.apiService.loadUsers$().pipe(startWith([]));
  }

}
