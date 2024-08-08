import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.totalPrice += newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem && quantity > 0) {
        const quantityDifference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
        state.totalQuantity += quantityDifference;
        state.totalPrice += existingItem.price * quantityDifference;
      }
    },
  incrementQuantity(state, action) {
    const id = action.payload;
    const existingItem = state.items.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice += existingItem.price;
      state.totalQuantity++;
      state.totalPrice += existingItem.price;
    }
  },
  decrementQuantity(state, action) {
    const id = action.payload;
    const existingItem = state.items.find(item => item.id === id);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
      existingItem.totalPrice -= existingItem.price;
      state.totalQuantity--;
      state.totalPrice -= existingItem.price;
    }
  },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;

