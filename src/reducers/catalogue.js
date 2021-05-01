import {
  circleImage,
  rectangleImage,
  triangleImage,
} from "../assets/catalogueImages";

const initialState = {
  catalogue: [
    {
      id: 0,
      description: "circleDescription",
      image: circleImage,
      name: "circle",
      price: 999,
    },
    {
      id: 1,
      description: "rectangleDescription",
      image: rectangleImage,
      name: "rectangle",
      price: 899,
    },
    {
      id: 3,
      description: "triangleDescription",
      image: triangleImage,
      name: "triangle",
      price: 1099,
    },
  ],
};

const catalogueReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const catalogueSelectors = {
  getCatalogue: (state = initialState) => state.catalogue,
};

export default catalogueReducer;
