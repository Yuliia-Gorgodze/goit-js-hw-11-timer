const refs = {
  day: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

let day = `Jul 17, 2021`;

class CountdownTimer {
  constructor(date, object) {
    this.date = new Date(date);
    this.refs = object;
  }
  count() {
    let t = setTime(this.date - Date.now());
    this.refs.day.textContent = t.days;
    this.refs.hours.textContent = t.hours;
    this.refs.mins.textContent = t.mins;
    this.refs.secs.textContent = t.secs;
  }
  start() {
    this.count();
    setInterval(() => {
      this.count();
    }, 1000);
  }
}
function setTime(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, mins, secs };
}
const timer = new CountdownTimer(day, refs);

timer.start();
