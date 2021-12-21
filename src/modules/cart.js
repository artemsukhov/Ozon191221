const cart = () => {
    const cartBtn = document.getElementById("cart");
    const cartModal = document.querySelector(".cart");
    const cartCloseBtn = cartModal.querySelector(".cart-close");

    const openCart = () => {
        cartModal.style.display = "flex";
    };
    //комментариев нет и не будет, их съел кот
    const closeCart = () => {
        cartModal.style.display = "none";
    };

    cartBtn.addEventListener("click", openCart);
    cartCloseBtn.addEventListener("click", closeCart);
};

export default cart;
