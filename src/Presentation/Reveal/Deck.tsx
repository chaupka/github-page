import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import "reveal.js/dist/theme/black.css";
import revealOptions from './revealOptions';

type DeckProps = {
    options?: any
    children?: any
}

export default function Deck(props: DeckProps) {

    const { options, children } = props

    const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
    const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

    useEffect(() => {
        // Prevents double initialization in strict mode
        if (deckRef.current) return;

        deckRef.current = new Reveal(deckDivRef.current!, { ...revealOptions, ...options });

        deckRef.current.initialize().then(() => {
            // good place for event handlers and plugin setups
        });

        return () => {
            try {
                if (deckRef.current?.isReady()) {
                    deckRef.current.destroy();
                    deckRef.current = null;
                }
            } catch (e) {
                console.warn("Reveal.js destroy call failed.");
            }
        };
    }, []);

    return (
        <div className="reveal" ref={deckDivRef}>
            <div className="slides">{children}</div>
        </div>
    );
}