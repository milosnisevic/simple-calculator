(function() {
  const display = document.getElementById('display');
  const maxLenght = 15;
  let isResultDisplayed = false;
  
  document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
      appendNumber(button.textContent);
    });
  });
  
  document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
      appendOperator(button.textContent);
    });
  });
  
  function appendNumber(number) {
    if (display.value === '0' || isResultDisplayed) {
      display.value = number;
      isResultDisplayed = false;
    } else if (display.value.length < maxLenght) {
      display.value += number;
    }
  }
  
  function appendOperator(operator) {
    const lastChar = display.value[display.value.length - 1];
    
    if (['+', '-', '*', '/'].includes(lastChar)) {
      display.value = display.value.slice(0, -1) + operator;
    } else if (display.value.length < maxLenght) {
      display.value += operator;
    }
    isResultDisplayed = false;
  }
  
  document.querySelector('.clear').addEventListener('click', () => {
    display.value = '0';
    isResultDisplayed = false;
  });
  
  document.querySelector('.delete').addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
      display.value = '0';
    }
    isResultDisplayed = false;
  });
  
  document.querySelector('.equal').addEventListener('click', () => {
    try {
      const result = eval(display.value);
      if (result === Infinity || isNaN(result)) {
        throw new Error('Invalid Calculation');
      }
      display.value = result;
      isResultDisplayed = true;
    } catch (error) {
      display.value = 'Error';
      isResultDisplayed = true;
    }
  });
})();