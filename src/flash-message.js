export default class FlashMessage {
  constructor(message){
    this.message = message;
  }

  render(){
    //document.getElementById("main").innerHTML = this.message;
    console.log(this.message);

  }
}
