import {LabelStyle} from './styled'

export default function ProgressBar(props){
    const{progress} = props
    return(
        <>
            <LabelStyle progresso={progress}>{}</LabelStyle>
        </>
    )
};