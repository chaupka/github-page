import Deck from './Reveal/Deck';
import Slide from './Reveal/Slide';

export default function Page() {

    return (
        <Deck>
            <Slide>
                <h2>Single Horizontal Slide</h2>
                <div>Body text</div>
                <div>Body text</div>
                <div>Body text</div>
                <div>Body text</div>
                <div>Body text</div>
            </Slide>
            <Slide>
                <Slide>2.1 Second Horizontal Slide</Slide>
                <Slide>2.2 Second Horizontal Slide</Slide>
            </Slide>
        </Deck>
    )
}