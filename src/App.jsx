import React, { useEffect, useState } from 'react';
import { fetchQuestion } from './api/questionApi';
import QuestionCard from './components/QuestionCard';
import { Loader2, AlertCircle } from 'lucide-react';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadData = async () => {
        try {
            setLoading(true);
            const question = await fetchQuestion();
            setData(question);
        } catch (error) {
            setError("Failed to load question. Please try again", error);
            return 
        } finally {
            setLoading(false);
        }
        };
        loadData();
    }, []);

    if (loading) {
        return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-gray-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4 text-blue-500" />
            <p className="font-medium">Loading Question...</p>
        </div>
        );
    }

    if (error) {
        return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-red-100 text-center max-w-md">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Error Loading Data</h2>
            <p className="text-gray-500 mb-6">{error}</p>
            <button 
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors"
            >
                Retry
            </button>
            </div>
        </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-800 py-12 px-4 flex items-center justify-center">
            {data && <QuestionCard data={data} />}
        </div>
    );
}

export default App;


