import React from 'react'

export default function Waste({ position, size }) {
    const { width, height } = size;
    return (
        <div
            id="waste"
            style={{
                position: 'absolute',
                border: '1px solid black',
                top: position.y,
                left: position.x,
                zIndex: 100,
                width: 200,
                height: 200,
                backgroundColor: 'light pink',
            }}
        >
            <img src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" height="100" width="auto" id="handle" alt="hanna face" />
        </div>
    )
}
