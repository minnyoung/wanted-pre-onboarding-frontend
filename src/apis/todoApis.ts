import { BASE_URL } from "./const";

// todo create
export async function fetchCreateTodo(
  userToken: string | null,
  userTodo: string
) {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: `${userTodo}`,
      }),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse.statusCode;
    }
    return response.json();
  } catch (error) {
    if (error === 400) {
      return {
        error,
        message: "할일을 입력해주세요.",
      };
    } else {
      return { error, message: "할일을 등록하는 도중 에러가 발생했습니다." };
    }
  }
}

// todo read
export async function fetchReadTodoList(userToken: string | null) {
  try {
    const response = await fetch(`${BASE_URL}/todos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse.statusCode;
    }

    const fetchedData = await response.json();
    return fetchedData;
  } catch (error) {
    return { error, message: "할일을 불러오는 도중 에러가 발생했습니다." };
  }
}

// todo update
export async function fetchUpdateTodo(
  userToken: string | null,
  id: number,
  editTodo: string,
  isCompleted: boolean
) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        todo: editTodo,
        isCompleted: isCompleted,
      }),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse.statusCode;
    }
    const fetchedData = await response.json();
    return fetchedData;
  } catch (error) {
    return { error, message: "할일을 수정하는 도중 에러가 발생했습니다." };
  }
}

// todo delete
export async function fetchDeleteTodo(userToken: string | null, id: number) {
  try {
    const response = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    if (!response.ok) {
      throw new Error();
    }
    return { message: "" };
  } catch (error) {
    return { error, message: "할일을 삭제하는 도중 에러가 발생했습니다." };
  }
}
