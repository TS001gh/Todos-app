import TodoList from '../components/TodoList';

const HomePage = () => {
  return (
    <section className="mx-auto py-5 px-2 min-h-[50vh] bg-indigo-100 rounded-lg">
      <TodoList />
    </section>
  );
};

export default HomePage;
