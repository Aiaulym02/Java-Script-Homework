// title (мәтін) – кітаптың атауы
// author (мәтін) – авторы
// pages (сан) – беттер саны
// isRead (логикалық(true/false)) – кітап оқылғанын білдіретін белгі
// readBook(): Консольге хабарлама шығарады:
// "Сіз [title] кітабын [author] жазған оқып жатырсыз."
// toggleReadStatus(): isRead қасиетінің мәнін керісінше өзгертеді және мынадай хабарлама шығарады:
// "Оқу күйі жаңартылды: [true/false]."

const librarry = {
  title: "Менің атым Қожа",
  author: "Бердібек Соқпақбаев",
  pages: 150,
  isRead: false,
  addBooks: function () {
    this.isRead = !this.isRead;
    return this.isRead;
  },
  addLibrarry: function () {
    return `Сіз ${this.author} авторының ${this.title} кітабын оқып жатырсыз!`;
  },
};
console.log(librarry.addLibrarry());
console.log(librarry.addBooks());
