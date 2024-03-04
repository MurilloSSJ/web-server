interface FormsComponentProps {
    children: React.ReactNode;
    onSubmit: any;
    gapX?: number;
    gapY?: number;
}

export const FormComponent = ({ children, onSubmit, gapX, gapY }: FormsComponentProps) => {
    return (
        <form onSubmit={onSubmit} style={{
            columnGap: `${gapX ? gapX : 0}px`,
            rowGap: `${gapY ? gapY : 0}px`,
        }}>
            {children}
        </form>
    )
}