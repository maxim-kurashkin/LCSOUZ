/**
 * Init function.
 */

//Расчеты
let typeOfTransport, calcInputs, calcRanges, resultsEveryMounth, resultsSum, resultsEcoNds, resultsZatrat, resultsEcon, resultTotal, resultUdorozh,typeOfTransportFactor, vehicleIco, activeElement = 0;

function init() {
    typeOfTransport = document.querySelectorAll('.calculator__descr');
    calcInputs = document.querySelectorAll(`input[type="number"]`);
    calcRanges = document.querySelectorAll(`input[type="range"]`);
    resultsEveryMounth = document.querySelector('.result__subheader').querySelector('span');
    resultsSum = document.querySelector('.result__sum').querySelector('span');
    resultsEcoNds = document.querySelector('.result__udor').querySelector('span');
    resultsZatrat = document.querySelector('.result__udor__zatrat').querySelector('span');
    resultsEcon = document.querySelector('.result__udor__otnoshenie').querySelector('span');
    resultUdorozh = document.querySelector('.result__udor__udorozh').querySelector('span');
    resultTotal = document.querySelector('.result__summa').querySelector('span');
    vehicleIco = document.querySelectorAll('span.icon');

    setEventsToRanges();
    setActiveValue(activeElement);
}

function setEventsToRanges() {
    calcRanges.forEach((item, key) => {
        item.addEventListener('input', (event) => {
            calcHandler(event, key);
        });
    });

    calcInputs.forEach((item, key) => {
        item.addEventListener('input', (event) => {
            calcHandler(event, key);
        });
    });

    typeOfTransport.forEach(item => {
        item.addEventListener('click', (event) => {
            calcHandler(event);
        });
    });

    vehicleIco.forEach(item => {
        item.addEventListener('click', (event) => {
            calcHandler(event);
        });
    });
}


function setActiveValue(elementValue) {
    typeOfTransport[elementValue].classList.add('calculator__descr__active');
    vehicleIco[elementValue].classList.add('calculator__descr__active');
}

function calcHandler(event, key) {
    const value = event.target.value,
            type = event.target.type;

    if (event.target.classList.contains('calculator__descr') || event.target.classList.contains('icon')) {
        typeOfTransport.forEach(item => {
            item.classList.remove('calculator__descr__active');
        });
        vehicleIco.forEach(item => {
            item.classList.remove('calculator__descr__active');
        });

        if (event.target.classList.contains('calculator__descr')) {
            activeElement = [].indexOf.call(typeOfTransport, event.target);
        } else {
            activeElement = [].indexOf.call(vehicleIco, event.target);
        }

        setActiveValue(activeElement);
    }
    else {
        switch (type) {
            case 'number':
                calcRanges[key].value = value;
                break;
            case 'range':
                calcInputs[key].value = value;
                break;
        }
    }

    calcResults();
}

