import React, { useRef, useEffect ,useState} from "react";
import { VscEllipsis } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { updateTodo, deleteTodo } from "../Redux/todoSlice";

const ToDoCard = ({ id }) => {
    const dispatch = useDispatch();
    const [showOptions, setShowOptions] = useState(false);
    const todo = useSelector(state => state.todo.todos.find(t => t.id === id));

    const menuRef = useRef(null);

    if (!todo) return null;

    const { text, content, isEditing, isUpdateMode } = todo;

    const handleHeadingChange = (e) => {
        if (text.length < 20) {
            dispatch(updateTodo({ id, text: e.target.value, content, isEditing, isUpdateMode }));
        }
    };

    const handleContentChange = (e) => {
        if (content.length < 100) {
            dispatch(updateTodo({ id, text, content: e.target.value, isEditing, isUpdateMode }));
        }
    };

    const toggleEditMode = () => {
        dispatch(updateTodo({ id, text, content, isEditing: true, isUpdateMode }));
        setShowOptions(false); // Close menu when editing starts
    };

    const handleSave = () => {
        dispatch(updateTodo({ id, text, content, isEditing: false, isUpdateMode: true }));
    };

    const handleDelete = () => {
        dispatch(deleteTodo(id));
    };

    const toggleOptionsMenu = () => {
        setShowOptions((prev) => !prev);
    };
    

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        if (showOptions) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showOptions]);
    return (
        <div className="todocardmain">
            <div className="todocard">
                {/* Card Heading */}
                <div className="todocardmainheading" style={{ position: "relative" }}>
                    <input
                        type="text"
                        value={text}
                        onChange={handleHeadingChange}
                        placeholder="Task Heading"
                        className="task-heading"
                        style={{
                            border: isEditing && isUpdateMode ? "1px solid black" : "none",
                            padding: "0.2rem",
                            borderRadius: "6px",
                        }}
                        disabled={!isEditing}
                    />
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <VscEllipsis
                            color="grey"
                            onClick={toggleOptionsMenu}
                            className="ellipsis-icon"
                        />
                        {showOptions && (
                            <div className="options-menu" ref={menuRef}>
                                {!isEditing && <button onClick={toggleEditMode}>Edit</button>}
                                <button onClick={() =>  dispatch(deleteTodo(id))}>Delete</button>
                            </div>
                        )}

                    </div>
                </div>

                {/* Editable/Non-Editable Textarea */}
                <div className="handletask">
                    <textarea
                        value={content}
                        onChange={handleContentChange}
                        placeholder="Enter tasks here..."
                        rows={8}
                        className={isUpdateMode && isEditing ? "task-textarea2" : "task-textarea1"}
                        disabled={!isEditing}
                    />
                </div>

                {/* Show "Create" initially, then "Update" after first save */}
                <div className="btnTodo">
                    {isEditing && (
                        <button id="todobutton" onClick={handleSave}>
                            {isUpdateMode ? "Update" : "Create"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToDoCard;
