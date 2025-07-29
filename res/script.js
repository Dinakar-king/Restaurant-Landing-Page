
const modal = document.getElementById('reservationModal');
const btn = document.getElementById('bookBtn');
const close = document.getElementById('closeModal');
const form = modal.querySelector('form');
const menuLink = document.getElementById('menuLink');
const menuSection = document.getElementById('menuSection');

btn.onclick = () => modal.style.display = 'flex';
close.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

form.onsubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const guests = document.getElementById('guests').value;

  if (name && date && time && guests) {
    alert(`✅ ${name}, you have successfully booked a table on ${date} at ${time} for ${guests} guest(s).`);
    modal.style.display = 'none';
    form.reset();
  } else {
    alert('❌ Please fill in all the fields.');
  }
};

menuLink.addEventListener('click', (e) => {
  e.preventDefault();
  menuSection.style.display = 'block';
  menuSection.scrollIntoView({ behavior: 'smooth' });
});

const menuData = {
  starters: [
    { name: "Crispy Spring Rolls", price: "$5", img: "https://source.unsplash.com/200x150/?spring-roll" },
    { name: "Garlic Bread", price: "$4", img: "https://source.unsplash.com/200x150/?garlic-bread" },
    { name: "Bruschetta", price: "$6", img: "https://source.unsplash.com/200x150/?bruschetta" },
  ],
  beverages: [
    { name: "Lemonade", price: "$3", img: "https://source.unsplash.com/200x150/?lemonade" },
    { name: "Cold Coffee", price: "$4", img: "https://source.unsplash.com/200x150/?cold-coffee" },
    { name: "Fruit Punch", price: "$4.5", img: "https://source.unsplash.com/200x150/?fruit-juice" },
  ],
  desserts: [
    { name: "Cheesecake", price: "$5", img: "https://source.unsplash.com/200x150/?cheesecake" },
    { name: "Chocolate Lava Cake", price: "$6", img: "https://source.unsplash.com/200x150/?lava-cake" },
    { name: "Tiramisu", price: "$7", img: "https://source.unsplash.com/200x150/?tiramisu" },
  ],
  icecreams: [
    { name: "Vanilla Scoop", price: "$3", img: "https://source.unsplash.com/200x150/?vanilla-icecream" },
    { name: "Chocolate Cone", price: "$3.5", img: "https://source.unsplash.com/200x150/?chocolate-icecream" },
    { name: "Mango Sundae", price: "$4", img: "https://source.unsplash.com/200x150/?mango-icecream" },
  ]
};

const grid = document.getElementById("menuItems");

function showCategory(category) {
  grid.classList.remove("show");
  grid.innerHTML = "";
  setTimeout(() => {
    menuData[category].forEach(item => {
      const div = document.createElement("div");
      div.className = "menu-card";
      div.innerHTML = `
        <img src="${item.img}" alt="${item.name}" />
        <h4>${item.name}</h4>
        <p>${item.price}</p>
      `;
      grid.appendChild(div);
    });
    grid.classList.add("show");
  }, 100);
}

document.querySelectorAll(".tabBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");
    showCategory(category);
  });
});

/* script.js */
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("reservationModal");
  const bookBtn = document.getElementById("bookBtn");
  const closeModal = document.getElementById("closeModal");

  if (bookBtn && modal && closeModal) {
    bookBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  const tabButtons = document.querySelectorAll(".tabBtn");
  const menuItems = document.getElementById("menuItems");

  const dummyData = {
    starters: ["Garlic Bread", "Tomato Soup", "Spring Rolls"],
    beverages: ["Lemonade", "Orange Juice", "Coffee"],
    desserts: ["Brownie", "Cheesecake", "Ice Cream Sundae"],
    icecreams: ["Vanilla", "Chocolate", "Strawberry"]
  };

  if (tabButtons && menuItems) {
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        const items = dummyData[category] || [];
        menuItems.innerHTML = items.map(item => `<div class="menu-card">${item}</div>`).join("");
      });
    });
  }
});
