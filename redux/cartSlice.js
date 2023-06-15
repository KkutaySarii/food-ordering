import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += action.payload.quantity;
      state.total += action.payload.price;
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    plusProduct: (state, action) => {
      state.products.map((product) => {
        if (product._id === action.payload.id) {
          product.quantity += action.payload.quantity;
        }
      });
      state.quantity += action.payload.quantity;
      state.total += action.payload.price;
    },
    minusProduct: (state, action) => {
      state.products.map((product) => {
        if (product._id === action.payload.id) {
          product.quantity -= action.payload.quantity;
        }
      });
      state.quantity -= action.payload.quantity;
      state.total -= action.payload.price;
    },
    deleteProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product._id !== action.payload.id
      );
      state.products.splice(index, 1);
      state.quantity--;
      state.total -= action.payload.price;
    },
  },
});

export const {
  addProduct,
  resetCart,
  plusProduct,
  minusProduct,
  deleteProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
