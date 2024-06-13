import { leerTareas, guardarTareas } from "./fs.js";

export const agregarTareas = (Tarea, callback) => {
  const tareas = leerTareas();
  tareas.push(Tarea);
  guardarTareas(tareas);
  callback("Tarea creada con exito.");
};

export const listarTareas = (callback) => {
  const tareas = leerTareas();
  callback(tareas);
}; 

export const actualizarTarea = (indice, nuevaTarea, callback) => {
  const tareas = leerTareas();
  if (indice >= 0 && indice < tareas.length) {
    tareas[indice] = nuevaTarea;
    guardarTareas(tareas);
    callback("Tarea actualizada con exito.");
  } else {
    callback("Índice fuera de rango.");
  }
};

export const eliminarTarea = (indice, callback) => {
  const tareas = leerTareas();
  if (indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
    guardarTareas(Tareas);
    callback("Tarea eliminada con exito.");
  } else {
    callback("Índice fuera de rango.");
  }
};
