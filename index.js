let foodContainer = document.querySelector(".food-container");

const fooditem = [
	{
		FoodName: "Cheese paratha",
		foodimg: "images/b1.jpg",
		price: "RS 250",
		type: "Breakfast",
		des: "These cheese flatbreads make for a wholesome breakfast or brunch. There are many many varieties of paratha made and this is one such tasty paratha which the kids are going to love.",
	},
	{
		FoodName: "Aloo Paratha",
		foodimg: "images/b2.jpg",
		price: "RS 200",
		type: "Breakfast",
		des: "Aloo Paratha is a bread dish originating from the Indian subcontinent. It is a breakfast dish originated from the Punjab region.",
	},
	{
		FoodName: "Egg Paratha",
		foodimg: "images/b3.jpg",
		price: "RS 150",
		type: "Breakfast",
		des: "Egg paratha recipe — easy breakfast, brunch or dinner recipe that is protein rich, healthy and tasty. Egg paratha is a kids' favorite, so i make it often for their after school snack. To make egg paratha, you can use ready paratha, roti or frozen paratha as well.",
	},
	{
		FoodName: "Daal Chawal",
		foodimg: "images/l1.jpg",
		price: "RS 400",
		type: "Lunch",
		des: "The most fascinating, fabulously fantastic and simple lightweight Pakistan’s most favorite dish, Daal Chawal Recipe (Daal Rice) is here at Sooperchef.pk. It’s simple, fast and delicious Pakistani Recipe.",
	},
	{
		FoodName: "Pakal Paneer",
		foodimg: "images/l2.jpg",
		price: "RS 400",
		type: "Lunch",
		des: "Palak Paneer is a popular Indian dish of Indian cottage cheese cubes in a mild, spiced smooth spinach sauce. This delicious creamy dish is made with fresh spinach leaves, paneer (firm cottage cheese), onions, tomatoes, herbs and spices.",
	},
	{
		FoodName: "Aloo Ghobi",
		foodimg: "images/l3.jpg",
		price: "RS 200",
		type: "Lunch",
		des: "Aloo Gobi ki Sabzi is a classic Pakistani dish of Potatoes and Cauliflower cooked in savory spices and garnished with chillies and cilantro.",
	},
	{
		FoodName: "Aloo Goshat",
		foodimg: "images/l4.jpg",
		price: "RS 200",
		type: "Lunch",
		des: "Aloo Gosht is a spicy, thick and creamy meat gravy that originates from Pakistani and North Indian cuisine.This gravy has potatoes cooked with lamb or mutton in a thick stew.",
	},

	{
		FoodName: "Banana Shakes",
		foodimg: "images/s1.jpg",
		price: "RS 150",
		type: "Shakes",
		des: "You need less than five minutes to make this easy banana smoothie. Use our simple recipe on it’s own or use it as a base for other smoothies.",
	},
	{
		FoodName: "Mango Shakes",
		foodimg: "images/s2.jpg",
		price: "RS 150",
		type: "Shakes",
		des: "Mango shake is a cool and tempting fruit drink prepared by simply blending ripe mango pieces, milk and sugar. To keep things simple and easy, this recipe primarily explains how to make mango shake with milk.",
	},

	{
		FoodName: "Biryani",
		foodimg: "images/d1.jpg",
		price: "RS 600",
		type: "Dinner",
		des: "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat, and sometimes, in addition, eggs and/or vegetables such as potatoes in certain regional varieties.",
	},
	{
		FoodName: "Korma",
		foodimg: "images/d2.jpg",
		price: "RS 250",
		type: "Dinner",
		des: "Korma is a gravy dish that is usually made with yogurt, lots of nuts and spices. A Mughal era original, Chicken Korma is the perfect dinner party dish that is easy, quick and a no fuss recipe.",
	},
];

const food = fooditem.map((items) => {
	const menuItems = `<div class=" col-md-6 food-box ${items.type}">
            <!-- content div -->
            <div class="content my-2">
                <!-- image -->
                <div class="image">
                    <img src="${items.foodimg}" alt="">
                </div>
                <div class="htpd my-2">
                    <!-- header -->
                    <div class="header">
                        <!-- title -->
                        <span class="title">${items.FoodName}</span>
                        <!-- price -->
                        <span class="price">${items.price}</span>
                    </div>
                    <!-- Description -->
                    <div class="description my-3 ">
                        <p>${items.des}</p>
                    </div>
                </div>
            </div>
        </div>`;
	foodContainer.innerHTML += menuItems;
});

const foodKaDabba = document.querySelectorAll(".food-box");
const menuList = document.querySelectorAll("ul > li");

// iterating over the menu ul
menuList.forEach((m) => {
	// click function on menu
	m.addEventListener("click", (e) => {
		console.log(e.target.innerHTML);
		// iterating over foodbox
		foodKaDabba.forEach((box) => {
			// adding class display none
			box.classList.add("d-none");
			// if clicked on All will display all menu
			if (e.target.innerHTML === "All") {
				//  will remove display none property
				box.classList.remove("d-none");
			}
			// if clicked on breakfast will display breakfast taking the type from foodbox class list
			else if (e.target.innerHTML === "Breakfast") {
				//  will check for the classlist if it has breakfast
				if (box.classList.contains("Breakfast")) {
					// if it has the required class then will remove display none property
					box.classList.remove("d-none");
				}
			}
			// if clicked on lunch will display breakfast taking the type from foodbox class list
			else if (e.target.innerHTML === "Lunch") {
				//  will check for the classlist if it has lunch
				if (box.classList.contains("Lunch")) {
					// if it has the required class then will remove display none property
					box.classList.remove("d-none");
				}
			}
			// if clicked on shakes will display breakfast taking the type from foodbox class list
			else if (e.target.innerHTML === "Shakes") {
				//  will check for the classlist if it has shakes
				if (box.classList.contains("Shakes")) {
					// if it has the required class then will remove display none property
					box.classList.remove("d-none");
				}
			}
			// if clicked on dinner will display breakfast taking the type from foodbox class list
			else if (e.target.innerHTML === "Dinner") {
				//  will check for the classlist if it has dinner
				if (box.classList.contains("Dinner")) {
					// if it has the required class then will remove display none property
					box.classList.remove("d-none");
				}
			}
		});
	});
});
