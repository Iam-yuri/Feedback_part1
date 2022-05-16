import { CloseButton } from "../CloseButton";
import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            sorce: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            sorce: ideaImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            sorce: thoughtImageUrl,
            alt: 'Imagem de um inseto'
        },
    
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbacktype, setFeedbacktype] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbacktype(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            { feedbackSent ? (
                <FeedBackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                  {!feedbacktype ? (
                <FeedBackTypeStep onFeedbackTypeChanged={setFeedbacktype} />
            ) : (
                <FeedBackContentStep 
                feedbackType={feedbacktype}
                onFeedbackRestartRequested={handleRestartFeedback}
                onFeedbackSent={() => setFeedbackSent(true)}
                />
            )}
                </>
            )  }
            
            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="https://instagram.com/iam_yuri2003_">mim</a>
            </footer>
        </div>
    );
}