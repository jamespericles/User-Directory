import React, { Component } from "react";
import CardBtn from "../CardBtn";
import "./style.css";
import API from "../../utils/API";

class User extends Component {
  state = {
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
}

function Card(props) {
  return API.getRandomUser().then((res) =>
    this.setState({
      image: res.data.picture.thumbnail,
      firstName: res.data.name.first,
      lastName: res.data.name.last,
      email: res.data.email,
      phone: res.data.phone,
    })
  );
}
export default Card;
