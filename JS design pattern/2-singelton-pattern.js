
//basically use to limit number of instances of an object to 0 or 1

function Process(state) {
    this.state = state;
}

const singleton = (function() {
    function processManager() {
        this.numProcess = 0;
    }
    let pManager;
    function createProcessManager() {
        pManager = new processManager();
        return pManager;
    }
    return  {
        getProcessManager:()=> {
            if(!pManager)
            pManager = createProcessManager();
            return pManager;
        }
    }
})()

const processManager = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();

console.log(processManager === processManager2);

//output => true;