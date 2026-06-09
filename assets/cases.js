/* ===================================================================
   Banco de casos clínicos · El Partido de la Evidencia · Ki-CAB
   -------------------------------------------------------------------
   Caso 1 = caso de muestra del concepto aprobado.
   Agrega más objetos al arreglo CASOS para cargar el banco completo.
   Todo contenido clínico debe pasar validación médica + compliance
   COFEPRIS antes del evento (campo "validado": true cuando esté listo).

   Estructura de cada caso:
   {
     id, caso, pregunta, opciones:{A,B,C,D}, correcta:"A|B|C|D",
     mensaje_clave,                  // 1 línea que SIEMPRE se ve en el gol
     evidencia:{ titulo, puntos:[] },// se ve en el VAR a petición
     validado
   }
   =================================================================== */

const CASOS = [
  {
    id: 1,
    cortinilla: "cortinilla1-contexto.mp4",
    caso: "Paciente masculino de 55 años, con sobrepeso, pirosis, regurgitación y ardor epigástrico de 6 meses. Niega datos de alarma. Se realiza endoscopia.",
    imagen: "duodenos.png",
    pregunta: "Hallazgo de Esofagitis B de los Ángeles y mucosa gástrica normal. Prueba rápida de ureasa y biopsia positiva para Helicobacter pylori. ¿cuál es la mejor justificación para elegir Tegoprazan como tratamiento de primera elección?",
    opciones: {
      A: "Produce inhibición irreversible de la bomba de protones, generando control sintomático después de varios días de administración continua.",
      B: "Porque logra una elevación rápida y sostenida del pH intragástrico desde la primera dosis, favoreciendo simultáneamente control sintomático, cicatrización de ERGE y la erradicación de H. pylori.",
      C: "Logra una supresión ácida impredecible, ya que es dependiente del horario de administración y del estado funcional de las bombas de protones.",
      D: "Porque ejerce actividad bactericida directa sobre H. pylori, incluso en cepas resistentes a claritromicina."
    },
    correcta: "B",
    mensaje_clave: "Tegoprazán: pH alto y sostenido desde la 1ª dosis → control de ERGE y apoyo en la erradicación de H. pylori.",
    evidencia: {
      titulo: "Tegoprazán (P-CAB) vs IBP",
      puntos: [
        "Tegoprazán actúa directo en la bomba de protones; el IBP necesita transformarse a su forma activa (sulfenamida).",
        "Tegoprazán actúa en bombas de protones activas e inactivas; el IBP solo en las activas.",
        "Tegoprazán actúa desde la primera dosis; el IBP requiere varias dosis para ver el efecto.",
        "Tegoprazán no depende de la ingesta de alimentos; el efecto del IBP sí depende del alimento.",
        "Tegoprazán logra supresión completa y sostenida; el IBP deja supresión incompleta con síntomas nocturnos.",
        "La acción del tegoprazán no se afecta por el polimorfismo genético; la del IBP sí."
      ]
    },
    evidencia_imagen: "evidencia_hpylori.png",
    fuentes: [
      "Scarpignato C et al. Pharmacologic treatment of GERD: Where we are now, and where are we going? Ann N.Y. Acad Sci. 2020.",
      "Herszényi L et al. Pharmacological Approach to Gastric Acid Suppression: Past, Present, and Future. Dig Dis. 2020;38:104-111."
    ],
    validado: true
  },
  {
    id: 2,
    cortinilla: "cortinilla2.mp4",
    caso: "",
    pregunta: "¿Cuánto tiempo se dará tratamiento para la esofagitis leve grado B a este paciente?",
    opciones: {
      A: "tegoprazan 50 mg cada 12 horas por 2 meses",
      B: "Tegoprazan 50 mg cada 24 horas por 2 meses y a demanda",
      C: "Tegoprazan 50 mg cada 24 horas por 2 meses y después de mantenimiento 25 mg cada 24 horas",
      D: "Tegoprazan 50 mg, 30 minutos a 1 hora antes del desayuno cada 24 horas por 2 meses"
    },
    correcta: "B",
    mensaje_clave: "Esofagitis leve grado B: tratamiento de inducción y luego a demanda — y el tegoprazán alivia desde los primeros 30 minutos.",
    evidencia: {
      titulo: "Tratamiento de ERGE / esofagitis (guía AMG)",
      puntos: [
        "En ERNE: P-CAB o IBP una vez al día por 4 semanas; luego tratamiento intermitente o a demanda.",
        "En esofagitis: tegoprazán una vez al día por 8 semanas (IBP dos veces al día).",
        "Ventaja del tegoprazán: actúa a partir de los primeros 30 minutos.",
        "Mantenimiento: a la dosis con que se controlen los síntomas (mitad de dosis, 25 mg, en grados C y D)."
      ]
    },
    fuentes: [
      "Valdovinos M.A. Recomendaciones de buena práctica clínica en el diagnóstico y tratamiento de la enfermedad por reflujo gastroesofágico. Revisión por expertos de la Asociación Mexicana de Gastroenterología. Rev Gastroenterol Méx. 2024;89:121-143."
    ],
    validado: true
  },
  {
    id: 3,
    cortinilla: "cortinilla3.mp4",
    caso: "Se confirma infección por Helicobacter pylori en el paciente. México es una región con alta resistencia a claritromicina.",
    pregunta: "¿Cuál sería un esquema adecuado de erradicación de H. pylori basado en tegoprazán en regiones como México con alta resistencia a claritromicina?",
    opciones: {
      A: "Terapia triple con claritromicina: tegoprazán 50 mg c/12 h + claritromicina 500 mg c/12 h + amoxicilina 1 g c/12 h por 14 días.",
      B: "Terapia cuádruple con bismuto: tegoprazán 50 mg c/12 h + doxiciclina 100 mg c/12 h + subsalicilato de bismuto 300 mg c/6 h + metronidazol 500 mg c/8 h por 14 días.",
      C: "Terapia dual a altas dosis: tegoprazán 50 mg c/12 h + amoxicilina 1 g c/8 h por 14 días."
    },
    correcta: ["B", "C"],
    mensaje_clave: "En zonas con alta resistencia a claritromicina, prefiere esquemas sin claritromicina (cuádruple con bismuto o dual a altas dosis) con tegoprazán.",
    evidencia: {
      titulo: "Erradicación de H. pylori (consenso mexicano)",
      puntos: [
        "En regiones con alta resistencia a claritromicina, evita la terapia triple con claritromicina.",
        "Primera línea: cuádruple con bismuto (14 días) o cuádruple sin bismuto / concomitante (14 días), con IBP o P-CAB.",
        "Si falla y no hay pruebas de susceptibilidad: cuádruple con bismuto (si no se usó antes) o terapia dual a altas dosis (P-CAB + amoxicilina).",
        "El tegoprazán (P-CAB) eleva y sostiene el pH, mejorando la eficacia de los antibióticos."
      ]
    },
    evidencia_imagen: "evidencia3.png",
    fuentes: [
      "J.M. Remes-Troche et al. V consenso mexicano sobre el diagnóstico y tratamiento de la infección por Helicobacter pylori. Rev Gastroenterol Méx. 2026;91:89-114."
    ],
    validado: true
  },
  {
    id: 4,
    cortinilla: "cortinilla4.mp4",
    caso: "Tras completar el tratamiento erradicador de H. pylori, el paciente mejora significativamente de la epigastralgia.",
    pregunta: "Tras completar el tratamiento erradicador de H. pylori, el paciente mejora significativamente de la epigastralgia. ¿Cuál es el siguiente paso recomendado para confirmar el éxito terapéutico?",
    opciones: {
      A: "Repetir endoscopia digestiva alta inmediatamente.",
      B: "Solicitar serología IgG para H. pylori.",
      C: "Realizar prueba de aliento o antígeno en heces al menos 4 semanas después de terminar antibióticos y subsalicilato de bismuto; suspender el tegoprazán 2 semanas antes.",
      D: "Tratamiento con tegoprazán por 3 meses adicionales."
    },
    correcta: "C",
    mensaje_clave: "Confirma la erradicación con prueba NO invasiva (aliento o antígeno en heces), al menos 4 semanas tras terminar el tratamiento.",
    evidencia: {
      titulo: "Confirmación de erradicación (consenso mexicano)",
      puntos: [
        "La confirmación de erradicación de H. pylori se hace con una prueba NO invasiva.",
        "Válidas: prueba de aliento con urea C13/C14 o antígeno en heces.",
        "Realizarlas al menos 4 semanas después de completar el tratamiento de erradicación.",
        "Calidad de la evidencia: A · Fuerza de la recomendación: fuerte a favor."
      ]
    },
    fuentes: [
      "J.M. Remes-Troche et al. V consenso mexicano sobre el diagnóstico y tratamiento de la infección por Helicobacter pylori. Rev Gastroenterol Méx. 2026;91:89-114."
    ],
    validado: true
  }
];
