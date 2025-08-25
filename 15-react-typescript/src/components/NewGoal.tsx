import { FormEvent, type FC } from "react";
import { useRef } from "react";

interface NewGoalProps {
    onAdd: (text: string, summary: string) => void;
}


const NewGoal: FC<NewGoalProps> = ({ onAdd }) => {
    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const enteredGoal = goalRef.current!.value;
        const enteredSummary = summaryRef.current!.value;

        onAdd(enteredGoal, enteredSummary);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal </label>
                <input id="goal" type="text" ref={goalRef} />
            </p>
            <p>
                <label htmlFor="goal">Short summary </label>
                <input id="summary" type="text" ref={summaryRef} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}

export default NewGoal;