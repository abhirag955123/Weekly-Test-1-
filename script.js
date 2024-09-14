
const passwordEl = document.getElementById('password');
const copyBtn = document.getElementById('copyBtn');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');


const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

function generatePassword() {
  let length = +lengthEl.value;
  let includeUppercase = uppercaseEl.checked;
  let includeLowercase = lowercaseEl.checked;
  let includeNumbers = numbersEl.checked;
  let includeSymbols = symbolsEl.checked;

  let charPool = '';
  if (includeUppercase) charPool += uppercaseChars;
  if (includeLowercase) charPool += lowercaseChars;
  if (includeNumbers) charPool += numberChars;
  if (includeSymbols) charPool += symbolChars;

  if (charPool === '') {
    alert('Please select at least one option.');
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += charPool[Math.floor(Math.random() * charPool.length)];
  }

  passwordEl.value = password;
}

function copyPassword() {
  const password = passwordEl.value;
  if (password === '') {
    alert('No password to copy!');
    return;
  }
  
  navigator.clipboard.writeText(password).then(() => {
    alert('Password copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}


generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
