export const Statistics = ({ good, neutral, bad }) => {
    return (
        <ul className="list">
            <li className="item">
                <span className="">Good:</span>
            </li>
            <li className="item">
                <span className="">Neutral:</span>
            </li>
            <li className="item">
                <span className="">Bad:</span>
            </li>

        </ul>
    )
}








state = {
  good: 0,
  neutral: 0,
  bad: 0
}