import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Module2Interface } from "../interfaces/organisms/module2.interface";

@Injectable({
  providedIn: "root",
})
export class Module2Observable {
  private Module2Observable = new BehaviorSubject<Module2ObservableInterface | null>(null);
  private $Module2Observable = this.Module2Observable.asObservable();

  public set(data: Module2ObservableInterface | null): void {
    this.Module2Observable.next(data);
  }

  public get(): Observable<Module2ObservableInterface | null> {
    return this.$Module2Observable;
  }
}

export interface Module2ObservableInterface {
  data?: Module2Interface; 
  isLoading?: boolean;
  isError?: boolean;
}