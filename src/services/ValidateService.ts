import {Ref} from "vue";

export class ValidateService {

  public static reportValidity(...inputs: Array<Ref>): boolean {
    return inputs.reduce((result, input) => result = (input.value?.reportValidity() && result), true);
  }

}