/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
/* eslint-disable no-console */
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
  const response:UserInterface = await (await fetch(`${userURL}/${id}`)).json();
  return response;
};
console.log(getUser('61f9917e5505dd0016afcc61'));
console.log(createUser({
  "name": "A",
  "email": "pachan7495610@gmai.com",
  "password": "321321321",
}));
