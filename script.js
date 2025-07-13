// script.js

const malla = document.getElementById("malla");

const semestres = [ { nombre: "Semestre I", materias: [ "Fundamentos de Contabilidad", "Fundamentos de la Administración", "Matemática Fundamental", "Fundamentos de Economía", "Fundamentos de Mercadeo", "Introducción a los Negocios Internacionales" ] }, { nombre: "Semestre II", materias: [ "Probabilidad y Estadística", "Microeconomía", "Cálculo I", "Acuerdos Comerciales", "Introducción a las Finanzas" ] }, { nombre: "Semestre III", materias: [ "Inglés I", "Estadística Aplicada", "Macroeconomía", "Logística y Distribución Física Internacional", "Matemática Financiera" ] }, { nombre: "Semestre IV", materias: [ "Inglés II", "Instrumentos de Renta", "Gestión de Importaciones y Exportaciones", "Contratación Internacional", "Administración Financiera", "Creación Empresarial" ] }, { nombre: "Semestre V", materias: [ "Inglés III", "Responsabilidad Social y Corporativa", "Régimen Aduanero y Cambiario", "Costos", "Finanzas Corporativas", "Mercados de Capitales" ] }, { nombre: "Semestre VI", materias: [ "Inglés IV", "Razonamiento Cuantitativo", "Constitución Política", "Presupuesto", "Gerencia de Negocios Internacionales" ] }, { nombre: "Semestre VII", materias: [ "Electiva I", "Modelos de Desarrollo Económico", "Formulación y Evaluación de Proyectos", "Valoración de Empresas", "Inglés V" ] }, { nombre: "Semestre VIII", materias: [ "Electiva II", "Gerencia Estratégica", "Gerencia de Proyectos", "Trabajo de Grado I" ] }, { nombre: "Semestre IX", materias: [ "Electiva III", "Práctica Empresarial", "Trabajo de Grado II" ] } ];

let aprobadas = [];

function crearMalla() { semestres.forEach((sem, index) => { const contenedor = document.createElement("div"); contenedor.className = "semestre";

const titulo = document.createElement("h2");
titulo.textContent = sem.nombre;
contenedor.appendChild(titulo);

sem.materias.forEach(materia => {
