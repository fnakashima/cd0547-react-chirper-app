import { type } from "@testing-library/user-event/dist/type";

export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
