//Estudiantes A
let estudiantes = [
    {nombre: "Jeiker", semestre: 4, nota: 20},
    {nombre: "Alejandro", semestre: 5, nota: 9},
    {nombre: "Morillo", semestre: 5, nota: 10},
    {nombre: "Jesus", semestre: 7, nota: 5},
    {nombre: "Santiago", semestre: 6, nota: 7},
    {nombre: "Roberto", semestre: 7, nota: 2},
    {nombre: "Andrés", semestre: 6, nota: 14},
    {nombre: "María", semestre: 3, nota: 17},
    {nombre: "Paula", semestre: 7, nota: 1},
    {nombre: "Daniel", semestre: 1, nota: 19}
];
let estudiantesSemestre = (estudiantes, semestre) => {
    let estPS = [];
    estudiantes.forEach((estudiante) => {
        if(estudiante.semestre == semestre) estPS.push(estudiante);
    });
    return estPS;
}
let salida = document.getElementById("salida");
let estudiantes7mo = estudiantesSemestre(estudiantes, 7);
salida.innerHTML = `Estudiantes del séptimo semestre: <br>`;
estudiantes7mo.forEach((estudiante) => {
    salida.innerHTML += `Nombre del estudiante: ${estudiante.nombre}<br>` 
});