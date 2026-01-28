// const flagsElement = document.getElementById("flags");
// const textsToChange = document.querySelectorAll("[data-section]");

// const changeLanguage = async (language) => {
//   const requestJson = await fetch(`js/${language}.json`, {
//     headers: {
//       'Accept': 'application/json; charset=utf-8'
//     }
//   });
  
//   // Obtener como texto primero para debuggear
//   const textResponse = await requestJson.text();
//   console.log('Raw response:', textResponse.substring(0, 200)); // Ver los primeros 200 caracteres
  
//   const texts = JSON.parse(textResponse);

//   // Cambiar todos los textos con data-section y data-value
//   for (const textToChange of textsToChange) {
//     const section = textToChange.dataset.section;
//     const value = textToChange.dataset.value;
//     textToChange.innerHTML = texts[section][value];
//   }

//   // ACTUALIZAR EL LINK DEL CATÁLOGO DINÁMICAMENTE
//   const catalogoLink = document.querySelector('.boton-catalogo');
//   if (catalogoLink && texts.productos && texts.productos['catalogo-link']) {
//     catalogoLink.href = texts.productos['catalogo-link'];
//     console.log('Catálogo link actualizado a:', texts.productos['catalogo-link']);
//   }

//   localStorage.setItem("selectedLanguage", language);
// };

// const loadLanguage = () => {
//   // Obtiene el idioma seleccionado almacenado en el almacenamiento local del navegador
//   const selectedLanguage = localStorage.getItem("selectedLanguage");

//   if (selectedLanguage) {
//     changeLanguage(selectedLanguage);
//   } else {
//     // Establece español como idioma predeterminado si no se ha seleccionado ninguno
//     changeLanguage("es");
//   }
// };

// flagsElement.addEventListener("click", (e) => {
//   changeLanguage(e.target.parentElement.dataset.language);
// });

// // Carga el idioma al cargar la página
// loadLanguage();

// // Selecciona todas las banderas
// const flags = document.querySelectorAll('.flags-ar, .flags-br, .flags-gb');

// // Función para activar la bandera correcta
// const activateFlag = (language) => {
//   flags.forEach(f => f.classList.remove('active'));
  
//   // Encuentra la bandera correspondiente al idioma
//   const flagToActivate = document.querySelector(
//     language === 'es' ? '.flags-ar' :
//     language === 'por' ? '.flags-br' :
//     '.flags-gb'
//   );
  
//   if (flagToActivate) {
//     flagToActivate.classList.add('active');
//   }
// };

// // Al cargar la página, activa la bandera del idioma guardado
// const savedLanguage = localStorage.getItem("selectedLanguage") || "es";
// activateFlag(savedLanguage);

// // Al hacer click en una bandera
// flags.forEach(flag => {
//   flag.addEventListener('click', () => {
//     const language = flag.dataset.language;
    
//     // Apaga todas las banderas
//     flags.forEach(f => f.classList.remove('active'));
    
//     // Enciende solo la clickeada
//     flag.classList.add('active');
    
//     // Ya no es necesario guardar aquí porque changeLanguage() lo hace
//   });
// });

console.log('🚀 Script languages.js cargado correctamente');

const flagsElement = document.getElementById("flags");
console.log('🎌 Flags element:', flagsElement);

const textsToChange = document.querySelectorAll("[data-section]");
console.log('📝 Elementos a traducir encontrados:', textsToChange.length);

