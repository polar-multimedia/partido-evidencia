/* El Partido de la Evidencia · constantes y helpers compartidos */

const TEAMS = {
  rapido:  { id:"rapido",  nombre:"Inicio Rápido",      corto:"INICIO RÁPIDO",    emoji:"⚡", color:"#19c3d6" },
  control: { id:"control", nombre:"Control Sostenido",  corto:"CONTROL SOSTENIDO", emoji:"🛡️", color:"#8ce021" }
};

/* Estados de la máquina (orden del ciclo de una pregunta) */
const STATES = ["lobby","cortinilla","pregunta","opciones","responder","bloqueo","resultado","var","cierre","final","despedida"];

const OPT_COLORS = { A:"#21c17a", B:"#2f86eb", C:"#e8554d", D:"#f2b53b" };

/* Soporte de opciones variables (3 o 4) y respuesta única o múltiple */
function opcionKeys(c){ return Object.keys(c.opciones || {}); }
function correctSet(c){ return Array.isArray(c.correcta) ? c.correcta : [c.correcta]; }
function esCorrecta(c, k){ return k != null && correctSet(c).includes(k); }
function correctasTexto(c){ return correctSet(c).join(" y "); }

/* Puntaje: base por acierto + bonus de velocidad (fracción de tiempo restante) */
const PTS_BASE = 100;
const PTS_VELOCIDAD_MAX = 50;   // bonus máximo por responder al instante
const RACHA_MULT = 0.1;         // +10% por cada acierto consecutivo del equipo (tope x2)

function calcPuntos(correcta, tRestante, tTotal, rachaEquipo){
  if(!correcta) return 0;
  const vel = tTotal > 0 ? Math.round(PTS_VELOCIDAD_MAX * Math.max(0, tRestante) / tTotal) : 0;
  const mult = Math.min(2, 1 + RACHA_MULT * (rachaEquipo || 0));
  return Math.round((PTS_BASE + vel) * mult);
}

/* Marcador NORMALIZADO por tamaño de equipo (puntos por jugador activo) */
function puntajeNormalizado(puntajeBruto, jugadoresEquipo){
  if(!jugadoresEquipo) return 0;
  return Math.round(puntajeBruto / jugadoresEquipo);
}

/* Reloj de servidor (compensa el offset del dispositivo) */
let SERVER_OFFSET = 0;
function watchServerOffset(database){
  if(!database) return;
  database.ref(".info/serverTimeOffset").on("value", s => { SERVER_OFFSET = s.val() || 0; });
}
function serverNow(){ return Date.now() + SERVER_OFFSET; }

/* Cronómetro: dado {inicio, duracion(seg), corriendo} → segundos restantes */
function segRestantes(cron){
  if(!cron || !cron.corriendo) return cron ? cron.duracion : 0;
  const transcurrido = (serverNow() - cron.inicio) / 1000;
  return Math.max(0, Math.ceil(cron.duracion - transcurrido));
}

function escapeHTML(s){ return String(s).replace(/[&<>"']/g, c => (
  {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])); }
