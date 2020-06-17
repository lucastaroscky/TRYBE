const lesson1 = {
 materia: 'Matemática',
 numeroEstudantes: 20,
 professor: 'Maria Clara',
 turno: 'manhã',
};

const lesson2 = {
 materia: 'História',
 numeroEstudantes: 20,
 professor: 'Carlos',
};

const lesson3 = {
 materia: 'Matemática',
 numeroEstudantes: 10,
 professor: 'Maria Clara',
 turno: 'noite',
};


// 1 função para adicionar turno no objeto
const adicionarTurno = (object, key, value) => (object[key] = value)

// 2 listar keys de um objeto
const listarKeys = (object) => (Object.keys(object))
 
// 3 mostrar tamanho de um objeto
const tamanhoObjeto = (object) => (Object.entries(object).length) 
console.log(tamanhoObjeto(lesson3))

// 4 função que mostra valores de uma função
