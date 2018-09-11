const toDoList = {
  todo: [],
  doing: [],
  done: []
}

let index = 1;

/**
 * 
 * @param {String} state : 추가하고 싶은 할 일 이름
 */
const add = (state) => {
  toDoList.todo.push({index, state});
  return console.log(`id: ${index++}, ${state} 항목이 새로 추가되었습니다.`);
}

/**
 * 
 * @param {String} state : 출력하고 싶은 상태 
 */
const show = (state) => {
  toDoList[state].forEach((value) => {
    return console.log(`${state}:${value.index}. ${value.state}`)
  })
}


/**
 * 
 * @param {String} id : 할 일의 ID 값
 * @param {String} state : ID를 옮길 상태 장소
 */
const update = (id, state) => {
  let job;
  for (item in toDoList) {
    toDoList[item].forEach((value, key) => {
      if (value.index == id) {
        job = Object.assign({}, toDoList[item][key]);
        delete toDoList[item][key];
      }
    })
    toDoList[item] = toDoList[item].filter(item => item !== undefined);
  }

  toDoList[state].push(job);
  return console.log(`현재상태 : todo:${toDoList['todo'].length}개, doing:${toDoList['doing'].length}개, done:${toDoList['done'].length}개`);
}

/**
 * 
 * @param {String} controlText : 커맨드 
 */
const executeCommand = (controlText) => {
  const commandValues = controlText.split('$');

  switch (commandValues.length) {
    case 2: {
      const [fn, state] = commandValues.map((value) => value.toString().toLowerCase().trim());
      eval(`${fn}('${state}')`); break;
    }
    case 3: {
      const [fn, id, state] = commandValues.map((value) => value.toString().toLowerCase().trim());
      eval(`${fn}('${id}', '${state}')`); break;
    }
  }
}

const command = (controlText) => executeCommand(controlText); 

command('aDD$ 투두리스트 만들기');
command('updAte$1$doing');
command('add$자바스크립트 만들기');
command('add$ 게임 만들기');
command('update$2$doing');
command('  update$3$done');
command('   show$ DOING');