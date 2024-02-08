class DateModel {
  constructor () {
    // https://www.w3schools.com/js/js_date_methods.asp
    this.date = new Date;
  }

  currentDate () {
    const year = this.date.getFullYear();
    const mount = this.date.getMonth() + 1;
    const day = this.date.getDate();
    // DD/MM/YYYY
    const formatDate = `${day}/${mount}/${year}`
    return formatDate;
  }
}

export {DateModel}