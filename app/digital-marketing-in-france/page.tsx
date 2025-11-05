'use client'

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Star, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Clock, Target, Zap, BarChart3, Linkedin, MessageSquare, Calendar, Users2, Building2, Briefcase, Shield, Globe, DollarSign, PieChart, Settings, Monitor, Smartphone, ShoppingCart, Heart, GraduationCap, Palette, Crown, Euro } from "lucide-react"
import Link from "next/link"
import Testimonials from "../components/testimonials"
import ContactCTA from "../components/contact-cta"

export default function DigitalMarketingInFrancePage() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const frenchBusinessMarkets = [
    {
      category: "Île-de-France & Paris Region",
      areas: ["Paris", "Boulogne-Billancourt", "Nanterre", "Créteil", "Versailles", "Saint-Denis"],
      description: "Premier business hub with focus on luxury brands, tech startups, and international companies"
    },
    {
      category: "Auvergne-Rhône-Alpes & Lyon Region", 
      areas: ["Lyon", "Grenoble", "Saint-Étienne", "Clermont-Ferrand", "Annecy", "Chambéry"],
      description: "Technology and innovation center with strong B2B and manufacturing digital marketing expertise"
    },
    {
      category: "Provence-Alpes-Côte d'Azur",
      areas: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Cannes", "Antibes"],
      description: "Tourism, luxury, and Mediterranean business digital marketing specialists"
    },
    {
      category: "Occitanie & Toulouse Region",
      areas: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Béziers", "Albi"],
      description: "Aerospace, technology, and southern France digital marketing excellence"
    },
    {
      category: "Nouvelle-Aquitaine & Bordeaux",
      areas: ["Bordeaux", "Pau", "La Rochelle", "Poitiers", "Limoges", "Bayonne"],
      description: "Wine industry, tourism, and Atlantic coast digital marketing specialists"
    }
  ]

  const digitalMarketingServices = [
    {
      icon: TrendingUp,
      title: "SEO France - Référencement Naturel",
      description: "Stratégies SEO complètes adaptées aux habitudes de recherche françaises, comportements consommateurs, et dominance du marché local à travers Paris, Lyon, Marseille, Toulouse, et toute la France.",
      features: [
        "Recherche et optimisation de mots-clés français (optimisation française)",
        "Audits SEO techniques pour les facteurs de classement Google.fr",
        "SEO local pour les villes et régions françaises",
        "Optimisation et création de contenu en français",
        "Construction de backlinks depuis des sites français de haute autorité"
      ],
      results: [
        "340% d'augmentation du trafic organique depuis les recherches françaises",
        "Top 3 des classements pour les mots-clés cibles en France",
        "65% d'amélioration de la visibilité locale dans les régions françaises"
      ]
    },
    {
      icon: Euro,
      title: "Google Ads France - Gestion PPC",
      description: "Campagnes Google Ads et Microsoft Advertising stratégiques optimisées pour les audiences françaises, habitudes d'achat, et dynamiques du marché régional à travers la France.",
      features: [
        "Campagnes Google Ads ciblant les mots-clés français",
        "Campagnes Shopping pour l'e-commerce français",
        "Publicité YouTube pour les audiences françaises",
        "Ciblage régional à travers les villes françaises",
        "Optimisation des conversions pour les clients français"
      ],
      results: [
        "280% d'amélioration des performances PPC françaises",
        "45% de réduction du coût d'acquisition pour le marché français",
        "2.8x retour moyen sur investissement publicitaire (ROAS) en France"
      ]
    },
    {
      icon: MessageSquare,
      title: "Marketing Digital France - Réseaux Sociaux",
      description: "Marketing sur les réseaux sociaux multi-plateformes optimisé pour les audiences françaises, nuances culturelles, et objectifs commerciaux divers à travers la France.",
      features: [
        "Marketing Facebook et Instagram pour les audiences françaises",
        "Marketing LinkedIn B2B en France",
        "Marketing TikTok pour les jeunes démographies françaises",
        "Optimisation des réseaux professionnels français",
        "Marketing de contenu YouTube en langue française"
      ],
      results: [
        "220% d'augmentation des conversions réseaux sociaux des utilisateurs français",
        "55% de coût d'acquisition plus faible sur le marché français",
        "380% d'amélioration des taux d'engagement avec les audiences françaises"
      ]
    },
    {
      icon: Users,
      title: "Content Marketing pour Entreprises Françaises",
      description: "Création et distribution de contenu stratégique adapté aux audiences françaises, références culturelles, et préférences régionales à travers le marché français.",
      features: [
        "Contenu de blog en langue française",
        "Livres blancs et études de cas pour le B2B français",
        "Contenu vidéo pour les audiences françaises",
        "Campagnes d'email marketing en français",
        "Contenu de leadership d'opinion pour le marché français"
      ],
      results: [
        "290% d'augmentation de l'engagement du contenu des audiences françaises",
        "45% d'amélioration de la qualité des leads des prospects français",
        "180% d'augmentation de la notoriété de marque dans les régions françaises"
      ]
    },
    {
      icon: Settings,
      title: "Développement Web pour le Marché Français",
      description: "Conception et développement de sites web optimisés pour la conversion, adaptés aux utilisateurs français, préférences de design, et exigences du marché local incluant la conformité RGPD.",
      features: [
        "Design web responsive optimisé pour les appareils français",
        "Optimisation du taux de conversion (CRO) pour les utilisateurs français",
        "Développement e-commerce avec systèmes de paiement français",
        "Optimisation de la vitesse du site pour l'hébergement français",
        "Design d'expérience utilisateur (UX) pour les préférences françaises"
      ],
      results: [
        "80% d'amélioration moyenne du taux de conversion pour les visiteurs français",
        "35% de réduction du taux de rebond des utilisateurs français",
        "320% d'augmentation de la génération de leads depuis le marché français"
      ]
    }
  ]

  const digitalMarketingProcess = [
    {
      step: "01",
      title: "Analyse du Marché Français & Développement Stratégique",
      description: "Audit complet du marché français incluant l'analyse du comportement consommateur, benchmarking concurrentiel à travers les régions françaises, recherche d'audience cible pour les démographies françaises, et définition d'objectifs alignés avec les objectifs commerciaux français."
    },
    {
      step: "02",
      title: "Stratégie Marketing Digital Intégrée",
      description: "Stratégie marketing digital intégrée avec plans SEO, PPC, réseaux sociaux, content marketing, et développement web spécifiquement adaptés au marché français, incluant les variations régionales et considérations culturelles."
    },
    {
      step: "03",
      title: "Exécution de Campagne & Optimisation",
      description: "Exécution de campagne basée sur les données avec monitoring de performance en temps réel à travers les régions françaises, implémentation de tests A/B pour les audiences françaises, et cycles d'optimisation hebdomadaires pour un ROI maximum sur le marché français."
    },
    {
      step: "04",
      title: "Croissance & Mise à l'Échelle",
      description: "Croissance et optimisation continues à travers la mise à l'échelle des campagnes françaises, implémentation d'automatisation avancée pour les clients français, et sessions de planification stratégique mensuelles axées sur l'expansion du marché français."
    }
  ]

  const whyChooseDigitalMarketing = [
    "Expertise Native du Marché Français: Compréhension approfondie du comportement consommateur français, nuances culturelles, et patterns de recherche locale",
    "Spécialistes de la France: Couverture complète à travers Paris, Lyon, Marseille, Toulouse, et toutes les régions françaises",
    "Optimisation Bilingue: Ciblage stratégique des mots-clés français et anglais utilisés par les audiences françaises",
    "Résultats Axés Performance: 420% d'augmentation moyenne du ROI pour les clients français",
    "Optimisation Google.fr: Expertise spécialisée dans le paysage des moteurs de recherche français",
    "Conformité RGPD: Conformité totale aux lois françaises et européennes sur la protection des données",
    "Expertise Spécifique à l'Industrie Française: Succès prouvé dans les secteurs SaaS, e-commerce, manufacturing, santé, et fintech français",
    "Connaissance de l'Écosystème Startup Français: Compréhension approfondie des cycles de financement startup français, subventions gouvernementales, et patterns de croissance"
  ]

  const digitalMarketingCaseStudies = [
    {
      industry: "Startup Fintech Paris",
      location: "Paris, France",
      challenge: "Startup B2B fintech en phase précoce devait passer de 10 à 100 clients entreprise sur le marché français",
      solution: "Implémentation d'une stratégie marketing digital française complète avec SEO, PPC, réseaux sociaux, et content marketing",
      results: [
        "340% d'augmentation des leads qualifiés depuis le marché français",
        "2.5M€ de croissance ARR en 12 mois",
        "85% d'amélioration de l'acquisition de clients entreprise",
        "3.2x retour sur investissement publicitaire (ROAS) en France"
      ]
    },
    {
      industry: "Marque E-commerce Lyon",
      location: "Lyon, France",
      challenge: "Marque lifestyle D2C luttant avec des coûts d'acquisition client élevés et un faible ROAS sur le marché français",
      solution: "Refonte complète du marketing digital français avec SEO, réseaux sociaux, content marketing, et optimisation des conversions",
      results: [
        "280% d'augmentation du trafic organique depuis les recherches françaises",
        "45% de réduction du coût d'acquisition client",
        "250% d'amélioration de la valeur vie client des clients français",
        "4.8x retour sur investissement publicitaire sur le marché français"
      ]
    },
    {
      industry: "Entreprise Manufacturing Marseille",
      location: "Marseille, France",
      challenge: "Entreprise manufacturing B2B avait besoin de leads qualifiés sur le marché industriel français concurrentiel",
      solution: "Stratégie marketing digital B2B française complète avec LinkedIn, Google Ads, content marketing, et SEO",
      results: [
        "380% d'augmentation des leads B2B qualifiés depuis le marché français",
        "50% de réduction de la durée du cycle de vente",
        "500,000€ de nouveaux revenus business en 8 mois",
        "75% d'amélioration du taux de conversion inquiry-to-client"
      ]
    }
  ]

  const industriesWeServe = [
    {
      icon: Building2,
      title: "Entreprises Technologiques & SaaS Françaises",
      description: "Transformez votre entreprise tech française avec des stratégies marketing digital complètes conçues pour l'écosystème d'innovation florissant et le paysage startup français.",
      services: [
        "Génération de leads B2B et enablement des ventes entreprise pour le marché français",
        "Conversions d'essais gratuits et optimisation des modèles freemium pour les utilisateurs français",
        "Croissance product-led et campagnes d'acquisition d'utilisateurs à travers les régions françaises",
        "Intelligence concurrentielle et positionnement de marché dans le secteur tech français"
      ],
      results: "340% d'augmentation des demandes de démo qualifiées depuis le marché français, 60% d'amélioration de la conversion trial-to-paid pour les utilisateurs français"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail Français",
      description: "Développez votre business en ligne avec des campagnes marketing digital complètes optimisées pour les consommateurs digitaux français et comportements d'achat.",
      services: [
        "Optimisation des publicités shopping et publicités produit dynamiques pour le marché français",
        "Entonnoirs d'acquisition client et campagnes de rétention pour les acheteurs français",
        "Optimisation du commerce mobile et campagnes d'installation d'apps pour les utilisateurs français",
        "Vente transfrontalière et expansion internationale depuis la base française"
      ],
      results: "320% d'augmentation des ventes en ligne depuis le marché français, 40% d'amélioration du retour sur investissement publicitaire (ROAS) pour les campagnes françaises"
    },
    {
      icon: Building2,
      title: "Manufacturing & Services B2B Français",
      description: "Générez des leads pour les entreprises manufacturing et B2B françaises à travers des campagnes marketing digital ciblées axées sur la France.",
      services: [
        "Génération de leads B2B et enablement des ventes pour le manufacturing français",
        "Marketing LinkedIn et networking professionnel pour le B2B français",
        "Marketing digital pour salons professionnels et événements industriels des entreprises françaises",
        "Account-based marketing (ABM) pour les clients entreprise français"
      ],
      results: "380% d'augmentation des leads B2B qualifiés depuis le marché français, 35% de réduction du coût par lead pour les campagnes B2B françaises"
    },
    {
      icon: Heart,
      title: "Santé Française",
      description: "Générez l'acquisition de patients pour les prestataires de santé français à travers le marketing digital conforme et axé sur les résultats à travers la France.",
      services: [
        "Campagnes d'acquisition de patients et optimisation de la réservation de rendez-vous pour la santé française",
        "Promotion de la télémédecine et marketing d'apps de santé pour les patients français",
        "Campagnes de marketing hospitalier et promotion de cliniques à travers les régions françaises",
        "Transformation digitale de l'industrie wellness et fitness pour le marché français"
      ],
      results: "220% d'augmentation des réservations de rendez-vous depuis les patients français, 45% d'amélioration du coût d'acquisition de patients pour les prestataires de santé français"
    },
    {
      icon: GraduationCap,
      title: "Services Financiers Français",
      description: "Maximisez l'acquisition de clients pour les institutions financières et entreprises fintech françaises avec des stratégies marketing digital complètes.",
      services: [
        "Campagnes d'acquisition de clients et génération de leads pour les services financiers français",
        "Marketing fintech et promotion de la banque digitale pour les clients français",
        "Marketing digital d'investissement et gestion de patrimoine pour le marché français",
        "Marketing d'assurance et planification financière à travers les régions françaises"
      ],
      results: "280% d'augmentation des leads qualifiés depuis le marché financier français, 50% d'amélioration des taux de conversion pour les services financiers français"
    }
  ]

  const digitalMarketingFaqData = [
    {
      question: "Quels services marketing digital Frameleads propose-t-il en France?",
      answer: "Frameleads fournit des services marketing digital complets couvrant SEO France, Google Ads, marketing réseaux sociaux, content marketing, et développement web spécifiquement adaptés au marché français. Contrairement aux agences qui se spécialisent dans un seul domaine, nous offrons une approche full-service qui garantit que tous vos canaux marketing digital fonctionnent ensemble de manière fluide. Dans le marché concurrentiel français, cette approche intégrée délivre un ROI maximum et une croissance business à travers la France."
    },
    {
      question: "Combien de temps faut-il pour voir des résultats marketing digital en France?",
      answer: "Les résultats marketing digital varient par canal sur le marché français. Les campagnes PPC montrent des résultats immédiats, le SEO prend typiquement 3-6 mois pour des améliorations significatives, tandis que les réseaux sociaux et content marketing montrent de l'engagement en 2-4 semaines. Nous fournissons des mises à jour de performance hebdomadaires pour suivre les progrès à travers tous les canaux avec des métriques spécifiques à la France et insights du marché français."
    },
    {
      question: "Quel budget devrais-je prévoir pour le marketing digital en France?",
      answer: "Les budgets marketing digital français varient selon vos objectifs et taille de marché. Pour un marketing digital complet incluant SEO, PPC, réseaux sociaux, et content, nous recommandons de commencer avec 6,000€-12,000€ mensuels pour les petites entreprises et 30,000€-60,000€+ pour les campagnes enterprise. Nos frais de gestion vont typiquement de 15-20% du total des dépenses marketing, avec des structures de prix françaises transparentes."
    },
    {
      question: "Travaillez-vous avec les startups et PME françaises?",
      answer: "Absolument! L'écosystème startup français est un domaine de focus central, incluant la scène tech parisienne, le secteur innovation lyonnais, et les hubs digitaux marseillais. Nous offrons des modèles d'engagement flexibles pour les entreprises en phase précoce, incluant des prix basés sur la performance et des packages de croissance conçus pour les startups françaises, avec connaissance des subventions gouvernementales françaises et cycles de financement."
    },
    {
      question: "Comment mesurez-vous le succès marketing digital en France?",
      answer: "Nous suivons des métriques complètes à travers tous les canaux incluant la croissance du trafic organique depuis les recherches françaises, coût par acquisition (CPA) pour les clients français, retour sur investissement publicitaire (ROAS) sur le marché français, taux de conversion pour les utilisateurs français, valeur vie client (CLV) pour les clients français, et attribution à travers tous les points de contact. Les rapports mensuels incluent l'analyse d'impact business français et recommandations d'optimisation."
    },
    {
      question: "Quels canaux marketing digital fonctionnent le mieux en France?",
      answer: "Notre expertise couvre le marketing digital complet incluant SEO France, Google Ads (Search, Display, Shopping, YouTube), marketing Facebook & Instagram, marketing LinkedIn pour le B2B français, content marketing en langue française, design & développement web, et plateformes émergentes. La sélection de services dépend du comportement de votre audience cible et objectifs business sur le marché français, avec variations régionales à travers différentes villes françaises."
    },
    {
      question: "Pouvez-vous optimiser les campagnes marketing digital existantes pour le marché français?",
      answer: "Oui, nous offrons des services d'audit et d'optimisation marketing digital français complets pour les campagnes existantes. Notre audit marketing digital de 30 jours identifie les opportunités d'optimisation à travers tous les canaux spécifiquement pour le marché français et fournit des recommandations actionables pour une amélioration immédiate de la performance de campagne avec les audiences françaises."
    },
    {
      question: "Proposez-vous de la formation marketing digital pour les entreprises françaises?",
      answer: "Nous offrons des programmes de formation marketing digital complets pour les entreprises françaises, incluant SEO France, guidance certification Google Ads, formation Facebook Blueprint, content marketing, et workshops personnalisés pour votre équipe marketing. La formation peut être conduite dans votre bureau français ou virtuellement, avec sessions adaptées aux dynamiques du marché français et pratiques business françaises."
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Frameleads Digital Marketing France",
        "description": "Premier digital marketing agency in France specializing in SEO, PPC, social media marketing, and web development for French businesses. 420% ROI growth.",
        "url": "https://frameleads.com/digital-marketing-in-france",
        "telephone": "+33-1-23-45-67-89",
        "email": "france@frameleads.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Champs-Élysées 1",
          "addressLocality": "Paris",
          "postalCode": "75008",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 48.8566,
          "longitude": 2.3522
        },
        "areaServed": ["France", "Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes"],
        "serviceType": "Digital Marketing",
        "priceRange": "€€€",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127"
        },
        "sameAs": [
          "https://linkedin.com/company/frameleads",
          "https://twitter.com/frameleads"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": digitalMarketingFaqData.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "WebSite",
        "url": "https://frameleads.com/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://frameleads.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="min-h-screen bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE] relative overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#FF8A50]/10 to-[#FF6B35]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-[#FF8A50]/8 to-[#FF6B35]/8 rounded-full blur-2xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-[#FF6B35]/6 to-[#FF8A50]/6 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-6">
              <span className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 backdrop-blur-xl text-[#FF6B35] px-6 py-3 rounded-full text-sm font-medium border border-[#FF6B35]/20">
                🏆 #1 Agence Marketing Digital en France
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Digital Marketing in France - Expert Services for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#FF8A50] to-[#FF6B35] drop-shadow-[0_0_20px_rgba(255,107,53,0.3)]">
                French Businesses
              </span>{" "}
              Delivering 420% ROI Growth
            </h1>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Transformez votre présence sur le marché français avec l'agence marketing digital la plus fiable d'Europe. Nous nous spécialisons dans des stratégies marketing digital complètes incluant SEO, PPC, marketing réseaux sociaux, content marketing, et développement web qui délivrent des résultats mesurables pour startups, PME, et entreprises à travers Paris, Lyon, Marseille, Toulouse, et toute la France.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/contact">
                <Button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-[#FF6B35]/25 hover:shadow-[#FF6B35]/40 transition-all duration-300 transform hover:scale-105">
                  Obtenez Votre Audit Marketing Digital Gratuit
                </Button>
              </Link>
              <Link href="tel:+33123456789" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Button variant="outline" className="border-[#FF6B35]/40 text-gray-600 hover:text-gray-900">
                  <Phone className="h-5 w-5 mr-2" /> Appelez +33 (0) 1 23 45 67 89
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>420% Augmentation ROI Moyenne</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>300+ Leads Qualifiés Mensuels</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>98% Taux de Rétention Client</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF6B35]" />
                <span>5+ Ans au Service des Entreprises Françaises</span>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 max-w-4xl mx-auto border border-[#FF6B35]/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 Fait Confiance par 350+ Entreprises Françaises</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">700+</div>
                  <div className="text-gray-600 text-sm">Campagnes Françaises Réussies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">35M€+</div>
                  <div className="text-gray-600 text-sm">Budget Publicitaire Géré</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">85%</div>
                  <div className="text-gray-600 text-sm">Amélioration Moyenne du Taux de Conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">40%</div>
                  <div className="text-gray-600 text-sm">Réduction du Coût d'Acquisition Client</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="relative py-16 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Résultats Prouvés à Travers la France</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Notre approche basée sur les données délivre une croissance mesurable pour les entreprises à travers le paysage digital dynamique français</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-[#FF6B35] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">420%</div>
                <div className="text-gray-600 text-sm">Croissance ROI Moyenne</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Users className="h-8 w-8 text-[#FF8A50] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">350+</div>
                <div className="text-gray-600 text-sm">Clients Français Servis</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.7 }}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF6B35]/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Award className="h-8 w-8 text-[#FF6B35] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] mb-2">25+</div>
                <div className="text-gray-600 text-sm">Villes Françaises Couvertes</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.9 }}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-[#FF8A50]/20 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Target className="h-8 w-8 text-[#FF8A50] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] mb-2">98%</div>
                <div className="text-gray-600 text-sm">Rétention Client</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <motion.div 
                    className="bg-gradient-to-r from-[#FF8A50] to-[#FF6B35] h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    transition={{ duration: 2, delay: 1.1 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Pourquoi Choisir Frameleads pour le Marketing Digital en France?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Frameleads se positionne comme la première agence marketing digital française, combinant une connaissance approfondie du marché français avec une expertise marketing digital de pointe. Notre approche complète garantit que chaque euro de votre budget marketing délivre un retour sur investissement maximum à travers tous les canaux digitaux sur le marché francophone.
              </p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Expertise Marketing Digital</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Analytics & Attribution Avancés: Modélisation d'attribution multi-touch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Gestion de Campagne Axée ROI: Résultats business mesurables</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Intégration Cross-Platform: Google Ads, Facebook, LinkedIn</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Optimisation du Taux de Conversion: Tests A/B systématiques</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Spécialisation Marché Français</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Intelligence du Marché Local: 5+ ans au service du paysage business français diversifié</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Expertise Spécifique à l'Industrie: SaaS français, e-commerce, immobilier, santé, fintech</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Connaissance de l'Écosystème Startup Français: Compréhension approfondie des cycles de financement startup français</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-gray-600">Excellence du Ciblage Régional: Ciblage hyper-local pour les principales villes françaises</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 group rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#FF8A50]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-0"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 to-[#FF8A50]/10 flex items-center justify-center z-10">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-[#FF6B35] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Dashboard</h3>
                  <p className="text-gray-600">Real-time marketing analytics and insights</p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[#FF6B35]/30 group-hover:ring-[#FF8A50]/50 z-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Marketing Services Section */}
      <section className="relative py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Services Marketing Digital Complets en France
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos services marketing digital complets sont conçus pour délivrer un ROI mesurable et stimuler la croissance business pour les entreprises françaises à travers toutes les industries à travers la France.
            </p>
          </div>

          <div className="space-y-12">
            {digitalMarketingServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <div className="flex items-start gap-6">
                        <motion.div 
                          className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#FF6B35]/25"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Services:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Results Delivered:</h4>
                            <ul className="space-y-2">
                              {service.results.map((result, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-600">
                                  <BarChart3 className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                                  <span>{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Performance Marketing Process Section */}
      <section className="relative py-20" id="process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre Processus Marketing Digital Prouvé pour les Entreprises Françaises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous suivons une approche marketing digital systématique spécifiquement conçue pour les entreprises françaises, combinant planification stratégique, excellence d'exécution, et optimisation continue pour délivrer des résultats mesurables à travers la France.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {digitalMarketingProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <Card className="relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 text-center relative z-10">
                    <motion.div 
                      className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {process.step}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#FF6B35] transition-colors duration-300">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                    <motion.div
                      className="w-full h-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] rounded-full mt-4"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-20" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Expertise Industrielle en France</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre expertise spécialisée s'étend à travers les industries clés en France, avec une compréhension approfondie des besoins marketing digital uniques et objectifs business dans chaque secteur à travers le marché français.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesWeServe.map((industry, index) => {
              const IconComponent = industry.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="group"
                >
                  <Card className="relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-6 relative z-10">
                      <motion.div 
                        className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{industry.title}</h3>
                    <p className="text-gray-600 mb-6 text-center">{industry.description}</p>
                    <ul className="space-y-2 mb-4">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                          <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#FF8A50]/10 rounded-lg p-3 mt-4">
                      <p className="text-[#FF6B35] text-sm font-semibold text-center">{industry.results}</p>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Performance Marketing Case Studies */}
      <section id="case-studies" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Histoires de Succès d'Entreprises Françaises</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous avons aidé les entreprises françaises à atteindre une croissance remarquable à travers des campagnes marketing digital stratégiques à travers la France.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {digitalMarketingCaseStudies.map((study, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{study.industry}</h3>
                    <p className="text-gray-600 text-sm mb-4">{study.location}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Défi:</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Résultats:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                          <BarChart3 className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Districts */}
      <section className="relative py-20" id="areas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Villes Françaises Que Nous Servons</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous fournissons des services marketing digital complets à travers tous les principaux hubs business français, aidant les entreprises dans chaque région à maximiser leur présence digitale et ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frenchBusinessMarkets.map((district, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="mb-4"
                    >
                      <MapPin className="h-6 w-6 text-[#FF6B35] group-hover:text-[#FF8A50] transition-colors duration-300" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 group-hover:text-[#FF6B35] transition-colors duration-300">{district.category}</h3>
                    <p className="text-gray-600 text-sm mb-4">{district.description}</p>
                  <div className="space-y-2">
                    {district.areas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#FF6B35]" />
                        <span className="text-gray-600 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20" id="faqs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Questions Fréquemment Posées sur le Marketing Digital en France
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtenez des réponses aux questions communes sur les services marketing digital en France et comment Frameleads peut aider votre entreprise à atteindre des résultats mesurables à travers la France.
            </p>
          </div>

          <div className="space-y-6">
            {digitalMarketingFaqData.map((faq, index) => (
              <Card key={index} className="group relative bg-white/80 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <Testimonials />

      {/* Contact CTA */}
      <ContactCTA
        title="Prêt à Transformer Votre Présence Digitale en France?"
        description="Partenaire avec Frameleads, l'agence marketing digital la plus fiable de France. Obtenez votre audit gratuit et découvrez comment nous pouvons vous aider à atteindre un ROI mesurable et une croissance business sur le marché français concurrentiel à travers toute la France."
        primaryButtonText="Obtenez Votre Audit Marketing Digital Français Gratuit"
        secondaryButtonText="Planifiez Votre Appel Stratégique Français"
      />

      {/* Comprehensive Digital Marketing Services in Bangalore */}
      <section className="relative py-20 bg-gradient-to-br from-[#FEFEFE] via-[#FDF8F5] to-[#FEFEFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Écosystème Marketing Digital Complet en France</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              En tant que première agence marketing digital française, nous offrons des services complets à travers tous les canaux digitaux. 
              Explorez nos services spécialisés conçus spécifiquement pour le paysage business français diversifié à travers la France.
            </p>
          </div>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* SEO Services in Bangalore */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Services SEO France</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Dominez les résultats de recherche avec nos stratégies SEO complètes adaptées aux entreprises françaises.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Optimisation SEO local pour les villes françaises</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Audits SEO techniques & corrections</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Optimisation de contenu & construction de liens</span>
                  </div>
                </div>
                <Link href="/seo-services" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explorer les Services SEO
                </Link>
              </CardContent>
            </Card>

            {/* Creative Advertising in Bangalore */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Creative Advertising Germany</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Captivate your German audience with innovative creative campaigns that drive engagement and conversions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Brand identity & visual design</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Video production & animation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Social media creative campaigns</span>
                  </div>
                </div>
                <Link href="/creative-advertising-company-in-bangalore" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Creative Services
                </Link>
              </CardContent>
            </Card>

            {/* B2B Marketing in Bangalore */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">B2B Marketing Germany</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Accelerate enterprise sales with targeted B2B marketing strategies for Germany's corporate ecosystem.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">LinkedIn marketing & lead generation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Account-based marketing (ABM)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Sales enablement & CRM integration</span>
                  </div>
                </div>
                <Link href="/b2b-marketing-company-in-bangalore" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore B2B Services
                </Link>
              </CardContent>
            </Card>

            {/* Real Estate Marketing in Bangalore */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Real Estate Marketing Germany</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Connect with property buyers through targeted digital marketing campaigns for Germany's real estate market.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Property listing optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Virtual tour integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Lead nurturing automation</span>
                  </div>
                </div>
                <Link href="/real-estate-marketing-company-in-bangalore" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Real Estate Services
                </Link>
              </CardContent>
            </Card>

            {/* Core Digital Marketing Services */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Core Digital Marketing</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Comprehensive digital marketing services covering all channels for maximum ROI and business growth.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">SEO & Content Marketing</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">PPC & Social Media Ads</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Web Design & Development</span>
                  </div>
                </div>
                <Link href="/digital-marketing-services" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore All Services
                </Link>
              </CardContent>
            </Card>

            {/* International Services */}
            <Card className="group relative bg-white/90 backdrop-blur-xl border-gray-200/50 hover:border-[#FF6B35]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#FF8A50]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">International Marketing</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  Expand your business globally with our international digital marketing expertise and local market knowledge.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Digital Marketing in Dubai</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Multi-market campaigns</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-[#FF6B35] flex-shrink-0" />
                    <span className="text-sm">Cultural adaptation strategies</span>
                  </div>
                </div>
                <Link href="/digital-marketing-in-dubai" className="block w-full text-center bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#FF8A50] hover:to-[#FF6B35] transition-all duration-300 transform hover:scale-105">
                  Explore Global Services
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources & Tools */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200/50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ressources & Outils Supplémentaires</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center group">
                <Link href="/contact" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Audit Marketing Français Gratuit</div>
                  <p className="text-sm text-gray-600">Obtenez une analyse complète de votre performance marketing digital actuelle sur le marché français</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/tools/roi-calculator" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Calculateur ROI</div>
                  <p className="text-sm text-gray-600">Calculez votre ROI marketing digital et optimisez votre allocation de budget pour les campagnes françaises</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/resources/digital-marketing-guide" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">Guide Marketing Digital</div>
                  <p className="text-sm text-gray-600">Guide complet des stratégies marketing digital et meilleures pratiques pour les entreprises françaises</p>
                </Link>
              </div>
              <div className="text-center group">
                <Link href="/academy" className="block">
                  <div className="text-[#FF6B35] font-medium mb-2 group-hover:text-[#FF8A50] transition-colors duration-300">FrameLeads Academy</div>
                  <p className="text-sm text-gray-600">Apprenez le marketing digital avec nos cours dirigés par des experts et programmes de formation pour le marché français</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative"
        >
          <Link href="/contact">
            <Button className="w-14 h-14 bg-gradient-to-r from-[#FF6B35] to-[#FF8A50] hover:from-[#FF8A50] hover:to-[#FF6B35] text-white rounded-full shadow-lg shadow-[#FF6B35]/30 hover:shadow-[#FF6B35]/50 transition-all duration-300">
              <Phone className="h-6 w-6" />
            </Button>
          </Link>
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            !
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
    </>
  )
}
