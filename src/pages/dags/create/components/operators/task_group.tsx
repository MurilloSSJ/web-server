
export const TaskGroup = ({ id, width, height }) => {
    return (
        <div className="border-black border-dashed border-4 px-2 py-5" style={{ borderColor: "#ff0073", width: width ? width : 300, height: height ? height : 50 }}>
            {id}
        </div>
    )
}
