import { Card } from "react-bootstrap";
interface IInfoCard{
    imgUrl?:string,
    title?:string,
    description?:string
}

const InfoCard:React.FC<IInfoCard> = ({imgUrl, title, description})=>{
    return (
        <Card className="w-[18rem]">
            <Card.Img variant="top" src={imgUrl}>

            </Card.Img>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default InfoCard;