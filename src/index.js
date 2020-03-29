import "./styles.css";
import {fromEvent} from 'rxjs'
import  { Observable }  from  'rxjs'

var  button =  document.getElementById('fetch')
fromEvent('click',button)

const source$ =Observable.create(function(observer){
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.complete("completeted")
})

source$.subscribe(
 console.log
)