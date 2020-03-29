import "./styles.css";
import { fromEvent } from "rxjs";
import { Observable } from "rxjs";

var button = document.getElementById("fetch");
fromEvent("click", button);
const source$ = Observable.create(function(subscribe) {
  subscribe.next(1);
  subscribe.next(2);
  subscribe.next(3);

});

source$.subscribe({
    next(val) {console.log(val)},
    error(e) {console.log(e)},
    complete() {console.log("completed")}
})

const source1$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete("the execution completed")
});

source1$.subscribe({
    next(val) {console.log(val)},
    error(e) {console.log(e)},
    complete() {console.log("completed")}
})