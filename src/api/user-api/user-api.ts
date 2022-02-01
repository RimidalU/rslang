/* eslint-disable arrow-body-style */
import { CreateInterface } from '../../interfaces/create-interface';
import { UserInterface } from '../../interfaces/user-interface';

const userURL = 'https://rslang-learn.herokuapp.com/users';
export const createUser = async (body: CreateInterface) => {
  const resp: Response = await fetch(`${userURL}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return resp.json();
};
export const getUser = async (id: string) => {
  const response: UserInterface = await (await fetch(`${userURL}/${id}`)).json();
  return response;
};
