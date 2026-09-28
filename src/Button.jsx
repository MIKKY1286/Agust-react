import butStyle from './Button.module.css'

// export const Button = (props)=> {
//     return (
//         <div>
//             <button className={`${butStyle.button} ${props.bg}`} onClick={props.onClick}>{props.text}</button>
//         </div>
//     )
// }

export const Button =  ({ color = "orange", bg, text, onClick}) => {
    return (
        <div>
            <button onClick={onClick} style={{backgroundColor: bg, color: color}}>{text}</button>
        </div>
    )
}