import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class ValidatorService {
  constructor(private readonly store: Store) {}

  getMinValidator(minValue: number): ValidatorFn {
    return Validators.min(minValue);
  }
}
