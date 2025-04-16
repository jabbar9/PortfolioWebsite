import { useState, useEffect } from 'react';

interface MousePosition {
  x: number | null;
  y: number | null;
}

/**
 * Hook to track mouse position in the window
 * @returns Current mouse x and y coordinates
 */
export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: null,
    y: null
  });
  
  useEffect(() => {
    // Handler to update mouse position
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    // Add event listener
    window.addEventListener('mousemove', updateMousePosition);
    
    // Clean up
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  
  return mousePosition;
}

/**
 * Hook to track mouse position relative to an element
 * @param ref React ref object for the element
 * @returns Mouse position relative to the element (0,0 is top-left corner)
 */
export function useRelativeMousePosition(ref: React.RefObject<HTMLElement>): MousePosition {
  const [relativePosition, setRelativePosition] = useState<MousePosition>({
    x: null,
    y: null
  });
  
  useEffect(() => {
    if (!ref.current) return;
    
    // Handler to update relative mouse position
    const updatePosition = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      setRelativePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    // Add event listener
    ref.current.addEventListener('mousemove', updatePosition);
    
    // Clean up
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousemove', updatePosition);
      }
    };
  }, [ref]);
  
  return relativePosition;
}
