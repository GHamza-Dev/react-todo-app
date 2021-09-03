class LocalStorage{
    
    constructor(name){
        this.name = name;
    }
 
    setData = (data = []) => {
        localStorage.setItem(this.name,JSON.stringify(data));
    }
 
    getData = () => {
        return JSON.parse(localStorage.getItem(this.name)) ?? [];
    }
}

export default LocalStorage;