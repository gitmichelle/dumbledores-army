import {Pipe, PipeTransform} from '@angular/core';
import {Member} from './member.model';

@Pipe({
  name: "sorting",
  pure: false
})


export class SortingPipe implements PipeTransform {
  transform(input: Member[], desiredSorting) {
    var output: Member[] = [];
    if(desiredSorting === "gryffindor") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].house === "Gryffindor") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSorting === "ravenclaw") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].house === "Ravenclaw") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSorting === "hufflepuff") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].house === "Hufflepuff") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSorting === "slytherin") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].house === "Slytherin") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
