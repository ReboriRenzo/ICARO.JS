import inquirer from 'inquirer';
import { agregarTareas, listarTareas, actualizarTareas, eliminarTareas } from './Tareas.js';

const menu = async () => {
  const { opcion } = await inquirer.prompt({
    type: 'list',
    name: 'opcion',
    message: '¿Qué acción deseas realizar con los Alumnos?',
    choices: ['Crear alumno', 'Lista alumnos', 'Actualizar alumno', 'Eliminar alumno', 'Exit']
  });
  return opcion;
};

const solicitarDatosAlumno = async (defaults = {}) => {
  return await inquirer.prompt([
    { name: 'nombre', message: 'Nombre del alumno:', default: defaults.nombre || '' },
    { name: 'apellido', message: 'Apellido del alumno:', default: defaults.apellido || '' },
    { name: 'Deporte', message: 'Deporte que te gusta:', default: defaults.Deporte || '' }
  ]);
};

const solicitarIndiceAlumno = async () => {
  const { indice } = await inquirer.prompt({
    name: 'indice',
    message: 'Índice del alumno:',
    type: 'number'
  });
  return indice;
};

const main = async () => {
  let salir = false;
  while (!salir) {
    const opcion = await menu();
    switch (opcion) {
      case 'Crear alumno':
        const nuevoAlumno = await solicitarDatosAlumno();
        agregarAlumno(nuevoAlumno, console.log);
        break;
      case 'Lista alumnos':
        listarAlumnos((alumnos) => console.log('Alumnos:', alumnos));
        break;
      case 'Actualizar alumno':
        const indiceActualizar = await solicitarIndiceAlumno();
        const alumnoActualizado = await solicitarDatosAlumno();
        actualizarAlumno(indiceActualizar, alumnoActualizado, console.log);
        break;
      case 'Eliminar alumno':
        const indiceEliminar = await solicitarIndiceAlumno();
        eliminarAlumno(indiceEliminar, console.log);
        break;
      case 'Exit':
        salir = true;
        break;
    }
  }
};

main();

/* ----------------------------------------------------------------- */

/* import inquirer from 'inquirer';
import fs from 'fs';

const archivoAlumnos = 'Alumnos.json';

const leerAlumnos = () => {
  try {
    return JSON.parse(fs.readFileSync(archivoAlumnos, 'utf-8'));
  } catch (error) {
    return [];
  }
};

const guardarAlumnos = (alumnos) => {
  fs.writeFileSync(archivoAlumnos, JSON.stringify(alumnos, null, 2));
};

// agrego un menu en consola para mostrar
const menu = async () => {
  const { opcion } = await inquirer.prompt({
    type: 'list',
    name: 'opcion',
    message: '¿Qué acción deseas realizar con los Alumnos?',
    choices: ['Crear alumno', 'Lista alumnos', 'Actualizar alumno', 'Eliminar alumno', 'Exit']
  });
  return opcion;
};
//creo Alumno
const createAlumno = async () => {
  const alumno = await inquirer.prompt([
    { name: 'nombre', 
      message: 'Nombre del alumno:'
    },
    { name: 'apellido',
      message: 'Apellido del alumno:'
     },
    { name: 'Deporte',
      message: 'Deporte que te gusta:' }
  ]);
  
  const alumnos = leerAlumnos();
  alumnos.push(alumno);
  guardarAlumnos(alumnos);
  console.log('Alumno creado exitosamente.');
};
//Leo alumno
const ReadAlumnos = () => {
  const alumnos = leerAlumnos();
  console.log('Alumnos:', alumnos);
};

const updateAlumno = async () => {
  const alumnos = leerAlumnos();
  const { indice } = await inquirer.prompt({
    name: 'indice',
    message: 'Índice del alumno a Actualizar Nº:',
    type: 'number',
    validate: (value) => value >= 0 && value < alumnos.length
  });

  const nuevoAlumno = await inquirer.prompt([
    { name: 'nombre',
      message: 'Nuevo nombre del alumno:',
      default: alumnos[indice].nombre
    },
    { name: 'apellido',
      message: 'Nuevo apellido del alumno:',
      default: alumnos[indice].apellido
    },
    { name: 'Deporte',
      message: 'Nuevo Deporte que te gusta:',
      default: alumnos[indice].Deporte
    }
  ]);
  alumnos[indice] = nuevoAlumno;
  guardarAlumnos(alumnos);
  console.log('Alumno actualizado exitosamente.');
};

//Elimino
const deleteAlumno = async () => {
  const alumnos = leerAlumnos();
  const { indice } = await inquirer.prompt({
    name: 'indice',
    message: 'Índice del Alumno a eliminar Nº:',
    type: 'number',
    validate: (value) => value >= 0 && value < alumnos.length
  });
  alumnos.splice(indice, 1);
  guardarAlumnos(alumnos);
  console.log('Alumno eliminado exitosamente.');
};

const main = async () => {
  let salir = false;
  while (!salir) {
    const opcion = await menu();
    switch (opcion) {
      case 'Crear alumno':
        await createAlumno();
        break;
      case 'Lista alumnos':
        ReadAlumnos();
        break;
      case 'Actualizar alumno':
        await updateAlumno();
        break;
      case 'Eliminar alumno':
        await deleteAlumno();
        break;
      case 'Exit':
        salir = true;
        break;
    }
  }
};

main(); */