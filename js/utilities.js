class DateModel {
  constructor () {
    // https://www.w3schools.com/js/js_date_methods.asp
    this.date = new Date;
  }

  currentDate () {
    const year = this.date.getFullYear();
    const mount = this.getCurrentMount();
    const day = this.getCurrentDay(); 
    // DD/MM/YYYY
    const formatDate = `${day}/${mount}/${year}`
    return formatDate;
  }

  getCurrentDay () {
    const currentDay = String(this.date.getDate());
    const formatDay = currentDay.padStart(2,"0");
    return formatDay;
  }

  getCurrentMount () {
    const currentMount = String(this.date.getMonth() + 1);
    const formatMount = currentMount.padStart(2,"0");
    return formatMount;
  }
}

export {DateModel}