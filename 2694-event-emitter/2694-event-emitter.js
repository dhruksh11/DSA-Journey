class EventEmitter {
    constructor(){
        this.event={};
    }
    
    subscribe(eventName, callback) {
        if(!this.event[eventName]){
            this.event[eventName] = []
        }
         this.event[eventName].push(callback)
        return {
            unsubscribe: () => {
         this.event[eventName] =  this.event[eventName].filter(cb=>cb!==callback)
         if( this.event[eventName].length===0){
            delete this.event[eventName];
         }
            }
        };
    }
    
    emit(eventName, args = []) {
        if(!this.event[eventName]){
            return []
        }
        return this.event[eventName].map(callback => callback(...args))
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */