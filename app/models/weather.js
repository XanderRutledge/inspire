export default class Weather {
  constructor(data) {
    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.celsuis = (this.kelvin - 273.15).toFixed(1)
    this.fahrenheit = ((this.kelvin * 1.8) - 459.67).toFixed(0)
  }

  get Template() {
    return /*html*/`
    <div onclick ="app.weatherController.change()">
  	<h2>${this.celsuis}° C</h2>
    <h4>${this.city}</h4></div>
    `
  }

  get otherTemplate() {
    return /*html*/`
    <div onclick ="app.weatherController.changeTwo()">
  	<h2>${this.fahrenheit}° F</h2>
    <h4>${this.city}</h4></div>
    `
  }


}