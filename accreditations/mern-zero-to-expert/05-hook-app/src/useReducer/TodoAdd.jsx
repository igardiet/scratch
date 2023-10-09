import { useForm } from '../hooks/useForm';


export const TodoAdd = ( { onNewTodo } ) =>
{
    const { description, onInputChange, onResetForm } = useForm( { description: '' } );
    const onFormSubmit = ( event ) =>
    {
        event.preventDefault();
        if ( description.length <= 1 ) return;

        const newTodo =
        {
            id: new Date().getTime(),
            done: false,
            description
        };

        onNewTodo( newTodo );
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="What is there to do ?"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary
                 mt-1"
            >Add</button>
        </form>
    );
};