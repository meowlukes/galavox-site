// converter.js - Логика конвертации систем счисления

// Символы для высоких баз (printable ASCII от ! до ~)
const HIGH_DIGITS = (() => {
    let s = '';
    for (let i = 33; i <= 126; i++) s += String.fromCharCode(i);
    return s; // 94 символа
})();

function getDigitValue(char) {
    if (char >= '0' && char <= '9') return parseInt(char);
    if (char >= 'A' && char <= 'Z') return 10 + (char.charCodeAt(0) - 65);
    if (char >= 'a' && char <= 'z') return 36 + (char.charCodeAt(0) - 97);
    return HIGH_DIGITS.indexOf(char);
}

function getCharFromValue(value, base) {
    if (value < 10) return value.toString();
    if (base <= 36) return String.fromCharCode(65 + value - 10);
    if (base <= 62) return value < 36 ? String.fromCharCode(65 + value - 10) : String.fromCharCode(97 + value - 36);
    return HIGH_DIGITS.charAt(value);
}

// Конвертация в систему Galavox (089)
function toGalavox(num) {
    if (num === 0n) return '0';
    let result = '';
    while (num > 0n) {
        const remainder = num % 3n;
        result = (remainder === 0n ? '0' : remainder === 1n ? '8' : '9') + result;
        num = num / 3n;
    }
    return result;
}

// Конвертация из системы Galavox
function fromGalavox(str) {
    let num = 0n;
    for (const char of str) {
        let value;
        if (char === '0') value = 0n;
        else if (char === '8') value = 1n;
        else if (char === '9') value = 2n;
        else throw new Error('Недопустимая цифра в системе 089: ' + char);
        num = num * 3n + value;
    }
    return num;
}

// Основная функция конвертации
function convertNumber(inputStr, fromBase, toBase) {
    if (!inputStr) return null;

    let decimal;

    if (fromBase === '089') {
        decimal = fromGalavox(inputStr.toUpperCase());
    } else {
        const base = parseInt(fromBase);
        decimal = 0n;
        for (const char of inputStr.toUpperCase()) {
            const val = getDigitValue(char);
            if (val < 0 || val >= base) {
                throw new Error(`Недопустимый символ '${char}' для базы ${base}`);
            }
            decimal = decimal * BigInt(base) + BigInt(val);
        }
    }

    if (toBase === '089') {
        return toGalavox(decimal);
    } else {
        const base = parseInt(toBase);
        if (decimal === 0n) {
            return '0';
        } else {
            let result = '';
            let n = decimal;
            while (n > 0n) {
                const remainder = Number(n % BigInt(base));
                result = getCharFromValue(remainder, base) + result;
                n = n / BigInt(base);
            }
            return result;
        }
    }
}

export { convertNumber };