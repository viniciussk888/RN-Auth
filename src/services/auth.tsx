interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'dasdasd-dasdasd-sdasda-sdasdsda',
        user: {
          name: 'Alberto vinicius',
          email: 'vinicius.cross07@gmail.com',
        },
      });
    }, 2000);
  });
}
