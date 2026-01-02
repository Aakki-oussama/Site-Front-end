import React, { Component, type ReactNode } from 'react';
import { RefreshCw } from 'lucide-react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

/**
 * ErrorBoundary - Capture les erreurs JavaScript dans les composants enfants
 * Affiche un message d'erreur convivial au lieu d'une page blanche
 */
export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): Partial<State> {
        // Mettre à jour l'état pour afficher l'UI d'erreur
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Logger l'erreur pour le débogage
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        
        // Enregistrer l'erreur dans l'état pour affichage
        this.setState({ errorInfo });

        // Envoyer l'erreur à un service de logging en production
        this.logErrorToService(error, errorInfo);
    }

    logErrorToService = (error: Error, errorInfo: React.ErrorInfo) => {
        // En production, remplacer par votre service de logging (Sentry, LogRocket, etc.)
        if (import.meta.env.PROD) {
            // Exemple avec Sentry (décommenter et installer @sentry/react si nécessaire)
            // Sentry.captureException(error, { contexts: { react: errorInfo } });
            
            // Pour l'instant, on peut envoyer à un endpoint API
            // fetch('/api/errors', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({
            //         error: error.message,
            //         stack: error.stack,
            //         componentStack: errorInfo.componentStack,
            //         timestamp: new Date().toISOString(),
            //     }),
            // }).catch(console.error);
            
            // Pour l'instant, on garde juste le console.error
            // (Les paramètres error et errorInfo sont utilisés dans les commentaires ci-dessus)
            void error;
            void errorInfo;
        }
    };

    handleRetry = () => {
        // Réinitialiser l'état d'erreur pour réessayer
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    render() {
        if (this.state.hasError) {
            // Afficher le fallback personnalisé ou l'UI d'erreur par défaut
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // UI d'erreur par défaut
            return (
                <div className="min-h-screen flex items-center justify-center bg-light dark:bg-dark-bg px-6">
                    <div className="max-w-md w-full text-center">
                        <div className="mb-6">
                            <h1 className="text-2xl font-black text-brand dark:text-white mb-2">
                                Oups !
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Une erreur s'est produite dans cette section.
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-500 italic mb-6">
                                Notre équipe est en train de corriger le problème. Vous pouvez réessayer ou recharger la page.
                            </p>
                            
                            {/* Retry Button */}
                            <button
                                onClick={this.handleRetry}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand/90 text-white font-black rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
                                aria-label="Réessayer de charger cette section"
                            >
                                <RefreshCw size={18} />
                                <span>Réessayer</span>
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
