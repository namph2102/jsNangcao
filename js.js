const vnEline = {
  name: "Việt Nam Eline",
  iataCode: "VN",
  bookings(charCode, fullName) {
    return `I will booking ${this.name} with code ${this.iataCode + charCode} by ${fullName}`;
  }
}
const camEline={
  name: "Capuchia Eline",
  iataCode: "CP",
}
const book=vnEline.bookings;
console.log(book.apply(camEline,[125,"Phạm hoài Nam"]));