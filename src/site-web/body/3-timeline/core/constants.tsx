import { type Step, type Metric } from '@/site-web/body/3-timeline/core/index';

// Timeline Process Steps
export const STEPS: Step[] = [
    {
      id: 1,
      title: "Commandez via WhatsApp",
      description: "Un simple message suffit pour planifier votre collecte.",
      iconName: "Phone"
    },
    {
      id: 2,
      title: "Collecte à Domicile",
      description: "Notre équipe se déplace chez vous à l'heure convenue.",
      iconName: "Truck"
    },
    {
      id: 3,
      title: "Nettoyage Premium",
      description: "Chaque pièce est traitée avec soin selon sa nature pour garantir un résultat impeccable.",
      iconName: "Sparkles"
    },
    {
      id: 4,
      title: "Retour soigné",
      description: "Votre linge vous est remis propre, frais et prêt à l’usage.",
      iconName: "PackageCheck"
    }
  ];

// Timeline Metrics/Trust Badges
export const METRICS: Metric[] = [
  { label: "Clients Heureux", value: "785+" },
  { label: "Linge Traité", value: "15T+" },
  { label: "Articles Express", value: "48h" },
  { label: "Satisfaction", value: "98%" },
];