import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  members: Member[] = [
   new Member("Harry Potter", "Gryffindor",
       "stag", 1),
   new Member("Ron Wealey", "Gryffindor",
       "Jack Russell Terrier", 2),
   new Member("Hermione Granger", "Gryffindor",
       "Otter", 3),
   new Member("Hannah Abbott", "Hufflepuff", "none", 4),
   new Member("Lavender Brown", "Gryffindor", "house rat", 5),
   new Member("Katie Bell", "Gryffindor", "cougar", 6)
 ];


}
