import "./styles.css";
import { fromEvent } from "rxjs";
import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

var button = document.getElementById("fetch");
fromEvent("click", button);
const source$ = Observable.create(function(subscribe) {
  subscribe.next(1);
  subscribe.next(2);
  subscribe.next(3);
});

source$.subscribe({
  next(val) {
    console.log(val);
  },
  error(e) {
    console.log(e);
  },
  complete() {
    console.log("completed");
  }
});

const source1$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete("the execution completed");
});

source1$.subscribe({
  next(val) {
    console.log(val);
  },
  error(e) {
    console.log(e);
  },
  complete() {
    console.log("completed");
  }
});

//cold  observable vs Hot  observale
//cold obsevable the producer  is  produced inside the Observable
console.log("--------Cold Observable-----Produces different value");
const cold$ = Observable.create(observer => {
  observer.next(Math.random());
});

//produces the same  value
cold$.subscribe(console.log);
cold$.subscribe(console.log);
cold$.subscribe(console.log);

//Hot  Observable
console.log("---------Hot Observable-----produces the same value");
const date = Math.random();
const Hot$ = Observable.create(observer => {
  observer.next(date);
});
Hot$.subscribe(console.log);
Hot$.subscribe(console.log);
Hot$.subscribe(console.log);
