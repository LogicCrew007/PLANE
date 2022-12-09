function book(title,Author,publish){
    this.title=title,
    this.Author=Author,
    this.publish=publish

    
}
book.prototype.getSummary=function (){

    return this.publish;

}

function magzine(title,Author,publish,month){
    book.call(this,title,Author,publish);
    this.month =month
}
magzine.prototype=Object.create(book.prototype);

const magzine1 =new magzine('Adventure','jhon doe',2020,'jan');
magzine.prototype.constructor=magzine;
console.log(magzine1);
