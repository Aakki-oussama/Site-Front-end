import type { Reason } from '@/site-web/body/4-about/core/index';
import { ShieldCheck, Leaf, Clock, Zap } from 'lucide-react';

// Reasons data
export const REASONS: Reason[] = [
  {
    id: "01",
    title: "Soin maîtrisé",
    description: "Chaque pièce est manipulée avec soin pour préserver sa qualité et sa tenue.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "from-blue-500/20 to-brand/20",
    border: "group-hover:border-brand"
  },
  {
    id: "02",
    title: "Démarche responsable",
    description: "Nous adoptons des pratiques de lavage réfléchies pour limiter le gaspillage et assurer un service efficace.",
    icon: <Leaf className="w-8 h-8" />,
    color: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-500"
  },
  {
    id: "03",
    title: "Ponctualité Absolue",
    description: "Un service de ramassage et de livraison qui respecte scrupuleusement votre emploi du temps, 7j/7 à Meknès.",
    icon: <Clock className="w-8 h-8" />,
    color: "from-highlight/20 to-blue-400/20",
    border: "group-hover:border-highlight"
  },
  {
    id: "04",
    title: "Technologie Pro",
    description: "Nos machines de dernière génération garantissent un résultat impeccable sans agresser vos textiles précieux.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500"
  }
];

