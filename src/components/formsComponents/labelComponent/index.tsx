interface LabelComponentProps {
    text: string;
    htmlFor: string;
}

export const LabelComponent = ({ htmlFor, text }: LabelComponentProps) => {
    return (
        <label htmlFor={htmlFor}>{text}</label>
    )
}