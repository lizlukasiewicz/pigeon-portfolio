
import { I } from  "./ProjectPage";


export const ProjectLayout = ({icon}: {icon:I;}) => {
    console.log(`🔮 ProjectLayout:: ${icon.name}`)
    return(
        <div key={icon.name}>
            
            <p>🪲{icon.name}</p>
                
                    {/* <icon.IconComponent as {...icon.icon} /> */}


        </div>
    )
}
