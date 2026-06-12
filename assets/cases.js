/* ===================================================================
   El Partido de la Evidencia · Ki-CAB — Banco de contenido
   Estructura: 2 casos clínicos × 4 preguntas = 8 preguntas (CASOS, planas id 1-8).
   - CONTEXTO_CASO: carrusel de contexto por caso clínico (videos/imágenes).
   - Transiciones de medio tiempo entre el caso 1 y el caso 2.
   - PENALES: 5 preguntas fijas (no modificar el texto).
   Las preguntas 5-8 (Caso 2) están PENDIENTES de texto/VAR.
   =================================================================== */

/* Carrusel de contexto por caso clínico (el operador avanza los slides) */
const CONTEXTO_CASO = {
  1: [
    { type:"video", src:"caso1A.mp4" },
    { type:"img",   src:"caso1B.jpeg" }
  ],
  2: [
    { type:"video", src:"caso2A.mp4" },
    { type:"video", src:"caso2B.mp4" },
    { type:"img",   src:"caso-2C.png" },
    { type:"img",   src:"caso-2D.png" },
    { type:"img",   src:"caso-2E.png" },
    { type:"img",   src:"caso-2F.png" },
    { type:"img",   src:"caso-2G.png" }
  ]
};

/* Videos de medio tiempo (entre caso 1 y caso 2) */
const VIDEO_FINAL_1T  = "final-primer-tiempo.mp4";
const VIDEO_INICIO_2T = "inicio-segundo-tiempo.mp4";

/* ===== PREGUNTAS (8 planas) ===== */
const CASOS = [
  /* ---------- CASO CLÍNICO 1 ---------- */
  {
    id:1, caso_clinico:1, cortinilla:"cortinilla1.mp4",
    pregunta:"Hallazgo de Esofagitis B de los Ángeles y mucosa gástrica normal. Prueba rápida de ureasa y biopsia positiva para Helicobacter pylori. ¿cuál es la mejor justificación para elegir Tegoprazan como tratamiento de primera elección?",
    opciones:{
      A:"Produce inhibición irreversible de la bomba de protones, generando control sintomático después de varios días de administración continua.",
      B:"Porque logra una elevación rápida y sostenida del pH intragástrico desde la primera dosis, favoreciendo simultáneamente control sintomático, cicatrización de ERGE y la erradicación de H. pylori.",
      C:"Logra una supresión ácida impredecible, ya que es dependiente del horario de administración y del estado funcional de las bombas de protones.",
      D:"Porque ejerce actividad bactericida directa sobre H. pylori, incluso en cepas resistentes a claritromicina."
    },
    correcta:"B",
    mensaje_clave:"Tegoprazán: pH alto y sostenido desde la 1ª dosis → control de ERGE y apoyo en la erradicación de H. pylori.",
    var_media:[ {type:"img",src:"VAR-pregunta1A.png"}, {type:"img",src:"VAR-pregunta1B.png"} ],
    fuentes:[
      "Scarpignato C et al. Pharmacologic treatment of GERD: Where we are now, and where are we going? Ann N.Y. Acad Sci. 2020.",
      "Herszényi L et al. Pharmacological Approach to Gastric Acid Suppression: Past, Present, and Future. Dig Dis. 2020;38:104-111."
    ],
    validado:true
  },
  {
    id:2, caso_clinico:1, cortinilla:"cortinilla2.mp4",
    pregunta:"¿Cuánto tiempo se dará tratamiento para la esofagitis leve grado B a este paciente?",
    opciones:{
      A:"tegoprazan 50 mg cada 12 horas por 2 meses",
      B:"Tegoprazan 50 mg cada 24 horas por 2 meses y a demanda",
      C:"Tegoprazan 50 mg cada 24 horas por 2 meses y después de mantenimiento 25 mg cada 24 horas",
      D:"Tegoprazan 50 mg, 30 minutos a 1 hora antes del desayuno cada 24 horas por 2 meses"
    },
    correcta:"B",
    mensaje_clave:"Esofagitis leve grado B: tratamiento de inducción y luego a demanda — y el tegoprazán alivia desde los primeros 30 minutos.",
    var_media:[ {type:"img",src:"VAR-pregunta2.png"} ],
    fuentes:[ "Valdovinos M.A. Recomendaciones de buena práctica clínica en el diagnóstico y tratamiento de la enfermedad por reflujo gastroesofágico. Rev Gastroenterol Méx. 2024;89:121-143." ],
    validado:true
  },
  {
    id:3, caso_clinico:1, cortinilla:"cortinilla3.mp4",
    pregunta:"¿Cuál sería un esquema adecuado de erradicación de H. pylori basado en tegoprazán en regiones como México con alta resistencia a claritromicina?",
    opciones:{
      A:"Terapia triple con claritromicina: tegoprazán 50 mg c/12 h + claritromicina 500 mg c/12 h + amoxicilina 1 g c/12 h por 14 días.",
      B:"Terapia cuádruple con bismuto: tegoprazán 50 mg c/12 h + doxiciclina 100 mg c/12 h + subsalicilato de bismuto 300 mg c/6 h + metronidazol 500 mg c/8 h por 14 días.",
      C:"Terapia dual a altas dosis: tegoprazán 50 mg c/12 h + amoxicilina 1 g c/8 h por 14 días."
    },
    correcta:["B","C"],
    mensaje_clave:"En zonas con alta resistencia a claritromicina, prefiere esquemas sin claritromicina (cuádruple con bismuto o dual a altas dosis) con tegoprazán.",
    var_media:[ {type:"img",src:"VAR-pregunta3.png"} ],
    fuentes:[ "J.M. Remes-Troche et al. V consenso mexicano sobre el diagnóstico y tratamiento de la infección por Helicobacter pylori. Rev Gastroenterol Méx. 2026;91:89-114." ],
    validado:true
  },
  {
    id:4, caso_clinico:1, cortinilla:"cortinilla4.mp4",
    pregunta:"Tras completar el tratamiento erradicador de H. pylori, el paciente mejora significativamente de la epigastralgia. ¿Cuál es el siguiente paso recomendado para confirmar el éxito terapéutico?",
    opciones:{
      A:"Repetir endoscopia digestiva alta inmediatamente.",
      B:"Solicitar serología IgG para H. pylori.",
      C:"Realizar prueba de aliento o antígeno en heces al menos 4 semanas después de terminar antibióticos y subsalicilato de bismuto; suspender el tegoprazán 2 semanas antes.",
      D:"Tratamiento con tegoprazán por 3 meses adicionales."
    },
    correcta:"C",
    mensaje_clave:"Confirma la erradicación con prueba NO invasiva (aliento o antígeno en heces), al menos 4 semanas tras terminar el tratamiento.",
    var_media:[ {type:"img",src:"VAR-pregunta4.png"} ],
    fuentes:[ "J.M. Remes-Troche et al. V consenso mexicano sobre el diagnóstico y tratamiento de la infección por Helicobacter pylori. Rev Gastroenterol Méx. 2026;91:89-114." ],
    validado:true
  },

  /* ---------- CASO CLÍNICO 2 (textos y VAR PENDIENTES) ---------- */
  { id:5, caso_clinico:2, cortinilla:"cortinilla5.mp4",
    pregunta:"(Pregunta 5 — pendiente de texto)",
    opciones:{ A:"(pendiente)", B:"(pendiente)", C:"(pendiente)", D:"(pendiente)" },
    correcta:"A", mensaje_clave:"", var_media:[], fuentes:[], validado:false },
  { id:6, caso_clinico:2, cortinilla:"cortinilla6.mp4",
    pregunta:"(Pregunta 6 — pendiente de texto)",
    opciones:{ A:"(pendiente)", B:"(pendiente)", C:"(pendiente)", D:"(pendiente)" },
    correcta:"A", mensaje_clave:"", var_media:[], fuentes:[], validado:false },
  { id:7, caso_clinico:2, cortinilla:"cortinilla7.mp4",
    pregunta:"(Pregunta 7 — pendiente de texto)",
    opciones:{ A:"(pendiente)", B:"(pendiente)", C:"(pendiente)", D:"(pendiente)" },
    correcta:"A", mensaje_clave:"", var_media:[], fuentes:[], validado:false },
  { id:8, caso_clinico:2, cortinilla:"cortinilla8.mp4",
    pregunta:"(Pregunta 8 — pendiente de texto)",
    opciones:{ A:"(pendiente)", B:"(pendiente)", C:"(pendiente)", D:"(pendiente)" },
    correcta:"A", mensaje_clave:"", var_media:[], fuentes:[], validado:false }
];

