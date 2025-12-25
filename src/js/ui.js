// ui.js - Инициализация интерфейса и обработка событий

import { convertNumber } from './converter.js';
import { generateStars } from './stars.js';

// Список всех поддерживаемых систем счисления
const bases = [
    {value: "089", text: "089 - Система Galavox"},
    {value: "2", text: "Binary - Двоичная (Base 2)"},
    {value: "3", text: "Ternary - Троичная (Base 3)"},
    {value: "4", text: "Quaternary - Четверичная (Base 4)"},
    {value: "5", text: "Quinary - Пятеричная (Base 5)"},
    {value: "6", text: "Senary - Шестеричная (Base 6)"},
    {value: "7", text: "Septenary - Семеричная (Base 7)"},
    {value: "8", text: "Octal - Восьмеричная (Base 8)"},
    {value: "9", text: "Nonary - Девятеричная (Base 9)"},
    {value: "10", text: "Decimal - Десятичная (Base 10)"},
    {value: "11", text: "Undecimal - Одиннадцатеричная (Base 11)"},
    {value: "12", text: "Duodecimal - Двенадцатеричная (Base 12)"},
    {value: "13", text: "Tridecimal - Тринадцатеричная (Base 13)"},
    {value: "14", text: "Tetradecimal - Четырнадцатеричная (Base 14)"},
    {value: "15", text: "Pentadecimal - Пятнадцатеричная (Base 15)"},
    {value: "16", text: "Hexadecimal - Шестнадцатеричная (Base 16)"},
    {value: "17", text: "Heptadecimal - Семнадцатеричная (Base 17)"},
    {value: "18", text: "Octodecimal - Восемнадцатеричная (Base 18)"},
    {value: "19", text: "Enneadecimal - Девятнадцатеричная (Base 19)"},
    {value: "20", text: "Vigesimal - Двадцатеричная (Base 20)"},
    {value: "21", text: "Unvigesimal - Двадцатиодноричная (Base 21)"},
    {value: "22", text: "Duovigesimal - Двадцатидвоичная (Base 22)"},
    {value: "23", text: "Trivigesimal - Двадцатитроичная (Base 23)"},
    {value: "24", text: "Tetravigesimal - Двадцатичетверичная (Base 24)"},
    {value: "25", text: "Pentavigesimal - Двадцатипятеричная (Base 25)"},
    {value: "26", text: "Hexavigesimal - Двадцатишестеричная (Base 26)"},
    {value: "27", text: "Heptavigesimal/Septemvigesimal - Base 27"},
    {value: "28", text: "Octovigesimal - Двадцативосьмеричная (Base 28)"},
    {value: "29", text: "Enneavigesimal - Двадцатидевятеричная (Base 29)"},
    {value: "30", text: "Trigesimal - Тридцатеричная (Base 30)"},
    {value: "31", text: "Untrigesimal - Тридцатиодноричная (Base 31)"},
    {value: "32", text: "Duotrigesimal - Тридцатидвоичная (Base 32)"},
    {value: "33", text: "Tritrigesimal - Тридцатитроичная (Base 33)"},
    {value: "34", text: "Tetratrigesimal - Тридцатичетверичная (Base 34)"},
    {value: "35", text: "Pentatrigesimal - Тридцатипятеричная (Base 35)"},
    {value: "36", text: "Hexatrigesimal - Тридцатишестеричная (Base 36)"},
    {value: "45", text: "Pentaquadragesimal - Сорокапятеричная (Base 45)"},
    {value: "52", text: "Duoquinquagesimal - Пятидесятидвоичная (Base 52)"},
    {value: "58", text: "Octoquinquagesimal - Пятидесятивосьмеричная (Base 58)"},
    {value: "60", text: "Sexagesimal - Шестидесятеричная (Base 60)"},
    {value: "62", text: "Duosexagesimal - Шестидесятидвоичная (Base 62)"},
    {value: "64", text: "Tetrasexagesimal - Шестидесятичетверичная (Base 64)"},
    {value: "85", text: "Pentaoctagesimal - Восьмидесятипятеричная (Base 85)"},
    {value: "91", text: "Unenneagesimal - Девяностоодноричная (Base 91)"},
    {value: "95", text: "Pentaenneagesimal - Девяностопятеричная (Base 95)"}
];

// Инициализация селектов
function initSelects() {
    const baseFromSelect = document.getElementById('baseFrom');
    const baseToSelect = document.getElementById('baseTo');

    bases.forEach(base => {
        const optionFrom = new Option(base.text, base.value);
        const optionTo = new Option(base.text, base.value);

        if (base.value === "10") optionFrom.selected = true;
        if (base.value === "089") optionTo.selected = true;

        baseFromSelect.add(optionFrom);
        baseToSelect.add(optionTo);
    });
}

// Функция конвертации с обновлением UI
function performConversion() {
    const inputStr = document.getElementById('inputNumber').value.trim();
    const fromBase = document.getElementById('baseFrom').value;
    const toBase = document.getElementById('baseTo').value;
    const resultEl = document.getElementById('result');
    const resultBox = document.getElementById('resultBox');

    if (!inputStr) {
        resultEl.textContent = '—';
        resultBox.classList.remove('result-active');
        return;
    }

    try {
        const result = convertNumber(inputStr, fromBase, toBase);
        resultEl.textContent = result || '0';
        resultBox.classList.add('result-active');
    } catch (e) {
        resultEl.textContent = '⚠ ' + e.message;
        resultBox.classList.remove('result-active');
    }
}

// Обмен системами
function swapBases() {
    const baseFromSelect = document.getElementById('baseFrom');
    const baseToSelect = document.getElementById('baseTo');
    const temp = baseFromSelect.value;
    baseFromSelect.value = baseToSelect.value;
    baseToSelect.value = temp;
    performConversion();
}

// Инициализация событий
function initEvents() {
    document.getElementById('swapBtn').addEventListener('click', swapBases);
    document.getElementById('inputNumber').addEventListener('input', performConversion);
    document.getElementById('baseFrom').addEventListener('change', performConversion);
    document.getElementById('baseTo').addEventListener('change', performConversion);
}

// Инициализация приложения
function initApp() {
    generateStars();
    initSelects();
    initEvents();
    performConversion(); // Первый расчёт
}

export { initApp };