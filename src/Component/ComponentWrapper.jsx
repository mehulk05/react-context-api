import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Component1 from './Component1';
import Component2 from './Component2';
function ComponentWrapper() {
    return (
        <div>
            <h3>Wrpper</h3>
            <Routes>
        <Route path="/" element={<Component1 />} />
        <Route path="about" element={<Component2 />} />
      </Routes>
        </div>
    )
}

export default ComponentWrapper