function calcResults() {
    const [priceOfProperty, initialFee,  contractTerm] = Array.from(calcInputs);
    let factor = null, typeOfTransportFactor, resultText, priceValue, feeValue, termValue, resultsEveryMounthText, resultsEcoNdsFormula, resultsZatratFormula, resultsEconFormula, resultTotalFormula, resultUdorozhFormula;

    priceValue = parseInt(priceOfProperty.value);
    feeValue = parseInt(initialFee.value);
    termValue = parseInt(contractTerm.value);

    if(priceValue < 300000 || priceValue > 100000000){
        alert('Ошибка! Введите число до 100 000 000!');
        document.location.reload();
    } 

    if(feeValue < 5 || feeValue > 45) {
        alert('Ошибка! Введите число от 5 до 45!');
        document.location.reload();
    } 

    if(termValue < 12 || termValue > 60){
        alert('Ошибка! Введите число от 12 до 60!');
        document.location.reload();
    } 




    switch (activeElement) {
        case 0: //Легковой
            // 12 Месяцев
            if (feeValue <= 5 && termValue <= 12) {
                typeOfTransportFactor = 0.0951;
            } else if (feeValue > 5 && feeValue <= 10 && termValue <= 12) {
                typeOfTransportFactor = 0.0869;
            } 
            else if (feeValue > 10 && feeValue <= 15 && termValue <= 12) {
                typeOfTransportFactor = 0.0822;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue <= 12) {
                typeOfTransportFactor = 0.0710;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue <= 12) {
                typeOfTransportFactor = 0.0668;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue <= 12) {
                typeOfTransportFactor = 0.0604;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue <= 12) {
                typeOfTransportFactor = 0.0544;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue <= 12) {
                typeOfTransportFactor = 0.0496;
            } 
            else if (feeValue > 40 && feeValue <= 45 && termValue <= 12) {
                typeOfTransportFactor = 0.0461;
            } 
            else if (feeValue > 45 && feeValue <= 50 && termValue <= 12) {
                typeOfTransportFactor = 0.0427;
            }
            // 24 Месяцев
            else if (feeValue <= 5 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0967;
            } 
            else if (feeValue > 5 && feeValue <= 10 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0879;
            } 
            else if (feeValue > 10  && feeValue <= 15  && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0827;
            } 
            else if (feeValue > 15  && feeValue <= 20 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0716;
            }
            else if (feeValue > 20  && feeValue <= 25 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0673;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0620;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0545;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0502;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0473;
            }
            else if (feeValue > 45 && feeValue <= 50  && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0428;
            }
            // 36 Месяцев
            else if (feeValue <= 5 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0975;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0889;
            }
            else if (feeValue > 10 && feeValue <= 15  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0830;
            }
            else if (feeValue > 15 && feeValue <= 20  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0723;
            }
            else if (feeValue > 20 && feeValue <= 25  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0692;
            }
            else if (feeValue > 25 && feeValue <= 30  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0623;
            }
            else if (feeValue > 30 && feeValue <= 35  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0552;
            }
            else if (feeValue > 35 && feeValue <= 40  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0531;
            }
            else if (feeValue > 40 && feeValue <= 45  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0483;
            }
            else if (feeValue > 45 && feeValue <= 50  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0431;
            }
            // 48 Месяцев
            else if (feeValue <= 5 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0990;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0898;
            }
            else if (feeValue > 10 && feeValue <= 15  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0857;
            }
            else if (feeValue > 15 && feeValue <= 20  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0748;
            }
            else if (feeValue > 20 && feeValue <= 25  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0695;
            }
            else if (feeValue > 25 && feeValue <= 30  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0627;
            }
            else if (feeValue > 30 && feeValue <= 35  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0561;
            }
            else if (feeValue > 35 && feeValue <= 40  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0538;
            }
            else if (feeValue > 40 && feeValue <= 45  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0485;
            }
            else if (feeValue > 45 && feeValue <= 50  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0434;
            }
            // 60 Месяцев
            else if (feeValue <= 5 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.1062;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.1002;
            }
            else if (feeValue > 10 && feeValue <= 15  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.0920;
            }
            else if (feeValue > 15 && feeValue <= 20  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.0886;
            }
            else if (feeValue > 20 && feeValue <= 25  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.0797;
            }
            else if (feeValue > 25 && feeValue <= 30  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.0672;
            }
            else if (feeValue > 30 && feeValue <= 35  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.0614;
            }
            else if (feeValue > 35 && feeValue <= 40  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.0557;
            }
            else if (feeValue > 40 && feeValue <= 45  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.0499;
            }
            else if (feeValue > 45 && feeValue <= 50  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.0459;
            }
            break;
        case 1: //Коммерческий

            // 12 Месяцев
            if (feeValue <= 5 && termValue <= 12) {
                typeOfTransportFactor = 0.0962;
            } else if (feeValue > 5 && feeValue <= 10 && termValue <= 12) {
                typeOfTransportFactor = 0.0875;
            } 
            else if (feeValue > 10 && feeValue <= 15 && termValue <= 12) {
                typeOfTransportFactor = 0.0826;
            } 
            else if (feeValue > 15 && feeValue <= 20 && termValue <= 12) {
                typeOfTransportFactor = 0.0705;
            } 
            else if (feeValue > 20 && feeValue <= 25 && termValue <= 12) {
                typeOfTransportFactor = 0.0662;
            } 
            else if (feeValue > 25 && feeValue <= 30 && termValue <= 12) {
                typeOfTransportFactor = 0.0610;
            } 
            else if (feeValue > 30 && feeValue <= 35 && termValue <= 12) {
                typeOfTransportFactor = 0.0560;
            } 
            else if (feeValue > 35 && feeValue <= 40 && termValue <= 12) {
                typeOfTransportFactor = 0.0534;
            } 
            else if (feeValue > 40 && feeValue <= 45 && termValue <= 12) {
                typeOfTransportFactor = 0.0471;
            } 
            else if (feeValue > 45 && feeValue <= 50 && termValue <= 12) {
                typeOfTransportFactor = 0.0434;
            } 

            // 24 Месяцев
            else if (feeValue <= 5 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0974;
            } 
            else if (feeValue > 5 && feeValue <= 10 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0905;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0837;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0723;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0692;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0638;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0587;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0555;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0490;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0445;
            }
            // 36 Месяцев
            else if (feeValue <= 5 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0985;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0908;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0840;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0727;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0699;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0639;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0589;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0558;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0492;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0449;
            }

            // 48 Месяцев
            else if (feeValue <= 5 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0997;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0915;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0879;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0756;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0708;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0644;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0594;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0565;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0499;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0458;
            }

            // 60 Месяцев
            else if (feeValue <= 5 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.1081;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.1023;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0932;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0899;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0817;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0684;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0626;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0576;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0514;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0493;
            }
            break;

        case 2: //Грузовой

            // 12 Месяцев
            if (feeValue <= 5 && termValue <= 12) {
                typeOfTransportFactor = 0.0928;
            } else if (feeValue > 5 && feeValue <= 10 && termValue <= 12) {
                typeOfTransportFactor = 0.0880;
            } 
            else if (feeValue > 10 && feeValue <= 15 && termValue <= 12) {
                typeOfTransportFactor = 0.0828;
            } 
            else if (feeValue > 15 && feeValue <= 20 && termValue <= 12) {
                typeOfTransportFactor = 0.0699;
            } 
            else if (feeValue > 20 && feeValue <= 25 && termValue <= 12) {
                typeOfTransportFactor = 0.0657;
            } 
            else if (feeValue > 25 && feeValue <= 30 && termValue <= 12) {
                typeOfTransportFactor = 0.0615;
            } 
            else if (feeValue > 30 && feeValue <= 35 && termValue <= 12) {
                typeOfTransportFactor = 0.0566;
            } 
            else if (feeValue > 35 && feeValue <= 40 && termValue <= 12) {
                typeOfTransportFactor = 0.0539;
            } 
            else if (feeValue > 40 && feeValue <= 45 && termValue <= 12) {
                typeOfTransportFactor = 0.0482;
            } 
            else if (feeValue > 45 && feeValue <= 50 && termValue <= 12) {
                typeOfTransportFactor = 0.0438;
            } 

            // 24 Месяцев
            else if (feeValue <= 5 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0960;
            } 
            else if (feeValue > 5 && feeValue <= 10 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0885;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0830;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0723;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0686;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0632;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0575;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0549;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0485;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0440;
            }
            // 36 Месяцев
            else if (feeValue <= 5 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0980;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0894;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0835;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0725;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0697;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0636;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0583;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0552;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0487;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0441;
            }

            // 48 Месяцев
            else if (feeValue <= 5 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0995;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0902;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0865;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0752;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0704;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0639;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0586;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0557;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0492;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0451;
            }

            // 60 Месяцев
            else if (feeValue <= 5 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.1066;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.1006;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0928;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0890;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0801;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0673;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0618;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0561;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0503;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0469;
            }
            break;

        case 3: //Спецтехника
            
            // 12 Месяцев
            if (feeValue <= 5 && termValue <= 12) {
                typeOfTransportFactor = 0.0944;
            } else if (feeValue > 5 && feeValue <= 10 && termValue <= 12) {
                typeOfTransportFactor = 0.0892;
            } 
            else if (feeValue > 10 && feeValue <= 15 && termValue <= 12) {
                typeOfTransportFactor = 0.0833;
            } 
            else if (feeValue > 15 && feeValue <= 20 && termValue <= 12) {
                typeOfTransportFactor = 0.0703;
            } 
            else if (feeValue > 20 && feeValue <= 25 && termValue <= 12) {
                typeOfTransportFactor = 0.0661;
            } 
            else if (feeValue > 25 && feeValue <= 30 && termValue <= 12) {
                typeOfTransportFactor = 0.0613;
            } 
            else if (feeValue > 30 && feeValue <= 35 && termValue <= 12) {
                typeOfTransportFactor = 0.0564;
            } 
            else if (feeValue > 35 && feeValue <= 40 && termValue <= 12) {
                typeOfTransportFactor = 0.0533;
            } 
            else if (feeValue > 40 && feeValue <= 45 && termValue <= 12) {
                typeOfTransportFactor = 0.0477;
            } 
            else if (feeValue > 45 && feeValue <= 50 && termValue <= 12) {
                typeOfTransportFactor = 0.0436;
            } 

            // 24 Месяцев
            else if (feeValue <= 5 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0966;
            } 
            else if (feeValue > 5 && feeValue <= 10 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0898;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0835;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0726;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0689;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0635;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0581;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0552;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0488;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 12 && termValue <= 24) {
                typeOfTransportFactor = 0.0444;
            }
            // 36 Месяцев
            else if (feeValue <= 5 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0983;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 24  && termValue <= 36 ) {
                typeOfTransportFactor = 0.0900;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0836;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0726;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0696;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0638;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0586;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0556;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0490;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 24 && termValue <= 36) {
                typeOfTransportFactor = 0.0448;
            }

            // 48 Месяцев
            else if (feeValue <= 5 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0996;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 36  && termValue <= 48 ) {
                typeOfTransportFactor = 0.0910;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0872;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0754;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0706;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0642;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0591;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0561;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0496;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 36 && termValue <= 48) {
                typeOfTransportFactor = 0.0456;
            }

            // 60 Месяцев
            else if (feeValue <= 5 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.1074;
            } 
            else if (feeValue > 5 && feeValue <= 10  && termValue > 48  && termValue <= 60 ) {
                typeOfTransportFactor = 0.1015;
            }
            else if (feeValue > 10 && feeValue <= 15 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0930;
            }
            else if (feeValue > 15 && feeValue <= 20 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0896;
            }
            else if (feeValue > 20 && feeValue <= 25 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0810;
            }
            else if (feeValue > 25 && feeValue <= 30 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0681;
            }
            else if (feeValue > 30 && feeValue <= 35 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0622;
            }
            else if (feeValue > 35 && feeValue <= 40 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0572;
            }
            else if (feeValue > 40 && feeValue <= 45 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0510;
            }
            else if (feeValue > 45 && feeValue <= 50 && termValue > 48 && termValue <= 60) {
                typeOfTransportFactor = 0.0487;
            }
            break;
        }

    //Ежемесячный платеж
    resultsEveryMounthText = Math.round(((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)-priceValue*feeValue*0.01)/termValue);
    resultsEveryMounthText = resultsEveryMounthText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    resultsEveryMounth.innerText = resultsEveryMounthText;

    //Сумма лизинга
    resultText = Math.round(priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500);
    resultText = resultText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    resultsSum.innerText = resultText;

    //Аванс
    resultsEcoNdsFormula = Math.round(priceValue*feeValue/100);
    resultsEcoNdsFormula = resultsEcoNdsFormula.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    resultsEcoNds.innerText = resultsEcoNdsFormula;

    //Экономия по НДС
    // resultsEcoNdsFormula = Math.round((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)*20/120);
    // resultsEcoNdsFormula = resultsEcoNdsFormula.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    // resultsEcoNds.innerText = resultsEcoNdsFormula;
    
    //Затраты на приобретение предмета лизинга
    resultsZatratFormula = Math.round((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)-((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)*20/120)-(((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500))-((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)*20/120))*0.2);
    resultsZatratFormula = resultsZatratFormula.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    resultsZatrat.innerText = resultsZatratFormula;

    //Экономия от использования лизинга к стоимости предмета лизинга
    resultsEconFormula = Math.round(((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)-((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)*20/120)-(((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500))-((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)*20/120))*0.2)-priceValue);
    resultsEconFormula = resultsEconFormula.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    resultsEcon.innerText = resultsEconFormula;

    //Годовое удоражание
    resultUdorozhFormula = (((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)-1500-priceValue)/(priceValue)*100/termValue*12);
    resultUdorozhFormula = resultUdorozhFormula.toFixed(2);
    resultUdorozh.innerText = resultUdorozhFormula;
    
    //Суммарная выгода до
    resultTotalFormula = Math.round(((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)*20/120)+((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)-((priceValue+((priceValue*typeOfTransportFactor)*(termValue/12))+1500)*20/120))*0.2);
    resultTotalFormula = resultTotalFormula.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    resultTotal.innerText = resultTotalFormula;
    
}

document.addEventListener('DOMContentLoaded', init);