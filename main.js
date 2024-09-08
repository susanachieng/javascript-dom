document.addEventListener("DOMContentLoaded", () => {
  const Item = document.querySelectorAll(" .Item");
  Item.forEach((item) => {
    const decreaseButton = item.querySelector(" .decrease");
    const increaseButton = item.querySelector(" .increase");
    const deleteButton = item.querySelector(" .Delete");
    const likeButton = item.querySelector(" .like");
    const quantitySpan = item.querySelector(" .item-quantity");
    const priceSpan = item.querySelector(" .item-price");

    const updateTotalPrice = () => {
      let total = 0;
      document.querySelectorAll(" .Item").forEach((Item) => {
        const price = parseFloat(
          Item.querySelector(". item-price").textContent
        );
        total += price * quantity;
      });
      document.getElementById("total-price").textContent = `$${total.toFixed(
        2
      )}`;
    };
    increaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantitySpan.textcontent);
      quantity++;
      quantitySpan.textContent = quantity;
      updateTotalPrice();
    });

    decreaseButton.addEventListener("click", () => {
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 1) {
        quantity--;
        quantitySpan.textContent = quantity;
        updateTotalPrice();
      }
    });

    deleteButton.addEventListener("click", () => {
      Item.remove();
      updateTotalPrice();
    });
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("liked");
    });
  });
});
