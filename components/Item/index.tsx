import Image from "next/image"
import cx from "classnames";
import Link from "next/link";

interface ItemProps{
    item: string;
    category: string;
    active?: boolean,
    href?: string,
}

export default function Item( props: ItemProps ) {
    const { item, category, active, href } = props;
    const classItem = cx({
        "carousel_item": true,
        "border": true,
        "border-3": true,
        "mb-3": true,
        "p-1": true,
        "active__border": active,
        
    })

    const classItem2 = cx ({
        "itemku": true,
        // "mt-4": true,
        // "mb-3": true,
        // "ms-3": true,
        // "me-3": true,
        
    })

    const classItem3 = cx ({
        "category": true,
        "d-flex": true,
        "justify-content-center": true,
        "text-center": true,
        "active__text": active
    })
  return (
        <div className={classItem2}>
            <div className={classItem}>
                    <a href={href}><Image src={`/icon/${item}.svg`} alt={item} width={96} height={96}/></a>
            </div>
            <div className={classItem3}>
                <p>{category}</p>
            </div> 
        </div>
  )
}
