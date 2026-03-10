
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  certName: string;
  questions: Question[];
  onClose: () => void;
}

const CertificationQuiz: React.FC<QuizProps> = ({ certName, questions, onClose }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null) return;
    
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Simulado: {certName}</h3>
            {!showResults && (
              <p className="text-sm text-slate-500 font-medium">
                Questão {currentQuestionIndex + 1} de {questions.length}
              </p>
            )}
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400 hover:text-slate-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto flex-grow">
          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key={currentQuestionIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h4 className="text-lg font-bold text-slate-800 leading-tight">
                  {currentQuestion.text}
                </h4>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, idx) => {
                    let containerClass = "p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center justify-between ";
                    
                    if (isAnswered) {
                      if (idx === currentQuestion.correctAnswer) {
                        containerClass += "border-emerald-500 bg-emerald-50 text-emerald-900";
                      } else if (idx === selectedOption) {
                        containerClass += "border-rose-500 bg-rose-50 text-rose-900";
                      } else {
                        containerClass += "border-slate-100 opacity-50";
                      }
                    } else {
                      if (idx === selectedOption) {
                        containerClass += "border-blue-600 bg-blue-50 text-blue-900";
                      } else {
                        containerClass += "border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-700";
                      }
                    }

                    return (
                      <div 
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        className={containerClass}
                      >
                        <span className="font-medium">{option}</span>
                        {isAnswered && idx === currentQuestion.correctAnswer && (
                          <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 ml-2" />
                        )}
                        {isAnswered && idx === selectedOption && idx !== currentQuestion.correctAnswer && (
                          <AlertCircle size={20} className="text-rose-500 flex-shrink-0 ml-2" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {isAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${selectedOption === currentQuestion.correctAnswer ? 'bg-emerald-50 text-emerald-800' : 'bg-rose-50 text-rose-800'}`}
                  >
                    <p className="text-sm font-bold mb-1">
                      {selectedOption === currentQuestion.correctAnswer ? 'Correto!' : 'Incorreto.'}
                    </p>
                    <p className="text-sm opacity-90">{currentQuestion.explanation}</p>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-blue-600">{Math.round((score / questions.length) * 100)}%</span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Resultado do Simulado</h4>
                <p className="text-slate-500 mb-8">
                  Você acertou {score} de {questions.length} questões.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={resetQuiz}
                    className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center"
                  >
                    <RotateCcw size={18} className="mr-2" />
                    Tentar Novamente
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center"
                  >
                    Concluir
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        {!showResults && (
          <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
            {!isAnswered ? (
              <button
                disabled={selectedOption === null}
                onClick={handleConfirmAnswer}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${selectedOption !== null ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
              >
                Confirmar Resposta
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
                <ArrowRight size={18} className="ml-2" />
              </button>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CertificationQuiz;
