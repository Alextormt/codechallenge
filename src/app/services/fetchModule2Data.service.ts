import { Injectable} from "@angular/core";;
import { HttpClient} from "@angular/common/http";
import { Module2Observable } from "../observables/module2Data.observable";
import { Module2Interface } from "../interfaces/organisms/module2.interface";



@Injectable({
      providedIn: "root",
})
export class FetchModule2Service {

      constructor(
            private http: HttpClient,
            private $module2Data: Module2Observable
      ) { }

      public fetch(): void {
            //set default preloading values
            this.$module2Data.set({
                  data: {},
                  isLoading: true,
                  isError: false
            })
            // simulate fecth call to API
            setTimeout(() => {
                  this.http
                        .get("assets/json/module2Mock.json")
                        .subscribe(
                              (res: Module2Interface) => {                
                                    // set parsed response to observable     
                                    this.$module2Data.set({
                                          data: res,
                                          isLoading: false,
                                          isError: false
                                    })
                  
                              },
                              (error) => {
                                    //set error response in case of one
                                    this.$module2Data.set({
                                          data: {},
                                          isLoading: false,
                                          isError: true
                                    })
                              }
                        );
            }, 1000);
      }
}
      
