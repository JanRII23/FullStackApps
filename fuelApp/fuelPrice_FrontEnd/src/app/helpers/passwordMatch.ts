import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function verifyPassword(
    matchTo: string, 
    reverse?: boolean
  ): ValidatorFn {
    return (password: AbstractControl): 
    ValidationErrors | null => {
      if (password.parent && reverse) {
        const c = (password.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!password.parent &&
        !!password.parent.value &&
        password.value === 
        (password.parent?.controls as any)[matchTo].value
        ? null
        : { passwordMismatchError: true };
    };
  }