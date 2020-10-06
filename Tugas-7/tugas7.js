// soal 1 Release 0
class Animal {
    constructor(namaBinatang){
        this.name = namaBinatang;
        this.legs = 4;
        this.cold_blooded = false
    }
    get namaBinatang() {
        return this.name
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.namaBinatang) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// soal 1 release 1
class Ape extends Animal{
    constructor(namaBinatang){
        super(namaBinatang)
    }
    yell() {
        console.log("auoooo")
    }
}

class Frog extends Animal{
    constructor(namaBinatang){
        super(namaBinatang)
    }
    jump() {
        console.log("Hop Hop")
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

// soal 2
class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start(); 