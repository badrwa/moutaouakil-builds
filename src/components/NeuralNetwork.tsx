import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  pulse: number;
}

const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes: Node[] = [];
    const nodeCount = 50;
    let frame = 0;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = node.x - nodes[j].x;
        const dy = node.y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150 && Math.random() < 0.3) {
          node.connections.push(j);
        }
      }
    });

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      frame++;

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.05;

        // Boundary wrapping
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;

        // Draw node
        const pulseSize = 2 + Math.sin(node.pulse) * 2;
        const hue = (frame + i * 30) % 360;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 70%, 60%, 0.8)`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 70%, 60%, 0.2)`;
        ctx.fill();

        // Draw connections
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          const dx = connectedNode.x - node.x;
          const dy = connectedNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const pulse = Math.sin(frame * 0.1 + i * 0.5) * 0.5 + 0.5;
            const opacity = (1 - distance / 200) * 0.5 * pulse;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.strokeStyle = `hsla(${(hue + 60) % 360}, 60%, 50%, ${opacity})`;
            ctx.lineWidth = 1 + pulse;
            ctx.stroke();

            // Energy particles along connections
            if (Math.random() < 0.1) {
              const t = Math.random();
              const particleX = node.x + dx * t;
              const particleY = node.y + dy * t;
              
              ctx.beginPath();
              ctx.arc(particleX, particleY, 1, 0, Math.PI * 2);
              ctx.fillStyle = `hsla(${hue + 120}, 80%, 70%, 1)`;
              ctx.fill();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-4 opacity-25"
      style={{ background: 'transparent' }}
    />
  );
};

export default NeuralNetwork;