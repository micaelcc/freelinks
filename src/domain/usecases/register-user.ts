type UserModel = {
  name: string;
  nickname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

type User = UserModel & {
  id: string;
};

interface IRegisterUser {
  execute(data: UserModel): Promise<User>;
}

export { IRegisterUser, UserModel, User };