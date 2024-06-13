import inquirer from 'inquirer';
import { agregarTareas, listarTareas, actualizarTarea, eliminarTarea } from './Tareas.js';

const menu = async () => {
  const { opcion } = await inquirer.prompt({
    type: 'list',
    name: 'opcion',
    message: '¿Qué acción deseas realizar con las tareas?',
    choices: ['Crear tarea', 'Listar tareas', 'Actualizar tarea', 'Eliminar tarea', 'Exit']
  });
  return opcion;
};

const solicitarDatosTareas = async (defaults = {}) => {
  return await inquirer.prompt([
    { name: 'nombreT', message: 'Nombre de la tarea:', default: defaults.nombreT || '' },
  ]);
};

const solicitarIndiceTarea = async () => {
  const { indice } = await inquirer.prompt({
    name: 'indice',
    message: 'Índice de la Tarea:',
    type: 'number'
  });
  return indice;
};

const main = async () => {
  let salir = false;
  while (!salir) {
    const opcion = await menu();
    switch (opcion) {
      case 'Crear tarea':
        const nuevaTarea = await solicitarDatosTareas();
        agregarTareas(nuevaTarea, console.log);
        break;
      case 'Listar tareas':
        listarTareas((tareas) => console.log('Tareas:', tareas));
        break;
      case 'Actualizar tarea':
        const indiceActualizar = await solicitarDatosTareas();
        const tareaActualizada = await solicitarDatosTareas();
        actualizarTarea(indiceActualizar, tareaActualizada, console.log);
        break;
      case 'Eliminar Tarea':
        const indiceEliminar = await solicitarIndiceTarea();
        eliminarTarea(indiceEliminar, console.log);
        break;
      case 'Exit':
        salir = true;
        break;
    }
  }
};

main();