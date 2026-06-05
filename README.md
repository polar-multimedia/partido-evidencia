# El Partido de la Evidencia · Ki-CAB

App web de evento médico en vivo. Stack: **GitHub Pages** (frontend) + **Firebase Realtime Database** (tiempo real).
Tres vistas sincronizadas: pantalla del salón, control del animador y celular del médico.

---

## 1. Conectar Firebase (lo único que debes hacer, ~5 min)

1. Entra a https://console.firebase.google.com con `carpinteyro@polarmultimedia.com`
2. **Add project** → nombre: `polar-partido-evidencia-2026`
3. Menú **Build → Realtime Database → Create Database** → región más cercana → **modo test** (lo blindamos en el paso 3).
4. **Project Settings (⚙️) → Your apps → Web (</>)** → registra una app → copia el objeto `firebaseConfig`.
5. Abre `assets/firebase.js` y pega esos valores reemplazando los `"PEGA_AQUI_..."`.

> Mientras no pegues la config, las tres vistas muestran un aviso "Falta conectar Firebase". Al pegarla y recargar, queda listo.

## 2. Reglas de seguridad

Firebase Console → **Realtime Database → Rules** → pega esto y publica:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

La app **no requiere login**: cada dispositivo usa un id local. Estas reglas (lectura y escritura abiertas)
son suficientes para un evento privado con URL no pública. Por seguridad, déjalas activas solo durante el
evento y vuélvelas a cerrar después.

> **Opción más segura (opcional):** si prefieres exigir autenticación, en Firebase Console →
> **Authentication → Sign-in method → Anonymous → Enable**, y usa estas reglas en su lugar:
> `{ "rules": { ".read": true, ".write": "auth != null" } }`. La app detecta la auth anónima
> automáticamente si está habilitada.

## 4. Publicar en GitHub Pages

```bash
# Repo sugerido: claude-made/partido-evidencia
# Sube el contenido de esta carpeta a la raíz del repo (rama main).
# Settings → Pages → Source: main / root → guardar.
```

URLs resultantes (~2 min después):

| Vista | URL | Dispositivo |
|---|---|---|
| Pantalla | `https://claude-made.github.io/partido-evidencia/pantalla/` | Proyector / TV del salón |
| Control | `https://claude-made.github.io/partido-evidencia/moderador/` | Smartphone del animador (y respaldo del host) |
| Médico | `https://claude-made.github.io/partido-evidencia/mesa/` | Celular del médico (lo abre escaneando el QR) |

El **QR que aparece en la pantalla en estado Lobby** ya apunta a la vista del médico automáticamente.

---

## Cómo se corre el evento

1. Abre **Pantalla** en el proyector y **Control** en el smartphone del animador.
2. Los médicos escanean el QR de la pantalla → ponen nombre → eligen equipo (⚡ Inicio Rápido / 🛡️ Control Sostenido).
3. Desde **Control**, el animador avanza la máquina de estados con un solo botón por fase:
   Iniciar → Mostrar caso → Mostrar opciones → **Abrir respuestas ⏱** → Cerrar tiempo → **Revelar ⚽** → (Ir al VAR) → Siguiente caso.
4. El marcador es **normalizado por tamaño de equipo** (puntos por jugador), así que no importa si los equipos quedan disparejos.
5. Al terminar, **Exportar analítica (JSON)** desde Control descarga el desempeño por caso/sede.

## Cargar el banco de casos

Edita `assets/cases.js` y agrega objetos al arreglo `CASOS` (formato documentado en el propio archivo).
Marca `validado: true` cuando cada caso pase validación médica + compliance COFEPRIS.

## Estructura

```
partido-evidencia/
├── index.html            → selector de vistas
├── moderador/index.html  → Control (animador / host)
├── pantalla/index.html   → Estadio digital (proyección)
├── mesa/index.html       → Vista del médico
├── assets/
│   ├── firebase.js       → ⚠️ pega aquí tu firebaseConfig
│   ├── common.js         → equipos, estados, puntaje normalizado, cronómetro
│   ├── cases.js          → banco de casos clínicos
│   └── style.css         → tema visual Ki-CAB
└── README.md
```

## Datos en Firebase (referencia)

```
evento/        { estado, caso_actual, cronometro:{inicio,duracion,corriendo} }
jugadores/<uid>{ nombre, equipo, conectado }
respuestas/<caso>/<uid> { opcion, ts, equipo, correcta, puntos }
equipos/       { rapido:{puntaje,racha}, control:{puntaje,racha} }
var_solicitudes/<uid>   equipo
reacciones/<id>{ emoji, equipo, ts }
scored/<caso>  true     (control de idempotencia del puntaje)
```

## Pendientes para Fase 2
- Quiniela automática del partido real (API deportiva + resolución automática + fallback manual).
- Dashboard de analítica agregada por sede/especialidad.

## Notas operativas
- Firebase Spark (gratis) soporta ~100 conexiones simultáneas → suficiente para 50 personas/sede.
- Probar la app completa en WiFi similar a la del venue **48 h antes** del evento.
- GitHub Pages tarda 2-5 min en reflejar cambios tras un push.

---
Polar Multimedia para Carnot Laboratorios / Ki-CAB · Confidencial
