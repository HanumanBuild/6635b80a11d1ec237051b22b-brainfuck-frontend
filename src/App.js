import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [script, setScript] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');

    const submitScript = async () => {
        try {
            setError('');
            const response = await axios.post(`${process.env.REACT_APP_BRAINFUCK_BACKEND_URL}/execute`, { code: script });
            setOutput(response.data.output);
        } catch (err) {
            setError('Failed to execute script.');
        }
    };

    return (
        <div className="container">
            <h1>Brainfuck Executor</h1>
            <textarea value={script} onChange={(e) => setScript(e.target.value)} rows={10} placeholder="Enter your Brainfuck code here" className="text-area"></textarea>
            <button onClick={submitScript} className="submit-btn">Run</button>
            {output && <div className="output">{output}</div>}
            {error && <div className="error">{error}</div>}
        </div>
    );
}

export default App;