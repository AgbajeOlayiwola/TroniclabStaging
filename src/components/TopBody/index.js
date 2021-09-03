import Particles from './dots.js';
import './index.css'
import ReactTypingEffect from 'react-typing-effect';

export default function Body() {
    return (
        <div className="body" >
        <Particles/>
        <div className='bodyStuff'>
        <ReactTypingEffect
      text={[ 'Professional 3D Printing Services', "A Start-Up Friendly Manufacturer", 'Prototypes Built With Purpose']}
      cursorRenderer={cursor => <h1>{cursor}</h1>}
      displayTextRenderer={(text, i) => {
        return (
          <h2>
            {text.split('').map((char, i) => {
              const key = `${i}`;
              return (
                <span
                  key={key}
                  className='topView_TypeText'
                >{char}</span>
              );
            })}
          </h2>
        );
      }}        
    />
    </div>
        </div>
    )
}
