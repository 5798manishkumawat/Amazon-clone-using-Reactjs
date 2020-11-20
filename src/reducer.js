export const initialState = {
	cart: [],
	user: null,
};

export const getBasketTotal = (Cart) => {
	return Cart?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				cart: [...state.cart, action.item],
			};
		case "EMPTY_CART":
			return {
				...state,
				cart: [],
			};
		case "REMOVE_FROM_CART":
			const index = state.cart.findIndex(
				(cartItem) => cartItem.id === action.id
			);
			let newCart = [...state.cart];

			if (index >= 0) {
				newCart.splice(index, 1);
			} else {
				alert(`Cant remove item (id: ${action.id}) as its not in cart!!`);
			}

			return {
				...state,
				cart: newCart,
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default reducer;
