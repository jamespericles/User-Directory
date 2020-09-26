import axios from "axios";

export default {
  getRandomUser: function () {
    return axios.get("https://randomuser.me/api/?inc=name/email/phone/picture");
  },
};