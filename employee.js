

class employee{

    constructor(id,name,age,dept){
        this.id=id
        this.name=name
        this.age=age
        this.dept=dept

    }

    getemployee(){
        console.log(
            this.id,
            this.name,
            this.age,
            this.dept
        );
    }
}


var emp=new employee("1","abi","25","hr")
 
emp.getemployee()