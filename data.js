/* ============================================================
   DATA.JS — C'est le SEUL fichier que tu dois modifier
   chaque semaine (ou quand tu veux changer un lien / un texte).
   Pas besoin de toucher au HTML ou au CSS.

   Astuce : garde bien les virgules et les guillemets " "
   quand tu modifies une ligne, sinon le site ne s'affichera plus.
   ============================================================ */

const TEAM_DATA = {

  // ---- IDENTITÉ DE L'ÉQUIPE ----
  teamName: "AZUR MOTORSPORT",
  teamTagline: "Simracing • Endurance & Sprint",
  logoPath: "assets/logo.png",       // <- dépose ton logo dans le dossier assets/ sous ce nom
  simGame: "Le Mans Ultimate",

  // ---- LIENS RAPIDES (page d'accueil) ----
  // "label" = texte affiché sur le bouton
  // "desc"  = petite description sous le titre
  // "url"   = lien vers ton Google Drive (dossier résultats, setups, etc.)
  quickLinks: [
    {
      label: "Endurance Week",
      desc: "Événement où l'on est inscrits",
      url: "endurance-week.html",
      icon: "target"
    },
    {
      label: "Palmarès",
      desc: "Résultats endurance passés",
      url: "palmares.html",
      icon: "trophy"
    },
    {
      label: "Bonus",
      desc: "Clips & Screens",
      url: "bonus.html",
      icon: "camera"
    },
    {
      label: "Setups",
      desc: "Fichiers de réglages",
      url: "setup.html",
      icon: "gear"
    },
    {
      label: "Google Drive",
      desc: "Toutes les ressources",
      url: "https://drive.google.com/drive/u/0/folders/1wxrSJxiQ4spaglGXnfArorTewncxDcAz",
      icon: "doc"
    }
  ],

  // ---- ÉVÉNEMENT ENGAGÉ (page "Endurance Week") ----
  // Contrairement au calendrier de la semaine, celui-ci a une date précise
  // car c'est un événement spécifique où l'équipe s'est inscrite.
  enduranceEvent: {
    status: "En Attente",              // inscrit | en attente | terminé
    title: "4 Heures de Spa-Francorchamps",
    series: "Special Event",
    track: "Spa-Francorchamps",
    car: "Porsche 992 LMGT3",
    format: "Endurance — 4 heures",
    date: "En attente",
    briefing: "Discord",
    // Infos piste, stratégie pneus, points d'attention, etc.
    notes: "Attention au Radillon en faible adherence"
  },

  // ---- SEMAINE EN COURS (mise à jour chaque mardi) ----
  weekUpdatedOn: "11 août 2026",   // <- change cette date à chaque mise à jour

  raceWeek: [
    {
      track: "Spa Francorchamps",
      car: "LMGT3 Fixed",
      session: "Course 20m",
    },
    {
      track: "Le Mans",
      car: "LMGTE Fixed",
      session: "Course 20m",
    },
    {
      track: "Bahrain",
      car: "LMP3 Fixed",
      session: "Course 20m",
    },
    {
      track: "Daytona",
      car: "LMGT3 Open",
      session: "Course 30m",
    },
    {
      track: "Laguna Seca",
      car: "LMP2, LMP3 Fixed",
      session: "Course 30m",
    },
    {
      track: "Monza",
      car: "LMP2, LMP3 & LMGT3 Open",
      session: "Course 30m",
    },
    {
      track: "Daytona",
      car: "Hypercar, LMGT3 Open",
      session: "Course 40m",
    },
    {
      track: "Barcelona",
      car: "LMP2, LMP3 & LMGT3 Open",
      session: "Course 60m",
    },
    {
      track: "Paul Ricard 1a v2",
      car: "Hypercar, LMGT3 Open",
      session: "Course 60m",
    },
    {
      track: "Spa Francorchamps",
      car: "LMP2, LMP3 & LMGT3 Open",
      session: "Course 144m",
    },
  ],

  // ---- PALMARÈS (page "Palmarès") ----
  // Historique des résultats endurance de l'équipe.
  palmares: [
    {
      event: "6 Heures d'Interlagos",
      track: "Interlagos",
      car: "Porsche 992 LMGT3",
      result: "7e en catégorie LMGT3",
      note: "Bataille avec l'equipe de Norton, a jamais dans nos mémoire"
    },
    {
      event: "4 Heures d'Imola",
      track: "Imola",
      car: "BMW M4 LMGT3",
      result: "7e en catégorie LMGT3",
      note: "Combat contre les degats sur la voiture"
    },
  ],

  // ---- BONUS (page "Bonus") ----
  // Clips et screenshots affichés directement sur la page (pas de lien
  // externe cliquable).
  // "image" : capture affichée directement. Dépose le fichier dans
  //           assets/bonus/ et indique son nom ici.
  // "video" : clip affiché directement (lecteur vidéo intégré). Dépose le
  //           fichier .mp4 dans assets/bonus/ et indique son nom ici.
  // "embed" : pour un clip hébergé ailleurs (YouTube, Twitch...), colle ici
  //           le lien "embed" (ex: https://www.youtube.com/embed/ID_VIDEO)
  //           — il s'affichera directement dans la page, pas de bouton.
  // Ne renseigne qu'UN SEUL de ces trois champs par élément, laisse les
  // autres vides ("").
  bonusItems: [
    {
      tag: "Clip",
      title: "Tampon sur Norton au 6h",
      note: "",
      image: "",
      video: "video1.mp4",
      embed: "",
    },
  ],

  // ---- SETUPS (page "Setup") ----
  // Tes fichiers de réglages .rar, téléchargeables directement.
  // "file" : dépose le .rar dans assets/setups/ et indique son nom exact ici.
  setupFiles: [
    {
      title: "Porsche 992 LMGT3 Laguna Seca",
      note: "",
      file: "GO V1.4 992GT3 LMGT3 LAG.zip"
    },
     {
      title: "Porsche 992 LMGT3 Daytona",
      note: "",
      file: "GO V1.4 992GT3 LMGT3 DTN.zip"
    },
     {
      title: "Ford Mustang LMGT3 Daytona",
      note: "",
      file: "GO V1.4 MUSTANG LMGT3 DTN.zip"
    },
     {
      title: "Oreca O7 ELMS Daytona",
      note: "",
      file: "GO V1.4 ORECA ELMS LMP2 DTN.zip"
    },
      {
      title: "Oreca O7 ELMS Paul Ricard",
      note: "",
      file: "GO-ORECA-07-ELMS-PAUL-RICARD.zip"
    },
      {
      title: "Oreca O7 ELMS Spa",
      note: "",
      file: "GO-ORECA-07-ELMS-SPA.zip"
    },
      {
      title: "Oreca O7 ELMS Le Mans",
      note: "",
      file: "GO-ORECA-07-ELMS-LE-MANS.zip"
    },
      {
      title: "Oreca O7 ELMS Bahrain",
      note: "",
      file: "GO-ORECA-07-ELMS-BAHRAIN.zip"
    },
      {
      title: "Oreca O7 ELMS Portimao",
      note: "",
      file: "GO-ORECA-07-ELMS-PORTIMAO.zip"
    },
      {
      title: "Oreca O7 ELMS Sebring",
      note: "",
      file: "GO-ORECA-07-ELMS-SEBRING.zip"
    },
      {
      title: "Oreca O7 ELMS Cota",
      note: "",
      file: "GO-ORECA-07-ELMS-COTA.zip"
    },
      {
      title: "Porsche 992 LMGT3 Qatar",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-QATAR.zip"
    },
      {
      title: "Porsche 992 LMGT3 Portimao",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-PORTIMAO.zip"
    },
     {
      title: "Porsche 992 LMGT3 Silverstone",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-SILVERTSTONE.zip"
    },
      {
      title: "Porsche 992 LMGT3 Bahrain",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-BAHRAIN.zip"
    }, 
      {
      title: "Porsche 992 LMGT3 Le Mans",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-LE-MANS.zip"
    },
      {
      title: "Porsche 992 LMGT3 Monza",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-MONZA.zip"
    },
      {
      title: "Porsche 992 LMGT3 Spa",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-SPA.zip"
    },
      {
      title: "Porsche 992 LMGT3 Cota",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-COTA.zip"
    },
      {
      title: "Porsche 992 LMGT3 Paul Ricard",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-PAUL-RICARD.zip"
    }, 
      {
      title: "Porsche 992 LMGT3 Interlagos",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-INTERLAGOS.zip"
    }, 
      {
      title: "Porsche 992 LMGT3 Barcelona",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-BARCELONA.zip" 
    }, 
      {
      title: "Porsche 992 LMGT3 Imola",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-IMOLA.zip"
    },
      {
      title: "Porsche 992 LMGT3 Sebring",
      note: "",
      file: "GO-PORSCHE-992-LMGT3-SEBRING.zip"
    }, 
   {
      title: "Bmw M4 LMGT3 Imola",
      note: "",
      file: "GO-BMW-M4-LMGT3-IMOLA.zip"
    },   
  ]
};
