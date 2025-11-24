import React from 'react'; 
import LatexText from './LatexText';
import classNames from 'classnames';

const AnswerButton = ({ answer, isSelected, isSubmitted, isCorrect, onClick }) => {

    if (!answer) return null;

    const baseStyles = "w-full text-left p-4 mb-3 rounded-xl border-2 transition-all duration-150 flex items-center justify-between group relative overflow-hidden";

    let colorStyles = "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-blue-300";
    let circleStyles = "border-2 bg-gray-100 text-gray-500 border-transparent group-hover:bg-white";
    let icon = null;

    if (isSubmitted) {
        if (isCorrect) {
            colorStyles = "bg-green-50 border-green-500 ring-1 ring-green-500 text-green-900";
            circleStyles = "bg-green-200 text-green-700 border-green-300";
        } 
        else if (isSelected) {
            colorStyles = "bg-red-50/50 border-red-500 text-red-900";
            circleStyles = "bg-red-200 text-red-700 border-red-300";
        } 
        else {
            colorStyles = "opacity-75 border-gray-600 bg-gray-50 text-gray-500"; 
            circleStyles = "bg-gray-200 text-gray-400 border-transparent";
        }
    } else if (isSelected) {
        colorStyles = "bg-blue-50 border-blue-500 text-blue-900";
        circleStyles = "bg-blue-200 text-blue-700 border-blue-200";
    }

    return (
        <button
            onClick={onClick}
            disabled={isSubmitted}
            className={classNames(baseStyles, colorStyles)}
        >
            <div className="flex items-center gap-4 z-10">
                <span className={classNames(
                    "w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold transition-colors shrink-0",
                    circleStyles
                )}>
                    {String.fromCharCode(65 + answer.index)}
                </span>

                <span className="text-lg font-serif">
                    <LatexText text={answer.body} />
                </span>
            </div>

            <div className="flex items-center gap-3 z-10">
                {isSubmitted && answer.stats && (
                    <span className="text-sm font-bold opacity-80 whitespace-nowrap">
                        {answer.stats.count} submissions
                    </span>
                )}
                {icon && <div>{icon}</div>}
            </div>
        </button>
    );
}

export default AnswerButton;