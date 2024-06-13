import fs from 'fs';

const archivoTareas = 'Tareas.json';

export const leerTareas = () => {
  try {
    return JSON.parse(fs.readFileSync(archivoTareas, 'utf-8'));
  } catch (error) {
    return [];
  }
};

export const guardarTareas = (Tareas) => {
  fs.writeFileSync(archivoTareas, JSON.stringify(Tareas, null, 2));
};