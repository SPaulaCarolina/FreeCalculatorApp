import '../stylesheets/Clear.css';

const Clear = (props) => (
    <div className='clear-button' onClick={props.handleReset}>
        {props.children}
    </div>
);

export default Clear;