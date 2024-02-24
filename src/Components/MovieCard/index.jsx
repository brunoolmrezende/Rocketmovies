import { Tag } from "../Tags";
import { FilledStar } from "../FilledStar";
import { UnfilledStar } from "../UnfilledStar";

import { Container, Stars } from "./style";

export function MovieCard({ data, ...rest}) {
    const createStarsArray = () => {
        const starsArray = [];
        const totalStars = 5;
        const filledStars = data.stars;

        for(let i = 0; i < filledStars; i++) {
            starsArray.push(<FilledStar key={i} />)
        }

        for(let i = filledStars; i < totalStars; i++) {
            starsArray.push(<UnfilledStar key={i} />)
        }

        return starsArray;
    };
    
    return (
        <Container to={"/details/:id"} {...rest}>
            <h1>{data.title}</h1>

            {
                data.stars &&
                <Stars>
                    {createStarsArray()}
                </Stars>
            }
        
            

            <p>{data.text}</p>

            {
                data.tags && 
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}/> )
                    }
                </footer>
            }
        </Container>
    );
}