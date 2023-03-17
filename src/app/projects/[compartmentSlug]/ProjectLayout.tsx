
import { I } from  "./ProjectPage";
// import { Icon } as I from "@/app/lib/Icons"

export const ProjectLayout = ({icon}: {icon:I;}) => {
    console.log(`🔮 ProjectLayout:: ${icon.name}`)
    return(
        <div key={icon.name}>
            
                
                    <icon.IconComponent as {...icon.icon} />


        </div>
    )
}
