import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducer/cart";

export default function ProductCard(props) {
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(addItem(props))
    };
  return (
    <div className="card m-2" style={{ width: 300 }}>
      <div className="mt-2">
        <img
          src={props.image_url}
          height="150"
          width="180"
          alt={props.name}
          className="border-radius-9"
        />
      </div>
      <h5 className="card-title mt-2">{props.name}</h5>
      <h6 className="mt-2">Price : {`Rs ${props.price}`}</h6>
      <h6 className="mt-2">Description : {props.description}</h6>
      <div>
        <button className="btn btn-success m-2" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
