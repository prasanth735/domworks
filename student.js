class student{

//  without constructor
    // setstudent(id,name,course){
    //     this.id=id
    //     this.name=name
    //     this.course=course
    // }

    constructor(id,name,course){
        this.id=id
        this.name=name
        this.course=course
    }


    getstudent(){
        console.log(this.id,this.name,this.course);
    }
} 


var obj=new student("1","hari","python")

// obj.setstudent("1","hari","python")
obj.getstudent()


