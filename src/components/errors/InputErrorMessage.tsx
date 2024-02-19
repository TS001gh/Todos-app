interface IProps {
  msg?: string;
}

const InputErrorMessage = ({ msg }: IProps) => {
  return msg ? (
    <span className="block text-rose-700 font-semibold text-sm ml-2 -translate-y-3 animate-fadeIn">
      {msg}
    </span>
  ) : null;
};

export default InputErrorMessage;
