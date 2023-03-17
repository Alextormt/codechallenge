import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ThemeInterface } from "../interfaces/config/theme.interface";


@Injectable({
  providedIn: "root",
})
export class ThemeObservable {
  private ThemeObservable = new BehaviorSubject < ThemeInterface | undefined | null >(null);
  private $ThemeObservable = this.ThemeObservable.asObservable();

  public set(data: ThemeInterface): void {
    this.ThemeObservable.next(data);
  }

  public get(): Observable< ThemeInterface  | undefined | null> {
    return this.$ThemeObservable;
  }
}

