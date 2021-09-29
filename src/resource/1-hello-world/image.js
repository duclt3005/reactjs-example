import React from 'react'
import ReactDOM from 'react-dom'
import image_html from '../../assets/images/html_logo.png';
import image_css from '../../assets/images/css_logo.png';
import image_react from '../../assets/images/react_logo.png';

console.log(1);
let styles = {
    display: 'flex',
    justifyContent: 'space-evenly'
}
let styleImg = {
    width: '200px'
}

function Image()
{
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Front end development</h1>
            <div style={styles}>
                <img src={image_html} alt="" style={styleImg}/>
                <img src={image_css} alt=""style={styleImg}/>
                <img src={image_react} alt="" style={styleImg}/>
                <img src={image_html} alt="" style={styleImg}/>
                {/* {imgRender} */}
            </div>
        </div>
    );
}


function App() {
    return (
        <div className="App">
            <Image />
        </div>
    );
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

export default App;