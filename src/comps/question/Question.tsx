import './question.scss'

const Question = () => {
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
                <td>1. How often do you experience crashes or unexpected termination? </td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
            </tr>
            <tr>
                <td>2. How many scenerios do you think can lead to crashes? </td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
                <td><input type="radio" className="" id='inputs'/></td>
            </tr>
            <tr>
                <td>3. How severe is the impact of crashes on your experience? </td>
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
