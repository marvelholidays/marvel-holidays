import React, { useState, useRef } from 'react';
import './DraggableWhatsApp.css';

export default function DraggableWhatsApp() {
  const [position, setPosition] = useState({ x: 25, y: 25 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  // Handle Mouse / Touch Start
  const handleStart = (clientX, clientY) => {
    setIsDragging(true);
    hasMoved.current = false;
    dragStart.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const onMouseDown = (e) => {
    if (e.button !== 0) return; // Only left click
    handleStart(e.clientX, e.clientY);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onTouchStart = (e) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
  };

  // Handle Dragging
  const handleMove = (clientX, clientY) => {
    hasMoved.current = true;
    const newX = clientX - dragStart.current.x;
    const newY = clientY - dragStart.current.y;

    // Keep widget within screen bounds
    const maxX = window.innerWidth - 160;
    const maxY = window.innerHeight - 60;

    setPosition({
      x: Math.min(Math.max(10, newX), maxX),
      y: Math.min(Math.max(10, newY), maxY),
    });
  };

  const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
  const onTouchMove = (e) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
  };

  // Handle Drop
  const onMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
  };

  // Prevent link click if dragged
  const handleClick = (e) => {
    if (hasMoved.current) {
      e.preventDefault();
    }
  };

  return (
    <a
      ref={dragRef}
      href="https://wa.me/917824887999?text=Hi%20Marvel%20Holidays,%20I'd%20like%20to%20plan%20a%20trip!"
      target="_blank"
      rel="noopener noreferrer"
      className={`draggable-whatsapp-btn ${isDragging ? 'dragging' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onClick={handleClick}
      title="Drag me anywhere or click to chat!"
    >
      💬 Chat with Us
    </a>
  );
}