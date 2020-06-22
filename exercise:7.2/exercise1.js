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

// 4 função que mostra valores de uma função
const valoresObjeto = (object) => (Object.values(object))

// 5 crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3
const allLessons = Object.assign({}, lesson1, lesson2, lesson3)

// 6 retornar numero total de estudantes em todas as aulas
const totalEstudantes = (obj) => {
  let estudantes = 0;
  const array = Object.values(obj);
  for (const index in array) {
      estudantes += obj[array[index]].numeroEstudantes;      
    }
    return estudantes
  }
  
  // 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
  const indiceObjeto = (obj, number) => Object.values(obj)[number];

// 8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const isTrueOrFalse = (obj, key, value) => {
  const object = Object.entries(obj);
  let is = false;
  for (const index in object) {
    if (object[index][0] === key && object[index][1] === value) is = true
    }
    return is
  }

  console.log(isTrueOrFalse(lesson1, 'materia', 'Matemática'))