/* ===== PENALES: 5 preguntas fijas (no modificar el texto) ===== */
const PENALES = [
  { n:1, pregunta:"¿Cuál es una ventaja de tegoprazan en comparación con los inhibidores de la bomba de protones (IBP)?",
    opciones:{ A:"Requiere activación en medio ácido para funcionar.", B:"Tiene un inicio de acción más rápido.", C:"Debe administrarse únicamente en ayuno." }, correcta:"B" },
  { n:2, pregunta:"¿En cuánto tiempo puede comenzar a observarse el efecto antisecretor de tegoprazan?",
    opciones:{ A:"Desde los primeros 30 minutos a 1 hora después de su administración.", B:"Después de 3 a 5 días de uso continuo.", C:"Después de 2 semanas de tratamiento." }, correcta:"A" },
  { n:3, pregunta:"¿Cuál de las siguientes características diferencia a tegoprazan de muchos inhibidores de la bomba de protones (IBP)?",
    opciones:{ A:"Su eficacia depende de administrarlo estrictamente antes de los alimentos.", B:"Actúa independientemente de la ingesta de alimentos.", C:"Debe tomarse únicamente por la noche." }, correcta:"B" },
  { n:4, pregunta:"¿Qué ventaja clínica puede ofrecer tegoprazan frente a los IBP tradicionales?",
    opciones:{ A:"Menor control del pH gástrico durante la noche.", B:"Mayor supresión ácida desde el primer día de tratamiento.", C:"Necesidad de tomarse estrictamente 30 minutos antes de los alimentos." }, correcta:"B" },
  { n:5, pregunta:"¿Cuál de las siguientes afirmaciones es correcta respecto al tratamiento de la esofagitis erosiva grave (Los Ángeles C/D)?",
    opciones:{ A:"Los inhibidores de la bomba de protones siempre se administran una vez al día durante 4 semanas.", B:"En casos graves puede requerirse tratamiento con IBP dos veces al día durante 8 semanas para optimizar la cicatrización.", C:"Tegoprazan debe administrarse obligatoriamente dos veces al día durante 12 semanas." }, correcta:"B" }
];
