import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  containerId?: string;
  containerStyle?: React.CSSProperties;
}

export const Portal: React.FC<PortalProps> = ({ 
  children, 
  containerId = 'portal-root',
  containerStyle = {}
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    let portalContainer = document.getElementById(containerId);
    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.id = containerId;
      Object.assign(portalContainer.style, containerStyle);
      document.body.appendChild(portalContainer);
    } else {
      Object.assign(portalContainer.style, containerStyle);
    }

    return () => {
      const container = document.getElementById(containerId);
      if (container && container.childNodes.length === 0) {
        document.body.removeChild(container);
      }
    };
  }, [containerId, containerStyle]);

  return mounted ? createPortal(
    children,
    document.getElementById(containerId) || document.body
  ) : null;
}; 