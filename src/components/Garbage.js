import React from 'react'

export default function Garbage({
    id,
    className,
    draggable,
    dragStart,
    children
}) {

    const dragStart = (e) => {
        const target = e.target;
        e.dataTransfer.setData('waste_id', target.id);

        setTimeout(() => {
            target.style.display = "none";
        }, 0)
    }
    return (
        <div>

        </div>
    )
}
