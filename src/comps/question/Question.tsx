import './question.scss'

interface questionProps {
    q1: string;
    q2: string;
    q3: string
}

const Question: React.FC<questionProps> = ({q1, q2, q3}) => {
  return (
    <div className='question'>
                <label htmlFor='inputs'/>
        <table>
        <thead>
            <tr>
                <th>Questions</th>
                <th>Very Heavy</th>
                <th>Heavy</th>
                <th>Neutral</th>
                <th>Low</th>
                <th>Insignificant</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>1. {q1} </td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
            </tr>
            <tr>
                <td>2. {q2} </td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
            </tr>
            <tr>
                <td>3. {q3} </td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
            </tr>

        </tbody>
        </table>


    </div>
  )
}

export default Question
