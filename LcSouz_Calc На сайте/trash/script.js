window.addEventListener('DOMContentLoaded', () => {
  
  const menu = document.querySelector('.menu'),
  menuItem = document.querySelectorAll('.menu__item'),
  hamburger = document.querySelector('.hamburger'),
  linkpromo = document.querySelectorAll('.menu__link__close');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger__active');
      menu.classList.toggle('menu__active');
  });

  linkpromo.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.remove('hamburger__active');
          menu.classList.remove('menu__active');
      });
  });  


  //Движение ползунка и Input
  let inputField = document.querySelector('.rs-input'),
      inputRange = document.querySelector('.rs-range');

    function showSliderValue(event) {
      let value;
      if (event.target.classList.contains('rs-range')) {
        inputField.value = event.target.value;
        value = inputField.value;
      } else if (event.target.classList.contains('rs-input')) {
        inputRange.value = event.target.value;
        value = inputRange.value;
      }
      valueHandler(value);
    }

      inputRange.addEventListener("input", showSliderValue, false);
      inputField.addEventListener('input', showSliderValue, false);
  
    function valueHandler(value) {
      const convertedValue = parseInt(value);
      let className = '';
    
      if (convertedValue <= 999999) {
        className = 'rs-input__thousens';
      } else if (convertedValue >= 1000000 && convertedValue <= 9999999) {
        className = 'rs-input__million';
      } else if (convertedValue >= 10000000 && convertedValue <= 99999999) {
        className = 'rs-input__millions';
      } else if (convertedValue >= 100000000) {
        className = 'rs-input__millionss';
      }
      changeClass(className);
    }
    
    function changeClass(className) {
      inputField.classList = `rs-input ${className}`;
    }
  

    let inputFieldPer = document.querySelector('.rs-input-per'),
    inputRangePer = document.querySelector('.rs-range-per');
  
    function showSliderValuePer(event) {
      let value;
      if (event.target.classList.contains('rs-range-per')) {
        inputFieldPer.value = event.target.value;
        value = inputFieldPer.value;
      } else if (event.target.classList.contains('rs-input-per')) {
        inputRangePer.value = event.target.value;
        value = inputRangePer.value;
      }
      valueHandlerPer(value);
    }
    inputRangePer.addEventListener("input", showSliderValuePer, false);
    inputFieldPer.addEventListener('input', showSliderValuePer, false);

    function valueHandlerPer(value) {
      const convertedValuePer = parseInt(value);
      let classNamePer = '';
      if (convertedValuePer > 5) {
        classNamePer= 'rs-input-per__two';
      } 
      changeClassPer(classNamePer);
    }
    
    function changeClassPer(classNamePer) {
      inputFieldPer.classList = `rs-input-per ${classNamePer}`;
    }
});

