const Task = {
  data() {
    return {
      products: [
        {
          name: "Хлеб",
          price: 50,
        },
        {
          name: "Молоко",
          price: 65,
        },
        {
          name: "Мясо",
          price: 250,
        },
        {
          name: "Бананы",
          price: 80,
        },
        {
          name: "Шоколад",
          price: 45,
        },
        {
          name: "Пиво",
          price: 100,
        },
      ],
    };
  },
  methods: {
    sortInAscendingOrder() {
      const result = this.products.sort((a, b) => a.price - b.price);
      return result;
    },
    sortInDescendingOrder() {
      const result = this.products.sort((a, b) => b.price - a.price);
      return result;
    },
  },
};

Vue.createApp(Task).mount("#task");
