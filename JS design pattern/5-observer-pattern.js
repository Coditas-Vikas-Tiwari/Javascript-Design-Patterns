//in observer pattern we can define a one to many relation from object to some obserever and when you send a signal from object, all observer get notified.
// one=> subject and many => observer
//observer can be object or function which watch the subject and wait for some signal from subject.
//this is something like event Listener.


function Subject() {
    this.observers = []
}

Subject.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
},
unsubscribe: function(fnToRemove){
    this.observers = this.observers.filter(fn => {
        if(fn != fnToRemove)
        return fn;
    })
},
fire: function() {
    this.observers.forEach(fn => {
        fn.call();
    })
}
}

const subject = new Subject();

function observer1(){
    console.log('observer1 firing');
}

function observer2(){
    console.log('oberver2 firing');
}

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.unsubscribe(observer1);
subject.fire();