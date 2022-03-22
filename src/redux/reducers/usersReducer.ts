import actionsTypes from "../actions/actionsTypes";
import {
  Action,
  LoginUserActionInterface,
  RegisterUserActionInterface,
} from "../../interfaces/Action";
import { User, RegisterUser } from "../../interfaces/User";

const usersReducer = (currentState = {}, action: Action = { type: "" }) => {
  let newUser: User | RegisterUser | {};

  switch (action.type) {
    case actionsTypes.registerUser:
      newUser = { ...(action as RegisterUserActionInterface).user };
      break;
    case actionsTypes.loginUser:
      newUser = { ...(action as LoginUserActionInterface).user };
      break;
    case actionsTypes.logout:
      newUser = {};
      break;
    default:
      newUser = { ...currentState };
      break;
  }
  return newUser;
};

export default usersReducer;
