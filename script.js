const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

const createBoxes = () => {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      console.log(box);
    }
  }
};

createBoxes();
