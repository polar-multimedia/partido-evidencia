/* ===================================================================
   El Partido de la Evidencia · Ki-CAB
   Configuración de Firebase (Realtime Database)
   -------------------------------------------------------------------
   PASO ÚNICO QUE DEBES HACER ROBERTO:
   1. Entra a https://console.firebase.google.com
   2. Crea el proyecto:  polar-partido-evidencia-2026
   3. Activa  Realtime Database  (modo test al inicio)
   4. Project Settings → tus apps → Web app → copia el firebaseConfig
   5. Pega ESOS valores abajo, reemplazando los "PEGA_AQUI_..."
   No se necesita nada más: el resto de la app ya está conectada.
   =================================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyBdeQdDUVm3ASzv_sLgxY206ori29RrXTQ",
  authDomain: "partido-evidencia.firebaseapp.com",
  databaseURL: "https://partido-evidencia-default-rtdb.firebaseio.com",
  projectId: "partido-evidencia",
  storageBucket: "partido-evidencia.firebasestorage.app",
  messagingSenderId: "974969773341",
  appId: "1:974969773341:web:a8cb9992006600cf2e55f4"
};

/* ---- No edites nada debajo de esta línea ---- */

let db = null, auth = null;
const FB_READY = { ok: false, cbs: [] };

function fbOnReady(cb) { FB_READY.ok ? cb() : FB_READY.cbs.push(cb); }

function fbConfigMissing() {
  return Object.values(firebaseConfig).some(v => String(v).startsWith("PEGA_AQUI_"));
}

function fbShowConfigOverlay() {
  const o = document.createElement("div");
  o.style.cssText = "position:fixed;inset:0;z-index:99999;background:#0a0e15;color:#e8eef5;"
    + "display:flex;align-items:center;justify-content:center;padding:24px;"
    + "font-family:Lexend,system-ui,sans-serif;text-align:center";
  o.innerHTML = '<div style="max-width:520px">'
    + '<div style="font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#8ce021;font-weight:700">El Partido de la Evidencia</div>'
    + '<h2 style="margin:12px 0 8px">Falta conectar Firebase</h2>'
    + '<p style="color:#8ea0b3;line-height:1.6">Abre <code style="color:#19c3d6">assets/firebase.js</code> y pega tu <b>firebaseConfig</b> '
    + '(Firebase Console → Project Settings → Web App). En cuanto lo pegues y recargues, la app queda lista.</p></div>';
  document.body.appendChild(o);
}

(function initFirebase() {
  if (fbConfigMissing()) {
    document.addEventListener("DOMContentLoaded", fbShowConfigOverlay);
    console.warn("[Partido] firebaseConfig pendiente — pega tus credenciales en assets/firebase.js");
    return;
  }
  firebase.initializeApp(firebaseConfig);
  db = firebase.database();
  auth = firebase.auth();

  function fbFire(uid) {
    if (FB_READY.ok) return;
    FB_READY.ok = true;
    window.MI_UID = uid;
    FB_READY.cbs.forEach(cb => cb());
    FB_READY.cbs = [];
  }
  function localUid() {
    try {
      let u = localStorage.getItem("pe_uid");
      if (!u) { u = "id-" + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem("pe_uid", u); }
      return u;
    } catch (_) { return "id-" + Math.random().toString(36).slice(2) + Date.now().toString(36); }
  }
  // Si la auth anónima está habilitada la usa; si no, sigue con un id local
  // (funciona con reglas abiertas, suficiente para un evento privado).
  auth.onAuthStateChanged(u => { if (u) fbFire(u.uid); });
  auth.signInAnonymously().catch(e => {
    console.warn("Auth anónima no disponible (" + (e.code || e) + "); usando id local.");
    fbFire(localUid());
  });
})();
