const fs = require('fs');
const en = JSON.parse(fs.readFileSync('src/i18n/locales/en.json', 'utf8'));
const id = JSON.parse(fs.readFileSync('src/i18n/locales/id.json', 'utf8'));
const es = JSON.parse(fs.readFileSync('src/i18n/locales/es.json', 'utf8'));
const fr = JSON.parse(fs.readFileSync('src/i18n/locales/fr.json', 'utf8'));
const de = JSON.parse(fs.readFileSync('src/i18n/locales/de.json', 'utf8'));
const it = JSON.parse(fs.readFileSync('src/i18n/locales/it.json', 'utf8'));

let untranslated = [];

function checkTranslations(obj, path = '') {
  for (let key in obj) {
    const p = path ? `${path}.${key}` : key;
    if (typeof obj[key] === 'object') {
      checkTranslations(obj[key], p);
    } else {
      const getVal = (loc) => p.split('.').reduce((o, k) => (o || {})[k], loc);
      const enVal = obj[key];
      const idVal = getVal(id);
      const esVal = getVal(es);
      const frVal = getVal(fr);
      const deVal = getVal(de);
      const itVal = getVal(it);
      
      let missingIn = [];
      let sameAsEn = [];
      
      if (!idVal) missingIn.push('ID');
      else if (idVal === enVal && isNaN(enVal) && enVal.length > 5 && !['The Secret Karimunjawa', 'Cipaku', 'Birdsong', 'Tivoli'].includes(enVal)) sameAsEn.push('ID');
      
      if (!esVal) missingIn.push('ES');
      else if (esVal === enVal && isNaN(enVal) && enVal.length > 5 && !['The Secret Karimunjawa', 'Cipaku', 'Birdsong', 'Tivoli'].includes(enVal)) sameAsEn.push('ES');
      
      if (!frVal) missingIn.push('FR');
      else if (frVal === enVal && isNaN(enVal) && enVal.length > 5 && !['The Secret Karimunjawa', 'Cipaku', 'Birdsong', 'Tivoli'].includes(enVal)) sameAsEn.push('FR');

      if (!deVal) missingIn.push('DE');
      else if (deVal === enVal && isNaN(enVal) && enVal.length > 5 && !['The Secret Karimunjawa', 'Cipaku', 'Birdsong', 'Tivoli'].includes(enVal)) sameAsEn.push('DE');

      if (!itVal) missingIn.push('IT');
      else if (itVal === enVal && isNaN(enVal) && enVal.length > 5 && !['The Secret Karimunjawa', 'Cipaku', 'Birdsong', 'Tivoli'].includes(enVal)) sameAsEn.push('IT');
      
      if (missingIn.length > 0 || sameAsEn.length > 0) {
        if (!enVal.startsWith('http')) {
          untranslated.push({ key: p, enVal, missingIn, sameAsEn });
        }
      }
    }
  }
}

checkTranslations(en);
console.log(JSON.stringify(untranslated, null, 2));
