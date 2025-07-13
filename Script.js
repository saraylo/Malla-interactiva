// Aquí defines los cursos y qué depende de qué
const cursos = [
  { id: "eco", nombre: "Fundamentos de Economía", desbloquea: ["micro", "macro"] },
  { id: "adm", nombre: "Fundamentos de la Administración", desbloquea: ["admf"] },
  { id: "mate", nombre: "Matemática Fundamental", desbloquea: ["calc1"] },
  { id: "micro", nombre: "Microeconomía", desbloquea: ["macro"] },
  { id: "calc1", nombre: "Cálculo I", desbloquea: ["matf"] },
  { id: "admf", nombre: "Administración Financiera", desbloquea: ["gerestr"] },
  { id: "matf", nombre: "Matemática Financiera", desbloquea: ["valemp"] },
  { id: "macro", nombre: "Macroeconomía", desbloquea: ["modeldes"] },
  { id: "valemp", nombre: "Valoración de Empresas", desbloquea: [] },
  { id: "gerestr", nombre: "Gerencia Estratégica", desbloquea: [] },
  { id: "modeldes", nombre: "Modelos de Desarrollo Económico", desbloquea: [] },
];

const contenedor = document.querySelector(".semestres");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "curso locked";
  div.id = curso.id;

  const titulo = document.createElement("h3");
  titulo.textContent = curso.nombre;

  const boton = document.createElement("button");
  boton.textContent = "Aprobar";
  boton.disabled = true;
  boton.addEventListener("click", () => aprobarCurso(curso.id));

  div.appendChild(titulo);
  div.appendChild(boton);
  contenedor.appendChild(div);
});

// Al iniciar desbloqueamos los cursos iniciales
function inicializar() {
  ["eco", "adm", "mate"].forEach(id => desbloquear(id));
}
inicializar();

function aprobarCurso(id) {
  const curso = document.getElementById(id);
  curso.classList.remove("locked");
  curso.querySelector("button").disabled = true;

  const cursoData = cursos.find(c => c.id === id);
  cursoData.desbloquea.forEach(d => desbloquear(d));
}

function desbloquear(id) {
  const curso = document.getElementById(id);
  if (curso) {
    curso.classList.remove("locked");
    curso.querySelector("button").disabled = false;
  }
}
