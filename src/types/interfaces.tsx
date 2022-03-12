export interface Comment {
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface User {
  name: string,
  username: string,
  email: string,
}

export interface Post {
  title: string,
  body: string,
  user: User | null,
  comments:Comment[] | null,
}