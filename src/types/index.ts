export type TPost = {
  id: string;
  content: string;
}

export type TPosts = {
  posts: TPost[]
}

export type TPostFunctions =  {
  onDeletePost?: () => void;
  onEditPost?: (content: string) => void;
}

export type ParamTypes = {
  id: string;
}

export type ContextProps = {
  posts: TPost[],
  addNewPost: (payload:TPost) => void,
  editPost: (id:string, content: string) => void,
  deletePost: (id:string) => void
}

