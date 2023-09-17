// Создать кнопку "Перевернуть". При клике на кнопку текст кнопки,
// должен перевернуться и отобразиться в обратном порядке.

const Task1 = {
  data() {
    return {
      textButton: "Перевернуть",
    };
  },
  methods: {
    turnText() {
      this.textButton = this.textButton.split("").reverse().join("");
    },
  },
};

// Есть список элементов. Пользователь может добавлять новые
// элементы списка с текстом “Новый элемент списка” нажав на кнопку
// "Добавить".

const Task2_3 = {
  data() {
    return {
      listElem: [],
      addText: "Новый элемент списка",
      buttonName: "Добавить",
    };
  },
  methods: {
    addNewTextElem() {
      this.listElem.push(this.addText);
      console.log(this.listElem);
    },
    delElemInList(e) {
      e.target.remove();
      this.listElem.pop();
    },
  },
};

Vue.createApp(Task1).mount("#task1");
Vue.createApp(Task2_3).mount("#task2");
