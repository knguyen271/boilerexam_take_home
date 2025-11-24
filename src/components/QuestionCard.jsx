import React, { useState } from 'react';
import LatexText from './LatexText';
import AnswerButton from './AnswerButton';

const QuestionCard = ({ data }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const correctIndices = data.data.solution; 

    const handleSubmit = () => {
        if (selectedId) setIsSubmitted(true);
    };

    const handleReset = () => {
        setSelectedId(null);
        setIsSubmitted(false);
    }

    return (
        <div className="max-w-6xl mx-auto w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b border-gray-800 flex justify-between items-center">
                <span className="text-3xl font-bold tracking-wider text-black">
                    Question {data.number}
                </span>
                <span className="px-6 py-4 text-black text-lg font-bold">
                    Difficulty: {Math.round(data.stats.difficulty * 10)}/10
                </span>
            </div>

            <div className="p-6 md:p-8">
                <div className="mb-8 text-xl leading-relaxed text-gray-800 font-serif">
                    <LatexText text={data.data.body} />
                </div>

                <div className="space-y-3">
                    {data.data.answerChoices.map((answer) => (
                        <AnswerButton 
                            key={answer.id}
                            answer={answer}
                            isSelected={selectedId === answer.id}
                            isSubmitted={isSubmitted}
                            isCorrect={correctIndices.includes(answer.index)}
                            onClick={() => !isSubmitted && setSelectedId(answer.id)}
                        />
                    ))}
                </div>

                <div className="mt-8 flex justify-end h-12 items-center">
                {!isSubmitted ? (
                    <button
                        onClick={handleSubmit}
                        disabled={!selectedId}
                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
                            selectedId 
                            ? "flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all bg-yellow-500 text-white hover:bg-black shadow-lg"
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                        > Submit Answer
                    </button>
                ) : (
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all bg-yellow-500 text-white hover:bg-black shadow-lg"
                    >
                        Retry
                    </button>
                        )}
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
