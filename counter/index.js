class Counter {
    constructor() {
      this.count = 0;
      this.interval = null;
      this.incrementInterval = 1000; 
      this.status = false;
    }

    startIncrement() {
      this.interval = setInterval(() => {
        this.increment();
        this.updateDisplay();
      },1000);
      this.status = true;
    }

    stopIncrement() {
      clearInterval(this.interval);
      this.status = false;
    }

    increment() {
      this.count++;
      this.updateDisplay();
    }

    decrement() {
      this.count--;
      this.updateDisplay();
    }

    updateDisplay() {
      document.getElementById('count').textContent = this.count;
    }
  }

  const counter = new Counter();

  const button = document.getElementById('buttonS');
  button.addEventListener('click', () => {
    if (counter.status) {
      counter.stopIncrement();
      button.textContent = 'Start';
    } else {
      counter.startIncrement();
      button.textContent = 'Stop';
    }
  });

  const buttonInc = document.getElementById('buttonInc');
  buttonInc.addEventListener('click', () => {
    counter.increment();
    counter.stopIncrement();
    button.textContent = 'Start';
  });

  const buttonDec = document.getElementById('buttonDec');
  buttonDec.addEventListener('click', () => {
    counter.decrement();
    counter.stopIncrement();
    button.textContent = 'Start';
  });