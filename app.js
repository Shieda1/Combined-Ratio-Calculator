// https://www.omnicalculator.com/finance/combined-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const combinedratioRadio = document.getElementById('combinedratioRadio');
const claimlossRadio = document.getElementById('claimlossRadio');
const lossadjustmentsRadio = document.getElementById('lossadjustmentsRadio');
const premiumsRadio = document.getElementById('premiumsRadio');
const underwritingexpenseRadio = document.getElementById('underwritingexpenseRadio');

let combinedratio;
let claimloss = v1;
let lossadjustments = v2;
let premiums = v3;
let underwritingexpense = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

combinedratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Claim loss';
  variable2.textContent = 'Loss adjustments';
  variable3.textContent = 'Premiums';
  variable4.textContent = 'Underwriting expense';
  claimloss = v1;
  lossadjustments = v2;
  premiums = v3;
  underwritingexpense = v4;
  result.textContent = '';
});

claimlossRadio.addEventListener('click', function() {
  variable1.textContent = 'Combined ratio';
  variable2.textContent = 'Loss adjustments';
  variable3.textContent = 'Premiums';
  variable4.textContent = 'Underwriting expense';
  combinedratio = v1;
  lossadjustments = v2;
  premiums = v3;
  underwritingexpense = v4;
  result.textContent = '';
});

lossadjustmentsRadio.addEventListener('click', function() {
  variable1.textContent = 'Combined ratio';
  variable2.textContent = 'Claim loss';
  variable3.textContent = 'Premiums';
  variable4.textContent = 'Underwriting expense';
  combinedratio = v1;
  claimloss = v2;
  premiums = v3;
  underwritingexpense = v4;
  result.textContent = '';
});

premiumsRadio.addEventListener('click', function() {
  variable1.textContent = 'Combined ratio';
  variable2.textContent = 'Claim loss';
  variable3.textContent = 'Loss adjustments';
  variable4.textContent = 'Underwriting expense';
  combinedratio = v1;
  claimloss = v2;
  lossadjustments = v3;
  underwritingexpense = v4;
  result.textContent = '';
});

underwritingexpenseRadio.addEventListener('click', function() {
  variable1.textContent = 'Combined ratio';
  variable2.textContent = 'Claim loss';
  variable3.textContent = 'Loss adjustments';
  variable4.textContent = 'Premiums';
  combinedratio = v1;
  claimloss = v2;
  lossadjustments = v3;
  premiums = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(combinedratioRadio.checked)
    result.textContent = `Combined ratio = ${computecombinedratio().toFixed(2)}`;

  else if(claimlossRadio.checked)
    result.textContent = `Claim loss = ${computeclaimloss().toFixed(2)}`;

  else if(lossadjustmentsRadio.checked)
    result.textContent = `Loss adjustments = ${computelossadjustments().toFixed(2)}`;

  else if(premiumsRadio.checked)
    result.textContent = `Premiums = ${computepremiums().toFixed(2)}`;

  else if(underwritingexpenseRadio.checked)
    result.textContent = `Underwriting expense = ${computeunderwritingexpense().toFixed(2)}`;
})

// calculation

function computecombinedratio() {
  return ((Number(claimloss.value) + Number(lossadjustments.value) + Number(underwritingexpense.value)) / Number(premiums.value)) * 100;
}

function computeclaimloss() {
  return ((Number(combinedratio.value) / 100) * Number(premiums.value)) - Number(lossadjustments.value) - Number(underwritingexpense.value);
}

function computelossadjustments() {
  return ((Number(combinedratio.value) / 100) * Number(premiums.value)) - Number(claimloss.value) - Number(underwritingexpense.value);
}

function computepremiums() {
  return (Number(claimloss.value) + Number(lossadjustments.value) + Number(underwritingexpense.value)) / (Number(combinedratio.value) / 100);
}

function computeunderwritingexpense() {
  return ((Number(combinedratio.value) / 100) * Number(premiums.value)) - (Number(claimloss.value) + Number(lossadjustments.value));
}