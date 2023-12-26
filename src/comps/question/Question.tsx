import './question.scss'

interface questionProps {
    q1: string;
    q2: string;
    q3: string;
}

const Question: React.FC<questionProps> = ({q1, q2, q3}) => {
  return (
    <div className='question'>
        <label htmlFor='inputs'/>
        <label htmlFor='input1'/>
        <label htmlFor='input2'/>
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
                <td><input type="radio" name='inputs' required/></td>
                <td><input type="radio" name='inputs' required/></td>
                <td><input type="radio" name='inputs' required/></td>
                <td><input type="radio" name='inputs' required/></td>
                <td><input type="radio" name='inputs' required/></td>
            </tr>
            <tr>
                <td>2. {q2} </td>
                <td><input type="radio" name='input1' required/></td>
                <td><input type="radio" name='input1' required/></td>
                <td><input type="radio" name='input1' required/></td>
                <td><input type="radio" name='input1' required/></td>
                <td><input type="radio" name='input1' required/></td>
            </tr>
            <tr>
                <td>3. {q3} </td>
                <td><input type="radio" name='input2' required/></td>
                <td><input type="radio" name='input2' required/></td>
                <td><input type="radio" name='input2' required/></td>
                <td><input type="radio" name='input2' required/></td>
                <td><input type="radio" name='input2' required/></td>
            </tr>

        </tbody>
        </table>


    </div>
  )
}

export default Question
