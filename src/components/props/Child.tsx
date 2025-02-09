interface ChildProps {
    color: string
    onClick: () => void
    children: React.ReactNode
}

export const Child = ({ color, onClick}: ChildProps) => {
    return (
        <button style={{ backgroundColor: color }} onClick={onClick}>
            Click Me
        </button>
    )
}