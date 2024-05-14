import { FC } from "react"

interface ButtonType {
    click: () => void
}

const Button:FC<ButtonType> = (props) => {    
  return (
    <>
        <div>
            <button onClick={() => {props.click()}} className="btn btn-primary text-md">Add Tasks</button>
        </div>
    </>
  )
}

export default Button