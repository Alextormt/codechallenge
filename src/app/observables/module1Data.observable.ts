import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Module1Interface } from "../interfaces/organisms/module1.interface";

@Injectable({
  providedIn: "root",
})
export class Module1Observable {
  private Module1Observable = new BehaviorSubject<Module1ObservableInterface | null>(null);
  private $Module1Observable = this.Module1Observable.asObservable();

  public set(data: Module1ObservableInterface | null): void {
    this.Module1Observable.next(data);
  }

  public get(): Observable<Module1ObservableInterface | null> {
    return this.$Module1Observable;
  }
}

export interface Module1ObservableInterface {
  data?: Module1Interface; 
  isLoading?: boolean;
  isError?: boolean;
}