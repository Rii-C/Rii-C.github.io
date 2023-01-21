import './index.scss'

const AnimatedLetter = ({ letterClass, strArray, idx }) => {
    return (
        <span>{
                strArray.map((el,i) => {
                    return <span key={el+i} className={ `${letterClass}  _${ i + idx}`} >
                        {el}
                    </span>
                })
                
            }

        </span>
    )
}

export default AnimatedLetter;