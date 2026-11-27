"use strict";
// MSP Respi : kiné respiratoire pédiatrique (bronchiolite, pédiatrie respiratoire) + cours cardio Lamotte.
// Sources : CR 2026-27 (19/11/2026 ventilation mécanique, cas bronchiolite ; 12/11/2026), cours RESPI PEDIA, CR 2024-25 (27/02/25, 20/03/25, 13/03/25, 17/04/25),
// notes de Lise (0404 bronchiolite), synthèses (MSP bronchiolite, résumé bronchiolite, mucoviscidose, médicaments), trame MSP RESPI, techniques de KR,
// rapport de stage bronchiolite, cas inventé BRONCHIOLITE de Wallace, cours cardio Lamotte.
(function () {
  const M = window.MSPDATA; if (!M) return;
  const LIB = "Bibliothèque MSP › ";
  const S = (k, t, f, kind) => (M.SRC[k] = { t, k: kind || "Cours respi", f: f ? LIB + f : undefined });
  const R = "03_RESPI › ", A26 = R + "A_Comptes rendus MSP 2026-27 (cette annee) › ", B25 = R + "B_Comptes rendus MSP annees precedentes › Notes de cours MSP 2024-25 › ",
    BL = R + "B_Comptes rendus MSP annees precedentes › Notes de cours MSP de Lise (annee anterieure) › ", C = R + "C_Cours de base et fiches de cours › ", D = R + "D_Syntheses et fiches d'etudiants › ", E = R + "E_Rapports de stage (exemples) › ";
  S("rp_cr1911", "MSP respi 19/11/2026 : ventilation mécanique + cas pratique bronchiolite du nourrisson (6 mois) et reco HAS 2019", A26 + "2026-11-19 - Respi - Ventilation mecanique (cours).pdf", "CR 2026-27");
  S("rp_cr1211", "MSP respi 12/11/2026 : auscultation, atélectasie, surfactant du nourrisson", A26 + "2026-11-12 - Respi - Auscultation.pdf", "CR 2026-27");
  S("rp_pedia", "Cours « Kiné respiratoire pédiatrique » (RESPI PEDIA) : anatomie, normes, bilans, pneumonie, muco, asthme, bronchiolite", C + "RESPI PEDIA.docx", "Cours de base");
  S("rp_cr2702", "MSP respi 27/02/2025 (groupe B) : bronchiolite, bébé de 6 mois hospitalisé + positionnement", B25 + "25.02.27_Groupe B_Bronchiolite.pdf", "CR années précédentes");
  S("rp_cr2003", "MSP respi 20/03/2025 (groupe C) : bronchiolite (bébé 6 mois) et soins intensifs", B25 + "25.03.20_Groupe C bronchiolite et soins intensifs.pdf", "CR années précédentes");
  S("rp_cr1303", "MSP respi 13/03/2025 (groupe B) : syndrome restrictif, mucoviscidose, rappels", B25 + "25.03.13_Groupe B_Syndrome Restrictif _ Mucoviscidose _ Rappels.pdf", "CR années précédentes");
  S("rp_cr1704", "MSP respi 17/04/2025 (groupe A) : cas réa et urgence + théorie (remarques sur la pédiatrie)", B25 + "25.04.17_Groupe A_Cas clinique réa et urgence + théorie.pdf", "CR années précédentes");
  S("rp_lise0404", "Notes de cours (année antérieure) : bronchiolite sévère sur un bébé de 6 mois (04/04)", BL + "0404 bronchiolite.docx", "CR années précédentes");
  S("rp_0802", "Séance de correction des rapports de stage (08/02/2024) et révisions", E + "0802 correction des rapports.docx", "CR années précédentes");
  S("rp_msbronch", "Synthèse d'étudiants « MSP bronchiolite » (physiologie pédiatrique, critères de gravité, séance pratique)", D + "MSP_bronchiolite.pdf", "Synthèse d'étudiants");
  S("rp_resume", "Synthèse d'étudiant « Bronchiolite résumé » (anamnèse, Wang/Beck, logique de traitement)", D + "Bronchiolite résumé.pdf", "Synthèse d'étudiants");
  S("rp_trame", "Trame MSP RESPI (anamnèse et bilans : général, mucoviscidose, bronchiolite)", C + "MSP RESPI.docx", "Cours de base");
  S("rp_techkr", "Fiches « techniques de KR » (ELTGOL, ACBT, DA, ELPr, AFE, drainage postural, EDIC)", C + "techniques de KR.docx", "Synthèse d'étudiants");
  S("rp_kinepra", "Synthèse « Kiné respi pratique MSP » (désencombrement VAS/VAI, toux)", D + "Kiné respi pratique_MSP.pdf", "Synthèse d'étudiants");
  S("rp_rapport", "Rapport de stage : bronchiolite, nourrisson L.C. de 8 mois (cabinet, bilan du 13/11/2023)", E + "rapport bronchiolite.docx", "Rapport de stage");
  S("rp_wallace", "Cas inventé « BRONCHIOLITE » (bébé de 6 mois) écrit par Wallace", "09_Mes travaux et cas inventes › Cas inventes › BRONCHIOLITE.docx", "Cas inventé (Wallace)");
  S("rp_muco", "Synthèse d'étudiants « Mucoviscidose MSP » (cours de kiné respiratoire de Mme Daubechies)", D + "Mucoviscidose_MSP.pdf", "Synthèse d'étudiants");
  S("rp_patho", "Cours « PATHO RESPI » (MSP respi 2025) : sémiologie et pathologies respiratoires", C + "PATHO RESPI.docx", "Cours de base");
  S("rp_crombin", "Cours de physiologie respiratoire (M. Crombin) : surfactant, prématuré", C + "Physio respi crombin EVA.pdf", "Cours de prof");
  S("rp_medic", "Synthèse « Médicaments et modes d'administration RESPI MSP » (aérosols, chambre d'inhalation)", D + "Médicaments et modes d'administration_RESPI_MSP.pdf", "Synthèse d'étudiants");
  S("rp_fincours", "Synthèse « Fin de cours 2024-25 » (aérosolthérapie : taille des particules, appareils)", D + "Fin-cours-24-25.pdf", "Synthèse d'étudiants");
  S("rp_scaillet", "Synthèse de bilan réanimation (aspiration, aérosolthérapie, consensus ELPr)", C + "scaillet jado.docx", "Synthèse d'étudiants");
  S("rp_bilancr", "Bilan cardio-respiratoire (toux : réflexe, toux provoquée de l'enfant, corps étranger)", "07_TRANSVERSAL - bilans, tests et echelles › 5. Bilan cardio-respi.pdf", "Cours transversal");
  S("rp_lamotte", "Cours de réadaptation cardiaque (Lamotte) : post-infarctus, post-op chirurgie cardiaque, endurance, renforcement, cas", C + "cardio lamotte.pdf", "Cours de prof");
  S("rp_hors", "Complément hors cours : connaissances médicales standard (grilles de scores, premiers secours), à confirmer avec tes profs", undefined, "Hors cours");

  const T = (rows, head) => `<table class="mt">${head ? `<tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>` : ""}${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;
  const W = t => `<p class="small warn">⚠️ ${t}</p>`;
  const HC = t => `<p class="small">📎 <b>Complément hors cours</b> : ${t}</p>`;
  const q = (id, part, txt, a, d, src, expl) => ({ id, part, q: txt, a, d, src, expl });

  // ---------- Tests et échelles pédiatriques ----------
  Object.assign(M.TESTS, {
    rp_wang: { nom: "Score de Wang (bronchiolite)", cat: "Respiratoire", but: "Coter la gravité d'une bronchiolite (degré d'obstruction) chez le nourrisson jusqu'à 24 mois, et décider : pas de kiné, kiné, ou hospitalisation.",
      deroul: "Bébé calme, déshabillé, nez lavé avant. On compte la FR sur 1 minute, on ausculte (sibilants), on regarde les tirages et on apprécie l'état général (alimentation, sommeil, éveil). 4 items cotés chacun de 0 à 3, total sur 12.",
      faux: ["On ferme la bouche du bébé et on compte combien de cycles il fait par le nez sans se débattre.", "On cote 5 items de 0 à 2 (tirage, balancement, ailes du nez, entonnoir xiphoïdien, geignement), total sur 10.", "On mesure la SpO2 et la FC seules, total sur 18."],
      cot: "FR, sibilants (wheezing), tirage / signes de lutte, état général : chacun 0 à 3, total /12 (CR 19/11/2026). Grille hors cours (Wang 1992) : FR < 30 = 0, 31-45 = 1, 46-60 = 2, > 60 = 3 ; sibilants : aucun 0, fin d'expiration ou au stéthoscope seulement 1, toute l'expiration ou audibles sans stéthoscope 2, inspi et expi sans stéthoscope 3 ; tirage : aucun 0, intercostal 1, sus-sternal 2, sévère avec battement des ailes du nez 3 ; état général : normal 0, irritable, léthargique ou mange mal 3.",
      positif: "Bénigne (score < 4, 50 à 60 % des cas) : guérit seule, pas de kiné. Modérée (4 à 8) : kiné. Sévère (9 à 12) : hospitalisation, pas de kiné tant que le bébé est instable et spastique.",
      diag: "Gravité de la bronchiolite. Le score de Beck ajoute la SpO2 (normale > 95 %) et la FC (normale < 140), total sur 18.", incl: "Nourrisson jusqu'à 24 mois.", src: ["rp_cr1911", "rp_lise0404", "rp_pedia", "rp_trame", "rp_hors"] },
    rp_rosenthal: { nom: "Test (score) de Rosenthal", cat: "Respiratoire", but: "Savoir si les voies aériennes supérieures (nez) sont obstruées chez le nourrisson, donc s'il faut un lavage de nez / une désobstruction rhinopharyngée.",
      deroul: "On ferme la bouche du bébé (pression sous le menton, ou tranche cubitale de la main) et on le laisse respirer par le nez une quinzaine de cycles (15 à 20 selon les supports).",
      faux: ["On bouche une narine puis l'autre et on écoute au stéthoscope le bruit de passage de l'air.", "On place un miroir froid sous le nez et on regarde la buée.", "On compte la FR bouche ouverte pendant 1 minute."],
      cot: "Négatif : le bébé respire calmement par le nez pendant les ~15 cycles sans se débattre. Positif : il n'y arrive pas, se débat, s'essouffle ou désature.",
      positif: "Test positif = obstruction nasale : lavage de nez au sérum physiologique 0,9 % puis DRR, AVANT l'auscultation.",
      diag: "Obstruction des VAS (rhinopharyngite). Indice indirect : un bébé qui garde sa tétine en bouche et prend bien son biberon respire bien par le nez.", incl: "Nourrisson (respiration nasale quasi obligatoire).", src: ["rp_cr1911", "rp_msbronch", "rp_pedia", "rp_cr2003", "rp_cr2702", "rp_0802"] },
    rp_silverman: { nom: "Score de Silverman", cat: "Respiratoire", but: "Coter l'intensité des signes de lutte (détresse respiratoire) du nouveau-né et du nourrisson.",
      deroul: "On observe l'enfant déshabillé, au calme : balancement thoraco-abdominal, tirage intercostal, entonnoir xiphoïdien, battement des ailes du nez, geignement expiratoire.",
      faux: ["On compte la FR, les sibilants, les tirages et l'état général, total sur 12.", "On mesure le débit expiratoire de pointe et on le compare à la valeur théorique.", "On ferme la bouche et on compte les cycles nasaux."],
      cot: "5 items. Le cours dit seulement : plus le score est élevé, plus l'enfant est en détresse (la cotation est une image absente des notes). Hors cours : chaque item 0, 1 ou 2, total sur 10 ; 0 = pas de détresse.",
      positif: "Score élevé = détresse respiratoire importante, à signaler au médecin.", diag: "Intensité de la lutte respiratoire.", incl: "Nouveau-né, nourrisson.", src: ["rp_pedia", "rp_hors"] },
    rp_pram: { nom: "Score PRAM (asthme de l'enfant)", cat: "Respiratoire", but: "Évaluer la sévérité d'une crise d'asthme chez l'enfant.",
      deroul: "Observation et auscultation de l'enfant en crise, SpO2 en air ambiant.",
      faux: ["On compte les cycles nasaux bouche fermée.", "On cote 5 signes de lutte de 0 à 2, total sur 10.", "On fait 3 manœuvres de DEP et on garde la meilleure."],
      cot: "Cité dans le cours sans grille. Hors cours : tirage sus-sternal (0/2), contraction des scalènes (0/2), sibilances (0 à 3), entrée d'air (0 à 3), SpO2 (≥ 95 % = 0, 92-94 % = 1, < 92 % = 2) ; total sur 12 : 0-3 léger, 4-7 modéré, 8-12 sévère.",
      positif: "Score élevé = crise sévère.", diag: "Sévérité de la crise d'asthme.", incl: "Enfant asthmatique.", src: ["rp_pedia", "rp_hors"] }
  });

  // =====================================================================
  // FICHE 1 : BRONCHIOLITE
  // =====================================================================
  const bro = {
    id: "rp_bronchio", cell: "respi", titre: "Bronchiolite du nourrisson : bilan, désobstruction, ELPr, conseils aux parents", court: "Bronchiolite",
    statut: "Contenu repris du CR 2026-27 (19/11/2026), du cours RESPI PEDIA, des CR 2024-25 (27/02, 20/03), des notes « bronchiolite sévère 6 mois », des synthèses d'étudiants, du rapport de stage et du cas inventé de Wallace. Les grilles des scores de Wang et de Silverman sont des images absentes des notes : la grille donnée ici est un complément hors cours, à confirmer.",
    resume: [
      "Bronchiolite = infection <b>virale</b> aiguë des bronchioles, nourrisson de <b>1 mois à 2 ans</b>, épidémies de novembre à février (pic en décembre). <b>VRS</b> : 70 à 80 % des cas.",
      "Début par une <b>rhinopharyngite</b> (rhinorrhée), puis <b>toux quinteuse sèche</b> qui devient <b>grasse</b>, polypnée, signes de lutte, sibilants et/ou crépitants. Évolution non compliquée en moins de 7 jours ; pic vers J3-J5 ; les 48 premières heures sont à risque d'aggravation.",
      "<b>Score de Wang</b> (jusqu'à 24 mois) : FR, sibilants, tirage, état général, chacun 0 à 3, total /12. Bénigne (&lt; 4) : pas de kiné ; modérée (4 à 8) : kiné ; <b>sévère (≥ 9)</b> : hospitalisation, pas de kiné. Le score de Beck ajoute SpO2 et FC (/18).",
      "<b>Red flags</b> : FR &gt; 60 ou &lt; 30/min, FC &gt; 180 ou &lt; 80, apnées, SpO2 &lt; 92 %, cyanose, signes de lutte intenses, alimentation &lt; 50 % sur 3 repas, perte de poids ≥ 5 %, âge &lt; 2 mois, prématurité, enfant apathique ou somnolent, déshydratation (fontanelle).",
      "<b>Timing</b> : tant que l'enfant est « spastique » (sibilants, toux sèche), on ne désencombre pas : on stabilise et on éduque. Quand la toux devient grasse, on peut désencombrer, si l'état le permet.",
      "<b>HAS 2019 (à citer à l'oral)</b> : pas de kiné de désencombrement bronchique pour un 1er épisode chez le nourrisson &lt; 12 mois ; clapping, vibrations et drainage postural contre-indiqués. Le kiné garde son rôle : surveillance, gravité, désobstruction nasale, éducation, orientation.",
      "VAS : lavage de nez au <b>sérum physiologique 0,9 %</b> réchauffé, mouchage antérograde ou <b>DRR</b> (bouche fermée en fin d'expiration, inspiration nasale). Plus de volume, moins de pression.",
      "VAI : <b>ELPr</b> (proclive 30°, main abdominale en contre-appui, main thoracique qui descend vers le VRE en 3 à 5 cycles, puis relâcher), <b>toux provoquée</b> (pression brève au-dessus de la fourchette sternale), AFE.",
      "Auscultation <b>après</b> le lavage de nez, bébé déshabillé, au calme, bases vers sommets, sans oublier le <b>lobe moyen droit</b> ; on réausculte et on reprend les paramètres en fin de séance.",
      "Pas de TA chez le nourrisson hospitalisé ; oxymètre sur l'<b>hallux</b> ; le saturomètre ne donne pas la FR (la compter sur 1 minute).",
      "Médicaments : antibiotiques sans intérêt sauf surinfection, corticoïdes sans intérêt, bronchodilatateurs à effet pseudo-paradoxal avant 1 an ; antitussifs, mucolytiques, mucorégulateurs contre-indiqués. Sérum hypertonique 3 % (ou 7 %) : intéressant contre l'œdème sous-muqueux.",
      "Conseils aux parents : tabac (jamais dans la pièce ni la voiture, veste dédiée, mains lavées), lavage de nez avant repas et coucher, proclive 30°, couchage sur le dos, chambre 18-20 °C aérée, pas d'humidificateur, peu de peluches, repas fractionnés, hydratation, hygiène, signes de gravité.",
      "3e épisode de sifflements avant 1 an = penser à l'<b>asthme du nourrisson</b> (consensus de Londres)."
    ],
    pro: [
      { id: "def", titre: "1. Définition, épidémiologie, VRS, facteurs de risque", src: ["rp_pedia", "rp_msbronch", "rp_cr2003", "rp_resume"], html:
        `<p><b>Définition (RESPI PEDIA)</b> : infection virale respiratoire aiguë qui atteint les <b>bronchioles</b> (petites bronches), saisonnière, sous forme d'épidémies, chez le nourrisson de moins de 2 ans. <b>Synthèse MSP bronchiolite</b> : nourrisson de <b>1 mois à 2 ans</b> qui présente, au décours d'une rhinopharyngite, une <b>toux et une dyspnée obstructive</b>. Le CR 2026-27 parle de « broncho-alvéolite » pour le cas du nourrisson hospitalisé.</p>
        <p><b>Saisonnalité</b> : novembre, décembre (pic), février.</p>
        <p><b>Étiologie</b> : virus respiratoire syncytial (<b>VRS</b>) dans 80 % des cas (RESPI PEDIA) ou 70 à 80 % (synthèse) ; aussi le rhinovirus et le virus para-influenza de type 3. <b>Incubation 2 à 5 jours</b> : le virus se multiplie d'abord dans la muqueuse nasale avant de gagner les voies respiratoires inférieures (Faure, 2000). C'est pourquoi le premier signe est la rhinorrhée / rhinite.</p>
        ${T([["Directe (voie aérienne)", "Gouttelettes d'air expirées, jetage rhinopharyngé"], ["Indirecte", "Survie du virus 6 à 7 h sur les objets et le linge, 30 min sur la peau : d'où le lavage des mains et la désinfection (table à langer, jouets)"]], ["Transmission", "Détail"])}
        <p><b>Évolution</b> : une bronchiolite aiguë non compliquée dure <b>moins de 7 jours</b> ; le pic est souvent vers <b>J3-J5</b> (CR 2026-27) ; les <b>48 premières heures</b> sont importantes pour le risque d'aggravation (CR 27/02/25).</p>
        <p><b>Facteurs de risque</b> (RESPI PEDIA et résumé) :</p>
        <ul><li>poids de naissance &lt; 2,5 kg ;</li><li>absence d'allaitement maternel (le lait maternel protège sur le plan immunitaire) ;</li><li>pollution (tabac ++), environnement industriel ;</li><li>humidité de la maison, crèches, salle d'attente du médecin (collectivités = « nid à microbes ») ;</li><li>prédisposition génétique ; les <b>garçons</b> sont plus atteints que les filles ;</li><li>prématurité (&lt; 34 SA dans le résumé : facteur de forme grave et d'hospitalisation).</li></ul>
        <p><b>Récidives</b> : à partir du <b>3e épisode</b> de sifflements / de bronchiolite dans la première année de vie, on évoque un <b>asthme du nourrisson</b> (consensus de Londres). Voir le chapitre anamnèse pour l'arbre de décision.</p>` },
      { id: "physio", titre: "2. Physiopathologie : pourquoi le nourrisson se décompense vite", src: ["rp_pedia", "rp_msbronch", "rp_cr1911", "rp_lise0404", "rp_cr1211"], html:
        `<p>« L'enfant n'est pas un adulte en miniature. » Les particularités du nourrisson expliquent la gravité possible d'une simple infection virale (détails dans la fiche « Pédiatrie respiratoire ») :</p>
        <ul><li><b>Respiration nasale quasi obligatoire</b> (jusqu'à 4 mois selon la synthèse, pendant les 6 premiers mois selon RESPI PEDIA ; à 6 mois un bébé peut commencer à respirer par la bouche selon le CR 20/03/25) : un nez bouché gêne la respiration ET l'alimentation (« un nourrisson encombré du nez mange mal »).</li>
        <li><b>Résistances nasales très élevées</b> (1/3 des résistances totales ; 50 % des résistances inspiratoires dans le nez contre 20 % chez l'adulte) : un simple rhume peut créer une obstruction majeure.</li>
        <li>Conduits aériens distaux plus étroits, bronches plus compliantes (risque de collapsus expiratoire), plus de glandes à mucus (encombrement rapide), moins de pores de Kohn (atélectasies).</li>
        <li>Cage thoracique plus compliante que les poumons : les pressions manuelles sont transmises directement au poumon (on peut créer un collapsus si on comprime trop).</li>
        <li>Diaphragme presque plat, côtes horizontales, muscles riches en fibres rapidement fatigables : épuisement rapide.</li>
        <li>Immaturité immunitaire (immunité à peu près complète vers 6 ans).</li></ul>
        <p><b>Deux phases cliniques</b> qui commandent la kiné (CR 2026-27 et RESPI PEDIA) :</p>
        ${T([["Phase obstructive, « spastique »", "Bronchioles inflammées et rétrécies, œdème, bronchospasme : sibilants, wheezing, toux sèche quinteuse", "On ne désencombre pas : stabiliser (O2, aérosols selon prescription), surveiller, éduquer au mouchage"], ["Phase sécrétoire", "Hypersécrétion : toux grasse, productive, crépitants / craquements, ronchi", "Désencombrement possible (ELPr, toux provoquée, DRR) si l'état le permet (pas en détresse, Wang &lt; 9)"]], ["Phase", "Ce qu'on observe", "Conduite kiné"])}
        <p><b>Surfactant</b> (CR 12/11/2026) : produit par les pneumocytes de type 2, il crée une tension de surface qui empêche les alvéoles de s'effondrer. Chez le prématuré, il est immature : c'est pourquoi on demande le terme et si l'enfant a été « surfacté » (voir fiche Pédiatrie).</p>
        <p><b>Radio</b> : la bronchiolite donne une <b>hyperinflation du thorax</b> (synthèse radio). Le RESPI PEDIA réserve la radio aux cas les plus graves ou à la suspicion de pneumonie.</p>` },
      { id: "signes", titre: "3. Tableau clinique, diagnostic, saturation et oxygène", src: ["rp_pedia", "rp_msbronch", "rp_cr1911", "rp_lise0404"], html:
        `<p><b>Tableau clinique (RESPI PEDIA)</b> :</p>
        <ul><li>débute par une <b>rhinopharyngite</b> (rhinorrhée aqueuse ou purulente, rhinite) ;</li><li><b>toux quinteuse au début puis grasse et productive</b> ;</li><li>tachypnée, <b>hyperinflation</b>, tirage intercostal et sus-sternal, battement des ailes du nez, geignement, <b>sibilances et/ou craquements</b> ;</li><li>signes de lutte respiratoire ; respiration sifflante ;</li><li>température normale ou peu élevée (le même support cite aussi « température &gt; 38 °C, AEG » : la fièvre est fréquente chez le jeune enfant, d'où les antipyrétiques) ;</li><li>diminution de l'alimentation ; troubles digestifs (vomissements, diarrhées).</li></ul>
        <p><b>Signes de difficulté respiratoire (synthèse)</b> : tirages, battement des ailes du nez, hyperinflation thoracique, geignement et sibilances, SpO2 &lt; 95 %.</p>
        <p><b>Diagnostic</b> : clinique. Le diagnostic étiologique n'est pas utile ; la recherche systématique de virus n'est <b>pas recommandée</b> (la recherche d'antigène VRS existe) ; oxymétrie de pouls ; <b>radiographie seulement pour les cas les plus graves</b>. L'échographie ne montre pas l'encombrement (elle montre un épanchement pleural ou une pneumonie) et « on ne la fait pas chez un bébé » (notes 04/04) ; la radio montre l'état d'encombrement.</p>
        <p><b>Classification par la SpO2 à l'éveil en air ambiant (RESPI PEDIA)</b> :</p>
        ${T([["&gt; 92 %", "Légère"], ["90 % &lt; SpO2 ≤ 92 %", "Modérée"], ["≤ 90 % ou cyanose", "Grave"]], ["SpO2", "Forme"])}
        <p><b>Oxygène (RESPI PEDIA)</b> :</p>
        <ul><li>forme grave : O2 recommandé, cible <b>&gt; 94 %</b> ;</li><li>forme modérée : O2 si <b>SpO2 ≤ 92 %</b>, cible <b>&gt; 92 % à l'éveil et &gt; 90 % au sommeil</b> ;</li><li>surveillance <b>continue</b> de la SpO2 dans les formes graves et chez tout nourrisson sous O2 ;</li><li>cible de <b>sevrage</b> de l'O2 : SpO2 = 92 % chez un nourrisson stable.</li></ul>
        <p>Dans les cas de cours, le bébé hospitalisé est sous <b>lunettes nasales à 2 L/min</b>. On note toujours la SpO2 « et sous combien d'O2 » (CR 2026-27).</p>
        ${W("Les seuils de SpO2 varient selon les supports (95 %, 94 %, 92 %, 90 %) : voir REMARQUES. Retiens : &lt; 92 % = critère de gravité (HAS), cible &gt; 92 % éveil.")}` },
      { id: "scores", titre: "4. Scores et tests : Wang, Beck, Rosenthal, Silverman, bilans ciblés", src: ["rp_cr1911", "rp_lise0404", "rp_pedia", "rp_trame", "rp_resume", "rp_rapport", "rp_hors"], html:
        `<p><b>Score de Wang</b> : degré d'obstruction / sévérité, valable <b>jusqu'à 24 mois</b>. Items (CR 2026-27) : <b>FR, sibilants, tirage, état général</b>, chacun de 0 à 3, total sur 12 ; <b>forme sévère à partir de 9</b>. L'état général comprend l'alimentation, le sommeil, la somnolence (qui peut signer une hypercapnie). FR normale « en dessous de 30 cycles/min » (notes 04/04).</p>
        ${T([["Bénigne / légère", "&lt; 4 (RESPI PEDIA écrit « &lt; 3 »), 50 à 60 % des cas", "Guérit seule : pas de kiné (surveillance, éducation)"], ["Modérée", "4 à 8 (trame, résumé) ; « 4 à 9 » (RESPI PEDIA, notes 04/04)", "Kiné respiratoire"], ["Sévère", "9 à 12", "Hospitalisation, pas de kiné : bébé trop instable et trop spastique. Quand le score baisse et que la toux devient grasse, on peut commencer"]], ["Forme", "Score", "Conduite"])}
        ${W("Les bornes se chevauchent selon les supports (9 est « modérée » et « sévère »). Retiens la version du CR 2026-27 : sévère à partir de 9, donc modérée = 4 à 8.")}
        ${HC("grille originale de Wang (1992). FR : &lt; 30 = 0 ; 31-45 = 1 ; 46-60 = 2 ; &gt; 60 = 3. Sibilants : aucun = 0 ; en fin d'expiration ou au stéthoscope seulement = 1 ; sur toute l'expiration ou audibles sans stéthoscope = 2 ; inspiratoires et expiratoires sans stéthoscope = 3. Tirage : aucun = 0 ; intercostal seul = 1 ; sus-sternal = 2 ; sévère avec battement des ailes du nez = 3. État général : normal = 0 ; irritable, léthargique, mange mal = 3. Le rapport de stage utilise un « Wang modifié » : FR 2 points pour 45-60 cpm, sibilants, crépitants, signes de lutte, état général (1 point si « enfant facile à consoler »).")}
        <p><b>Score de Beck</b> : ajoute au Wang la <b>SpO2</b> (normalement &gt; 95 %) et la <b>FC</b> (normalement &lt; 140) ; score <b>jusqu'à 18</b>. Mêmes paliers de décision dans le résumé (4+ modéré, 9+ sévère).</p>
        <p><b>Test de Rosenthal</b> (VAS) : on ferme la bouche de l'enfant et on le laisse respirer par le nez pendant <b>une quinzaine de cycles</b> (CR 2026-27 ; « 15 cycles » synthèse ; « 15 à 20 » CR 20/03/25 ; « 20 » RESPI PEDIA et trame ; « 10 à 20 » CR 27/02/25). S'il désature, se débat ou s'essouffle (test <b>positif</b>) : obstruction nasale, donc lavage de nez / désobstruction rhinopharyngée. On peut fermer la bouche avec la tranche cubitale de la main (correction 08/02/24).</p>
        <p><b>Score de Silverman</b> (signes de lutte) : tirage, balancement thoraco-abdominal, battement des ailes du nez, entonnoir xiphoïdien, geignement ; plus il est élevé, plus l'enfant est en détresse (détails dans la fiche Pédiatrie).</p>
        <p><b>Test de Gudin</b> : cité « positif » dans le rapport de stage, sans explication dans aucun support.</p>
        <p><b>Bilans ciblés de la bronchiolite (RESPI PEDIA)</b> : ce tableau sert de fiche de suivi d'une séance à l'autre.</p>
        ${T([["Tirage", "0 / +"], ["Polypnée", "cycles/min"], ["Résistance expiratoire", "oui / non"], ["SpO2", "avant et après la séance"], ["Sécrétions rhinopharyngées", "0 / + / ++"], ["Bruits respiratoires", "wheezing, sibilants, crépitants"], ["Encombrement", "0 / +"], ["Toux", "0 / + : sèche improductive, grasse productive, matinale, nocturne, incessante"], ["Expectoration", "séreuse, muqueuse, purulente"], ["Température", "0 / N"], ["Vomissements", "oui / non"], ["Sommeil perturbé", "oui / non"], ["Alimentation normale", "oui / non"], ["Amélioration clinique franche", "à noter en fin de séance"]], ["Item", "Cotation"])}` },
      { id: "gravite", titre: "5. Red flags, critères d'hospitalisation, quand renvoyer au médecin", src: ["rp_pedia", "rp_msbronch", "rp_cr2702", "rp_cr2003", "rp_cr1911", "rp_resume"], html:
        `<p>On évalue <b>toujours les red flags avant la séance</b> (synthèse). Hors des normes = signes de gravité : on ne traite pas, on prévient le médecin.</p>
        <p><b>Paramètres vitaux (CR 27/02/25)</b> :</p>
        ${T([["FC", "&gt; 180 bpm (tachycardie) ou &lt; 80 bpm (bradycardie)"], ["FR (à compter sur 1 minute)", "&gt; 60 cpm (tachypnée) ou &lt; 30 cpm (bradypnée) ; pauses ou apnées"], ["Température", "normale 36,5 à 37,5 °C"], ["SpO2", "&gt; 92 % (en fonction de la FiO2 reçue)"]], ["Paramètre", "Seuil de gravité / norme"])}
        <p><b>Signes de gravité = hôpital (RESPI PEDIA)</b> : altération de l'état général ; au moins 1 critère parmi : FR &gt; 60/min ou &lt; 30/min ; FC &gt; 180 ou &lt; 80/min (le support écrit « FR », erreur) ; apnées ou pauses respiratoires ; respiration superficielle ; signes de lutte intenses ; alimentation &lt; 50 % des quantités habituelles sur 3 prises consécutives ou refus alimentaire ; SpO2 &lt; 92-94 % ; prématurité ≤ 34 SA avec oxygéno-dépendance néonatale &gt; 28 jours ET âge &lt; 6 mois en début d'épidémie de VRS.</p>
        <p><b>Critères de gravité conduisant à l'hospitalisation (synthèse)</b> : SpO2 &lt; 90 % (&lt; 92 % selon la HAS) ; cyanose (visible sous 85 %) ; tirages ou mise en jeu des muscles respiratoires accessoires ; respiration thoraco-abdominale ; FR &gt; 60 cpm ; tachycardie ; troubles digestifs avec déshydratation ; <b>âge &lt; 2 mois</b> ; <b>perte de poids &gt; 5 %</b> ; alimentation &lt; 50 % de l'habituelle ; AEG (troubles de la conscience) ; survenue d'apnées.</p>
        <p><b>Terrain qui impose l'hospitalisation</b> : prématurés, moins de 2 mois (risque d'apnée), contexte socio-économique défavorable, antécédents neuromusculaires, pathologies congénitales (CR 27/02/25) ; dysplasie broncho-pulmonaire, mucoviscidose, affections cardio-vasculaires ou neuromusculaires, pathologie du carrefour aéro-digestif, déficience immunitaire, cardiopathie congénitale, prématurité &lt; 34 semaines (résumé).</p>
        <p><b>Conscience</b> : un enfant <b>apathique, somnolent, hypotonique, qui ne réagit pas quand on le stimule</b> = signe de gravité (épuisement) ; l'agitation aussi. À comparer avec le comportement habituel selon les parents (CR 2026-27).</p>
        <p><b>Poids et alimentation</b> : perte de poids <b>à partir de 5 %</b> = signe de gravité, il faut réhydrater (CR 2026-27, CR 20/03/25), indication d'hospitalisation (CR 27/02/25, trame) ; « 10 % » dans les notes 04/04 (version ancienne). Alimentation diminuée de 50 % sur 3 repas successifs = signe de sévérité.</p>
        <p><b>Renvoyer chez le médecin (RESPI PEDIA)</b> si : début des symptômes respiratoires depuis &lt; 48 h ; âge corrigé &lt; 2 mois ; prématurité &lt; 36 SA ; comorbidités ; contexte social ou économique défavorable ; tabagisme passif.</p>
        <p><b>Trois niveaux</b> dans la synthèse : surveillance, kiné, hôpital.</p>` },
      { id: "anam", titre: "6. Anamnèse ciblée (avec le pourquoi de chaque question)", src: ["rp_cr1911", "rp_cr2702", "rp_cr2003", "rp_lise0404", "rp_trame", "rp_resume", "rp_pedia"], html:
        `<p>On interroge le parent présent (la maman dans la chambre dans le cas 2026-27). Chaque question doit servir aux objectifs ou aux conseils.</p>
        ${T([
          ["Âge (et âge corrigé si prématuré), sexe", "Garçons plus atteints ; âge &lt; 2 mois = hospitalisation ; Wang valable jusqu'à 24 mois"],
          ["Terme, prématurité, surfacté ? temps en néonatologie ? voie basse ou césarienne ? matériel utilisé à l'accouchement ?", "La prématurité est un facteur de forme grave et d'hospitalisation ; surfactant immature"],
          ["Poids et taille (naissance et actuel), courbe de croissance", "Pas de BMI chez le bébé : on regarde la courbe percentile et surtout l'évolution depuis la bronchiolite ; poids de naissance &lt; 2,5 kg = facteur de risque ; perte ≥ 5 % = gravité"],
          ["Premier épisode ou récidive ? kiné antérieure ?", "À partir du 3e épisode de sifflements avant 1 an : asthme du nourrisson"],
          ["Histoire : depuis quand ? par quoi ça a commencé ? évolution ?", "Rhinite / rhinorrhée (VRS) puis toux ; pic vers J3-J5 ; &lt; 48 h = renvoyer au médecin"],
          ["Toux : sèche ou grasse ? quinteuse ? jour, nuit ? réveille l'enfant ? vomissements ?", "Elle conditionne le moment où l'on peut désencombrer"],
          ["Antécédents respiratoires, cardiaques, neuro, opérations, RGO, poussée dentaire ; antécédents familiaux, allergies, asthme, eczéma", "Comorbidités = risque de forme grave (c'est là que la kiné « peut se discuter » selon la HAS) ; le RGO est « important ++++ »"],
          ["Alimentation : allaitement, biberon, mixte, diversification ? quantité prise ? dernier repas ? hydratation ?", "Un nourrisson au nez bouché mange mal ; allaitement = quantité impossible à mesurer ; &lt; 50 % sur 3 repas = sévérité ; on ne fait pas de kiné juste après un repas"],
          ["Sommeil : position, proclive 30°, réveils, toux nocturne, ronflement, co-dodo ?", "Retentissement de la gêne ; conseils de couchage"],
          ["Tabagisme des parents (dedans, dehors) ?", "Facteur de risque important : conseils"],
          ["Environnement : crèche, gardienne, fratrie, animaux, ville ou campagne, humidité, T° de la chambre, humidificateur, peluches, tapis ?", "Exposition aux virus et allergènes ; conseils (18-20 °C, pas d'humidificateur)"],
          ["Lavages de nez faits par les parents ? comment ? qui ose le faire ?", "Point d'éducation thérapeutique"],
          ["Médication (aiguë et chronique) : O2 (combien, quelle interface), aérosols (bronchodilatateurs), sérum physiologique 0,9 %, antipyrétique, corticoïdes ? aérosol avant la séance ?", "Adapter la séance ; « attention aux mucolytiques »"],
          ["État général : apathique, éveillé, plus agité que d'habitude ?", "Gravité"],
          ["Examens complémentaires dans le dossier", "Radio seulement si suspicion de pneumonie ou forme grave"],
          ["Mode de garde", "Collectivité = nid à microbes ; organisation des conseils"]
        ], ["Question", "Pourquoi"])}
        <p><b>Bronchiolite ou asthme ? (résumé d'étudiant)</b></p>
        ${T([["&gt; 12 mois", "Asthme"], ["&lt; 12 mois, 1er épisode", "Bronchiolite"], ["&lt; 12 mois, 2e épisode avec atopie personnelle ou familiale", "Asthme"], ["&lt; 12 mois, 2e épisode sans atopie", "Bronchiolite"], ["&lt; 12 mois, 3e épisode", "Asthme"]], ["Situation", "Évoquer"])}
        <p>RESPI PEDIA : asthme du nourrisson = au moins <b>3 épisodes</b> d'essoufflement ou de toux avec sifflements depuis la naissance.</p>` },
      { id: "bilan", titre: "7. Bilan dans l'ordre de l'examen", src: ["rp_cr1911", "rp_cr2702", "rp_cr2003", "rp_lise0404", "rp_trame", "rp_msbronch", "rp_cr1704"], html:
        `<p>« À l'oral, le bilan doit être adapté au contexte : ici un nourrisson hospitalisé, monitoré, sous O2 » (CR 2026-27). Ordre de la trame : constat d'attitude, paramètres vitaux, conscience, respiratoire, trophique.</p>
        <ol>
        <li><b>Constat d'attitude</b> (« Que pensez-vous avoir ? ») : <b>monitoring</b> avec alarmes (électrodes qui captent les paramètres), <b>oxygène</b> (lunettes nasales, débit), <b>proclive 30°</b>, <b>oxymètre de pouls sur l'hallux</b> (gros orteil), <b>perfusion</b> (hydratation, médicaments), voie centrale ?, sonde naso-gastrique ?, tétine. Le constat d'attitude porte surtout sur l'appareillage ; l'éveil se note dans un bilan à part. Couchage : sur le dos (décubitus dorsal), voire latéral, jusqu'à 6-8 mois, pas sur le ventre (prévention de la mort subite).</li>
        <li><b>Paramètres vitaux</b> : FR (sur le capteur si électrodes, sinon <b>comptée sur 1 minute</b> : le saturomètre ne donne pas la FR), FC, SpO2 et sous combien d'O2, température. <b>Pas de TA</b> chez le nourrisson hospitalisé.</li>
        <li><b>Conscience / éveil</b> : somnolence, apathie, hypotonie, agitation, tonique, souriant, éveillé ? « Est-il comme d'habitude ? »</li>
        <li><b>Respiratoire</b> (bébé <b>déshabillé</b>) : signes de lutte (tirages sus-sternal, intercostal, sous-sternal / sous-costal avec entonnoir xiphoïdien ; battement des ailes du nez ; balancement thoraco-abdominal = respiration paradoxale ; geignement expiratoire ; hyperinflation ; mise en jeu des muscles accessoires) ; cyanose ; pauses, apnées ; <b>test de Rosenthal</b> ; lavage de nez si positif ; <b>auscultation</b> ; toux (aspect, fréquence, sèche ou grasse) ; expectorations (difficiles à recueillir, regarder leur aspect) ; <b>score de Wang / Beck</b>.</li>
        <li><b>Trophique et cutané</b> : <b>fontanelle</b> (déprimée = déshydratation), marbrures, cyanose, cicatrices (opérations), sudation, eczéma.</li>
        <li><b>Alimentation et sommeil</b> (repris de l'anamnèse).</li></ol>
        <p><b>Auscultation chez le bébé</b> :</p>
        <ul><li>toujours <b>après le lavage du nez</b> (sinon bruits parasites des VAS) ; le kiné l'utilise pour <b>évaluer l'efficacité de la séance</b> (avant / après) ;</li>
        <li>enfant déshabillé, au calme : on peut laisser la tétine ; s'il pleure, dans les bras de sa mère ;</li>
        <li>en décubitus dorsal ; on <b>soulève l'épaule</b> pour les parties postérieures ;</li>
        <li>symétrique, des bases vers les sommets ; bien ausculter les parties <b>latéro-basales</b> (projection du <b>lobe moyen droit</b>) ;</li>
        <li>bruits : <b>sibilants / wheezing</b> (bronchospasme, phase spastique ; wheezing = sibilances audibles à distance), <b>crépitants / craquements</b> (encombrement des VAI), ronchi (encombrement).</li></ul>
        <p>Logique du résumé : sibilances seules = bronchospasme, aérosol prescrit ; sibilances avec craquements = hypersécrétion, ELPr.</p>
        ${W("Erreur relevée par un prof (CR 17/04/25) : un étudiant avait installé un bébé « à l'envers ». Le bébé est en proclive 30°, tête plus haute, jamais en déclive.")}` },
      { id: "objectifs", titre: "8. Diagnostic kiné et objectifs (court, moyen, long terme)", src: ["rp_cr1911", "rp_cr2003", "rp_cr2702", "rp_lise0404", "rp_pedia", "rp_rapport"], html:
        `<p><b>Problèmes typiques</b> : obstruction des VAS (Rosenthal +) qui gêne respiration et alimentation ; encombrement des VAI (crépitants, toux grasse) ; risque d'aggravation (épuisement, déshydratation) ; sommeil perturbé ; parents inquiets, gestes de mouchage non maîtrisés, facteurs d'environnement (tabac, chambre).</p>
        ${T([
          ["Court terme", "Libérer les VAS (désobstruction nasale) pour faciliter respiration et alimentation ; désencombrer les VAI quand le moment est venu ; surveiller l'évolution (paramètres, signes de lutte, score) et alerter si aggravation ; prévenir les complications ; rassurer les parents ; position proclive 30°"],
          ["Moyen terme", "Éduquer les parents : technique de mouchage (antérieur, rétrograde), lavage de nez avant repas, coucher et auscultation ; signes de gravité qui doivent faire consulter ; fractionner les repas, hydrater"],
          ["Long terme", "Prévenir les récidives : tabagisme passif, hygiène (mains, jouets, table à langer), chambre (aérée, 18-20 °C, pas d'humidificateur, peu de peluches), gestes barrières en période épidémique ; dépister un asthme du nourrisson si les épisodes se répètent"]
        ], ["Terme", "Objectifs"])}
        <p><b>Objectifs généraux du RESPI PEDIA</b> : rassurer ++ (parents et enfant), éducation thérapeutique (mouchage, aérosols, environnement), désencombrement des VAS et VAI, surveillance. La KR <b>n'améliore pas la durée</b> de la bronchiolite mais <b>améliore le sommeil et l'alimentation</b>.</p>
        <p><b>Rapport de stage (cabinet)</b> : 1. rassurer la maman (expliquer le mouchage, prévenir que le bébé va pleurer : ce n'est pas douloureux, c'est sa façon d'exprimer sa gêne ; expliquer le déroulement ; l'impliquer, par exemple faire le lavage de nez avec elle) ; 2. désencombrer les VAI ; 3. désencombrer les VAS ; 4. éduquer les parents (mouchage, lit à 30° contre le RGO, signes de détresse, poids et alimentation, désinfection).</p>` },
      { id: "timing", titre: "9. Quand faire de la kiné ? Recommandations et niveau de preuve", src: ["rp_cr1911", "rp_pedia", "rp_msbronch", "rp_lise0404", "rp_cr2003"], html:
        `<p><b>Règles de timing (CR 2026-27)</b> :</p>
        <ul><li>tant que l'enfant est « <b>spastique</b> » (phase obstructive : sibilants, toux sèche, bronchioles inflammées et rétrécies), <b>on ne désencombre pas</b> : on le stabilise (oxygène, aérosols selon prescription, surveillance) ;</li>
        <li>quand la <b>toux devient grasse</b>, les sécrétions sont mobilisables : on peut commencer le désencombrement ;</li>
        <li>et seulement si l'état le permet : pas en pleine détresse (ex. <b>Wang ≥ 9</b>).</li></ul>
        <p>RESPI PEDIA : séance kiné <b>uniquement en phase sécrétoire</b> ; en phase spastique, éducation importante sur le mouchage. Synthèse : « kiné non recommandée si sibilances ». Bronchiolite sévère : le kiné n'intervient pas (bébé trop instable, trop spastique) ; il intervient dans la forme modérée.</p>
        <p><b>Recommandation HAS 2019 (à citer à l'oral)</b> :</p>
        <ul><li>pour le <b>1er épisode</b> de bronchiolite chez le nourrisson de <b>moins de 12 mois</b>, la HAS <b>ne recommande pas la kiné de désencombrement bronchique</b> ;</li>
        <li>elle <b>contre-indique les techniques anciennes</b> : <b>clapping, vibrations, drainage postural</b> ;</li>
        <li>la kiné « peut se discuter » chez l'enfant avec comorbidités ;</li>
        <li>le rôle du kiné reste important : <b>surveillance, évaluation de la gravité, désobstruction nasale, éducation des parents, orientation vers le médecin</b> si aggravation.</li></ul>
        <p><b>Niveau de preuve (synthèse)</b> : le traitement de la bronchiolite est « sujet à de très nombreuses controverses » ; très peu de niveaux de preuve pour la KR ; elle rassure les parents (effet placebo) ; les nourrissons <b>hospitalisés</b> n'en tirent pas de bénéfice évident (Rochat, 2012) ; une étude a montré un <b>risque de fracture de côte de 1/1000</b> après KR ; préférer des <b>séances courtes (&lt; 10 min)</b>. L'ELPr « semble la plus efficace », améliore le confort et pourrait diminuer la durée (en attente d'autres études).</p>
        ${W("Les notes 04/04 (année antérieure) disent « ELPr = seule technique validée par la cellule respi pour un bébé » et traitent un 1er épisode de 6 mois par ELPr : c'est en tension avec la HAS 2019 citée en 2026-27. À l'examen : dis que la HAS ne recommande pas le désencombrement bronchique au 1er épisode avant 12 mois, que tu fais la désobstruction nasale et l'éducation, et que l'ELPr reste la technique de référence de l'école quand une kiné bronchique est indiquée (forme modérée, phase sécrétoire, comorbidité, prescription).")}` },
      { id: "vas", titre: "10. Voies aériennes supérieures : lavage de nez, mouchage, DRR", src: ["rp_msbronch", "rp_lise0404", "rp_cr2702", "rp_cr2003", "rp_cr1911", "rp_rapport", "rp_0802", "rp_kinepra"], html:
        `<p>Les VAS se désencombrent en premier (avant l'auscultation et avant l'aérosol). Moyens : se moucher, renifler, racler la gorge (enfant plus grand), <b>instillation de sérum physiologique</b>, <b>DRR</b>.</p>
        <p><b>Produit</b> : sérum physiologique <b>NaCl 0,9 %</b> en unidoses (« flapules »). On <b>réchauffe</b> les unidoses entre les mains. Le spray est plus agressif pour le bébé. <b>Préférer de plus grands volumes de sérum plutôt que de grandes pressions.</b></p>
        <p><b>Lavage / mouchage en décubitus latéral (synthèse, à montrer aux parents)</b> :</p>
        <ol><li>réchauffer le sérum ;</li><li>placer l'enfant <b>sur le côté</b> ;</li><li>diriger le visage vers la table ;</li><li>placer la flapule dans la narine <b>supra-latérale</b> et instiller jusqu'à ce que le liquide coule par l'autre narine ;</li><li>changer de côté et refaire de l'autre côté.</li></ol>
        <p><b>Mouchage antérieur (antérograde)</b> : on instille dans une narine puis on ferme l'autre narine et la mâchoire pour que le bébé expire par le nez (on force l'expiration par la narine libre). Bébé en décubitus latéral ou dorsal ; on peut aspirer avec une poire ou un mouche-bébé mécanique (la maman peut doser l'aspiration).</p>
        <p><b>Mouchage postérieur : DRR (désobstruction rhinopharyngée rétrograde)</b> : <b>à la fin de l'expiration</b>, on ferme la bouche du bébé (pression sous le menton, ou tranche cubitale de la main) : l'inspiration suivante se fait par le nez, ce qui aspire les sécrétions du nez vers le pharynx (<b>reniflement passif</b>). Souvent après instillation de sérum dans chaque narine. On peut fermer la bouche et une narine en même temps et alterner les deux narines pour s'assurer que chacune est désencombrée. « Renifler plutôt que moucher » : plus physiologique, car en mouchant fort les agents pathogènes migrent vers les sinus.</p>
        <p><b>Glossopulsion</b> (notes 04/04) : manœuvre pour empêcher l'enfant d'avaler ses sécrétions ramenées dans la bouche (et les recueillir).</p>
        <p>Penser à <b>recueillir les sécrétions</b> (mouchage, mouche-bébé). Vérifier ensuite que le nez reste humidifié et ne se rebouche pas : un bébé qui <b>ouvre la bouche pour ventiler</b> a le nez bouché (rapport).</p>
        <p><b>Pourquoi laver le nez avant les repas</b> : le nourrisson respire par le nez et sa langue occupe une grande place dans la bouche ; nez bouché = il mange mal. On lave aussi <b>avant le coucher</b> et <b>avant l'auscultation</b>. Le prof attend : « savoir expliquer comment on fait le mouchage d'un enfant ».</p>
        <p>Le RESPI PEDIA cite la <b>DRR</b> sous le nom « désobstruction rhinopharyngée rétrograde » ; le rapport parle de « désobstruction rhinopharyngée rétrograde ou antérograde » (DRP).</p>` },
      { id: "vai", titre: "11. Voies aériennes inférieures : ELPr, AFE, toux provoquée", src: ["rp_msbronch", "rp_techkr", "rp_cr1911", "rp_cr2702", "rp_cr2003", "rp_lise0404", "rp_pedia", "rp_rapport", "rp_scaillet"], html:
        `<p><b>ELPr : expiration lente prolongée</b> (validée en pédiatrie ; « consensus inter-Condorcet » en pédiatrie). Aide expiratoire passive, douce et bien tolérée, pour le nouveau-né et le nourrisson ; elle mobilise les sécrétions des voies distales.</p>
        <ul><li><b>Préparation</b> : bébé déshabillé, table désinfectée, VAS dégagées puis auscultation ; faire connaissance avec le bébé ; <b>tester d'abord les pressions manuelles</b> abdominales et thoraciques (pas de signe de retrait, pas de douleur).</li>
        <li><b>Position du bébé</b> : sur le dos en <b>proclive 30°</b> (meilleure déflation, évite le RGO) ; certains cours disent décubitus dorsal à plat pour favoriser la déflation du poumon entier.</li>
        <li><b>Mains du kiné</b> : une main sur la <b>sangle abdominale</b> (main caudale) qui sert de <b>contre-appui</b> (pas de pression, surtout si RGO ou troubles digestifs) ; une main sur le <b>thorax</b> (main crâniale) qui <b>travaille</b> : elle amène le thorax vers le bas et vers la colonne.</li>
        <li><b>Manœuvre</b> : on suit la FR du bébé ; on accompagne d'abord quelques cycles (≈ 3) ; à chaque expiration on descend un peu plus, à l'inspiration on maintient ; la pression augmente sur <b>3 à 5 cycles</b> pour aller progressivement dans le <b>VRE</b> (bas volumes, vers le VR) ; puis on <b>relâche les deux mains</b> : l'inspiration réactionnelle remonte un peu dans le VRI ; on laisse respirer à volume courant et récupérer ; on recommence.</li>
        <li><b>Pendant</b> : faire des <b>pauses</b> ; vérifier SpO2, coloration cutanée, dyspnée.</li></ul>
        <p><b>AFE (augmentation / accélération du flux expiratoire)</b> : pression thoraco-abdominale qui accélère le flux expiratoire pour faire remonter les sécrétions vers la trachée. Citée dans le CR 2026-27 et dans le rapport de stage ; plus rapide que l'ELPr, donc à utiliser quand les sécrétions sont plus proximales.</p>
        <p><b>Toux provoquée (TP)</b> : le nourrisson (jusqu'à ≈ 2 ans) ne sait pas tousser sur demande. On fait une <b>brève pression sur la trachée, juste au-dessus de la fourchette sternale</b> (face antérieure de la trachée), qui déclenche le réflexe de toux et évacue les sécrétions remontées.</p>
        <ul><li>Le réflexe s'épuise vite ou n'existe pas chez certains bébés.</li><li>Variante : bébé en <b>couché facial (ventral)</b> : quand il relève la tête, il allonge sa trachée, stimule les tussirécepteurs et réduit le calibre (vitesse plus grande), d'où une toux plus forte.</li><li><b>Contre-indication</b> : <b>atrésie de l'œsophage</b> (risque de spasme).</li><li>La toux est la séquence finale de toute séance de désencombrement.</li></ul>
        <p><b>Autres techniques citées</b> : drainage autogène assisté (couché dorsal, assis, sur ballon de Bobath avec des mouvements de haut en bas) dans le rapport de stage ; « DA de Gauchez » débattu (résistances à l'inspiration et descente dans les volumes) dans le CR 27/02/25.</p>
        <p><b>Interdits</b> (HAS 2019) : clapping, vibrations, drainage postural. Le drainage postural peut provoquer un RGO chez le bébé.</p>
        <p><b>Techniques selon l'âge (RESPI PEDIA)</b> : ELPr, toux provoquée, DRR, mouchage / rinçage du nez chez le nourrisson ; EDIC à partir de 3-4 ans ; ELTGOL à partir de 7-8 ans (la fiche techniques de KR le contre-indique avant 12 ans : voir fiche Pédiatrie).</p>` },
      { id: "medic", titre: "12. Médicaments et aérosols dans la bronchiolite", src: ["rp_msbronch", "rp_cr2003", "rp_cr2702", "rp_lise0404", "rp_resume", "rp_rapport", "rp_trame"], html:
        `<p><b>Traitement médical (synthèse MSP bronchiolite)</b> :</p>
        <ul><li>O2, et ventilation assistée en cas d'insuffisance respiratoire aiguë ;</li>
        <li><b>antibiotiques : aucun intérêt sauf surinfection bactérienne</b> (la bronchiolite est virale) ;</li>
        <li><b>corticoïdes inhalés ou systémiques : aucun intérêt</b> ;</li>
        <li>attention, chez l'enfant de <b>moins d'un an</b> : <b>effet pseudo-paradoxal des bronchodilatateurs</b> (β2-mimétiques) : obstruction passagère possible et hypoventilation relative pendant et après l'inhalation ;</li>
        <li><b>contre-indication des antitussifs, mucorégulateurs et mucolytiques</b> (« attention aux mucolytiques », résumé).</li></ul>
        <p>Pourtant, plusieurs CR listent la médication « normale » du bébé hospitalisé : corticoïdes, bronchodilatateurs (en aérosol), antipyrétiques (fièvre fréquente), O2, sérum physiologique 0,9 % (CR 20/03/25, CR 27/02/25, notes 04/04, trame). Il faut savoir les citer et savoir que leur intérêt est discuté.</p>
        <p><b>Aérosol en séance (synthèse)</b> : nébulisation de <b>NaCl 3 % + salbutamol</b> (agit en 2-3 min). Les inhalations de <b>sérum hypertonique 3 % ou 7 %</b> sembleraient intéressantes : elles « pompent » l'œdème sous-muqueux et relancent le transport mucociliaire (résumé : nébulisation hypertonique pour réduire l'œdème). Sibilances = bronchospasme = aérosol (il diminue la résistance des voies aériennes).</p>
        <p><b>Ordre aérosol / kiné</b> : les supports se contredisent (« certaines parties de nos cours se contredisent »). Synthèse : ausculter d'abord puis aérosol (sinon les bruits sont faussés) ; résumé : ausculter, aérosol, ELPr, réausculter ; CR 20/03/25 : l'aérosol peut se faire <b>à distance de la kiné</b>, mais il faut bien <b>moucher avant</b> ; éducation : faire l'aérosol avant le repas et le sommeil, moucher avant l'aérosol.</p>
        <p><b>Exemple du rapport de stage</b> : Josacine 250 mg/5 mL (antibiotique) 1 fois par jour et Doliprane 100 mg (paracétamol, antipyrétique et antidouleur) toutes les 6 h si besoin ; aucun aérosol prescrit.</p>` },
      { id: "seance", titre: "13. Déroulement d'une séance type et sécurité", src: ["rp_msbronch", "rp_resume", "rp_cr1911", "rp_cr2702", "rp_cr2003"], html:
        `<ol>
        <li><b>Red flags</b> avant tout (paramètres, conscience, alimentation, signes de lutte). Si présents : pas de séance, prévenir le médecin.</li>
        <li>Préparation : bébé <b>en proclive, déshabillé</b>, table désinfectée, mains lavées ; à distance d'un repas.</li>
        <li><b>Test de Rosenthal</b> ; si obstruction des VAS : <b>désencombrer les VAS</b> (NaCl 0,9 % instillé, DRR).</li>
        <li><b>Auscultation</b> initiale (bébé calme), sans oublier le lobe moyen droit.</li>
        <li><b>Aérosol</b> si prescrit (NaCl 3 % + salbutamol), sur nez propre.</li>
        <li><b>ELPr</b> après avoir testé les pressions manuelles progressives ; pauses ; surveiller SpO2, coloration, dyspnée.</li>
        <li><b>Toux provoquée</b> (trachée ou couché facial) ; recueillir les sécrétions.</li>
        <li><b>Mouchage + DRR</b> final : manœuvre finale pour nettoyer les VAS et dégager les expectorations ramenées.</li>
        <li><b>Réauscultation</b> et reprise des paramètres : moins de bruits, meilleure SpO2, moins de signes de lutte = séance efficace.</li>
        <li><b>Éducation</b> des parents (montrer le lavage de nez) et plan de surveillance.</li></ol>
        <p><b>Durée</b> : séances courtes, &lt; 10 min. <b>Arrêter</b> si désaturation, apnée, bradycardie, cyanose, épuisement, vomissement (complément logique des red flags). Avec la toux provoquée, penser à l'atrésie de l'œsophage.</p>` },
      { id: "parents", titre: "14. Conseils aux parents (éducation thérapeutique)", src: ["rp_cr1911", "rp_msbronch", "rp_lise0404", "rp_cr2702", "rp_cr2003", "rp_rapport", "rp_pedia"], html:
        `${T([
          ["Tabac", "Ne jamais fumer dans la même pièce que l'enfant ni dans la voiture, même quand l'enfant n'y est pas (les particules restent) ; fumer dehors avec une veste dédiée ; se laver les mains et idéalement changer de vêtement avant de prendre l'enfant"],
          ["Lavage de nez", "Au sérum physiologique, à chaque encombrement des VAS, surtout avant les repas, le coucher (et l'aérosol) ; montrer les bons gestes (position, technique) et faire faire au parent"],
          ["Position", "Surélever le lit (proclive 30°) : moins d'œdème des VAS, moins de RGO, dyspnée soulagée ; couchage sur le dos jusqu'à 6-8 mois (pas sur le ventre) pour prévenir la mort subite ; co-dodo à discuter"],
          ["Alimentation", "Fractionner les repas, bien faire boire, hydrater souvent ; surveiller le poids et les quantités"],
          ["Chambre", "Aérer 10-15 min à fond ; température 18-20 °C ; pas d'humidificateur (« ultra mauvais », il entretient la prolifération des bactéries) ; éviter tapis et peluches"],
          ["Hygiène", "Lavage des mains (aussi frères et sœurs en rentrant, et ne pas trop toucher le bébé) ; désinfecter table à langer, jouets, matériel ; gestes barrières et éviter les lieux très fréquentés en période épidémique ; collectivités = nid à microbes"],
          ["Signes de gravité", "Apprendre aux parents les signes qui doivent conduire aux urgences : respiration rapide, tirages, battement des ailes du nez, pauses, coloration bleue, enfant mou ou somnolent, refus de boire, moins de la moitié des biberons"],
          ["Rassurer", "Le bébé va pleurer pendant la séance : ce n'est pas douloureux, c'est sa façon d'exprimer sa gêne ; expliquer le déroulement et le bénéfice des techniques"]
        ], ["Thème", "Conseil"])}` },
      { id: "pieges", titre: "15. Pièges du jury et remarques des profs", src: ["rp_cr1911", "rp_cr1704", "rp_lise0404", "rp_cr2702", "rp_0802", "rp_pedia"], html:
        `<ul>
        <li><b>Citer la HAS 2019</b> à l'oral (pas de désencombrement bronchique au 1er épisode avant 12 mois ; clapping, vibrations, drainage postural contre-indiqués).</li>
        <li>Adapter le bilan au contexte : nourrisson hospitalisé, monitoré, sous O2.</li>
        <li>Pas de <b>TA</b> chez le nourrisson hospitalisé ; pas de <b>BMI</b> chez le bébé (courbe de croissance) ; FR comptée sur 1 minute (le saturomètre ne la donne pas) ; oxymètre sur l'<b>hallux</b>.</li>
        <li>Bébé en proclive 30°, <b>jamais « à l'envers »</b>.</li>
        <li>Lavage de nez <b>avant</b> d'ausculter ; réausculter en fin de séance.</li>
        <li>Pas de kiné bronchique en phase spastique ni en forme sévère (Wang ≥ 9) ; « quand la toux devient grasse ».</li>
        <li>Penser au <b>lobe moyen droit</b>.</li>
        <li>L'échographie ne montre pas l'encombrement, on ne la fait pas chez le bébé ; la radio seulement si forme grave ou suspicion de pneumonie.</li>
        <li>Antibiotique = seulement si surinfection ; mucolytiques contre-indiqués.</li>
        <li>Prématurité, terme, surfactant, RGO, tabac : questions obligatoires.</li>
        <li>3e épisode avant 1 an : évoquer l'asthme du nourrisson.</li>
        <li>Savoir expliquer et montrer le mouchage d'un enfant.</li></ul>` }
    ]
  };

  bro.qcm = [
    // def
    q("b1", "def", "La bronchiolite touche surtout :", ["Le nourrisson de 1 mois à 2 ans"], ["L'enfant de 2 à 6 ans", "Le nouveau-né de moins de 7 jours uniquement", "L'adolescent asthmatique"], "rp_msbronch"),
    q("b2", "def", "Quel virus cause la majorité des bronchiolites ?", ["Le virus respiratoire syncytial (VRS)"], ["Le pneumocoque", "Le virus de la grippe B", "Le Staphylococcus aureus"], "rp_pedia", "VRS : 80 % des cas (RESPI PEDIA), 70 à 80 % (synthèse). Le pneumocoque est une bactérie (pneumonie)."),
    q("b3", "def", "Quels autres virus peuvent donner une bronchiolite ? (plusieurs réponses)", ["Le rhinovirus", "Le virus para-influenza de type 3"], ["Streptococcus pneumoniae", "Pseudomonas aeruginosa"], "rp_pedia"),
    q("b4", "def", "Quelle est la période épidémique de la bronchiolite ?", ["Novembre à février, pic en décembre"], ["Juin à août, pic en juillet", "Mars à mai, pic en avril", "Toute l'année sans variation"], "rp_msbronch"),
    q("b5", "def", "Durée d'incubation du VRS selon la synthèse :", ["2 à 5 jours"], ["2 à 5 heures", "10 à 15 jours", "1 mois"], "rp_msbronch"),
    q("b6", "def", "Pourquoi la bronchiolite commence-t-elle par une rhinite ?", ["Le virus se multiplie d'abord dans la muqueuse nasale avant de gagner les voies inférieures"], ["Parce que la bronchiolite est une allergie nasale", "Parce que les bronchioles sont dans le nez", "Parce que les antibiotiques irritent le nez"], "rp_msbronch"),
    q("b7", "def", "Combien de temps le virus survit-il sur les objets et le linge ?", ["6 à 7 heures"], ["30 secondes", "3 jours", "2 semaines"], "rp_msbronch", "Et 30 minutes sur la peau : d'où le lavage des mains et la désinfection des jouets et de la table à langer."),
    q("b8", "def", "Combien de temps le virus survit-il sur la peau ?", ["30 minutes"], ["6 à 7 heures", "24 heures", "5 secondes"], "rp_msbronch"),
    q("b9", "def", "Modes de transmission directe du VRS (plusieurs réponses) :", ["Gouttelettes d'air expirées", "Jetage rhinopharyngé"], ["Voie sanguine", "Piqûre d'insecte"], "rp_msbronch"),
    q("b10", "def", "Durée attendue d'une bronchiolite aiguë non compliquée :", ["Moins de 7 jours"], ["Moins de 24 heures", "3 à 4 semaines", "6 mois"], "rp_msbronch"),
    q("b11", "def", "Vers quel jour se situe souvent le pic de la bronchiolite (CR 2026-27) ?", ["J3 à J5"], ["J1", "J10 à J12", "J20"], "rp_cr1911"),
    q("b12", "def", "Quelle période est la plus importante pour le risque d'aggravation ?", ["Les 48 premières heures"], ["Le 10e jour", "Le premier mois", "Les 6 premières heures uniquement"], "rp_cr2702"),
    q("b13", "def", "Facteurs de risque de bronchiolite cités par le RESPI PEDIA (plusieurs réponses) :", ["Poids de naissance inférieur à 2,5 kg", "Absence d'allaitement maternel", "Tabagisme et pollution", "Crèches et humidité de la maison"], ["Être une fille"], "rp_pedia", "Les garçons sont plus atteints que les filles."),
    q("b14", "def", "Quel sexe est le plus touché ?", ["Les garçons"], ["Les filles", "Aucune différence selon les supports", "Seulement les filles prématurées"], "rp_pedia"),
    q("b15", "def", "À partir de combien d'épisodes de sifflements avant 1 an évoque-t-on un asthme du nourrisson ?", ["3 épisodes"], ["1 épisode", "2 épisodes, toujours", "10 épisodes"], "rp_cr1911", "Consensus de Londres. Avec atopie, le résumé évoque l'asthme dès le 2e épisode."),
    q("b16", "def", "Le cas 2026-27 décrit une « broncho-alvéolite ». Chez qui ?", ["Un nourrisson de 6 mois hospitalisé, maman dans la chambre"], ["Un enfant de 6 ans au cabinet", "Un adulte BPCO", "Un bébé de 3 semaines en néonatologie"], "rp_cr1911"),
    // physio
    q("b17", "physio", "Jusqu'à quel âge la respiration nasale est-elle quasi obligatoire selon la synthèse MSP bronchiolite ?", ["4 mois"], ["4 ans", "2 semaines", "12 ans"], "rp_msbronch", "RESPI PEDIA dit 6 premiers mois ; le CR 20/03/25 note qu'à 6 mois un bébé peut commencer à respirer par la bouche."),
    q("b18", "physio", "Pourquoi un nez bouché est-il si gênant chez le nourrisson ? (plusieurs réponses)", ["Il respire surtout par le nez", "Il mange mal quand son nez est bouché"], ["Il a moins de glandes à mucus", "Ses résistances nasales sont plus faibles que chez l'adulte"], "rp_cr1911"),
    q("b19", "physio", "Phase « spastique » de la bronchiolite : que fait-on ?", ["On ne désencombre pas : on stabilise, on surveille et on éduque au mouchage"], ["ELPr intensive pour lever le spasme", "Clapping et vibrations", "Drainage postural tête en bas"], "rp_cr1911"),
    q("b20", "physio", "Signes de la phase spastique (plusieurs réponses) :", ["Sibilants", "Toux sèche", "Bronchioles inflammées et rétrécies"], ["Toux grasse productive", "Expectoration abondante facile"], "rp_cr1911"),
    q("b21", "physio", "Quel signe annonce que les sécrétions deviennent mobilisables ?", ["La toux devient grasse"], ["La toux devient sèche et quinteuse", "La FR dépasse 60/min", "La fièvre monte à 40 °C"], "rp_cr1911"),
    q("b22", "physio", "Quelle cellule produit le surfactant ?", ["Le pneumocyte de type 2"], ["Le pneumocyte de type 1", "Le macrophage alvéolaire", "La cellule caliciforme"], "rp_cr1211"),
    q("b23", "physio", "Rôle du surfactant chez le nourrisson :", ["Créer une tension de surface qui empêche les alvéoles de s'effondrer"], ["Tuer le VRS", "Produire du mucus", "Faire contracter les bronches"], "rp_cr1211"),
    q("b24", "physio", "Que montre typiquement la radio d'une bronchiolite ?", ["Une hyperinflation du thorax"], ["Un poumon blanc bilatéral systématique", "Un pneumothorax", "Un cœur en goutte"], "rp_pedia", "Radio réservée aux formes graves ; hyperinflation citée dans la synthèse radio."),
    // signes
    q("b25", "signes", "Par quoi débute classiquement la bronchiolite ?", ["Une rhinopharyngite (rhinorrhée, rhinite)"], ["Une fièvre isolée à 41 °C", "Une diarrhée sanglante", "Une douleur thoracique"], "rp_pedia"),
    q("b26", "signes", "Évolution habituelle de la toux :", ["Quinteuse et sèche au début, puis grasse et productive"], ["Grasse au début puis sèche", "Toujours absente", "Aboyante (bovine) du début à la fin"], "rp_pedia"),
    q("b27", "signes", "Signes de difficulté respiratoire listés dans la synthèse (plusieurs réponses) :", ["Tirages", "Battement des ailes du nez", "Hyperinflation thoracique", "Geignement et sibilances"], ["Bradycardie à 120"], "rp_msbronch"),
    q("b28", "signes", "La recherche systématique de virus est-elle recommandée pour diagnostiquer une bronchiolite ?", ["Non, le diagnostic est clinique"], ["Oui, toujours par PCR", "Oui, par hémoculture", "Oui, par échographie"], "rp_pedia"),
    q("b29", "signes", "Quand fait-on une radiographie dans la bronchiolite ?", ["Pour les cas les plus graves (ou suspicion de pneumonie)"], ["Systématiquement à chaque bébé", "Avant chaque séance de kiné", "Jamais, c'est interdit"], "rp_pedia"),
    q("b30", "signes", "Pourquoi ne fait-on pas d'échographie pour l'encombrement du bébé ?", ["Elle ne montre pas l'encombrement (elle montre épanchement ou pneumonie)"], ["Elle irradie trop", "Elle est trop douloureuse", "Elle provoque des apnées"], "rp_lise0404"),
    q("b31", "signes", "Classification RESPI PEDIA : SpO2 à l'éveil en air ambiant à 91 %. Quelle forme ?", ["Modérée"], ["Légère", "Grave", "Normale"], "rp_pedia", "Légère > 92 % ; modérée 90 < SpO2 ≤ 92 % ; grave ≤ 90 % ou cyanose."),
    q("b32", "signes", "SpO2 à 89 % en air ambiant à l'éveil :", ["Forme grave"], ["Forme légère", "Forme modérée", "Valeur normale du nourrisson"], "rp_pedia"),
    q("b33", "signes", "SpO2 à 96 % en air ambiant à l'éveil :", ["Forme légère"], ["Forme modérée", "Forme grave", "Indication d'O2"], "rp_pedia"),
    q("b34", "signes", "Forme modérée : quand donne-t-on de l'O2 ?", ["Si SpO2 ≤ 92 %"], ["Si SpO2 ≤ 98 %", "Si SpO2 ≤ 80 %", "Jamais"], "rp_pedia"),
    q("b35", "signes", "Cibles de SpO2 sous O2 dans la forme modérée (plusieurs réponses) :", ["Plus de 92 % à l'éveil", "Plus de 90 % pendant le sommeil"], ["Plus de 99 % jour et nuit", "Plus de 85 % à l'éveil"], "rp_pedia"),
    q("b36", "signes", "Cible de SpO2 sous O2 dans la forme grave :", ["Plus de 94 %"], ["Plus de 88 %", "Exactement 90 %", "Plus de 80 %"], "rp_pedia"),
    q("b37", "signes", "À quelle SpO2 peut-on sevrer l'O2 d'un nourrisson stable ?", ["92 %"], ["99 %", "85 %", "80 %"], "rp_pedia"),
    q("b38", "signes", "Chez qui la surveillance continue de la SpO2 est-elle recommandée ? (plusieurs réponses)", ["Les formes graves", "Les nourrissons sous oxygène"], ["Tous les enfants vus au cabinet sans O2", "Les formes légères à domicile"], "rp_pedia"),
    q("b39", "signes", "En dessous de quelle saturation la cyanose devient-elle visible (synthèse) ?", ["85 %"], ["98 %", "95 %", "60 %"], "rp_msbronch"),
    q("b40", "signes", "Dans le cas du bébé de 6 mois hospitalisé (CR 27/02/25), quel O2 reçoit-il ?", ["2 L/min par lunettes nasales"], ["15 L/min au masque à réserve", "Optiflow 60 L/min", "VNI BiPAP"], "rp_cr2702"),
    // scores
    q("b41", "scores", "Items du score de Wang selon le CR 2026-27 (plusieurs réponses) :", ["Fréquence respiratoire", "Sibilants", "Tirage", "État général"], ["Température"], "rp_cr1911"),
    q("b42", "scores", "Cotation du score de Wang (CR 2026-27) :", ["Chaque item de 0 à 3, total sur 12"], ["Chaque item de 0 à 2, total sur 10", "Chaque item de 0 à 5, total sur 25", "Oui / non, total sur 4"], "rp_cr1911"),
    q("b43", "scores", "Jusqu'à quel âge le score de Wang est-il valable ?", ["24 mois"], ["6 mois", "6 ans", "12 ans"], "rp_trame"),
    q("b44", "scores", "Score de Wang à partir duquel la forme est sévère :", ["9"], ["3", "4", "12 seulement"], "rp_cr1911"),
    q("b45", "scores", "Wang = 6/12, toux devenue grasse, pas de red flag : conduite ?", ["Forme modérée : kiné respiratoire indiquée"], ["Forme sévère : pas de kiné", "Forme bénigne : rien", "Intubation"], "rp_trame", "Modérée = 4 à 8 : kiné (trame, résumé)."),
    q("b46", "scores", "Wang = 10/12 : conduite ?", ["Forme sévère : hospitalisation, pas de kiné tant que le bébé est instable"], ["ELPr immédiate", "Renvoyer à domicile", "Clapping"], "rp_lise0404"),
    q("b47", "scores", "Wang = 2/12 : conduite ?", ["Forme bénigne : guérit seule, pas de kiné (surveillance et éducation)"], ["Hospitalisation", "ELPr 3 fois par jour", "Antibiotiques"], "rp_pedia"),
    q("b48", "scores", "Quelle proportion des bronchiolites est bénigne selon le RESPI PEDIA ?", ["50 à 60 %"], ["5 %", "90 à 100 %", "1 %"], "rp_pedia"),
    q("b49", "scores", "Que mesure l'état général dans le Wang ? (plusieurs réponses)", ["L'alimentation", "Le sommeil et la somnolence"], ["La tension artérielle", "Le poids de naissance"], "rp_cr2003", "Une somnolence peut traduire une hypercapnie (notes 04/04)."),
    q("b50", "scores", "Le score de Beck ajoute au Wang :", ["La SpO2 et la FC"], ["La température et le poids", "La TA et la diurèse", "Le Glasgow"], "rp_lise0404"),
    q("b51", "scores", "Le score de Beck va jusqu'à :", ["18"], ["12", "10", "15"], "rp_lise0404"),
    q("b52", "scores", "Normes du score de Beck (plusieurs réponses) :", ["SpO2 normalement supérieure à 95 %", "FC normalement inférieure à 140"], ["SpO2 normale à 85 %", "FC normale supérieure à 200"], "rp_lise0404"),
    q("b53", "scores", "Grille de Wang (hors cours) : FR à 52/min. Combien de points ?", ["2"], ["0", "1", "3"], "rp_hors", "< 30 = 0 ; 31-45 = 1 ; 46-60 = 2 ; > 60 = 3. Le rapport de stage donne aussi 2 points pour 52 cpm."),
    q("b54", "scores", "Test de Rosenthal : comment le fait-on ?", ["On ferme la bouche du bébé et il doit respirer par le nez une quinzaine de cycles"], ["On bouche une narine et on ausculte l'autre", "On met un miroir sous le nez", "On compte la FR pendant les pleurs"], "rp_cr1911"),
    q("b55", "scores", "Test de Rosenthal positif : que signifie-t-il et que fait-on ?", ["Obstruction des VAS : lavage de nez / désobstruction rhinopharyngée"], ["Encombrement distal : ELPr directement", "Pneumothorax : appeler le chirurgien", "Rien, c'est normal"], "rp_cr1911"),
    q("b56", "scores", "Critères d'un Rosenthal positif (plusieurs réponses) :", ["Le bébé se débat", "Il désature ou s'essouffle", "Il n'arrive pas à faire les cycles nasaux"], ["Il respire calmement par le nez"], "rp_cr1911"),
    q("b57", "scores", "Combien de cycles le CR 2026-27 demande-t-il pour le test de Rosenthal ?", ["Une quinzaine"], ["3", "50", "100"], "rp_cr1911", "Autres supports : 15 à 20, 20, 10 à 20. On garde le CR 2026-27."),
    q("b58", "scores", "Indice indirect que les VAS du bébé vont bien (RESPI PEDIA) :", ["Il garde sa tétine en bouche et prend bien ses biberons"], ["Il pleure fort", "Il ouvre la bouche pour respirer", "Il ronfle"], "rp_pedia"),
    q("b59", "scores", "Un bébé qui ouvre la bouche pour ventiler indique :", ["Que son nez est bouché"], ["Qu'il est en hyperventilation volontaire", "Qu'il a faim", "Que ses VAI sont propres"], "rp_rapport"),
    q("b60", "scores", "Items des bilans ciblés de la bronchiolite (RESPI PEDIA) (plusieurs réponses) :", ["SpO2 avant et après", "Sécrétions rhinopharyngées 0/+/++", "Sommeil perturbé oui/non", "Alimentation normale oui/non"], ["Tension artérielle au brassard adulte"], "rp_pedia"),
    // gravité
    q("b61", "gravite", "FR d'un nourrisson qui est un signe de gravité (plusieurs réponses) :", ["Plus de 60/min", "Moins de 30/min"], ["45/min", "35/min"], "rp_cr2702"),
    q("b62", "gravite", "FC d'un nourrisson qui est un signe de gravité (plusieurs réponses) :", ["Plus de 180 bpm", "Moins de 80 bpm"], ["140 bpm", "120 bpm"], "rp_cr2702", "Le RESPI PEDIA écrit « FR > 180 ou < 80 » : c'est en fait la FC."),
    q("b63", "gravite", "Température normale du nourrisson (CR 27/02/25) :", ["36,5 à 37,5 °C"], ["38,5 à 39 °C", "35 à 36 °C", "37,8 à 38,5 °C"], "rp_cr2702"),
    q("b64", "gravite", "Perte de poids à partir de laquelle on parle de gravité (CR 2026-27) :", ["5 %"], ["1 %", "20 %", "50 %"], "rp_cr1911", "Les notes 04/04 disaient 10 % : le CR 2026-27 est prioritaire."),
    q("b65", "gravite", "Que faut-il faire d'un nourrisson qui a perdu 5 % de son poids ?", ["Le réhydrater : signe de gravité (indication d'hospitalisation)"], ["Augmenter la kiné à 3 séances par jour", "Rien, c'est normal", "Lui donner un mucolytique"], "rp_cr2003"),
    q("b66", "gravite", "Signe de sévérité lié à l'alimentation :", ["Alimentation diminuée de 50 % sur 3 repas consécutifs (ou refus)"], ["Un biberon pris en 10 minutes", "Une diversification commencée", "Un repas sauté sur 10"], "rp_pedia"),
    q("b67", "gravite", "Âge qui impose l'hospitalisation :", ["Moins de 2 mois"], ["Plus de 12 mois", "Entre 6 et 8 mois", "Plus de 18 mois"], "rp_msbronch", "Risque d'apnée."),
    q("b68", "gravite", "Signes de gravité de la conscience (plusieurs réponses) :", ["Enfant apathique, somnolent", "Enfant qui ne réagit pas quand on le stimule", "Hypotonie"], ["Enfant souriant et tonique"], "rp_cr1911"),
    q("b69", "gravite", "Pourquoi un bébé apathique est-il inquiétant ?", ["C'est un signe d'épuisement (gravité)"], ["Il fait sa sieste normale", "Il est bien désencombré", "Il a trop mangé"], "rp_cr1911"),
    q("b70", "gravite", "Terrain qui conduit à l'hospitalisation (plusieurs réponses) :", ["Prématurité", "Cardiopathie congénitale", "Atteinte neuromusculaire", "Mucoviscidose ou dysplasie broncho-pulmonaire"], ["Fratrie de 2 enfants en bonne santé"], "rp_resume"),
    q("b71", "gravite", "RESPI PEDIA : renvoyer chez le médecin si (plusieurs réponses) :", ["Début des symptômes respiratoires depuis moins de 48 h", "Âge corrigé de moins de 2 mois", "Prématurité de moins de 36 SA", "Tabagisme passif"], ["Toux grasse depuis 5 jours chez un bébé de 10 mois sans autre signe"], "rp_pedia"),
    q("b72", "gravite", "Critère de prématurité grave du RESPI PEDIA :", ["≤ 34 SA avec oxygéno-dépendance néonatale > 28 j et âge < 6 mois en début d'épidémie"], ["Né à 39 SA", "≤ 40 SA sans autre critère", "Prématurité sans aucune importance"], "rp_pedia"),
    q("b73", "gravite", "Fontanelle déprimée chez le bébé : que suggère-t-elle ?", ["Une déshydratation"], ["Une hypertension intracrânienne", "Un bon état d'hydratation", "Une fracture"], "rp_trame"),
    q("b74", "gravite", "Que fait le kiné face à un red flag avant la séance ?", ["Pas de séance, il prévient le médecin"], ["Il fait une séance plus longue", "Il fait du clapping", "Il augmente lui-même l'O2 à 15 L sans prévenir"], "rp_msbronch"),
    q("b75", "gravite", "Les « 3 niveaux » de prise en charge de la synthèse :", ["Surveillance, kiné, hôpital"], ["Antibiotique, corticoïde, chirurgie", "Clapping, vibrations, drainage", "Crèche, école, sport"], "rp_msbronch"),
    // anamnèse
    q("b76", "anam", "Pourquoi demander le terme et la prématurité ?", ["La prématurité est un facteur de forme grave et d'hospitalisation (surfactant immature)"], ["Pour calculer le BMI", "Pour choisir l'antibiotique", "Ce n'est pas utile"], "rp_cr1911"),
    q("b77", "anam", "Chez le bébé, à la place du BMI on regarde :", ["La courbe de croissance (percentiles) et l'évolution du poids"], ["Le tour de taille", "Le rapport taille/hanches", "Le pli cutané"], "rp_cr2702"),
    q("b78", "anam", "Pourquoi demander si l'enfant est allaité ?", ["On ne peut pas mesurer la quantité bue au sein, et le lait maternel protège"], ["Pour interdire l'allaitement", "Pour donner des mucolytiques", "Ce n'est pas utile"], "rp_lise0404"),
    q("b79", "anam", "Pourquoi demander si la toux est sèche ou grasse ?", ["Elle conditionne le moment où l'on peut désencombrer"], ["Pour choisir l'antitussif", "Pour calculer le Wang", "Pour savoir s'il faut une radio"], "rp_cr1911"),
    q("b80", "anam", "Selon la HAS, chez qui la kiné « peut se discuter » ?", ["Le nourrisson avec comorbidités (antécédents respi, cardio, neuro)"], ["Tout 1er épisode avant 12 mois", "Tout enfant qui tousse", "Uniquement les jumeaux"], "rp_cr1911"),
    q("b81", "anam", "Le RGO est-il important dans l'anamnèse d'une bronchiolite ?", ["Oui, « important ++++ » (proclive, pressions abdominales)"], ["Non, sans rapport", "Seulement chez l'adulte", "Seulement s'il y a de la fièvre"], "rp_lise0404"),
    q("b82", "anam", "Questions sur la naissance de la trame (plusieurs réponses) :", ["À terme ou prématuré ?", "Surfacté si prématuré ?", "Temps en néonatologie ?", "Voie basse ou césarienne ?"], ["Groupe sanguin du père"], "rp_trame"),
    q("b83", "anam", "Bronchiolite ou asthme : enfant de 9 mois, 2e épisode, mère asthmatique (atopie familiale) :", ["Évoquer un asthme"], ["Bronchiolite certaine", "Mucoviscidose", "Corps étranger"], "rp_resume"),
    q("b84", "anam", "Enfant de 7 mois, 2e épisode, aucune atopie personnelle ni familiale :", ["Bronchiolite"], ["Asthme", "Coqueluche certaine", "Pneumothorax"], "rp_resume"),
    q("b85", "anam", "Enfant de 15 mois avec sifflements récidivants :", ["Asthme (plus de 12 mois)"], ["Bronchiolite du 1er épisode", "Laryngite", "Rien"], "rp_resume"),
    q("b86", "anam", "Quel est le 1er symptôme demandé à l'anamnèse (« par quoi ça a commencé ») ?", ["Une rhinite (rhume, encombrement des VAS)"], ["Une diarrhée", "Une éruption cutanée", "Une boiterie"], "rp_cr2702"),
    q("b87", "anam", "Pourquoi demander le mode de garde ?", ["Les collectivités (crèche) sont des « nids à microbes »"], ["Pour savoir qui paiera la séance", "Pour calculer le Wang", "Ce n'est pas utile"], "rp_cr2702"),
    q("b88", "anam", "Pourquoi demander si les parents lavent le nez et comment ?", ["C'est un point d'éducation thérapeutique"], ["Pour leur interdire de le faire", "Pour remplacer l'auscultation", "Pour prescrire un spray"], "rp_cr1911"),
    q("b89", "anam", "Quelle médication de base cite le CR 2026-27 pour le nourrisson ?", ["Le sérum physiologique à 0,9 %"], ["Un mucolytique", "Un antitussif", "Le NaCl à 20 %"], "rp_cr1911"),
    // bilan
    q("b90", "bilan", "Constat d'attitude du bébé hospitalisé : « que pensez-vous avoir ? » (plusieurs réponses)", ["Monitoring", "Oxygène", "Proclive 30°", "Oxymètre au gros orteil"], ["Plâtre cruro-pédieux"], "rp_cr2003"),
    q("b91", "bilan", "Où place-t-on l'oxymètre de pouls chez le bébé ?", ["Sur l'hallux (gros orteil)"], ["Sur le lobe de l'oreille uniquement", "Sur le front", "Sur l'index gauche"], "rp_cr2702"),
    q("b92", "bilan", "Prend-on la TA du nourrisson hospitalisé ?", ["Non"], ["Oui, à chaque séance", "Oui, au brassard adulte", "Oui, toutes les 5 minutes"], "rp_lise0404"),
    q("b93", "bilan", "Le saturomètre donne-t-il la FR ?", ["Non : on la lit sur le monitoring ou on la compte sur 1 minute"], ["Oui, toujours", "Oui, si on le met au doigt", "Oui, il donne aussi la TA"], "rp_lise0404"),
    q("b94", "bilan", "Sur combien de temps compte-t-on la FR du bébé ?", ["1 minute"], ["10 secondes", "5 minutes", "15 secondes multipliées par 4"], "rp_cr2702"),
    q("b95", "bilan", "Couchage recommandé pour prévenir la mort subite (CR 27/02/25) :", ["Sur le dos (voire sur le côté) jusqu'à 6-8 mois, pas sur le ventre"], ["Sur le ventre dès la naissance", "Assis", "Tête en bas"], "rp_cr2702"),
    q("b96", "bilan", "Quand ausculte-t-on le bébé ?", ["Après le lavage de nez, au début et à la fin de la séance"], ["Avant le lavage de nez pour garder les bruits", "Jamais, c'est le rôle du médecin", "Seulement après l'aérosol"], "rp_cr2702", "Le lavage avant évite les bruits parasites des VAS ; la réauscultation évalue l'efficacité."),
    q("b97", "bilan", "À quoi sert l'auscultation pour le kiné en bronchiolite ?", ["À évaluer l'efficacité de la séance"], ["À poser le diagnostic de VRS", "À mesurer la SpO2", "À compter la FC"], "rp_cr2003"),
    q("b98", "bilan", "Comment ausculter les parties postérieures d'un bébé couché sur le dos ?", ["En soulevant son épaule"], ["En le mettant tête en bas", "Impossible, on ne les ausculte pas", "En le faisant asseoir seul"], "rp_msbronch"),
    q("b99", "bilan", "Quel lobe faut-il penser à ausculter (zone latéro-basale) ?", ["Le lobe moyen droit"], ["Le lobe supérieur gauche", "La lingula uniquement", "L'apex droit"], "rp_msbronch"),
    q("b100", "bilan", "Bébé qui pleure pendant l'auscultation : que faire ? (plusieurs réponses)", ["Lui laisser la tétine", "Le laisser dans les bras de sa mère"], ["Le maintenir de force à plat", "Ausculter quand même pendant les cris"], "rp_msbronch"),
    q("b101", "bilan", "Crépitants / craquements chez le bébé :", ["Typiques d'un encombrement des VAI"], ["Signe de bronchospasme pur", "Bruit normal", "Signe de pneumothorax"], "rp_cr2702"),
    q("b102", "bilan", "Wheezing :", ["Sibilances audibles à distance (obstruction, bronchospasme)"], ["Crépitants fins de fin d'inspiration", "Frottement pleural", "Silence auscultatoire"], "rp_cr2702"),
    q("b103", "bilan", "Résumé d'étudiant : sibilances avec craquements signent :", ["Une hypersécrétion : ELPr"], ["Un bronchospasme pur : aérosol seul", "Un pneumothorax", "Une auscultation normale"], "rp_resume"),
    q("b104", "bilan", "Signes de lutte du nourrisson (plusieurs réponses) :", ["Tirage sus-sternal, intercostal, sous-costal", "Balancement thoraco-abdominal", "Battement des ailes du nez", "Geignement expiratoire"], ["Bradypnée calme"], "rp_cr1911"),
    q("b105", "bilan", "Balancement thoraco-abdominal =", ["Respiration paradoxale (tangage thoraco-abdominal)"], ["Respiration de Kussmaul", "Respiration normale", "Hoquet"], "rp_cr2702"),
    q("b106", "bilan", "Bilan trophique de la bronchiolite (plusieurs réponses) :", ["Aspect de la fontanelle (hydratation)", "Marbrures", "Cyanose"], ["Escarres du talon systématiques"], "rp_trame"),
    q("b107", "bilan", "Pourquoi déshabiller le bébé pour le bilan ?", ["Pour voir les tirages et signes de lutte et bien ausculter"], ["Pour le refroidir", "Pour le peser", "Ce n'est pas nécessaire"], "rp_lise0404"),
    // objectifs
    q("b108", "objectifs", "Objectifs kiné du CR 2026-27 (plusieurs réponses) :", ["Libérer les VAS pour faciliter respiration et alimentation", "Désencombrer les VAI quand le moment est venu", "Surveiller l'évolution et alerter si aggravation", "Éduquer les parents"], ["Raccourcir la durée de la bronchiolite par du clapping"], "rp_cr1911"),
    q("b109", "objectifs", "Selon le RESPI PEDIA, la KR dans la bronchiolite :", ["N'améliore pas la durée mais améliore le sommeil et l'alimentation"], ["Divise la durée par deux", "Guérit le VRS", "Évite toute hospitalisation"], "rp_pedia"),
    q("b110", "objectifs", "Objectif de long terme dans la bronchiolite :", ["Prévenir les récidives (tabac, hygiène, chambre)"], ["Augmenter la VO2max", "Renforcer le quadriceps", "Sevrer de la VNI"], "rp_cr1911"),
    q("b111", "objectifs", "Que dire à la maman sur les pleurs pendant la séance ?", ["Ce n'est pas douloureux : c'est sa façon d'exprimer sa gêne"], ["Que la séance fait très mal", "Qu'il faut arrêter dès le premier pleur", "Qu'il faut le bâillonner"], "rp_rapport"),
    q("b112", "objectifs", "Comment impliquer le parent pendant la séance ?", ["Lui proposer de faire le lavage de nez avec nous"], ["Lui demander de sortir systématiquement", "Lui faire faire l'ELPr seul sans explication", "Lui confier l'auscultation"], "rp_rapport"),
    // timing
    q("b113", "timing", "Recommandation HAS 2019 pour le 1er épisode chez le nourrisson de moins de 12 mois :", ["Pas de kiné de désencombrement bronchique"], ["ELPr 2 fois par jour obligatoire", "Clapping recommandé", "Drainage postural recommandé"], "rp_cr1911"),
    q("b114", "timing", "Techniques contre-indiquées par la HAS 2019 (plusieurs réponses) :", ["Clapping", "Vibrations", "Drainage postural"], ["Lavage de nez au sérum physiologique"], "rp_cr1911"),
    q("b115", "timing", "Rôle du kiné qui reste important selon la HAS (plusieurs réponses) :", ["Surveillance et évaluation de la gravité", "Désobstruction nasale", "Éducation des parents", "Orientation vers le médecin si aggravation"], ["Prescription d'antibiotiques"], "rp_cr1911"),
    q("b116", "timing", "On peut désencombrer les VAI quand (plusieurs réponses) :", ["La toux est devenue grasse", "L'état le permet (pas de détresse, Wang < 9)"], ["Le bébé est en pleine phase spastique", "La SpO2 est à 85 % sous O2"], "rp_cr1911"),
    q("b117", "timing", "Risque de fracture de côte après KR rapporté par une étude :", ["1/1000"], ["1/10", "1/1 000 000", "Aucun risque"], "rp_msbronch"),
    q("b118", "timing", "Durée de séance conseillée chez le nourrisson :", ["Courte, moins de 10 minutes"], ["45 minutes", "1 heure", "Au moins 30 minutes"], "rp_msbronch"),
    q("b119", "timing", "Bénéfice de la kiné chez le nourrisson hospitalisé selon Rochat (2012) :", ["Pas de bénéfice évident"], ["Bénéfice majeur prouvé", "Diminution de la mortalité de 50 %", "Diminution de la durée d'hospitalisation de moitié"], "rp_msbronch"),
    q("b120", "timing", "Selon la synthèse, quel effet principal de la KR est reconnu ?", ["Elle rassure les parents (effet placebo), avec peu de niveau de preuve"], ["Elle tue le virus", "Elle évite les récidives à vie", "Elle remplace l'O2"], "rp_msbronch"),
    // vas
    q("b121", "vas", "Quel sérum utilise-t-on pour le lavage de nez ?", ["NaCl 0,9 % (sérum physiologique)"], ["NaCl 20 %", "Eau du robinet froide", "Alcool à 70 %"], "rp_lise0404"),
    q("b122", "vas", "Pourquoi réchauffer les unidoses entre les mains ?", ["Pour ne pas agresser le bébé avec un liquide froid"], ["Pour stériliser le sérum", "Pour le rendre hypertonique", "Pour le transformer en spray"], "rp_lise0404"),
    q("b123", "vas", "Pour le rinçage du nez, il faut préférer :", ["De plus grands volumes plutôt que de grandes pressions"], ["De grandes pressions avec peu de volume", "Le spray à haute pression", "Pas de liquide du tout"], "rp_msbronch"),
    q("b124", "vas", "Lavage en décubitus latéral : dans quelle narine instille-t-on ?", ["La narine supra-latérale, jusqu'à ce que le liquide coule par l'autre"], ["La narine infra-latérale seulement", "Les deux en même temps en position assise", "Dans la bouche"], "rp_msbronch"),
    q("b125", "vas", "Ordre des étapes du lavage de nez (synthèse) :", ["Réchauffer, bébé sur le côté, visage vers la table, instiller, changer de côté"], ["Bébé assis, tête en arrière, spray froid", "Instiller les deux narines bébé à plat ventre puis attendre 1 h", "Aspirer d'abord à forte pression puis réchauffer"], "rp_msbronch"),
    q("b126", "vas", "DRR : à quel moment ferme-t-on la bouche du bébé ?", ["À la fin de l'expiration"], ["Au début de l'inspiration en bouchant le nez", "Pendant la toux", "Jamais : on ferme le nez"], "rp_cr1911"),
    q("b127", "vas", "Principe de la DRR :", ["L'inspiration suivante se fait par le nez et aspire les sécrétions vers le pharynx (reniflement passif)"], ["On souffle de l'air dans le nez", "On aspire la trachée avec une sonde", "On comprime le thorax pour expulser par le nez"], "rp_cr1911"),
    q("b128", "vas", "Mouchage antérieur (antérograde) :", ["Instiller puis fermer l'autre narine et la bouche pour que le bébé expire par le nez"], ["Fermer la bouche en fin d'expiration pour une inspiration nasale", "Aspirer la bouche", "Souffler dans la narine"], "rp_lise0404"),
    q("b129", "vas", "Pourquoi « renifler plutôt que moucher » ?", ["En mouchant fort, les agents pathogènes migrent vers les sinus"], ["Renifler est plus rapide", "Moucher est interdit par la loi", "Renifler augmente la fièvre"], "rp_msbronch"),
    q("b130", "vas", "Avec quoi peut-on fermer la bouche pour la DRR ou le Rosenthal ?", ["La tranche cubitale de la main ou une pression sous le menton"], ["Un sparadrap", "Le pouce dans la bouche", "Un masque à oxygène"], "rp_0802"),
    q("b131", "vas", "Glossopulsion (notes 04/04) :", ["Manœuvre pour empêcher l'enfant d'avaler ses sécrétions"], ["Technique d'ELPr abdominale", "Aspiration nasotrachéale", "Toux provoquée par le dos"], "rp_lise0404"),
    q("b132", "vas", "Pourquoi le spray est-il déconseillé chez le bébé ?", ["Il est plus agressif"], ["Il est trop cher", "Il contient de l'alcool", "Il est hypertonique à 20 %"], "rp_lise0404"),
    q("b133", "vas", "Le mouche-bébé mécanique :", ["Permet à la maman de doser l'aspiration"], ["Est contre-indiqué par la HAS", "Remplace l'auscultation", "Sert à faire l'aérosol"], "rp_cr2003"),
    // vai
    q("b134", "vai", "Position du bébé pour l'ELPr :", ["Sur le dos en proclive 30°"], ["Tête en bas (déclive)", "Couché ventral à plat", "Assis seul sur la table"], "rp_msbronch"),
    q("b135", "vai", "ELPr : rôle de la main abdominale :", ["Contre-appui (pas de poussée, surtout si RGO)"], ["Elle pousse fort pour vider l'estomac", "Elle tapote (clapping)", "Elle vibre"], "rp_techkr"),
    q("b136", "vai", "ELPr : rôle de la main thoracique :", ["Elle travaille : elle amène progressivement le thorax vers le bas et la colonne, vers le VRE"], ["Elle reste immobile", "Elle percute le sternum", "Elle soulève le thorax vers le VRI"], "rp_cr2003"),
    q("b137", "vai", "En combien de cycles atteint-on progressivement le VRE en ELPr ?", ["3 à 5 cycles"], ["1 seul cycle brutal", "20 cycles", "50 cycles"], "rp_msbronch"),
    q("b138", "vai", "Que fait-on au bout de l'ELPr (VRE atteint) ?", ["On relâche les deux mains et on laisse respirer à volume courant, puis on recommence"], ["On maintient la pression 1 minute", "On fait une toux provoquée à chaque fois obligatoirement", "On passe au clapping"], "rp_cr2702"),
    q("b139", "vai", "Que faut-il faire avant l'ELPr (plusieurs réponses) ?", ["Tester les pressions manuelles", "Déshabiller l'enfant", "Dégager les VAS puis ausculter"], ["Faire du drainage postural tête en bas"], "rp_cr2702"),
    q("b140", "vai", "Pendant l'ELPr, que surveille-t-on lors des pauses (plusieurs réponses) ?", ["SpO2", "Coloration cutanée", "Dyspnée"], ["Glycémie capillaire"], "rp_msbronch"),
    q("b141", "vai", "Toux provoquée chez le nourrisson :", ["Brève pression sur la trachée juste au-dessus de la fourchette sternale"], ["Forte pression sur l'abdomen", "Tapes dans le dos", "Pression sur le nez"], "rp_cr1911"),
    q("b142", "vai", "Jusqu'à quel âge environ le nourrisson ne sait pas tousser sur demande ?", ["2 ans"], ["2 mois", "8 ans", "12 ans"], "rp_cr1911"),
    q("b143", "vai", "Contre-indication de la toux provoquée :", ["Atrésie de l'œsophage (risque de spasme)"], ["Rhinite", "Fièvre à 38 °C", "Allaitement"], "rp_msbronch"),
    q("b144", "vai", "Bébé en couché facial qui relève la tête : pourquoi la toux est-elle plus forte ? (plusieurs réponses)", ["La trachée s'allonge", "Les tussirécepteurs sont stimulés", "Le calibre diminue donc la vitesse augmente"], ["Le diaphragme est paralysé"], "rp_msbronch"),
    q("b145", "vai", "AFE chez le nourrisson :", ["Accélération du flux expiratoire par pression thoraco-abdominale pour remonter les sécrétions vers la trachée"], ["Expiration lente jusqu'au VR", "Inspiration contrôlée en décubitus latéral", "Percussions thoraciques"], "rp_cr1911"),
    q("b146", "vai", "Jusqu'où l'ELPr prolonge-t-elle l'expiration selon le CR 2026-27 ?", ["Jusqu'au volume résiduel (en passant par le VRE)"], ["Jusqu'à la CPT", "Jusqu'au VRI", "Elle ne prolonge pas l'expiration"], "rp_cr1911", "Les autres supports disent « vers le VRE » : on descend dans le VRE, vers le VR."),
    q("b147", "vai", "Techniques de désencombrement utilisées dans le rapport de stage (plusieurs réponses) :", ["Drainage autogène assisté sur ballon de Bobath", "Accélération du flux expiratoire", "Toux provoquée par réflexe"], ["Clapping"], "rp_rapport"),
    q("b148", "vai", "Selon le RESPI PEDIA, à partir de quel âge l'EDIC ?", ["3-4 ans"], ["3-4 mois", "12 ans", "Dès la naissance"], "rp_pedia"),
    // médic
    q("b149", "medic", "Les antibiotiques dans la bronchiolite :", ["Aucun intérêt sauf surinfection bactérienne"], ["Toujours indiqués", "Obligatoires avant la kiné", "Indiqués dès la fièvre à 38 °C"], "rp_msbronch"),
    q("b150", "medic", "Les corticoïdes (inhalés ou systémiques) dans la bronchiolite :", ["Sans intérêt selon la synthèse"], ["Traitement de référence", "Obligatoires", "Contre-indication absolue de la kiné"], "rp_msbronch", "Plusieurs CR les citent pourtant dans la médication « normale » : voir REMARQUES."),
    q("b151", "medic", "Effet des β2-mimétiques chez l'enfant de moins d'un an :", ["Effet pseudo-paradoxal : obstruction passagère et hypoventilation relative"], ["Bronchodilatation parfaite", "Aucun effet", "Sédation profonde"], "rp_msbronch"),
    q("b152", "medic", "Médicaments contre-indiqués dans la bronchiolite (plusieurs réponses) :", ["Antitussifs", "Mucolytiques", "Mucorégulateurs"], ["Sérum physiologique 0,9 %"], "rp_msbronch"),
    q("b153", "medic", "Nébulisation citée dans la séance pratique :", ["NaCl 3 % + salbutamol"], ["NaCl 20 % + morphine", "Eau stérile + antibiotique", "Adrénaline + corticoïde systémique"], "rp_msbronch"),
    q("b154", "medic", "Délai d'action de la nébulisation NaCl 3 % + salbutamol :", ["2 à 3 minutes"], ["2 à 3 heures", "2 jours", "Immédiat sans délai"], "rp_msbronch"),
    q("b155", "medic", "Intérêt du sérum hypertonique 3 % ou 7 % :", ["Il « pompe » l'œdème sous-muqueux et relance le transport mucociliaire"], ["Il tue le VRS", "Il bronchodilate comme le salbutamol", "Il remplace l'O2"], "rp_msbronch"),
    q("b156", "medic", "Avant un aérosol, il faut :", ["Bien moucher l'enfant"], ["Lui donner à manger", "Faire du clapping", "Rien de particulier"], "rp_cr2003"),
    q("b157", "medic", "Le Doliprane du rapport de stage est :", ["Du paracétamol : antipyrétique et antidouleur"], ["Un antibiotique", "Un bronchodilatateur", "Un corticoïde"], "rp_rapport"),
    q("b158", "medic", "La Josacine du rapport de stage est :", ["Un antibiotique"], ["Un antipyrétique", "Un mucolytique", "Un bronchodilatateur"], "rp_rapport"),
    // séance
    q("b159", "seance", "Remets dans l'ordre (synthèse) : que vient juste après les red flags et le Rosenthal positif ?", ["Désencombrer les VAS (NaCl 0,9 % instillé)"], ["Toux provoquée", "ELPr", "Réauscultation finale"], "rp_msbronch"),
    q("b160", "seance", "Quelle est la dernière étape d'une séance ?", ["Réausculter et reprendre les paramètres"], ["Faire l'aérosol", "Faire le Rosenthal", "Faire l'ELPr"], "rp_cr1911"),
    q("b161", "seance", "Critères d'une séance efficace (plusieurs réponses) :", ["Moins de bruits à l'auscultation", "Meilleure SpO2", "Moins de signes de lutte"], ["FR plus élevée qu'au départ"], "rp_cr1911"),
    q("b162", "seance", "Séquence du résumé d'étudiant :", ["Ausculter, aérosol, ELPr, réausculter"], ["ELPr, ausculter, aérosol, clapping", "Aérosol, clapping, drainage postural", "Toux, ELPr, Rosenthal, lavage"], "rp_resume"),
    q("b163", "seance", "Installation du bébé avant la séance (résumé) (plusieurs réponses) :", ["En proclive", "Déshabillé", "Table désinfectée"], ["Juste après un biberon"], "rp_resume"),
    q("b164", "seance", "Mouchage + DRR en fin de séance : pourquoi ?", ["Manœuvre finale pour nettoyer les VAS et dégager les sécrétions ramenées"], ["Pour faire monter la SpO2 de 20 %", "Pour remplacer l'ELPr", "Pour mesurer la FR"], "rp_msbronch"),
    // parents
    q("b165", "parents", "Conseil tabac du CR 2026-27 (plusieurs réponses) :", ["Ne jamais fumer dans la même pièce ni dans la voiture, même sans l'enfant", "Fumer dehors, se laver les mains", "Idéalement changer de vêtement avant de prendre l'enfant"], ["Fumer près de la fenêtre ouverte de la chambre suffit"], "rp_cr1911"),
    q("b166", "parents", "Pourquoi ne pas fumer dans la voiture même sans l'enfant ?", ["Les particules restent"], ["Ça abîme le moteur", "Ce n'est pas un problème", "Pour économiser"], "rp_cr1911"),
    q("b167", "parents", "Température idéale de la chambre :", ["18 à 20 °C"], ["22 à 24 °C", "12 à 14 °C", "25 °C"], "rp_msbronch", "Dans le rapport de stage, la chambre est à 22 °C : à corriger."),
    q("b168", "parents", "Humidificateur d'air dans la chambre :", ["Déconseillé : il entretient la prolifération des bactéries"], ["Indispensable", "Recommandé à 80 % d'humidité", "Obligatoire en hiver"], "rp_lise0404"),
    q("b169", "parents", "Combien de temps aérer la chambre (synthèse) ?", ["10 à 15 minutes à fond"], ["30 secondes", "Jamais", "Toute la nuit fenêtre ouverte"], "rp_msbronch"),
    q("b170", "parents", "Pourquoi surélever le lit à 30° ? (plusieurs réponses)", ["Diminuer l'œdème des VAS", "Diminuer les effets du RGO", "Soulager la dyspnée"], ["Augmenter le RGO"], "rp_cr2702"),
    q("b171", "parents", "Conseils sur l'alimentation (plusieurs réponses) :", ["Fractionner les repas", "Hydrater fréquemment", "Laver le nez avant le repas"], ["Supprimer les biberons"], "rp_lise0404"),
    q("b172", "parents", "Conseils aux frères et sœurs (notes 04/04) :", ["Se laver les mains en rentrant et ne pas trop toucher le bébé"], ["Dormir avec le bébé", "Lui donner leurs jouets de l'école", "Rien"], "rp_lise0404"),
    q("b173", "parents", "Objets à éviter dans la chambre (plusieurs réponses) :", ["Trop de peluches", "Tapis"], ["Lit à barreaux"], "rp_msbronch"),
    q("b174", "parents", "Que désinfecter (plusieurs réponses) ?", ["La table à langer", "Les jouets", "Le matériel"], ["Le carnet de vaccination"], "rp_rapport"),
    q("b175", "parents", "Gestes barrières en période épidémique (plusieurs réponses) :", ["Lavage des mains", "Éviter les lieux très fréquentés"], ["Mettre le bébé en crèche plus souvent"], "rp_cr1911"),
    // pièges
    q("b176", "pieges", "Erreur relevée par un prof sur un bébé en réa :", ["Il avait été mis « à l'envers » : il doit être en proclive 30°"], ["Il était en proclive 30°", "Il avait des lunettes nasales", "Il était déshabillé"], "rp_cr1704"),
    q("b177", "pieges", "À l'oral, quelle recommandation faut-il citer pour la bronchiolite ?", ["La HAS 2019"], ["Le GOLD 2023", "Le score de Glasgow", "La classification NYHA"], "rp_cr1911"),
    q("b178", "pieges", "Le jury demande : « pourquoi lavez-vous le nez avant de manger ? »", ["Le bébé respire par le nez et sa langue prend beaucoup de place : nez bouché = il mange mal"], ["Pour que le lait ait meilleur goût", "Pour prendre la TA", "Parce que le sérum est un aliment"], "rp_0802"),
    q("b179", "pieges", "Signe d'alerte à transmettre aux parents (plusieurs réponses) :", ["Tirages et battement des ailes du nez", "Bébé mou ou somnolent", "Refus de boire"], ["Bébé qui gazouille"], "rp_cr2702")
  ];

  bro.patients = [
    { id: "rp_p1", nom: "Nourrisson de 6 mois · bronchiolite hospitalisé depuis la veille (CR 27/02/25 et 20/03/25)", origine: "cours", src: "rp_cr2702", desc: "Bébé de 6 mois hospitalisé la veille au soir, vu le lendemain (J1). En proclive 30°, monitoré, O2 2 L/min aux lunettes nasales, oxymètre sur l'hallux, perfusion. Début il y a quelques jours par un encombrement des VAS (rhinite, VRS). Né à terme, courbe de poids normale.", attrs: { bebe: true, o2: "lunettes", tirage: true, dyspnee: true, toux: true } },
    { id: "rp_p2", nom: "Nourrisson de 6 mois · bronchiolite sévère (notes de cours 04/04)", origine: "cours", src: "rp_lise0404", desc: "Bronchiolite sévère depuis 8 jours, entré par les urgences. Lunettes nasales, électrodes du monitoring, sonde naso-gastrique, perfusion, proclive 30°. Né à terme, 1er épisode, 2 parents fumeurs, 1 frère de 4 ans. Se réveille car son nez est bouché.", attrs: { bebe: true, o2: "lunettes", tirage: true, dyspnee: true, toux: true } },
    { id: "rp_p3", nom: "Nourrisson de 6 mois · broncho-alvéolite, maman dans la chambre (CR 19/11/2026)", origine: "cours", src: "rp_cr1911", desc: "Cas pratique du cours 2026-27 : nourrisson de 6 mois hospitalisé, monitoré, sous O2, maman présente. Le cours détaille les questions à poser, le bilan adapté, le timing du désencombrement et la recommandation HAS 2019.", attrs: { bebe: true, o2: "lunettes", tirage: true, dyspnee: true, toux: true } },
    { id: "rp_p4", nom: "Nourrisson de 6 mois · bronchiolite, ex-prématuré de 26 SA (cas inventé de Wallace)", origine: "invente", src: "rp_wallace", desc: "6 kg, 1er épisode, rhinopharyngite (VRS) il y a 3 jours. Né à 26 SA, surfacté. Mère asthmatique, 2 parents fumeurs, crèche, 2 gros chiens. Proclive 30°, O2 2 L/min, monitoring, oxymètre sur l'hallux. FC 180, FR 28, T 38 °C, SpO2 98 %. Wang 6, Rosenthal positif, fontanelle déshydratée.", attrs: { bebe: true, o2: "lunettes", tirage: true, toux: true } },
    { id: "rp_p5", nom: "Nourrisson de 8 mois · bronchiolite légère au cabinet (rapport de stage)", origine: "cours", src: "rp_rapport", desc: "L.C., né à 36 semaines, 7,56 kg. Malade depuis 2 jours, toux grasse jour et nuit, fièvre 39-40 °C, RGO. Arrive endormi dans son maxi-cosy, respire par le nez. SpO2 98 %, FC 140, FR 52. Wang modifié 4/12, Rosenthal négatif, crépitants à gauche.", attrs: { bebe: true, toux: true } }
  ];

  bro.cas = [
    { id: "rp_c1", origine: "cours", src: ["rp_cr1911"], patient: "rp_p3", titre: "Nourrisson de 6 mois hospitalisé : broncho-alvéolite (cours du 19/11/2026)",
      fiche: "Nourrisson de 6 mois, hospitalisé pour broncho-alvéolite. La maman est dans la chambre. Menez l'anamnèse, le bilan, fixez les objectifs et le plan de traitement.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis les questions à poser à la maman, dans l'ordre. Le CR donne surtout le « pourquoi » de chaque question.", items: [
          { q: "Âge, terme, prématurité ?", r: "Non précisé dans le CR. Pourquoi : la prématurité est un facteur de risque de forme grave et d'hospitalisation.", p: 1 },
          { q: "Premier épisode ou récidive ?", r: "Non précisé. Pourquoi : à partir du 3e épisode de sifflements avant 1 an, on peut évoquer un asthme du nourrisson.", p: 1 },
          { q: "Depuis quand ? Comment ça évolue ?", r: "Non précisé. Pourquoi : situer l'épisode (pic souvent vers J3-J5).", p: 1 },
          { q: "La toux est-elle sèche ou grasse ?", r: "Non précisé. Pourquoi : elle conditionne le moment où l'on peut désencombrer.", p: 1 },
          { q: "Antécédents respiratoires, cardiaques, neurologiques ?", r: "Non précisé. Pourquoi : comorbidités = risque de forme grave ; c'est là que la kiné « peut se discuter » selon la HAS.", p: 1 },
          { q: "Combien mange-t-il ? A-t-il perdu du poids ?", r: "Non précisé. Pourquoi : à partir de 5 % de perte de poids, signe de gravité, il faut réhydrater ; un nourrisson au nez encombré mange mal.", p: 1 },
          { q: "Comment dort-il ?", r: "Non précisé. Pourquoi : retentissement de la gêne respiratoire.", p: 2 },
          { q: "Les parents fument-ils ?", r: "Non précisé. Pourquoi : facteur de risque important, conseils à donner.", p: 1 },
          { q: "Crèche, fratrie, animaux ?", r: "Non précisé. Pourquoi : exposition aux virus et aux allergènes.", p: 2 },
          { q: "Faites-vous des lavages de nez ? Comment ?", r: "Non précisé. Pourquoi : point d'éducation thérapeutique.", p: 1 },
          { q: "Quels médicaments ?", r: "Sérum physiologique à 0,9 % (cité par le CR).", p: 2 },
          { q: "Position pour dormir, chambre humide, assez chauffée ? Mode de garde ? Mode d'alimentation ? Examens complémentaires ?", r: "Questions listées par le CR sans réponse : utiles pour les conseils.", p: 2 },
          { q: "Quel est le métier du papa ?", r: "Sans intérêt pour la prise en charge.", p: 3 },
          { q: "Le bébé a-t-il déjà fait du sport ?", r: "Question inutile chez un nourrisson.", p: 3 }
        ] },
        { type: "bilans", titre: "Bilans", consigne: "Choisis les bilans à réaliser, dans l'ordre (bilan adapté : nourrisson hospitalisé, monitoré, sous O2).", ordre: ["Observation de l'installation", "Paramètres : FR, FC, SpO2 (sous combien d'O2), température", "État général et conscience", "Signes de lutte", "Test de Rosenthal", "Auscultation (après lavage de nez)", "Toux", "Score de Wang"], items: [
          { b: "Observation de l'installation", r: "Position de l'enfant, comment il est installé, lunettes d'O2, monitoring.", ok: true },
          { b: "Paramètres : FR, FC, SpO2 (sous combien d'O2), température", r: "À relever et à comparer aux seuils de gravité (FR > 60 ou < 30, FC > 180 ou < 80, SpO2 > 92 %).", ok: true },
          { b: "État général et conscience", r: "Apathique, somnolent, ne réagit pas à la stimulation = signe de gravité (épuisement) ; comparer avec ce que dit la maman.", ok: true },
          { b: "Signes de lutte", r: "Tirages sus-sternal, intercostal, sous-costal ; balancement thoraco-abdominal ; battement des ailes du nez ; geignement ; entonnoir xiphoïdien.", ok: true },
          { b: "Test de Rosenthal", r: "Bouche fermée une quinzaine de cycles : s'il désature ou se débat, obstruction nasale, désobstruction indiquée.", ok: true, tests: ["rp_rosenthal"] },
          { b: "Auscultation (après lavage de nez)", r: "Sibilants (phase spastique), crépitants / sous-crépitants, ronchi (encombrement).", ok: true },
          { b: "Toux", r: "Sèche ou grasse, productive ou non : décide du timing.", ok: true },
          { b: "Score de Wang", r: "FR, sibilants, tirage, état général, chacun 0 à 3, total /12 ; sévère à partir de 9.", ok: true, tests: ["rp_wang"] },
          { b: "Tension artérielle au brassard", r: "Pas de TA chez le nourrisson hospitalisé.", ok: false },
          { b: "Test de marche de 6 minutes", r: "Absurde chez un nourrisson.", ok: false },
          { b: "Échographie pulmonaire par le kiné", r: "Ne montre pas l'encombrement ; on ne la fait pas chez le bébé.", ok: false }
        ] },
        { type: "choix", titre: "Objectifs", consigne: "Coche les objectifs justes.", src: "rp_cr1911", items: [
          { t: "Libérer les VAS (désobstruction nasale) pour faciliter respiration et alimentation", ok: true },
          { t: "Désencombrer les VAI quand le moment est venu (toux grasse, état stable)", ok: true },
          { t: "Surveiller l'évolution (paramètres, signes de lutte, score) et alerter si aggravation", ok: true },
          { t: "Éduquer les parents", ok: true },
          { t: "Raccourcir la durée de la bronchiolite par des séances longues", ok: false, why: "La KR n'améliore pas la durée ; séances courtes (< 10 min)." },
          { t: "Renforcer les muscles inspiratoires avec un threshold", ok: false, why: "Hors sujet chez un nourrisson." }
        ] },
        { type: "choix", titre: "Traitement", consigne: "Coche ce que tu fais (ou dis) dans ce cas.", src: "rp_cr1911", items: [
          { t: "Tant qu'il est spastique (sibilants, toux sèche) : ne pas désencombrer, stabiliser (O2, aérosols selon prescription), surveiller", ok: true },
          { t: "DRR : fermer la bouche en fin d'expiration, après instillation de sérum physiologique", ok: true },
          { t: "ELPr quand la toux est grasse et l'état le permet (Wang < 9)", ok: true },
          { t: "AFE pour remonter les sécrétions vers la trachée", ok: true },
          { t: "Toux provoquée : brève pression juste au-dessus de la fourchette sternale", ok: true },
          { t: "Recueillir les sécrétions (mouchage, mouche-bébé), réausculter et reprendre les paramètres en fin de séance", ok: true },
          { t: "Citer la HAS 2019 : pas de désencombrement bronchique au 1er épisode avant 12 mois", ok: true },
          { t: "Clapping et vibrations pour décoller les sécrétions", ok: false, why: "Contre-indiqués par la HAS 2019." },
          { t: "Drainage postural tête en bas", ok: false, why: "Contre-indiqué (HAS 2019) ; le bébé reste en proclive 30°." },
          { t: "Désencombrer en pleine détresse avec un Wang à 10", ok: false, why: "Pas de kiné en forme sévère : stabiliser, prévenir le médecin." }
        ] },
        { type: "lecture", titre: "Correction des profs", html: `<p><b>Points du CR 2026-27</b> : bilan adapté à un nourrisson hospitalisé, monitoré, sous O2. Conseils : tabac (jamais dans la pièce ni dans la voiture, même sans l'enfant ; fumer dehors, se laver les mains, changer de vêtement), lavages de nez au sérum physiologique surtout avant repas et coucher, montrer les bons gestes, gestes barrières.</p><p><b>Timing</b> : spastique = pas de désencombrement ; toux grasse = on peut commencer ; jamais en pleine détresse (Wang ≥ 9).</p><p><b>HAS 2019 à citer</b> : pas de kiné de désencombrement bronchique pour le 1er épisode chez le nourrisson de moins de 12 mois ; clapping, vibrations, drainage postural contre-indiqués ; le kiné garde la surveillance, l'évaluation de la gravité, la désobstruction nasale, l'éducation et l'orientation.</p>` }
      ] },
    { id: "rp_c2", origine: "cours", src: ["rp_cr2702", "rp_cr2003"], patient: "rp_p1", titre: "Bébé de 6 mois hospitalisé depuis la veille (mise en situation MSP, CR 27/02/25 et 20/03/25)",
      fiche: "Bébé de 6 mois, hospitalisé la veille au soir pour bronchiolite. Vous le découvrez le lendemain (J1). Anamnèse, bilans, objectifs, traitement.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis les questions à poser, dans l'ordre.", items: [
          { q: "Histoire : 1er épisode ? Par quel symptôme ça a commencé ?", r: "1er épisode. Début il y a quelques jours par un encombrement des VAS (rhinite, d'origine virale, VRS).", p: 1 },
          { q: "Prématuré ou à terme ?", r: "Accouchement à terme. (La prématurité prédispose à l'hospitalisation ; surfactant si prématuré.)", p: 1 },
          { q: "Poids, courbe de croissance, perte ou prise récente ?", r: "Courbe tout à fait normale. Repères : perte de 5 % = indication d'hospitalisation (réhydrater) ; apports diminués de 50 % sur 3 repas = sévérité.", p: 1 },
          { q: "Mange-t-il bien ? Allaitement ou biberon ?", r: "À demander : difficulté à manger si nez encombré ; lait maternel = protection immunitaire.", p: 1 },
          { q: "Médication avant et actuelle ?", r: "Rien avant. Actuellement O2 2 L/min aux lunettes nasales, bronchodilatateurs en aérosol, sérum physiologique 0,9 % pour les VAS, antipyrétique (fièvre fréquente).", p: 1 },
          { q: "Antécédents familiaux, frères et sœurs, allergies, asthme ?", r: "À demander : contexte familial qui prédispose (asthme, allergie).", p: 2 },
          { q: "Antécédents personnels : neuro, vasculaires, opération, poussée dentaire, RGO ?", r: "À demander (comorbidités = gravité ; RGO = proclive).", p: 2 },
          { q: "Parents fumeurs ?", r: "À demander : mise en garde sur le tabagisme passif.", p: 1 },
          { q: "Les parents savent-ils faire un lavage de nez ?", r: "À demander : à faire avant de manger, de dormir et avant l'auscultation.", p: 1 },
          { q: "Sommeil, position, proclive 30°, co-dodo, humidité et température de la chambre ?", r: "À demander : idéal 18-20 °C ; proclive 30° (moins d'œdème, moins de RGO, moins de dyspnée).", p: 2 },
          { q: "Mode de garde ? Animaux ? Ville ou campagne ?", r: "À demander : gardienne, collectivité = nid à microbes.", p: 2 },
          { q: "Examens complémentaires ?", r: "À regarder dans le dossier.", p: 2 },
          { q: "Accouchement : matériel utilisé ?", r: "Question listée par le CR 20/03/25 (contexte néonatal).", p: 2 },
          { q: "Quel est son BMI ?", r: "On ne parle pas de BMI chez le bébé : on regarde la courbe de croissance.", p: 3 }
        ] },
        { type: "bilans", titre: "Bilans", consigne: "Choisis les bilans à réaliser, dans l'ordre.", ordre: ["Constat d'attitude", "Paramètres vitaux", "Bilan respiratoire : signes de lutte, Rosenthal, toux", "Auscultation après désencombrement des VAS", "Score de Wang / Beck", "Conscience", "Bilan trophi-cutané"], items: [
          { b: "Constat d'attitude", r: "Monitoring avec alarmes, O2 2 L/min aux lunettes nasales, proclive 30°, oxymètre de pouls sur l'hallux, perfusion, voie centrale ?, tétine. Couchage sur le dos (voire côté) jusqu'à 6-8 mois.", ok: true },
          { b: "Paramètres vitaux", r: "FC (gravité si > 180 ou < 80), FR sur 1 minute (gravité si > 60 ou < 30), pauses / apnées, T° (36,5-37,5 °C), SpO2 > 92 % selon la FiO2. Pas de TA chez le nouveau-né.", ok: true },
          { b: "Bilan respiratoire : signes de lutte, Rosenthal, toux", r: "Tirages sus-sternal, intercostal, sous-sternal ; muscles accessoires ; balancement thoraco-abdominal ; battement des ailes du nez ; hyperinflation ; pauses. Rosenthal (10 à 20 respirations nasales bouche fermée). Toux quinteuse sèche qui devient grasse.", ok: true, tests: ["rp_rosenthal"] },
          { b: "Auscultation après désencombrement des VAS", r: "Enfant déshabillé, tétine possible. Sibilances / wheezing (bronchospasme) ou craquements (encombrement des VAI). Sert à évaluer l'efficacité de la séance.", ok: true },
          { b: "Score de Wang / Beck", r: "État général, sibilances, tirages, FR /12 ; Beck ajoute SpO2 et FC. Kiné seulement en forme modérée ; pas en sévère (trop instable).", ok: true, tests: ["rp_wang"] },
          { b: "Conscience", r: "Somnolence, apathie, hypotonie ou agitation = gravité ; tonique, souriant, éveillé ? Comme d'habitude selon les parents ?", ok: true },
          { b: "Bilan trophi-cutané", r: "Fontanelle (hydratation), marbrures, cyanose (gravité), cicatrices (opérations antérieures).", ok: true },
          { b: "Prise de TA", r: "Pas de TA chez le nouveau-né / nourrisson hospitalisé.", ok: false },
          { b: "Testing musculaire du quadriceps", r: "Sans objet chez un nourrisson.", ok: false }
        ] },
        { type: "choix", titre: "Objectifs", consigne: "Coche les objectifs justes.", src: "rp_cr2702", items: [
          { t: "Éduquer les parents au mouchage antérieur (antérograde) et postérieur (rétrograde) et aux signes de sévérité", ok: true },
          { t: "Position proclive 30°", ok: true },
          { t: "Rassurer les parents sur le bénéfice des techniques", ok: true },
          { t: "Désencombrer (ELPr) et surveiller l'état clinique", ok: true },
          { t: "Prévenir les complications : surveillance des paramètres vitaux", ok: true },
          { t: "Conseils : fractionner les repas, hydrater, désinfecter les jouets, cigarette, aérosol avant repas et sommeil, moucher avant l'aérosol", ok: true },
          { t: "Mettre le bébé en décubitus ventral pour dormir", ok: false, why: "Couchage sur le dos jusqu'à 6-8 mois (prévention de la mort subite)." }
        ] },
        { type: "choix", titre: "Traitement", consigne: "Coche les gestes justes.", src: "rp_cr2003", items: [
          { t: "Mouchage antérieur : sérum physiologique bébé en CL ou CD ; poire ou système mécanique (la maman peut doser)", ok: true },
          { t: "Mouchage postérieur (DRR) : on ferme la mâchoire, il inspire par le nez", ok: true },
          { t: "Aérosolthérapie à distance de la kiné, après avoir bien mouché", ok: true },
          { t: "ELPr : tester d'abord manuellement ; main abdominale en contre-appui, main thoracique qui travaille vers le VRE ; puis relâcher", ok: true },
          { t: "Toux provoquée : stimuler la face antérieure de la trachée", ok: true },
          { t: "Ausculter le bébé à la fin de la séance", ok: true },
          { t: "Kiné en bronchiolite sévère pour la faire passer plus vite", ok: false, why: "Pas de kiné en forme sévère : bébé trop spastique." }
        ] },
        { type: "lecture", titre: "Correction des profs", html: `<p><b>CR 27/02/25</b> : on ne parle pas de BMI chez le bébé ; perte de poids de 5 % = indication d'hospitalisation ; au-delà de 50 % des apports en moins sur 3 repas = sévérité. Paramètres hors normes = signes de gravité. Patients prématurés, de moins de 2 mois (apnées), contexte socio-économique, antécédents neuromusculaires, pathologies congénitales = hospitalisation ; les 48 premières heures sont à risque. Wang valable jusqu'à 24 mois.</p><p><b>CR 20/03/25</b> : à 6 mois un bébé peut commencer à respirer par la bouche ; le kiné n'intervient pas en bronchiolite sévère (trop spastique), seulement à partir de la forme modérée ; on ausculte toujours en fin de séance.</p><p>Débat cité : « DA de Gauchez » (résistances à l'inspiration et descente dans le volume respiratoire) face à l'ELPr.</p>` }
      ] },
    { id: "rp_c3", origine: "cours", src: ["rp_lise0404"], patient: "rp_p2", titre: "Bronchiolite sévère sur un bébé de 6 mois (notes de cours 04/04)",
      fiche: "Bébé de 6 mois hospitalisé pour bronchiolite sévère, entré par les urgences. Anamnèse, bilans, objectifs et traitement.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis les questions à poser, dans l'ordre.", items: [
          { q: "Poids, taille ?", r: "Suit les courbes percentiles normales. L'important : l'évolution du poids depuis la bronchiolite.", p: 1 },
          { q: "Perte de poids ?", r: "Repère du support : 10 % = motif d'hospitalisation (le CR 2026-27 dit 5 %). Conseil : mouchage de nez avant le repas.", p: 1 },
          { q: "Alimentation : allaité ? hydraté ?", r: "Allaité : impossible de mesurer ce qu'il mange. Vérifier l'hydratation. Alimentation très perturbée dans une forme sévère : conseil de fractionner.", p: 1 },
          { q: "Antécédents de bronchiolite ?", r: "Premier épisode. Attention : 3 épisodes la première année = facteur de risque ++ d'asthme du nourrisson.", p: 1 },
          { q: "Histoire de la pathologie ?", r: "Depuis 8 jours : rhinorrhée, rhinite, toux quinteuse ; entré à l'hôpital par les urgences.", p: 1 },
          { q: "Accouchement : à terme ?", r: "Né à terme. (Chez le prématuré le surfactant est immature ; il existe des injections de surfactant.)", p: 1 },
          { q: "Tabagisme passif ?", r: "Les 2 parents fument.", p: 1 },
          { q: "Environnement de la chambre (humidificateur, température, peluches) ?", r: "Important pour les conseils aux parents.", p: 2 },
          { q: "Allergies ?", r: "Contexte allergique de l'enfant et de la famille à connaître.", p: 2 },
          { q: "Examens complémentaires ?", r: "Radiographie (état d'encombrement). Pas d'échographie chez le bébé (elle ne montre pas l'encombrement).", p: 2 },
          { q: "Antécédents médicaux (RGO) ?", r: "Non. « C'est important ++++ ».", p: 1 },
          { q: "Médications ?", r: "Bronchodilatateurs, antipyrétiques, corticoïdes, O2.", p: 1 },
          { q: "Fratrie ?", r: "1 frère de 4 ans.", p: 2 },
          { q: "Sommeil ?", r: "Il se réveille car son nez est bouché ; la tétine l'empêche de respirer ; la toux perturbe aussi le sommeil.", p: 1 },
          { q: "Type de garde ?", r: "La mère ne travaille pas, elle le garde à la maison.", p: 2 },
          { q: "Fait-il de la marche à quatre pattes ?", r: "Sans intérêt ici.", p: 3 }
        ] },
        { type: "bilans", titre: "Bilans", consigne: "Choisis les bilans à réaliser, dans l'ordre.", ordre: ["Constat d'attitude (appareillage)", "Paramètres vitaux (FR, FC, SpO2, T°)", "Bilan respiratoire : signes de détresse (bébé déshabillé)", "Auscultation (après lavage des VAS)", "Toux et expectorations", "Bilan d'éveil", "Score de Wang / Beck"], items: [
          { b: "Constat d'attitude (appareillage)", r: "Lunettes nasales, électrodes reliées au monitoring, sonde naso-gastrique, perfusion (hydratation, médicaments), proclive 30° (RGO, œdème, encombrement). L'éveil se note à part.", ok: true },
          { b: "Paramètres vitaux (FR, FC, SpO2, T°)", r: "FR sur le capteur ou comptée sur 1 min (le saturomètre ne donne pas la FR) ; pas de TA chez le bébé hospitalisé.", ok: true },
          { b: "Bilan respiratoire : signes de détresse (bébé déshabillé)", r: "4 types de tirage (ailes du nez, sous-sternal avec enfoncement xiphoïdien, intercostal, sus-sternal), cyanose, hyperinflation, tachypnée et tachycardie, respiration paradoxale.", ok: true },
          { b: "Auscultation (après lavage des VAS)", r: "Sifflements, sibilances dans cette forme sévère. En DD si calme, sinon dans les bras de la maman. Réauscultation en fin de séance.", ok: true },
          { b: "Toux et expectorations", r: "Toux quinteuse, grasse, productive ? À quel moment ? Expectorations difficiles à recueillir : regarder leur aspect.", ok: true },
          { b: "Bilan d'éveil", r: "Apathie, hypotonie, somnolence, agitation.", ok: true },
          { b: "Score de Wang / Beck", r: "Sévère (9 à 12) : kiné non requise car bébé trop instable et spastique. Beck : + SpO2 (> 95 %) et FC (< 140), jusqu'à 18.", ok: true, tests: ["rp_wang"] },
          { b: "Échographie pulmonaire", r: "On ne la fait pas chez un bébé : elle ne montre pas l'encombrement.", ok: false }
        ] },
        { type: "choix", titre: "Objectifs", consigne: "Coche les objectifs justes pour ce bébé.", src: "rp_lise0404", items: [
          { t: "Court terme : désencombrer les VAS et les VAI quand le score de Wang diminue et que la toux devient grasse", ok: true },
          { t: "Court terme : surveiller l'évolution", ok: true },
          { t: "Moyen / long terme : éduquer les parents (mouchage, tabac, chambre, repas)", ok: true },
          { t: "Faire de l'ELPr immédiatement malgré un Wang sévère", ok: false, why: "Forme sévère : intervention kiné non requise tant que le bébé est instable et spastique." }
        ] },
        { type: "choix", titre: "Traitement", consigne: "Coche les gestes et conseils justes.", src: "rp_lise0404", items: [
          { t: "Instillation de sérum physiologique 0,9 % en unidoses réchauffées entre les mains (pas de spray, plus agressif)", ok: true },
          { t: "Mouchage antérieur : instiller, fermer l'autre narine et la mâchoire pour une expiration nasale", ok: true },
          { t: "Mouchage postérieur par DRR (reniflement passif)", ok: true },
          { t: "ELPr : main abdominale en contre-appui, main thoracique qui amène progressivement vers le VRE", ok: true },
          { t: "Glossopulsion pour empêcher l'enfant d'avaler ses sécrétions", ok: true },
          { t: "Stimuler la toux : appui sur la fourchette sternale, ou DV (il relève la tête et étire sa trachée)", ok: true },
          { t: "Conseils : fumer dehors, se laver les mains, veste pour sortir fumer ; aérer et désinfecter ; peu de peluches ; chambre 18-20 °C ; proclive ; fratrie qui se lave les mains", ok: true },
          { t: "Conseiller un humidificateur d'air", ok: false, why: "« Ultra mauvais » : il entretient la prolifération des bactéries." }
        ] },
        { type: "lecture", titre: "Correction et nuances", html: `<p>Support de l'année antérieure : il affirme que l'ELPr est « la seule technique validée par la cellule respi pour un bébé ».</p><p><b>À l'examen 2026-27</b> : ce bébé est à son 1er épisode et a moins de 12 mois. Cite la HAS 2019 : pas de kiné de désencombrement bronchique recommandée, clapping / vibrations / drainage postural contre-indiqués. Le kiné surveille, évalue la gravité, désobstrue le nez et éduque les parents. En forme sévère, pas de kiné bronchique.</p><p>Erreur du support : les sibilances sont appelées « craquements de haute fréquence ». Les sibilances sont des bruits continus (sifflements), les craquements des bruits discontinus.</p>` }
      ] },
    { id: "rp_c4", origine: "invente", src: ["rp_wallace", "rp_cr2702", "rp_cr1911"], patient: "rp_p4", titre: "Bébé de 6 mois ex-grand prématuré : bronchiolite (cas inventé de Wallace)",
      fiche: "Bébé de 6 mois, hospitalisé la veille au soir pour bronchiolite ; vous le découvrez le lendemain. Anamnèse, bilans, objectifs, traitement.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis les questions à poser, dans l'ordre.", items: [
          { q: "Poids et courbe ?", r: "6 kg, courbe de poids normale.", p: 1 },
          { q: "1er épisode ? 1ers symptômes ?", r: "1er épisode ; rhinopharyngite (VRS) il y a 3 jours.", p: 1 },
          { q: "Médication ?", r: "Bronchodilatateurs et antipyrétiques.", p: 1 },
          { q: "Vaccins ?", r: "À jour.", p: 2 },
          { q: "Examens complémentaires ?", r: "Aucun.", p: 2 },
          { q: "Naissance : terme, surfactant, voie ?", r: "Né à 26 SA, surfacté pendant 4 semaines, par césarienne : grand prématuré = facteur de forme grave et d'hospitalisation.", p: 1 },
          { q: "Antécédents personnels et familiaux ?", r: "Rien de personnel ; mère asthmatique (atopie familiale).", p: 1 },
          { q: "Entourage : parents fumeurs ? fratrie ? animaux ? garde ?", r: "2 parents fumeurs (à préciser : intérieur ou extérieur, changement d'habits, lavage des mains). Pas de frère ni sœur. 2 gros chiens. En ville. Crèche. Pas d'humidificateur. Bonne hygiène.", p: 1 },
          { q: "Sommeil ?", r: "Co-dodo, sur le dos. Chambre à 20 °C. Perturbé depuis 3 jours : réveils nocturnes, toux qui le réveille, parfois vomissements, sensation qu'il a du mal à prendre l'air. Peluches, tapis.", p: 1 },
          { q: "Alimentation ?", r: "Biberon. Diminution de 50 % sur 3 repas consécutifs (critère d'hospitalisation). RGO ? à préciser.", p: 1 },
          { q: "Quel est le niveau d'études des parents ?", r: "Sans intérêt direct.", p: 3 }
        ] },
        { type: "bilans", titre: "Bilans", consigne: "Choisis les bilans à réaliser, dans l'ordre.", ordre: ["Constat d'attitude", "Paramètres vitaux", "Signes de lutte et de tirage", "Test de Rosenthal", "Auscultation après désencombrement des VAS", "Toux", "Score de Wang", "Bilan trophi-cutané (fontanelle)"], items: [
          { b: "Constat d'attitude", r: "Allongé dans un lit en proclive 30°, éveillé, O2 2 L/min, monitoring, oxymètre de pouls sur l'hallux, pas de perfusion.", ok: true },
          { b: "Paramètres vitaux", r: "FC 180 bpm (à la limite du seuil de gravité de 180), FR 28/min (sous 30 : bradypnée, seuil de gravité du CR 27/02/25 ; à recompter sur 1 minute), pas de pause ni d'apnée, T° 38 °C, SpO2 98 % sous 2 L/min.", ok: true },
          { b: "Signes de lutte et de tirage", r: "Signe de tirage, ligne de lutte intercostale ; battement des ailes du nez absent ; pas de balancement thoraco-abdominal.", ok: true },
          { b: "Test de Rosenthal", r: "Positif : reprend l'air par la bouche au bout de 14 respirations nasales, donc il faut laver le nez.", ok: true, tests: ["rp_rosenthal"] },
          { b: "Auscultation après désencombrement des VAS", r: "Craquements bilatéraux (typiques d'un encombrement des VAI).", ok: true },
          { b: "Toux", r: "Grasse et productive : phase sécrétoire.", ok: true },
          { b: "Score de Wang", r: "6/12 : forme modérée (4 à 8) : kiné possible.", ok: true, tests: ["rp_wang"] },
          { b: "Bilan trophi-cutané (fontanelle)", r: "Signe de déshydratation de la fontanelle : signe de gravité à transmettre (réhydratation).", ok: true },
          { b: "Test du miroir (pas de buée à gauche)", r: "Fait dans le cas (miroir positif : pas de buée à gauche = narine gauche obstruée) mais ce test n'est décrit dans aucun cours : le Rosenthal suffit.", ok: false },
          { b: "Prise de TA", r: "Pas de TA chez le nourrisson hospitalisé.", ok: false }
        ] },
        { type: "choix", titre: "Objectifs", consigne: "Coche les objectifs justes.", src: "rp_wallace", items: [
          { t: "Éducation des parents aux soins de type mouchage", ok: true },
          { t: "Position proclive 30°", ok: true },
          { t: "Rassurer les parents", ok: true },
          { t: "Désencombrer les VAS puis les VAI (Wang modéré, toux grasse)", ok: true },
          { t: "Surveiller et signaler FC limite, FR basse, fontanelle déprimée et alimentation à moins de 50 %", ok: true },
          { t: "Conseils : arrêt du tabac à l'intérieur, veste dédiée, mains lavées ; couchage sur le dos dans son lit plutôt que co-dodo ; moins de peluches et de tapis", ok: true },
          { t: "Conseiller un humidificateur dans la chambre", ok: false, why: "Déconseillé (prolifération des bactéries)." }
        ] },
        { type: "choix", titre: "Traitement", consigne: "Coche les gestes justes.", src: "rp_cr2702", items: [
          { t: "Lavage de nez au NaCl 0,9 % réchauffé, puis DRR", ok: true },
          { t: "ELPr : aller progressivement dans le VRE à l'expiration avec la main thoracique, puis relâcher les 2 mains et laisser l'enfant récupérer", ok: true },
          { t: "Toux provoquée au-dessus de la fourchette sternale", ok: true },
          { t: "Réausculter et reprendre les paramètres en fin de séance", ok: true },
          { t: "Clapping", ok: false, why: "Contre-indiqué (HAS 2019)." },
          { t: "Donner un mucolytique avant la séance", ok: false, why: "Mucolytiques contre-indiqués dans la bronchiolite." }
        ] },
        { type: "lecture", titre: "Relecture du cas inventé", html: `<p>Le cas reprend bien les CR 27/02/25 et 20/03/25. Points à corriger ou discuter :</p><ul><li><b>FR 28/min</b> : sous 30, c'est une bradypnée, signe de gravité selon le CR 27/02/25 ; avec un Wang à 6, une FR plutôt élevée serait plus logique. Recompte sur 1 minute.</li><li><b>FC 180</b> : c'est exactement le seuil de gravité (&gt; 180). À surveiller.</li><li><b>Fontanelle déshydratée</b> et alimentation à -50 % sur 3 repas : signes de gravité, le médecin doit être prévenu (réhydratation) : la kiné bronchique passe après.</li><li><b>26 SA</b> : grand prématuré ; le cours situe le début de la production du surfactant vers 27 SA.</li><li>Le « miroir » (test de Glatzel) n'est pas au cours.</li><li>Fautes de frappe : « humiliateur » = humidificateur ; « relâche les 2 mois » = les 2 mains.</li><li>À citer : HAS 2019 (1er épisode avant 12 mois). Avec une grande prématurité, la kiné « peut se discuter ».</li></ul>` }
      ] },
    { id: "rp_c5", origine: "cours", src: ["rp_rapport"], patient: "rp_p5", titre: "L.C., 8 mois : bronchiolite légère au cabinet (rapport de stage)",
      fiche: "Nourrisson de 8 mois amené au cabinet par sa mère avec une prescription de kiné pour bronchiolite. Anamnèse, bilans, objectifs et traitement.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis les questions à poser, dans l'ordre.", items: [
          { q: "Âge, âge corrigé ?", r: "8 mois et 15 jours ; né à 36 semaines : âge corrigé 7 mois et 18 jours.", p: 1 },
          { q: "Poids et taille ?", r: "Naissance 3,40 kg, 46 cm ; maintenant 7,56 kg, 67 cm.", p: 1 },
          { q: "Histoire de la pathologie ?", r: "Malade depuis 2 jours ; vu par le médecin traitant le 12/11 qui a prescrit kiné et médicaments ; RDV pris le lendemain.", p: 1 },
          { q: "Médication ?", r: "Josacine 250 mg/5 mL (antibiotique) 1 fois par jour ; Doliprane 100 mg toutes les 6 h si besoin.", p: 1 },
          { q: "Bronchiolites antérieures ?", r: "Jamais (frères et sœurs non plus).", p: 1 },
          { q: "Allergies, asthme, eczéma ?", r: "Aucun des trois.", p: 2 },
          { q: "Animaux ?", r: "Un chien.", p: 2 },
          { q: "Autres antécédents ?", r: "Prématuré.", p: 1 },
          { q: "Entourage, garde ?", r: "2 sœurs (8 et 6 ans), un frère (3 ans) ; la maman le garde.", p: 2 },
          { q: "Parents fumeurs ?", r: "Non.", p: 1 },
          { q: "Alimentation, hydratation ?", r: "Pas diminuée mais fractionnée (il régurgite beaucoup) ; biberon et aliments moulus.", p: 1 },
          { q: "RGO ? Lit à 30° ?", r: "RGO oui ; lit à 30° non. Reflux mousseux et blancs plusieurs fois par jour ; selles inchangées.", p: 1 },
          { q: "Sommeil ?", r: "Se réveille la nuit pour tousser ; chambre chauffée à 22 °C avec tapis, peluches et tentures.", p: 1 },
          { q: "Toux, expectorations ?", r: "Toux grasse depuis plusieurs jours avec parfois des reflux ; crache parfois en toussant mais avale.", p: 1 },
          { q: "Fièvre ?", r: "39 °C ce matin, 40 °C les autres jours.", p: 1 },
          { q: "Moins réactif ?", r: "Non, mais supporte mal d'être malade.", p: 1 },
          { q: "Mouchage par les parents ?", r: "Fait à 7 h par le père ; la mère n'ose pas.", p: 1 },
          { q: "Aérosol avant la séance ?", r: "Non, aucun prescrit.", p: 2 }
        ] },
        { type: "bilans", titre: "Bilans", consigne: "Choisis les bilans à réaliser, dans l'ordre.", ordre: ["Constat d'attitude", "Bilan trophi-cutané", "Paramètres vitaux", "Score de Wang modifié", "Auscultation et test de Rosenthal", "Toux et expectorations"], items: [
          { b: "Constat d'attitude", r: "Arrive avec sa mère, dans un maxi-cosy couvert ; dort, respire par le nez, pas de bruit audible, faciès apaisé.", ok: true },
          { b: "Bilan trophi-cutané", r: "Normo-coloré, joues rouges (poussée dentaire), pas de sudation, lèvres normo-colorées, nez un peu sec et sale, pas d'eczéma, pas de détresse respiratoire.", ok: true },
          { b: "Paramètres vitaux", r: "SpO2 98 % ; FC 140 bpm ; FR 52/min (norme 30-40) ; T° 39 °C (40 °C les jours précédents).", ok: true },
          { b: "Score de Wang modifié", r: "4/12 : FR 2 (45-60), sibilants 0, crépitants 1 (discrets), signes de lutte 0, état général 1 (facile à consoler). Le rapport conclut « légère » ; avec les seuils du cours, 4 = modérée.", ok: true, tests: ["rp_wang"] },
          { b: "Auscultation et test de Rosenthal", r: "Crépitements, zone plus encombrée à gauche ; encombrement léger des VAS, Rosenthal négatif ; test de Gudin positif (non expliqué).", ok: true, tests: ["rp_rosenthal"] },
          { b: "Toux et expectorations", r: "Toux grasse diurne et nocturne, se réveille pour tousser ; expectore peu, régurgite à force de tousser.", ok: true },
          { b: "Testing musculaire", r: "Sans objet.", ok: false }
        ] },
        { type: "choix", titre: "Objectifs", consigne: "Coche les objectifs du rapport.", src: "rp_rapport", items: [
          { t: "Rassurer la maman", ok: true },
          { t: "Désencombrer les voies aériennes inférieures", ok: true },
          { t: "Désencombrer les voies aériennes supérieures", ok: true },
          { t: "Éduquer les parents", ok: true },
          { t: "Mettre le bébé sous oxygène", ok: false, why: "SpO2 98 % en air ambiant : pas d'indication." }
        ] },
        { type: "choix", titre: "Traitement", consigne: "Coche les moyens du rapport (et ce qui manque).", src: "rp_rapport", items: [
          { t: "Expliquer le mouchage, le déroulement de la séance ; prévenir que le bébé va pleurer (pas de douleur)", ok: true },
          { t: "Faire le lavage de nez avec la maman", ok: true },
          { t: "Drainage autogène assisté couché dorsal, assis et sur ballon de Bobath ; AFE ; toux provoquée par réflexe", ok: true },
          { t: "Lavage au sérum physiologique, désobstruction rhinopharyngée rétrograde ou antérograde ; vérifier que le nez reste humidifié", ok: true },
          { t: "Éducation : mouchage, lit à 30° contre le RGO, signes de détresse, poids et alimentation, désinfection", ok: true },
          { t: "Conseiller de baisser la chambre à 18-20 °C et d'enlever tapis et peluches", ok: true },
          { t: "Pressions abdominales fortes pendant l'ELPr", ok: false, why: "RGO : la main abdominale reste un contre-appui sans pression." }
        ] },
        { type: "lecture", titre: "Relecture", html: `<p>Bon exemple de rapport de cabinet. À discuter avec les profs : un antibiotique (Josacine) pour une bronchiolite virale (sans intérêt sauf surinfection) ; fièvre 39-40 °C pour une forme dite « légère » ; Wang 4 classé légère alors que le cours met 4 en modérée ; FR 52 au-dessus de la norme 30-40 à surveiller. Le rapport ne donne ni red flags chiffrés ni durée de séance.</p>` }
      ] }
  ];

  // =====================================================================
  // FICHE 2 : PÉDIATRIE RESPIRATOIRE
  // =====================================================================
  const ped = {
    id: "rp_pedia_f", cell: "respi", titre: "Kiné respiratoire pédiatrique : particularités, normes, bilan, asthme, muco, pneumonie, corps étranger, aérosols", court: "Pédiatrie respi",
    statut: "Contenu repris surtout du cours RESPI PEDIA, complété par la synthèse MSP bronchiolite, la fiche techniques de KR, les synthèses mucoviscidose et médicaments, les CR 2024-25 et 2026-27. Le tableau de TA par âge, la cotation du Silverman, l'encadré des signes de détresse majeure et les degrés ANDEM sont des images absentes des notes. Corps étranger et aérosols chez le petit enfant : peu de cours, compléments hors cours signalés. La mucoviscidose de l'adulte est traitée dans une autre fiche.",
    resume: [
      "L'enfant n'est pas un adulte en miniature : résistances nasales très élevées (1/3 des résistances totales ; 50 % à l'inspiration contre 20 % chez l'adulte), respiration nasale quasi obligatoire, larynx haut (C3 qui descend vers C5-C6), épiglotte haute.",
      "Côtes horizontales, diaphragme plat, plus de glandes à mucus, moins de pores de Kohn (atélectasies), cage thoracique plus compliante que le poumon (attention aux pressions : collapsus), immunité complète vers 6 ans.",
      "Surfactant : production dès 27 SA, maximale vers 35 SA ; naissance normale 37-40 SA ; prématuré : surfactant injecté, PEEP.",
      "Normes : FR 40-60 (0-3 mois), 30-40 (3 mois-2 ans), 20-30 (2-10 ans), 12-20 (> 10 ans). FC 120-160 (< 1 mois), 100-160 (1 mois-2 ans), 70-140 (2-12 ans), 60-100 (adulte).",
      "Signes de détresse : polypnée, tirages, entonnoir xiphoïdien, balancement thoraco-abdominal (spécifique à l'enfant), battement des ailes du nez, geignement, balancement de la tête, wheezing, cyanose (signe tardif). Score de Silverman.",
      "Douleur : avant 4 ans difficile à exprimer ; échelle des visages dès 4 ans ; EVA dès 6 ans. EFR possibles dès 5-7 ans.",
      "Techniques selon l'âge : nourrisson = ELPr, toux provoquée, DRR, mouchage ; EDIC dès 3-4 ans ; drainage autogène dès 5-6 ans ; ELTGOL dès 7-8 ans (RESPI PEDIA) mais contre-indiqué avant 12 ans selon la fiche techniques de KR.",
      "Asthme de l'enfant : inflammation chronique réversible, TVO variable et réversible ; toux nocturne vers 2-3 h ; sévérité par score PRAM ; gravité : polypnée > 60, SpO2 < 92 %, impossibilité de parler, cyanose, troubles de conscience ; kiné = gestion de la crise par respiration abdominale, éducation, réentraînement.",
      "Mucoviscidose (enfant) : autosomique récessive, CFTR ; dépistage au talon J3, test à la sueur ; 1-2 h de kiné par jour (5-6 h en surinfection) ; drainage autogène assisté (ne pas remonter d'un coup), PEP, flutter, douche nasale ; sport 3x/semaine.",
      "Pneumonie de l'enfant : virale (soutien) ou bactérienne (pneumocoque, antibiotiques) ; OMS : polypnée + tirage sous-costal ; ELTGOL si l'enfant collabore, ELPr sinon, rinçage de nez.",
      "Corps étranger : toux aiguë sans contexte infectieux = y penser ; atélectasie « active » ; jamais de désencombrement pour l'extraire (complément hors cours : endoscopie).",
      "Aérosols : chambre d'inhalation pour enfants et adultes (moins de dépôt oro-pharyngé), nettoyée au détergent sans rinçage à l'eau, tenue horizontale ; nébuliseur 8 L/min, 5-10 min, respiration buccale."
    ],
    pro: [
      { id: "anat", titre: "1. Particularités anatomiques et physiologiques de l'enfant", src: ["rp_pedia", "rp_msbronch", "rp_cr2003"], html:
        `<p><b>Nez et voies aériennes supérieures (RESPI PEDIA)</b> :</p>
        <ul><li>structures endo-nasales présentes mais en développement ; les <b>cils</b> des muqueuses nasales (barrière contre les bactéries) sont moins nombreux : une barrière en moins ;</li>
        <li><b>cornets plus volumineux</b> : résistances nasales « vraiment beaucoup plus importantes » que chez l'adulte ;</li>
        <li><b>larynx plus haut</b> : en <b>C3</b>, il descend progressivement vers <b>C5-C6</b> ;</li>
        <li><b>épiglotte plus haute</b> (horizontale chez l'enfant, verticale chez l'adulte selon la synthèse) : respiration nasale pendant les <b>6 premiers mois</b> et possibilité de <b>respirer et déglutir en même temps</b> pendant les premiers mois ;</li>
        <li>conséquence : une inflammation nasale même mineure (un rhume) peut créer une <b>obstruction majeure</b>. Langue plus volumineuse (synthèse).</li></ul>
        <p><b>Résistances et compliance</b> :</p>
        <ul><li>les résistances nasales = <b>1/3 des résistances totales</b> ; <b>50 % de la résistance à l'inspiration est dans le nez</b>, contre <b>20 %</b> chez l'adulte ;</li>
        <li>la <b>compliance de la cage thoracique est supérieure à celle des poumons</b> : une pression sur le thorax se répercute directement sur le poumon. <b>Attention : en comprimant la cage thoracique on peut créer des collapsus</b> ;</li>
        <li>la compliance de la cage thoracique diminue avec la croissance pour devenir égale à celle de l'adulte ; la compliance pulmonaire globale est inférieure chez l'enfant ;</li>
        <li>conduits aériens distaux plus étroits ; plus grande compliance des bronches, d'où un risque de <b>collapsus expiratoire</b> (synthèse).</li></ul>
        <p><b>Thorax et muscles</b> : côtes pratiquement <b>horizontales</b>, diaphragme presque <b>à plat</b> : travail du diaphragme moins favorable, plus vite fatigable. Tonus musculaire faible : c'est surtout le <b>diaphragme</b> qui respire, mais il est moins efficace. Le RESPI PEDIA écrit que les fibres de type II (rapidement fatigables) dominent sur les fibres de type I chez le nourrisson.</p>
        <p><b>Bronches et alvéoles</b> : plus de <b>glandes muqueuses</b> (plus de mucus, encombrement rapide) ; <b>pores de Kohn</b> (communications inter-alvéolaires qui laissent passer l'air d'une alvéole obstruée vers une alvéole libre) moins nombreux : plus d'<b>atélectasies</b> lors de l'encombrement.</p>
        <p><b>Immunité</b> : plus faible à la naissance, à peu près complète vers <b>6 ans</b> : les pathologies se développent plus vite.</p>
        <p><b>Développement</b> : système respiratoire en développement constant jusqu'à <b>3 ans</b> (synthèse). Respiration nasale quasi obligatoire jusqu'à 4 mois (synthèse) ; à 6 mois un bébé peut commencer à respirer par la bouche (CR 20/03/25).</p>
        <p>Résumé de la synthèse : <b>compliance thoracique, nombre de glandes à mucus et respiration nasale</b> sont des caractéristiques propres aux enfants, avec l'<b>immaturité immunitaire</b>.</p>` },
      { id: "surf", titre: "2. Surfactant, prématurité et âge corrigé", src: ["rp_pedia", "rp_crombin", "rp_lise0404", "rp_cr1211", "rp_rapport"], html:
        `<p><b>Surfactant (RESPI PEDIA)</b> : sa production commence autour de la <b>27e semaine d'aménorrhée (SA)</b> et devient maximale vers la <b>35e SA</b> ; un enfant naît normalement entre la <b>37e et la 40e semaine</b>. Plus la prématurité est grande, plus le risque de pathologie respiratoire est grand.</p>
        <p><b>Traitement préventif</b> : injection de surfactant directement à l'enfant (naissance soudaine) ou in utero en cas de menace d'accouchement prématuré.</p>
        <p><b>Cours de physiologie (Crombin)</b> : action optimale du surfactant à partir de la <b>28e semaine</b> ; avant, on utilise la <b>PEEP</b> pour jouer le rôle du surfactant et garder les alvéoles ouvertes. Le surfactant réduit la tension superficielle (augmente la compliance), stabilise les petites alvéoles, diminue l'effort respiratoire et garde les alvéoles sèches.</p>
        <p><b>CR 12/11/2026</b> : le surfactant, produit par les <b>pneumocytes de type 2</b>, crée une tension de surface qui empêche les alvéoles de s'effondrer. <b>Notes 04/04</b> : il agit « comme une goutte d'eau » et évite les atélectasies, les petites voies aériennes ayant plus tendance à se collaber.</p>
        <p><b>À l'anamnèse</b> : prématuré ? à terme ? <b>surfacté</b> ? temps en néonatologie ? poids de naissance (&lt; 2,5 kg = facteur de risque) ? Calculer l'<b>âge corrigé</b> : âge réel moins les semaines de prématurité (exemple du rapport : né à 36 semaines, l'âge corrigé retire environ 1 mois).</p>
        ${W("Les notes 04/04 disent que le surfactant « termine de se produire à 27 SA » : c'est faux, la production COMMENCE vers 27 SA et est maximale vers 35 SA (RESPI PEDIA).")}` },
      { id: "normes", titre: "3. Normes par âge : FR, FC, SpO2, température, volumes", src: ["rp_pedia", "rp_cr2702", "rp_lise0404", "rp_msbronch"], html:
        `<p><b>Fréquence cardiaque (RESPI PEDIA)</b> :</p>${T([["Nouveau-né (&lt; 1 mois)", "120 à 160 bpm"], ["Nourrisson (1 mois à 2 ans)", "100 à 160 bpm"], ["Enfant (2 à 12 ans)", "70 à 140 bpm"], ["Adulte (&gt; 14 ans)", "60 à 100 bpm"]], ["Âge", "FC"])}
        <p><b>Fréquence respiratoire (RESPI PEDIA)</b> :</p>${T([["Nouveau-né à 3 mois", "40 à 60 cpm"], ["3 mois à 2 ans", "30 à 40 cpm"], ["2 à 10 ans", "20 à 30 cpm"], ["&gt; 10 ans à adulte", "12 à 20 cpm"]], ["Âge", "FR"])}
        <p><b>Seuils de gravité du nourrisson (CR 27/02/25)</b> : FC &gt; 180 ou &lt; 80 ; FR &gt; 60 ou &lt; 30 (sur 1 minute) ; pauses / apnées ; T° normale 36,5-37,5 °C ; SpO2 &gt; 92 % selon la FiO2.</p>
        <p><b>Saturation</b> : RESPI PEDIA, bilan : « à partir de 92 % supplémentation en oxygène » (à comprendre : O2 si SpO2 ≤ 92 %) ; asthme : gravité si SpO2 &lt; 92 % ; bronchiolite : voir la fiche Bronchiolite ; score de Beck : SpO2 normale &gt; 95 %, FC normale &lt; 140.</p>
        <p><b>Tension artérielle</b> : tableau par âge présent dans le cours mais <b>non extrait</b> (image). Chez le nourrisson hospitalisé, on ne prend pas la TA.</p>
        <p><b>Température (RESPI PEDIA)</b> : fièvre si <b>&gt; 38 °C</b> ; fièvre <b>aiguë</b> si elle évolue depuis moins de <b>5 jours chez le nourrisson</b> et <b>1 semaine chez l'enfant</b>. Une température élevée peut augmenter la FR et la FC sans pathologie respiratoire. Le cours écrit aussi « 38,5 °C le matin et 37,8 °C le soir » (probable erreur de recopie : normale 36,5-37,5 °C).</p>
        <p><b>Volumes rapportés au poids (RESPI PEDIA)</b> :</p>${T([["CPT", "60 à 65 mL/kg"], ["Volume courant (Vt)", "6 à 8 mL/kg"], ["CRF", "28 mL/kg"], ["Ventilation alvéolaire", "100 à 150 mL/kg/min"]], ["Volume", "Valeur"])}
        <p>Exemple de calcul : bébé de 6 kg, Vt = 6 × 6 à 6 × 8 = <b>36 à 48 mL</b>.</p>` },
      { id: "anam", titre: "4. Anamnèse pédiatrique générale", src: ["rp_pedia", "rp_cr1303", "rp_trame"], html:
        `${T([
          ["Naissance", "Prématuré (surfacté ?) ou à terme ? Poids de naissance ? En cas de pathologie chronique, le diagnostic a-t-il été posé rapidement ?"],
          ["Environnement", "Parents fumeurs (dehors ou à la maison ; se laver les mains, changer de vêtements) ? Animaux ? Frères et sœurs (source d'infection) ? Humidité de la maison ? Mode de garde (crèche, école = foyer d'infection) ? Hygiène ?"],
          ["Sommeil", "Lit en proclive 30° ? Sommeil correct, changé, perturbé ? Nuit complète ? Ronflement ? Température de la chambre ? Toux la nuit, réveils ? Peluches ? Humidificateur ?"],
          ["Alimentation", "Allaitement, biberon, mixte, diversification ? Perte d'appétit, diminution des apports ? Prise ou perte de poids ?"],
          ["Antécédents", "1er épisode ? Kiné antérieure ? Antécédents médicaux et chirurgicaux ? RGO ?"],
          ["État général", "Apathique ? Éveillé ? Plus agité ?"],
          ["Examens médicaux", "« Radio que si suspicion de pneumonie »"],
          ["Médication", "Aiguë et chronique ; prise correcte ? (aérosols, chambre d'inhalation)"],
          ["Activité physique (grand enfant)", "Sport pratiqué ? (impact sur le désencombrement, la confiance en soi)"],
          ["Hygiène de vie (muco)", "Lavage du nez (2 fois par jour minimum), hydratation (axe majeur), lavage quotidien de l'enfant"]
        ], ["Thème", "Questions"])}` },
      { id: "bilan", titre: "5. Bilan de l'enfant : état de veille, détresse, douleur, paramètres, respiratoire", src: ["rp_pedia", "rp_cr1911", "rp_lise0404", "rp_trame", "rp_cr1303", "rp_hors"], html:
        `<p><b>Constat d'attitude / état de veille</b> : éveillé, endormi, en pleurs, agité ou hyper-réactif ? Asthénie, troubles de la conscience, agitation ? Comment l'enfant arrive-t-il (dans les bras, à pied) ? Somnolent ou agité, visage fatigué (cernes, yeux rouges) ? Nez propre ?</p>
        <p><b>Signes de détresse respiratoire (RESPI PEDIA)</b> :</p>
        ${T([
          ["Fréquence respiratoire trop élevée", "Premier signe à compter"],
          ["Cyanose (bouche, ongles)", "Signe <b>tardif et inconstant</b>"],
          ["Tirage sus- et sous-sternal (et intercostal)", "Mise en jeu des muscles accessoires"],
          ["Entonnoir xiphoïdien", "Creux sous l'appendice xiphoïde"],
          ["Balancement thoraco-abdominal", "<b>Spécifique à l'enfant</b> (respiration paradoxale)"],
          ["Battement des ailes du nez", "Diminue les résistances nasales, offre plus de surface"],
          ["Geignement (grunting)", "L'enfant ferme sa glotte un peu plus tôt à l'expiration : pression positive dans les voies aériennes qui évite le collapsus"],
          ["Balancement de la tête", "Chez l'enfant plus grand qui utilise ses inspirateurs accessoires"],
          ["Wheezing", "Sifflement expiratoire = obstruction des voies aériennes"],
          ["Hippocratisme digital", "Bombement de l'extrémité des ongles : peut signer une pathologie respiratoire chronique"]
        ], ["Signe", "Signification"])}
        <p>L'encadré « signes de détresse respiratoire majeure » du cours est une image non extraite. Autre signe vu en cours : descente du cartilage thyroïdien à l'inspiration = fort débit inspiratoire = détresse.</p>
        <p><b>Score de Silverman</b> : tirage, balancement thoraco-abdominal, battement des ailes du nez, entonnoir xiphoïdien, geignement respiratoire ; plus le score est élevé, plus l'enfant est en détresse.</p>
        ${HC("cotation usuelle du Silverman : chaque item 0, 1 ou 2, total sur 10. Balancement : 0 respiration synchrone, 1 thorax immobile, 2 respiration paradoxale ; tirage intercostal : 0 absent, 1 modéré, 2 intense ; entonnoir xiphoïdien : 0 absent, 1 modéré, 2 intense ; battement des ailes du nez : 0 absent, 1 modéré, 2 intense ; geignement : 0 absent, 1 audible au stéthoscope, 2 audible à l'oreille. 0 = pas de détresse ; plus on monte, plus la détresse est grave.")}
        <p><b>Douleur</b> : demander aux parents s'ils pensent que l'enfant a mal quand il tousse. <b>Avant 4 ans</b>, l'enfant exprime mal sa douleur ; <b>dès 4 ans : échelle des visages</b> ; <b>dès 6 ans : EVA</b>.</p>
        <p><b>Paramètres vitaux</b> : FR, SpO2, FC, TA, température (la fièvre augmente FR et FC).</p>
        <p><b>Respiratoire</b> :</p>
        <ul><li><b>Toux</b> : grasse, sèche, quinteuse ? diurne ou nocturne (réveille l'enfant) ? provoque des vomissements ?</li>
        <li><b>VAS</b> : on entend parfois que l'enfant respire mal ou que le nez est encombré ; s'il garde sa tétine et prend bien ses biberons, il respire bien par le nez ; <b>Rosenthal</b>.</li>
        <li><b>VAI</b> : auscultation (enfant déshabillé, au calme, bases vers sommets, lobe moyen droit ; synthèse « Auscultation MSP » pour le grand enfant, l'ado et l'adulte).</li>
        <li><b>Dyspnée</b> : sensation subjective, évaluée par ENS ou EVA si l'enfant communique.</li>
        <li>Tirages, <b>EFR</b> (dès 5-7 ans, comme l'adulte), <b>test d'effort</b>, scores de gravité (Silverman, Wang, PRAM).</li>
        <li>Débit expiratoire de pointe (peak flow), ampliation thoracique (pas si chirurgie thoracique récente).</li></ul>
        <p><b>Morpho-statique et musculaire</b> : cyphose, enroulement des épaules, myalgies, contractures, arthralgies, déformations thoraciques. Musculaire : testing quadriceps et triceps brachial ; endurance par le <b>test de la chaise</b> (muco).</p>
        <p><b>Trophique</b> : fontanelle (nourrisson), marbrures, cyanose, amyotrophie, œdème, hippocratisme digital.</p>` },
      { id: "objectifs", titre: "6. Objectifs généraux en pédiatrie", src: ["rp_pedia"], html:
        `<p>Les objectifs découlent de l'anamnèse, des bilans et de la pathologie (RESPI PEDIA) :</p>
        <ul><li><b>Rassurer ++</b> les parents et l'enfant ;</li>
        <li><b>Éducation thérapeutique</b> du patient et des parents (mouchage, aérosols, environnement, compliance au traitement) ;</li>
        <li><b>Désencombrement des voies aériennes supérieures et inférieures</b> ;</li>
        <li><b>Réentraînement à l'effort</b> (asthme, muco) ;</li>
        <li><b>Travail musculaire et articulaire</b> (prévention des troubles musculo-squelettiques, cyphose).</li></ul>
        <p>On les classe en court terme (désencombrer, surveiller, rassurer), moyen terme (éduquer, autonomiser l'enfant dans ses techniques) et long terme (prévenir les récidives et les complications, activité physique régulière, qualité de vie).</p>` },
      { id: "tech", titre: "7. Techniques adaptées à l'âge", src: ["rp_pedia", "rp_techkr", "rp_cr1911", "rp_scaillet", "rp_muco", "rp_kinepra", "rp_bilancr"], html:
        `${T([
          ["Nourrisson (≈ 0-2 ans), non collaborant", "ELPr, toux provoquée (TP), DRR, mouchage / rinçage du nez, AFE ; drainage autogène assisté (bouncing sur ballon)", "RESPI PEDIA, CR 2026-27, rapport"],
          ["À partir de 3-4 ans", "EDIC (exercice à débit inspiratoire contrôlé)", "RESPI PEDIA"],
          ["À partir de 5-6 ans, autonome", "Drainage autogène (DA)", "Fiche techniques de KR"],
          ["À partir de 5-7 ans", "EFR et manœuvres forcées comme l'adulte", "RESPI PEDIA (asthme)"],
          ["À partir de 7-8 ans", "ELTGOL selon le RESPI PEDIA ; la fiche techniques de KR le contre-indique chez l'enfant de moins de 12 ans", "Contradiction"],
          ["Enfant collaborant / non collaborant (pneumonie)", "ELTGOL si collaborant ; ELPr si non collaborant", "RESPI PEDIA"]
        ], ["Âge", "Techniques", "Source"])}
        <p><b>ELPr</b> : validée en pédiatrie, « consensus inter-Condorcet » ; nouveau-né et nourrisson ; proclive 30°, main abdominale en contre-appui sans pression (surtout si RGO), main thoracique qui descend vers le VR / VRE en 3 à 5 cycles, puis relâcher (détails dans la fiche Bronchiolite).</p>
        <p><b>Toux provoquée</b> : chez l'enfant, stimulation des récepteurs tussigènes au niveau de la <b>fourchette sternale</b> (bilan cardio-respi) ; jusqu'à ≈ 2 ans ; contre-indiquée en cas d'atrésie de l'œsophage.</p>
        <p><b>Drainage autogène</b> : indiqué dès 5-6 ans chez l'enfant autonome avec hypersécrétion (muco, affection obstructive, encombrement bronchiolaire, patients broncho-spastiques) ; contre-indiqué si dyspnée ou manque de coopération. Chez le petit muco : <b>DA assisté</b> sur ballon avec des mouvements de haut en bas (bouncing). Il minimise les épisodes de toux et les effets du RGO, contrairement aux postures en déclive.</p>
        <p><b>ACBT</b> : contre-indiqué en cas de manque de coopération (donc pas chez le petit enfant).</p>
        <p><b>Drainage postural</b> : effets secondaires : <b>RGO chez le bébé muco</b>, hypoxie chez le muco, arythmies, hausse de la pression intracrânienne ; contre-indiqué dans la bronchiolite (HAS 2019).</p>
        <p><b>Aspiration chez l'enfant</b> : surveiller pendant le geste les <b>bradycardies, surtout en pédiatrie</b>, la SpO2 et la coloration ; retirer si réflexe d'arrière-gorge.</p>
        <p><b>Toux dirigée</b> (grand enfant) : à haut volume (initiée à la CPT) pour les sécrétions proximales, à bas volume (sous la CRF) pour une action plus périphérique ; en secousse unique ou saccades ; attention au bronchospasme. « La toux est la séquence finale de toute séance de désencombrement. »</p>` }
    ]
  };

  ped.pro.push(
    { id: "asthme", titre: "8. Asthme de l'enfant et bronchite asthmatiforme", src: ["rp_pedia", "rp_resume", "rp_patho", "rp_hors"], html:
      `<p><b>Définition (RESPI PEDIA)</b> : atteinte <b>inflammatoire chronique réversible</b> des bronches, avec des symptômes <b>paroxystiques</b> de brève durée (quelques heures), par accès, avec des <b>sibilants</b>, plus souvent <b>nocturnes</b> que diurnes, qui cèdent seuls ou sous traitement. La mise en évidence d'un <b>trouble ventilatoire obstructif (TVO)</b> à un moment ou un autre est <b>indispensable au diagnostic</b> ; ce TVO est <b>variable et réversible</b>.</p>
      <p><b>Symptômes</b> : dyspnée ; <b>toux nocturne</b>, souvent à la même heure (<b>vers 2-3 h</b> ou au réveil), parfois avec gêne et sifflements, qui disparaît souvent seule en une demi-heure à une heure ; respiration sifflante à l'expiration ; <b>exacerbation</b> = crise qui dure plusieurs heures voire jours malgré la prise répétée du traitement de crise.</p>
      <p><b>Étiologie</b> :</p>
      ${T([["Facteurs de l'hôte", "Sexe, génotype, antécédents familiaux, groupe ethnique", "Susceptibilité individuelle, RGO, facteurs anténataux et périnataux"], ["Facteurs environnementaux", "Allergènes, tabagisme, irritants et polluants, facteurs socio-économiques", "Stress, changements climatiques, allergènes, tabac, irritants et polluants, activité sportive"]], ["", "Associés au développement", "Associés à l'aggravation"])}
      <p><b>Diagnostic</b> : interrogatoire (symptômes, antécédents familiaux d'asthme et d'allergie, facteurs déclenchants, aggravants et favorisants) ; radio pulmonaire (distension thoracique, foyer infectieux associé) ; <b>EFR</b>. Cours PATHO (adulte) : VEMS réversible après bronchodilatateur de 12 % et 200 mL.</p>
      <p><b>Sévérité</b> : <b>score PRAM</b> et degré de sévérité de l'<b>ANDEM</b> (cités sans détail).</p>
      ${HC("grille du PRAM (Pediatric Respiratory Assessment Measure) : tirage sus-sternal 0 ou 2 ; contraction des scalènes 0 ou 2 ; sibilances 0 à 3 ; entrée d'air 0 à 3 ; SpO2 ≥ 95 % = 0, 92-94 % = 1, &lt; 92 % = 2 ; total sur 12 : 0-3 léger, 4-7 modéré, 8-12 sévère.")}
      <p><b>Signes de gravité</b> : polypnée &gt; 60/min ; <b>SpO2 &lt; 92 %</b> ; bradypnée ; irrégularité du rythme respiratoire ; signes de lutte intenses ; <b>impossibilité de parler</b> ; cyanose, pâleur, sueurs ; troubles de la conscience.</p>
      <p><b>Objectifs et plan</b> :</p>
      <ul><li>rassurer ; éducation thérapeutique ; contrôle de l'asthme ;</li>
      <li>kiné respiratoire : <b>apprendre à gérer la crise par la respiration abdominale</b> (le stress aggrave les symptômes) ;</li>
      <li><b>réentraînement à l'effort</b> : rassurer sur la pratique sportive ;</li>
      <li><b>EFR</b> : apprécier la sévérité, contrôler l'efficacité du traitement, objectiver la crise aiguë ; <b>dès 5-7 ans</b> l'enfant sait souvent faire les manœuvres forcées comme l'adulte (mêmes paramètres).</li></ul>
      <p><b>Asthme du nourrisson</b> : au moins <b>3 épisodes</b> d'essoufflement ou de toux avec sifflements depuis la naissance. Arbre du résumé : plus de 12 mois = asthme ; avant 12 mois : 1er épisode = bronchiolite ; 2e épisode avec atopie = asthme, sans atopie = bronchiolite ; 3e épisode = asthme.</p>
      <p><b>Bronchite asthmatique (asthmatiforme)</b> : forme de bronchite aiguë avec les symptômes de la bronchite aiguë ET de la crise d'asthme (irritation et inflammation des bronches) ; dure <b>7 à 10 jours</b>, la toux irritative peut persister plus longtemps ; mêmes symptômes que la crise d'asthme plus une <b>toux grasse</b>, parfois une légère fièvre et des expectorations. Causes : infection virale (épidémies hivernales) ; infection bactérienne en cas de pic de pollution ou de fumée de tabac ; RGO sévère non traité ; insuffisance respiratoire ou cardiaque ; asthme non diagnostiqué ; bronchite chronique prolongée.</p>` },
    { id: "muco", titre: "9. Mucoviscidose de l'enfant (côté pédiatrie)", src: ["rp_pedia", "rp_muco", "rp_cr1303", "rp_trame", "rp_techkr", "rp_patho"], html:
      `<p>La fiche « Mucoviscidose » (adulte) détaille la physiopathologie. Ici, ce qui est propre à l'enfant.</p>
      <p><b>Définition (RESPI PEDIA)</b> : maladie génétique dont la 1re cause de morbidité et de mortalité est l'<b>atteinte pulmonaire</b> ; elle touche aussi l'appareil digestif et génital ; c'est la plus fréquente des maladies génétiques potentiellement graves dès l'enfance. Transmission <b>autosomique récessive</b>, mutations du gène de la protéine <b>CFTR</b>. Tableau clinique variable selon la mutation (digestif, respiratoire, ORL, sexuel et reproduction, puis trophicité, état général).</p>
      <p><b>Diagnostic</b> : <b>test à la sueur</b> (positif si &gt; 59 mmol/L selon la trame et la synthèse ; chlore &gt; 60 mEq/L selon PATHO), <b>dépistage néonatal</b> (goutte de sang au <b>talon le 3e jour</b>) + analyse génétique. Symptômes évocateurs : toux prolongée sèche ou plus souvent grasse ; infections broncho-pulmonaires récurrentes ; douleurs abdominales, lithiase biliaire ; diarrhée chronique graisseuse ou malodorante ; constipation ; fatigue et amaigrissement malgré un bon appétit ; déshydratation ; <b>sueur très salée</b>.</p>
      <p><b>Traitement de suivi</b> : <b>1 à 2 h de kiné par jour</b>, aérosols, nombreux médicaments ; en surinfection <b>5 à 6 h</b> (cures d'antibiotiques IV à domicile ou à l'hôpital) ; traitement spécifique avant et après greffe.</p>
      <p><b>Techniques de KR chez l'enfant muco</b> :</p>
      <ul><li><b>douche nasale et rinçage du nez</b> (hygiène du nez au minimum matin et soir) ;</li>
      <li><b>drainage autogène assisté</b> : « on descend proche du VR, puis on maintient, et on remonte progressivement. Chez l'enfant muco, il ne faut <b>pas remonter d'un coup</b> car les sécrétions sont trop collantes » ; chez le petit, mouvements de haut en bas sur un ballon (<b>bouncing</b>) ;</li>
      <li><b>PEP</b> : élimination des sécrétions facilitée, meilleure ventilation, VR diminué ;</li>
      <li><b>PEP oscillante (flutter)</b> : diminue la viscosité des sécrétions ;</li>
      <li>le mucus n'est pas forcément abondant mais <b>plus épais, visqueux, collant</b> : s'il stagne, risque d'infection et de surinfection.</li></ul>
      <p><b>Éducation thérapeutique</b> : drainage autogène, aérosols, <b>compliance</b> au traitement ; prévention des troubles musculo-squelettiques +++.</p>
      <p><b>Activité physique</b> : <b>3 fois par semaine</b>, durée suffisante (30 min 3 fois par semaine dans la synthèse), en surveillant la saturation ; <b>période critique = adolescence</b> ; sports sans impact, d'endurance, qui utilisent les membres supérieurs (ex. hand). Effets : moins de dyspnée, meilleure clairance mucociliaire (le mucus s'enrichit en eau grâce à une différence de potentiel transmembranaire), plus d'expectorations, meilleure fonction cardio-respiratoire, muscles respiratoires plus forts, meilleure capacité aérobie et qualité de vie ; densité minérale osseuse augmentée (moins d'ostéoporose), plus de masse musculaire et de mitochondries (moins de fatigue), valorisation psycho-sociale.</p>
      <p><b>Anamnèse ciblée</b> : circonstances du dépistage et du diagnostic ; test à la sueur ; quelle mutation ; antécédents familiaux ; dernière hospitalisation ; autres atteintes (digestive, ORL, reproduction, pancréas) ; dernière ostéodensitométrie ; dernier <b>HPO</b> (glucose) ; dernière EFR ; poids ou BMI et variations ; constipation, RGO ; entourage (fratrie source d'infection, fumeurs, crèche ou école) ; chambre 18-20 °C aérée ; lit à 30° ; sport ; hydratation (« un des axes majeurs de la prise en charge »).</p>
      <p><b>Bilan</b> : examen clinique (toux, essoufflement, auscultation, <b>peak flow</b>, ampliation thoracique) ; fatigue ; douleur ; articulaire (mobilité thoracique et des épaules ; <b>cyphose</b>) ; musculaire (endurance par le <b>test de la chaise</b> ; force « normalement OK ») ; trophique (amyotrophie, marbrures, œdème) ; psychologique chez le plus grand (baisses de moral fréquentes).</p>
      <p><b>Objectifs</b> : éducation thérapeutique + activité physique régulière ; prise des médicaments ; hygiène du nez ; améliorer la fonction respiratoire ; renforcement musculaire ciblé. <b>Programme de réhabilitation</b> : réentraînement à l'effort, spirométrie, mobilité (liste incomplète dans le cours).</p>
      <p>Les patients muco doivent s'éviter entre eux (transmission de bactéries, attention aux fratries et salles d'attente communes).</p>` },
    { id: "pneumo", titre: "10. Pneumonie de l'enfant", src: ["rp_pedia", "rp_patho"], html:
      `<p><b>Définition</b> : inflammation des <b>alvéoles et du tissu interstitiel</b> avec signes et symptômes respiratoires. <b>Acquise en communauté</b> = hors contexte hospitalier. <b>Compliquée</b> = épanchement pleural, signes de nécrose ou abcès.</p>
      ${T([["Virale", "Début par une rhinite", "Rien faire ou traitement de soutien"], ["Bactérienne", "Début soudain", "Antibiotiques"]], ["Type", "Début", "Traitement"])}
      <p><b>Symptômes</b> (les mêmes, plus nombreux dans la virale) : toux, respiration sifflante, <b>polypnée</b>, signes de détresse et/ou de lutte, <b>fièvre</b>, pâleur, désaturation.</p>
      <p><b>Étiologie</b> : bactéries, virus, champignons ; <b>Streptococcus pneumoniae</b> (pneumocoque) = agent le plus fréquent de la pneumonie bactérienne du jeune enfant.</p>
      <p><b>Diagnostic</b> : selon l'<b>OMS</b>, <b>polypnée + tirage sous-costal</b> chez un enfant qui tousse ou respire difficilement ; radio de thorax ; prise de sang.</p>
      <p><b>Critères cliniques de gravité / d'hospitalisation</b> : aspect toxique (teint gris, enfant asthénique) ; détresse respiratoire aiguë : tachypnée <b>&gt; 60/min après 2 ans, &gt; 70/min avant 2 ans</b> (seuils du cours), signes de lutte importants, hypoxie, signes d'hypercapnie (sueurs, HTA), tachycardie ; mauvaise tolérance hémodynamique ; troubles digestifs (vomissements, refus alimentaire, déshydratation) ; évolution rapide.</p>
      <p><b>Critères radiologiques de gravité</b> : épanchement pleural franc, pneumothorax ; pneumopathie étendue (<b>plus de 2 lobes ou bilatérale, poumon blanc</b>) ; atélectasie ; image d'abcès.</p>
      <p><b>En pratique (kiné)</b> : rassurer, expliquer la pathologie ; éducation thérapeutique ; surveiller les signes de gravité ; kiné respiratoire : <b>ELTGOL si l'enfant collabore</b>, <b>ELPr s'il ne collabore pas</b> ; <b>rinçage de nez</b>.</p>
      <p>Auscultation d'une pneumonie sans sécrétion : plutôt une hypoventilation (murmure vésiculaire diminué en regard du foyer).</p>` },
    { id: "ce", titre: "11. Inhalation de corps étranger", src: ["rp_bilancr", "rp_patho", "rp_cr2003", "rp_hors"], html:
      `<p><b>Ce que disent les cours</b> :</p>
      <ul><li>la <b>toux</b> est un réflexe de protection qui empêche la pénétration de corps étrangers dans les voies respiratoires ; l'ouverture de la glotte avec compression dynamique des bronches aide à éjecter un corps étranger ;</li>
      <li><b>toux aiguë sans contexte infectieux</b> : penser à l'<b>inhalation d'un corps étranger</b> (ou d'un toxique) ; toux chronique : « corps étranger non identifié » parmi les causes pulmonaires ;</li>
      <li>le corps étranger est une cause d'<b>atélectasie active</b> (obstruction qui empêche l'air d'arriver aux alvéoles) et d'<b>insuffisance respiratoire obstructive</b> ;</li>
      <li>cas adulte du cours (CR 20/03/25) : obstruction par un aliment, manœuvre de <b>Heimlich</b> puis appel des urgences, puis encombrement et acidose hypercapnique.</li></ul>
      ${HC("chez l'enfant, l'inhalation touche surtout les 1-3 ans (cacahuètes, fruits secs, petits jouets). Elle se révèle par un « syndrome de pénétration » : accès brutal de suffocation et de toux chez un enfant en bonne santé qui mangeait ou jouait. Elle peut ensuite donner une toux, un sifflement ou une pneumonie qui récidive toujours au même endroit, ou une atélectasie. La radio peut être normale (beaucoup d'objets sont radiotransparents) : le diagnostic et l'extraction se font par endoscopie (bronchoscopie). Le kiné ne fait <b>jamais</b> de désencombrement pour « faire sortir » un corps étranger bronchique : l'objet pourrait remonter et bloquer le larynx. Il renvoie vers le médecin. La KR se discute seulement après l'extraction (encombrement, atélectasie). En urgence, si l'enfant tousse efficacement, on le laisse tousser. Si la toux est inefficace et qu'il est conscient : avant 1 an, 5 tapes dans le dos puis 5 compressions thoraciques ; après 1 an, 5 tapes dans le dos puis 5 compressions abdominales (Heimlich).")}` },
    { id: "aero", titre: "12. Aérosols chez l'enfant : chambre d'inhalation, masque, nébuliseur", src: ["rp_medic", "rp_fincours", "rp_lamotte", "rp_scaillet", "rp_msbronch", "rp_cr1303", "rp_hors"], html:
      `<p><b>Principe</b> : médicament sous forme de fines particules dans un gaz ; concentration locale élevée, peu d'effets systémiques ; voie d'action la plus rapide. Taille des particules : <b>1 à 5 µm</b> = bronchioles et alvéoles (idéal asthme / BPCO) ; <b>5 à 10 µm</b> = trachée et bronches ; <b>&gt; 10 µm</b> = bouche et gorge.</p>
      ${T([
        ["Aérosol doseur pressurisé (MDI, « puff »)", "Coordination inspiration / délivrance difficile ; pas besoin d'un gros débit inspiratoire", "Avec une chambre d'inhalation chez l'enfant"],
        ["Inhalateur à poudre sèche (DPI)", "Pas de problème de coordination, mais il faut un débit inspiratoire de 30 à 60 L/min ; ne pas expirer dans le système", "Inadapté au petit enfant qui ne peut pas inspirer fort"],
        ["Nébuliseur pneumatique (compresseur)", "Facile pour les patients en difficulté respiratoire, les enfants, les personnes âgées ; débit d'au moins 8 L/min (sinon particules trop grosses)", "Masque ou embout"],
        ["Nébuliseur à ultrasons", "Plus silencieux et rapide ; certains médicaments sont altérés par la chaleur (pas pour la RhDNase)", ""]
      ], ["Dispositif", "Caractéristiques", "Chez l'enfant"])}
      <p><b>Chambre d'inhalation</b> (synthèse médicaments) : limite la déposition oro-pharyngée, plus de médicament inhalé ; existe pour <b>enfants et adultes</b> ; nettoyer au <b>détergent</b> et bien sécher, <b>pas d'eau</b> (pour éviter le dépôt sur les parois) ; la <b>maintenir horizontale</b> pendant le traitement. Tout le produit part à l'inspiration, le dépôt augmente.</p>
      <p><b>Technique de l'aérosol doseur (grand enfant, adulte)</b> : secouer ; expirer à fond ; inspirer lentement et profondément par la bouche en appuyant sur l'aérosol ; apnée de 10 s ; expirer normalement ; <b>rincer la bouche</b>, surtout après un corticoïde. Poudre sèche : expirer à fond hors du système ; inspiration rapide et profonde ; apnée 10 s ; rincer la bouche.</p>
      <p><b>Nébulisation (cours Lamotte)</b> : savoir administrer efficacement un aérosol ; le faire avec le patient, sinon de préférence <b>avant</b> la kiné ; débit <b>8 L/min</b> d'air ; durée <b>5 à 10 min</b> maximum, arrêter dès que c'est fini ; patient et nébuliseur verticaux ; <b>respiration buccale</b> ; attention au choix des produits ; expliquer, montrer, accompagner, nettoyer ; pas dans l'heure qui précède le coucher. Nébuliseur pneumatique : 5 pièces (masque, partie supérieure de la cupule, gicleur, partie inférieure, tuyau) : s'il en manque une, il ne marche plus (attention au gicleur au nettoyage).</p>
      <p><b>Produits</b> : bronchodilatateurs (β2-mimétiques), anticholinergiques, corticoïdes, sérum physiologique 0,9 %, sérum <b>hypertonique</b> (3 % en pédiatrie contre l'œdème ; 20 % chez l'adulte pour faire tousser), fluidifiants, antibiotiques. Muco : RhDNase nébulisée seule à heure fixe avant la kiné avec un appareil qui ne chauffe pas ; antibiotiques inhalés ; solutions hypertoniques ; bronchodilatateur pour contrer la bronchoconstriction induite.</p>
      <p><b>Rôle du kiné</b> : éducation (posture assise ou debout, respiration lente et profonde, coordination pour les MDI), surveillance des effets secondaires (tachycardie et tremblements des bronchodilatateurs, irritation de la gorge, sécheresse buccale, candidose après corticoïde), hygiène du matériel.</p>
      ${HC("chez le petit enfant (avant 4 ans environ), on utilise la chambre d'inhalation avec un <b>masque</b> bien appliqué sur le nez et la bouche, puis un embout buccal dès que l'enfant sait le tenir et coopère. Une bouffée à la fois dans la chambre, puis plusieurs respirations calmes (environ 5 à 10). Un enfant qui pleure ou se débat inhale très peu de produit : attendre qu'il soit calme ou le prendre dans les bras.")}` },
    { id: "pieges", titre: "13. Pièges du jury en pédiatrie", src: ["rp_pedia", "rp_cr1704", "rp_lise0404", "rp_techkr", "rp_cr1911"], html:
      `<ul>
      <li>L'enfant n'est pas un adulte en miniature : justifier chaque technique par l'anatomie (compliance thoracique, nez, diaphragme).</li>
      <li>Ne pas comprimer fort le thorax d'un nourrisson : risque de collapsus (et de fracture de côte, 1/1000).</li>
      <li>Pas de TA chez le nourrisson hospitalisé ; pas de BMI chez le bébé ; oxymètre sur l'hallux.</li>
      <li>Toujours demander prématurité, surfactant, RGO, tabac, mode de garde.</li>
      <li>Adapter l'échelle de douleur à l'âge (visages dès 4 ans, EVA dès 6 ans).</li>
      <li>Choisir la technique selon l'âge et la collaboration (ELPr / ELTGOL / DA / EDIC).</li>
      <li>Bébé en proclive 30°, jamais « à l'envers ».</li>
      <li>Les questions de pédiatrie sont posées à partir du cours de Mme Daubechies (CR 17/04/25) : ELPr, types de mouchage, conseils aux parents (prophylaxie, signes à surveiller comme le battement des ailes du nez).</li>
      <li>Corps étranger : orienter, ne pas « désencombrer ».</li></ul>` }
  );

  ped.qcm = [
    // anat
    q("p1", "anat", "Niveau vertébral du larynx chez le petit enfant :", ["C3"], ["C7", "T1", "C5-C6 dès la naissance"], "rp_pedia", "Il descend progressivement vers C5-C6."),
    q("p2", "anat", "Vers quel niveau le larynx descend-il avec la croissance ?", ["C5-C6"], ["C1", "T4", "L1"], "rp_pedia"),
    q("p3", "anat", "Pourquoi le nouveau-né peut-il respirer et déglutir en même temps ?", ["Grâce à la position haute de l'épiglotte"], ["Grâce à un larynx en C7", "Parce qu'il n'a pas d'épiglotte", "Parce qu'il respire par la bouche"], "rp_pedia"),
    q("p4", "anat", "Part des résistances nasales dans les résistances totales de l'enfant :", ["1/3"], ["1/10", "La totalité", "1/100"], "rp_pedia"),
    q("p5", "anat", "Part de la résistance inspiratoire dans le nez (plusieurs réponses) :", ["50 % chez l'enfant", "20 % chez l'adulte"], ["90 % chez l'adulte", "5 % chez l'enfant"], "rp_pedia"),
    q("p6", "anat", "Conséquence d'un simple rhume chez le nourrisson :", ["Une obstruction majeure au passage de l'air"], ["Aucune, le nez est large", "Une hyperventilation bénéfique", "Une bradycardie systématique"], "rp_pedia"),
    q("p7", "anat", "Chez l'enfant, la compliance de la cage thoracique est :", ["Supérieure à celle des poumons"], ["Inférieure à celle des poumons", "Nulle", "Identique à l'adulte dès la naissance"], "rp_pedia"),
    q("p8", "anat", "Risque d'une pression thoracique trop forte chez le nourrisson :", ["Créer un collapsus (et fracturer une côte)"], ["Aucun risque, le thorax est rigide", "Une hyperinflation", "Un pneumothorax sous tension systématique"], "rp_pedia"),
    q("p9", "anat", "Position des côtes et du diaphragme du nourrisson :", ["Côtes horizontales, diaphragme presque plat : travail moins efficace, fatigue rapide"], ["Côtes très obliques, diaphragme en dôme très efficace", "Côtes verticales", "Diaphragme absent"], "rp_pedia"),
    q("p10", "anat", "Pores de Kohn chez l'enfant :", ["Moins nombreux : plus de risque d'atélectasie"], ["Plus nombreux : aucune atélectasie possible", "Absents chez l'adulte", "Ils produisent le surfactant"], "rp_pedia"),
    q("p11", "anat", "Que sont les pores de Kohn ?", ["Des communications inter-alvéolaires pour la ventilation collatérale"], ["Des glandes à mucus", "Des récepteurs de la toux", "Des vaisseaux bronchiques"], "rp_pedia"),
    q("p12", "anat", "Glandes muqueuses bronchiques de l'enfant :", ["Plus nombreuses que chez l'adulte : encombrement rapide"], ["Absentes", "Moins nombreuses", "Seulement dans le nez"], "rp_pedia"),
    q("p13", "anat", "Âge auquel l'immunité est à peu près complète :", ["6 ans"], ["6 mois", "18 ans", "3 semaines"], "rp_pedia"),
    q("p14", "anat", "Muscle respiratoire principal du nourrisson :", ["Le diaphragme"], ["Les intercostaux externes", "Le SCOM", "Les abdominaux"], "rp_pedia"),
    q("p15", "anat", "Jusqu'à quel âge le système respiratoire est-il en développement constant (synthèse) ?", ["3 ans"], ["3 mois", "18 ans", "30 ans"], "rp_msbronch"),
    q("p16", "anat", "Épiglotte du nourrisson par rapport à l'adulte (synthèse) :", ["Horizontale (verticale chez l'adulte)"], ["Verticale (horizontale chez l'adulte)", "Identique", "Absente"], "rp_msbronch"),
    q("p17", "anat", "Caractéristiques propres à l'enfant selon la synthèse (plusieurs réponses) :", ["Compliance thoracique élevée", "Glandes à mucus nombreuses", "Respiration nasale", "Immaturité immunitaire"], ["Larynx bas en T2"], "rp_msbronch"),
    q("p18", "anat", "Cils des muqueuses nasales de l'enfant :", ["Moins nombreux : une barrière en moins contre les bactéries"], ["Plus nombreux que chez l'adulte", "Absents chez l'adulte", "Ils produisent l'O2"], "rp_pedia"),
    q("p19", "anat", "Cornets nasaux de l'enfant :", ["Plus volumineux que chez l'adulte"], ["Absents", "Plus petits", "Calcifiés"], "rp_pedia"),
    // surf
    q("p20", "surf", "À partir de quand le surfactant commence-t-il à être produit (RESPI PEDIA) ?", ["Vers 27 SA"], ["Vers 12 SA", "Vers 40 SA", "Après la naissance"], "rp_pedia"),
    q("p21", "surf", "Quand la production de surfactant est-elle maximale ?", ["Vers 35 SA"], ["Vers 20 SA", "À 2 ans", "Vers 27 SA"], "rp_pedia"),
    q("p22", "surf", "Terme normal de naissance :", ["37 à 40 semaines"], ["32 à 34 semaines", "42 à 45 semaines", "28 semaines"], "rp_pedia"),
    q("p23", "surf", "Moyens de prévention chez le prématuré (plusieurs réponses) :", ["Injection de surfactant à l'enfant", "Injection in utero si menace d'accouchement prématuré"], ["Corticoïdes inhalés au nourrisson", "Clapping néonatal"], "rp_pedia"),
    q("p24", "surf", "Avant l'action optimale du surfactant (Crombin), quel moyen garde les alvéoles ouvertes ?", ["La PEEP"], ["Le clapping", "L'aspiration", "La position déclive"], "rp_crombin"),
    q("p25", "surf", "Effets du surfactant (plusieurs réponses) :", ["Diminue la tension superficielle (augmente la compliance)", "Stabilise les petites alvéoles", "Garde les alvéoles sèches"], ["Augmente l'effort respiratoire"], "rp_crombin"),
    q("p26", "surf", "« Le surfactant termine de se produire à 27 SA » (notes 04/04) :", ["Faux : il commence vers 27 SA et est maximal vers 35 SA"], ["Vrai", "Vrai, il s'arrête à la naissance", "Faux : il commence à 40 SA"], "rp_pedia"),
    q("p27", "surf", "Bébé de 8 mois né à 36 semaines : âge corrigé approximatif ?", ["Environ 7 mois"], ["8 mois exactement", "4 mois", "12 mois"], "rp_rapport", "36 SA = 4 semaines avant 40 SA : on retire environ 1 mois."),
    // normes
    q("p28", "normes", "FC normale du nourrisson (1 mois à 2 ans) :", ["100 à 160 bpm"], ["60 à 100 bpm", "40 à 60 bpm", "180 à 220 bpm"], "rp_pedia"),
    q("p29", "normes", "FC normale du nouveau-né (< 1 mois) :", ["120 à 160 bpm"], ["60 à 80 bpm", "70 à 140 bpm", "200 à 240 bpm"], "rp_pedia"),
    q("p30", "normes", "FC normale de l'enfant de 2 à 12 ans :", ["70 à 140 bpm"], ["120 à 160 bpm", "40 à 60 bpm", "160 à 200 bpm"], "rp_pedia"),
    q("p31", "normes", "FR normale du nouveau-né jusqu'à 3 mois :", ["40 à 60 cpm"], ["12 à 20 cpm", "20 à 30 cpm", "80 à 100 cpm"], "rp_pedia"),
    q("p32", "normes", "FR normale de 3 mois à 2 ans :", ["30 à 40 cpm"], ["12 à 20 cpm", "60 à 80 cpm", "5 à 10 cpm"], "rp_pedia"),
    q("p33", "normes", "FR normale de 2 à 10 ans :", ["20 à 30 cpm"], ["40 à 60 cpm", "8 à 12 cpm", "50 à 70 cpm"], "rp_pedia"),
    q("p34", "normes", "FR normale après 10 ans et chez l'adulte :", ["12 à 20 cpm"], ["30 à 40 cpm", "40 à 60 cpm", "4 à 8 cpm"], "rp_pedia"),
    q("p35", "normes", "Enfant de 5 ans, FR 45/min au repos :", ["Polypnée (norme 20-30)"], ["Normale", "Bradypnée", "Apnée"], "rp_pedia"),
    q("p36", "normes", "Bébé de 6 mois, FC 150 bpm, calme :", ["Dans la norme (100-160)"], ["Tachycardie grave", "Bradycardie", "Arrêt cardiaque"], "rp_pedia"),
    q("p37", "normes", "Définition de la fièvre chez l'enfant :", ["Température supérieure à 38 °C"], ["Supérieure à 37 °C", "Supérieure à 40 °C seulement", "Inférieure à 36 °C"], "rp_pedia"),
    q("p38", "normes", "Fièvre « aiguë » (plusieurs réponses) :", ["Moins de 5 jours chez le nourrisson", "Moins de 1 semaine chez l'enfant"], ["Moins de 1 mois chez le nourrisson", "Moins de 1 heure"], "rp_pedia"),
    q("p39", "normes", "Pourquoi tenir compte de la température dans le bilan ?", ["Elle peut augmenter FR et FC sans pathologie respiratoire"], ["Elle fait baisser la FR", "Elle n'a aucun effet", "Elle fait monter la SpO2"], "rp_pedia"),
    q("p40", "normes", "CPT de l'enfant rapportée au poids :", ["60 à 65 mL/kg"], ["6 à 8 mL/kg", "28 mL/kg", "100 à 150 mL/kg/min"], "rp_pedia"),
    q("p41", "normes", "Volume courant de l'enfant :", ["6 à 8 mL/kg"], ["60 à 65 mL/kg", "1 mL/kg", "20 mL/kg"], "rp_pedia"),
    q("p42", "normes", "CRF de l'enfant :", ["28 mL/kg"], ["6 mL/kg", "65 mL/kg", "150 mL/kg"], "rp_pedia"),
    q("p43", "normes", "Ventilation alvéolaire de l'enfant :", ["100 à 150 mL/kg/min"], ["6 à 8 mL/kg/min", "1 L/kg/min", "28 mL/kg/min"], "rp_pedia"),
    q("p44", "normes", "Bébé de 6 kg : Vt attendu (6 à 8 mL/kg) ?", ["36 à 48 mL"], ["360 à 480 mL", "6 à 8 mL", "600 mL"], "rp_pedia", "6 × 6 = 36 mL ; 6 × 8 = 48 mL."),
    q("p45", "normes", "Enfant de 20 kg : CPT attendue (60-65 mL/kg) ?", ["1200 à 1300 mL"], ["120 à 130 mL", "12 à 13 L", "560 mL"], "rp_pedia", "20 × 60 = 1200 ; 20 × 65 = 1300 mL."),
    q("p46", "normes", "Le tableau de TA par âge du RESPI PEDIA est-il disponible ?", ["Non, c'est une image non extraite"], ["Oui : 120/80 à tout âge", "Oui : 60/40 pour tous", "Le cours dit de ne jamais prendre la TA"], "rp_pedia"),
    // anam
    q("p47", "anam", "Selon le RESPI PEDIA, quand faire une radio ?", ["Seulement si suspicion de pneumonie"], ["Systématiquement", "Avant chaque séance", "Jamais chez l'enfant"], "rp_pedia"),
    q("p48", "anam", "Questions sur le sommeil de l'enfant (plusieurs réponses) :", ["Lit en proclive 30° ?", "Ronflement ?", "Toux nocturne, réveils ?", "Température de la chambre, peluches, humidificateur ?"], ["Heure du coucher des parents"], "rp_pedia"),
    q("p49", "anam", "Questions d'alimentation (plusieurs réponses) :", ["Allaitement, biberon, mixte ?", "Diversification ?", "Perte d'appétit, prise ou perte de poids ?"], ["Nombre de cafés par jour de l'enfant"], "rp_pedia"),
    q("p50", "anam", "Pourquoi demander si la fratrie est malade (muco) ?", ["Les frères et sœurs peuvent être une source d'infection"], ["Pour calculer l'âge corrigé", "Pour le test de la sueur", "Ce n'est pas utile"], "rp_cr1303"),
    q("p51", "anam", "État général à demander (plusieurs réponses) :", ["Apathique ?", "Éveillé ?", "Plus agité ?"], ["Taille des chaussures ?"], "rp_pedia"),
    // bilan
    q("p52", "bilan", "La cyanose chez l'enfant est un signe :", ["Tardif et inconstant"], ["Précoce et constant", "Toujours présent", "De bonne santé"], "rp_pedia"),
    q("p53", "bilan", "Signe de détresse dit « spécifique à l'enfant » :", ["Le balancement thoraco-abdominal"], ["Les lèvres pincées", "Le thorax en tonneau", "Le signe de Hoover"], "rp_pedia"),
    q("p54", "bilan", "Entonnoir xiphoïdien :", ["Creux sous l'appendice xiphoïde à l'inspiration"], ["Bombement du sternum", "Déviation de la trachée", "Œdème du cou"], "rp_pedia"),
    q("p55", "bilan", "Rôle du battement des ailes du nez :", ["Diminuer les résistances nasales en offrant plus de surface"], ["Augmenter les résistances", "Réchauffer l'air", "Faire tousser"], "rp_pedia"),
    q("p56", "bilan", "Geignement (grunting) :", ["Fermeture précoce de la glotte à l'expiration pour créer une pression positive et éviter le collapsus"], ["Sifflement inspiratoire du larynx", "Toux aboyante", "Pleurs de faim"], "rp_pedia"),
    q("p57", "bilan", "Balancement de la tête chez l'enfant plus grand :", ["Utilisation des muscles inspirateurs accessoires"], ["Signe d'otite", "Signe de bonne santé", "Hypotonie"], "rp_pedia"),
    q("p58", "bilan", "Hippocratisme digital :", ["Bombement de l'extrémité des ongles, signe possible de pathologie respiratoire chronique"], ["Signe aigu de bronchiolite", "Signe de fracture", "Signe d'allergie"], "rp_pedia"),
    q("p59", "bilan", "Wheezing :", ["Sifflement expiratoire = obstruction des voies aériennes"], ["Crépitants inspiratoires", "Silence auscultatoire", "Frottement pleural"], "rp_pedia"),
    q("p60", "bilan", "Parmi ces signes, lesquels sont des items du score de Silverman ? (plusieurs réponses)", ["Tirage", "Balancement thoraco-abdominal", "Battement des ailes du nez", "Geignement"], ["Fréquence cardiaque"], "rp_pedia"),
    q("p61", "bilan", "Score de Silverman élevé :", ["Enfant en détresse importante"], ["Enfant en bonne santé", "Score sans lien avec la détresse", "Indication de clapping"], "rp_pedia"),
    q("p62", "bilan", "Silverman (hors cours) : cotation d'un item :", ["0, 1 ou 2"], ["0 à 10", "0 à 3", "Oui ou non"], "rp_hors", "5 items de 0 à 2 : total sur 10."),
    q("p63", "bilan", "Échelle de douleur à 5 ans :", ["Échelle des visages"], ["EVA", "Aucune possible", "Échelle de Borg modifiée"], "rp_pedia", "Visages dès 4 ans ; EVA dès 6 ans."),
    q("p64", "bilan", "Échelle de douleur à partir de 6 ans :", ["EVA"], ["Aucune", "Échelle des visages obligatoirement", "Glasgow"], "rp_pedia"),
    q("p65", "bilan", "Avant 4 ans, comment évaluer la douleur à la toux ?", ["Demander aux parents s'ils pensent que l'enfant a mal quand il tousse"], ["EVA", "Échelle numérique", "Ne pas s'en occuper"], "rp_pedia"),
    q("p66", "bilan", "Comment évaluer la dyspnée chez l'enfant communicant ?", ["ENS ou EVA"], ["Score de Glasgow", "Test de la sueur", "Score d'Apgar"], "rp_pedia"),
    q("p67", "bilan", "À partir de quel âge l'enfant peut-il faire des EFR comme l'adulte ?", ["5-7 ans"], ["1 an", "12 ans", "18 mois"], "rp_pedia"),
    q("p68", "bilan", "Bilan morpho-statique de l'enfant respiratoire chronique (plusieurs réponses) :", ["Cyphose", "Enroulement des épaules", "Déformations thoraciques"], ["Hallux valgus systématique"], "rp_pedia"),
    q("p69", "bilan", "Test d'endurance musculaire cité pour l'enfant muco :", ["Le test de la chaise"], ["Le test de Rosenthal", "Le test de Gudin", "Le Tinetti"], "rp_pedia"),
    q("p70", "bilan", "Descente du cartilage thyroïdien à l'inspiration :", ["Fort débit inspiratoire : signe de détresse"], ["Signe normal au repos", "Signe de RGO", "Signe de déshydratation"], "rp_trame"),
    // objectifs
    q("p71", "objectifs", "Objectifs généraux en pédiatrie (RESPI PEDIA) (plusieurs réponses) :", ["Rassurer parents et enfant", "Éducation thérapeutique", "Désencombrement des VAS et VAI", "Réentraînement à l'effort"], ["Sevrer de la ventilation invasive chez tous"], "rp_pedia"),
    // tech
    q("p72", "tech", "Technique de référence chez le nourrisson non collaborant :", ["ELPr"], ["ELTGOL", "ACBT", "EDIC"], "rp_pedia"),
    q("p73", "tech", "À partir de quel âge l'EDIC (RESPI PEDIA) ?", ["3-4 ans"], ["3-4 mois", "15 ans", "Dès la naissance"], "rp_pedia"),
    q("p74", "tech", "À partir de quel âge le drainage autogène selon la fiche techniques de KR ?", ["5-6 ans"], ["6 mois", "15 ans", "Dès la naissance"], "rp_techkr"),
    q("p75", "tech", "ELTGOL chez l'enfant : que disent les supports ? (plusieurs réponses)", ["RESPI PEDIA : à partir de 7-8 ans", "Fiche techniques de KR : contre-indiqué avant 12 ans"], ["Indiqué dès 6 mois", "Aucun support n'en parle"], "rp_techkr", "Contradiction : voir REMARQUES."),
    q("p76", "tech", "Pneumonie de l'enfant : enfant qui collabore :", ["ELTGOL"], ["ELPr uniquement", "Clapping", "Drainage postural"], "rp_pedia"),
    q("p77", "tech", "Pneumonie de l'enfant : enfant qui ne collabore pas :", ["ELPr"], ["ELTGOL", "ACBT", "Spirométrie incitative"], "rp_pedia"),
    q("p78", "tech", "Pourquoi l'ACBT ne convient pas au petit enfant ?", ["Il demande une coopération (contre-indiqué si manque de coopération)"], ["Il est dangereux pour le cœur", "Il est interdit par la HAS chez l'adulte", "Il ne marche qu'en déclive"], "rp_techkr"),
    q("p79", "tech", "Effets secondaires du drainage postural (plusieurs réponses) :", ["RGO chez le bébé muco", "Hypoxie chez le muco", "Arythmies"], ["Amélioration du RGO"], "rp_techkr"),
    q("p80", "tech", "Pendant une aspiration chez l'enfant, que surveiller surtout ?", ["Les bradycardies (et la SpO2, la coloration)"], ["La glycémie", "La température", "La diurèse"], "rp_scaillet"),
    q("p81", "tech", "Toux provoquée chez l'enfant (bilan cardio-respi) :", ["Stimulation des récepteurs tussigènes au niveau de la fourchette sternale"], ["Pression sur l'épigastre", "Tapes dans le dos", "Pincement du nez"], "rp_bilancr"),
    q("p82", "tech", "Drainage autogène chez le petit muco :", ["DA assisté avec mouvements de haut en bas sur un ballon (bouncing)"], ["Drainage postural tête en bas 30 min", "Clapping", "ELTGOL"], "rp_muco"),
    q("p83", "tech", "Avantage du drainage autogène chez le muco (plusieurs réponses) :", ["Minimise les épisodes de toux", "Grande autonomie", "Minimise les effets du RGO"], ["Il nécessite la position déclive"], "rp_muco"),
    q("p84", "tech", "Toux dirigée à bas volume (initiée sous la CRF) :", ["Action plus périphérique"], ["Action sur la trachée seulement", "Interdite chez l'enfant", "Initiée à la CPT"], "rp_kinepra"),
    // asthme
    q("p85", "asthme", "Définition de l'asthme (RESPI PEDIA) :", ["Inflammation chronique réversible des bronches avec symptômes paroxystiques"], ["Infection virale aiguë des bronchioles", "Destruction irréversible des alvéoles", "Maladie génétique du CFTR"], "rp_pedia"),
    q("p86", "asthme", "Indispensable au diagnostic d'asthme :", ["Mettre en évidence un trouble ventilatoire obstructif variable et réversible"], ["Un test à la sueur positif", "Une radio normale", "Un trouble restrictif fixe"], "rp_pedia"),
    q("p87", "asthme", "Horaire typique de la toux de l'asthmatique :", ["La nuit, vers 2-3 h, ou au réveil"], ["À midi uniquement", "Seulement pendant les repas", "Jamais la nuit"], "rp_pedia"),
    q("p88", "asthme", "Exacerbation d'asthme :", ["Crise qui dure plusieurs heures ou jours malgré le traitement de crise répété"], ["Crise qui cède en 2 min", "Toux unique", "Sifflement inspiratoire bref"], "rp_pedia"),
    q("p89", "asthme", "Facteurs environnementaux d'aggravation (plusieurs réponses) :", ["Stress", "Changements climatiques", "Tabac", "Activité sportive"], ["Groupe ethnique"], "rp_pedia"),
    q("p90", "asthme", "Facteurs de l'hôte associés à l'aggravation (plusieurs réponses) :", ["RGO", "Facteurs anténataux et périnataux", "Susceptibilité individuelle"], ["Activité sportive"], "rp_pedia"),
    q("p91", "asthme", "Score de sévérité de l'asthme de l'enfant cité :", ["Le score PRAM"], ["Le score de Wang", "Le score de Silverman", "Le GOLD"], "rp_pedia"),
    q("p92", "asthme", "Signes de gravité de l'asthme (plusieurs réponses) :", ["SpO2 inférieure à 92 %", "Impossibilité de parler", "Troubles de la conscience", "Bradypnée ou rythme irrégulier"], ["FR à 20/min chez un enfant de 8 ans calme"], "rp_pedia"),
    q("p93", "asthme", "Polypnée de gravité dans l'asthme (RESPI PEDIA) :", ["Plus de 60/min"], ["Plus de 15/min", "Plus de 25/min", "Plus de 150/min"], "rp_pedia"),
    q("p94", "asthme", "Rôle de la kiné dans la crise d'asthme de l'enfant :", ["Apprendre à gérer la crise par la respiration abdominale (le stress aggrave)"], ["ELPr en pleine crise", "Clapping", "Toux provoquée répétée"], "rp_pedia"),
    q("p95", "asthme", "Utilité des EFR dans l'asthme (plusieurs réponses) :", ["Apprécier la sévérité", "Contrôler l'efficacité du traitement", "Objectiver la crise aiguë"], ["Remplacer l'auscultation"], "rp_pedia"),
    q("p96", "asthme", "Asthme du nourrisson (RESPI PEDIA) :", ["Au moins 3 épisodes d'essoufflement ou de toux avec sifflements depuis la naissance"], ["Un seul épisode de rhume", "Toux grasse isolée", "Une bronchiolite à 18 mois"], "rp_pedia"),
    q("p97", "asthme", "Que montre la radio dans l'asthme ?", ["Une distension thoracique, parfois un foyer infectieux associé"], ["Un poumon blanc", "Un pneumothorax systématique", "Une fibrose"], "rp_pedia"),
    q("p98", "asthme", "Durée d'une bronchite asthmatiforme :", ["7 à 10 jours (toux irritative parfois plus longue)"], ["2 heures", "6 mois", "1 an"], "rp_pedia"),
    q("p99", "asthme", "La bronchite asthmatiforme associe :", ["Symptômes de la crise d'asthme + toux grasse, parfois légère fièvre et expectorations"], ["Uniquement une fièvre à 41 °C", "Une détresse néonatale", "Une douleur de jambe"], "rp_pedia"),
    q("p100", "asthme", "Causes de bronchite asthmatiforme (plusieurs réponses) :", ["Infection virale hivernale", "RGO sévère non traité", "Asthme non diagnostiqué"], ["Fracture de côte"], "rp_pedia"),
    q("p101", "asthme", "PRAM (hors cours) : total de 9/12 :", ["Crise sévère"], ["Crise légère", "Crise modérée", "Normal"], "rp_hors", "0-3 léger, 4-7 modéré, 8-12 sévère."),
    // muco
    q("p102", "muco", "Mode de transmission de la mucoviscidose :", ["Autosomique récessive"], ["Autosomique dominante", "Liée à l'X dominante", "Infectieuse"], "rp_pedia"),
    q("p103", "muco", "Protéine en cause dans la mucoviscidose :", ["CFTR"], ["Alpha-1-antitrypsine", "Dystrophine", "Surfactant B"], "rp_pedia"),
    q("p104", "muco", "Quand se fait le dépistage néonatal par goutte de sang au talon ?", ["Le 3e jour"], ["À 1 an", "Le jour de la naissance à 1 h", "À 6 ans"], "rp_pedia"),
    q("p105", "muco", "Seuil positif du test à la sueur selon la trame :", ["Plus de 59 mmol/L"], ["Plus de 5 mmol/L", "Moins de 30 mmol/L", "Plus de 300 mmol/L"], "rp_trame", "PATHO dit chlore > 60 mEq/L."),
    q("p106", "muco", "Symptômes évocateurs de mucoviscidose (plusieurs réponses) :", ["Sueur très salée", "Infections broncho-pulmonaires récurrentes", "Diarrhée graisseuse malodorante", "Amaigrissement malgré un bon appétit"], ["Prise de poids rapide"], "rp_pedia"),
    q("p107", "muco", "Durée quotidienne de kiné de suivi d'un enfant muco :", ["1 à 2 heures"], ["5 minutes", "8 heures", "1 heure par semaine"], "rp_pedia"),
    q("p108", "muco", "Durée de traitement par jour en période de surinfection :", ["5 à 6 heures"], ["10 minutes", "1 heure", "12 heures"], "rp_pedia"),
    q("p109", "muco", "Drainage autogène assisté chez l'enfant muco : pourquoi ne pas remonter d'un coup ?", ["Les sécrétions sont trop collantes pour remonter"], ["Pour éviter une hyperventilation", "Parce que c'est douloureux", "Parce que le VR est trop grand"], "rp_pedia"),
    q("p110", "muco", "Effet de la PEP oscillante (flutter) :", ["Diminuer la viscosité des sécrétions"], ["Augmenter la viscosité", "Remplacer l'antibiotique", "Bronchoconstriction"], "rp_pedia"),
    q("p111", "muco", "Effets de la PEP selon le cours (plusieurs réponses) :", ["Élimination des sécrétions facilitée", "Meilleure ventilation"], ["Augmentation du RGO", "Augmentation de l'hyperinflation"], "rp_pedia"),
    q("p112", "muco", "Activité physique de l'enfant muco :", ["3 fois par semaine, durée suffisante, en surveillant la saturation"], ["Interdite", "1 fois par mois", "Seulement de la musculation lourde"], "rp_pedia"),
    q("p113", "muco", "Période critique pour l'activité physique du muco :", ["L'adolescence"], ["La petite enfance", "L'âge de 2 ans", "La retraite"], "rp_pedia"),
    q("p114", "muco", "Type de sport conseillé au muco (plusieurs réponses) :", ["Sports sans impact", "Endurance", "Sports qui utilisent les membres supérieurs (ex. hand)"], ["Plongée en apnée profonde"], "rp_pedia"),
    q("p115", "muco", "Effets de l'activité physique chez le muco (plusieurs réponses) :", ["Meilleure clairance mucociliaire (mucus enrichi en eau)", "Augmentation de la densité minérale osseuse", "Moins de dyspnée"], ["Diminution des mitochondries"], "rp_pedia"),
    q("p116", "muco", "Hygiène du nez minimum chez l'enfant muco :", ["Matin et soir (2 fois par jour)"], ["1 fois par semaine", "Jamais", "1 fois par mois"], "rp_trame"),
    q("p117", "muco", "Questions d'anamnèse ciblée muco (plusieurs réponses) :", ["Quelle mutation ?", "Dernier HPO (glucose) ?", "Dernière ostéodensitométrie ?", "Dernière EFR ?"], ["Score de Wang ?"], "rp_pedia"),
    q("p118", "muco", "Déformation à prévenir chez le muco :", ["L'hypercyphose dorsale"], ["Le genu valgum", "Le pied creux", "La scoliose lombaire uniquement"], "rp_muco"),
    q("p119", "muco", "Pourquoi les patients muco doivent-ils s'éviter ?", ["Risque de transmission de bactéries entre eux"], ["Ils sont contagieux par le CFTR", "Pour des raisons d'assurance", "Ce n'est pas vrai"], "rp_muco"),
    q("p120", "muco", "Axe majeur de la prise en charge du muco selon le CR 13/03/25 :", ["L'hydratation, pour liquéfier le mucus"], ["La restriction hydrique", "Le jeûne", "Le clapping quotidien"], "rp_cr1303"),
    // pneumo
    q("p121", "pneumo", "Pneumonie « compliquée » (plusieurs réponses) :", ["Épanchement pleural", "Signes de nécrose", "Abcès"], ["Simple fièvre à 38 °C"], "rp_pedia"),
    q("p122", "pneumo", "Pneumonie acquise en communauté :", ["Pneumonie contractée hors de l'hôpital"], ["Pneumonie sous ventilateur", "Pneumonie de toute la famille", "Pneumonie congénitale"], "rp_pedia"),
    q("p123", "pneumo", "Agent le plus fréquent de la pneumonie bactérienne du jeune enfant :", ["Streptococcus pneumoniae"], ["VRS", "Pseudomonas aeruginosa", "Rhinovirus"], "rp_pedia"),
    q("p124", "pneumo", "Critères OMS du diagnostic de pneumonie chez l'enfant qui tousse :", ["Polypnée + tirage sous-costal"], ["Fièvre + diarrhée", "Toux sèche isolée", "Sibilants isolés"], "rp_pedia"),
    q("p125", "pneumo", "Pneumonie virale : traitement (RESPI PEDIA) :", ["Rien ou traitement de soutien"], ["Antibiotiques IV systématiques", "Chirurgie", "Corticoïdes à forte dose"], "rp_pedia"),
    q("p126", "pneumo", "Pneumonie bactérienne : début et traitement :", ["Début soudain, antibiotiques"], ["Début par une rhinite, rien", "Début progressif sur des mois, kiné seule", "Début néonatal, surfactant"], "rp_pedia"),
    q("p127", "pneumo", "Tachypnée de gravité de la pneumonie (RESPI PEDIA) (plusieurs réponses) :", ["Plus de 70/min avant 2 ans", "Plus de 60/min après 2 ans"], ["Plus de 20/min à tout âge", "Plus de 100/min après 2 ans"], "rp_pedia"),
    q("p128", "pneumo", "Signes d'hypercapnie cités (plusieurs réponses) :", ["Sueurs", "HTA"], ["Pâleur des ongles seulement", "Bradycardie à 40"], "rp_pedia"),
    q("p129", "pneumo", "Critères radiologiques de gravité (plusieurs réponses) :", ["Plus de 2 lobes ou bilatérale (poumon blanc)", "Épanchement pleural franc, pneumothorax", "Atélectasie, abcès"], ["Radio normale"], "rp_pedia"),
    q("p130", "pneumo", "Aspect « toxique » d'un enfant :", ["Teint gris, enfant asthénique"], ["Enfant rose et joueur", "Enfant qui mange bien", "Joues rouges de poussée dentaire"], "rp_pedia"),
    q("p131", "pneumo", "Kiné dans la pneumonie de l'enfant (plusieurs réponses) :", ["Rassurer, expliquer", "Surveiller les signes de gravité", "Rinçage de nez"], ["Clapping vigoureux"], "rp_pedia"),
    // corps étranger
    q("p132", "ce", "Toux aiguë sans contexte infectieux chez un enfant : à quoi penser ?", ["À l'inhalation d'un corps étranger (ou d'un toxique)"], ["À une bronchiolite certaine", "À une mucoviscidose", "À un asthme du nourrisson certain"], "rp_bilancr"),
    q("p133", "ce", "Un corps étranger bronchique donne une atélectasie :", ["Active (obstructive)"], ["Passive (compression)", "Toujours bilatérale", "Il ne donne jamais d'atélectasie"], "rp_patho"),
    q("p134", "ce", "Le kiné suspecte un corps étranger bronchique : que fait-il ?", ["Il ne désencombre pas et oriente vers le médecin (extraction par endoscopie)"], ["ELPr vigoureuse pour le faire sortir", "Drainage postural tête en bas", "Clapping"], "rp_hors"),
    q("p135", "ce", "Enfant de 2 ans qui s'étouffe mais tousse fort et efficacement :", ["Le laisser tousser et surveiller"], ["Lui donner à boire", "Mettre les doigts dans la gorge", "Heimlich immédiat"], "rp_hors"),
    q("p136", "ce", "Nourrisson de 8 mois conscient, toux inefficace, corps étranger :", ["5 tapes dans le dos puis 5 compressions thoraciques"], ["Heimlich abdominal", "Le secouer par les pieds", "Lui faire boire de l'eau"], "rp_hors"),
    q("p137", "ce", "Une radio normale élimine-t-elle un corps étranger ?", ["Non : beaucoup d'objets sont radiotransparents"], ["Oui, toujours", "Oui, si l'enfant a moins de 3 ans", "Oui, si l'enfant tousse"], "rp_hors"),
    // aéro
    q("p138", "aero", "Particules qui atteignent bronchioles et alvéoles :", ["1 à 5 µm"], ["5 à 10 µm", "Plus de 10 µm", "Plus de 50 µm"], "rp_fincours"),
    q("p139", "aero", "Particules de plus de 10 µm se déposent :", ["Dans la bouche et la gorge"], ["Dans les alvéoles", "Dans les bronchioles", "Dans le sang"], "rp_fincours"),
    q("p140", "aero", "Intérêt de la chambre d'inhalation (plusieurs réponses) :", ["Limite la déposition oro-pharyngée", "Plus de médicament inhalé"], ["Remplace le médicament", "Nécessite une forte coordination"], "rp_medic"),
    q("p141", "aero", "Nettoyage de la chambre d'inhalation :", ["Au détergent, bien sécher, pas d'eau"], ["À l'eau de javel pure et rinçage abondant", "Jamais", "Au lave-vaisselle à 90 °C quotidiennement"], "rp_medic"),
    q("p142", "aero", "Position de la chambre d'inhalation pendant le traitement :", ["Horizontale"], ["Verticale vers le haut", "Tête en bas", "Peu importe"], "rp_medic"),
    q("p143", "aero", "Débit inspiratoire nécessaire pour un inhalateur à poudre sèche :", ["30 à 60 L/min"], ["1 à 2 L/min", "200 L/min", "Aucun"], "rp_medic", "D'où son inadaptation chez le petit enfant."),
    q("p144", "aero", "Paramètres de la nébulisation (cours Lamotte) (plusieurs réponses) :", ["Débit de 8 L/min", "Durée 5 à 10 min maximum", "Respiration buccale"], ["Durée de 1 heure"], "rp_lamotte"),
    q("p145", "aero", "Débit minimum d'un nébuliseur pneumatique et pourquoi :", ["8 L/min, sinon les particules sont plus grosses et vont moins loin"], ["1 L/min pour économiser", "15 L/min sinon il chauffe", "Aucun débit nécessaire"], "rp_scaillet"),
    q("p146", "aero", "Après un aérosol de corticoïde, il faut :", ["Se rincer la bouche"], ["Faire une apnée de 2 minutes", "Boire du lait", "Rien"], "rp_medic"),
    q("p147", "aero", "Sérum hypertonique en pédiatrie (fiche) :", ["3 % contre l'œdème sous-muqueux"], ["20 % pour faire tousser le bébé", "0,9 %", "50 %"], "rp_scaillet"),
    q("p148", "aero", "Technique de l'aérosol doseur (plusieurs réponses) :", ["Secouer, expirer à fond", "Inspiration lente et profonde en déclenchant", "Apnée de 10 secondes"], ["Expirer dans l'appareil"], "rp_medic"),
    q("p149", "aero", "Petit enfant de 2 ans avec un aérosol doseur (hors cours) :", ["Chambre d'inhalation avec masque"], ["Poudre sèche", "Aérosol doseur directement en bouche sans chambre", "Embout buccal seul sans chambre"], "rp_hors"),
    q("p150", "aero", "Enfant qui pleure pendant l'aérosol (hors cours) :", ["Il inhale très peu de produit : attendre qu'il soit calme"], ["C'est idéal, il inspire fort", "Ça double la dose", "Ça n'a aucune importance"], "rp_hors"),
    q("p151", "aero", "Effets secondaires des bronchodilatateurs à surveiller (plusieurs réponses) :", ["Tachycardie", "Tremblements"], ["Bradycardie profonde systématique", "Hypertension intracrânienne"], "rp_fincours"),
    q("p152", "aero", "RhDNase chez le muco :", ["Nébulisée seule, à heure fixe, avec un appareil qui ne chauffe pas"], ["Mélangée à tous les autres aérosols", "Avec un nébuliseur à ultrasons qui chauffe", "En poudre sèche chez le nourrisson"], "rp_cr1303"),
    // pièges
    q("p153", "pieges", "Erreur à ne pas faire avec un bébé en réa :", ["L'installer « à l'envers » au lieu du proclive 30°"], ["Le mettre en proclive 30°", "Laver son nez", "Le déshabiller pour l'ausculter"], "rp_cr1704"),
    q("p154", "pieges", "« L'enfant n'est pas un adulte en miniature » : conséquence pratique :", ["Adapter techniques, normes et pressions à l'âge"], ["Utiliser les normes adultes", "Faire les mêmes techniques qu'à l'adulte", "Ne jamais faire de kiné respiratoire"], "rp_msbronch")
  ];

  ped.patients = [
    { id: "rp_p6", nom: "Enfant de 9 ans · mucoviscidose, suivi en kiné (cas d'entraînement)", origine: "invente", src: "rp_pedia", desc: "Cas construit avec le cours RESPI PEDIA et le CR 13/03/25 : enfant de 9 ans, muco dépistée au talon à J3, test à la sueur positif. Toux grasse matinale, sécrétions épaisses, légère cyphose, se fatigue au foot. Vient avec sa mère.", attrs: { toux: true, fatigue: true, flexion: true } },
    { id: "rp_p7", nom: "Enfant de 7 ans · crise d'asthme (cas d'entraînement)", origine: "invente", src: "rp_pedia", desc: "Cas construit avec le cours RESPI PEDIA : enfant de 7 ans, asthme connu, toux nocturne vers 2-3 h, sifflements à l'expiration, anxieux, crise déclenchée par un rhume et la fumée de tabac des parents.", attrs: { dyspnee: true, toux: true, anxiete: true, tirage: true } }
  ];

  ped.cas = [
    { id: "rp_c6", origine: "invente", src: ["rp_pedia", "rp_cr1303", "rp_trame", "rp_muco"], patient: "rp_p6", titre: "Enfant de 9 ans atteint de mucoviscidose au cabinet",
      fiche: "Enfant de 9 ans, mucoviscidose, vient au cabinet avec sa mère pour son suivi de kiné respiratoire. Anamnèse, bilans, objectifs et traitement.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis les questions à poser, dans l'ordre.", items: [
          { q: "Circonstances du dépistage, test à la sueur, quelle mutation ?", r: "Dépistage au talon à J3, test à la sueur positif (> 59 mmol/L), mutation connue de la famille.", p: 1 },
          { q: "Poids, BMI, variations récentes ?", r: "Poids stable mais petit gabarit (troubles digestifs).", p: 1 },
          { q: "Dernière hospitalisation, surinfections ?", r: "Cure d'antibiotiques IV il y a 6 mois.", p: 1 },
          { q: "Autres atteintes : digestive, pancréas, ORL, RGO, constipation ?", r: "Gélules d'enzymes pancréatiques ; constipation par épisodes.", p: 1 },
          { q: "Médication et aérosols : lesquels, quand, matériel propre ?", r: "Aérosols matin et soir ; à vérifier : ordre, hygiène du matériel.", p: 1 },
          { q: "Derniers examens : EFR, ostéodensitométrie, HPO ?", r: "EFR obstructive ; ostéodensitométrie et HPO à demander au dossier.", p: 2 },
          { q: "Entourage : fratrie, fumeurs, école ?", r: "Une petite sœur à la crèche (source d'infection) ; pas de fumeur.", p: 2 },
          { q: "Hygiène de vie : lavage de nez, hydratation, sommeil, chambre ?", r: "Lavage de nez irrégulier ; boit peu ; chambre à 21 °C.", p: 1 },
          { q: "Activité physique ?", r: "Football à l'école, s'essouffle et se fatigue vite.", p: 1 },
          { q: "Couleur préférée ?", r: "Sans intérêt.", p: 3 }
        ] },
        { type: "bilans", titre: "Bilans", consigne: "Choisis les bilans à réaliser, dans l'ordre.", ordre: ["Constat d'attitude", "Paramètres vitaux", "Examen respiratoire (auscultation, toux, sécrétions, peak flow)", "Ampliation et mobilité thoracique et des épaules", "Morpho-statique (cyphose)", "Test de la chaise (endurance)", "Douleur et fatigue"], items: [
          { b: "Constat d'attitude", r: "Arrive à pied, fatigué (cernes), nez encombré.", ok: true },
          { b: "Paramètres vitaux", r: "FC, FR (norme 20-30 à cet âge), SpO2, température.", ok: true },
          { b: "Examen respiratoire (auscultation, toux, sécrétions, peak flow)", r: "Crépitants aux bases, toux grasse, sécrétions épaisses et collantes, DEP diminué.", ok: true },
          { b: "Ampliation et mobilité thoracique et des épaules", r: "Ampliation diminuée, épaules enroulées.", ok: true },
          { b: "Morpho-statique (cyphose)", r: "Début d'hypercyphose dorsale.", ok: true },
          { b: "Test de la chaise (endurance)", r: "Endurance diminuée ; force « normalement OK ».", ok: true },
          { b: "Douleur et fatigue", r: "Pas de douleur ; fatigue en fin de journée (échelle adaptée à l'âge : EVA dès 6 ans).", ok: true },
          { b: "Score de Wang", r: "Réservé à la bronchiolite jusqu'à 24 mois.", ok: false },
          { b: "Test de Rosenthal", r: "Test du nourrisson ; à 9 ans on demande à l'enfant de se moucher et on regarde le nez.", ok: false }
        ] },
        { type: "choix", titre: "Objectifs", consigne: "Coche les objectifs justes.", src: "rp_pedia", items: [
          { t: "Désencombrer et améliorer la fonction respiratoire", ok: true },
          { t: "Éducation thérapeutique : drainage autogène, aérosols, compliance, hygiène du nez matin et soir, hydratation", ok: true },
          { t: "Activité physique régulière 3 fois par semaine, en surveillant la saturation", ok: true },
          { t: "Prévenir les troubles musculo-squelettiques (cyphose) et renforcer de façon ciblée", ok: true },
          { t: "Interdire le sport", ok: false, why: "Le sport aide au désencombrement et ralentit le déclin respiratoire." }
        ] },
        { type: "choix", titre: "Traitement", consigne: "Coche les techniques justes.", src: "rp_muco", items: [
          { t: "Drainage autogène (dès 5-6 ans) : descendre vers le VR, maintenir, remonter progressivement sans remonter d'un coup", ok: true },
          { t: "PEP et PEP oscillante (flutter) pour fluidifier", ok: true },
          { t: "Douche nasale et rinçage du nez", ok: true },
          { t: "Étirements de la chaîne antérieure, renforcement des rhomboïdes et érecteurs du rachis, mobilisations en extension", ok: true },
          { t: "Sports d'endurance sans impact, sports des membres supérieurs (hand)", ok: true },
          { t: "Drainage postural tête en bas prolongé", ok: false, why: "Favorise le RGO et l'hypoxie chez le muco ; le DA est préféré." }
        ] },
        { type: "lecture", titre: "D'où vient ce cas", html: `<p>Cas d'entraînement construit avec le cours RESPI PEDIA (anamnèse ciblée, bilans, objectifs, techniques, activité physique), la trame MSP RESPI, le CR 13/03/25 et la synthèse mucoviscidose. Les résultats chiffrés sont illustratifs. Pour la physiopathologie complète, voir la fiche Mucoviscidose.</p>` }
      ] },
    { id: "rp_c7", origine: "invente", src: ["rp_pedia", "rp_medic"], patient: "rp_p7", titre: "Enfant de 7 ans en crise d'asthme",
      fiche: "Enfant de 7 ans asthmatique connu, amené pour une gêne respiratoire depuis la nuit. Anamnèse, bilans, objectifs et traitement.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis les questions à poser, dans l'ordre.", items: [
          { q: "Depuis quand ? Toux la nuit ?", r: "Toux et sifflements depuis 2 h du matin.", p: 1 },
          { q: "Facteur déclenchant ?", r: "Rhume depuis 2 jours ; parents fumeurs à la maison.", p: 1 },
          { q: "Traitement de crise pris ? Combien de fois ? Avec chambre d'inhalation ?", r: "2 bouffées de bronchodilatateur sans chambre d'inhalation.", p: 1 },
          { q: "Antécédents familiaux d'asthme et d'allergie ?", r: "Père allergique.", p: 2 },
          { q: "Exacerbations antérieures, hospitalisations ?", r: "Une hospitalisation l'an dernier.", p: 2 },
          { q: "Sport ?", r: "Arrête le sport par peur des crises.", p: 2 },
          { q: "Groupe sanguin ?", r: "Sans intérêt.", p: 3 }
        ] },
        { type: "bilans", titre: "Bilans", consigne: "Choisis les bilans à réaliser, dans l'ordre.", ordre: ["Signes de gravité (parole, conscience, cyanose)", "Paramètres vitaux", "Signes de lutte", "Auscultation", "Score PRAM"], items: [
          { b: "Signes de gravité (parole, conscience, cyanose)", r: "Parle par phrases courtes, conscient, pas de cyanose.", ok: true },
          { b: "Paramètres vitaux", r: "FR 34 (norme 20-30), SpO2 94 %, FC 120.", ok: true },
          { b: "Signes de lutte", r: "Tirage sus-sternal discret.", ok: true },
          { b: "Auscultation", r: "Sibilants expiratoires diffus.", ok: true },
          { b: "Score PRAM", r: "Crise modérée (grille hors cours).", ok: true, tests: ["rp_pram"] },
          { b: "EFR complètes en pleine crise", r: "Les EFR objectivent la crise mais on ne retarde pas la prise en charge d'une crise ; à faire à distance pour le suivi.", ok: false },
          { b: "Score de Wang", r: "Score de la bronchiolite (jusqu'à 24 mois).", ok: false }
        ] },
        { type: "choix", titre: "Objectifs", consigne: "Coche les objectifs justes.", src: "rp_pedia", items: [
          { t: "Rassurer l'enfant et les parents", ok: true },
          { t: "Apprendre la gestion de la crise par la respiration abdominale", ok: true },
          { t: "Éducation thérapeutique : technique d'inhalation avec chambre, facteurs déclenchants (tabac)", ok: true },
          { t: "Contrôle de l'asthme et réentraînement à l'effort : rassurer sur la pratique sportive", ok: true },
          { t: "Désencombrer en urgence par ELPr intensive", ok: false, why: "Crise = bronchospasme ; la kiné vise le contrôle ventilatoire et l'éducation." }
        ] },
        { type: "choix", titre: "Traitement", consigne: "Coche les gestes justes.", src: "rp_medic", items: [
          { t: "Montrer l'aérosol doseur avec chambre d'inhalation (secouer, une bouffée, respirations lentes, chambre horizontale)", ok: true },
          { t: "Si corticoïde inhalé de fond : rincer la bouche", ok: true },
          { t: "Respiration abdominale calme pour diminuer le stress", ok: true },
          { t: "Conseiller de ne plus fumer à la maison", ok: true },
          { t: "Signaler au médecin si SpO2 < 92 %, impossibilité de parler ou troubles de conscience", ok: true },
          { t: "Inhalateur à poudre sèche pendant la crise chez cet enfant", ok: false, why: "La poudre demande un débit de 30-60 L/min, difficile en crise." }
        ] },
        { type: "lecture", titre: "D'où vient ce cas", html: `<p>Cas d'entraînement construit avec le cours RESPI PEDIA (définition, symptômes, étiologie, gravité, objectifs) et la synthèse médicaments (chambre d'inhalation). Valeurs illustratives. Le score PRAM est cité au cours sans grille : la grille est un complément hors cours.</p>` }
      ] }
  ];

  // =====================================================================
  // FICHE 3 : CARDIO (COURS LAMOTTE)
  // =====================================================================
  const car = {
    id: "rp_cardio", cell: "respi", titre: "Kiné cardio-respiratoire (cours Lamotte) : post-op chirurgie cardiaque, effort, réadaptation", court: "Cardio (Lamotte)",
    statut: "Contenu repris du cours de réadaptation cardiaque de M. Lamotte (76 pages) : blocs utiles en respi (KR post-op, aérosols, épreuves d'effort, test de marche, entraînement du BPCO) et cardiologie générale. Les 3 cas cliniques du cours n'ont pas de correction : la proposition donnée est construite à partir du cours. Tableau d'EFR en image non extrait.",
    resume: [
      "Post-op chirurgie cardiaque : KR dès la veille (chirurgie programmée) contre encombrement, atélectasies, hypoventilation ; contrôle de la douleur ; mobilisations ; déambulation.",
      "Sternotomie : pas de KR en décubitus latéral ni de pressions unilatérales fortes, exercices de bras symétriques. Mini-thoracotomie et endoscopie : toutes techniques possibles.",
      "Objectif avant la sortie : récupérer 70 à 80 % de la capacité vitale. Spiromètre incitatif : ± 30 % (J2), 40-50 % (J3), 50-60 % (J5), 70-80 % (fin de séjour) des valeurs pré-op.",
      "J0 : demi-assis, toux assistée, AFE ; J2 : 1re marche en chambre ; J3 : couloir ; J6 : vélo pour les pontés si pas de trouble du rythme depuis 24-48 h, Hb > 10, FC repos < 100.",
      "Aérosol : 8 L/min, 5-10 min max, vertical, respiration buccale, de préférence avant la kiné, pas dans l'heure avant le coucher.",
      "FA post-op : 1 patient sur 3 ; hors chirurgie mortalité x 2 et AVC x 5 : prendre le pouls.",
      "Ergospirométrie = gold standard (8-12 min, avec le traitement habituel). Limitation pulmonaire si on dépasse 45-75 % de la VMM (VMM ≈ VEMS x 40) ou désaturation d'effort. Arrêt si SpO2 ≤ 75 % (BPCO sévère, HTAP).",
      "TDM6 : non encouragé, 2-3 tests d'habituation, couloir 25-35 m, FC, SpO2, Borg ; IC < 350 m = 50 % de mortalité à 1 an ; très bon test de suivi.",
      "BPCO : 70 % des épreuves limitées par la fatigue périphérique et/ou la dyspnée ; force musculaire = très bon facteur pronostique ; interval training +++ (ex. 2 min à 80-90 % / 4 min à 60-70 %).",
      "Entraînement : 3 séances/semaine, 20 séances minimum, FC cible 70-85 % de la FCmax de l'épreuve ; renforcement 3 séries, 60-70 % 1RM, sans Valsalva.",
      "Infarctus : douleur, ECG, enzymes ; 15 à 30 % des STEMI font une insuffisance cardiaque à J1-J4 ; O2 2-5 L/min ; attention aux fractures de côtes après massage cardiaque."
    ],
    pro: [
      { id: "postop", titre: "1. Kiné respiratoire après chirurgie cardiaque : principes", src: ["rp_lamotte"], html:
        `<ul><li>Prise en charge dès l'événement aigu, voire <b>la veille</b> en chirurgie programmée (explications et démonstrations des exercices respiratoires).</li>
        <li>Pas de techniques très spécifiques : on lutte contre l'<b>encombrement bronchique</b>, les <b>atélectasies</b> et l'<b>hypoventilation</b>, fréquents en post-op, par la KR et l'aérosolthérapie (références : Reychler 2008, Antonello 2005, Pryor 2008, Smith 1998).</li>
        <li>Contribution au <b>contrôle de la douleur</b> (installation, prise raisonnée d'antalgiques) ; mobilisations passives (très peu) et actives au lit, au bord du lit, debout ; déambulation.</li>
        <li><b>La spécificité, c'est l'abord chirurgical</b> :</li></ul>
        ${T([["Sternotomie", "Éviter la KR en décubitus latéral et les pressions unilatérales importantes ; exercices de bras toujours symétriques"], ["Mini-thoracotomie (plastie mitrale, CIA, pontage unique)", "Toutes techniques possibles en tenant compte des cicatrices ; bras asymétriques possibles ; éviter au début les tractions fortes sur le bras du côté de la cicatrice"], ["Chirurgie endoscopique (pontage, resynchronisation)", "Toutes techniques possibles"]], ["Abord", "Conséquences en KR"])}
        <p>La <b>taille de la cicatrice n'est pas un bon indicateur</b> de la KR nécessaire : en mini-thoracoscopie, endoscopie ou cœur battant, le poumon gauche (parfois droit) est <b>déflaté</b> une partie de l'intervention.</p>
        <p><b>Objectif avant la sortie : récupérer environ 70 à 80 % de la capacité vitale</b>, quel que soit l'abord. Déambulation autonome classiquement après 3-4 jours ; séjour moyen en Europe d'environ 7 jours.</p>` },
      { id: "jours", titre: "2. Programme jour par jour", src: ["rp_lamotte"], html:
        `${T([
          ["Pré-op (veille)", "Pré-op 1 théorique (idéalement avec la famille : séjour, intervention, USI, retour, réadaptation, examens, équipe) ; pré-op 2 pratique (seul avec le malade) : respirations costales hautes, moyennes, abdominales, technique de toux, précautions (perroquet, exercices asymétriques, Valsalva), test du spiromètre ; rédiger la note kiné (obligation légale)"],
          ["J0 (réveil, SI)", "Sevrage : T-tube, gazométries, extubation ; KR en demi-assis ; toux assistée, AFE, expectoration ; mobilisations (passivo-)actives MS et MI"],
          ["J1 (retour en salle)", "Surveillance FC, TA, T°, drains, sonde, perfusions, télémétrie ; antidouleurs ; bas Kendall ; installation, KR demi-assis, toux assistée / AFE, mobilisations actives"],
          ["J2", "Retrait des drains, de la sonde, du masque à O2 ; spiromètre incitatif à ± 30 % des valeurs pré-op ; aérosols si besoin ; exercices au lit (bras symétriques si sternotomie) ; fauteuil ; 1re marche dans la chambre"],
          ["J3", "Toilette au cabinet de toilette ; IS 40-50 % ; exercices au pied du lit ; 1re marche dans le couloir, puis environ 1 fois toutes les 2 h"],
          ["J4", "Intensification des exercices"],
          ["J5", "Pansements, prise de sang, RX, ECG ; perfusion retirée, antidouleurs per os ; « syndrome du 5e jour » ; IS 50-60 % ; marche libre courte et fréquente (5-6 fois/jour)"],
          ["J6", "Pontés : vélo en salle si pas de trouble du rythme depuis 24-48 h, Hb &gt; 10, pas d'infarctus per-op, FC de repos &lt; 100, motivation ; valvulaires : en principe non"],
          ["Fin de séjour", "Marche hors du service, escaliers (12-24 marches), vélo si indiqué, IS 70-80 % ; conseils (charges, conduite, prescription de kiné) ; réadaptation après 4 sem. (coronariens) ou 4-6 sem. (valvulaires) ; RDV chirurgien à 6 semaines"]
        ], ["Jour", "Contenu"])}` },
      { id: "chir", titre: "3. Types de chirurgie et complications", src: ["rp_lamotte"], html:
        `<ul><li><b>Valvulaire</b> : sternotomie + CEC quasi toujours ; 8-10 j d'hospitalisation ; intervention ≈ 3 h ; 24 h en SI ; extubation 3-4 h après ; drains 24-48 h ; marche dès J2 ; <b>KR +++</b> ; réadaptation à 4-6 sem. ; récupération complète ≈ 6 mois ; troubles du rythme plus fréquents.</li>
        <li><b>Ministernotomie</b> : en théorie moins douloureuse et moins de complications respiratoires ; intéressante chez le diabétique et le <b>BPCO</b> ; pas d'avantage net sauf patients à haut risque.</li>
        <li><b>Pontage coronaire (CABG)</b> : 6-10 j ; 3-4 h ; extubation 3-4 h ; drains 24-48 h ; marche J2 ; KR +++ ; vélo éventuel J6 ; réadaptation à 4 sem. ; récupération ≈ 4 mois ; bras symétriques.</li>
        <li><b>Éviter la sternotomie</b> (défaut de consolidation chez diabétique, BPCO ; sterno-médiastinite : 80 % de décès non traitée contre 5 % avec lambeaux) et la <b>CEC</b> (inflammation générale : atteintes pulmonaires (ARDS), rénales, neurologiques jusqu'à 30 %). <b>MIDCAB</b> (incision 4-5 cm sous le mamelon), <b>OPCAB</b> (cœur battant ; attention au BPCO ; KR importante), <b>TECAB</b> (robot ; déflation du poumon gauche : KR importante, travail de l'épaule gauche).</li>
        <li><b>TAVI</b> : voie fémorale = peu de KR, marche le lendemain ; voie <b>trans-apicale</b> = ventilation sur le seul poumon droit + thoracotomie : KR importante.</li>
        <li><b>Transplantés</b> : ostéoporose, amyotrophie, HTA, insuffisance rénale, infections (anti-rejets). <b>Pacemaker / défibrillateur</b> : pas de bras au-dessus de l'horizontale pendant 4 semaines ; rassurer.</li>
        <li><b>Valves</b> : mécaniques (anticoagulants à vie, &gt; 20 ans, avant 65-70 ans) ; biologiques (pas d'anticoagulant, ≈ 15 ans, après 70 ans).</li></ul>
        <p><b>Complications</b> : cardio-vasculaires (traitement médical) ; <b>respiratoires</b> (souvent hémodynamiques, parfois ARDS ; KR en cas d'épanchement pleural, surtout drainé) ; neurologiques (≈ 10 %) ; rénales ; infectieuses (<b>sterno-médiastinite</b> : KR et mobilisation +++ après chirurgie lourde).</p>
        <p><b>Fibrillation auriculaire</b> : banale en post-op (1 patient sur 3), parfois asymptomatique ; hors chirurgie, mortalité x 2 et risque d'AVC x 5 : <b>prendre le pouls</b>.</p>
        <p><b>Aérosols (remarque du cours)</b> : savoir administrer efficacement ; avec le patient, sinon de préférence <b>avant</b> la kiné ; <b>8 L/min</b> d'air ; <b>5-10 min</b> max ; position verticale ; respiration buccale ; choix des produits ; expliquer, démontrer, accompagner, nettoyer ; pas dans l'heure avant le coucher.</p>` },
      { id: "effort", titre: "4. Épreuves d'effort, ergospirométrie, limitations", src: ["rp_lamotte"], html:
        `<ul><li><b>EFR</b> : valeurs mesurées, rapport mesuré / prédit, valeurs prédites (tableau en image).</li>
        <li><b>Ergospirométrie</b> (gold standard) : en plus de l'épreuve simple, VO2, VCO2, QR ; montre le facteur limitant ; FC (ECG), PA, SpO2, ventilation ; idéalement <b>8 à 12 min</b>, toujours avec le traitement habituel.</li>
        <li><b>Épreuve cardiologique</b> : monter la FC pour chercher une ischémie ; 20-40 % de faux négatifs, 10-15 % de faux positifs.</li>
        <li><b>Facteurs limitants</b> : pulmonaire, cardiaque, transport (limitation centrale), musculaire (périphérique), efficacité motrice ; chez le sujet sain : surtout cardiaque (70 %).</li>
        <li><b>Limitation pulmonaire</b> : de capacité (on n'utilise normalement que <b>45-75 % de la VMM</b> ; VMM ≈ <b>VEMS x 40</b>) ou d'efficacité (<b>désaturation à l'effort</b>, ERO2/ERCO2 élevés, PetCO2 basse au seuil).</li>
        <li><b>Limitation cardiaque</b> : plateau de VO2, FC proche de la FCmax, incompétence chronotrope (bêtabloquants), ECG, PA, pouls d'O2. <b>Périphérique</b> : grosse réserve cardiaque et ventilatoire, plaintes du patient.</li></ul>
        <p><b>Critères d'arrêt</b> : hémodynamiques (sous-décalage ST, troubles du rythme, réponse tensionnelle inadéquate) ; <b>respiratoires : réserve ventilatoire consommée (V'E ≈ VEMS x 40) ; SpO2 ≤ 75 %</b> (BPCO sévère, HTAP) ; cliniques : pâleur, sueurs, fatigue des jambes, inconfort respiratoire (dyspnée, irritation des VAS par respiration buccale), appréhension, motivation.</p>
        <p><b>Épreuve maximale</b> si : plateau de VO2, hyperventilation, ERO2 &gt; 40, <b>QR &gt; 1,15</b>, FCmax proche de la théorique, réserve ventilatoire consommée.</p>
        <p><b>Valeurs pronostiques</b> : VO2 pic &lt; 14 mL/kg/min ou &lt; 50 % du prédit ; seuil &lt; 40 % de la VO2 pic ou &lt; 11 mL/kg/min ; pente VE/VCO2 26-29 (&gt; 34 = pronostic +++) ; pouls d'O2 = témoin du VES ; chaque mL/kg/min de VO2 gagné = -10 % de mortalité cardiaque.</p>` },
      { id: "tests", titre: "5. Test de marche de 6 minutes et tests fonctionnels", src: ["rp_lamotte"], html:
        `<p><b>TDM6</b> : test <b>non encouragé</b> ; accompagné ou non ; <b>2 ou 3 tests d'habituation</b> ; annonces à 2 min, 4 min et stop ; standardiser température, revêtement, marquage, largeur, <b>aller-retour de 25 à 35 m</b> ; avec ou sans O2 ; suivre <b>FC, SpO2, Borg</b> à 0, 6 et + 2 min ou en continu. Chez l'insuffisant cardiaque, <b>&lt; 350 m = mortalité de 50 % à 1 an</b>. Il est « loin d'être sous-maximal » (VO2 et FC proches de l'ergospirométrie chez IC, BPCO) ; il ne renseigne ni sur l'ischémie, ni sur la PA, ni sur les seuils ; <b>très bon test de suivi</b>. Donnée HTAP (Deboeck 2005) : SpO2 76 % au TDM6 contre 86 % à l'ergospirométrie.</p>
        <p><b>Tests fonctionnels</b> (corrélation imparfaite avec l'ergospirométrie ; bons pour suivre l'évolution ; 3 essais, le meilleur compte, le plus vite possible) : floor rise to standing ; 6 m de marche arrière ; lever de chaise (<b>43 cm</b>, bras croisés) ; montée de 11 marches de 16 cm sans rampe ; 400 m (couloir de 20 m, 10 aller-retour). Autres : test en paliers, escaliers, Ruffier-Dickson, CT170. <b>Steep ramp test</b> si pas d'épreuve d'effort (FC pic proche).</p>` },
      { id: "entrain", titre: "6. Entraînement : endurance, interval training, renforcement", src: ["rp_lamotte"], html:
        `<p><b>Pneumologie</b> : la KR est bien ancrée ; la réadaptation physique s'est développée depuis ≈ 20 ans (sauf muco) ; sélection des patients ; équipes pluridisciplinaires (nutrition, aérosols, arrêt du tabac) ; <b>chez le BPCO, 70 % des épreuves sont limitées par la fatigue périphérique et/ou la dyspnée</b> ; la <b>force musculaire périphérique est un très bon facteur pronostique</b> (Marquis 2002) ; bénéfices « intensité-dépendants ». Corticoïdes : ostéoporose et amyotrophie, seul le renforcement les restaure.</p>
        <p><b>Interval training</b> : premières études chez les insuffisants respiratoires (Gimenez 1982) ; intensité plus haute, aérobie + anaérobie, plus de travail à temps égal, moins lassant. Rapport intense / facile <b>1/2</b> : <b>2 min à 80-90 % / 4 min à 60-70 %</b> ou 1 min à 90 % / 2 min à 60-70 % ; progression 2/4, 2/3, 2/2, 1/1.</p>
        <p><b>Continu</b> : FC entre <b>70 et 85 % de la FCmax atteinte à l'épreuve</b> (70-90 % selon l'ergomètre) ; 220 - âge très aléatoire chez le malade ; autres repères : <b>Borg</b>, saturation.</p>
        <p><b>Fréquence et durée</b> : <b>3 séances / semaine</b> (1-2 : petits bénéfices ; 4-7 : blessure, surentraînement) ; entretien 2/semaine ; <b>20 séances minimum</b> (+20 % ; 45 séances +30 %) ; 2/3 à 3/4 du temps en dynamique, le reste en renforcement ; échauffement et retour au calme.</p>
        <p><b>Renforcement</b> : force &gt; 80 % (6-8 rép.), puissance 60-80 % (8-15), résistance 40-60 % (15-30), endurance &lt; 40 % (&gt; 30) ; <b>3 séries</b> ; 60-70 % de la 1RM ; 48 h de récupération ; <b>éviter le Valsalva</b> (il augmente la pression intrathoracique, diminue la précharge, augmente la postcharge) ; récupération ≥ 1 min entre séries ; 2/3 endurance, 1/3 puissance ; puis assouplissements.</p>
        <p><b>Phases</b> : 1 hôpital (limiter les effets de l'alitement : muscle -1 %/jour, os -1 %/semaine, VO2max -1-2 %/jour) ; 2 centre / cabinet / domicile ; 3 entretien. 50 % du bénéfice est perdu en 3 mois d'inactivité.</p>
        <p><b>Risques</b> : 1 arrêt cardiaque / 112 000 h-patient en réadaptation ; plus de risque en salle de fitness qu'en centre. Chez le jeune, causes de décès à l'effort : anomalies congénitales non diagnostiquées, drogue, trauma.</p>` },
      { id: "cardio", titre: "7. Cardiologie générale utile au bilan", src: ["rp_lamotte"], html:
        `<ul><li><b>Angor</b> : stade I efforts inhabituels, II efforts habituels, III moindre effort, IV repos ; équivalents : dyspnée, fatigue, éructations, nausées à l'effort.</li>
        <li><b>NSTEMI</b> (3 fois plus fréquent, non transmural, réadaptation après 4-6 sem.) / <b>STEMI</b> (transmural, sus-décalage ST, réadaptation après 6 sem. ; <b>15 à 30 % font une insuffisance cardiaque à J1-J4</b>).</li>
        <li><b>Infarctus</b> : douleur intense continue, sueurs (9/10), nausées (1/2), essoufflement ; diagnostic = douleur + ECG + enzymes (troponine) ; diagnostics différentiels : névralgie intercostale, péricardite, zona, <b>embolie pulmonaire</b>, dissection aortique ; 20 % inapparents.</li>
        <li><b>Facteurs de risque</b> : tabac, lipides, hérédité, diabète, obésité, sédentarité, HTA, stress ; accessoires : <b>apnée du sommeil</b>, pollution, inflammation.</li>
        <li><b>Hospitalisation coronarienne</b> : <b>O2 2-5 L/min</b>, aspirine, bêtabloquant, IEC ; J1 : KR si nécessaire, traiter surinfection ou œdème ; <b>attention aux fractures de côtes après massage cardiaque</b> ; J2 fauteuil et 1re marche ; escalier J7.</li>
        <li><b>Valvulopathies</b> : sténose mitrale (dyspnée, FA, <b>œdème pulmonaire</b>) ; insuffisance mitrale (stase pulmonaire). Kiné du décompensé cardiaque âgé : KR, parfois aspiration, aérosols, mobilisations actives +++, déambulation, escaliers, réassurance.</li>
        <li><b>Insuffisance cardiaque</b> : NYHA 1 à 4 ; réadaptation fortement recommandée (mortalité -15 à 35 %).</li>
        <li>ECG 12 dérivations : P = dépolarisation auriculaire, QRS = ventriculaire, T = repolarisation.</li></ul>` }
    ]
  };

  car.qcm = [
    q("l1", "postop", "Quand commencer la KR en chirurgie cardiaque programmée ?", ["La veille de l'intervention"], ["Un mois après", "Seulement à la sortie", "Jamais avant J7"], "rp_lamotte"),
    q("l2", "postop", "Complications respiratoires visées en post-op (plusieurs réponses) :", ["Encombrement bronchique", "Atélectasies", "Hypoventilation"], ["Mucoviscidose"], "rp_lamotte"),
    q("l3", "postop", "Après sternotomie (plusieurs réponses) :", ["Éviter la KR en décubitus latéral", "Éviter les pressions unilatérales importantes", "Exercices de bras symétriques"], ["Bras asymétriques en force dès J1"], "rp_lamotte"),
    q("l4", "postop", "Après mini-thoracotomie :", ["Toutes techniques possibles en tenant compte des cicatrices ; bras asymétriques possibles"], ["Aucune KR possible", "Uniquement drainage postural", "Bras symétriques obligatoires à vie"], "rp_lamotte"),
    q("l5", "postop", "La taille de la cicatrice est-elle un bon indicateur de la KR nécessaire ?", ["Non : le poumon peut avoir été déflaté pendant l'intervention"], ["Oui, toujours", "Oui, sauf chez la femme", "Oui, si la cicatrice fait plus de 20 cm"], "rp_lamotte"),
    q("l6", "postop", "Capacité vitale à récupérer avant la sortie :", ["70 à 80 %"], ["20 à 30 %", "100 % obligatoirement", "40 %"], "rp_lamotte"),
    q("l7", "jours", "Spiromètre incitatif à J2 :", ["± 30 % des valeurs pré-op"], ["100 %", "70-80 %", "5 %"], "rp_lamotte"),
    q("l8", "jours", "Spiromètre incitatif à J3 :", ["40-50 % des valeurs pré-op"], ["± 30 %", "70-80 %", "90 %"], "rp_lamotte"),
    q("l9", "jours", "Spiromètre incitatif à J5 :", ["50-60 % des valeurs pré-op"], ["10 %", "40-50 %", "100 %"], "rp_lamotte"),
    q("l10", "jours", "Spiromètre incitatif en fin de séjour :", ["70-80 % des valeurs pré-op"], ["30 %", "50 %", "120 %"], "rp_lamotte"),
    q("l11", "jours", "Contenu de J0 en soins intensifs (plusieurs réponses) :", ["KR en demi-assis", "Toux assistée et AFE", "Sevrage : T-tube, gazométries, extubation"], ["Escaliers"], "rp_lamotte"),
    q("l12", "jours", "Première marche dans la chambre :", ["J2"], ["J0", "J10", "Après la sortie"], "rp_lamotte"),
    q("l13", "jours", "Première marche dans le couloir :", ["J3"], ["J0", "J1", "J14"], "rp_lamotte"),
    q("l14", "jours", "Conditions du vélo à J6 chez le ponté (plusieurs réponses) :", ["Pas de trouble du rythme depuis 24-48 h", "Hb supérieure à 10", "FC de repos inférieure à 100", "Pas d'infarctus per-opératoire"], ["Valvulaire avec sutures intracardiaques"], "rp_lamotte"),
    q("l15", "jours", "Nombre de marches d'escalier en fin de séjour :", ["12 à 24"], ["2", "200", "Aucune"], "rp_lamotte"),
    q("l16", "jours", "Contenu du pré-op pratique (plusieurs réponses) :", ["Respirations costales hautes, moyennes, abdominales", "Technique de toux", "Test du spiromètre"], ["Vélo à 100 W"], "rp_lamotte"),
    q("l17", "jours", "Pourquoi rédiger la note kiné en pré-op ?", ["Obligation légale et suivi du patient"], ["Pour la facture uniquement", "Ce n'est pas utile", "Pour le chirurgien seulement"], "rp_lamotte"),
    q("l18", "jours", "J5 en chirurgie cardiaque (plusieurs réponses) :", ["« Syndrome du 5e jour »", "Marche libre courte et fréquente (5-6 fois/jour)", "Relais oral des antidouleurs"], ["Extubation"], "rp_lamotte"),
    q("l19", "chir", "Extubation après chirurgie valvulaire ou pontage :", ["3-4 h après"], ["3-4 jours après", "Immédiatement au bloc toujours", "1 semaine après"], "rp_lamotte"),
    q("l20", "chir", "TAVI par voie trans-apicale : pourquoi la KR est-elle importante ?", ["Patient ventilé sur le seul poumon droit + thoracotomie"], ["Voie fémorale sans incision", "Aucune anesthésie", "Pas de ventilation"], "rp_lamotte"),
    q("l21", "chir", "TECAB (robot) : point respiratoire :", ["Déflation du poumon gauche : KR importante"], ["Aucune KR", "Pneumothorax droit systématique", "Sternotomie complète"], "rp_lamotte"),
    q("l22", "chir", "Mortalité d'une sterno-médiastinite non traitée :", ["80 %"], ["5 %", "1 %", "30 %"], "rp_lamotte", "5 % avec la technique des lambeaux."),
    q("l23", "chir", "Pacemaker : précaution :", ["Pas de bras au-dessus de l'horizontale pendant 4 semaines"], ["Pas de marche pendant 3 mois", "Pas de KR", "Décubitus ventral obligatoire"], "rp_lamotte"),
    q("l24", "chir", "Fibrillation auriculaire en post-op cardiaque :", ["Banale : environ 1 patient sur 3"], ["Exceptionnelle", "Toujours mortelle", "Uniquement chez l'enfant"], "rp_lamotte"),
    q("l25", "chir", "Hors contexte chirurgical, la FA multiplie (plusieurs réponses) :", ["La mortalité par 2", "Le risque d'AVC par 5"], ["La VO2 par 3", "La FR par 10"], "rp_lamotte"),
    q("l26", "chir", "Aérosol selon le cours Lamotte (plusieurs réponses) :", ["De préférence avant la kiné", "Pas dans l'heure qui précède le coucher", "5 à 10 min maximum"], ["Couché à plat pendant 1 heure"], "rp_lamotte"),
    q("l27", "chir", "Complication respiratoire où la KR est indiquée :", ["Épanchement pleural, surtout drainé"], ["Fibrillation auriculaire", "Insuffisance rénale", "Endocardite"], "rp_lamotte"),
    q("l28", "effort", "Gold standard de l'évaluation à l'effort :", ["L'ergospirométrie"], ["Le test de Ruffier", "Le Tinetti", "La spirométrie de repos"], "rp_lamotte"),
    q("l29", "effort", "Durée idéale d'une ergospirométrie :", ["8 à 12 minutes"], ["1 minute", "45 minutes", "2 heures"], "rp_lamotte"),
    q("l30", "effort", "Estimation de la VMM :", ["VEMS x 40"], ["VEMS x 4", "CV / 2", "FC x 40"], "rp_lamotte"),
    q("l31", "effort", "Part de la VMM utilisée normalement à l'effort maximal :", ["45 à 75 %"], ["100 %", "10 %", "150 %"], "rp_lamotte"),
    q("l32", "effort", "Signe de limitation pulmonaire par manque d'efficacité :", ["Désaturation à l'effort alors qu'il reste de la capacité"], ["FC qui atteint la FCmax", "Douleur dans les jambes", "QR à 1,2"], "rp_lamotte"),
    q("l33", "effort", "Critère d'arrêt respiratoire de l'épreuve d'effort (BPCO sévère, HTAP) :", ["SpO2 ≤ 75 %"], ["SpO2 ≤ 97 %", "FR à 20", "SpO2 ≤ 99 %"], "rp_lamotte"),
    q("l34", "effort", "Critère d'une épreuve maximale :", ["QR supérieur à 1,15"], ["QR à 0,7", "FC à 50 % de la théorique", "Aucune fatigue"], "rp_lamotte"),
    q("l35", "effort", "Limitation de l'homme sain à l'effort :", ["Surtout cardiaque (70 %)"], ["Surtout pulmonaire", "Surtout rénale", "Aucune"], "rp_lamotte"),
    q("l36", "effort", "Valeur pronostique de la VO2 pic défavorable :", ["Moins de 14 mL/kg/min"], ["Plus de 40 mL/kg/min", "Plus de 30 mL/kg/min", "60 mL/kg/min"], "rp_lamotte"),
    q("l37", "effort", "Faux négatifs de l'épreuve d'effort cardiologique :", ["20 à 40 %"], ["0 %", "90 %", "1 %"], "rp_lamotte"),
    q("l38", "tests", "TDM6 : encourage-t-on le patient ?", ["Non, le test est non encouragé (annonces du temps seulement)"], ["Oui, en criant", "Oui, à chaque tour", "Seulement à la dernière minute"], "rp_lamotte"),
    q("l39", "tests", "Longueur du couloir du TDM6 selon le cours :", ["Aller-retour de 25 à 35 m"], ["5 m", "100 m", "400 m"], "rp_lamotte"),
    q("l40", "tests", "Nombre de tests d'habituation au TDM6 :", ["2 ou 3"], ["Aucun", "10", "1 obligatoirement"], "rp_lamotte"),
    q("l41", "tests", "Paramètres suivis au TDM6 (plusieurs réponses) :", ["FC", "SpO2", "Échelle de Borg"], ["Glycémie"], "rp_lamotte"),
    q("l42", "tests", "TDM6 chez l'insuffisant cardiaque : distance de mauvais pronostic :", ["Moins de 350 m (50 % de mortalité à 1 an)"], ["Moins de 800 m", "Plus de 500 m", "Moins de 50 m seulement"], "rp_lamotte"),
    q("l43", "tests", "Principal intérêt du TDM6 selon le cours :", ["Très bon test de suivi de l'évolution clinique"], ["Il détecte l'ischémie", "Il mesure la PA d'effort", "Il donne les seuils ventilatoires"], "rp_lamotte"),
    q("l44", "tests", "Hauteur de chaise du test de lever de chaise :", ["43 cm, bras croisés"], ["20 cm", "60 cm avec accoudoirs", "Libre"], "rp_lamotte"),
    q("l45", "tests", "Tests fonctionnels : combien d'essais ?", ["3, le meilleur compte (sauf 400 m)"], ["1 seul", "10", "La moyenne de 5"], "rp_lamotte"),
    q("l46", "entrain", "Chez le BPCO, l'épreuve d'effort est limitée dans 70 % des cas par :", ["La fatigue périphérique et/ou la dyspnée"], ["Le cœur seul", "La douleur thoracique", "Les reins"], "rp_lamotte"),
    q("l47", "entrain", "Très bon facteur pronostique chez le BPCO selon le cours :", ["La force musculaire périphérique"], ["La couleur des crachats", "La taille", "La FC de repos"], "rp_lamotte"),
    q("l48", "entrain", "Rapport temps intense / facile en interval training en réadaptation :", ["1/2 (ex. 2 min à 80-90 % / 4 min à 60-70 %)"], ["3/1", "1/10", "Pas de récupération"], "rp_lamotte"),
    q("l49", "entrain", "Progression de l'interval training :", ["Réduire la récupération : 2/4, 2/3, 2/2, 1/1"], ["Augmenter la récupération", "Supprimer l'effort", "Passer à 10/1"], "rp_lamotte"),
    q("l50", "entrain", "FC cible en entraînement continu :", ["70 à 85 % de la FCmax atteinte à l'épreuve d'effort"], ["100 % de 220 - âge", "40 %", "120 %"], "rp_lamotte"),
    q("l51", "entrain", "Fréquence idéale d'entraînement :", ["3 séances par semaine"], ["1 par mois", "7 par semaine", "2 par jour"], "rp_lamotte"),
    q("l52", "entrain", "Nombre minimum de séances de réadaptation :", ["20"], ["2", "200", "5"], "rp_lamotte"),
    q("l53", "entrain", "Pourquoi éviter le Valsalva en renforcement ? (plusieurs réponses)", ["Il augmente la pression intrathoracique", "Il diminue la précharge et augmente la postcharge"], ["Il améliore le débit cardiaque", "Il est recommandé chez le cardiaque"], "rp_lamotte"),
    q("l54", "entrain", "Charge optimale de renforcement :", ["60 à 70 % de la 1RM, 3 séries"], ["100 % de la 1RM, 10 séries", "5 % de la 1RM", "Sans charge uniquement"], "rp_lamotte"),
    q("l55", "entrain", "Perte musculaire liée à l'alitement :", ["Environ 1 % par jour"], ["10 % par heure", "1 % par an", "Aucune"], "rp_lamotte"),
    q("l56", "entrain", "Perte du bénéfice après 3 mois d'inactivité :", ["50 %"], ["0 %", "100 % en 1 semaine", "5 %"], "rp_lamotte"),
    q("l57", "entrain", "Causes de décès à l'effort chez le jeune (plusieurs réponses) :", ["Anomalies congénitales non diagnostiquées", "Drogue", "Trauma"], ["Athérosclérose dans 88 % des cas"], "rp_lamotte"),
    q("l58", "cardio", "Angor stade III :", ["Au moindre effort"], ["Au repos", "Aux efforts inhabituels", "Aux efforts habituels"], "rp_lamotte"),
    q("l59", "cardio", "Diagnostic de l'infarctus repose sur (plusieurs réponses) :", ["La douleur", "L'ECG", "Les enzymes cardiaques (troponine)"], ["La spirométrie"], "rp_lamotte"),
    q("l60", "cardio", "Proportion de STEMI qui font une insuffisance cardiaque à J1-J4 :", ["15 à 30 %"], ["90 %", "1 %", "0 %"], "rp_lamotte"),
    q("l61", "cardio", "Débit d'O2 à l'hospitalisation coronarienne :", ["2 à 5 L/min"], ["15 L/min au masque à réserve", "50 L/min Optiflow", "Pas d'O2"], "rp_lamotte"),
    q("l62", "cardio", "Précaution kiné à J1 après un massage cardiaque :", ["Attention aux fractures de côtes"], ["Clapping vigoureux", "Pressions thoraciques fortes", "Décubitus ventral"], "rp_lamotte"),
    q("l63", "cardio", "Diagnostic différentiel respiratoire de l'infarctus :", ["L'embolie pulmonaire"], ["La bronchiolite", "La mucoviscidose", "L'asthme du nourrisson"], "rp_lamotte"),
    q("l64", "cardio", "Valvulopathie qui donne un œdème pulmonaire et une FA :", ["La sténose mitrale"], ["La sténose pulmonaire", "L'insuffisance tricuspide isolée", "Aucune"], "rp_lamotte"),
    q("l65", "cardio", "Facteur de risque CV accessoire lié au sommeil :", ["Le syndrome d'apnée du sommeil"], ["La sieste", "L'insomnie d'endormissement", "Le ronflement de l'enfant"], "rp_lamotte"),
    q("l66", "cardio", "ECG : l'onde P correspond à :", ["La dépolarisation auriculaire"], ["La repolarisation ventriculaire", "La dépolarisation ventriculaire", "La fermeture des valves"], "rp_lamotte")
  ];

  car.patients = [
    { id: "rp_p8", nom: "Homme de 60 ans · post-pontage tri-tronculaire (cas 1 du cours Lamotte)", origine: "cours", src: "rp_lamotte", desc: "Infarctus le 5/2/2010, pontages le 5/3/2010, sortie le 11/3/2010, réadaptation ambulatoire. FEVG 30 %, BMI 32, pré-diabète, tabac, HTA, cholestérol, arthrose lombaire. Essoufflé aux efforts modérés. Ergospiro : 120 W, VO2 70 % du prédit, QRmax 1,16, FCmax 100, PA max 230/80 ; limitation : jambes puis dyspnée.", attrs: { dyspnee: true, cicatrices: [{ zone: "thorax", recent: true, horiz: false, long: 20, note: "sternotomie (pontage)" }], douleurs: [{ zone: "lombaire", type: "mecanique", eva: 3 }] } },
    { id: "rp_p9", nom: "Femme de 40 ans · obésité sévère (cas 2 du cours Lamotte)", origine: "cours", src: "rp_lamotte", desc: "Adressée pour perte de poids (prise progressive depuis son dernier enfant il y a 7 ans). HTA traitée, diabète, BMI 37 (104 kg), tabac, gonarthrose, périarthrite scapulo-humérale. Dyspnéique aux efforts légers, très fatiguée. Ergospiro : 60 W, VO2 50 % du prédit, QRmax 1,03, FCmax 120, PA max 220/90 ; limitation : fatigue (motivation ?) puis dyspnée.", attrs: { dyspnee: true, fatigue: true } },
    { id: "rp_p10", nom: "Femme de 75 ans · BPCO cachectique déconditionnée (cas 3 du cours Lamotte)", origine: "cours", src: "rp_lamotte", desc: "6 semaines de SI puis d'hospitalisation pour perforation du grêle. Adressée pour fatigue, déconditionnement, amyotrophie, ostéoporose. Cachexie (BMI 17, 47 kg), tabac, BPCO. Ergospiro : 40 W, VO2 55 % du prédit, QRmax 1,18, épuisement de la réserve ventilatoire, PA max 190/80 ; limitation : jambes puis dyspnée.", attrs: { dyspnee: true, fatigue: true, tonneau: true, levres: true } }
  ];

  car.cas = [
    { id: "rp_c8", origine: "cours", src: ["rp_lamotte"], patient: "rp_p10", titre: "Femme de 75 ans BPCO, cachexie, déconditionnement (cas 3 Lamotte)",
      fiche: "Femme de 75 ans BPCO, cachectique (BMI 17), après 6 semaines de soins intensifs et d'hospitalisation. Tout le matériel que vous voulez : quel traitement idéal en 5 points clés pour une séance de 45 minutes ?",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis les informations utiles, dans l'ordre.", items: [
          { q: "Motif d'adressage ?", r: "Fatigue, déconditionnement, amyotrophie, ostéoporose.", p: 1 },
          { q: "Histoire récente ?", r: "Long séjour en SI pour perforation du grêle puis hospitalisation : 6 semaines au total.", p: 1 },
          { q: "Facteurs de risque ?", r: "Cachexie (BMI 17, 47 kg), tabac, BPCO, ostéoporose aux sites habituels.", p: 1 },
          { q: "Traitement ?", r: "Classique (non détaillé).", p: 2 },
          { q: "Résultats d'ergospirométrie ?", r: "40 W ; VO2 55 % du prédit ; QRmax 1,18 ; épuisement de la réserve ventilatoire ; PA max 190/80 ; limitation : 1. jambes, 2. dyspnée.", p: 1 },
          { q: "Couleur de sa voiture ?", r: "Sans intérêt.", p: 3 }
        ] },
        { type: "choix", titre: "Interprétation", consigne: "Coche les interprétations justes.", src: "rp_lamotte", items: [
          { t: "QR 1,18 > 1,15 : épreuve maximale", ok: true },
          { t: "Réserve ventilatoire épuisée : limitation pulmonaire de capacité", ok: true },
          { t: "Mais l'arrêt est d'abord dû aux jambes : fatigue périphérique (70 % des BPCO)", ok: true },
          { t: "Le cœur est le seul facteur limitant", ok: false, why: "Limitation périphérique puis ventilatoire." }
        ] },
        { type: "choix", titre: "Traitement (5 points clés)", consigne: "Coche ce qui est justifié par le cours.", src: "rp_lamotte", items: [
          { t: "Interval training sur ergomètre (ex. 1 min intense / 2 min facile), guidé par Borg et SpO2 plutôt que par 220 - âge", ok: true },
          { t: "Renforcement musculaire des grands groupes (3 séries, 60-70 % 1RM, sans Valsalva) : seul moyen de restaurer masse musculaire et densité osseuse", ok: true },
          { t: "Surveillance de la saturation et de la dyspnée pendant l'effort (SpO2 ≤ 75 % = arrêt)", ok: true },
          { t: "Équipe pluridisciplinaire : nutrition (cachexie), arrêt du tabac, aérosols", ok: true },
          { t: "Échauffement et retour au calme (étirements, relaxation) ; 3 séances par semaine, au moins 20 séances", ok: true },
          { t: "Repos strict pour éviter la fatigue", ok: false, why: "L'alitement aggrave l'amyotrophie (≈ -1 %/jour)." }
        ] },
        { type: "lecture", titre: "Correction", html: `<p>Le cours ne donne <b>aucune correction</b> pour ses 3 cas. Proposition construite à partir du cours : endurance par interval training, renforcement (prioritaire chez une cachectique ostéoporotique sous corticoïdes éventuels), surveillance SpO2 / Borg, prise en charge pluridisciplinaire, régularité (3 par semaine, 20 séances minimum).</p>` }
      ] }
  ];

  // =====================================================================
  // ENREGISTREMENT
  // =====================================================================
  for (const p of [bro, ped, car]) M.PATHOS[p.id] = p;
  const respi = M.CELLS.find(c => c.id === "respi");
  if (respi) {
    for (const p of [bro, ped, car]) if (!respi.pathos.includes(p.id)) respi.pathos.push(p.id);
    if (Array.isArray(respi.bientot)) respi.bientot = respi.bientot.filter(x => !/bronchiolite/i.test(x));
  }

  (M.REMARQUES = M.REMARQUES || []).push(
    { g: "Contradictions entre supports", t: "Bornes du score de Wang", s: "rp_cr1911", txt: "Selon les supports : léger 0-3 / modéré 4-8 / sévère 9-12, ou léger < 4 / modéré 4-7 / sévère > 7 (ou ≥ 9). Retiens la version du CR 2026-27 et précise la grille employée." },
    { g: "Contradictions entre supports", t: "Wang 4 qualifié de « léger » (rapport de stage)", s: "rp_rapport", txt: "Le rapport de stage classe un Wang à 4 en bronchiolite légère, alors que 4 = modéré dans la grille du cours. Retiens : 4 = modéré." },
    { g: "Contradictions entre supports", t: "HAS 2019 : kiné et bronchiolite modérée", s: "rp_cr1911", txt: "HAS 2019 : pas de kiné de désencombrement bronchique pour un 1er épisode chez le nourrisson de moins de 12 mois ; clapping, vibrations, drainage postural et techniques de flux rapide sont contre-indiqués. Les cours proposent une kiné dès la forme modérée (Wang 4 à 8), avec l'ELPr comme technique de référence. À l'oral, cite la HAS, puis justifie ta séance par la clinique (encombrement gênant, sommeil et alimentation perturbés)." },
    { g: "Contradictions entre supports", t: "Nombre de cycles du test de Rosenthal", s: "rp_cr1911", txt: "CR 2026-27 : une quinzaine de cycles bouche fermée. Les autres supports donnent 15 à 20, 20 ou 10 à 20 cycles. Retiens la version du CR 2026-27." },
    { g: "Contradictions entre supports", t: "Perte de poids : seuil de gravité 5 % ou 10 % ?", s: "rp_msbronch", txt: "Selon le support, une perte de poids de 5 % ou de 10 % est un critère de gravité. Cite les deux et privilégie le seuil du cours de ton prof." },
    { g: "Contradictions entre supports", t: "Alimentation : moins de 50 % ou « au-delà de 50 % » ?", s: "rp_cr1911", txt: "Critère HAS : alimentation inférieure à 50 % des apports habituels sur 3 prises ou 12 h. Une synthèse écrit « perte au-delà de 50 % » : c'est la même idée formulée à l'envers." },
    { g: "Contradictions entre supports", t: "Seuils de SpO2", s: "rp_cr1911", txt: "Classification reprise au cours : légère > 92 %, modérée 90 à 92 %, grave ≤ 90 % (éveil, air ambiant). D'autres supports donnent < 92 %, 94 % ou 95 % comme seuil d'alerte. Retiens la classification du cours et cite la source." },
    { g: "Contradictions entre supports", t: "Surfactant : début de production", s: "rp_crombin", txt: "Les supports parlent d'un surfactant produit dès 24-27 SA, « terminé » à 27 SA ou mature vers 28-34 SA. La production commence vers 24-28 SA et devient suffisante vers 34-36 SA ; « terminé à 27 SA » est faux." },
    { g: "Contradictions entre supports", t: "Respiration nasale exclusive : jusqu'à 4 ou 6 mois ?", s: "rp_pedia", txt: "Respiration nasale préférentielle jusqu'à 4 mois selon un support, 6 mois selon un autre. Retiens : nourrisson à respiration nasale préférentielle durant les premiers mois (environ 4-6 mois), d'où l'importance de la DRP." },
    { g: "Contradictions entre supports", t: "ELTGOL chez l'enfant : dès 7-8 ans ou CI avant 12 ans ?", s: "rp_techkr", txt: "Un support permet l'ELTGOL dès 7-8 ans (enfant coopérant), un autre le déconseille avant 12 ans. Retiens : technique qui demande une coopération active, réservée à l'enfant plus grand, à adapter à l'enfant." },
    { g: "Contradictions entre supports", t: "Corticoïdes et bronchodilatateurs dans la bronchiolite", s: "rp_cr1911", txt: "Une note dit que le bébé reçoit « normalement » des bronchodilatateurs ou des corticoïdes ; la HAS 2019 les déclare sans intérêt dans la bronchiolite. Retiens la HAS : pas de bronchodilatateur ni de corticoïde en routine." },
    { g: "Contradictions entre supports", t: "Ordre aérosol, auscultation, désencombrement", s: "rp_cr2003", txt: "Selon les notes : aérosol avant la kiné, ou auscultation avant et après. Logique proposée : ausculter, puis aérosol (si prescrit), puis désencombrement, puis réausculter pour objectiver l'effet." },
    { g: "Contradictions entre supports", t: "ELPr : jusqu'au VR ou dans le VRE ?", s: "rp_techkr", txt: "L'ELPr est décrite comme une expiration lente menée « jusqu'au VR » ou « dans le VRE ». Les deux décrivent une expiration lente prolongée qui va au-delà du volume courant, dans le VRE, vers le VR." },
    { g: "Contradictions entre supports", t: "Position de l'ELPr : proclive ou décubitus dorsal", s: "rp_msbronch", txt: "Bébé en DD sur table plane selon le cours, en proclive selon une autre note. Le proclive léger peut aider en cas de RGO ; garde le DD comme position de référence." },
    { g: "Contradictions entre supports", t: "Prématurité comme facteur de risque", s: "rp_pedia", txt: "Les seuils varient selon les supports : < 34 SA, < 36 SA, ou ≤ 34 SA avec oxygéno-dépendance néonatale > 28 jours (RESPI PEDIA). Retiens la formulation du RESPI PEDIA et cite le seuil de ton prof." },
    { g: "Contradictions entre supports", t: "Aérosol : moment de la journée", s: "rp_lamotte", txt: "Cours Lamotte (adulte) : aérosol de préférence avant la kiné et pas dans l'heure qui précède le coucher. Notes bronchiolite : « aérosol avant les repas et le sommeil ». Ce sont deux contextes différents ; chez le nourrisson, suis la prescription et le cours de pédiatrie." },
    { g: "Contradictions entre supports", t: "Test de la sueur : 60 mEq/L ou 59 mmol/L ?", s: "rp_muco", txt: "Positif si chlore ≥ 60 mmol/L (= mEq/L) ; la trame et une synthèse écrivent « > 59 mmol/L ». Retiens ≥ 60 mmol/L (zone intermédiaire 30-59)." },
    { g: "À vérifier avec tes profs", t: "Pneumonie de l'enfant : FR 60 ou 70 ?", s: "rp_pedia", txt: "Le cours cite des seuils de FR (60 / 70) sans préciser l'âge. Les seuils OMS de tachypnée sont ≥ 60 avant 2 mois, ≥ 50 de 2 à 12 mois, ≥ 40 de 1 à 5 ans. Demande quels seuils sont attendus." },
    { g: "À vérifier avec tes profs", t: "Antibiotique (Josacine) et « fièvre légère » à 39-40 °C", s: "rp_cr2702", txt: "Le cas du bébé de 6 mois mentionne une Josacine (antibiotique) alors que la bronchiolite est virale (antibiotique seulement si surinfection) et qualifie une fièvre de 39-40 °C de « légère ». Demande le contexte (otite, surinfection ?)." },
    { g: "Erreurs repérées", t: "« FR > 180 / < 80 » : il s'agit de la FC", s: "rp_msbronch", txt: "Une synthèse note « FR > 180 ou < 80 » comme critère de gravité. Ces valeurs correspondent à la FC du nourrisson (tachycardie > 180, bradycardie < 80) ; une FR de 180 est impossible." },
    { g: "Erreurs repérées", t: "Température de fièvre", s: "rp_cr2702", txt: "Les notes ne donnent pas toutes le même seuil (37,8 °C, 38,5 °C). RESPI PEDIA : fièvre si > 38 °C. Retiens > 38 °C (température rectale chez le nourrisson)." },
    { g: "Erreurs repérées", t: "Sibilances décrites comme des « craquements »", s: "rp_rapport", txt: "Les sibilances sont des bruits continus, musicaux, aigus (obstruction bronchique), pas des craquements (bruits discontinus). Ne mélange pas les deux." },
    { g: "À vérifier avec tes profs", t: "Cas inventé : FR 28, FC 180, fontanelle", s: "rp_wallace", txt: "Dans ton cas inventé, une FR de 28 chez un bébé de 6 mois en détresse est basse (normale 30 à 40 selon le RESPI PEDIA, < 30 = signe de gravité ; on attend plutôt une tachypnée) ; une FC de 180 est à la limite haute ; la fontanelle bombée ou déprimée doit être précisée (déshydratation = déprimée). À corriger avant de t'en servir." },
    { g: "À vérifier avec tes profs", t: "Diaphragme du nourrisson : quel type de fibres ?", s: "rp_pedia", txt: "Le cours parle de muscles « riches en fibres rapidement fatigables » sans préciser le type. Complément hors cours : le diaphragme du nourrisson contient peu de fibres de type I (endurantes), d'où sa fatigabilité. Fais confirmer le type de fibres attendu." },
    { g: "Erreurs repérées", t: "Cours Lamotte : angor stable et instable mélangés", s: "rp_lamotte", txt: "Une diapo mélange les stades de l'angor stable (classification à l'effort) et l'angor instable (de repos, urgence). L'angor instable n'est pas un « stade IV » d'angor stable." },
    { g: "À vérifier avec tes profs", t: "Cours Lamotte : STEMI et onde Q", s: "rp_lamotte", txt: "Le cours associe STEMI et onde Q. Le STEMI se définit par le sus-décalage du segment ST ; l'onde Q est une séquelle de nécrose, qui peut apparaître ensuite." },
    { g: "Contradictions entre supports", t: "TDM6 : sous-maximal ou non ?", s: "rp_lamotte", txt: "Le TDM6 est souvent présenté comme sous-maximal, mais le cours Lamotte dit qu'il est « loin d'être sous-maximal » chez l'IC et le BPCO. Retiens la nuance du cours." },
    { g: "Erreurs repérées", t: "Cours Lamotte : « 4 - 2 semaines »", s: "rp_lamotte", txt: "Une diapo donne un délai de « 4 - 2 semaines », sans doute une coquille pour 4 à 6 semaines (délai de réadaptation après chirurgie valvulaire)." },
    { g: "À vérifier avec tes profs", t: "Test de Gudin et noms des scores", s: "rp_pedia", txt: "Le cours cite le test de Gudin sans l'expliquer ; il n'a pas été mis en QCM. Les grilles de Wang, de Silverman et le score PRAM sont des images absentes des notes : les grilles de l'app sont un complément hors cours." }
  );
})();
