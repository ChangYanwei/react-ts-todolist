import React from "react";
import { ACTION_TYPES, ITodo } from "../../components/typings";

export const saveTodo = (payload: ITodo[]) => ({ type: ACTION_TYPES.SAVE_TODO, payload });
