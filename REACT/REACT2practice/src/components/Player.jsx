import './Player.css'

export default function Player({player, letter}){
    return(
        <form className='form'>
            <input type='text' value={player} />
            <p className='letter'>{letter}</p>
            <button type='submit' className='save'>Save</button>
        </form>
    )
}