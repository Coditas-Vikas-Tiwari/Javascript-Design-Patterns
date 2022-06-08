//allows us to swap strategy when we need to. It makes our code more concise.

// here in this code we set our strategy by passing just the reference of particular function , and that's why the function can run without calling it.

function fedex() {
    this.calculate = package => {
        return 5;
    }
}

function ups() {
    this.calculate = package => {
        return 4;
    }
}

function usps() {
    this.calculate = package => {
        return 3;
    }
}

function shipping() {
    this.company = '';
    this.setStrategy = (company)=>{
        this.company = company;
    }
    this.calculate = package=> {
        return this.company.calculate(package);
    }
}

const fedex = new fedex();
const ups = new ups();
const usps = new usps();

const package = {from: 'Pune', to: 'Mumbai', weight: 4};
const shipping = new shipping();
shipping.setStrategy(fedex);
console.log("fedex:" + shipping.calculate(package));