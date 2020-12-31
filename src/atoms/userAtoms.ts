import {atom} from "recoil";

export const loginState = atom({
  key: 'loggedIn', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const usernameState = atom({
  key: 'username',
  default: ""
})