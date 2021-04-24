import {
  MdCheckBoxOutlineBlank as MdCheckBoxOutlineBlankIcon,
  MdCheckBox as MdCheckBoxIcon,
  MdRemoveCircleOutline as MdRemoveCircleOutlineIcon,
} from "react-icons/md";
import cn from "classnames";
import React from "react";

import "./TodoItem.scss";

const TodoItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoItem-virtualized" style={style}>
      <div className="TodoItem">
        <div
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBoxIcon /> : <MdCheckBoxOutlineBlankIcon />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutlineIcon />
        </div>
      </div>
    </div>
  );
};

export default React.memo(
  TodoItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo,
);
