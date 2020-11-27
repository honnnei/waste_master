import React, { useEffect } from 'react'

export default function Bin({
    id,
    className,
    drop,
    dragOver,
    children
}) {

    const drop = (e) => {
        e.preventDefault();
        // const waste_id = e.dataTransfer.getData('waste_id');

        // const waste = document.getElementById(waste_id);
        // waste.style.display = "block";
        console.log('dropper');
        // e.target.appendChild(waste);
    }

    const dragOver = (e) => {
        e.preventDefault();
    }


    // const happen = () => {
    //     console.log('hey');
    // }

    // useEffect(() => {
    //     const bin = document.getElementById("bin");

    //     bin.addEventListener("drop", happen);

    //     return () => {
    //         document.body.removeEventListener("drop", happen);
    //     }
    // }, [])

    return (
        <div
            id={id}
            className={className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            {/* {children} */}
        </div>
    )
}
