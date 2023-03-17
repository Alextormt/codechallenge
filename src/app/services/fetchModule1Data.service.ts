import { Injectable} from "@angular/core";;
import { HttpClient} from "@angular/common/http";
import { Module1Interface } from "../interfaces/organisms/module1.interface";
import { Module1Observable } from "../observables/module1Data.observable";

@Injectable({
      providedIn: "root",
})
export class FetchModule1Service {

      constructor(
            private http: HttpClient,
            private $module1Data: Module1Observable
      ) { }

      public fetch(): void {
            //set default preloading values
            this.$module1Data.set({
                  data: {},
                  isLoading: true,
                  isError: false
            })
            // simulate fecth call to API
            setTimeout(() => {
                  this.http
                        .get("assets/json/module1Mock.json")
                        .subscribe(
                              (res: Module1Interface) => {
                                    // set parsed response to observable     
                                    this.$module1Data.set({
                                          data: res,
                                          isLoading: false,
                                          isError: false
                                    })                  
                              },
                              (error) => {
                                    //set error response in case of one
                                    this.$module1Data.set({
                                          data: {},
                                          isLoading: false,
                                          isError: true
                                    })
                              }
                        );
            }, 1000);
      }
      
}