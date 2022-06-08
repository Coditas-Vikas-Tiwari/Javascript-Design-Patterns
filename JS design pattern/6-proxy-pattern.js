// proxy pattern allows us to add an object(proxy) that act as an placeholder for another object. you can control other object with your proxy, and you can add extra functionality to your proxy.
// first it checks that whether the value that user wants is present in the proxy object or not
// if not then only it calls the main api and return the value to user as well as it saves the value inside proxy object so whenever user ask for the same value again it return the stored value without calling main api.


function cryptoCurrencyAPI(){
    this.getValue = function(coin){
        console.log("calling external api......")
        switch(coin){
            case "Bitcoin":
                return "500";
            case "Litecoin":
                return "1000";
            case "Ethercoin":
                return "5040";
        }
    }
}

// const api = new cryptoCurrencyAPI();
// console.log(api.getValue("Bitcoin"));
// console.log(api.getValue("Litcoin"));
// console.log(api.getValue("Ethercoin"));

function cryptoCurrencyProxy(){
    this.api = new cryptoCurrencyAPI();
    this.cache = {};

    this.getValue = function(coin) {
        if(this.cache[coin] === null){
            this.cache[coin] = this.api.getValue(coin);
        }
        return this.cache[coin];
    }
}

const proxy = new cryptoCurrencyProxy();
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litcoin"));
console.log(proxy.getValue("Ethercoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litcoin"));
console.log(proxy.getValue("Ethercoin"));
console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Litcoin"));
console.log(proxy.getValue("Ethercoin"));