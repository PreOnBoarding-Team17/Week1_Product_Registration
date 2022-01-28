const handleAddOption = (state, setState) => {
  if (state.length === 0) {
    setState([0]);
    return;
  } else {
    setState((option) => [...option, state[state.length - 1] + 1]);
  }
};

const handleDeleteOption = (setState) => {
  setState((option) => option.slice(0, option.length - 1));
};

export { handleAddOption, handleDeleteOption };
