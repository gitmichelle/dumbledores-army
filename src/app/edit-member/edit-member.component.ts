import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
  }

  beginDeletingMember(memberToDelete){
    if(confirm("Are you sure you want to delete this member from Dumbledore's Army?")){
      this.memberService.deleteMember(memberToDelete);
      // If the user clicks ok the method will invoke our existing MemberService, and request it run a method called deleteMember(). We pass in the Member the user has selected to delete as an argument.
    }

  }

}
