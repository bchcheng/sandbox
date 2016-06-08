export default class FlashMessage {
  constructor(message){
    this.message = message;
  }

  display(){
    alert(this.message);
  }
}
