import { EDIT_DATA_REQUEST } from "ducks/edit-data/const";

export const editData = ({ name, surname, name_customer, role }, token) => {
  return {
    type: EDIT_DATA_REQUEST,
    payload: {
      name,
      surname,
      name_customer,
      role,
      token,
    },
  };
};
