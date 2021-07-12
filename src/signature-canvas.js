import React, {useState, useRef} from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function RNSignatureCanvas() {
    const[exportedSignatureURL,setExportedSignatureURL] = useState(null);
    
    let sigPad = useRef();
    
    function clear () {
        sigPad.clear();
    };

    function exportSignature () {
        setExportedSignatureURL ( sigPad.toDataURL('svg') );
        clear();
    };

    function showData () {
        console.log(sigPad.toData())
    }
    
    return (
        <div>
            <div>
                <SignatureCanvas ref={ (ref) => {sigPad = ref}}
                backgroundColor='rgba(153,204, 255,1)'
                penColor='rgba(0,0,153,1)'
                canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} />
            </div>
            <div>
                <button onClick={clear}>Clear</button>
                <button onClick={exportSignature}>Export</button>
                <button onClick={showData}>Console.log(data)</button>
            </div>
            {exportedSignatureURL
            ? <img src={exportedSignatureURL} alt="Your signature" />
            : null}
        </div>
    )
}
