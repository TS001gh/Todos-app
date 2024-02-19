import Button from "./ui/Button";
// import axiosInstance from '../config/axios.config';
// import { useQuery } from '@tanstack/react-query';
import useAuthenticatedQuery from "../hooks/useAuthenticatedQuery";
import Modal from "./ui/Modal";
import Input from "./ui/Input";
import { useState } from "react";

interface ITodo {
  id: number;
  title: string;
  createdAt?: string;
  publishedAt: string;
  updatedAt: string;
}

const TodoList = () => {
  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { isLoading, data } = useAuthenticatedQuery({
    queryKey: ["todos"],
    url: "/users/me?populate=todos",
    config: {
      headers: {
        Authorization: `Bearer ${userData.jwt}`,
      },
    },
  });

  // Handlers
  const onToggleEditModal = () => {
    setIsEditModalOpen((prev) => !prev);
  };

  // // Renders
  const todosRenders = data?.todos?.length ? (
    data.todos?.map((todo: ITodo) => {
      return (
        <div
          key={todo.id}
          className="flex items-center justify-between hover:bg-gray-100 duration-300 p-3 rounded-md even:bg-gray-100"
        >
          <p className="w-full font-semibold">{todo.title}</p>
          <div className="flex items-center justify-end w-full space-x-3">
            <Button size={"sm"} onClick={onToggleEditModal}>
              Edit
            </Button>
            <Button variant={"danger"} size={"sm"}>
              Remove
            </Button>
          </div>
        </div>
      );
    })
  ) : (
    <h3 className="text-xl capitalize text-center animate-fadeIn">
      No todos yet !
    </h3>
  );

  return (
    <div className="space-y-1">
      {isLoading ? (
        <h3 className="text-2xl capitalize animate-pulse">Loading</h3>
      ) : (
        todosRenders
      )}
      {/* Edit todo Modal */}
      <Modal
        isOpen={isEditModalOpen}
        closeModal={onToggleEditModal}
        title="Edit Todo"
      >
        <Input value="Edit Todo" />
        <section className="flex items-center space-x-3 mt-3">
          <Button size={"sm"}>Edit</Button>
          <Button variant={"cancel"} size={"sm"} onClick={onToggleEditModal}>
            cancel
          </Button>
        </section>
      </Modal>
    </div>
  );
};

export default TodoList;
