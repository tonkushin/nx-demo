import { IUserDto } from '@aaa/api';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  @Input() user: IUserDto = {
    id: '',
    name: '',
    avatar: '',
    createdAt: new Date()
  };
}
