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
      throw new Error(errorResponse.message);
    }
  } catch (error) {
    console.log(error);
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
      throw new Error(errorResponse.message);
    }

    const fetchedData = await response.json();
    return fetchedData;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// todo update
export async function fetchUpdateTodo(
  userToken: string | null,
  id: number,
  editTodo: string,
  isCompleted: boolean
) {
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

  return await response.json();
}

// todo delete
export async function fetchDeleteTodo(token: string | null, id: number) {
  const response = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
