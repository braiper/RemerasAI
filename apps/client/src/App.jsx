import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';

export const App = () => {
  // Estado para controlar el tamaño de la imagen
  const [size, setSize] = useState({ width: 150, height: 150 });
  
  // Estado para manejar la posición en vez de usar transform
  const [position, setPosition] = useState({ left: 0, top: 0 });
  const [isResizing, setIsResizing] = useState(false); // Estado para controlar el redimensionamiento

  const shirtImage = 'https://acdn.mitiendanube.com/stores/614/713/products/remera-trasero-blanco1-955175fb4d25d823c716794958211406-1024-1024.jpg'; // Imagen de una camisa pública
  const generatedImage = 'https://e7.pngegg.com/pngimages/197/693/png-clipart-pokemon-x-and-y-flareon-eevee-pokemon-gold-and-silver-eevee-shiny-leaf-cartoon.png'; // Imagen generada por IA pública


  // Manejo del movimiento para actualizar la posición usando left y top
  const handleDrag = (e, data) => {
    setPosition({
      left: data.x,
      top: data.y,
    });
  };

  return (
    <div className="app">
      <h1>Prueba tu diseño en una camisa</h1>
      <div className="canvas" style={{ position: 'relative', width: '500px', height: '600px', border: '1px solid black' }}>
        {/* Imagen de la camisa */}
        <img src={shirtImage} alt="camisa" style={{ width: '100%', height: '100%' }} />

        {/* Imagen generada por IA */}
        <Draggable
          position={{ x: position.left, y: position.top }} // Usamos left y top en lugar de translate
          onDrag={handleDrag} // Manejamos manualmente el drag
          disabled={isResizing} // Deshabilitar mientras se redimensiona
        >
          <Resizable
            size={size}
            onResizeStart={() => setIsResizing(true)} // Bloquea el movimiento
            onResizeStop={(e, direction, ref, d) => {
              setSize({
                width: size.width + d.width,
                height: size.height + d.height,
              });
              setIsResizing(false); // Desbloquea el movimiento
            }}
            style={{ position: 'absolute', left: position.left, top: position.top }} // Posicionamos manualmente
          >
            <img src={generatedImage} alt="Generado por IA" style={{ width: '100%', height: '100%' }} />
          </Resizable>
        </Draggable>
      </div>
    </div>
  );
};

export default App;