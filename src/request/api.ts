import { ITodo } from "../components/typings";


export type apiKeyType = "/list" | "/add" | "/delete"

export interface apiKeyDataType {
  "/list": {
    code: number;
    data: {
      todoList: ITodo[]
    }
  },
  "/add": {
    code: number
  }
}

// export type responseDataType = apiKeyDataType[apiKeyType]