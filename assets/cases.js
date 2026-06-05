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
    caso: "Paciente masculino de 48 años con ERGE moderada. Presenta pirosis y regurgitación 4 días por semana. Se decide iniciar terapia con un P-CAB.",
    pregunta: "¿Cuál de las siguientes afirmaciones sobre los P-CAB (tegoprazán) es CORRECTA?",
    opciones: {
      A: "Requieren activación ácida para inhibir la bomba de protones.",
      B: "Su efecto máximo se alcanza después de varios días de uso.",
      C: "Inhiben la bomba de protones de forma irreversible.",
      D: "Se unen de forma competitiva y reversible a la bomba de protones."
    },
    correcta: "D",
    mensaje_clave: "P-CAB (tegoprazán): unión competitiva y reversible → control del ácido desde la 1ª toma.",
    evidencia: {
      titulo: "Mecanismo de acción: P-CAB vs IBP",
      puntos: [
        "Los IBP son profármacos que REQUIEREN activación en medio ácido; el P-CAB no.",
        "El P-CAB bloquea de forma competitiva (con el K⁺) y reversible la H⁺/K⁺-ATPasa.",
        "Acción rápida desde la primera toma (~30 min), sin necesidad de acumulación de días.",
        "Control sostenido del ácido por 24 h, incluida la secreción nocturna."
      ]
    },
    validado: true
  },
  {
    id: 2,
    caso: "Mujer de 35 años con pirosis nocturna que interrumpe el sueño 3-4 veces por semana. Refiere alivio insuficiente con IBP tomado en ayuno.",
    pregunta: "¿Qué ventaja del P-CAB es más relevante para este perfil de síntoma nocturno?",
    opciones: {
      A: "Requiere ayuno estricto de 30 min antes de cada toma.",
      B: "Control ácido sostenido por 24 h, incluida la noche.",
      C: "Efecto que aparece tras 3-5 días de tratamiento.",
      D: "Debe tomarse varias veces al día para sostener el efecto."
    },
    correcta: "B",
    mensaje_clave: "Control 24 h: cobertura del ácido nocturno con una sola toma.",
    evidencia: {
      titulo: "Control nocturno del ácido",
      puntos: [
        "La hiperacidez nocturna es una limitación frecuente de los IBP.",
        "El P-CAB mantiene el control del pH a lo largo de 24 h con una toma diaria.",
        "Se puede tomar con o sin alimentos, a cualquier hora."
      ]
    },
    validado: false
  },
  {
    id: 3,
    caso: "Hombre de 52 años inicia tratamiento por ERGE. Pregunta cuándo va a notar alivio porque tiene un viaje en 2 días.",
    pregunta: "Respecto al inicio de acción del P-CAB (tegoprazán), lo correcto es:",
    opciones: {
      A: "Alivio rápido, alrededor de los 30 min desde la primera toma.",
      B: "Alivio progresivo a partir del día 5.",
      C: "Sin efecto hasta alcanzar estado estacionario en 1 semana.",
      D: "Solo es eficaz si se combina con un antiácido."
    },
    correcta: "A",
    mensaje_clave: "Rapidez: alivio ~30 min desde la primera toma.",
    evidencia: {
      titulo: "Rapidez de inicio de acción",
      puntos: [
        "El P-CAB no depende de activación ácida progresiva como el IBP.",
        "Inicio de acción rápido (~30 min) desde la primera dosis.",
        "Útil cuando el paciente necesita alivio temprano y predecible."
      ]
    },
    validado: false
  }
];
