import { FC } from "react";
import "./result.scss"

interface resultProps {
  result: number;
  msg: string
}

const Result:FC<resultProps> = ({result, msg}) => {
  return (
    <div className="results">
      <div>
        <h4>Result:</h4>
        <span>{result ? result : '' }</span>
      </div>
      <div>
      <h4>Message:</h4>
      <span>{msg}</span>
      </div>
    </div>
  )
}

export default Result
