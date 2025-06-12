import { useRef } from "react";

class LruCache {
    head;
    tail;
    cache;
    capacity;
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = {};
        this.head = null;
        this.tail = null;
    }

    put(key,value) {
        if(key in this.cache && this.cache[key]) {
            this.cache[key].value = value;
            //move to front
            console.log("From Cache");
            this.moveToFront(key);
        } else {
            console.log("Addd",Object.keys(this.cache).length, this.capacity);
            if(Object.keys(this.cache).length >= this.capacity) {
                console.log("remove");
                this.removeLast();
            }
            this.addToFront(key, value);
        }
    }

    get(key) {
        console.log(Object.keys(this.cache));
        if(key in this.cache && this.cache[key]) {
            this.moveToFront(key);
            return this.cache[key].value;
        } else {
            return null;
       }
    }

    addToFront(key, value) {
        const newNode = {
            key,
            value,
            next:null
        }

        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.cache[key] = newNode;
    }

    moveToFront(key) {
        const curr = this.cache[key];
        if(curr == this.head.value) return;
        let node = this.head;
        let prev = null;
        while(node && node.key!=key) {
            prev = node;
            node = node.next;
        }
        if(node == this.tail) {
            this.tail = prev;
            prev.next = null;
        }
        if(prev) {
            prev.next= prev?.next?.next;
        }

        node.next = this.head;
        this.head = node;
    }


    removeLast() {
        if(!this.head) return;
        const lastKey = this.tail.key;
        delete this.cache[lastKey];
        if(this.head == this.tail) {
            this.head = this.tail = null;
        } else {
            let node = this.head;

            while(node && node.next!=this.tail) {
                node = node.next;
            }
            if(node) {
                node.next = null;
            }

        }
    }
}


const useLRU = (capacity) => {
    //using useRef as with every rerender if we dont use useRed we will get new instance of Lru cache
    const cacheRef = useRef(new LruCache(capacity));

    return {
        get:(key)=>{
            return cacheRef.current.get(key)
        },
        put:(key, value)=>cacheRef.current.put(key,value)
    }
}

export default useLRU;