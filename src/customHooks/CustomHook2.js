import useRandomColor from './useRandomColor'

export default function CustomHook2() {

    const { color, changeColor } = useRandomColor();

    return (
        <div style={{width: '100vw', height: '100vh', backgroundColor: '#' + color}}>
            <button onClick={changeColor}>
                Change Color
            </button>
        </div>
    )
}