const changeLanguage = async (language) => {
  console.log('🌍 Cambiando idioma a:', language);
  
  try {
    const requestJson = await fetch(`js/${language}.json`, {
      headers: {
        'Accept': 'application/json; charset=utf-8'
      }
    });
    
    console.log('📡 Respuesta del fetch:', requestJson.status);
    
    if (!requestJson.ok) {
      console.error('❌ Error al cargar el JSON:', requestJson.status);
      return;
    }
    
    // Obtener como texto primero para debuggear
    const textResponse = await requestJson.text();
    console.log('📄 Primeros 200 caracteres del JSON:', textResponse.substring(0, 200));
    
    const texts = JSON.parse(textResponse);
    console.log('✅ JSON parseado correctamente:', texts);

    // Cambiar todos los textos con data-section y data-value
    let cambiosRealizados = 0;
    for (const textToChange of textsToChange) {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;
      
      if (texts[section] && texts[section][value]) {
        textToChange.innerHTML = texts[section][value];
        cambiosRealizados++;
        console.log(`✏️ Cambiado [${section}][${value}]:`, texts[section][value].substring(0, 50));
      } else {
        console.warn(`⚠️ No encontrado: [${section}][${value}]`);
      }
    }
    
    console.log(`✅ Total de cambios realizados: ${cambiosRealizados}`);

    // ACTUALIZAR EL LINK DEL CATÁLOGO DINÁMICAMENTE
    const catalogoLink = document.querySelector('.boton-catalogo');
    if (catalogoLink && texts.productos && texts.productos['catalogo-link']) {
      catalogoLink.href = texts.productos['catalogo-link'];
      console.log('🔗 Catálogo link actualizado a:', texts.productos['catalogo-link']);
    }

    localStorage.setItem("selectedLanguage", language);
    console.log('💾 Idioma guardado en localStorage:', language);
    
  } catch (error) {
    console.error('❌ ERROR en changeLanguage:', error);
  }
};

const loadLanguage = () => {
  console.log('⚡ Cargando idioma inicial...');
  
  // Obtiene el idioma seleccionado almacenado en el almacenamiento local del navegador
  const selectedLanguage = localStorage.getItem("selectedLanguage");
  console.log('🗂️ Idioma en localStorage:', selectedLanguage);

  if (selectedLanguage) {
    changeLanguage(selectedLanguage);
  } else {
    // Establece español como idioma predeterminado si no se ha seleccionado ninguno
    console.log('🇦🇷 Cargando idioma por defecto: español');
    changeLanguage("es");
  }
};

if (flagsElement) {
  flagsElement.addEventListener("click", (e) => {
    console.log('🖱️ Click en flags, target:', e.target);
    const language = e.target.parentElement.dataset.language;
    console.log('🌐 Idioma seleccionado:', language);
    
    if (language) {
      changeLanguage(language);
    } else {
      console.error('❌ No se pudo obtener el idioma del elemento clickeado');
    }
  });
} else {
  console.error('❌ No se encontró el elemento #flags');
}

// Carga el idioma al cargar la página
loadLanguage();

// Selecciona todas las banderas
const flags = document.querySelectorAll('.flags-ar, .flags-br, .flags-gb');
console.log('🎌 Banderas encontradas:', flags.length);

// Función para activar la bandera correcta
const activateFlag = (language) => {
  console.log('🏁 Activando bandera para idioma:', language);
  flags.forEach(f => f.classList.remove('active'));
  
  // Encuentra la bandera correspondiente al idioma
  const flagToActivate = document.querySelector(
    language === 'es' ? '.flags-ar' :
    language === 'por' ? '.flags-br' :
    '.flags-gb'
  );
  
  if (flagToActivate) {
    flagToActivate.classList.add('active');
    console.log('✅ Bandera activada');
  } else {
    console.error('❌ No se encontró la bandera para:', language);
  }
};

// Al cargar la página, activa la bandera del idioma guardado
const savedLanguage = localStorage.getItem("selectedLanguage") || "es";
activateFlag(savedLanguage);

// Al hacer click en una bandera
flags.forEach(flag => {
  flag.addEventListener('click', () => {
    const language = flag.dataset.language;
    console.log('🖱️ Click directo en bandera, idioma:', language);
    
    // Apaga todas las banderas
    flags.forEach(f => f.classList.remove('active'));
    
    // Enciende solo la clickeada
    flag.classList.add('active');
  });
});