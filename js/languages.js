console.log('Script languages.js cargado');

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  console.log('Cambiando idioma a:', language);
  
  try {
    const requestJson = await fetch(`js/${language}.json`);
    
    if (!requestJson.ok) {
      console.error('Error al cargar JSON:', requestJson.status);
      return;
    }
    
    const textResponse = await requestJson.text();
    const texts = JSON.parse(textResponse);
    console.log('JSON cargado correctamente');

    for (const textToChange of textsToChange) {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;
      
      if (texts[section] && texts[section][value]) {
        textToChange.innerHTML = texts[section][value];
      }
    }

    const catalogoLink = document.querySelector('.boton-catalogo');
    if (catalogoLink && texts.productos && texts.productos['catalogo-link']) {
      catalogoLink.href = texts.productos['catalogo-link'];
    }

    localStorage.setItem("selectedLanguage", language);
    activateFlag(language);
    
  } catch (error) {
    console.error('ERROR:', error);
  }
};

const loadLanguage = () => {
  const selectedLanguage = localStorage.getItem("selectedLanguage") || "es";
  console.log('Cargando idioma:', selectedLanguage);
  changeLanguage(selectedLanguage);
};

if (flagsElement) {
  flagsElement.addEventListener("click", (e) => {
    const language = e.target.parentElement.dataset.language;
    if (language) {
      changeLanguage(language);
    }
  });
}

const flags = document.querySelectorAll('.flags-ar, .flags-br, .flags-gb');

const activateFlag = (language) => {
  flags.forEach(f => f.classList.remove('active'));
  
  const flagToActivate = document.querySelector(
    language === 'es' ? '.flags-ar' :
    language === 'por' ? '.flags-br' :
    '.flags-gb'
  );
  
  if (flagToActivate) {
    flagToActivate.classList.add('active');
  }
};

loadLanguage();

flags.forEach(flag => {
  flag.addEventListener('click', () => {
    const language = flag.dataset.language;
    if (language) {
      changeLanguage(language);
    }
  });
});