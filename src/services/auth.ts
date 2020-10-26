interface AuthResponse {
  token: string;
  user: {
    username: string;
    permission: number;
  }
}

export function signInService(): Promise<AuthResponse> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '1iu234uijsdhuf2io34',
        user: {
          username: 'adm',
          permission: 0,
        }
      })
    }, 2000)
  })
}
