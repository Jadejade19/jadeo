"use strict";
// MSP Respi : oxygénothérapie, VNI (CPAP, BiPAP) et ventilation invasive en réanimation.
// Sources : CR MSP 2026-27 (ventilation mécanique 19/11, auscultation 12/11, OAP 22/10, BPCO 15/10, pneumothorax 24/09 et 01/10, cours 2),
// cours de base (Duprez, Mode d'emploi réa, VI, VNI_CAS_GAZO, Oxygénothérapie, PEEP intrinsèque, Examens-Bilans, scaillet), CR 2024-25,
// notes de Lise, synthèses d'étudiants (Résumé réa BK3, RESPI4, Connaissances fondamentales) et rapports de stage.
(function () {
  const M = window.MSPDATA; if (!M) return;
  const LIB = "Bibliothèque MSP › ";
  const S = (k, t, f, kind) => (M.SRC[k] = { t, k: kind || "Cours respi", f: f ? LIB + f : undefined });
  const A = "03_RESPI › A_Comptes rendus MSP 2026-27 (cette annee) › ";
  const B = "03_RESPI › B_Comptes rendus MSP annees precedentes › Notes de cours MSP 2024-25 › ";
  const L = "03_RESPI › B_Comptes rendus MSP annees precedentes › Notes de cours MSP de Lise (annee anterieure) › ";
  const P = "03_RESPI › B_Comptes rendus MSP annees precedentes › ";
  const C = "03_RESPI › C_Cours de base et fiches de cours › ";
  const D = "03_RESPI › D_Syntheses et fiches d'etudiants › ";
  const E = "03_RESPI › E_Rapports de stage (exemples) › ";
  // CR 2026-27
  S("rv_cr1911vm", "Ventilation mécanique (cours du 19/11/2026)", A + "2026-11-19 - Respi - Ventilation mecanique (cours).pdf", "CR 2026-27");
  S("rv_cr1911vp", "Ventilation à pression positive + cas (19/11/2026)", A + "2026-11-19 - Respi - Ventilation positive + cas.docx", "CR 2026-27");
  S("rv_cr1211", "Auscultation, prone et cas BPCO obèse (12/11/2026)", A + "2026-11-12 - Respi - Auscultation.pdf", "CR 2026-27");
  S("rv_cr2210", "Cas OAP-ARDS 82 ans et BPCO intubé (22/10/2026)", A + "2026-10-22 - Respi - Cas OAP - ARDS (82 ans).odt", "CR 2026-27");
  S("rv_cr1510", "Cas BPCO GOLD 4 hospitalisé, Optiflow (15/10/2026)", A + "2026-10-15 - Respi - Cas BPCO gold 4 hospitalise.pdf", "CR 2026-27");
  S("rv_cr0110", "Cours 2 pneumothorax, CPAP et VNI (01/10/2026)", A + "2026-10-01 - Respi - Cours 2 pneumothorax.docx", "CR 2026-27");
  S("rv_cr2409", "Pneumothorax + notes (24/09/2026)", A + "2026-09-24 - Respi - Pneumothorax + notes.docx", "CR 2026-27");
  S("rv_cours2", "Cours 2 ventilation, physiologie (2026)", A + "2026 - Respi - Cours 2 ventilation (physiologie).pdf", "CR 2026-27");
  // Cours de base
  S("rv_duprez", "Cours respi de M. Duprez", C + "RESPI DUPREZ.docx");
  S("rv_modeemploi", "Mode d'emploi de la réanimation", C + "MODE D'EMPLOI REA.docx");
  S("rv_acronymes", "Acronymes de réanimation", C + "Acronymes.docx");
  S("rv_ficherespi", "Fiche respi", C + "FICHE RESPI.docx");
  S("rv_vnigazo", "VNI et cas de gazométrie", C + "VNI_CAS_GAZO.docx");
  S("rv_ventilart", "Ventilation artificielle", C + "VENTILATION ARTIFICIELLE.docx");
  S("rv_vi", "Ventilation invasive (VI)", C + "VI.docx");
  S("rv_oxy", "Oxygénothérapie", C + "Oxygénothérapie.docx");
  S("rv_peepi", "La PEEP intrinsèque", C + "4.5 La Peep intrinsèque.docx");
  S("rv_bilans", "Examens, bilans, conception et mise au point du traitement", C + "Examens-Bilans - Conception mise au point TTT.docx");
  S("rv_recap", "Récapitulatif des cas", C + "RECAP CAS.docx");
  S("rv_scaillet", "Synthèse de bilan en réanimation (cours scaillet)", C + "scaillet jado.docx");
  S("rv_positions", "Les positions", C + "Les positions.docx");
  // CR des années précédentes
  S("rv_cr240926", "VNI, groupe A (26/09/2024)", B + "24.09.26_GroupeA_VNI .pdf", "CR années précédentes");
  S("rv_cr241004", "Ventilation invasive et radio, groupe A (04/10/2024)", B + "24.10.04_GroupeA_Ventilation ivasive et Radio .pdf", "CR années précédentes");
  S("rv_cr241010", "VNI, groupe C (10/10/2024)", B + "24.10.10_groupe C_VNI.pdf", "CR années précédentes");
  S("rv_cr241017", "Ventilation invasive, groupe C (17/10/2024)", B + "24.10.17_Groupe-C_Ventilation-invasive.pdf", "CR années précédentes");
  S("rv_cr241024", "VNI, groupe D (24/10/2024)", B + "24.10.24_groupe D_ VNI.pdf", "CR années précédentes");
  S("rv_cr241107", "Ventilation invasive, groupe D (07/11/2024)", B + "24.11.07_Groupe D_Ventilation invasive.pdf", "CR années précédentes");
  S("rv_cr241114", "Pratique simulée respi, groupe C (14/11/2024)", B + "24.11.14_Groupe C_Pratique Simulée Respi.pdf", "CR années précédentes");
  S("rv_cr241121", "Pratique simulée respi, groupe C (21/11/2024)", B + "24.11.21_Groupe C_Pratique Simulée respi.pdf", "CR années précédentes");
  S("rv_cr241128", "VNI et ventilation invasive, groupe B (28/11/2024)", B + "24.11.28_Groupe B_Ventilation non invasive et invasive.pdf", "CR années précédentes");
  S("rv_cr241205", "Radio et cas clinique, groupe B (05/12/2024)", B + "24.12.05_Groupe B_ Radio et cas clinique.pdf", "CR années précédentes");
  S("rv_cr241212", "Cas cliniques polytrauma et choc septique (12/12/2024)", B + "24.12.12_GROUPE A_cas clinique.pdf", "CR années précédentes");
  S("rv_cr241219", "AVC en réanimation (19/12/2024)", B + "24.12.19-Groupe B_AVC en réanimation.pdf", "CR années précédentes");
  S("rv_cr250213", "Cas cliniques, pancréatite en réa (13/02/2025)", B + "25.02.13_groupe D - cas cliniques.pdf", "CR années précédentes");
  S("rv_cr250220", "Cas cliniques MACROVIE (20/02/2025)", B + "25.02.20 - Groupe D - Cas cliniques MACROVIE.pdf", "CR années précédentes");
  S("rv_cr250313", "Syndrome restrictif, mucoviscidose, rappels (13/03/2025)", B + "25.03.13_Groupe B_Syndrome Restrictif _ Mucoviscidose _ Rappels.pdf", "CR années précédentes");
  S("rv_cr250320", "Bronchiolite et soins intensifs, fausse route (20/03/2025)", B + "25.03.20_Groupe C bronchiolite et soins intensifs.pdf", "CR années précédentes");
  S("rv_cr250327", "Cas cliniques, hypercapnie post-hystérectomie (27/03/2025)", B + "25.03.27_Groupe C_ Cas cliniques.pdf", "CR années précédentes");
  S("rv_cr250403", "Pratique simulée, aspiration et arrêt cardiaque (03/04/2025)", B + "25.04.03_Groupe B_ Pratique simulée.pdf", "CR années précédentes");
  S("rv_cr250417", "Cas clinique réa et urgence + théorie (17/04/2025)", B + "25.04.17_Groupe A_Cas clinique réa et urgence + théorie.pdf", "CR années précédentes");
  S("rv_cr250424", "Cas clinique réa (24/04/2025)", B + "25.04.24_Groupe A_Cas clinique réa.pdf", "CR années précédentes");
  S("rv_cr250515", "Cas clinique patiente de 86 ans (15/05/2025)", B + "25.15.05_GROUPE D_Cas clinique .pdf", "CR années précédentes");
  S("rv_msp1203", "Prise de notes MSP respi du 12/03", P + "Prises de notes diverses › MSP respi 12.03.docx", "CR années précédentes");
  S("rv_notesrea", "Prise de notes MSP respi (bilan et réa)", P + "Prises de notes diverses › Prise  de note cours MSP respi (bilan et réa).docx", "CR années précédentes");
  S("rv_msprespi", "Mes notes 2024-25, MSP respi", P + "Mes notes 2024-25 › MSP RESPI.docx", "CR années précédentes");
  S("rv_geria", "Mes notes 2024-25, MSP respi-géria", P + "Mes notes 2024-25 › MSP RESPI-GERIA.docx", "CR années précédentes");
  // Notes de Lise
  S("rv_lisevi", "La VI et la VNI (notes 04/04)", L + "0404 la VI et la VNI.docx", "CR années précédentes");
  S("rv_lise2103", "Dyspnée BPCO (notes 21/03)", L + "2103 dyspnée BPCO.docx", "CR années précédentes");
  S("rv_lise3011", "BPCO, chirurgie abdominale, intubé (notes 30/11)", L + "3011 BPCO + chirurgie abdo + intubé.docx", "CR années précédentes");
  S("rv_lise1502", "Bradycardie post-op (notes 15/02)", L + "1502 bradycardie post op.docx", "CR années précédentes");
  S("rv_lise1804", "Détresse respiratoire (notes 18/04)", L + "1804 détresse respi.docx", "CR années précédentes");
  S("rv_lise2504", "Désaturation au bloc (notes 25/04)", L + "2504 désaturation au bloc.docx", "CR années précédentes");
  S("rv_lisetrame", "Trame à suivre (notes 29/02)", L + "2902 trame à suivre.docx", "CR années précédentes");
  S("rv_lisepremiers", "Premiers cours (notes de Lise)", L + "PREMIERS COURS .docx", "CR années précédentes");
  S("rv_lisebasesvni", "Bases de la VNI (diapositives de cours)", L + "MSP BASES VNI.pdf", "CR années précédentes");
  // Synthèses et rapports
  S("rv_bk2", "Résumé de kiné respi BK2", D + "Résumé kiné respi BK2_MSP.pdf", "Synthèse d'étudiant");
  S("rv_resumerea", "Résumé de réanimation BK3", D + "Résumé réa_BK3_MSP.pdf", "Synthèse d'étudiant");
  S("rv_respi4", "RESPI4 : post-COVID trachéotomisé", D + "RESPI4.pdf", "Synthèse d'étudiant");
  S("rv_fondam", "Connaissances fondamentales pour la MSP respi", D + "Connaissances fondamentales pour la MSP respi.docx", "Synthèse d'étudiant");
  S("rv_stagealice", "Rapport de stage en réanimation", E + "Stage Réa Alice.pdf", "Rapport de stage");
  S("rv_0802", "Correction des rapports (08/02)", E + "0802 correction des rapports.docx", "Rapport de stage");
  S("rv_casrapport", "Cas rapport", E + "CAS RAPPORT .docx", "Rapport de stage");
  S("rv_ep", "Rapport embolie pulmonaire en USI", E + "rapport embolie pulmonaire.docx", "Rapport de stage");
  S("rv_hors", "Complément hors cours (connaissance standard, à confirmer avec tes profs)", undefined, "Complément hors cours");

  const T = (rows, head) => `<table class="mt">${head ? `<tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>` : ""}${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;
  const W = t => `<p class="small warn">⚠️ ${t}</p>`;
  const q = (id, part, txt, a, d, src, expl) => ({ id, part, q: txt, a, d, src, expl });

  /* =====================================================================
     FICHE 1 : OXYGÉNOTHÉRAPIE
     ===================================================================== */
  const fO2 = {
    id: "rv_o2", cell: "respi", titre: "Oxygénothérapie : indications, cibles, interfaces et sources", court: "Oxygénothérapie",
    statut: "Fiche de cours qui approfondit la fiche MK1 (formules de FiO2, bouteille, oxyconcentrateur). Les chiffres viennent des cours de base, des CR 2026-27 et des CR 2024-25. Les points qui se contredisent entre supports sont dans les remarques.",
    resume: [
      "On donne de l'O2 pour corriger une hypoxémie (PaO2 < 60 mmHg, SpO2 ≈ 90 %) ou prévenir une hypoxie tissulaire.",
      "On vise une SpO2, pas un débit : 94 à 98 % en général, 88 à 92 % chez le BPCO (ou tout patient à risque d'hypercapnie).",
      "Chez le BPCO, trop d'O2 lève la vasoconstriction hypoxique (Euler-Liljestrand) et la PaCO2 monte. L'effet Haldane y contribue.",
      "Mais l'hypoxémie est l'urgence : un patient qui désature reçoit de l'O2, puis on redescend quand la cible est atteinte.",
      "Systèmes à performance variable (lunettes, sonde, masque simple, masque à réservoir) : la FiO2 dépend du débit inspiratoire du patient.",
      "Systèmes à performance fixe (Venturi, haut débit nasal) : la FiO2 réglée est celle que le patient respire, tant que le débit couvre sa demande.",
      "Lunettes : 0,25 à 6 L/min, environ +3 % de FiO2 par litre. Masque simple : 5 à 10 L/min, au moins 5 L/min.",
      "Masque à réservoir : 15 L/min, FiO2 réelle d'environ 60 à 80 %, jamais 100 %.",
      "Optiflow (HFNC) : jusqu'à 60 L/min, FiO2 21 à 100 %, gaz chauffé à 37 °C, petite PEEP de 2 à 4 cmH2O, lavage de l'espace mort.",
      "Indice ROX = (SpO2/FiO2)/FR : sous 4,88, risque d'échec et d'intubation.",
      "Sources : bouteille (200 bar, marge de sécurité 35 bar), O2 liquide (−183 °C), oxyconcentrateur (FiO2 ≈ 93 %, 5 L/min max).",
      "À l'effort, on augmente le débit pour garder la cible ; on note toujours le dispositif, le débit et la SpO2 obtenue."
    ],
    pro: [
      {
        id: "o2_indic", titre: "Indications : hypoxémie et hypoxie", src: ["rv_duprez", "rv_scaillet", "rv_resumerea", "rv_bilans", "rv_cr1911vm"],
        html: `<p>L'oxygénothérapie sert à <b>corriger une hypoxémie</b> (baisse de la PaO2) et à <b>prévenir ou traiter une hypoxie</b> (souffrance des tissus, avec des lactates qui montent).</p>
        <p><b>Seuils à connaître :</b></p>
        ${T([["Normale", "80 à 100 mmHg"], ["Hypoxémie légère", "60 à 80 mmHg"], ["Hypoxémie modérée", "40 à 60 mmHg"], ["Hypoxémie sévère", "≤ 40 mmHg"]], ["PaO2", "Valeur"])}
        <ul><li>Hypoxémie avérée : PaO2 &lt; 60 mmHg, ce qui correspond à une SpO2 d'environ 90 % (P90 = 60 mmHg, seuil de la dyspnée hypoxémique). Cette correspondance est une moyenne : la courbe de l'Hb peut se déplacer.</li>
        <li>La souffrance tissulaire devient nocive quand la PaO2 passe sous 55 mmHg. Une hypercapnie, même élevée, est peu nocive si le pH reste normal.</li>
        <li>Rapport P/F (PaO2/FiO2) : normal entre 400 et 500 selon le cours du 19/11/2026 (300 à 500 chez M. Duprez). Sans gaz du sang, on peut utiliser SpO2/FiO2.</li></ul>
        <p><b>Indications citées en cours :</b> hypoxémie, insuffisance respiratoire chronique (PaO2 &lt; 60 mmHg, au moins 16 h sur 24), choc hypovolémique, pneumothorax, intoxication au CO, accident de décompression, embolie gazeuse, plaies à germes anaérobies, algie vasculaire de la face (cluster headache).</p>
        <p><b>Hypoxie sans hypoxémie :</b> la PaO2 est normale mais l'O2 n'arrive pas aux tissus. On distingue :</p>
        <ul><li>l'hypoxie circulatoire (choc, hémorragie) ;</li>
        <li>l'hypoxie anémique : anémie, intoxication au CO. L'O2 est peu utile dans une anémie isolée ;</li>
        <li>l'hypoxie cytotoxique : la cellule n'utilise plus l'O2 (cyanure).</li></ul>
        <p>Avec une Hb &lt; 8 g/dL ou une intoxication au CO, il n'y a pas de cyanose. Dans l'intoxication au CO, la SpO2 reste bonne alors que la SaO2 est mauvaise : la SaO2 prend en compte toutes les formes d'Hb.</p>
        <p><b>Signes d'hypoxie :</b> les signes précoces sont l'agitation, l'anxiété, la tachycardie et la tachypnée. Les signes tardifs sont la bradycardie et l'agitation extrême, voire les troubles de conscience.</p>
        ${W("Les lactates signent l'hypoxie tissulaire, pas l'hypoxémie. Un patient peut avoir des lactates élevés avec une PaO2 normale (choc).")}`
      },
      {
        id: "o2_cibles", titre: "Cibles de SpO2 et dangers de l'O2", src: ["rv_cr1911vm", "rv_cr1911vp", "rv_scaillet", "rv_bilans", "rv_duprez", "rv_resumerea"],
        html: `${T([["Patient sans risque d'hypercapnie", "94 à 98 %", "Ne pas le laisser sous 90 %"], ["BPCO ou patient à risque d'hypercapnie", "88 à 92 %", "Éviter de le laisser durablement à 95 % et plus"], ["Hyperoxémie", "SpO2 &gt; 98 %", "Inutile et parfois nocive"]], ["Patient", "Cible SpO2", "Remarque"])}
        <p><b>Pourquoi une cible plus basse chez le BPCO ?</b></p>
        <ol><li>Une alvéole mal ventilée a une PAO2 basse. Les capillaires autour se contractent : c'est la vasoconstriction hypoxique (effet Euler-Liljestrand). Le sang part vers les alvéoles saines.</li>
        <li>Si on donne trop d'O2, la PAO2 remonte aussi dans les alvéoles mal ventilées. La vasoconstriction est levée et ces zones sont reperfusées.</li>
        <li>Le sang qui y passe repart chargé en CO2 : le rapport V/Q s'aggrave et la PaCO2 monte. C'est la cause principale.</li>
        <li>L'effet Haldane s'ajoute : en milieu riche en O2, l'Hb libère son CO2. Il expliquerait environ 25 % de la hausse de PaCO2 (étude d'Aubier).</li>
        <li>L'idée que le BPCO « arrête de respirer » parce qu'il ne réagit plus qu'à l'hypoxie est citée, mais un cours la dit fausse. Elle ne sert pas à justifier la cible.</li></ol>
        <p><b>Ne pas avoir peur de l'O2 :</b> l'hypoxémie est l'urgence. Un BPCO qui désature à 80 % à la marche reçoit plus d'O2 pour revenir dans sa cible. Quelques minutes d'O2 en plus ne posent pas de problème. L'hypercapnie demande une hyperoxie prolongée. Une fois la cible retrouvée, on redescend le débit. Un patient à 70 % peut recevoir une FiO2 de 100 %.</p>
        <p><b>Autres dangers de l'O2 :</b></p>
        <ul><li>Vasoconstriction coronaire et cérébrale : prudence dans le syndrome coronarien et l'AVC si la SpO2 est normale.</li>
        <li>Effet Lorrain-Smith : toxicité pulmonaire (pression partielle d'O2 élevée et prolongée). Effet Paul Bert : toxicité neurologique (convulsions) en hyperbarie.</li>
        <li>Rétinopathie du prématuré ; atélectasie de dénitrogénation (l'azote qui gardait l'alvéole ouverte est lavé) ; production de radicaux libres ; toxicité augmentée avec la bléomycine et le paraquat.</li>
        <li>En pratique, on évite de rester au-dessus de 60 à 70 % de FiO2, mais on peut aller jusqu'à 100 % chez un patient très hypoxémique.</li></ul>
        <p><b>Mesure :</b> la SpO2 est un reflet de la SaO2, avec une marge de 2 à 3 % en plus ou en moins. Après un changement, il faut environ 100 s pour désaturer, 30 s pour resaturer et 10 s pour que l'oxymètre affiche un chiffre fiable.</p>
        ${W("Formule fausse souvent entendue : « on ne donne pas d'O2 au BPCO ou au cardiaque ». On en donne, en visant une cible adaptée.")}`
      },
      {
        id: "o2_interf", titre: "Interfaces à performance variable", src: ["rv_duprez", "rv_oxy", "rv_bilans", "rv_scaillet", "rv_resumerea", "rv_cr241212"],
        html: `<p>Avec ces systèmes, le patient inspire de l'O2 <b>mélangé à l'air ambiant</b>. Plus son débit inspiratoire est élevé, plus l'O2 est dilué. Le débit inspiratoire est d'environ 24 à 27 L/min au repos et de 60 à 80 L/min en détresse : la FiO2 réelle chute quand le patient s'essouffle.</p>
        ${T([["Lunettes nasales", "0,25 à 6 L/min", "≈ +3 % par litre (21 + 3 × débit)", "Au-delà de 6 L/min : gaz sec, lésions du nez. Plaies derrière les oreilles."], ["Sonde nasale", "max 5 à 6 L/min", "un peu plus que les lunettes (réserve dans le pharynx)", "Longueur : du tragus au coin de l'œil. Changer toutes les 8 à 12 h. Risque de pneumo-encéphale si la sonde part vers la lame criblée, ou de dilatation gastrique."], ["Masque simple", "5 à 10 L/min", "≈ +5 % par litre", "Au moins 5 L/min pour ne pas réinhaler le CO2 (espace mort du masque)."], ["Masque à réservoir (NRM)", "10 à 15 L/min, souvent 15", "≈ 60 à 80 % en réalité", "Sac de 400 à 700 mL, valves anti-retour. Le sac doit rester gonflé."], ["Double masque (DTM) ou masque chirurgical sur les lunettes", "lunettes 2 à 4 L/min et plus", "augmente la réserve d'O2", "Réservoir d'environ 300 mL. Lave le CO2. Le masque chirurgical marche presque aussi bien."]], ["Interface", "Débit", "FiO2 approximative", "Points clés"])}
        <p><b>Lunettes :</b> en urgence, certains services montent à 10 ou 15 L/min pour une courte durée. Pour une marche, on peut dépasser 6 L/min pendant 15 à 20 min.</p>
        <p><b>Masque à réservoir :</b> on remplit le sac avant de poser le masque. Si la ventilation minute du patient dépasse le débit d'O2, le sac se collabe et le patient se sent étouffer. Les fuites font chuter la FiO2. On ne calcule pas de P/F sous ce masque, car on ne connaît pas la FiO2.</p>
        <p><b>Règle de passage vers le double masque :</b> lunettes à plus de 5 L/min avec SpO2 &lt; 94 %, ou Optiflow à 60 L/min avec FiO2 &gt; 60 %, on ajoute un masque par-dessus.</p>
        <p><b>Exemple de dilution (CR 12/12/2024) :</b> un patient qui inspire 120 L/min reçoit 6 L/min d'O2 pur et 114 L/min d'air. Le calcul donne (6 × 100 + 114 × 21) / 120 ≈ 25 % : la FiO2 s'effondre. Le CR écrit « environ 40 % », ce qui est une erreur de calcul (voir les remarques).</p>
        ${W("La formule 21 + 3 % par litre est une approximation : la FiO2 réelle dépend du débit inspiratoire. Les formules plus fines (21 + débit/(4 × VM) ; 21 + débit/(2 × FR)) sont dans la fiche MK1.")}`
      },
      {
        id: "o2_fixe", titre: "Performance fixe : Venturi et haut débit nasal (Optiflow)", src: ["rv_duprez", "rv_oxy", "rv_scaillet", "rv_cr1510", "rv_ficherespi", "rv_cr241212", "rv_cr241114"],
        html: `<p><b>Masque Venturi :</b> un embout calibré aspire une quantité fixe d'air ambiant. La FiO2 est fiable et reproductible : 24, 28, 31, 35, 40 ou 50 %, avec un débit d'O2 de 2 à 12 L/min indiqué sur l'embout. Au-delà de 35 %, si le débit inspiratoire du patient est très élevé, la FiO2 s'effondre. On l'utilise peu en chronique, plutôt en aigu ou après une extubation.</p>
        <p><b>Haut débit nasal (HFNC, Optiflow) :</b></p>
        <ul><li>Débit jusqu'à 60 L/min (70 à 80 sur certains appareils), FiO2 réglable de 21 à 100 %.</li>
        <li>Gaz chauffé à 37 °C et saturé en eau (44 mg/L). Sans humidification, on assèche les muqueuses et on augmente le risque d'infection.</li>
        <li>Le débit dépasse la demande du patient, donc la FiO2 réglée est la FiO2 reçue.</li>
        <li>Petite PEEP de 2 à 3 voire 4 cmH2O, seulement bouche fermée.</li>
        <li>Lavage de l'espace mort du nez et du pharynx, confort et sécrétions plus fluides.</li>
        <li>Il faut environ 10 min pour préparer et chauffer l'appareil.</li></ul>
        <p>Exemple du CR 15/10/2026 : 3 L/min aux lunettes ≈ 30 % de FiO2 ; à l'Optiflow, on mettrait 60 L/min avec une FiO2 de 30 %.</p>
        <p><b>Indice ROX</b> (pour savoir si l'Optiflow suffit) : ROX = (SpO2/FiO2) / FR.</p>
        ${T([["&gt; 4,88", "Bonne tolérance, poursuite de l'Optiflow"], ["&lt; 4,88", "Risque d'échec et d'intubation"], ["&lt; 3,85", "On envisage le décubitus ventral (prone)"]], ["ROX", "Lecture"])}
        <p>Exemple : SpO2 90 %, FiO2 100 % (1,0), FR 15 : (90/1)/15 = 6, donc bonne tolérance.</p>
        <p><b>Indications pratiques :</b> hypoxémie importante, patient qui ne supporte pas la VNI, plaies du visage où la CPAP est limitée (polytrauma du CR 12/12/2024 : Optiflow 60 L/min et FiO2 ≈ 40 %).</p>
        ${W("Une fiche de cours écrit que l'Optiflow n'a « aucun effet sur la PaCO2 ». D'autres supports parlent du lavage de l'espace mort, qui aide à éliminer le CO2. Retiens que l'Optiflow n'est pas une ventilation : en acidose hypercapnique, c'est la VNI qu'on choisit.")}`
      },
      {
        id: "o2_source", titre: "Humidification, sources d'O2 et lecture du débit", src: ["rv_bilans", "rv_resumerea", "rv_scaillet", "rv_duprez", "rv_oxy"],
        html: `<p><b>Humidification :</b> l'O2 des prises murales est sec (0 % d'humidité). En dessous de 5 L/min, l'O2 sec n'assèche pas vraiment les voies aériennes : le nez humidifie. Le barboteur à eau froide est peu efficace ; son effet est surtout psychologique. Au-delà de quelques litres prolongés, ou à haut débit, on utilise une humidification chauffée. À domicile, l'humidité conseillée est de 30 à 50 %.</p>
        ${T([["Bouteille (obus)", "Blanche en Europe, 200 bar max, 1 à 50 L d'eau. On garde 35 bar de sécurité. Sous 14 bar, les débitmètres sont moins précis.", "Calcul : (pression − 35) × volume en litres d'eau = litres utilisables, puis diviser par le débit."], ["O2 liquide", "Stocké à −183 °C ; 1 L de liquide donne environ 850 L de gaz.", "Bonne autonomie, mais cher et lourd."], ["Oxyconcentrateur", "Filtre l'azote de l'air sur des tamis de zéolithe ; environ 25 kg pour un modèle fixe, électricité, bruit.", "FiO2 ≈ 93 %, débit continu ≤ 5 L/min. Modes : débit continu, pulsé (bolus de 30 à 192 mL pendant le premier tiers du Ti), FOMV (volume fixe par minute)."]], ["Source", "Caractéristiques", "À retenir"])}
        <p><b>Exemple de bouteille :</b> une B10 à 200 bar contient 2000 L. En retirant la marge (35 bar), il reste 1650 L. À 4 L/min, cela fait environ 410 min, soit un peu moins de 7 h (environ 8 h 20 sans retirer la marge).</p>
        <p><b>Mode FOMV :</b> le volume par minute est fixe et réparti sur les cycles. À 1 L/min, une FR de 25 donne 40 mL par bolus et une FR de 40 seulement 25 mL : le patient polypnéique reçoit moins à chaque inspiration.</p>
        <p><b>Lecture du débitmètre :</b> les yeux à hauteur de la bille. Bille sphérique : lire au milieu. Bille en diabolo : lire en haut. Le tuyau ne doit pas dépasser 30 m en débit continu ; en mode pulsé, on suit la longueur du fabricant.</p>
        <p><b>Fiabilité :</b> une étude sur 720 appareils de délivrance d'O2 montre des débitmètres fidèles (ils répètent la même valeur) mais peu justes, surtout aux bas débits. Après un changement de débitmètre ou de source, on recontrôle la SpO2.</p>`
      },
      {
        id: "o2_effort", titre: "O2 à l'effort, oxygène de longue durée et sevrage", src: ["rv_cr1911vm", "rv_cr1510", "rv_scaillet", "rv_cr241114", "rv_cr250320", "rv_resumerea"],
        html: `<p><b>À l'effort :</b> la demande augmente, la SpO2 baisse. On augmente le débit pour rester dans la cible, on prévoit des pauses et des chaises sur le trajet, et on peut ajouter un masque par-dessus les lunettes. Le débit n'est pas un problème : on vise une saturation.</p>
        <p><b>Ce qu'on note toujours :</b> l'interface, le débit et la SpO2 obtenue. Une SpO2 sans le débit d'O2 ne veut rien dire.</p>
        <p><b>Marcher avec un patient sous Optiflow :</b> on peut le passer temporairement sur des lunettes à 15 L/min branchées sur une bouteille, avec un masque à réservoir à 15 L/min sur une deuxième bouteille.</p>
        <p><b>Oxygène de longue durée (OLD) :</b> chez l'insuffisant respiratoire chronique avec PaO2 &lt; 60 mmHg, au moins 16 h par 24 h (jusqu'à 19 h chez le BPCO GOLD 4 du CR 15/10/2026). La source est souvent un oxyconcentrateur ; pour sortir, une bouteille ou un concentrateur portable.</p>
        <p><b>Sevrage de l'O2 :</b> on descend par paliers en surveillant la SpO2 : Optiflow puis baisse de la FiO2, puis lunettes, puis air ambiant. Le décubitus ventral et la verticalisation aident à sevrer l'O2. Calmer le patient diminue sa consommation.</p>
        <p><b>Ce que le kiné peut proposer sous O2 :</b> installation (plus assis), contrôle respiratoire, expiration à lèvres pincées, pause en fin d'inspiration, mobilisation et marche en adaptant le débit.</p>`
      }
    ],
    qcm: [
      // o2_indic
      q("oi1", "o2_indic", "À partir de quelle PaO2 parle-t-on d'hypoxémie avérée ?", ["Moins de 60 mmHg"], ["Moins de 90 mmHg", "Moins de 40 mmHg", "Moins de 100 mmHg"], "rv_scaillet", "60 mmHg correspond en moyenne à une SpO2 d'environ 90 %."),
      q("oi2", "o2_indic", "Une PaO2 de 50 mmHg correspond à une hypoxémie :", ["Modérée"], ["Légère", "Sévère", "Normale"], "rv_duprez", "Légère 60 à 80, modérée 40 à 60, sévère ≤ 40 mmHg."),
      q("oi3", "o2_indic", "Une PaO2 de 38 mmHg correspond à une hypoxémie :", ["Sévère"], ["Légère", "Modérée", "Normale"], "rv_duprez"),
      q("oi4", "o2_indic", "Quelle SpO2 correspond en moyenne à une PaO2 de 60 mmHg ?", ["Environ 90 %"], ["Environ 98 %", "Environ 75 %", "Environ 60 %"], "rv_scaillet"),
      q("oi5", "o2_indic", "Selon le cours du 19/11/2026, le rapport P/F normal est d'environ :", ["400 à 500"], ["100 à 200", "50 à 100", "1000 à 1200"], "rv_cr1911vm"),
      q("oi6", "o2_indic", "Sous quelle PaO2 la souffrance tissulaire devient-elle nocive selon le cours sur les bilans ?", ["55 mmHg"], ["80 mmHg", "100 mmHg", "30 mmHg"], "rv_bilans"),
      q("oi7", "o2_indic", "Indications de l'O2 citées par M. Duprez (plusieurs réponses) :", ["Intoxication au CO", "Pneumothorax", "Accident de décompression", "Embolie gazeuse"], ["Anémie isolée avec PaO2 normale, où l'O2 serait très efficace"], "rv_duprez"),
      q("oi8", "o2_indic", "Critères de l'oxygène de longue durée chez l'insuffisant respiratoire chronique (plusieurs réponses) :", ["PaO2 inférieure à 60 mmHg", "Au moins 16 h par 24 h"], ["Seulement pendant l'effort", "PaO2 inférieure à 90 mmHg"], "rv_resumerea"),
      q("oi9", "o2_indic", "Situations d'hypoxie possible sans hypoxémie (plusieurs réponses) :", ["Hémorragie", "Anémie", "Intoxication au CO"], ["Pneumonie avec PaO2 à 50 mmHg"], "rv_scaillet", "Dans une pneumonie avec PaO2 à 50 mmHg, il y a bien une hypoxémie."),
      q("oi10", "o2_indic", "Dans une intoxication au CO :", ["La SpO2 peut être bonne alors que la SaO2 est mauvaise"], ["La SpO2 est toujours plus basse que la SaO2", "Le patient est toujours très cyanosé", "L'O2 est contre-indiqué"], "rv_lisepremiers", "La SaO2 du gaz du sang prend en compte toutes les formes d'Hb, l'oxymètre non."),
      q("oi11", "o2_indic", "Dans quels cas une hypoxie peut-elle exister sans cyanose (plusieurs réponses) ?", ["Hb inférieure à 8 g/dL", "Intoxication au CO"], ["BPCO polyglobulique très hypoxémique", "Hypoxémie sévère avec Hb normale"], "rv_duprez"),
      q("oi12", "o2_indic", "Signes précoces d'hypoxie (plusieurs réponses) :", ["Agitation", "Anxiété", "Tachycardie", "Tachypnée"], ["Bradycardie"], "rv_duprez", "La bradycardie est un signe tardif, de gravité."),
      q("oi13", "o2_indic", "L'hypoxie due au cyanure est une hypoxie :", ["Cytotoxique"], ["Anémique", "Circulatoire", "Hypoxémique"], "rv_duprez"),
      q("oi14", "o2_indic", "Des lactates élevés traduisent avant tout :", ["Une hypoxie tissulaire"], ["Une hypoxémie forcément sévère", "Une hypercapnie", "Une alcalose respiratoire"], "rv_scaillet"),
      q("oi15", "o2_indic", "Quelle part de l'O2 est transportée par l'hémoglobine ?", ["Environ 98 à 99 %"], ["Environ 50 %", "Environ 10 %", "Environ 75 %"], "rv_resumerea"),
      q("oi16", "o2_indic", "Dans une anémie isolée avec une PaO2 normale, l'O2 :", ["Est peu utile"], ["Corrige complètement l'hypoxie", "Est contre-indiqué", "Doit être donné à 15 L/min"], "rv_duprez", "L'Hb est déjà saturée : ajouter de l'O2 ne change presque pas le contenu en O2."),
      // o2_cibles
      q("oc1", "o2_cibles", "Cible de SpO2 chez un patient sans risque d'hypercapnie :", ["94 à 98 %"], ["88 à 92 %", "100 %", "85 à 90 %"], "rv_scaillet"),
      q("oc2", "o2_cibles", "Cible de SpO2 chez un BPCO :", ["88 à 92 %"], ["94 à 98 %", "80 à 85 %", "98 à 100 %"], "rv_cr1911vm"),
      q("oc3", "o2_cibles", "Une SpO2 supérieure à 98 % s'appelle :", ["Une hyperoxémie"], ["Une hypoxémie", "Une hypercapnie", "Une normoxie stricte"], "rv_scaillet"),
      q("oc4", "o2_cibles", "Mécanisme principal de l'hypercapnie induite par trop d'O2 chez le BPCO selon le cours du 19/11/2026 :", ["La levée de la vasoconstriction hypoxique, qui reperfuse des alvéoles mal ventilées"], ["Une bronchodilatation", "Une baisse de la production de CO2", "Une hausse de la ventilation minute"], "rv_cr1911vm"),
      q("oc5", "o2_cibles", "Comment s'appelle la vasoconstriction pulmonaire autour d'une alvéole hypoxique ?", ["Effet Euler-Liljestrand"], ["Effet Bohr", "Effet Paul Bert", "Effet Venturi"], "rv_scaillet"),
      q("oc6", "o2_cibles", "Selon l'étude d'Aubier citée en cours, l'effet Haldane explique environ quelle part de la hausse de PaCO2 sous O2 chez le BPCO ?", ["25 %"], ["100 %", "75 %", "5 %"], "rv_scaillet"),
      q("oc7", "o2_cibles", "Qu'est-ce que l'effet Haldane ?", ["En milieu riche en O2, l'hémoglobine libère son CO2"], ["L'acidité fait libérer l'O2 par l'Hb", "La toxicité neurologique de l'O2", "La vasoconstriction hypoxique"], "rv_cr1911vp", "La libération d'O2 en milieu acide, c'est l'effet Bohr."),
      q("oc8", "o2_cibles", "Un BPCO sous O2 désature à 80 % pendant la marche. Que fais-tu ?", ["J'augmente l'O2 pour le ramener dans sa cible, puis je redescends"], ["Je laisse le même débit pour éviter l'hypercapnie", "J'arrête l'O2", "Je le passe à 15 L/min pour toute la journée"], "rv_cr1911vm", "Quelques minutes d'O2 en plus ne posent pas de problème ; l'hypoxémie est l'urgence."),
      q("oc9", "o2_cibles", "Pour régler l'O2, on vise :", ["Une SpO2"], ["Un débit fixe quel que soit le patient", "Une PaCO2 normale", "Une FR de 12"], "rv_cr1911vm"),
      q("oc10", "o2_cibles", "Ce qu'il faut éviter chez le BPCO :", ["Le laisser durablement à 95 % et plus"], ["Lui donner de l'O2 quand il désature", "Monter le débit pendant quelques minutes à l'effort", "Contrôler sa SpO2"], "rv_cr1911vm"),
      q("oc11", "o2_cibles", "Un patient non BPCO est à 70 % de SpO2. Peut-on lui donner une FiO2 de 100 % ?", ["Oui, l'hypoxémie sévère est l'urgence"], ["Non, jamais plus de 40 %", "Non, seulement 2 L/min aux lunettes", "Seulement après une gazométrie"], "rv_scaillet"),
      q("oc12", "o2_cibles", "L'effet Paul Bert désigne :", ["La toxicité neurologique de l'O2 (convulsions en hyperbarie)"], ["La toxicité pulmonaire de l'O2", "La vasoconstriction hypoxique", "La libération du CO2 par l'Hb"], "rv_bilans"),
      q("oc13", "o2_cibles", "L'effet Lorrain-Smith désigne :", ["La toxicité pulmonaire d'une pression d'O2 élevée et prolongée"], ["La toxicité neurologique de l'O2", "L'effet du CO2 sur l'Hb", "Le collapsus du sac de réservoir"], "rv_scaillet"),
      q("oc14", "o2_cibles", "Dangers de l'O2 cités en cours (plusieurs réponses) :", ["Rétinopathie du prématuré", "Atélectasie de dénitrogénation", "Production de radicaux libres", "Vasoconstriction coronaire et cérébrale"], ["Hypoglycémie"], "rv_bilans"),
      q("oc15", "o2_cibles", "Pourquoi un fort débit d'O2 peut-il favoriser des atélectasies ?", ["L'azote, qui gardait l'alvéole ouverte, est lavé puis l'O2 est absorbé"], ["L'O2 bouche les bronches", "L'O2 paralyse le diaphragme", "L'O2 augmente le surfactant"], "rv_bilans"),
      q("oc16", "o2_cibles", "Quelle est la marge habituelle entre SpO2 et SaO2 ?", ["2 à 3 %, en plus ou en moins"], ["10 à 15 %", "Aucune, elles sont identiques", "Toujours 5 % de moins pour la SpO2"], "rv_cr1911vp"),
      q("oc17", "o2_cibles", "Combien de temps faut-il attendre pour qu'un oxymètre affiche un chiffre fiable après l'avoir posé ?", ["Environ 10 s"], ["Environ 2 min", "Environ 1 s", "Environ 5 min"], "rv_scaillet"),
      q("oc18", "o2_cibles", "Après une baisse de l'O2, la désaturation apparaît en environ :", ["100 s"], ["10 s", "10 min", "1 s"], "rv_scaillet", "La resaturation, elle, prend environ 30 s."),
      q("oc19", "o2_cibles", "L'idée que le BPCO « arrête de respirer » sous O2 parce qu'il ne réagit plus qu'à l'hypoxie est :", ["Présentée par un cours comme fausse, ce n'est pas le mécanisme principal"], ["La seule explication de l'hypercapnie", "Une contre-indication absolue à l'O2", "Valable chez tous les patients"], "rv_lisepremiers"),
      q("oc20", "o2_cibles", "Chez un patient en syndrome coronarien avec une SpO2 à 97 %, l'O2 :", ["N'est pas utile et peut être nocif (vasoconstriction coronaire)"], ["Doit être mis à 15 L/min", "Améliore toujours le pronostic", "Est obligatoire"], "rv_bilans"),
      // o2_interf
      q("ov1", "o2_interf", "Débit maximal habituel des lunettes nasales :", ["6 L/min"], ["15 L/min", "2 L/min", "60 L/min"], "rv_duprez", "Au-delà, le gaz sec abîme le nez."),
      q("ov2", "o2_interf", "Avec les lunettes, chaque litre d'O2 ajoute environ :", ["3 % de FiO2"], ["10 % de FiO2", "1 % de FiO2", "20 % de FiO2"], "rv_oxy"),
      q("ov3", "o2_interf", "FiO2 approximative avec des lunettes à 3 L/min :", ["Environ 30 %"], ["Environ 50 %", "Environ 21 %", "Environ 90 %"], "rv_cr1510"),
      q("ov4", "o2_interf", "Débit minimal d'un masque simple :", ["5 L/min"], ["1 L/min", "15 L/min", "0,5 L/min"], "rv_duprez", "En dessous, le patient réinhale le CO2 contenu dans le masque."),
      q("ov5", "o2_interf", "Avec un masque simple, chaque litre ajoute environ :", ["5 % de FiO2"], ["3 % de FiO2", "15 % de FiO2", "1 % de FiO2"], "rv_duprez"),
      q("ov6", "o2_interf", "Pourquoi la FiO2 réelle des lunettes chute-t-elle chez le patient en détresse ?", ["Son débit inspiratoire monte (60 à 80 L/min) et dilue l'O2 dans l'air ambiant"], ["Les lunettes se bouchent", "L'O2 est consommé par le tuyau", "La PaCO2 baisse"], "rv_scaillet"),
      q("ov7", "o2_interf", "Débit inspiratoire d'un adulte au repos :", ["Environ 24 à 27 L/min"], ["Environ 2 L/min", "Environ 150 L/min", "Environ 6 L/min"], "rv_scaillet"),
      q("ov8", "o2_interf", "Repère pour la longueur d'une sonde nasale :", ["Du tragus au coin de l'œil"], ["Du nez au nombril", "De la bouche au sternum", "Toujours 30 cm"], "rv_bilans"),
      q("ov9", "o2_interf", "Risques d'une sonde nasale mal placée (plusieurs réponses) :", ["Pneumo-encéphale si elle part vers la lame criblée", "Dilatation gastrique"], ["Pneumothorax sous-cutané du bras", "Fracture du sternum"], "rv_duprez"),
      q("ov10", "o2_interf", "Tous les combien change-t-on une sonde nasale ?", ["Toutes les 8 à 12 h"], ["Toutes les 15 min", "Une fois par mois", "Jamais"], "rv_bilans"),
      q("ov11", "o2_interf", "Débit habituel d'un masque à réservoir :", ["15 L/min"], ["2 L/min", "5 L/min", "60 L/min"], "rv_duprez"),
      q("ov12", "o2_interf", "FiO2 réelle d'un masque à réservoir :", ["Environ 60 à 80 %"], ["100 %", "Environ 30 %", "Environ 21 %"], "rv_duprez", "Les fuites autour du masque diluent l'O2. On ne l'utilise pas pour calculer un P/F."),
      q("ov13", "o2_interf", "Avec un masque à réservoir, le sac se collabe quand :", ["La ventilation minute du patient dépasse le débit d'O2"], ["Le débit est trop élevé", "Le patient dort", "La FiO2 est fixe"], "rv_duprez"),
      q("ov14", "o2_interf", "Avant de poser un masque à réservoir :", ["On remplit le sac d'O2"], ["On vide le sac", "On coupe l'O2", "On met le débit à 2 L/min"], "rv_bilans"),
      q("ov15", "o2_interf", "Pourquoi ne calcule-t-on pas de P/F sous masque à réservoir ?", ["On ne connaît pas la FiO2 réelle"], ["La PaO2 est toujours normale", "Le masque fausse la gazométrie", "La SpO2 n'est pas mesurable"], "rv_scaillet"),
      q("ov16", "o2_interf", "Volume approximatif du réservoir d'un double masque (DTM) :", ["Environ 300 mL"], ["Environ 3 L", "Environ 30 mL", "Environ 10 L"], "rv_bilans"),
      q("ov17", "o2_interf", "Selon la règle du cours, quand ajoute-t-on un masque par-dessus les lunettes (plusieurs réponses) ?", ["Lunettes à plus de 5 L/min avec une SpO2 inférieure à 94 %", "Optiflow à 60 L/min avec une FiO2 supérieure à 60 %"], ["Lunettes à 1 L/min avec une SpO2 de 97 %", "Patient BPCO à 92 % au repos"], "rv_bilans"),
      q("ov18", "o2_interf", "Peut-on utiliser un masque chirurgical par-dessus les lunettes pour améliorer l'oxygénation ?", ["Oui, il fait presque aussi bien qu'un double masque"], ["Non, c'est dangereux", "Seulement chez l'enfant", "Seulement si les lunettes sont à 0 L/min"], "rv_cr250320"),
      q("ov19", "o2_interf", "Un patient inspire 120 L/min : 6 L/min d'O2 pur et 114 L/min d'air. Sa FiO2 calculée est d'environ :", ["25 %"], ["90 %", "60 %", "100 %"], "rv_cr241212", "(6 × 100 + 114 × 21) / 120 ≈ 25 %. Le CR écrit « environ 40 % », c'est une erreur de calcul."),
      q("ov20", "o2_interf", "Le masque simple fait partie des systèmes :", ["À performance variable"], ["À performance fixe", "De ventilation", "À pression positive"], "rv_oxy"),
      q("ov21", "o2_interf", "Lors d'une marche, peut-on dépasser 6 L/min aux lunettes ?", ["Oui, pendant 15 à 20 min, c'est acceptable"], ["Non, jamais", "Seulement chez le nourrisson", "Seulement sans oxymètre"], "rv_scaillet"),
      // o2_fixe
      q("of1", "o2_fixe", "FiO2 disponibles sur un masque Venturi (plusieurs réponses) :", ["24 %", "28 %", "40 %"], ["100 %", "90 %"], "rv_duprez"),
      q("of2", "o2_fixe", "Au-delà de quelle FiO2 le Venturi devient-il moins fiable si le patient a un grand débit inspiratoire ?", ["35 %"], ["24 %", "21 %", "10 %"], "rv_duprez"),
      q("of3", "o2_fixe", "Le masque Venturi est un système :", ["À performance fixe"], ["À performance variable", "De ventilation non invasive", "À réservoir"], "rv_oxy"),
      q("of4", "o2_fixe", "Débit maximal habituel de l'Optiflow chez l'adulte :", ["60 L/min (70 à 80 sur certains appareils)"], ["6 L/min", "15 L/min", "200 L/min"], "rv_duprez"),
      q("of5", "o2_fixe", "Caractéristiques du gaz délivré par l'Optiflow (plusieurs réponses) :", ["Chauffé à 37 °C", "Saturé en eau (44 mg/L)", "FiO2 réglable de 21 à 100 %"], ["Froid et sec"], "rv_duprez"),
      q("of6", "o2_fixe", "PEEP générée par l'Optiflow bouche fermée :", ["Environ 2 à 4 cmH2O"], ["Environ 15 cmH2O", "Environ 30 cmH2O", "Aucune pression"], "rv_cr1510"),
      q("of7", "o2_fixe", "Effets de l'Optiflow (plusieurs réponses) :", ["Lavage de l'espace mort", "FiO2 stable", "Confort et sécrétions plus fluides"], ["Ventilation complète du patient comme une VNI"], "rv_scaillet"),
      q("of8", "o2_fixe", "Combien de temps faut-il pour préparer un Optiflow ?", ["Environ 10 min"], ["Environ 10 s", "Environ 2 h", "Aucun délai"], "rv_scaillet"),
      q("of9", "o2_fixe", "Formule de l'indice ROX :", ["(SpO2/FiO2) / FR"], ["PaO2 × FiO2", "FR / Vt", "Vt / (Pplat − PEEP)"], "rv_scaillet"),
      q("of10", "o2_fixe", "Un ROX inférieur à 4,88 signifie :", ["Un risque d'échec de l'Optiflow et d'intubation"], ["Une très bonne tolérance", "Une hyperoxie", "Un sevrage possible de l'O2"], "rv_scaillet"),
      q("of11", "o2_fixe", "Sous quel ROX envisage-t-on le décubitus ventral selon le cours ?", ["3,85"], ["10", "7,35", "1,5"], "rv_scaillet"),
      q("of12", "o2_fixe", "SpO2 90 %, FiO2 100 %, FR 15. Que vaut le ROX ?", ["6"], ["90", "1,5", "13,5"], "rv_scaillet", "(90/1,0)/15 = 6, donc au-dessus de 4,88."),
      q("of13", "o2_fixe", "Un patient est à 3 L/min aux lunettes. Quel réglage d'Optiflow serait équivalent en FiO2 selon le CR 15/10/2026 ?", ["60 L/min à 30 %"], ["60 L/min à 90 %", "3 L/min à 30 %", "15 L/min à 100 %"], "rv_cr1510"),
      q("of14", "o2_fixe", "Polytraumatisé avec plaies du visage et hypoxémie : quelle interface le CR 12/12/2024 préfère-t-il ?", ["L'Optiflow"], ["La CPAP au masque facial serré", "Le masque simple à 2 L/min", "Aucune oxygénation"], "rv_cr241212"),
      q("of15", "o2_fixe", "En acidose hypercapnique, l'Optiflow :", ["Ne remplace pas la VNI, car il ne ventile pas"], ["Est le traitement de choix", "Est contre-indiqué dans tous les cas", "Augmente la PaCO2 de façon certaine"], "rv_cr1510"),
      q("of16", "o2_fixe", "Pourquoi faut-il humidifier le haut débit ?", ["Sans humidification, les muqueuses sèchent et le risque d'infection augmente"], ["Pour augmenter la FiO2 à 100 %", "Pour diminuer la PEEP", "Pour refroidir le patient"], "rv_duprez"),
      // o2_source
      q("os1", "o2_source", "Humidité de l'O2 des prises murales :", ["0 %"], ["100 %", "50 %", "Elle dépend de la météo"], "rv_bilans"),
      q("os2", "o2_source", "Le barboteur à eau froide :", ["Est peu efficace ; son effet est surtout psychologique"], ["Sature parfaitement le gaz", "Est obligatoire dès 1 L/min", "Chauffe le gaz à 37 °C"], "rv_bilans"),
      q("os3", "o2_source", "Sous quel débit l'O2 sec n'assèche-t-il pas vraiment les voies aériennes ?", ["Environ 5 L/min"], ["Environ 60 L/min", "Environ 15 L/min", "Aucun, il assèche toujours"], "rv_bilans"),
      q("os4", "o2_source", "Pression maximale d'une bouteille d'O2 :", ["200 bar"], ["35 bar", "14 bar", "1000 bar"], "rv_resumerea"),
      q("os5", "o2_source", "Marge de sécurité à garder dans une bouteille :", ["35 bar"], ["0 bar", "100 bar", "5 bar"], "rv_resumerea"),
      q("os6", "o2_source", "Bouteille de 10 L à 200 bar, débit de 4 L/min. Autonomie en gardant la marge de 35 bar :", ["Environ 410 min, un peu moins de 7 h"], ["Environ 50 min", "Environ 24 h", "Environ 2000 min"], "rv_bilans", "(200 − 35) × 10 = 1650 L ; 1650 / 4 ≈ 412 min."),
      q("os7", "o2_source", "Couleur des bouteilles d'O2 médical en Europe :", ["Blanche"], ["Verte", "Noire", "Rouge"], "rv_resumerea"),
      q("os8", "o2_source", "Température de stockage de l'O2 liquide :", ["−183 °C"], ["−18 °C", "+37 °C", "0 °C"], "rv_resumerea"),
      q("os9", "o2_source", "1 L d'O2 liquide donne environ :", ["850 L de gaz"], ["10 L de gaz", "100 000 L de gaz", "1 L de gaz"], "rv_resumerea"),
      q("os10", "o2_source", "FiO2 délivrée par un oxyconcentrateur :", ["Environ 93 %"], ["100 %", "Environ 50 %", "21 %"], "rv_resumerea"),
      q("os11", "o2_source", "Débit continu maximal d'un oxyconcentrateur fixe :", ["5 L/min"], ["15 L/min", "60 L/min", "1 L/min"], "rv_resumerea"),
      q("os12", "o2_source", "Sur quoi repose le fonctionnement d'un oxyconcentrateur ?", ["Des tamis de zéolithe qui retiennent l'azote"], ["De l'O2 liquide", "Une bouteille à 200 bar", "Une électrolyse de l'eau"], "rv_bilans"),
      q("os13", "o2_source", "En mode FOMV, à débit fixe, quand la FR augmente, le bolus par inspiration :", ["Diminue"], ["Augmente", "Reste identique", "Devient continu"], "rv_bilans", "À 1 L/min : FR 25 → 40 mL ; FR 40 → 25 mL."),
      q("os14", "o2_source", "Comment lire un débitmètre à bille sphérique ?", ["Au milieu de la bille, les yeux à sa hauteur"], ["En haut de la bille, vu d'en dessous", "En bas de la bille", "On ne lit pas, on estime"], "rv_resumerea", "Pour une bille en diabolo, on lit en haut."),
      q("os15", "o2_source", "Longueur maximale du tuyau d'O2 en débit continu :", ["30 m"], ["3 m", "300 m", "Pas de limite"], "rv_resumerea"),
      q("os16", "o2_source", "D'après l'étude sur 720 appareils de délivrance d'O2, les débitmètres sont :", ["Fidèles mais peu justes, surtout aux bas débits"], ["Justes et fidèles", "Ni fidèles ni justes à haut débit seulement", "Parfaits"], "rv_scaillet"),
      q("os17", "o2_source", "Sous quelle pression de bouteille les détendeurs à trous préformés perdent-ils en précision ?", ["14 bar"], ["150 bar", "200 bar", "100 bar"], "rv_bilans"),
      q("os18", "o2_source", "En mode pulsé, l'oxyconcentrateur délivre l'O2 :", ["Pendant le premier tiers du temps inspiratoire"], ["Pendant toute l'expiration", "Toutes les 10 s", "Seulement la nuit"], "rv_bilans"),
      // o2_effort
      q("oe1", "o2_effort", "Ce qu'il faut toujours noter avec une SpO2 (plusieurs réponses) :", ["L'interface utilisée", "Le débit d'O2"], ["La couleur du tuyau", "La marque de l'oxymètre"], "rv_cr241114"),
      q("oe2", "o2_effort", "Moyens pour garder la SpO2 dans la cible à l'effort (plusieurs réponses) :", ["Augmenter le débit d'O2", "Prévoir des pauses et des chaises", "Ajouter un masque par-dessus les lunettes"], ["Arrêter l'O2 pour entraîner le patient"], "rv_cr1911vm"),
      q("oe3", "o2_effort", "Pour faire marcher un patient sous Optiflow, une solution citée en cours :", ["Lunettes à 15 L/min sur une bouteille et masque à réservoir à 15 L/min sur une autre"], ["Air ambiant pendant la marche", "Lunettes à 1 L/min", "Arrêter l'Optiflow la veille"], "rv_scaillet"),
      q("oe4", "o2_effort", "Durée minimale de l'oxygène de longue durée :", ["16 h par 24 h"], ["2 h par jour", "Seulement la nuit", "Seulement à l'effort"], "rv_resumerea"),
      q("oe5", "o2_effort", "Le BPCO GOLD 4 du CR 15/10/2026 a de l'O2 combien d'heures par jour au minimum ?", ["19 h"], ["4 h", "8 h", "1 h"], "rv_cr1510"),
      q("oe6", "o2_effort", "Ordre logique de sevrage de l'O2 :", ["Optiflow, baisse de la FiO2, lunettes, puis air ambiant"], ["Lunettes, puis Optiflow, puis masque à réservoir", "Arrêt brutal de l'Optiflow", "Masque à réservoir, puis intubation"], "rv_scaillet"),
      q("oe7", "o2_effort", "Positions qui aident au sevrage de l'O2 selon les CR (plusieurs réponses) :", ["Décubitus ventral", "Verticalisation"], ["Décubitus dorsal strict à plat"], "rv_cr241114"),
      q("oe8", "o2_effort", "Pourquoi calmer un patient sous O2 ?", ["Son anxiété augmente sa consommation d'O2 et sa FR"], ["Pour baisser la FiO2 réglée automatiquement", "Pour augmenter sa PaCO2", "Ça n'a aucun effet"], "rv_scaillet"),
      q("oe9", "o2_effort", "Techniques proposées par le kiné chez un patient dyspnéique sous O2 (plusieurs réponses) :", ["Expiration à lèvres pincées", "Pause en fin d'inspiration", "Installation plus assise"], ["Apnée prolongée d'une minute"], "rv_scaillet"),
      q("oe10", "o2_effort", "Une SpO2 de 92 % sans le débit d'O2 :", ["N'est pas interprétable"], ["Est toujours normale", "Signe une hypercapnie", "Permet d'arrêter l'O2"], "rv_cr241114"),
      q("oe11", "o2_effort", "Pour sortir de chez lui, un patient sous oxyconcentrateur fixe utilise plutôt :", ["Une bouteille ou un concentrateur portable"], ["Un Optiflow", "Un masque Venturi branché au mur", "Rien, l'O2 n'est utile que la nuit"], "rv_resumerea"),
      q("oe12", "o2_effort", "Un patient sous lunettes désature pendant un 6MWT. Que fais-tu ?", ["J'augmente le débit jusqu'à retrouver une SpO2 correcte et je le note"], ["J'arrête le test définitivement", "Je laisse le débit et je continue sans surveiller", "Je retire les lunettes"], "rv_cr1911vm"),
      q("oe13", "o2_effort", "Après l'effort, un BPCO remonte à 95 % avec le débit augmenté. Que fais-tu ?", ["Je redescends le débit pour revenir vers 88 à 92 %"], ["Je laisse ce débit toute la journée", "J'arrête l'O2 complètement", "Je passe au masque à réservoir"], "rv_cr1911vm"),
      q("oe14", "o2_effort", "Pourquoi l'hypercapnie induite par l'O2 n'est-elle pas un risque lors d'une courte hausse du débit à l'effort ?", ["Elle demande une exposition prolongée à une oxygénation excessive"], ["Parce que l'effort supprime le CO2", "Parce que le BPCO n'a jamais d'hypercapnie", "Parce que l'O2 n'a aucun effet chez le BPCO"], "rv_cr1911vm"),
      q("oe15", "o2_effort", "Une source d'O2 sans électricité et transportable pour une marche dans le couloir :", ["Une bouteille d'O2"], ["Un oxyconcentrateur fixe de 25 kg", "Une prise murale", "Un Optiflow sans batterie"], "rv_resumerea")
    ],
    patients: [
      { id: "rv_p_bpco4", nom: "Homme de 56 ans, BPCO GOLD 4 sous lunettes", origine: "cours", src: "rv_cr1510", desc: "Hospitalisé depuis 6 jours pour exacerbation, lunettes à 3 L/min, très anxieux, maigre (type « pink puffer »), en attente de greffe.", attrs: { o2: "lunettes", dyspnee: true, tirage: true, levres: true, tonneau: true, anxiete: true } },
      { id: "rv_p_poly", nom: "Homme de 24 ans, polytraumatisé, plaies du visage", origine: "cours", src: "rv_cr241212", desc: "Accident de voiture, fractures de côtes gauches, du col du fémur et de la scapula gauches, plaie de l'œil droit. Extubé, sous O2.", attrs: { o2: "optiflow", douleurs: [{ zone: "thorax", type: "mecanique" }, { zone: "hancheG", type: "mecanique" }], toux: true } },
      { id: "rv_p_fausse", nom: "Homme de 24 ans, fausse route, obèse", origine: "cours", src: "rv_cr250320", desc: "Fausse route alimentaire, très encombré, masque à réservoir à 15 L/min, 120 kg pour 1,75 m.", attrs: { o2: "reservoir", toux: true, deglut: true, dyspnee: true } }
    ],
    cas: [
      {
        id: "rv_cas_marche", origine: "cours", src: ["rv_cr1510", "rv_cr1911vm"], patient: "rv_p_bpco4", fiche: "rv_o2",
        titre: "BPCO GOLD 4 sous lunettes : bilan et marche sous O2",
        etapes: [
          { type: "lecture", html: `<p>Homme de 56 ans, BPCO GOLD 4 (VEMS 13 %), hospitalisé depuis 6 jours pour une exacerbation. Il est sous lunettes à 3 L/min. Ancien fumeur (34 ans de tabac, arrêt depuis 1 an). Il attend une greffe pulmonaire.</p>` },
          { type: "anamnese", items: [
            { q: "Depuis quand est-il sous O2 et combien d'heures par jour ?", r: "Depuis le stade GOLD 4, au minimum 19 h par jour, 3 L/min.", p: 1 },
            { q: "Quels médicaments prend-il ?", r: "Bronchodilatateurs de courte et de longue durée, corticostéroïdes.", p: 1 },
            { q: "Comment vit-il ?", r: "Maison de plain-pied avec son épouse, pas d'aide technique.", p: 2 },
            { q: "Quel est son état psychologique ?", r: "Très anxieux ; il n'ose pas faire les transferts seul.", p: 2 },
            { q: "Quel est son métier ?", r: "Ancien métier manuel.", p: 3 }
          ] },
          { type: "bilans", ordre: ["Paramètres vitaux avec le débit d'O2", "Constat d'attitude", "Signes de lutte", "Auscultation", "Dyspnée (EVA ou Borg)", "Bilan musculaire (quadriceps, triceps)", "Bilan fonctionnel (transferts)"], items: [
            { b: "Paramètres vitaux avec le débit d'O2", r: "SpO2 91 % sous 3 L/min aux lunettes, il hyperventile.", ok: true },
            { b: "Constat d'attitude", r: "Semi-assis, ventilateur dirigé vers lui, sonde naso-gastrique, voie centrale sous-clavière.", ok: true },
            { b: "Signes de lutte", r: "Léger tirage des scalènes, signe de Hoover.", ok: true },
            { b: "Auscultation", r: "Symétrique, murmure diminué (emphysème).", ok: true },
            { b: "Dyspnée (EVA ou Borg)", r: "Dyspnée au repos.", ok: true },
            { b: "Bilan musculaire (quadriceps, triceps)", r: "Amyotrophie du vaste interne, du tibial antérieur, des intercostaux et du premier interosseux dorsal.", ok: true },
            { b: "Bilan fonctionnel (transferts)", r: "Transfert lit-fauteuil impossible seul, à cause de l'anxiété.", ok: true },
            { b: "EFR complètes au lit", r: "Pas utile en aigu ; on a déjà le VEMS.", ok: false }
          ] },
          { type: "choix", src: "rv_cr1911vm", items: [
            { t: "Pendant la marche, il désature à 85 % puis 80 %. J'augmente l'O2 pour le remettre entre 88 et 92 %, puis je redescends après l'effort.", ok: true, why: "On vise une saturation, pas un débit. Quelques minutes d'O2 en plus ne posent pas de problème." },
            { t: "Je laisse 3 L/min pour éviter l'hypercapnie, même à 80 %.", ok: false, why: "L'hypoxémie est l'urgence. L'hypercapnie demande une hyperoxie prolongée." },
            { t: "Je le laisse ensuite à 6 L/min toute la journée à 97 %.", ok: false, why: "Il ne faut pas laisser durablement un BPCO à 95 % et plus." },
            { t: "Je note l'interface, le débit et la SpO2 à chaque étape.", ok: true, why: "Une SpO2 sans débit d'O2 n'est pas interprétable." },
            { t: "Je prévois des pauses et une chaise sur le trajet.", ok: true, why: "Le patient est très anxieux et dyspnéique au repos." }
          ] },
          { type: "lecture", html: `<p><b>À retenir :</b> chez le BPCO, la cible est 88 à 92 %. On ne refuse jamais d'O2 à un patient qui désature, on le surveille et on redescend une fois la cible retrouvée. Si le patient retenait son CO2 avec une acidose, le traitement serait la VNI (voir la fiche VNI).</p>` }
        ]
      },
      {
        id: "rv_cas_poly", origine: "cours", src: ["rv_cr241212"], patient: "rv_p_poly", fiche: "rv_o2",
        titre: "Polytraumatisé avec plaies du visage : quelle interface ?",
        etapes: [
          { type: "lecture", html: `<p>Homme de 24 ans, accident de voiture il y a 5 jours, alcoolémie 2,4 g/L, intubé sur place (Glasgow 7) puis extubé. Fractures de côtes gauches, contusion pulmonaire, fracture du col du fémur et de la scapula gauches, plaie profonde de l'œil droit.</p>` },
          { type: "anamnese", items: [
            { q: "Taille et poids ?", r: "1,75 m et 70 kg.", p: 2 },
            { q: "Fume-t-il ?", r: "À demander : un sevrage tabagique brutal augmente les sécrétions.", p: 2 },
            { q: "Quelles interventions sont prévues ?", r: "Ostéosynthèse du col du fémur, scapula à discuter, rien pour les côtes.", p: 1 },
            { q: "Quelle oxygénation reçoit-il ?", r: "Lunettes à 4 L/min, SpO2 91 à 92 %.", p: 1 }
          ] },
          { type: "bilans", ordre: ["Paramètres vitaux et O2", "Auscultation", "Radiographie", "Douleur"], items: [
            { b: "Paramètres vitaux et O2", r: "SpO2 91 à 92 % sous lunettes à 4 L/min.", ok: true },
            { b: "Auscultation", r: "Pas de murmure à la base droite, encombrement des deux côtés.", ok: true },
            { b: "Radiographie", r: "Épanchement pleural et atélectasies à droite.", ok: true },
            { b: "Douleur", r: "Douleurs costales et de la hanche gauche.", ok: true },
            { b: "Test d'appui unipodal gauche", r: "Interdit : appui impossible sur le membre inférieur gauche.", ok: false }
          ] },
          { type: "choix", src: "rv_cr241212", items: [
            { t: "Je limite la CPAP au masque facial à cause des plaies du visage.", ok: true, why: "La CPAP serrée sur des plaies faciales est mal tolérée et nocive." },
            { t: "Je propose un Optiflow à 60 L/min avec une FiO2 d'environ 40 %, à corréler à la SpO2.", ok: true, why: "Il améliore la PaO2, mais son effet sur les atélectasies reste limité." },
            { t: "Je l'installe en décubitus latéral gauche pour ventiler la base droite.", ok: true, why: "Le poumon atteint (droit) est mis en haut, sans appui sur les côtes et la hanche gauches douloureuses." },
            { t: "Je mets un masque à réservoir à 2 L/min.", ok: false, why: "Un réservoir demande 10 à 15 L/min, sinon le sac se collabe." },
            { t: "En attendant, j'ajoute un masque chirurgical sur les lunettes.", ok: true, why: "Il fait un effet de réservoir et de lavage du CO2." }
          ] }
        ]
      },
      {
        id: "rv_cas_fausse", origine: "cours", src: ["rv_cr250320"], patient: "rv_p_fausse", fiche: "rv_o2",
        titre: "Fausse route sous masque à réservoir : quand l'O2 ne suffit plus",
        etapes: [
          { type: "lecture", html: `<p>Homme de 24 ans, 120 kg pour 1,75 m, fausse route alimentaire. Glasgow 15, très encombré, SpO2 90 % sous masque à réservoir à 15 L/min, FC 100, TA 150/100, semi-assis.</p>` },
          { type: "bilans", ordre: ["Auscultation", "Paramètres vitaux et O2", "Gazométrie"], items: [
            { b: "Auscultation", r: "Encombré partout.", ok: true },
            { b: "Paramètres vitaux et O2", r: "SpO2 90 % sous 15 L/min au réservoir.", ok: true },
            { b: "Gazométrie", r: "pH 7,30 ; PaCO2 80 mmHg ; PaO2 70 mmHg ; HCO3- 45 mmol/L.", ok: true },
            { b: "Test de marche de 6 min", r: "Hors de propos en urgence.", ok: false }
          ] },
          { type: "choix", src: "rv_cr250320", items: [
            { t: "Je désencombre (AFE), je réausculte, puis j'aspire en endotrachéal si besoin.", ok: true, why: "Ordre du CR : auscultation, AFE, auscultation, paramètres, aspiration." },
            { t: "La gazométrie montre une acidose hypercapnique : on passe en VNI à deux niveaux (BiPAP).", ok: true, why: "pH < 7,35 avec PaCO2 élevée : il faut ventiler, l'O2 seul ne suffit pas." },
            { t: "Je passe à 25 L/min sur le masque à réservoir pour baisser le CO2.", ok: false, why: "Plus d'O2 ne ventile pas le patient ; le CO2 ne baissera pas." },
            { t: "Le lendemain, s'il désature assis au bord du lit, j'ajoute un double masque ou un masque chirurgical.", ok: true, why: "Solution simple citée dans le CR." }
          ] }
        ]
      }
    ]
  };

  /* =====================================================================
     FICHE 2 : VNI (CPAP ET BiPAP)
     ===================================================================== */
  const fVNI = {
    id: "rv_vni", cell: "respi", titre: "VNI : CPAP et BiPAP (principes, réglages, surveillance)", court: "VNI CPAP / BiPAP",
    statut: "Fiche de cours construite à partir des CR VNI 2024-25, des CR 2026-27, du cours VNI_CAS_GAZO, de la fiche respi et des diapositives sur les bases de la VNI. Les plages de réglage varient un peu selon les supports : les remarques les signalent.",
    resume: [
      "CPAP = un seul niveau de pression : elle recrute les alvéoles mais ne ventile pas. BiPAP = deux niveaux : elle ventile et fait baisser le CO2.",
      "« CPAP = recruter, VNI = ventiler. » Indication principale de la BiPAP : acidose hypercapnique (pH < 7,35 avec PaCO2 élevée).",
      "Indications de la CPAP : OAP cardiogénique, apnées du sommeil, SDRA sans acidose hypercapnique, atélectasie post-opératoire.",
      "On programme une VNI en fonction de la gazométrie : pH normal avec PaCO2 haute = patient compensé, pas de VNI.",
      "Contre-indications : pas de ventilation spontanée, vomissements ou hémorragie digestive, instabilité hémodynamique, trauma facial, obstruction des voies aériennes hautes, intolérance.",
      "IPAP ≤ 25 cmH2O (au-delà, l'œsophage s'ouvre et l'estomac se remplit d'air). EPAP (PEEP) 5 à 12 cmH2O.",
      "Aide inspiratoire = IPAP − EPAP ≤ 15 cmH2O. Au-delà, le poumon est très difficile à ventiler : on prévient le médecin.",
      "Vt visé 6 à 8 mL/kg de poids idéal. Ventilation minute > 7 L/min en acidose (10 à 12 L/min chez la patiente de 86 ans).",
      "FR de sécurité réglée juste sous la FR spontanée du patient ; rampe raide en aigu, douce en chronique.",
      "Fuites tolérées en circuit simple : idéalement 25 L/min, au maximum 50 L/min. Trop de fuites = asynchronies.",
      "Contrôle : MOVIES (Masque, O2, Volumes, IPAP, EPAP, Sang). Gazométrie de contrôle ; si elle s'aggrave après quelques heures, on intube.",
      "Le kiné explique, rassure, pose le masque à la main avant de le sangler, commence par des pressions basses, stimule et mobilise le patient."
    ],
    pro: [
      {
        id: "vni_princ", titre: "Principes : CPAP, BiPAP et effets de la pression positive", src: ["rv_cr240926", "rv_cr241128", "rv_cr0110", "rv_lisebasesvni", "rv_stagealice", "rv_cr2210", "rv_vnigazo", "rv_cr241010", "rv_scaillet"],
        html: `<p>La <b>ventilation</b> sert à éliminer le CO2 et donc à régler le pH. La VNI insuffle de l'air (enrichi ou non en O2) par un masque, sans tube dans la trachée. Elle crée une pression positive dans les voies aériennes.</p>
        ${T([["CPAP", "Un seul niveau de pression (PEEP), maintenu pendant tout le cycle", "Le patient respire seul autour de ce niveau. Elle recrute les alvéoles et augmente la surface d'échange : l'oxygénation s'améliore. Elle ne ventile pas : un cours dit qu'elle « n'est pas une VNI »."], ["BiPAP (VNI à deux niveaux)", "IPAP à l'inspiration, EPAP à l'expiration", "La différence de pression (aide inspiratoire) augmente le Vt : la ventilation minute monte et la PaCO2 baisse."]], ["Système", "Pression", "Effet"])}
        <p><b>Formule à retenir :</b> « CPAP = recruter, VNI = ventiler ». Si le patient a trop de CO2, il faut deux niveaux. Sinon, la CPAP suffit. Dans un OAP où le patient prend des volumes suffisants, un seul niveau suffit ; trop de pression abîme des alvéoles fragiles.</p>
        <p><b>CPAP dans l'OAP cardiogénique :</b> la pression positive s'oppose au passage de l'eau du capillaire vers l'alvéole et la repousse. Elle recrute (meilleure oxygénation), diminue le retour veineux et donc la précharge, et diminue la postcharge du ventricule gauche.</p>
        <p><b>Travail respiratoire du BPCO :</b> un BPCO distendu a une auto-PEEP de 8 cmH2O. Son diaphragme doit créer −9 pour faire entrer l'air. Avec une CPAP de +5, il ne doit plus créer que −4 : la pression externe compense une partie de l'auto-PEEP.</p>
        <p><b>Deux effets de la PEEP :</b></p>
        <ul><li>alvéolaire : recrutement, surface d'échange plus grande, SpO2 meilleure ;</li>
        <li>hémodynamique : toute pression positive diminue le retour veineux. On surveille la TA et on n'augmente pas la PEEP chez un patient hypotendu (exemple : TA 8/5).</li></ul>
        <p><b>Vocabulaire :</b> BiPAP (petit i) désigne la VNI à deux niveaux en pression assistée. BIPAP (grand I) désigne, sur certains respirateurs de réanimation, un mode en pression contrôlée.</p>`
      },
      {
        id: "vni_indic", titre: "Indications, contre-indications et lecture de la gazométrie", src: ["rv_cr240926", "rv_cr241128", "rv_scaillet", "rv_lisepremiers", "rv_recap", "rv_duprez", "rv_cr241212", "rv_vnigazo", "rv_bk2"],
        html: `${T([["CPAP", "OAP cardiogénique ; apnées du sommeil (elle maintient le pharynx ouvert et empêche le ronflement) ; SDRA sans acidose hypercapnique ; atélectasie post-opératoire (chirurgie abdominale ou thoracique, sauf chirurgie de l'œsophage), environ 5 cmH2O 3 × 30 min par jour ; CPAP de Boussignac en sevrage ; Covid hypoxémique."], ["BiPAP", "Acidose hypercapnique (pH &lt; 7,35, PaCO2 élevée), typiquement l'exacerbation de BPCO ; syndrome obésité-hypoventilation ; SDRA avec acidose hypercapnique ; asthme grave selon M. Duprez. Reste possible en insuffisance cardiaque, avec une surveillance hémodynamique."]], ["Système", "Indications"])}
        <p><b>Contre-indications de la VNI :</b></p>
        <ul><li>absence de ventilation spontanée, coma sans protection des voies aériennes ;</li>
        <li>hémorragie digestive haute ou vomissements (risque d'inhalation, syndrome de Mendelson) ;</li>
        <li>instabilité hémodynamique, insuffisance cardiaque droite, HTAP sévère ;</li>
        <li>traumatisme facial, chirurgie ORL ou maxillo-faciale récente, obstruction des voies aériennes supérieures ;</li>
        <li>intolérance du patient. En cas de plaies du visage, on préfère l'Optiflow.</li></ul>
        <p><b>On programme une VNI en fonction de la gazométrie.</b> Un pH bas avec une PaCO2 haute = acidose respiratoire, on ventile. Un pH normal avec une PaCO2 haute = patient compensé (reins, HCO3- élevés), on ne met pas de VNI. Un pH bas avec une PaCO2 normale ou basse = acidose métabolique, ce n'est pas du ressort de la VNI.</p>
        ${T([["7,28", "55", "Oui, petite acidose hypercapnique ; des exercices respiratoires peuvent suffire au début"], ["7,40", "70", "Non, compensé"], ["7,36", "57", "Non, hypercapnie chronique compensée"], ["7,25", "80", "Oui, acidose hypercapnique"], ["7,25", "40", "Non, acidose métabolique"], ["7,28 (PaO2 58, HCO3- 33)", "78", "BiPAP"], ["7,40 (PaO2 56)", "55", "CPAP pour l'hypoxémie"], ["7,42 (HCO3- 35)", "92", "Rien : BPCO compensé qui va bien"]], ["pH", "PaCO2 (mmHg)", "VNI ?"])}
        <p>Les reins mettent quelques heures (3 à 4 h au début) à commencer à compenser. En aigu, les bicarbonates et le BE sont encore normaux.</p>`
      },
      {
        id: "vni_regl", titre: "Réglages de la BiPAP et de la CPAP", src: ["rv_cr240926", "rv_cr241128", "rv_lisebasesvni", "rv_cr250515", "rv_lisetrame", "rv_scaillet", "rv_ficherespi", "rv_vi"],
        html: `${T([["FiO2", "Selon la SpO2 (94 à 98 %, ou 88 à 92 % chez le BPCO) ; départ souvent à 21 à 30 %", "Même réglage en CPAP et en BiPAP"], ["EPAP (= PEEP)", "5 à 12 cmH2O (5 à 15 selon un CR)", "Recrutement ; au-delà, fuites et retentissement sur la TA"], ["IPAP", "≤ 25 cmH2O", "Au-delà, ouverture de l'œsophage : insufflation gastrique, vomissements, inhalation"], ["Aide inspiratoire (AI = IPAP − EPAP)", "≤ 15 cmH2O", "AI + EPAP ne doit pas dépasser 25"], ["Vt visé", "6 à 8 mL/kg de poids idéal", "420 mL pour un poids idéal de 70 kg"], ["Ventilation minute", "5 à 7 L/min à pH normal (100 mL/kg de poids idéal)", "Plus de 7 L/min si acidose (au moins 8 selon la trame, 10 à 12 chez la patiente de 86 ans)"], ["FR de sécurité", "Juste sous la FR spontanée (16 si le patient est à 18)", "Égale ou au-dessus : inconfort et asynchronie"], ["Rampe (pente)", "Raide en aigu, douce en chronique ou en restrictif", "Vitesse de montée de l'EPAP à l'IPAP"], ["Trigger", "Sensibilité à l'effort du patient", "Les fuites peuvent déclencher de faux cycles"], ["Fuites (circuit simple)", "Idéalement 25 L/min, au maximum 50 L/min", "Indispensables en monobranche pour évacuer le CO2"]], ["Paramètre", "Réglage", "Pourquoi"])}
        <p><b>L'aide inspiratoire fait le Vt :</b> plus d'aide donne plus de volume. On règle donc l'IPAP en regardant le Vt obtenu. On commence par des aides basses et on monte si le patient le supporte.</p>
        <p><b>Pourquoi pas plus de 15 d'aide ?</b> Si on doit mettre plus, c'est que la compliance est effondrée. Le danger ne vient pas du chiffre lui-même : il signale une situation grave, avec un risque d'épuisement et d'arrêt. On prévient le médecin, la solution est souvent l'intubation.</p>
        <p><b>Cas particuliers :</b> une AI à 0 revient à une CPAP. Une PEEP de 5 avec une IPAP de 5 est aussi une CPAP. Le trigger expiratoire (fin de l'aide) est souvent réglé vers 25 % du débit de pointe.</p>
        <p><b>CPAP :</b> on règle seulement la FiO2 et la PEEP (5 à 12 cmH2O). La CPAP péri-opératoire se fait vers 5 cmH2O.</p>
        ${W("Les supports ne donnent pas la même plage de Vt en VNI : 6 à 8 mL/kg dans la plupart, 7 à 10 mL/kg dans la trame et dans une synthèse. Retiens 6 à 8 mL/kg, la valeur du cours 2026-27.")}`
      },
      {
        id: "vni_pose", titre: "Interfaces et pose de la VNI", src: ["rv_cr250515", "rv_cr0110", "rv_cr2210", "rv_cr240926", "rv_lisebasesvni", "rv_scaillet"],
        html: `<p><b>Préparation :</b> la préparation psychologique est primordiale pour la tolérance. On explique au patient ce qu'on va faire, on annonce les alarmes et le bruit, on le rassure.</p>
        <ol><li>Choisir un masque de la bonne taille : trop grand, il fuit ; trop serré, il blesse.</li>
        <li>Brancher le circuit avec un filtre antibactérien (et un humidificateur ou un filtre HME selon le service).</li>
        <li>Démarrer avec des pressions basses.</li>
        <li>Tenir le masque à la main sur le visage, sans sangler, le temps que le patient s'habitue.</li>
        <li>Quand le pourcentage de fuites est correct, sangler le masque.</li>
        <li>Monter progressivement les pressions selon la tolérance, les fuites et le Vt.</li></ol>
        <p><b>Masque nasal ou facial :</b> en CPAP au masque nasal, on demande au patient de fermer la bouche et de respirer par le nez. Les fuites sont fréquentes chez le patient barbu ou qui a une sonde naso-gastrique.</p>
        <p><b>Circuit simple ou double :</b> en circuit simple (monobranche), le CO2 sort par une fuite calibrée. Un circuit totalement étanche ferait réinhaler le CO2. En circuit double, plus c'est étanche plus c'est efficace, mais on ne vise pas 100 % : le patient ne le supporterait pas.</p>
        <p><b>Plus la PEEP est haute, plus le risque de fuite est grand.</b> D'où l'intérêt de commencer bas.</p>
        <p><b>Installation :</b> le plus assis possible, au fauteuil dès que c'est permis. Une VNI peut se faire au fauteuil.</p>`
      },
      {
        id: "vni_surv", titre: "Surveillance, efficacité et échec de la VNI", src: ["rv_ficherespi", "rv_acronymes", "rv_scaillet", "rv_stagealice", "rv_vi", "rv_cr241128", "rv_cr2210", "rv_lisevi", "rv_lisepremiers"],
        html: `<p><b>MOVIES</b> (contrôle d'une VNI) :</p>
        ${T([["M", "Masque", "Position, sangles, taille, fuites"], ["O", "Oxygène", "La FiO2 correspond-elle aux besoins ?"], ["V", "Volumes", "Vt 6 à 8 mL/kg de poids idéal, ventilation minute (100 mL/kg, environ 7 L/min)"], ["I", "IPAP", "Maximum 25 cmH2O"], ["E", "EPAP", "IPAP − EPAP ≤ 15 cmH2O"], ["S", "Sang (ou SpO2)", "SaO2, pH, PaCO2 à la gazométrie de contrôle"]], ["Lettre", "Élément", "À vérifier"])}
        <p><b>Délais d'effet :</b> la SpO2 change en environ 30 s, la PaCO2 en quelques minutes, l'état de conscience (Glasgow) en environ 15 min.</p>
        <p><b>Monitoring :</b> Vt, ventilation minute, FR spontanée, rapport I/E, débit de fuite, courbes (le trigger se voit comme un petit creux sur la courbe pression-temps avant le cycle). Une désynchronisation vient souvent des fuites ou d'une IPAP mal réglée.</p>
        <p><b>Alerter le médecin si :</b> tachycardie, arythmie, hypotension, baisse de conscience, désaturation importante après la mise en VNI, wheezing. Aussi si le Vt reste bas et la FR haute alors que l'aide est déjà à 15 cmH2O (exemple : Vt 250 mL, FR 25).</p>
        <p><b>Échec :</b> mauvaise compliance et gazométrie qui s'aggrave malgré la VNI. Si après quelques heures (environ 3 h) la gazométrie se dégrade, le médecin intube. Les BPCO GOLD 3 et 4 sont très difficiles à sevrer du tube : l'idéal est de ne pas devoir les intuber, d'où l'importance d'une VNI bien faite.</p>
        <p><b>Après une extubation :</b> une VNI préventive précoce chez les patients à risque réduit l'insuffisance respiratoire. Une VNI « curative », lancée chez des patients non sélectionnés quand la détresse est installée, n'évite ni la réintubation ni la mortalité. L'association Optiflow + VNI réduit le risque d'intubation par rapport à l'Optiflow seul.</p>`
      },
      {
        id: "vni_kine", titre: "Rôle du kiné chez le patient sous VNI", src: ["rv_vnigazo", "rv_cr250515", "rv_cr250327", "rv_lisetrame", "rv_lise3011", "rv_cr250313", "rv_cr1211"],
        html: `<p><b>Avant et pendant la VNI :</b> le kiné est présent, explique, rassure : la tolérance est bien meilleure. Il règle ou vérifie les paramètres avec l'équipe, surveille les fuites et l'asynchronie.</p>
        <p><b>Stimuler et mobiliser :</b> un patient somnolent hypercapnique doit être réveillé, stimulé, on lui parle, on lui pose des questions. Assis au bord du lit puis au fauteuil, il augmente sa ventilation minute, ce qui fait baisser la PaCO2 et améliore la compliance.</p>
        <p><b>Conduite devant une acidose respiratoire</b> (trame des CR) :</p>
        <ol><li>Augmenter l'O2 ou changer d'interface si le patient désature.</li>
        <li>Désencombrer (AFE) s'il est encombré.</li>
        <li>Mettre une BiPAP pour augmenter la ventilation minute.</li>
        <li>Sans BiPAP disponible, augmenter la FR et le Vt au ballon de réanimation (BAVU).</li></ol>
        <p><b>Post-opératoire :</b> après une chirurgie abdominale ou du petit bassin, l'obésité, la gaine, la position tête en bas et la douleur font hypoventiler les bases. On redresse, on desserre la gaine si on y est autorisé, on stimule, et on pose une CPAP si l'atélectasie est installée.</p>
        <p><b>Salle de réveil après une chirurgie d'épaule :</b> le bloc anesthésique peut paralyser le nerf phrénique. Le patient désature et utilise ses muscles accessoires. La radio montre une coupole surélevée. On redresse, on adapte l'O2 et on propose une CPAP (SDRA sans acidose hypercapnique).</p>
        <p><b>Séance sous VNI :</b> on peut faire des exercices respiratoires et de la mobilisation sous VNI ; on vérifie la SpO2 à chaque changement de position.</p>`
      }
    ],
    qcm: [
      // vni_princ
      q("np1", "vni_princ", "Combien de niveaux de pression a une CPAP ?", ["Un seul"], ["Deux", "Trois", "Aucun"], "rv_cr240926"),
      q("np2", "vni_princ", "La CPAP :", ["Recrute les alvéoles mais ne ventile pas"], ["Ventile et fait baisser la PaCO2", "Est un mode de ventilation invasive", "Ne crée aucune pression"], "rv_cr0110"),
      q("np3", "vni_princ", "La BiPAP fait baisser la PaCO2 parce que :", ["La différence IPAP − EPAP augmente le Vt et donc la ventilation minute"], ["Elle augmente la FiO2", "Elle supprime l'espace mort", "Elle bloque la production de CO2"], "rv_cr241128"),
      q("np4", "vni_princ", "Complète la formule du cours : « CPAP = ..., VNI = ... »", ["Recruter ; ventiler"], ["Ventiler ; recruter", "Oxygéner ; intuber", "Humidifier ; réchauffer"], "rv_cr0110"),
      q("np5", "vni_princ", "Dans un OAP où le patient prend des volumes suffisants, que met-on ?", ["Un seul niveau de pression (CPAP)"], ["Une BiPAP avec IPAP à 25", "Une intubation d'emblée", "Rien, l'OAP n'est pas une indication"], "rv_cr250515"),
      q("np6", "vni_princ", "Effets de la PEEP dans l'OAP cardiogénique (plusieurs réponses) :", ["Repousser l'eau de l'alvéole vers le capillaire", "Recruter et oxygéner", "Diminuer la précharge"], ["Augmenter le retour veineux"], "rv_cr241128"),
      q("np7", "vni_princ", "BPCO avec 8 cmH2O d'auto-PEEP : sans aide, son diaphragme doit créer −9. Avec une CPAP de +5, il doit créer :", ["−4"], ["−14", "−9", "+5"], "rv_cr240926"),
      q("np8", "vni_princ", "Les deux effets de la PEEP à retenir (plusieurs réponses) :", ["Alvéolaire : recrutement et meilleure SpO2", "Hémodynamique : baisse du retour veineux"], ["Augmentation de la production de CO2", "Hausse du débit cardiaque"], "rv_cr241128"),
      q("np9", "vni_princ", "Un patient a une TA à 8/5. Faut-il monter la PEEP ?", ["Non, la pression positive risque d'aggraver l'hypotension"], ["Oui, toujours", "Oui, au maximum à 20", "Ça n'a aucun lien"], "rv_cr241010"),
      q("np10", "vni_princ", "La VNI :", ["Insuffle de l'air par un masque, sans tube dans la trachée"], ["Nécessite une intubation", "Est toujours à pression négative", "Ne s'utilise qu'en réanimation pédiatrique"], "rv_lisebasesvni"),
      q("np11", "vni_princ", "Ce qui conditionne surtout la tolérance d'une VNI :", ["La préparation psychologique du patient"], ["La couleur du masque", "La marque du ventilateur", "La température de la chambre"], "rv_lisebasesvni"),
      q("np12", "vni_princ", "Pourquoi la CPAP soulage-t-elle le cœur dans l'OAP ?", ["Elle diminue le retour veineux et la postcharge du ventricule gauche"], ["Elle augmente la volémie", "Elle accélère la FC", "Elle dilate les coronaires"], "rv_cr241128"),
      q("np13", "vni_princ", "Selon la formulation d'un cours, la CPAP :", ["« N'est pas une VNI » car elle ne ventile pas"], ["Est la seule vraie VNI", "Est un mode de ventilation contrôlée", "Remplace l'intubation"], "rv_cr240926"),
      q("np14", "vni_princ", "Une pression positive dans le thorax :", ["Diminue le retour veineux"], ["Augmente le retour veineux", "N'a aucun effet circulatoire", "Augmente toujours la TA"], "rv_cr1911vm"),
      q("np15", "vni_princ", "Patient très encombré qui retient son CO2 avec un pH à 7,28. Le traitement de choix selon le CR 15/10/2026 :", ["La VNI à deux niveaux"], ["La CPAP seule", "Le masque Venturi à 24 %", "Les lunettes à 1 L/min"], "rv_cr1510"),
      q("np16", "vni_princ", "Pourquoi trop de pression est-elle déconseillée dans un OAP ?", ["Les alvéoles sont fragiles"], ["La FiO2 chuterait à 21 %", "Le patient s'endormirait", "La PaCO2 monterait forcément"], "rv_cr250515"),
      // vni_indic
      q("ni1", "vni_indic", "Indication principale de la BiPAP :", ["Acidose hypercapnique (pH < 7,35 et PaCO2 élevée)"], ["Hypoxémie isolée avec pH normal", "Acidose métabolique", "Alcalose respiratoire"], "rv_cr241128"),
      q("ni2", "vni_indic", "Indications de la CPAP (plusieurs réponses) :", ["OAP cardiogénique", "Apnées du sommeil", "SDRA sans acidose hypercapnique", "Atélectasie post-opératoire"], ["Exacerbation de BPCO avec pH 7,22"], "rv_cr240926"),
      q("ni3", "vni_indic", "Pourquoi la CPAP n'est-elle pas indiquée dans le SDRA avec acidose hypercapnique ?", ["Elle n'aide pas à ventiler, or il faut augmenter la ventilation"], ["Elle est trop puissante", "Elle donne une alcalose", "Elle est interdite chez l'adulte"], "rv_cr240926"),
      q("ni4", "vni_indic", "CPAP péri-opératoire décrite dans le cours BK2 :", ["Environ 5 cmH2O, 3 fois 30 min par jour"], ["Environ 25 cmH2O en continu", "Environ 15 cmH2O une fois par semaine", "Pas de pression"], "rv_bk2"),
      q("ni5", "vni_indic", "Après quelle chirurgie évite-t-on la CPAP post-opératoire selon le cours ?", ["Chirurgie de l'œsophage"], ["Chirurgie du genou", "Chirurgie de la main", "Appendicectomie"], "rv_scaillet", "La pression positive pourrait léser les sutures de l'œsophage."),
      q("ni6", "vni_indic", "Contre-indications de la VNI (plusieurs réponses) :", ["Vomissements ou hémorragie digestive haute", "Absence de ventilation spontanée", "Traumatisme facial", "Instabilité hémodynamique"], ["Exacerbation de BPCO avec pH 7,30"], "rv_scaillet"),
      q("ni7", "vni_indic", "Le syndrome de Mendelson, cité dans les contre-indications de la VNI, est :", ["Une inhalation de liquide gastrique"], ["Une paralysie du diaphragme", "Une crise d'asthme", "Un pneumothorax sous tension"], "rv_scaillet"),
      q("ni8", "vni_indic", "pH 7,40 et PaCO2 70 mmHg. VNI ?", ["Non, le patient est compensé"], ["Oui, en urgence", "Oui, CPAP à 12", "Intubation"], "rv_lisepremiers"),
      q("ni9", "vni_indic", "pH 7,25 et PaCO2 80 mmHg. VNI ?", ["Oui, BiPAP pour l'acidose hypercapnique"], ["Non, patient compensé", "Non, acidose métabolique", "CPAP seule"], "rv_lisepremiers"),
      q("ni10", "vni_indic", "pH 7,25 et PaCO2 40 mmHg. VNI ?", ["Non, c'est une acidose métabolique"], ["Oui, BiPAP", "Oui, CPAP", "Oui, IPAP 25"], "rv_lisepremiers"),
      q("ni11", "vni_indic", "pH 7,36 et PaCO2 57 mmHg. VNI ?", ["Non, hypercapnie chronique compensée"], ["Oui, BiPAP en urgence", "Oui, CPAP à 15", "Intubation"], "rv_lisepremiers"),
      q("ni12", "vni_indic", "pH 7,28 et PaCO2 55 mmHg. Que dit le cours ?", ["VNI possible, mais des exercices respiratoires peuvent suffire vu la petite acidose"], ["Intubation immédiate", "Rien à faire, c'est normal", "CPAP obligatoire"], "rv_lisepremiers"),
      q("ni13", "vni_indic", "pH 7,42, PaCO2 92 et HCO3- 35 chez un BPCO. Que fait-on ?", ["Rien : BPCO compensé qui va bien"], ["BiPAP en urgence", "Intubation", "CPAP à 12"], "rv_recap"),
      q("ni14", "vni_indic", "pH 7,40, PaCO2 55, PaO2 56. Proposition du cours :", ["CPAP pour l'hypoxémie"], ["BiPAP pour l'acidose", "Intubation", "Rien"], "rv_recap"),
      q("ni15", "vni_indic", "Combien de temps les reins mettent-ils pour commencer à compenser une acidose respiratoire selon le cours ?", ["Quelques heures (3 à 4 h)"], ["Quelques secondes", "Un mois", "Ils ne compensent jamais"], "rv_lisepremiers"),
      q("ni16", "vni_indic", "Comment programme-t-on une VNI ?", ["En fonction de la gazométrie"], ["Toujours avec les mêmes réglages", "Selon la couleur des expectorations", "Selon l'âge seulement"], "rv_lisepremiers"),
      q("ni17", "vni_indic", "Plaies du visage chez un patient hypoxémique : quelle alternative à la CPAP ?", ["L'Optiflow"], ["Une CPAP plus serrée", "Une IPAP à 30", "Un masque à 1 L/min"], "rv_cr241212"),
      q("ni18", "vni_indic", "Chez l'insuffisant cardiaque en acidose hypercapnique, la VNI à deux niveaux :", ["Reste indiquée, avec une surveillance hémodynamique"], ["Est formellement interdite", "Se règle avec une PEEP de 20", "Remplace les diurétiques"], "rv_cr241128"),
      q("ni19", "vni_indic", "Pourquoi la CPAP aide-t-elle dans les apnées du sommeil ?", ["Elle garde le pharynx ouvert et empêche le ronflement"], ["Elle augmente la FR", "Elle diminue la FiO2", "Elle endort le patient"], "rv_cr240926"),
      // vni_regl
      q("nr1", "vni_regl", "IPAP maximale en VNI :", ["25 cmH2O"], ["40 cmH2O", "10 cmH2O", "60 cmH2O"], "rv_cr240926"),
      q("nr2", "vni_regl", "Pourquoi ne pas dépasser 25 cmH2O d'IPAP ?", ["L'œsophage s'ouvre : l'air passe dans l'estomac, avec vomissements et risque d'inhalation"], ["La FiO2 chute à 21 %", "Le masque se décolle toujours", "Le patient s'endort"], "rv_scaillet"),
      q("nr3", "vni_regl", "Plage habituelle d'EPAP (PEEP) en VNI :", ["5 à 12 cmH2O"], ["0 à 2 cmH2O", "20 à 30 cmH2O", "40 à 50 cmH2O"], "rv_cr240926"),
      q("nr4", "vni_regl", "L'aide inspiratoire en BiPAP vaut :", ["IPAP − EPAP"], ["IPAP + EPAP", "EPAP × FR", "Vt / FR"], "rv_ficherespi"),
      q("nr5", "vni_regl", "Aide inspiratoire maximale conseillée :", ["15 cmH2O"], ["25 cmH2O", "5 cmH2O", "30 cmH2O"], "rv_cr241128"),
      q("nr6", "vni_regl", "Une aide inspiratoire qui doit dépasser 15 cmH2O signifie :", ["Une compliance effondrée : on prévient le médecin"], ["Un patient qui va très bien", "Un masque trop petit", "Une FiO2 trop basse"], "rv_cr241128"),
      q("nr7", "vni_regl", "EPAP 5 et aide 15. Que vaut l'IPAP ?", ["20 cmH2O"], ["10 cmH2O", "15 cmH2O", "75 cmH2O"], "rv_cr240926"),
      q("nr8", "vni_regl", "Vt visé en VNI selon le cours 2026-27 :", ["6 à 8 mL/kg de poids idéal"], ["15 mL/kg de poids réel", "2 mL/kg", "20 mL/kg de poids idéal"], "rv_lisebasesvni"),
      q("nr9", "vni_regl", "Le Vt se calcule sur :", ["Le poids idéal (selon la taille et le sexe)"], ["Le poids réel", "L'IMC", "Le tour de taille"], "rv_lisebasesvni"),
      q("nr10", "vni_regl", "Ventilation minute normale à pH neutre pour 70 kg de poids idéal :", ["Environ 7 L/min (100 mL/kg)"], ["Environ 1 L/min", "Environ 30 L/min", "Environ 70 L/min"], "rv_lisebasesvni"),
      q("nr11", "vni_regl", "En acidose hypercapnique, la ventilation minute visée doit être :", ["Supérieure à 7 L/min"], ["Inférieure à 3 L/min", "Exactement 5 L/min", "Nulle"], "rv_cr240926"),
      q("nr12", "vni_regl", "Le patient respire à 18/min. Quelle FR de sécurité règles-tu ?", ["16/min"], ["26/min", "18/min", "30/min"], "rv_cr250417", "On se cale juste sous la FR spontanée pour éviter l'asynchronie."),
      q("nr13", "vni_regl", "Pourquoi régler la FR de sécurité sous la FR du patient ?", ["Une FR égale ou supérieure chez un patient conscient crée un gros inconfort et une asynchronie"], ["Pour augmenter l'IPAP", "Pour baisser la FiO2", "Pour éviter les fuites"], "rv_cr240926"),
      q("nr14", "vni_regl", "Rampe (pente) en aigu :", ["Raide (montée rapide en pression)"], ["Très douce", "Sans importance", "Toujours à zéro"], "rv_lisetrame"),
      q("nr15", "vni_regl", "Rampe chez un patient restrictif ou chronique :", ["Plus douce, plus confortable"], ["La plus raide possible", "Interdite", "Égale à l'IPAP"], "rv_lisetrame"),
      q("nr16", "vni_regl", "Fuites tolérées en circuit simple (plusieurs réponses) :", ["Idéalement autour de 25 L/min", "Au maximum 50 L/min"], ["0 L/min obligatoire", "200 L/min sans problème"], "rv_lisebasesvni"),
      q("nr17", "vni_regl", "Que provoquent trop de fuites ?", ["Des faux déclenchements et des asynchronies"], ["Une hausse de la FiO2", "Un meilleur Vt", "Une baisse de la PaCO2 garantie"], "rv_cr241128"),
      q("nr18", "vni_regl", "Avec une aide inspiratoire à 0, la machine fonctionne comme :", ["Une CPAP"], ["Une ventilation contrôlée", "Un Optiflow", "Un masque Venturi"], "rv_vi"),
      q("nr19", "vni_regl", "Chez la patiente de 86 ans en acidose (CR 15/05/2025), quelle ventilation minute visait-on ?", ["10 à 12 L/min"], ["2 à 3 L/min", "25 L/min", "5 L/min"], "rv_cr250515"),
      q("nr20", "vni_regl", "Quand on augmente l'aide inspiratoire :", ["Le Vt augmente"], ["Le Vt diminue", "La FiO2 augmente", "Les fuites disparaissent"], "rv_cr241128"),
      q("nr21", "vni_regl", "FiO2 de départ souvent proposée sur une VNI :", ["21 à 30 %, puis selon la SpO2"], ["100 % pour tout le monde", "10 %", "La FiO2 ne se règle pas"], "rv_cr250515"),
      q("nr22", "vni_regl", "En CPAP, on règle (plusieurs réponses) :", ["La FiO2", "La PEEP"], ["L'IPAP", "L'aide inspiratoire"], "rv_cr241128"),
      // vni_pose
      q("nz1", "vni_pose", "Avant de sangler le masque :", ["On le tient à la main pour que le patient s'habitue"], ["On le serre au maximum", "On met l'IPAP à 25", "On coupe l'O2"], "rv_cr250515"),
      q("nz13", "vni_pose", "Plus la PEP est élevée en VNI :", ["Plus le risque de fuite est grand"], ["Moins il y a de fuites", "Plus la FiO2 monte", "Plus le masque est confortable"], "rv_cr0110"),
      q("nz14", "vni_pose", "Avant la pose, on présente au patient (plusieurs réponses) :", ["Le masque", "Le respirateur et le monitorage"], ["Le résultat de sa prise de sang de l'an dernier"], "rv_lisevi"),
      q("nz15", "vni_pose", "Les alarmes désagréables du début :", ["Disparaissent souvent avec les bons réglages, on les annonce"], ["Doivent être coupées définitivement", "Signifient toujours une panne", "N'existent pas en VNI"], "rv_lisevi"),
      q("nz16", "vni_pose", "Peut-on faire une VNI au fauteuil ?", ["Oui, c'est même une bonne installation si c'est permis"], ["Non, jamais", "Seulement tête en bas", "Seulement chez l'enfant"], "rv_cr250417"),
      q("nz2", "vni_pose", "Par quelles pressions commence-t-on ?", ["Des pressions basses, puis on monte"], ["Les pressions maximales", "IPAP 30 d'emblée", "Peu importe"], "rv_cr0110"),
      q("nz3", "vni_pose", "Pourquoi commencer bas ?", ["Plus la pression est haute, plus il y a de fuites et d'inconfort"], ["Pour hyperventiler", "Pour monter la FiO2", "Parce que la machine l'impose"], "rv_cr0110"),
      q("nz4", "vni_pose", "Un masque trop grand donne :", ["Des fuites"], ["Une meilleure étanchéité", "Une IPAP plus haute", "Une baisse de la FiO2 voulue"], "rv_cr250515"),
      q("nz5", "vni_pose", "En CPAP au masque nasal, que demande-t-on au patient ?", ["De fermer la bouche et de respirer par le nez"], ["De parler pendant la séance", "De respirer par la bouche", "De retenir sa respiration"], "rv_cr2210"),
      q("nz6", "vni_pose", "Situations à risque de fuites (plusieurs réponses) :", ["Patient barbu", "Sonde naso-gastrique"], ["Patient rasé avec masque adapté"], "rv_cr240926"),
      q("nz7", "vni_pose", "Pourquoi un circuit simple ne doit-il pas être 100 % étanche ?", ["Le CO2 doit sortir par la fuite, sinon le patient le réinhale"], ["Pour économiser l'O2", "Pour baisser l'IPAP", "Pour faire du bruit"], "rv_cr240926"),
      q("nz8", "vni_pose", "Avant la pose, le kiné (plusieurs réponses) :", ["Explique ce qu'il va faire", "Annonce les alarmes et le bruit", "Rassure le patient"], ["Pose le masque sans prévenir"], "rv_scaillet"),
      q("nz9", "vni_pose", "Matériel du circuit de VNI cité en cours :", ["Filtre antibactérien"], ["Garrot", "Sonde urinaire", "Électrodes de stimulation"], "rv_scaillet"),
      q("nz10", "vni_pose", "Installation idéale sous VNI :", ["Le plus assis possible, au fauteuil si c'est permis"], ["À plat strict", "Tête en bas", "Décubitus ventral obligatoire"], "rv_cr250515"),
      q("nz11", "vni_pose", "On sangle le masque quand :", ["Le pourcentage de fuites est correct"], ["Le patient dort", "L'IPAP atteint 25", "La FiO2 est à 100 %"], "rv_cr250515"),
      q("nz12", "vni_pose", "En circuit double branche :", ["Plus c'est étanche, plus c'est efficace, sans viser 100 %"], ["Les fuites sont indispensables", "Le CO2 sort par le masque", "L'étanchéité ne compte pas"], "rv_cr250515"),
      // vni_surv
      q("nv1", "vni_surv", "Que signifie MOVIES ?", ["Masque, O2, Volumes, IPAP, EPAP, Sang (ou SpO2)"], ["Mode, Oxygène, Ventilation, Intubation, Extubation, Sédation", "Mobilisation, Orthèse, Vélo, Isométrique, Escalier, Station debout", "Monitoring, O2, Vasopresseurs, Infusion, ECG, Sonde"], "rv_ficherespi"),
      q("nv2", "vni_surv", "Délai d'effet de la VNI sur la SpO2 :", ["Environ 30 s"], ["Environ 3 jours", "Environ 2 h", "Aucun effet"], "rv_ficherespi"),
      q("nv3", "vni_surv", "Délai pour voir l'effet sur l'état de conscience :", ["Environ 15 min"], ["Environ 1 s", "Environ 1 semaine", "Environ 24 h"], "rv_acronymes"),
      q("nv4", "vni_surv", "Signes qui doivent faire alerter le médecin sous VNI (plusieurs réponses) :", ["Hypotension", "Baisse de conscience", "Arythmie", "Désaturation importante"], ["SpO2 stable à 93 % et patient confortable"], "rv_scaillet"),
      q("nv5", "vni_surv", "Sous VNI, Vt 250 mL et FR 25 alors que l'aide est déjà à 15. Que fais-tu ?", ["J'appelle le médecin"], ["Je monte l'IPAP à 35", "Je baisse l'aide à 5", "J'arrête la VNI et je pars"], "rv_lisepremiers"),
      q("nv6", "vni_surv", "La gazométrie s'aggrave après environ 3 h de VNI bien conduite. Suite habituelle :", ["Intubation par le médecin"], ["Même réglage pendant une semaine", "Passage à 2 L/min aux lunettes", "Arrêt de toute ventilation"], "rv_stagealice"),
      q("nv7", "vni_surv", "Comment voit-on le trigger sur la courbe pression-temps ?", ["Un petit creux (dépression) juste avant le cycle"], ["Un plateau très long", "Une ligne plate à zéro", "Il ne se voit pas"], "rv_cr241128"),
      q("nv8", "vni_surv", "Causes fréquentes d'une désynchronisation sous VNI (plusieurs réponses) :", ["Fuites importantes", "IPAP mal réglée"], ["SpO2 à 95 %", "FiO2 à 30 %"], "rv_lisetrame"),
      q("nv9", "vni_surv", "VNI préventive précoce après extubation chez un patient à risque :", ["Elle réduit l'insuffisance respiratoire"], ["Elle est toujours inutile", "Elle est contre-indiquée", "Elle est réservée à l'enfant"], "rv_scaillet"),
      q("nv10", "vni_surv", "VNI « curative » chez des patients non sélectionnés en détresse après extubation :", ["Elle n'évite ni la réintubation ni la mortalité"], ["Elle supprime tout risque de réintubation", "Elle est obligatoire", "Elle divise la mortalité par deux"], "rv_scaillet"),
      q("nv11", "vni_surv", "Pourquoi éviter d'intuber un BPCO GOLD 3 ou 4 si possible ?", ["Il est très difficile à sevrer du ventilateur"], ["Il ne supporte pas l'O2", "Il ne peut pas être sédaté", "Il n'a pas de trachée"], "rv_stagealice"),
      q("nv12", "vni_surv", "Paramètres suivis sur l'écran de VNI (plusieurs réponses) :", ["Vt", "Ventilation minute", "Débit de fuite", "FR spontanée"], ["Glycémie"], "rv_cr240926"),
      q("nv13", "vni_surv", "Dans MOVIES, le « S » rappelle de contrôler :", ["Le sang (SaO2, pH, PaCO2) ou la SpO2"], ["La sédation", "Le sommeil", "La sonde urinaire"], "rv_ficherespi"),
      q("nv14", "vni_surv", "Patient BPCO stade 3 sous VNI dont les valeurs s'aggravent (CR 22/10/2026). Suite :", ["Intubation"], ["Optiflow à 2 L/min", "Retour à domicile", "Masque Venturi à 24 %"], "rv_cr2210"),
      q("nv15", "vni_surv", "Une difficulté à déclencher un cycle sous VNI peut venir (plusieurs réponses) :", ["D'une PEP intrinsèque importante", "De pressions d'insufflation trop élevées qui empêchent d'expirer complètement"], ["D'une SpO2 à 95 %", "D'une FiO2 à 30 %"], "rv_lisevi"),
      q("nv16", "vni_surv", "Vt visé dans MOVIES chez un patient en SDRA :", ["4 à 6 mL/kg de poids idéal"], ["10 à 12 mL/kg", "15 mL/kg", "1 mL/kg"], "rv_ficherespi"),
      // vni_kine
      q("nk1", "vni_kine", "Patient somnolent hypercapnique sous VNI : que fait le kiné (plusieurs réponses) ?", ["Le stimuler, lui parler", "L'asseoir au bord du lit si possible", "Le mobiliser pour augmenter sa ventilation minute"], ["Le laisser dormir à plat pour qu'il récupère"], "rv_vnigazo"),
      q("nk2", "vni_kine", "Pourquoi mobiliser un patient sous VNI ?", ["Il ventile plus, la PaCO2 baisse et la compliance s'améliore"], ["Pour augmenter sa PaCO2", "Pour diminuer sa FR à 5", "Ça n'a aucun effet"], "rv_vnigazo"),
      q("nk3", "vni_kine", "Ordre de conduite devant une acidose respiratoire selon la trame :", ["O2 ou interface, désencombrement, BiPAP, ballon si pas de BiPAP"], ["Intubation, puis désencombrement, puis O2", "Rien, puis BiPAP", "Ballon, puis O2, puis rien"], "rv_lisetrame"),
      q("nk4", "vni_kine", "Sans BiPAP disponible, comment augmenter la ventilation d'un patient hypercapnique somnolent ?", ["Au ballon de réanimation (BAVU), en jouant sur FR et Vt"], ["Avec des lunettes à 15 L/min", "Avec un masque Venturi à 50 %", "En le laissant à plat"], "rv_lisetrame"),
      q("nk5", "vni_kine", "Facteurs d'hypoventilation après une chirurgie abdominale (plusieurs réponses) :", ["Douleur", "Gaine abdominale serrée", "Obésité"], ["Station debout"], "rv_cr1211"),
      q("nk6", "vni_kine", "Après une chirurgie du petit bassin, pourquoi les bases sont-elles atélectasiées ?", ["Opérée tête en bas, le poids des viscères a comprimé les poumons"], ["Elle a trop marché", "L'O2 était trop bas", "Le diaphragme était trop actif"], "rv_cr1211"),
      q("nk7", "vni_kine", "Femme obèse en salle de réveil après chirurgie du petit bassin qui désature (plusieurs réponses) :", ["Redresser et desserrer la gaine si c'est permis", "Stimuler", "Proposer une CPAP pour l'atélectasie"], ["La laisser tête en bas"], "rv_cr250313"),
      q("nk8", "vni_kine", "Après une chirurgie d'épaule sous bloc, le patient désature et utilise ses muscles accessoires. On suspecte :", ["Une paralysie du nerf phrénique"], ["Un pneumothorax bilatéral", "Une embolie gazeuse", "Une intoxication au CO"], "rv_vnigazo"),
      q("nk9", "vni_kine", "Signe radiologique d'une paralysie diaphragmatique :", ["Coupole surélevée"], ["Coupole abaissée et aplatie", "Cœur en goutte", "Opacité apicale"], "rv_vnigazo"),
      q("nk10", "vni_kine", "Chez l'obèse morbide couché, la pression pleurale aux bases :", ["Peut devenir positive, d'où l'intérêt de verticaliser"], ["Devient très négative", "Ne change pas", "Est toujours nulle"], "rv_cr1211"),
      q("nk11", "vni_kine", "À chaque changement de position sous VNI, on vérifie :", ["La SpO2"], ["La glycémie", "La température", "Le poids"], "rv_cr250327"),
      q("nk12", "vni_kine", "Le kiné présent qui explique et rassure :", ["Améliore nettement la tolérance de la VNI"], ["N'a aucune influence", "Augmente les fuites", "Doit laisser l'infirmier seul"], "rv_scaillet"),
      q("nk13", "vni_kine", "Mise au fauteuil d'une patiente sous BiPAP : que vérifies-tu une fois au fauteuil ?", ["La SpO2, en augmentant l'O2 si besoin"], ["Rien, elle va forcément mieux", "La glycémie seulement", "Le poids"], "rv_cr250327"),
      q("nk14", "vni_kine", "Pourquoi verticaliser une patiente obèse en hypercapnie ?", ["La pression pleurale des bases redevient négative et les bases ventilent"], ["Pour augmenter la PaCO2", "Pour baisser la FiO2 réglée", "Pour fatiguer le diaphragme"], "rv_cr250327"),
      q("nk15", "vni_kine", "La ventilation au ballon (BAVU) chez un patient somnolent hypercapnique permet surtout de jouer sur :", ["Le Vt et la FR"], ["La FiO2 seulement", "La température", "La glycémie"], "rv_lise3011"),
      q("nk16", "vni_kine", "Avant de programmer une VNI, la première chose à regarder :", ["La gazométrie"], ["Le tour de taille", "Le bilan articulaire", "La couleur des draps"], "rv_lisepremiers")
    ],
    patients: [
      { id: "rv_p_86", nom: "Femme de 86 ans, acidose respiratoire en USI", origine: "cours", src: "rv_cr250515", desc: "Carbonarcose après une sédation pour réduire une fracture ouverte de la malléole droite (fixateur externe). Obèse (100 kg, 1,60 m), asthmatique, comateuse, FR 43.", attrs: { o2: "vni", fatigue: true, oedeme: ["chevilleD", "chevilleG", "molletD", "molletG"], cicatrices: [{ zone: "chevilleD", recent: true }] } },
      { id: "rv_p_durand", nom: "Femme BPCO stade IV sur Covid, sous VNI au fauteuil", origine: "cours", src: "rv_cr250417", desc: "Retrouvée somnolente à terre la nuit, admise en réanimation, consciente sous VNI, voie centrale.", attrs: { o2: "vni", dyspnee: true, tonneau: true } },
      { id: "rv_p_hyst", nom: "Femme obèse, hypercapnie après hystérectomie", origine: "cours", src: "rv_cr250327", desc: "Détresse respiratoire subaiguë hypercapnique après une hystérectomie par laparoscopie ; érysipèle des deux jambes ; se déplace peu avec un déambulateur.", attrs: { o2: "vni", aide: "deamb", douleurs: [{ zone: "molletD", type: "inflammatoire" }, { zone: "molletG", type: "inflammatoire" }], fatigue: true } },
      { id: "rv_p_oap", nom: "Femme de 82 ans, OAP sur poussée hypertensive", origine: "cours", src: "rv_cr2210", desc: "OAP avec détresse respiratoire après l'arrêt de ses antihypertenseurs pour un examen ; vit en maison de repos, se déplace en chaise roulante.", attrs: { o2: "vni", dyspnee: true, aide: "fauteuil" } },
      { id: "rv_p_trame", nom: "Patient en acidose respiratoire sous lunettes à 6 L/min", origine: "cours", src: "rv_lisetrame", desc: "Arrive dans le service en acidose respiratoire, lunettes à 6 L/min, encombré.", attrs: { o2: "lunettes", dyspnee: true, tirage: true, toux: true } }
    ],
    cas: [
      {
        id: "rv_cas_86", origine: "cours", src: ["rv_cr250515", "rv_geria"], patient: "rv_p_86", fiche: "rv_vni",
        titre: "Patiente de 86 ans en carbonarcose : mettre une BiPAP",
        etapes: [
          { type: "lecture", html: `<p>Patiente de 86 ans arrivée en USI pour une acidose respiratoire. Opérée il y a une semaine d'une fracture ouverte de la malléole externe droite (fixateur externe). Elle a fait une carbonarcose au décours de la sédation. Elle n'est pas intubée.</p>` },
          { type: "anamnese", items: [
            { q: "Taille et poids ?", r: "1,60 m et 100 kg : obésité morbide, syndrome restrictif.", p: 1 },
            { q: "Antécédents respiratoires et cardiaques ?", r: "Asthme, tableau de BPCO non suivi (ancienne fumeuse), HTA avec hypertrophie du ventricule gauche.", p: 1 },
            { q: "Est-elle consciente ?", r: "Comateuse : grognements à la douleur avec retrait.", p: 1 },
            { q: "Quels médicaments ?", r: "Pantomed, Asaflow, Covercil, Lasix, Duovent.", p: 2 },
            { q: "Comment vivait-elle ?", r: "Seule, elle se déplaçait chez elle sans aide technique.", p: 3 }
          ] },
          { type: "bilans", ordre: ["Paramètres vitaux avec le débit d'O2", "Constat d'attitude", "Gazométrie", "Auscultation", "Bilan trophique"], items: [
            { b: "Paramètres vitaux avec le débit d'O2", r: "SpO2 85 % sous lunettes à 2 L/min, FC 110, FR 43, TA 120/65, T° 37,2 °C.", ok: true },
            { b: "Constat d'attitude", r: "Lit presque à plat, voie centrale jugulaire, sonde vésicale, pas de cathéter artériel ni de drain.", ok: true },
            { b: "Gazométrie", r: "pH 7,10 ; PaCO2 130 mmHg.", ok: true },
            { b: "Auscultation", r: "Pas d'encombrement ; polypnée à petits volumes.", ok: true },
            { b: "Bilan trophique", r: "Hypoperfusion au site de fracture, œdème des membres inférieurs, pas d'escarre.", ok: true },
            { b: "Test de marche de 6 min", r: "Impossible et hors de propos.", ok: false }
          ] },
          { type: "choix", src: "rv_cr250515", items: [
            { t: "Je l'installe le plus assise possible.", ok: true, why: "Le décubitus aggrave l'hypoventilation chez l'obèse." },
            { t: "Je mets une BiPAP : FiO2 30 % puis selon la SpO2, EPAP 5, IPAP réglée sur le Vt, ventilation minute visée de 10 à 12 L/min.", ok: true, why: "Acidose hypercapnique : il faut ventiler, et même sur-ventiler." },
            { t: "Je commence par des aides basses et je monte selon la tolérance et les fuites.", ok: true, why: "Il ne faut pas surpressuriser des alvéoles fragiles." },
            { t: "Je monte l'O2 à 15 L/min aux lunettes et j'attends.", ok: false, why: "L'O2 ne fait pas baisser le CO2 et les lunettes ne dépassent pas 6 L/min." },
            { t: "Je la stimule et je la mobilise dès que possible, puis fauteuil si la TA le permet.", ok: true, why: "Bouger augmente la ventilation minute et évacue le CO2." }
          ] },
          { type: "lecture", html: `<p><b>Remarques du prof :</b> ne pas surpressuriser ; dans un OAP, un seul niveau suffit. La SpO2 peut afficher 100 %, la SaO2 jamais. Question de jury : « Étant donné sa FR, à quoi s'attendre ? » : une polypnée à petits volumes, peu efficace.</p>` }
        ]
      },
      {
        id: "rv_cas_durand", origine: "cours", src: ["rv_cr250417"], patient: "rv_p_durand", fiche: "rv_vni",
        titre: "Contrôler une VNI mal réglée (cas type d'examen)",
        etapes: [
          { type: "lecture", html: `<p>Patiente admise en pneumologie pour une décompensation de BPCO stade IV sur Covid-19, retrouvée somnolente à terre la nuit, puis admise en réanimation. Elle est au fauteuil sous VNI, consciente (Glasgow 15/15).</p><p>Gazométrie : pH 7,26 ; PaCO2 72 ; PaO2 50 ; SaO2 80 % ; HCO3- 38 ; BE −4.</p>` },
          { type: "bilans", ordre: ["Constat d'attitude", "Paramètres vitaux avec la FiO2", "Réglages de la VNI"], items: [
            { b: "Constat d'attitude", r: "Au fauteuil sous VNI, voie centrale.", ok: true },
            { b: "Paramètres vitaux avec la FiO2", r: "SpO2 100 % sous FiO2 100 %.", ok: true },
            { b: "Réglages de la VNI", r: "PEEP 5 ; pression notée 25 ; Vt 600 mL pour un poids idéal de 70 kg ; FR machine 26 pour une FR spontanée de 18.", ok: true },
            { b: "Spirométrie", r: "Pas réalisable sous VNI en aigu.", ok: false }
          ] },
          { type: "choix", src: "rv_cr250417", items: [
            { t: "La SpO2 à 100 % est trop haute pour une BPCO : je baisse la FiO2 vers une cible de 88 à 92 %.", ok: true, why: "Risque d'hypercapnie par levée de la vasoconstriction hypoxique." },
            { t: "La pression à 25 est à la limite de l'insufflation gastrique.", ok: true, why: "On ne dépasse pas 25 cmH2O en VNI." },
            { t: "Le Vt de 600 mL est trop élevé pour 70 kg de poids idéal (cible 420 à 560 mL).", ok: true, why: "6 à 8 mL/kg × 70 kg." },
            { t: "La FR machine à 26 est bonne car plus haute que celle de la patiente.", ok: false, why: "On se cale juste sous la FR spontanée (16) pour éviter l'asynchronie." },
            { t: "Pour faire baisser la PaCO2, il faut une ventilation minute au-dessus de 7 L/min.", ok: true, why: "À pH neutre, 5 à 7 L/min ; en acidose, plus." }
          ] },
          { type: "lecture", html: `<p>Le CR note « Vt 600 mL/min » et dit qu'avec 18 cycles c'est « largement suffisant » : 600 mL × 18 = 10,8 L/min, ce qui dépasse bien 7 L/min. L'unité « mL/min » est une erreur de prise de notes (voir les remarques).</p>` }
        ]
      },
      {
        id: "rv_cas_hyst", origine: "cours", src: ["rv_cr250327"], patient: "rv_p_hyst", fiche: "rv_vni",
        titre: "Hypercapnie après hystérectomie : BiPAP et mise au fauteuil",
        etapes: [
          { type: "lecture", html: `<p>Patiente née en 1959, obèse, diabétique, opérée d'une hystérectomie par laparoscopie pour un adénocarcinome de l'endomètre. Depuis, sa respiration se dégrade : détresse respiratoire subaiguë avec insuffisance respiratoire hypercapnique.</p>` },
          { type: "anamnese", items: [
            { q: "Que s'est-il passé pendant l'opération ?", r: "Anesthésie générale, position tête en bas (Trendelenburg), CO2 insufflé dans l'abdomen : ballonnement pendant quelques semaines.", p: 1 },
            { q: "Comment dort-elle ?", r: "Mal, avec une somnolence pendant la journée.", p: 2 },
            { q: "Comment se déplace-t-elle ?", r: "Très peu, avec un déambulateur ; elle ne se lève plus seule du lit.", p: 1 },
            { q: "Prend-elle du Lasix ?", r: "Oui, pour une oligurie : risque d'hypotension.", p: 2 }
          ] },
          { type: "bilans", ordre: ["Paramètres vitaux avec le débit d'O2", "Gazométries", "Auscultation", "Douleur"], items: [
            { b: "Paramètres vitaux avec le débit d'O2", r: "SpO2 96 % sous 2 L/min, FC 120 à 130, FR 22, PAM 73 mmHg.", ok: true },
            { b: "Gazométries", r: "La nuit sous VNI : pH 7,19, PaCO2 73, PaO2 64, HCO3- 31. À 13 h sans masque après la BiPAP : pH 7,31, PaCO2 53, PaO2 69, HCO3- 27.", ok: true },
            { b: "Auscultation", r: "On s'attend à une hypoventilation des bases et à un encombrement.", ok: true },
            { b: "Douleur", r: "Douleur des jambes (érysipèle) à 4/10.", ok: true }
          ] },
          { type: "choix", src: "rv_cr250327", items: [
            { t: "Je poursuis la BiPAP, qui a fait remonter le pH.", ok: true, why: "Le pH passe de 7,19 à 7,31 : la ventilation est efficace." },
            { t: "Avec l'accord du médecin, je la mets au fauteuil et je contrôle la SpO2, en augmentant l'O2 si besoin.", ok: true, why: "Verticaliser rend la pression pleurale plus négative aux bases et les ventile." },
            { t: "Je la laisse couchée à plat pour la reposer.", ok: false, why: "Couchée, l'obésité et les viscères compriment les bases." },
            { t: "Je fais travailler en actif pour augmenter sa ventilation.", ok: true, why: "L'effort augmente la ventilation minute et recrute les zones hypoventilées." }
          ] }
        ]
      },
      {
        id: "rv_cas_oap", origine: "cours", src: ["rv_cr2210"], patient: "rv_p_oap", fiche: "rv_vni",
        titre: "OAP de la femme de 82 ans : CPAP et verticalisation",
        etapes: [
          { type: "lecture", html: `<p>Patiente de 82 ans en soins intensifs pour une détresse respiratoire due à un OAP sur poussée hypertensive. Ses antihypertenseurs avaient été arrêtés 3 jours avant une échographie transœsophagienne.</p>` },
          { type: "bilans", ordre: ["Constat d'attitude", "Paramètres vitaux avec le débit d'O2", "Dyspnée", "Auscultation"], items: [
            { b: "Constat d'attitude", r: "Au lit, lunettes à 2 L/min, sonde urinaire, cathéter artériel, voie centrale.", ok: true },
            { b: "Paramètres vitaux avec le débit d'O2", r: "SpO2 88 %, FC 115, FR 24, TA 136/82.", ok: true },
            { b: "Dyspnée", r: "EVA 4/10, orthopnée.", ok: true },
            { b: "Auscultation", r: "Hypoventilation gauche, encombrement droit.", ok: true },
            { b: "Bilan articulaire complet", r: "Pas prioritaire.", ok: false }
          ] },
          { type: "choix", src: "rv_cr2210", items: [
            { t: "Je propose une CPAP au masque, bouche fermée, qui repousse l'eau des alvéoles.", ok: true, why: "OAP sans acidose hypercapnique : un seul niveau suffit." },
            { t: "Je verticalise la patiente et je la calme.", ok: true, why: "L'orthopnée montre qu'elle respire mieux assise ; l'anxiété augmente la consommation d'O2." },
            { t: "Je mets une BiPAP avec IPAP 25 pour faire baisser le CO2.", ok: false, why: "Rien n'indique d'acidose hypercapnique ; trop de pression abîme des alvéoles fragiles." },
            { t: "Le médecin donne des vasopresseurs pour baisser la TA.", ok: false, why: "Les vasopresseurs font monter la TA. Pour la baisser, on utilise des vasodilatateurs ou des antihypertenseurs, avec un diurétique (Lasix)." }
          ] }
        ]
      },
      {
        id: "rv_cas_trame", origine: "cours", src: ["rv_lisetrame"], patient: "rv_p_trame", fiche: "rv_vni",
        titre: "Appel en urgence pour une acidose respiratoire sous lunettes",
        etapes: [
          { type: "lecture", html: `<p>Tu es appelé en urgence : un patient arrive dans le service en acidose respiratoire, sous lunettes à 6 L/min.</p><p>Gazométrie : pH 7,28 ; PaO2 60 ; PaCO2 58 ; SaO2 87 % ; HCO3- 27 ; BE −2.</p>` },
          { type: "bilans", ordre: ["Paramètres vitaux avec le débit d'O2", "Auscultation", "Gazométrie"], items: [
            { b: "Paramètres vitaux avec le débit d'O2", r: "SaO2 87 % sous 6 L/min aux lunettes.", ok: true },
            { b: "Auscultation", r: "Encombré.", ok: true },
            { b: "Gazométrie", r: "Acidose respiratoire aiguë non compensée (HCO3- et BE normaux).", ok: true }
          ] },
          { type: "choix", src: "rv_lisetrame", items: [
            { t: "J'augmente l'O2 ou je change d'interface (les lunettes sont déjà à 6 L/min).", ok: true, why: "Première étape de la trame." },
            { t: "Je désencombre par AFE.", ok: true, why: "Deuxième étape." },
            { t: "Je mets une BiPAP pour augmenter la ventilation minute.", ok: true, why: "Troisième étape : pH 7,28 avec PaCO2 58." },
            { t: "Sans BiPAP, j'augmente FR et Vt au ballon de réanimation.", ok: true, why: "Quatrième étape." },
            { t: "Je règle la FR de la BiPAP au-dessus de la FR du patient.", ok: false, why: "On se cale sous la FR spontanée." },
            { t: "Si aucun trigger n'apparaît sur la courbe et que le patient se dégrade, on pense à l'intubation.", ok: true, why: "Remarque de la trame." }
          ] }
        ]
      }
    ]
  };

  /* =====================================================================
     FICHE 3 : VENTILATION INVASIVE ET RÉANIMATION
     ===================================================================== */
  const fVI = {
    id: "rv_vi", cell: "respi", titre: "Ventilation invasive et réanimation : réglages, pressions, sevrage et kiné en USI", court: "Ventilation invasive",
    statut: "Fiche de cours construite d'abord sur le cours de ventilation mécanique du 19/11/2026, puis sur les cours de base (VI, Mode d'emploi réa, Acronymes, Examens-Bilans), les CR 2024-25 et les notes de Lise. Les valeurs qui varient entre supports sont signalées dans les remarques.",
    resume: [
      "La ventilation mécanique est toujours en pression positive : c'est l'inverse de la physiologie, avec un retentissement sur le retour veineux et la TA.",
      "Volume contrôlé (VC) : on impose le Vt, on surveille les pressions. Pression contrôlée : on impose la pression, on surveille le Vt. VS-AI-PEP : le patient déclenche, la machine l'aide.",
      "Réglages de base en VC : FiO2 selon SpO2 ; Vt 6 à 8 mL/kg de poids idéal (4 à 6 en SDRA) ; FR 12 à 18 (20 à 25 en SDRA) ; Ti ≈ 1 s, I/E 1/2 ; PEP 5 cmH2O.",
      "Ventilation minute = Vt × FR ≈ 100 mL/kg/min, environ 7 L/min à pH normal. Hypercapnie : on monte la FR ou le Vt. Hypoxémie : on monte la FiO2 ou la PEP.",
      "P plateau ≤ 30 cmH2O ; driving pressure (P plateau − PEP) ≤ 15 cmH2O ; crête − plateau = résistances (morsure, sécrétions, bronchospasme, coudure).",
      "Compliance = Vt / driving pressure ; normale environ 60 à 100 mL/cmH2O (60 à 200 dans MACROVIE). Elle est basse dans le SDRA, haute dans l'emphysème.",
      "Auto-PEP : le débit expiratoire ne revient pas à zéro. On la mesure par une pause télé-expiratoire. On la combat en allongeant le temps expiratoire (baisser le Ti ou la FR).",
      "Patient hypotendu : d'abord le garder en vie. Vt bas, PEP 0, FiO2 100 %, puis on corrige la capnie quand la TA est stabilisée.",
      "MACROVIE : Mode, Air trapping, Compliance, Résistances, Oxygène, Volumes, I/E, PEEP.",
      "Ballonnet à environ 30 cmH2O (20 à 30), contrôlé après chaque mobilisation. Tête de lit à 30° au moins pour prévenir la pneumopathie sous ventilateur.",
      "Sevrage : passage en aide inspiratoire, épreuve de ventilation spontanée (T-tube, aide 0 et PEP 0), puis extubation si conscience, toux, gazométrie et FiO2 basse.",
      "Aspiration endotrachéale : préoxygéner, descendre sans aspirer, remonter en aspirant. Décubitus ventral au moins 16 h par jour dans le SDRA sévère.",
      "Le kiné mobilise tôt en USI : la faiblesse acquise apparaît vite et 66 % des patients ventilés plus de 7 jours ne marchent pas 50 m seuls un mois après."
    ],
    pro: [
      {
        id: "vi_intub", titre: "Intubation, sonde, ballonnet et trachéotomie", src: ["rv_scaillet", "rv_modeemploi", "rv_cr241114", "rv_cr1911vp", "rv_cr1911vm", "rv_recap", "rv_0802", "rv_cr1211", "rv_lise1502"],
        html: `<p><b>Pourquoi intuber ?</b> Pour suppléer une défaillance respiratoire (échec de VNI, carbonarcose) et pour protéger les voies aériennes d'un patient inconscient (risque d'inhalation). Un Glasgow ≤ 8 est un critère d'intubation ; un Glasgow à 3 aussi, à cause du reflux gastrique.</p>
        <p><b>Déroulement :</b></p>
        <ol><li>Monitoring continu (risque de chute de TA), sédation, parfois curarisation.</li>
        <li>Préoxygénation au ballon (BAVU) à 100 %, avec une canule de Guedel si besoin.</li>
        <li>Tube d'environ 8,0 mm chez l'adulte, repère vers 22 cm à la commissure des lèvres. Un tube plus petit (7 mm) augmente beaucoup les résistances (le rayon compte à la puissance 4).</li>
        <li>Manœuvre de Sellick à la demande du médecin (controversée).</li>
        <li>Gonfler le ballonnet à la seringue, puis contrôler sa pression au manomètre.</li>
        <li>Vérifier : le thorax se soulève, on ausculte les deux poumons et l'estomac, on regarde la capnographie.</li></ol>
        <p><b>Intubation sélective :</b> si le tube descend trop, il passe dans la bronche souche droite (plus verticale). Seul le poumon droit est ventilé et le poumon gauche fait une atélectasie. Si on n'entend rien à gauche, on remonte le tube.</p>
        <p><b>Ballonnet :</b> il assure l'étanchéité et empêche les sécrétions de descendre. Pression autour de 30 cmH2O (20 à 30 selon le Résumé réa, 25 à 30 dans le cours VI). En dessous, risque d'inhalation ; au-dessus, risque de trachéomalacie ou de sténose. On la vérifie après chaque mobilisation ou changement de position.</p>
        <p><b>Tube et espace mort :</b> le tube remplace les voies aériennes supérieures, mais le circuit ajoute de l'espace mort et des résistances. La trachéotomie réduit l'espace mort et les résistances et facilite le sevrage d'une ventilation longue. L'orifice se referme vite après la décanulation (2 à 3 jours).</p>
        <p><b>Glasgow chez l'intubé :</b> la réponse verbale n'est pas évaluable. Le cours du 19/11/2026 note « V = T » et un maximum de 10 ; le CR du 12/11/2026 donne 11/15.</p>
        <p><b>En ventilation mécanique, la pression pleurale devient positive</b>, puisque la machine insuffle.</p>`
      },
      {
        id: "vi_modes", titre: "Les modes ventilatoires", src: ["rv_cr1911vm", "rv_cr1911vp", "rv_vi", "rv_acronymes", "rv_lisevi", "rv_cr241107", "rv_cr241017", "rv_resumerea", "rv_scaillet"],
        html: `${T([["VC (volume contrôlé), VAC", "Le Vt et la FR", "Les pressions (crête, plateau)", "Mode de référence. Débit constant pendant l'inspiration. Risque de barotraumatisme."], ["PC (pression contrôlée)", "La pression d'insufflation (IPAP ≤ 30), FR, Ti, PEP", "Le Vt obtenu", "Débit décélérant. Le Vt varie avec la compliance et les résistances. Risque de volotraumatisme si le Vt dérive."], ["VS-AI-PEP (aide inspiratoire)", "La PEP et l'aide (10 à 15 cmH2O)", "Vt, FR, confort", "Le patient déclenche chaque cycle (trigger). Mode de sevrage et de VNI."]], ["Mode", "On règle", "On surveille", "Remarques"])}
        <p><b>Modes hybrides :</b></p>
        <ul><li>VAC (assistée-contrôlée) : la machine assure une FR minimale ; si le patient déclenche, il reçoit le volume programmé (une FR réglée à 20 peut devenir 21 ou 22). Surveiller le Vt et les pressions.</li>
        <li>VACI et VIV (volume contrôlé avec aide ajoutée) : si le patient déclenche, la machine surpressurise ; le cours VI les juge dangereux ou peu recommandés.</li>
        <li>PC-BiPAP (grand I) : pression contrôlée où le patient peut respirer entre les cycles.</li></ul>
        <p><b>Trigger :</b> trop sensible, la machine déclenche au moindre mouvement de tuyau et peut épuiser le patient ; pas assez sensible, le patient doit faire un gros effort pour déclencher. Quand le patient déclenche de plus en plus, il se réveille : on peut passer en aide inspiratoire.</p>
        <p><b>Ordre habituel du sevrage :</b> volume contrôlé, puis aide inspiratoire (VS-AI-PEP), puis extubation.</p>
        <p><b>Choix du mode :</b> le VC est le plus utilisé ; si les pressions deviennent trop hautes en VC, on peut passer en PC pour limiter le barotraumatisme, quitte à un peu hypoventiler. Le patient curarisé ou très sédaté reste en mode contrôlé. La CPAP n'est pas un mode de ventilation contrôlée.</p>
        <p>Ventilé ne veut pas dire dans le coma : un patient en aide inspiratoire peut être conscient et se mobiliser.</p>`
      },
      {
        id: "vi_regl", titre: "Réglages de base et leviers sur la gazométrie", src: ["rv_cr1911vm", "rv_cr1911vp", "rv_vi", "rv_cr241114", "rv_cr241017", "rv_lisevi", "rv_cr2210", "rv_ficherespi"],
        html: `${T([["FiO2", "Selon SpO2 puis PaO2/SaO2", "Premier réglage ; 100 % en urgence puis on redescend"], ["Vt", "6 à 8 mL/kg de poids idéal (formule de Lorentz)", "4 à 6 mL/kg en SDRA : ventilation protectrice"], ["FR", "12 à 18 cycles/min", "20 à 25 en SDRA (petits volumes, FR plus haute)"], ["Ventilation minute", "≈ 100 mL/kg/min, ≈ 7 L/min pour 70 kg", "Plus haute en acidose hypercapnique"], ["Ti", "≈ 1 s", "I/E 1/2 ; 1/3 voire 1/4 si air trapping"], ["PEP", "5 cmH2O au départ", "5 à 15 (ou 5 à 12) ; recrute et améliore surtout la PaO2"]], ["Paramètre", "Réglage de base", "Remarque"])}
        <p><b>Rapport P/F et SDRA (Berlin, PEP ≥ 5) :</b> 200 à 300 léger, 100 à 200 modéré, &lt; 100 sévère. Un P/F bas ne suffit pas : il faut aussi un contexte aigu, des opacités bilatérales et une hypoxémie qui ne s'explique pas seulement par le cœur. Avec SpO2/FiO2, le seuil est &lt; 350.</p>
        <p><b>Leviers :</b></p>
        <ul><li>Acidose respiratoire (hypercapnie) : augmenter la ventilation minute. Monter la FR (levier le plus simple) ou le Vt sans dépasser 8 mL/kg, en surveillant les pressions. Chez un patient à risque d'auto-PEP, monter la FR raccourcit l'expiration : c'est un compromis.</li>
        <li>Hypoxémie : monter la FiO2, puis la PEP progressivement selon la SpO2, le P/F, la TA et les pressions.</li></ul>
        <p><b>Objectif :</b> corriger le pH (≥ 7,30 à 7,35), pas normaliser la PaCO2. Un BPCO qui vit avec des HCO3- à 37 ferait une alcalose post-hypercapnique si on baissait sa PaCO2 à 40 trop vite. Gazométrie de contrôle 20 à 30 min après un changement.</p>
        <p><b>Le patient hypotendu :</b> la pression positive diminue le retour veineux, la précharge, le débit cardiaque et la TA. Chez un patient instable, on le maintient d'abord en vie :</p>
        <ul><li>Vt bas (4 à 6 mL/kg, même sans SDRA) ;</li>
        <li>PEP à 0 au départ ;</li>
        <li>FiO2 100 %, FR augmentée pour compenser une partie de la ventilation minute ;</li>
        <li>on remonte la PEP et le Vt quand l'équipe a stabilisé la TA (remplissage, puis vasopresseurs comme la noradrénaline).</li></ul>
        <p>« L'hypotension tue le patient avant l'acidose hypercapnique » : on regarde toujours la TA et la FC avant de régler ou d'augmenter la PEP et le Vt. Une PEP au-dessus de 12 expose au choc de reventilation.</p>
        ${W("Le cas du 22/10/2026 montre l'erreur à éviter : un BPCO hypotendu (TA 76/32) intubé avec une PEP de 10 à 12 est décédé (baisse du retour veineux, de la précharge et de la TA).")}`
      },
      {
        id: "vi_press", titre: "Pressions, compliance, résistances et courbes", src: ["rv_cr1911vm", "rv_cr1911vp", "rv_vi", "rv_acronymes", "rv_lisevi", "rv_cr241107", "rv_cr241017", "rv_resumerea", "rv_cr250213", "rv_cr250220"],
        html: `<p><b>Courbe pression-temps en VC :</b></p>
        <ol><li>Ligne de base = PEP (la pression ne redescend jamais à 0).</li>
        <li>Montée rapide jusqu'à la <b>pression de crête</b> : la machine vainc les résistances (circuit, filtre, sonde, morsure, sécrétions). Elle ne s'exerce pas sur les alvéoles.</li>
        <li>Pause télé-inspiratoire : <b>pression de plateau</b>, reflet de la pression dans les alvéoles.</li>
        <li>Expiration passive jusqu'à la PEP.</li></ol>
        ${T([["P plateau", "≤ 30 cmH2O", "Au-delà : barotraumatisme. Dépend du Vt et de la compliance."], ["Driving pressure", "P plateau − PEP ≤ 15 cmH2O", "Au-delà : poumon difficile à ventiler, mortalité plus élevée."], ["Crête − plateau", "Reflet des résistances", "Gros écart : morsure, sonde coudée ou étroite, sécrétions, bronchospasme."], ["Compliance", "Vt / driving pressure ; normale ≈ 60 à 100 mL/cmH2O", "Basse en SDRA, fibrose ; haute en emphysème."], ["Résistances", "2,5 à 5 cmH2O/L/s", "Au-delà de 5 : obstruction (bronchospasme, encombrement)."]], ["Notion", "Valeur", "À retenir"])}
        <p><b>Exemples de calcul :</b> Vt 450 mL, P plateau 27, PEP 7 : driving pressure 20, compliance 450/20 ≈ 22 mL/cmH2O, typique du SDRA. Vt 450 et driving pressure 19 : 24 mL/cmH2O.</p>
        <p><b>Interpréter :</b> crête haute avec plateau normal = résistances (aspirer, kiné de désencombrement, bronchodilatateur, vérifier le tube). Plateau haut = compliance basse ou Vt trop grand : réduire le Vt. Chez l'obèse opéré de l'abdomen, verticaliser et desserrer la gaine améliore la compliance.</p>
        <p><b>Courbe débit-temps :</b> le débit expiratoire doit revenir à zéro avant le cycle suivant. Sinon, il y a du piégeage (voir le chapitre sur l'auto-PEP).</p>
        <p><b>Signes à lire sur les courbes :</b> des oscillations (vaguelettes) sur la courbe = sécrétions, il faut aspirer. Un petit creux avant le cycle = le patient déclenche (trigger).</p>
        <p><b>Constante de temps :</b> produit de la compliance par les résistances ; il faut plusieurs constantes de temps pour expirer complètement.</p>
        ${W("Des notes du Cours 2 assimilent la driving pressure à « crête − plateau ». C'est faux : la driving pressure est P plateau − PEP. Crête − plateau reflète les résistances.")}`
      },
      {
        id: "vi_autopeep", titre: "Auto-PEP, PEP optimale et lésions induites par la ventilation", src: ["rv_cr1911vm", "rv_cr1911vp", "rv_peepi", "rv_vi", "rv_acronymes", "rv_lisevi", "rv_resumerea", "rv_cr241212", "rv_cr241017"],
        html: `<p><b>Air trapping et auto-PEP :</b> si le patient n'a pas fini d'expirer quand le cycle suivant commence, de l'air reste dans les poumons. C'est l'hyperinflation dynamique, qui crée une pression supplémentaire en fin d'expiration : l'auto-PEP (PEP intrinsèque). Patients à risque : BPCO, asthme.</p>
        <p><b>Mesure :</b> pause télé-expiratoire de 5 à 10 s chez un patient entièrement ventilé. On lit la PEP totale. Exemple : 7 cmH2O lus pour 5 réglés, donc 2 cmH2O d'auto-PEP.</p>
        <p><b>Risques :</b> barotraumatisme, baisse du retour veineux et hypotension, asynchronies (le patient doit d'abord vaincre l'auto-PEP pour déclencher). Un pouls paradoxal (variation de la TA avec la respiration) peut en être un signe.</p>
        ${T([["Baisser le Ti (ex. 1 s à 0,85 s), I/E 1/3 ou 1/4", "Plus de temps pour expirer", "La machine délivre le même Vt plus vite : la pression de crête monte"], ["Baisser la FR", "Cycles plus longs", "La ventilation minute baisse : risque d'hypercapnie. Exemple du cours : 10 min après, pH 7,10 et PaCO2 75 ; il aurait fallu augmenter le Vt"]], ["Levier", "Effet", "Risque"])}
        <p>Calmer le patient (anxiété, douleur) diminue aussi sa FR. En mode assisté, régler une PEP externe à environ 80 % de l'auto-PEP aide le patient à déclencher. En mode contrôlé, les PEP s'additionnent.</p>
        <p><b>Le ballon de baudruche :</b> un ballon neuf est dur à gonfler au début, puis plus facile, puis redevient dur s'il est trop gonflé. Monter la PEP améliore la compliance jusqu'à un seuil (alvéoles maintenues ouvertes), puis la fait baisser (surdistension). La PEP optimale est celle où la compliance est la meilleure.</p>
        <p><b>Manœuvre de recrutement :</b> PEP montée brièvement à 30 à 40 cmH2O (cas du choc septique : 30 cmH2O par courtes sessions). Elle est discutée à cause du risque de barotraumatisme.</p>
        <p><b>Lésions induites par la ventilation :</b> volotraumatisme (Vt trop grand), barotraumatisme (P plateau &gt; 30), biotraumatisme (inflammation). Souvent sans signe immédiat, elles aggravent un SDRA et compliquent le sevrage. « C'est la difficulté à ventiler le patient qui le tue. »</p>
        ${W("Des notes écrivent « allonger le Ti » contre l'auto-PEP ou « en VC pas de PEP extrinsèque ». C'est le temps expiratoire qu'il faut allonger ; on peut garder une PEP en VC.")}`
      },
      {
        id: "vi_macro", titre: "MACROVIE, bilan en réanimation et monitoring", src: ["rv_cr250220", "rv_acronymes", "rv_lisevi", "rv_resumerea", "rv_modeemploi", "rv_respi4", "rv_cr241114", "rv_cr1911vp", "rv_duprez", "rv_ficherespi"],
        html: `<p><b>MACROVIE</b> (à dérouler devant un ventilateur) :</p>
        ${T([["M", "Mode", "VC, PC, aide inspiratoire"], ["A", "Air trapping (et asynchronies)", "Courbe débit-temps : retour à zéro ?"], ["C", "Compliance", "Vt / driving pressure ; 60 à 200 mL/cmH2O dans la fiche"], ["R", "Résistances", "2,5 à 5 cmH2O/L/s ; crête − plateau"], ["O", "Oxygène", "FiO2 pour une SpO2 de 94 à 98 % (88 à 92 % chez le BPCO)"], ["V", "Volumes", "Vt 6 à 8 mL/kg (4 à 6 en SDRA), VM 5 à 7 L/min à pH normal, &gt; 7 en acidose"], ["I", "I/E", "1/2 ; 1/3 si air trapping"], ["E", "PEEP", "5 cmH2O ; plateau ≤ 30 et driving pressure ≤ 15"]], ["Lettre", "Élément", "À vérifier"])}
        <p><b>Autres acronymes :</b> MOVIES pour la VNI (voir la fiche VNI) ; MARC pour le patient en ventilation spontanée (Mobilisation, Auscultation, Radiographie, Collaboration) ; ABCDEFG pour la radio (voies aériennes, os, cœur, diaphragme, épanchement, matériel, poche gastrique).</p>
        <p><b>En entrant dans une chambre de réa :</b> vérifier l'identité (bracelet), l'état de conscience (Glasgow), puis le constat d'attitude : position, lit ou fauteuil, sondes, drains, cathéters, interface, tirage, respiration paradoxale.</p>
        <p><b>Paramètres :</b> on lie toujours la SpO2 à la FiO2 (un patient à 98 % sous FiO2 100 % va mal). On regarde la tendance sur la dernière heure et les dernières 24 h, et la qualité des courbes (artefacts).</p>
        ${T([["ECG", "Rythme et FC ; la FR est souvent donnée par les électrodes"], ["Cathéter artériel (radial le plus souvent)", "TA en continu et gazométries. Poche de NaCl sous pression ; capteur au niveau de l'oreillette droite : refaire le zéro si on change la hauteur du lit. Un poignet plié donne une courbe plate."], ["Voie centrale (jugulaire, sous-clavière, fémorale)", "Médicaments. La pose en sous-clavière expose au pneumothorax."], ["PVC", "Précharge du cœur droit, normale 5 à 12 cmH2O"], ["PiCCO, Swan-Ganz", "Débit cardiaque, pressions pulmonaires ; pas une contre-indication à la mobilisation"], ["BIS", "Profondeur de la sédation de 0 à 100 ; vers 70 à 80, le patient peut entendre et se souvenir"], ["CVVH", "Dialyse continue, gros cathéter (souvent jugulaire) ; prudence en mobilisation"], ["ECMO", "Poumon artificiel (SDRA grave) ; anticoagulation, risque de saignement"], ["Noradrénaline", "Vasopresseur pour remonter la TA ; ce n'est pas une contre-indication à la mobilisation"]], ["Dispositif", "À savoir"])}
        <p><b>Seuils hémodynamiques :</b> PAM &lt; 60 mmHg : on ne verticalise pas et on ne mobilise pas activement. On vise une PAM ≥ 65 mmHg dans le choc.</p>`
      },
      {
        id: "vi_sevr", titre: "Sevrage de la ventilation et extubation", src: ["rv_vi", "rv_cr241107", "rv_stagealice", "rv_0802", "rv_lise1502", "rv_acronymes", "rv_scaillet", "rv_cr241017", "rv_lise3011"],
        html: `<p><b>Étapes du sevrage :</b></p>
        <ol><li>Passer du mode contrôlé à l'aide inspiratoire quand le patient se réveille et déclenche.</li>
        <li>Diminuer progressivement l'aide (jusqu'à 7 à 8 cmH2O, l'aide minimale qui compense le tube) et la PEP vers 5.</li>
        <li>Épreuve de ventilation spontanée : T-tube (« nez artificiel » avec O2 sur un filtre, 15 à 30 min) ou aide 0 et PEP 0 pendant environ 10 min. Il n'existe pas de protocole unique et tous les médecins n'utilisent pas cette épreuve.</li>
        <li>Si l'épreuve réussit, on remet l'aide juste avant l'extubation pour ne pas épuiser le patient.</li>
        <li>Si l'épreuve est trop précoce, une CPAP de Boussignac de 30 min permet de garder la PEP et la FiO2 en enlevant l'aide.</li></ol>
        <p><b>Critères d'extubation :</b></p>
        <ul><li>conscience suffisante (Glasgow ≥ 8, répond aux ordres simples : serrer la main, ouvrir les yeux, tirer la langue), sédation levée ;</li>
        <li>toux efficace (le patient doit pouvoir évacuer ses sécrétions) ;</li>
        <li>gazométrie correcte, paramètres vitaux stables ;</li>
        <li>FiO2 basse (proche de 21 % ; &lt; 50 % chez les patients à risque) et PEP à 5 ;</li>
        <li>échographie diaphragmatique pour vérifier la force du diaphragme ;</li>
        <li>test de fuite : on dégonfle le ballonnet, on bouche le tube ; si l'air passe autour, il n'y a pas d'œdème obstructif.</li></ul>
        <p><b>Extubation :</b> aspirer au-dessus du ballonnet, dégonfler complètement le ballonnet (sinon lésion des cordes vocales et stridor), retirer en aspirant pour que les sécrétions ne descendent pas. Une réintubation est toujours plus délicate à cause de l'œdème.</p>
        <p><b>Après :</b> surveiller le stridor et la détresse. Le Venturi ou l'Optiflow prennent souvent le relais. Le BPCO GOLD 3 ou 4 est très difficile à sevrer.</p>
        <p><b>Si on n'arrive pas à extuber :</b> lutter contre l'amyotrophie, les raideurs et les escarres, lever le patient au fauteuil, envisager une trachéotomie.</p>`
      },
      {
        id: "vi_asp", titre: "Aspiration endotrachéale, prévention de la pneumopathie et décubitus ventral", src: ["rv_cr241114", "rv_cr250403", "rv_resumerea", "rv_cr241017", "rv_cr241219", "rv_lisevi", "rv_cr241121", "rv_lise2103", "rv_cr1211", "rv_modeemploi", "rv_lisepremiers"],
        html: `<p><b>Quand aspirer ?</b> Encombrement à l'auscultation avec toux inefficace, oscillations sur la courbe de pression, résistances qui montent, SpO2 qui ne remonte pas malgré une FiO2 à 100 %. Chez un patient au Glasgow 3, c'est la seule technique de désencombrement possible.</p>
        <p><b>Étapes (pratique simulée) :</b></p>
        <ol><li>Préoxygéner à 100 % pendant 1 à 2 min ; retenir la FiO2 de départ pour la remettre ensuite.</li>
        <li>Gants classiques, connecter la sonde à l'aspirateur, vérifier l'aspirateur.</li>
        <li>Vérifier qu'on peut déconnecter le respirateur d'une main.</li>
        <li>Mettre le gant stérile, qui ne touche que la sonde.</li>
        <li>Déconnecter, descendre la sonde <b>sans aspirer</b> ; si on bute, reculer d'un centimètre.</li>
        <li>Remonter <b>en aspirant</b>, en tournant la sonde ; jamais en descendant (on aspirerait la muqueuse).</li>
        <li>Reconnecter, terminer par une aspiration buccale, réausculter et contrôler les paramètres.</li></ol>
        <p><b>À savoir :</b> la sonde part presque toujours dans la bronche droite (plus verticale). Dépression d'au moins 200 mmHg. Les sondes ont des couleurs selon leur taille. Système clos ou ouvert : pas de différence de pneumopathies, mais le système clos évite de perdre la PEP. Une aspiration traumatique crée des granulomes. Pas d'aspiration par le nez chez un patient sous anticoagulant. Par la bouche, on peut s'aider d'une canule de Guedel (Mayo).</p>
        <p><b>Prévention de la pneumopathie sous ventilateur (VAP) :</b></p>
        <ul><li>tête de lit à au moins 30° (30 à 45°, sauf hypotension ; 30° en neurologie, proclive au maximum 35° dans l'AVC) ;</li>
        <li>pression du ballonnet contrôlée ;</li>
        <li>pas de pression abdominale forte (attention aux techniques de kiné) ;</li>
        <li>soins de bouche, aspiration sous-glottique, hygiène des mains.</li></ul>
        <p><b>Décubitus ventral (prone) :</b> traitement du SDRA sévère (P/F bas, ROX &lt; 3,85), au moins 16 h par jour. En ventilation en pression positive, l'air va vers les zones de moindre résistance : en ventral, ce sont les zones dorsales, qui sont les mieux perfusées. Le V/Q et la PaO2 s'améliorent.</p>
        <ul><li>Retournement à 5 personnes : une à la tête pour le tube (le médecin), une qui protège l'épaule (le kiné, risque de luxation et d'atteinte du plexus brachial), deux de chaque côté. Un chef d'équipe donne le rythme.</li>
        <li>Avant : électrodes retirées, sondes et lignes dégagées, voie centrale et sonde gastrique vers la tête.</li>
        <li>Position du nageur (crawl) : tête tournée, un bras fléchi, l'autre le long du corps ; on alterne la tête et les bras toutes les 2 à 3 h.</li>
        <li>Effets secondaires : œdème du visage, escarres (patient curarisé), luxation d'épaule.</li></ul>
        <p>Chez le patient intubé couché sur le côté, c'est le poumon du dessus (supra-latéral) qui ventile le mieux, à l'inverse de la ventilation spontanée.</p>`
      },
      {
        id: "vi_mob", titre: "Mobilisation en USI, sepsis et réanimation cardio-pulmonaire", src: ["rv_resumerea", "rv_respi4", "rv_cr241114", "rv_casrapport", "rv_stagealice", "rv_cr1911vm", "rv_cr241219", "rv_cr250403", "rv_modeemploi", "rv_scaillet"],
        html: `<p><b>Pourquoi bouger tôt ?</b> La faiblesse acquise en réanimation (polyneuromyopathie) s'installe vite : 66 % des patients ventilés plus de 7 jours ne marchent pas seuls plus de 50 m un mois après leur sortie, et jusqu'à 40 % ne retrouvent pas leur état antérieur. La surface des fibres musculaires diminue de 2 à 4 % par jour en USI. La kiné diminue la durée de ventilation mécanique.</p>
        <p><b>Selon l'éveil :</b></p>
        <ul><li>Patient sédaté (Glasgow 3) : mobilisations passives globales, prévention des escarres et des positions vicieuses (équin), installation. On essaie de lever la sédation dès que possible.</li>
        <li>Patient qui répond : actif aidé puis actif, assis au bord du lit, fauteuil, verticalisation, marche. « Le patient doit faire le maximum, il ne faut pas trop l'aider. »</li></ul>
        <p><b>Exercices au lit (patient post-COVID trachéotomisé) :</b> ballon suspendu et élastique au perroquet (flexion de hanche en vitesse), ballon cacahuète en bout de lit (poussée du quadriceps, triple extension qui prépare la marche), poulie au perroquet pour les épaules. Principe MIRE : Motivation, Intensité, Répétition, Encouragements. Quadriceps et triceps sont les muscles prioritaires à tester.</p>
        <p><b>Électrostimulation :</b> utile quand le patient ne peut pas contracter ; fréquences basses (&lt; 50 Hz) pour les fibres lentes, hautes (&gt; 50 Hz) pour les fibres rapides.</p>
        <p><b>Précautions :</b> PAM &lt; 60 : pas de verticalisation ; cathéter radial très sensible aux mouvements du poignet ; drains, sondes, CVVH et ECMO à surveiller ; ballonnet à revérifier après la mobilisation. La sonde urinaire et la noradrénaline ne contre-indiquent pas la mobilisation.</p>
        <p><b>Sepsis et choc septique :</b> qSOFA (dépistage hors réanimation) = PAS ≤ 100 mmHg, FR &gt; 22, confusion (Glasgow &lt; 15) ; 2 critères annoncent un mauvais pronostic. Le choc septique demande des vasopresseurs pour tenir une PAM ≥ 65 mmHg, avec des lactates &gt; 2 mmol/L. Signes : marbrures, extrémités froides ; la TA centrale peut sembler correcte sous noradrénaline.</p>
        <p><b>Réanimation cardio-pulmonaire :</b> vérifier la conscience, la respiration et le pouls ; massage à 100 à 120/min, 5 à 6 cm, 30 compressions pour 2 insufflations, relais toutes les 2 min ; lit en mode RCP (plan dur) ; ballon à FiO2 100 % avec Guedel ; choc électrique seulement si le rythme est choquable ; on vise une TA autour de 12/8 pendant le massage.</p>
        <p><b>Ballon (Ambu) :</b> branché sur l'O2 ; une main tient le masque (pouce vers le menton), l'autre serre le ballon en laissant le temps de se regonfler ; on regarde le thorax se soulever.</p>`
      }
    ],
    qcm: [
      // vi_intub
      q("vt1", "vi_intub", "Raisons d'intuber un patient (plusieurs réponses) :", ["Protéger les voies aériennes d'un patient inconscient", "Suppléer une défaillance respiratoire après échec de VNI"], ["Un patient conscient avec une SpO2 de 96 % à l'air", "Une simple toux sèche"], "rv_cr241114"),
      q("vt2", "vi_intub", "Un Glasgow à 3/15 est un critère d'intubation car :", ["Le patient ne protège plus ses voies aériennes (risque de reflux et d'inhalation)"], ["Le patient a mal", "La FiO2 est trop haute", "Le patient est hypertendu"], "rv_cr1911vp"),
      q("vt3", "vi_intub", "Diamètre habituel du tube chez l'adulte :", ["Environ 8,0 mm"], ["Environ 3 mm", "Environ 15 mm", "Environ 1 cm 5"], "rv_scaillet"),
      q("vt4", "vi_intub", "Repère habituel du tube à la commissure des lèvres chez l'adulte :", ["Environ 22 cm"], ["Environ 5 cm", "Environ 40 cm", "Environ 12 mm"], "rv_scaillet"),
      q("vt5", "vi_intub", "Pourquoi un tube de 7 mm pose-t-il problème ?", ["Les résistances augmentent beaucoup (le rayon compte à la puissance 4)"], ["Il fuit toujours", "Il augmente la FiO2", "Il est trop lourd"], "rv_scaillet"),
      q("vt6", "vi_intub", "Après l'intubation, on vérifie (plusieurs réponses) :", ["L'auscultation des deux poumons", "L'auscultation de l'estomac", "Le soulèvement du thorax"], ["La glycémie capillaire"], "rv_recap"),
      q("vt7", "vi_intub", "Tube descendu trop loin : il passe le plus souvent :", ["Dans la bronche souche droite"], ["Dans la bronche souche gauche", "Dans l'œsophage", "Dans le larynx"], "rv_cr1911vp"),
      q("vt8", "vi_intub", "Conséquence d'une intubation sélective droite :", ["Atélectasie du poumon gauche"], ["Pneumothorax droit obligatoire", "Hyperventilation des deux poumons", "Aucune"], "rv_modeemploi"),
      q("vt9", "vi_intub", "Pression du ballonnet retenue dans la plupart des cours :", ["Environ 30 cmH2O"], ["Environ 5 cmH2O", "Environ 80 cmH2O", "Environ 200 mmHg"], "rv_modeemploi"),
      q("vt10", "vi_intub", "Ballonnet trop gonflé : risque principal :", ["Trachéomalacie ou sténose trachéale"], ["Inhalation", "Hyperoxie", "Hypoglycémie"], "rv_modeemploi"),
      q("vt11", "vi_intub", "Ballonnet pas assez gonflé : risque principal :", ["Fuites et inhalation de sécrétions"], ["Sténose trachéale", "Pneumothorax", "Barotraumatisme"], "rv_resumerea"),
      q("vt12", "vi_intub", "Quand revérifie-t-on la pression du ballonnet ?", ["Après chaque mobilisation ou changement de position"], ["Une fois par semaine", "Jamais, elle ne bouge pas", "Seulement à l'extubation"], "rv_cr241114"),
      q("vt13", "vi_intub", "Avantages de la trachéotomie (plusieurs réponses) :", ["Moins d'espace mort", "Moins de résistances", "Sevrage facilité d'une ventilation longue"], ["FiO2 forcément plus haute"], "rv_0802"),
      q("vt14", "vi_intub", "Selon le cours du 19/11/2026, le Glasgow maximal d'un patient intubé est :", ["10, car la réponse verbale n'est pas évaluable (V = T)"], ["15", "3", "8"], "rv_cr1911vm", "Le CR du 12/11/2026 donne 11/15 : voir les remarques."),
      q("vt15", "vi_intub", "Chez un patient intubé en volume contrôlé, la pression pleurale :", ["Devient positive"], ["Reste très négative", "Est toujours nulle", "Devient égale à la PaO2"], "rv_cr1211"),
      q("vt16", "vi_intub", "Avant de dégonfler un ballonnet, on :", ["Aspire les sécrétions au-dessus du ballonnet"], ["Monte la PEP à 20", "Coupe l'O2", "Met le patient tête en bas"], "rv_scaillet"),
      q("vt17", "vi_intub", "La préoxygénation avant intubation se fait :", ["Au ballon (BAVU) à 100 %"], ["Aux lunettes à 1 L/min", "À l'air ambiant", "Au masque Venturi 24 %"], "rv_scaillet"),
      // vi_modes
      q("vm1", "vi_modes", "En volume contrôlé, on surveille surtout :", ["Les pressions"], ["Le Vt, puisqu'il varie", "La glycémie", "Les fuites du masque"], "rv_cr1911vm"),
      q("vm2", "vi_modes", "En pression contrôlée, on surveille surtout :", ["Le Vt obtenu"], ["La pression, puisqu'elle varie", "La température", "L'IPAP de VNI"], "rv_acronymes"),
      q("vm3", "vi_modes", "Risque principal à surveiller en VC :", ["Le barotraumatisme"], ["Le volotraumatisme seul", "L'hyperthermie", "L'hypoglycémie"], "rv_vi"),
      q("vm4", "vi_modes", "Profil de débit en VC :", ["Débit constant pendant l'inspiration"], ["Débit décélérant", "Débit nul", "Débit négatif"], "rv_resumerea"),
      q("vm5", "vi_modes", "En VS-AI-PEP, on règle (plusieurs réponses) :", ["La PEP", "L'aide inspiratoire"], ["La FR imposée", "Le Vt imposé"], "rv_cr1911vm"),
      q("vm6", "vi_modes", "En VS-AI-PEP, qui déclenche les cycles ?", ["Le patient"], ["La machine à FR fixe", "Le kiné", "Personne"], "rv_cr1911vm"),
      q("vm7", "vi_modes", "Indications de la VS-AI-PEP (plusieurs réponses) :", ["VNI chez le BPCO hypercapnique", "Sevrage de la ventilation invasive"], ["Patient curarisé sans aucune respiration"], "rv_cr1911vm"),
      q("vm8", "vi_modes", "En VAC, si le patient déclenche un cycle :", ["Il reçoit le volume programmé (la FR réelle dépasse la FR réglée)"], ["La machine s'arrête", "Il ne reçoit rien", "La FiO2 passe à 100 %"], "rv_cr241107"),
      q("vm9", "vi_modes", "Trigger trop sensible :", ["La machine déclenche au moindre mouvement et peut épuiser le patient"], ["Le patient doit faire un gros effort pour déclencher", "Aucun effet", "La FiO2 baisse"], "rv_cr241017"),
      q("vm10", "vi_modes", "Trigger pas assez sensible :", ["Le patient doit faire un gros effort pour déclencher"], ["Déclenchements au moindre mouvement du tuyau", "Hyperventilation", "Baisse de la PEP"], "rv_cr241017"),
      q("vm11", "vi_modes", "Ordre habituel du sevrage :", ["Volume contrôlé, aide inspiratoire, extubation"], ["Aide inspiratoire, volume contrôlé, extubation", "Extubation, puis volume contrôlé", "Pression contrôlée, puis intubation"], "rv_cr241017"),
      q("vm12", "vi_modes", "Pressions trop hautes en VC malgré les réglages. Que propose la fiche Acronymes ?", ["Passer en pression contrôlée, quitte à un peu hypoventiler"], ["Monter le Vt", "Passer en CPAP", "Supprimer la PEP et la FiO2"], "rv_acronymes"),
      q("vm13", "vi_modes", "Pression inspiratoire maximale en pression contrôlée :", ["30 cmH2O"], ["60 cmH2O", "10 cmH2O", "25 mmHg"], "rv_acronymes"),
      q("vm14", "vi_modes", "Un patient ventilé :", ["N'est pas forcément dans le coma (ex. aide inspiratoire)"], ["Est toujours dans le coma", "Est toujours curarisé", "Ne peut jamais être mobilisé"], "rv_cr1911vm"),
      q("vm15", "vi_modes", "Le patient trigge de plus en plus en VAC. Cela suggère :", ["Qu'il se réveille ; on peut envisager l'aide inspiratoire"], ["Qu'il faut le curariser à vie", "Une panne du ventilateur", "Une hyperoxie"], "rv_lisevi"),
      q("vm16", "vi_modes", "Selon le cours VI, les modes VIV et VACI :", ["Sont peu recommandés car la machine surpressurise quand le patient déclenche"], ["Sont les modes de sevrage idéaux", "Sont des modes de VNI", "N'ont aucune pression"], "rv_vi"),
      // vi_regl
      q("vr1", "vi_regl", "Vt de base en VC :", ["6 à 8 mL/kg de poids idéal"], ["10 à 12 mL/kg de poids réel", "2 à 3 mL/kg", "15 mL/kg"], "rv_cr1911vm"),
      q("vr2", "vi_regl", "Vt dans le SDRA :", ["4 à 6 mL/kg de poids idéal"], ["8 à 10 mL/kg", "12 mL/kg", "1 mL/kg"], "rv_cr1911vm"),
      q("vr3", "vi_regl", "Formule citée pour le poids idéal :", ["Lorentz"], ["Henderson-Hasselbalch", "Tiffeneau", "Glasgow"], "rv_cr1911vm"),
      q("vr4", "vi_regl", "FR de base en VC hors SDRA :", ["12 à 18 cycles/min"], ["30 à 40 cycles/min", "4 à 6 cycles/min", "60 cycles/min"], "rv_cr1911vm"),
      q("vr5", "vi_regl", "Pourquoi une FR de 20 à 25 dans le SDRA ?", ["Le Vt est réduit, il faut monter la FR pour garder la ventilation minute"], ["Pour augmenter la P plateau", "Pour réduire la FiO2", "Pour créer de l'auto-PEP"], "rv_cr1911vm"),
      q("vr6", "vi_regl", "Ventilation minute pour 70 kg de poids idéal à pH normal :", ["Environ 7 L/min"], ["Environ 1 L/min", "Environ 20 L/min", "Environ 70 L/min"], "rv_cr1911vm"),
      q("vr7", "vi_regl", "Ti de base et rapport I/E :", ["Environ 1 s, pour un I/E de 1/2"], ["Environ 3 s, pour un I/E de 2/1", "Environ 0,1 s, I/E 1/10", "Le Ti ne se règle pas"], "rv_cr1911vm"),
      q("vr8", "vi_regl", "PEP de départ habituelle :", ["5 cmH2O"], ["0 cmH2O chez tous", "25 cmH2O", "40 cmH2O"], "rv_cr1911vm"),
      q("vr9", "vi_regl", "Rôle principal de la PEP :", ["Recruter des alvéoles et améliorer surtout la PaO2"], ["Faire baisser directement la PaCO2", "Augmenter la TA", "Diminuer la FiO2 réglée"], "rv_cr1911vm"),
      q("vr10", "vi_regl", "Acidose respiratoire sous VC. Leviers (plusieurs réponses) :", ["Monter la FR", "Monter le Vt sans dépasser 8 mL/kg"], ["Baisser la FR", "Baisser le Vt à 3 mL/kg"], "rv_cr1911vm"),
      q("vr11", "vi_regl", "Hypoxémie sous VC. Leviers (plusieurs réponses) :", ["Monter la FiO2", "Monter la PEP progressivement"], ["Baisser la FiO2", "Supprimer la PEP chez un patient stable"], "rv_cr1911vm"),
      q("vr12", "vi_regl", "Objectif de la correction d'une acidose chez le BPCO intubé :", ["Corriger le pH (≥ 7,30 à 7,35), pas normaliser la PaCO2"], ["Ramener la PaCO2 à 40 le plus vite possible", "Atteindre un pH de 7,60", "Ne rien corriger"], "rv_cr1911vm"),
      q("vr13", "vi_regl", "Pourquoi ne pas baisser trop vite la PaCO2 d'un BPCO avec des HCO3- à 37 ?", ["Il ferait une alcalose post-hypercapnique"], ["Il ferait une hypoglycémie", "Le ballonnet se dégonflerait", "La FiO2 monterait"], "rv_cr1911vm"),
      q("vr14", "vi_regl", "Délai de la gazométrie de contrôle après un réglage :", ["20 à 30 min"], ["24 h", "1 min", "1 semaine"], "rv_cr1911vm"),
      q("vr15", "vi_regl", "Cascade de la pression positive (ordre correct) :", ["Pression thoracique ↑, retour veineux ↓, précharge ↓, débit cardiaque ↓, TA ↓"], ["Retour veineux ↑, précharge ↑, TA ↑", "TA ↓, puis pression thoracique ↓", "Débit cardiaque ↑, puis retour veineux ↓"], "rv_cr1911vm"),
      q("vr16", "vi_regl", "Patient hypotendu à intuber. Réglages prudents (plusieurs réponses) :", ["Vt bas", "PEP à 0 au départ", "FiO2 100 %"], ["PEP à 15 d'emblée", "Vt à 10 mL/kg"], "rv_cr241114"),
      q("vr17", "vi_regl", "Phrase clé du cours sur le patient hypotendu :", ["« L'hypotension tue le patient avant l'acidose hypercapnique »"], ["« La PaCO2 passe avant tout »", "« La PEP remonte la TA »", "« Le Vt n'a aucun effet circulatoire »"], "rv_cr241114"),
      q("vr18", "vi_regl", "Au-delà de quelle PEP le risque de choc de reventilation est-il cité ?", ["12 cmH2O"], ["2 cmH2O", "0 cmH2O", "Il n'existe pas"], "rv_stagealice"),
      q("vr19", "vi_regl", "Classification de Berlin : P/F entre 100 et 200 avec PEP ≥ 5 :", ["SDRA modéré"], ["SDRA léger", "SDRA sévère", "Poumon normal"], "rv_cr1911vm"),
      q("vr20", "vi_regl", "P/F inférieur à 100 :", ["SDRA sévère"], ["SDRA léger", "Normal", "SDRA modéré"], "rv_cr1911vm"),
      q("vr21", "vi_regl", "Un P/F bas suffit-il pour dire SDRA ?", ["Non, il faut aussi un contexte aigu, des opacités bilatérales et une hypoxémie non seulement cardiaque"], ["Oui, toujours", "Oui si le patient est BPCO", "Oui si la FR est haute"], "rv_cr1911vm"),
      q("vr22", "vi_regl", "Pour remonter la TA, l'équipe fait d'abord :", ["Un remplissage vasculaire, puis des vasopresseurs si besoin"], ["Une hausse de la PEP", "Un arrêt de l'O2", "Un vasodilatateur"], "rv_cr1911vm"),
      q("vr23", "vi_regl", "Vt de 6 mL/kg pour un poids idéal de 70 kg :", ["420 mL"], ["700 mL", "280 mL", "60 mL"], "rv_cr1911vm"),
      q("vr24", "vi_regl", "Vt 420 mL et FR 22 : ventilation minute :", ["Environ 9,2 L/min"], ["Environ 4,2 L/min", "Environ 22 L/min", "Environ 0,9 L/min"], "rv_cr1911vm"),
      q("vr25", "vi_regl", "BPCO hypotendu (TA 76/32) intubé avec une PEP de 10 à 12 (CR 22/10/2026). Issue :", ["Décès, par baisse du retour veineux, de la précharge et de la TA"], ["Amélioration rapide de la TA", "Extubation le lendemain", "Aucun effet de la PEP"], "rv_cr2210"),
      q("vr26", "vi_regl", "Ventilateur branché seulement sur l'O2 : comment fait-il une FiO2 de 70 % ?", ["Une turbine prend l'air ambiant et fait le mélange"], ["Il ne peut pas, il donne toujours 100 %", "Il dilue avec du CO2", "Il utilise une bouteille d'azote"], "rv_cr1911vm"),
      // vi_press
      q("vp1", "vi_press", "La pression de crête sert surtout à :", ["Vaincre les résistances du circuit et des voies aériennes"], ["Distendre les alvéoles", "Mesurer la PEP", "Mesurer l'auto-PEP"], "rv_cr1911vm"),
      q("vp2", "vi_press", "La pression de plateau reflète :", ["La pression dans les alvéoles en fin d'inspiration"], ["Les résistances du tube", "La PEP", "La pression du ballonnet"], "rv_cr1911vm"),
      q("vp3", "vi_press", "Valeur maximale de la P plateau :", ["30 cmH2O"], ["15 cmH2O", "60 cmH2O", "5 cmH2O"], "rv_cr1911vm"),
      q("vp4", "vi_press", "Driving pressure :", ["P plateau − PEP"], ["P crête − P plateau", "P crête + PEP", "IPAP + EPAP"], "rv_cr1911vm"),
      q("vp5", "vi_press", "Driving pressure maximale conseillée :", ["15 cmH2O"], ["30 cmH2O", "5 cmH2O", "40 cmH2O"], "rv_cr1911vm"),
      q("vp6", "vi_press", "L'écart crête − plateau reflète :", ["Les résistances"], ["La compliance", "L'auto-PEP", "La FiO2"], "rv_cr1911vm"),
      q("vp7", "vi_press", "Causes d'une pression de crête élevée avec plateau normal (plusieurs réponses) :", ["Le patient mord son tube", "Sécrétions", "Bronchospasme", "Sonde coudée"], ["Poumon très peu compliant seul"], "rv_cr1911vm"),
      q("vp8", "vi_press", "P plateau élevée. Causes (plusieurs réponses) :", ["Compliance basse (SDRA, fibrose)", "Vt programmé trop grand"], ["Sécrétions dans le tube seulement", "Morsure du tube seulement"], "rv_cr1911vm"),
      q("vp9", "vi_press", "Formule de la compliance :", ["Vt / (P plateau − PEP)"], ["Vt × FR", "(P crête − P plateau) / Vt", "PaO2 / FiO2"], "rv_cr1911vm"),
      q("vp10", "vi_press", "Vt 450 mL, P plateau 27, PEP 7. Compliance :", ["Environ 22 mL/cmH2O"], ["Environ 450 mL/cmH2O", "Environ 64 mL/cmH2O", "Environ 2 mL/cmH2O"], "rv_cr1911vm"),
      q("vp11", "vi_press", "Compliance normale selon le cours du 19/11/2026 :", ["Environ 60 à 100 mL/cmH2O"], ["Environ 5 à 10 mL/cmH2O", "Environ 500 mL/cmH2O", "Environ 20 mL/cmH2O"], "rv_cr1911vm"),
      q("vp12", "vi_press", "Compliance dans l'emphysème :", ["Élevée, avec perte du recul élastique"], ["Très basse", "Nulle", "Identique au SDRA"], "rv_cr1911vm"),
      q("vp13", "vi_press", "Compliance dans le SDRA :", ["Basse (poumon raide)"], ["Très élevée", "Normale", "Infinie"], "rv_cr1911vm"),
      q("vp14", "vi_press", "La compliance :", ["Ne se règle pas, elle dépend du poumon et du Vt imposé"], ["Se règle sur le ventilateur", "Est toujours de 100", "Dépend seulement de la FiO2"], "rv_cr1911vm"),
      q("vp15", "vi_press", "Résistances normales selon MACROVIE :", ["2,5 à 5 cmH2O/L/s"], ["50 à 100", "0", "25 à 30"], "rv_cr250220"),
      q("vp16", "vi_press", "Oscillations (vaguelettes) sur la courbe de pression :", ["Sécrétions : il faut aspirer"], ["Ventilation parfaite", "Hyperoxie", "Ballonnet trop gonflé"], "rv_lisevi"),
      q("vp17", "vi_press", "Pancréatite en aide inspiratoire : Vt 570 mL, driving pressure 15. Compliance :", ["38 mL/cmH2O"], ["570 mL/cmH2O", "85 mL/cmH2O", "8 mL/cmH2O"], "rv_cr250213"),
      q("vp18", "vi_press", "Obèse opéré de l'abdomen avec une compliance très basse. Que fait le kiné (plusieurs réponses) ?", ["Verticaliser", "Desserrer la gaine si c'est permis"], ["Le mettre tête en bas", "Monter le Vt à 12 mL/kg"], "rv_cr250220"),
      q("vp19", "vi_press", "Plus le Vt programmé est grand :", ["Plus la P plateau est haute"], ["Plus la P plateau est basse", "Plus la compliance monte toujours", "Rien ne change"], "rv_cr1911vm"),
      q("vp20", "vi_press", "Une alarme de pression de crête qui sonne :", ["Indique un problème à rechercher (tube, sécrétions, bronchospasme)"], ["Est normale, on l'éteint", "Signe une hyperoxie", "Signe un ballonnet dégonflé"], "rv_cr1911vm"),
      q("vp21", "vi_press", "Barotraumatisme :", ["Lésions dues à une P plateau trop élevée (> 30 cmH2O)"], ["Lésions dues à un Vt trop bas", "Lésions dues à l'O2", "Lésions de la peau par le masque"], "rv_cr1911vm"),
      q("vp22", "vi_press", "Volotraumatisme :", ["Lésions dues à un Vt trop élevé"], ["Lésions dues à une FiO2 basse", "Lésions dues à une FR basse", "Lésions dues au tube"], "rv_cr1911vm"),
      // vi_autopeep
      q("va1", "vi_autopeep", "Sur la courbe débit-temps, l'air trapping se voit quand :", ["Le débit expiratoire ne revient pas à zéro avant le cycle suivant"], ["Le débit inspiratoire est nul", "La courbe est symétrique", "La PEP est à 0"], "rv_cr1911vm"),
      q("va2", "vi_autopeep", "Comment mesure-t-on l'auto-PEP ?", ["Par une pause télé-expiratoire de 5 à 10 s"], ["Par une pause télé-inspiratoire", "Par la SpO2", "Par la gazométrie veineuse"], "rv_cr1911vm"),
      q("va3", "vi_autopeep", "PEP réglée 5, PEP totale mesurée 7. Auto-PEP :", ["2 cmH2O"], ["12 cmH2O", "7 cmH2O", "35 cmH2O"], "rv_cr1911vm"),
      q("va4", "vi_autopeep", "Patients à risque d'auto-PEP (plusieurs réponses) :", ["BPCO", "Asthmatique"], ["Fibrose pulmonaire pure"], "rv_cr1911vm"),
      q("va5", "vi_autopeep", "Risques de l'auto-PEP (plusieurs réponses) :", ["Hypotension par baisse du retour veineux", "Barotraumatisme", "Asynchronies"], ["Hyperglycémie"], "rv_cr1911vm"),
      q("va6", "vi_autopeep", "Pour lutter contre l'auto-PEP, il faut :", ["Allonger le temps expiratoire"], ["Allonger le temps inspiratoire", "Augmenter la FR", "Augmenter le Vt à 10 mL/kg"], "rv_cr1911vm"),
      q("va7", "vi_autopeep", "Baisser le Ti à Vt constant :", ["Augmente la pression de crête"], ["Diminue la pression de crête", "Supprime la PEP", "Baisse la FiO2"], "rv_cr1911vm"),
      q("va8", "vi_autopeep", "Baisser la FR pour réduire l'auto-PEP expose à :", ["Une hypercapnie (la ventilation minute baisse)"], ["Une hyperoxie", "Une alcalose respiratoire sévère", "Une hausse de la TA"], "rv_cr1911vm"),
      q("va9", "vi_autopeep", "On a baissé la FR : 10 min plus tard pH 7,10 et PaCO2 75. Qu'aurait-il fallu faire en plus ?", ["Augmenter le Vt pour garder la ventilation minute"], ["Baisser encore la FR", "Couper la FiO2", "Monter le Ti"], "rv_cr1911vp"),
      q("va10", "vi_autopeep", "I/E conseillé en cas d'air trapping :", ["1/3 voire 1/4"], ["2/1", "1/1", "1/2 strict"], "rv_cr1911vm"),
      q("va11", "vi_autopeep", "Le « ballon de baudruche » illustre que :", ["Monter la PEP améliore la compliance jusqu'à un seuil, puis la diminue (surdistension)"], ["La PEP diminue toujours la compliance", "La compliance ne dépend jamais de la PEP", "Le ballon doit être dégonflé à chaque cycle"], "rv_cr1911vm"),
      q("va12", "vi_autopeep", "La PEP optimale est celle où :", ["La compliance est la meilleure"], ["La P plateau dépasse 30", "La TA est la plus basse", "La FiO2 est à 100 %"], "rv_cr1911vm"),
      q("va13", "vi_autopeep", "Manœuvre de recrutement citée en cours :", ["Monter brièvement la PEP à 30 à 40 cmH2O"], ["Mettre la PEP à 0 pendant 1 h", "Baisser la FiO2 à 21 %", "Désadapter le patient"], "rv_cr241212"),
      q("va14", "vi_autopeep", "En mode assisté, la PEP externe réglée pour aider le patient à déclencher vaut environ :", ["80 % de l'auto-PEP"], ["200 % de l'auto-PEP", "0 % toujours", "La P plateau"], "rv_resumerea"),
      q("va15", "vi_autopeep", "Pourquoi limiter l'auto-PEP ?", ["Pour ne pas diminuer le retour veineux et la TA"], ["Pour augmenter la PaCO2", "Pour gonfler le ballonnet", "Pour augmenter la FiO2"], "rv_cr1911vp"),
      q("va16", "vi_autopeep", "Phrase du cours sur la gravité :", ["« C'est la difficulté à ventiler le patient qui le tue »"], ["« C'est la FiO2 qui le tue »", "« C'est le ballonnet qui le tue »", "« C'est la PEP à 5 qui le tue »"], "rv_cr1911vp"),
      // vi_macro
      q("vx1", "vi_macro", "Que signifie MACROVIE ?", ["Mode, Air trapping, Compliance, Résistances, Oxygène, Volumes, I/E, PEEP"], ["Masque, Oxygène, Volumes, IPAP, EPAP, Sang", "Mobilisation, Auscultation, Radio, Collaboration", "Airways, Bones, Cardia, Diaphragme"], "rv_cr250220"),
      q("vx2", "vi_macro", "Compliance normale donnée dans MACROVIE :", ["60 à 200 mL/cmH2O"], ["5 à 10 mL/cmH2O", "500 à 1000 mL/cmH2O", "2,5 à 5 mL/cmH2O"], "rv_cr250220"),
      q("vx3", "vi_macro", "MARC sert au bilan du patient :", ["En ventilation spontanée"], ["Intubé en VC", "Sous VNI", "En arrêt cardiaque"], "rv_respi4"),
      q("vx4", "vi_macro", "Première chose en entrant dans une chambre de réa selon le cours post-COVID :", ["Vérifier l'identité du patient (bracelet)"], ["Aspirer le patient", "Monter la FiO2", "Changer le filtre"], "rv_respi4"),
      q("vx5", "vi_macro", "Un patient à 98 % de SpO2 sous FiO2 100 % :", ["Va mal : il faut toujours lier la SpO2 à la FiO2"], ["Va très bien", "Peut être extubé", "N'a besoin d'aucun bilan"], "rv_respi4"),
      q("vx6", "vi_macro", "Cathéter artériel : où placer le capteur ?", ["Au niveau de l'oreillette droite, et refaire le zéro si on change la hauteur du lit"], ["Au niveau du pied", "N'importe où", "Au-dessus de la tête"], "rv_respi4"),
      q("vx7", "vi_macro", "Cathéter radial : la courbe devient plate. Première chose à vérifier :", ["Le poignet est-il plié ?"], ["La FiO2", "La sonde urinaire", "La glycémie"], "rv_cr241114"),
      q("vx8", "vi_macro", "Utilités du cathéter artériel (plusieurs réponses) :", ["TA en continu", "Prélèvements pour gazométrie"], ["Injection des médicaments en routine", "Alimentation"], "rv_cr1911vp"),
      q("vx9", "vi_macro", "Risque d'une voie centrale sous-clavière :", ["Pneumothorax"], ["Fracture de clavicule", "Hémiplégie", "Hypoglycémie"], "rv_cr1911vp"),
      q("vx10", "vi_macro", "PVC normale :", ["5 à 12 cmH2O"], ["50 à 60 cmH2O", "0 cmH2O", "100 cmH2O"], "rv_modeemploi"),
      q("vx11", "vi_macro", "Vers quelle valeur du BIS le patient peut-il entendre et se souvenir ?", ["70 à 80"], ["0 à 10", "20 à 30", "Jamais"], "rv_modeemploi"),
      q("vx12", "vi_macro", "Sous quelle PAM ne verticalise-t-on pas le patient ?", ["60 mmHg"], ["100 mmHg", "120 mmHg", "90 mmHg"], "rv_cr241219"),
      q("vx13", "vi_macro", "La noradrénaline :", ["Est un vasopresseur qui remonte la TA ; ce n'est pas une contre-indication à la mobilisation"], ["Fait baisser la TA", "Interdit toute mobilisation", "Est un diurétique"], "rv_cr241114"),
      q("vx14", "vi_macro", "L'ECMO est :", ["Un poumon artificiel à membrane, sous anticoagulants"], ["Un mode de VNI", "Un test d'extubation", "Une sonde gastrique"], "rv_resumerea"),
      q("vx15", "vi_macro", "La CVVH est :", ["Une dialyse continue (hémofiltration)"], ["Une ventilation", "Une sonde urinaire", "Un drain thoracique"], "rv_modeemploi"),
      q("vx16", "vi_macro", "ABCDEFG de la radio : le D correspond :", ["Au diaphragme"], ["Au drain", "À la dyspnée", "Au débit"], "rv_duprez"),
      q("vx17", "vi_macro", "Dans le constat d'attitude, la respiration paradoxale correspond à :", ["Un ventre qui rentre à l'inspiration (asynchronie thoraco-abdominale)"], ["Un ventre qui gonfle à l'inspiration", "Une FR de 14", "Une toux grasse"], "rv_cr1911vm"),
      q("vx18", "vi_macro", "Sonde de Swan-Ganz :", ["Mesure les pressions pulmonaires, pas de contre-indication à la mobilisation"], ["Interdit toute mobilisation", "Sert à aspirer les sécrétions", "Est une sonde gastrique"], "rv_cr241114"),
      // vi_sevr
      q("vs1", "vi_sevr", "Aide inspiratoire minimale qui compense les résistances du tube :", ["7 à 8 cmH2O"], ["25 cmH2O", "0 cmH2O", "40 cmH2O"], "rv_lise1502"),
      q("vs2", "vi_sevr", "Épreuves de ventilation spontanée citées (plusieurs réponses) :", ["T-tube (nez artificiel)", "Aide 0 et PEP 0 pendant environ 10 min"], ["Monter la PEP à 20 pendant 1 h", "Curariser le patient"], "rv_stagealice"),
      q("vs3", "vi_sevr", "Après une épreuve réussie, juste avant l'extubation :", ["On remet l'aide pour ne pas épuiser le patient"], ["On laisse le patient au T-tube toute la nuit", "On monte la FiO2 à 100 % pour 24 h", "On curarise"], "rv_stagealice"),
      q("vs4", "vi_sevr", "Durée habituelle d'une épreuve au nez artificiel :", ["15 à 30 min"], ["24 h", "1 min", "3 jours"], "rv_0802"),
      q("vs5", "vi_sevr", "Épreuve au T-tube trop précoce. Alternative citée :", ["CPAP de Boussignac pendant 30 min"], ["Retour en VC à 12 mL/kg", "Masque à réservoir à 2 L/min", "Extubation immédiate"], "rv_0802"),
      q("vs6", "vi_sevr", "Critères d'extubation (plusieurs réponses) :", ["Toux efficace", "Gazométrie correcte", "FiO2 basse", "Patient éveillé qui répond"], ["PEP à 15 et FiO2 à 100 %"], "rv_vi"),
      q("vs7", "vi_sevr", "FiO2 visée avant l'extubation selon le cas de la bradycardie :", ["Proche de 21 %"], ["100 %", "80 %", "60 % obligatoire"], "rv_lise1502"),
      q("vs8", "vi_sevr", "Ordres simples pour tester la conscience avant extubation (plusieurs réponses) :", ["Serrez-moi la main", "Ouvrez les yeux", "Tirez la langue"], ["Récitez l'alphabet à l'envers"], "rv_lise3011"),
      q("vs9", "vi_sevr", "L'échographie diaphragmatique avant extubation sert à :", ["Vérifier que le diaphragme est assez fort"], ["Mesurer la PaCO2", "Voir le ballonnet", "Régler la FiO2"], "rv_lise3011"),
      q("vs10", "vi_sevr", "Test de fuite : l'air passe autour du tube quand on bouche le tube ballonnet dégonflé. Conclusion :", ["Pas d'obstruction par l'œdème, on peut extuber"], ["Œdème obstructif, on n'extube pas", "Le ballonnet est percé", "Il faut réintuber"], "rv_stagealice"),
      q("vs11", "vi_sevr", "Test de fuite sans aucun passage d'air :", ["Obstruction probable (œdème) : on n'extube pas"], ["Extubation immédiate", "Test normal", "Ballonnet trop gonflé"], "rv_stagealice"),
      q("vs12", "vi_sevr", "Ballonnet pas assez dégonflé à l'extubation :", ["Lésion des cordes vocales et stridor"], ["Hyperoxie", "Pneumothorax", "Aucune conséquence"], "rv_acronymes"),
      q("vs13", "vi_sevr", "On retire le tube :", ["En aspirant, pour que les sécrétions ne descendent pas"], ["En insufflant fort", "Sans aspirer", "Ballonnet gonflé"], "rv_cr241017"),
      q("vs14", "vi_sevr", "Pourquoi une réintubation est-elle plus délicate ?", ["À cause de l'œdème des voies aériennes"], ["Parce que le tube rétrécit", "Parce que la FiO2 est basse", "Parce que le patient est plus lourd"], "rv_vi"),
      q("vs15", "vi_sevr", "Si on n'arrive pas à extuber, le kiné (plusieurs réponses) :", ["Lutte contre l'amyotrophie", "Prévient les escarres", "Limite les raideurs"], ["Arrête toute séance"], "rv_lise1502"),
      q("vs16", "vi_sevr", "Pendant une séance chez un patient intubé qui se réveille, on peut :", ["Le passer en mode assisté pour travailler le diaphragme, puis le remettre en assisté-contrôlé"], ["Le curariser pour la séance", "Supprimer l'O2", "Dégonfler le ballonnet"], "rv_lise3011"),
      // vi_asp
      q("vq1", "vi_asp", "Avant une aspiration endotrachéale, on préoxygène :", ["À 100 % pendant 1 à 2 min"], ["À 21 % pendant 10 min", "On ne préoxygène jamais", "À 50 % pendant 1 h"], "rv_cr250403"),
      q("vq2", "vi_asp", "Pendant l'aspiration, on aspire :", ["En remontant la sonde"], ["En descendant la sonde", "Pendant toute la descente et la remontée", "Seulement sur place"], "rv_cr241114"),
      q("vq3", "vi_asp", "Pourquoi ne pas aspirer en descendant ?", ["La sonde se colle à la muqueuse et la blesse"], ["Cela fait monter la FiO2", "La sonde va dans l'œsophage", "C'est trop rapide"], "rv_cr241114"),
      q("vq4", "vi_asp", "Le gant stérile sert à :", ["Toucher uniquement la sonde d'aspiration"], ["Tenir le respirateur", "Toucher le patient partout", "Rien"], "rv_cr241114"),
      q("vq5", "vi_asp", "Signes qu'il faut aspirer (plusieurs réponses) :", ["Oscillations sur la courbe de pression", "Résistances qui montent", "SpO2 qui ne remonte pas malgré FiO2 100 %"], ["P plateau stable et auscultation claire"], "rv_lisevi"),
      q("vq6", "vi_asp", "La sonde d'aspiration part presque toujours :", ["Dans la bronche droite"], ["Dans la bronche gauche", "Dans l'œsophage", "Dans le larynx"], "rv_cr241017"),
      q("vq7", "vi_asp", "Dépression d'aspiration citée dans le Résumé réa :", ["Au moins 200 mmHg"], ["20 mmHg", "2000 mmHg", "0 mmHg"], "rv_resumerea"),
      q("vq8", "vi_asp", "Système d'aspiration clos ou ouvert :", ["Pas de différence de pneumopathies acquises"], ["Le clos double les pneumopathies", "L'ouvert supprime les pneumopathies", "Le clos est interdit"], "rv_resumerea"),
      q("vq9", "vi_asp", "On n'aspire pas par le nez quand le patient :", ["Est sous anticoagulant"], ["A de la fièvre", "Est BPCO", "Est en VC"], "rv_cr250403"),
      q("vq10", "vi_asp", "Chez un patient Glasgow 3 intubé, la seule technique de désencombrement possible est :", ["L'aspiration endotrachéale"], ["L'ELTGOL", "Le drainage autogène", "La spirométrie incitative"], "rv_cr241219"),
      q("vq11", "vi_asp", "Inclinaison de la tête de lit pour prévenir la VAP :", ["Au moins 30° (30 à 45°)"], ["0°, à plat", "Tête en bas", "90° obligatoire"], "rv_resumerea"),
      q("vq12", "vi_asp", "Mesures contre la pneumopathie sous ventilateur (plusieurs réponses) :", ["Soins de bouche", "Aspiration sous-glottique", "Ballonnet bien gonflé", "Éviter les fortes pressions abdominales"], ["Laisser le patient à plat"], "rv_resumerea"),
      q("vq13", "vi_asp", "Proclive maximal chez le patient AVC en réa (CR 19/12/2024) :", ["35°"], ["90°", "0°", "60°"], "rv_cr241219"),
      q("vq14", "vi_asp", "Durée du décubitus ventral dans le SDRA selon le Résumé réa et le CR du 12/11/2026 :", ["Au moins 16 h par jour"], ["15 min par jour", "1 h par semaine", "48 h d'affilée sans interruption"], "rv_cr1211"),
      q("vq15", "vi_asp", "Pourquoi le décubitus ventral améliore-t-il l'oxygénation ?", ["L'air va vers les zones dorsales, les mieux perfusées : le V/Q s'améliore"], ["Il augmente la FiO2", "Il supprime la PEP", "Il diminue la perfusion"], "rv_cr1211"),
      q("vq16", "vi_asp", "Nombre de personnes pour retourner un patient en prone selon le CR 21/11/2024 :", ["5"], ["1", "2", "10"], "rv_cr241121"),
      q("vq17", "vi_asp", "Rôle du kiné pendant le retournement selon ce CR :", ["Protéger l'épaule (risque de luxation et d'atteinte du plexus brachial)"], ["Tenir le tube", "Régler la FiO2", "Commander l'équipe sans toucher le patient"], "rv_cr241121"),
      q("vq18", "vi_asp", "Effets secondaires du décubitus ventral (plusieurs réponses) :", ["Œdème du visage", "Escarres", "Luxation d'épaule"], ["Hypertension intracrânienne guérie"], "rv_cr1211"),
      q("vq19", "vi_asp", "Position du nageur en prone : on alterne la tête et les bras :", ["Toutes les 2 à 3 h"], ["Toutes les 5 min", "Une fois par semaine", "Jamais"], "rv_lise2103"),
      q("vq20", "vi_asp", "Patient intubé en décubitus latéral : quel poumon ventile le mieux ?", ["Le poumon du dessus (supra-latéral)"], ["Le poumon du dessous", "Les deux de façon égale", "Aucun"], "rv_cr241017"),
      q("vq21", "vi_asp", "Après une aspiration, on :", ["Réausculte et remet la FiO2 de départ"], ["Laisse la FiO2 à 100 % pour la journée", "Dégonfle le ballonnet", "Arrête le respirateur"], "rv_cr250403"),
      q("vq22", "vi_asp", "Une aspiration traumatique peut créer :", ["Des granulomes"], ["Une hyperoxie", "Une alcalose", "Un pneumothorax obligatoire"], "rv_resumerea"),
      // vi_mob
      q("vb1", "vi_mob", "Un mois après la sortie de réa, quelle part des patients ventilés plus de 7 jours ne marchent pas 50 m seuls ?", ["66 %"], ["5 %", "100 %", "20 %"], "rv_resumerea"),
      q("vb2", "vi_mob", "Effet de la kiné en réa selon l'essai cité :", ["Diminution de la durée de ventilation mécanique"], ["Hausse de la mortalité", "Aucun effet", "Hausse de la durée de ventilation"], "rv_resumerea"),
      q("vb3", "vi_mob", "Patient sédaté au Glasgow 3 : quelle mobilisation ?", ["Passive, globale, avec prévention des escarres et des positions vicieuses"], ["Marche dans le couloir", "Renforcement contre résistance maximale", "Aucune, interdite"], "rv_cr241114"),
      q("vb4", "vi_mob", "Que signifie MIRE en revalidation de réa ?", ["Motivation, Intensité, Répétition, Encouragements"], ["Mode, Inspiration, Résistance, Expiration", "Masque, IPAP, Réglage, EPAP", "Mobilisation, Isométrie, Repos, Étirement"], "rv_respi4"),
      q("vb5", "vi_mob", "Exercices au lit cités pour le patient post-COVID trachéotomisé (plusieurs réponses) :", ["Ballon cacahuète en bout de lit", "Poulie accrochée au perroquet", "Élastique pour la flexion de hanche"], ["Course sur tapis à 12 km/h"], "rv_respi4"),
      q("vb6", "vi_mob", "Électrostimulation : fréquence pour les fibres rapides :", ["Plus de 50 Hz"], ["Moins de 5 Hz", "Exactement 1 Hz", "Elle ne stimule pas les fibres rapides"], "rv_resumerea"),
      q("vb7", "vi_mob", "Ne contre-indiquent pas la mobilisation (plusieurs réponses) :", ["Une sonde urinaire", "La noradrénaline"], ["Une PAM à 50 mmHg"], "rv_cr241114"),
      q("vb8", "vi_mob", "Selon le cours, le patient en revalidation de réa :", ["Doit faire le maximum, il ne faut pas trop l'aider"], ["Doit rester passif", "Ne doit jamais se fatiguer", "Ne doit pas être encouragé"], "rv_resumerea"),
      q("vb9", "vi_mob", "Choc septique : PAM visée sous vasopresseurs :", ["≥ 65 mmHg"], ["≥ 120 mmHg", "≥ 30 mmHg", "Aucune cible"], "rv_scaillet"),
      q("vb19", "vi_mob", "Critères du qSOFA (plusieurs réponses) :", ["PAS ≤ 100 mmHg", "FR > 22", "Confusion"], ["Température > 41 °C", "SpO2 < 70 %"], "rv_scaillet", "Deux critères identifient un patient à risque de mauvais pronostic."),
      q("vb20", "vi_mob", "De combien diminue la surface des fibres musculaires par jour en USI ?", ["2 à 4 %"], ["20 à 40 %", "0,1 %", "50 %"], "rv_scaillet"),
      q("vb10", "vi_mob", "Signes cliniques du choc septique (plusieurs réponses) :", ["Marbrures", "Extrémités froides"], ["Érythème diffus du choc anaphylactique seul", "Bradypnée à 6"], "rv_casrapport"),
      q("vb11", "vi_mob", "Fréquence du massage cardiaque :", ["100 à 120 par minute"], ["30 par minute", "200 par minute", "60 par minute"], "rv_cr250403"),
      q("vb12", "vi_mob", "Rythme compressions / insufflations chez l'adulte :", ["30:2"], ["15:1", "5:1", "50:5"], "rv_cr250403"),
      q("vb13", "vi_mob", "Relais du masseur :", ["Toutes les 2 min"], ["Toutes les 20 min", "Jamais", "Toutes les 10 s"], "rv_cr250403"),
      q("vb14", "vi_mob", "Choc électrique pendant la RCP :", ["Seulement si le rythme est choquable"], ["Toujours, même en asystolie", "Jamais", "Avant toute vérification"], "rv_cr250403"),
      q("vb15", "vi_mob", "Pendant le massage, quelle TA vise-t-on selon le CR 14/11/2024 ?", ["Environ 12/8"], ["Environ 4/2", "Environ 20/12", "Aucune mesure"], "rv_cr241114"),
      q("vb16", "vi_mob", "Pour bien ventiler au ballon (plusieurs réponses) :", ["Le brancher sur l'O2", "Laisser le ballon se regonfler", "Regarder le thorax se soulever"], ["Serrer le ballon 60 fois par minute sans pause"], "rv_cr241114"),
      q("vb17", "vi_mob", "Après un AVC en réa, priorité du CR 19/12/2024 :", ["« Réa > neuro » : d'abord les fonctions vitales et respiratoires"], ["Bobath dès le premier jour sous sédation", "Marche dès J1", "Aucune kiné respiratoire"], "rv_cr241219"),
      q("vb18", "vi_mob", "Quels muscles teste-t-on en priorité au bilan musculaire de réa ?", ["Quadriceps et triceps"], ["Muscles de la main seulement", "Muscles oculaires", "Aucun"], "rv_cr2210")
    ],
    patients: [
      { id: "rv_p_bpcoi", nom: "BPCO intubé, hypotendu, en carbonarcose", origine: "cours", src: "rv_cr1911vm", desc: "BPCO amené par le SMUR, aggravé sous VNI, en coma hypercapnique, intubé. TA 76/34, poids idéal 70 kg.", attrs: { intube: true, tonneau: true, cyanose: true } },
      { id: "rv_p_septic", nom: "Choc septique pulmonaire, 188 kg", origine: "cours", src: "rv_cr241212", desc: "Cinquantaine, diabétique, intubé et sédaté en volume contrôlé, très hypoxémique malgré FiO2 100 %.", attrs: { intube: true, oedeme: ["molletD", "molletG", "chevilleD", "chevilleG"], cyanose: true } },
      { id: "rv_p_hemo", nom: "Polytraumatisé de 25 ans, hémopneumothorax gauche drainé", origine: "cours", src: "rv_cr250403", desc: "Fracture du fémur, fractures de côtes gauches, hémopneumothorax drainé, intubé et ventilé.", attrs: { intube: true, drain: "G", douleurs: [{ zone: "cuisseG", type: "mecanique" }, { zone: "thorax", type: "mecanique" }] } },
      { id: "rv_p_avc", nom: "Homme de 65 ans, AVC hémorragique en réa", origine: "cours", src: "rv_cr241219", desc: "AVC thalamo-capsulaire gauche avec hémiplégie droite, intubé après une pneumonie d'inhalation, Glasgow 3.", attrs: { intube: true, hemi: "D", flasque: true, deglut: true, escarre: ["talonD", "talonG", "sacrum"] } },
      { id: "rv_p_panc", nom: "Femme de 46 ans, pancréatite en réa", origine: "cours", src: "rv_cr250213", desc: "Pancréatite sur éthylisme, laparotomie exploratrice avec 4 drains, intubée et consciente en aide inspiratoire, IMC 16,3.", attrs: { intube: true, cicatrices: [{ zone: "abdomen", recent: true, long: true }] } },
      { id: "rv_p_brady", nom: "Patient en réa après une bradyarythmie per-opératoire", origine: "cours", src: "rv_lise1502", desc: "Arrêt cardiaque au bloc, curarisé, ventilé en VS-PEP-AI, drain pleural gauche.", attrs: { intube: true, drain: "G" } },
      { id: "rv_p_trach", nom: "Patient post-COVID trachéotomisé en revalidation", origine: "cours", src: "rv_respi4", desc: "4 semaines de réa et 6 semaines d'alitement, amyotrophie importante, encombré.", attrs: { trach: true, fatigue: true, toux: true } }
    ],
    cas: [
      {
        id: "rv_cas_bpcoi", origine: "cours", src: ["rv_cr1911vm"], patient: "rv_p_bpcoi", fiche: "rv_vi",
        titre: "BPCO intubé et hypotendu : régler le volume contrôlé (cours du 19/11/2026)",
        etapes: [
          { type: "lecture", html: `<p>Patient BPCO amené aux urgences par le SMUR. Mis en VNI, il s'aggrave et entre en carbonarcose. On l'intube.</p>${T([["pH", "7,18"], ["PaCO2", "83 mmHg"], ["PaO2", "60 mmHg"], ["SaO2", "88 %"], ["HCO3-", "37 mmol/L"], ["FC", "155 bpm"], ["TA", "76/34 mmHg"], ["SpO2", "86 %"], ["Poids idéal", "70 kg"]], ["Donnée", "Valeur"])}<p>À régler : FiO2, Vt, Ti, FR, PEP.</p>` },
          { type: "choix", src: "rv_cr1911vm", items: [
            { t: "FiO2 100 % au départ, en visant ensuite 88 à 92 %.", ok: true, why: "L'hypoxémie est l'urgence ; on évite ensuite l'hyperoxie prolongée." },
            { t: "Vt en bas de la fourchette (6 mL/kg × 70 = 420 mL), voire moins.", ok: true, why: "Moins de volume = moins de pression thoracique et moins d'hyperinflation chez un patient hypotendu." },
            { t: "PEP à 0 au départ.", ok: true, why: "Patient à 76/34 : on garde la pression thoracique la plus basse possible, on remontera la PEP une fois la TA stabilisée." },
            { t: "PEP à 12 pour bien recruter.", ok: false, why: "La PEP baisserait encore le retour veineux et la TA (cas du 22/10/2026 : décès)." },
            { t: "FR augmentée vers 20 à 22, en surveillant l'auto-PEP.", ok: true, why: "Il faut une ventilation minute au-dessus de 7 L/min (420 × 22 ≈ 9 L/min)." },
            { t: "Ti réglé pour un I/E de 1/2 (1/3 ou 1/4 si air trapping).", ok: true, why: "Laisser le maximum de temps à l'expiration chez le BPCO." },
            { t: "Vt à 10 mL/kg pour faire baisser la PaCO2 au plus vite.", ok: false, why: "Hors de la fourchette protectrice et dangereux pour la TA." }
          ] },
          { type: "choix", src: "rv_cr1911vm", items: [
            { t: "Gazométrie de contrôle 20 à 30 min après.", ok: true, why: "On réévalue le pH, la PaCO2 et la PaO2." },
            { t: "Objectif : pH ≥ 7,30 à 7,35, sans ramener la PaCO2 à 40.", ok: true, why: "Avec des HCO3- à 37, une baisse rapide donnerait une alcalose post-hypercapnique." },
            { t: "Je surveille P plateau ≤ 30, driving pressure ≤ 15 et la courbe débit-temps.", ok: true, why: "Un gros delta crête-plateau chez le BPCO = résistances (bronchospasme, sécrétions)." },
            { t: "Si l'hypotension s'aggrave après l'intubation, je pense à la pression positive et à l'auto-PEP.", ok: true, why: "Il faut alors baisser la FR ou le Ti et vérifier la courbe débit-temps." }
          ] },
          { type: "lecture", html: `<p><b>Message du prof :</b> la priorité n'est pas la capnie, c'est de maintenir le patient en vie. On ventile en pression positive : on met la pression thoracique la plus basse possible (petit Vt, PEP 0). Quand l'hémodynamique est correcte (remplissage, vasopresseurs), on remonte la PEP et on ajuste le reste.</p>${W("Le CR note pour le Vt « 420 mL → correction : 200 mL ». Une autre version du même cours (cas GCS 3) retient 280 mL, soit 4 mL/kg. Voir les remarques.")}` }
        ]
      },
      {
        id: "rv_cas_gcs3", origine: "cours", src: ["rv_cr1911vp"], patient: "rv_p_bpcoi", fiche: "rv_vi",
        titre: "BPCO stade 4 au Glasgow 3 : réglage justifié pas à pas",
        etapes: [
          { type: "lecture", html: `<p>BPCO stade 4 arrivé aux urgences par le SMUR en détresse respiratoire aiguë. Glasgow 3/15. FC 134, cathéter artériel, SpO2 82 %, poids idéal 70 kg, TA 76/35.</p><p>Gazométrie : pH 7,10 ; PaO2 60 ; PaCO2 95 ; SaO2 80 % ; HCO3- 35 ; BE 2. FiO2 de départ non précisée ; le CR calcule un P/F de 60/100, soit 60.</p>` },
          { type: "choix", src: "rv_cr1911vp", items: [
            { t: "Glasgow 3 : je m'attends à une intubation, car le patient ne protège plus ses voies aériennes.", ok: true, why: "3/15 est le score minimal, critère d'intubation (risque de reflux)." },
            { t: "Réglage retenu en classe : FiO2 100 %, Vt 280 mL (4 mL/kg), I/E 1/2, FR 25, PEP 0.", ok: true, why: "La TA basse tue avant l'acidose : on limite toutes les pressions." },
            { t: "Un P/F de 60 évoque un SDRA sévère, d'où Vt à 4 mL/kg et FR haute.", ok: true, why: "Justification du CR ; il faut quand même les autres critères de Berlin pour poser le diagnostic." },
            { t: "Je règle une PEP de 10 pour recruter tout de suite.", ok: false, why: "Elle aggraverait l'hypotension." },
            { t: "Je fais tout de suite un bilan articulaire complet.", ok: false, why: "Ce n'est pas la priorité en urgence vitale." }
          ] }
        ]
      },
      {
        id: "rv_cas_septic", origine: "cours", src: ["rv_cr241212"], patient: "rv_p_septic", fiche: "rv_vi",
        titre: "Choc septique très hypoxémique : la démarche en urgence",
        etapes: [
          { type: "lecture", html: `<p>Patient d'une cinquantaine d'années, 188 kg, diabétique, en choc septique d'origine pulmonaire. Intubé et sédaté en volume contrôlé, couché sur le dos. Pas d'acidose hypercapnique.</p>${T([["FiO2", "100 %"], ["Vt", "420 mL"], ["FR", "25"], ["I/E", "1/2"], ["PEEP", "10 cmH2O"], ["FC", "52"], ["TA", "95/64"], ["SpO2", "68 %"]], ["Paramètre", "Valeur"])}` },
          { type: "choix", src: "rv_cr241212", items: [
            { t: "Je me demande d'abord ce qui se passe et j'ausculte.", ok: true, why: "« On n'oublie pas la clinique. » Ici, l'auscultation est sans particularité." },
            { t: "Je le redresse tout de suite en position assise.", ok: false, why: "Non : la TA est limite." },
            { t: "Je monte la PEP à 15 en surveillant la TA.", ok: true, why: "Étape du CR : FC 40, SpO2 70 %, insuffisant." },
            { t: "L'échographie montre un poumon gauche plus atteint : je le mets en décubitus latéral gauche (poumon droit au-dessus).", ok: true, why: "Chez l'intubé, le poumon du dessus ventile mieux : on garde le meilleur poumon en haut. SpO2 75 %." },
            { t: "Manœuvre de recrutement : PEP montée à 30 cmH2O par courtes sessions, attention au barotraumatisme.", ok: true, why: "SpO2 85 %." },
            { t: "Si rien ne suffit, le patient passe en ECMO.", ok: true, why: "C'est la suite du cas." }
          ] }
        ]
      },
      {
        id: "rv_cas_hemo", origine: "cours", src: ["rv_cr250403"], patient: "rv_p_hemo", fiche: "rv_vi",
        titre: "Polytraumatisé intubé : P plateau à 35 et aspiration",
        etapes: [
          { type: "lecture", html: `<p>Homme de 25 ans, fracture fémorale, fractures de côtes gauches et hémopneumothorax drainé. Intubé et ventilé, sans antécédent. Il mesure environ 1,70 m.</p>` },
          { type: "bilans", ordre: ["Paramètres vitaux", "Paramètres respiratoires", "Auscultation"], items: [
            { b: "Paramètres vitaux", r: "SpO2 qui ne remonte pas malgré une FiO2 à 100 %.", ok: true },
            { b: "Paramètres respiratoires", r: "Plus tard : FiO2 80 %, PEEP 13, Vt 580 mL, FR 22, P plateau 35 cmH2O.", ok: true },
            { b: "Auscultation", r: "Encombrement : c'est le bilan le plus important ici.", ok: true }
          ] },
          { type: "choix", src: "rv_cr250403", items: [
            { t: "La SpO2 ne remonte pas malgré FiO2 100 % : j'aspire après une préoxygénation de 1 à 2 min, avec un gant stérile, en remontant.", ok: true, why: "Encombrement probable." },
            { t: "P plateau à 35 : je diminue la PEEP et j'adapte le Vt au poids idéal (Lorentz).", ok: true, why: "Avec PEEP 9 et Vt 490 mL, la P plateau passe à 29." },
            { t: "Baisser la PEEP va aggraver le pneumothorax.", ok: false, why: "Il est drainé : baisser la PEEP n'a pas d'impact sur lui." },
            { t: "Je garde le Vt à 580 mL, c'est un homme jeune.", ok: false, why: "Pour environ 1,70 m, 580 mL dépasse 8 mL/kg de poids idéal." },
            { t: "S'il fait un arrêt cardiaque, je ne choque que si le rythme est choquable.", ok: true, why: "Remarque du CR." }
          ] }
        ]
      },
      {
        id: "rv_cas_avc", origine: "cours", src: ["rv_cr241219"], patient: "rv_p_avc", fiche: "rv_vi",
        titre: "AVC hémorragique en réa : ventilation et prévention",
        etapes: [
          { type: "lecture", html: `<p>Homme de 65 ans (1,80 m), AVC hémorragique thalamo-capsulaire avec inondation ventriculaire drainée. Insuffisance respiratoire aiguë en USI, intubé, pneumonie d'inhalation, troubles de la déglutition, à jeun strict. 15 jours d'USI.</p>` },
          { type: "bilans", ordre: ["Constat d'attitude", "Paramètres vitaux avec la FiO2", "Auscultation", "Bilan trophique"], items: [
            { b: "Constat d'attitude", r: "Monitoré, intubé, sédaté, ventilé, Glasgow 3/15, proclive maximal 35°, sondes, voie centrale.", ok: true },
            { b: "Paramètres vitaux avec la FiO2", r: "FC normale, SpO2 98 % (à lier à la FiO2), PAM à vérifier (&lt; 60 : pas de verticalisation).", ok: true },
            { b: "Auscultation", r: "Repères et bronches souches.", ok: true },
            { b: "Bilan trophique", r: "Risque d'escarres aux talons, à l'occiput et au sacrum.", ok: true },
            { b: "Bilan de la marche", r: "Impossible au Glasgow 3.", ok: false }
          ] },
          { type: "choix", src: "rv_cr241219", items: [
            { t: "Désencombrement : aspiration endotrachéale, seule technique possible au Glasgow 3.", ok: true, why: "Elle agit surtout au niveau des bronches souches." },
            { t: "Réglages en VAC : Vt 6 à 8 mL/kg de poids idéal (8 si hypoventilation), FR 15, FiO2 selon SpO2, PEEP ≥ 5, I/E 1/2.", ok: true, why: "En surveillant P plateau &lt; 30." },
            { t: "Je le mets à plat pour mieux mobiliser.", ok: false, why: "Proclive conservé (VAP, pression intracrânienne), au maximum 35°." },
            { t: "Mobilisations passives, prévention de l'équin et des escarres, du distal au proximal.", ok: true, why: "Prévenir les complications de décubitus et la polyneuropathie." },
            { t: "Plus tard, au Glasgow 8 intubé qui comprend les ordres simples, je teste le tonus et la motricité.", ok: true, why: "Suite du cas : le bilan neurologique vient quand le patient répond." }
          ] },
          { type: "lecture", html: `<p><b>À retenir :</b> « Réa &gt; neuro ». D'abord la ventilation, l'hémodynamique et la prévention, ensuite la rééducation neurologique.</p>` }
        ]
      },
      {
        id: "rv_cas_panc", origine: "cours", src: ["rv_cr250213"], patient: "rv_p_panc", fiche: "rv_vi",
        titre: "Pancréatite intubée en aide inspiratoire : lire le ventilateur",
        etapes: [
          { type: "lecture", html: `<p>Femme de 46 ans, pancréatite sur éthylisme, en réanimation depuis un mois après une laparotomie exploratrice (4 drains). Intubée et consciente (Glasgow 11/15 selon le CR), en aide inspiratoire.</p>${T([["FiO2", "30 %"], ["Ventilation minute affichée", "4,7 L/min"], ["Vt", "570 mL"], ["PEEP", "4,6 cmH2O"], ["FR", "12"], ["FC", "57"], ["TA", "147/67"], ["SpO2", "99 %"]], ["Paramètre", "Valeur"])}` },
          { type: "choix", src: "rv_cr250213", items: [
            { t: "Avec une driving pressure de 15, la compliance vaut 570/15 = 38 mL/cmH2O.", ok: true, why: "Avec 20, elle vaudrait 28 : plus l'aide monte, plus la compliance paraît altérée." },
            { t: "Les profs jugent la patiente trop ventilée : un Vt de 570 mL est grand pour son gabarit (IMC 16,3).", ok: true, why: "Remarque notée dans le CR." },
            { t: "570 mL × 12 = 6,8 L/min, ce qui ne correspond pas aux 4,7 L/min notés.", ok: true, why: "Un des deux chiffres est faux dans la prise de notes (voir les remarques)." },
            { t: "J'aspire quand c'est nécessaire.", ok: true, why: "Crépitements aux bronches souches." },
            { t: "Je monte l'aide à 25 pour améliorer la compliance.", ok: false, why: "L'aide ne devrait pas dépasser 15 ; elle ne fait pas monter la compliance." }
          ] }
        ]
      },
      {
        id: "rv_cas_brady", origine: "cours", src: ["rv_lise1502"], patient: "rv_p_brady", fiche: "rv_vi",
        titre: "Après une bradyarythmie au bloc : lire la gazométrie et préparer l'extubation",
        etapes: [
          { type: "lecture", html: `<p>Patient en soins intensifs après une bradyarythmie per-opératoire et un arrêt cardiaque. Curarisé, décubitus dorsal à 30°, ventilé en VS-PEP-AI, drain pleural gauche, Glasgow 3/15 sous curare.</p>` },
          { type: "bilans", ordre: ["Gazométrie 1", "Gazométrie 2", "Auscultation", "Ventilateur"], items: [
            { b: "Gazométrie 1", r: "pH 7,27 ; PaCO2 57 ; PaO2 173 ; HCO3- 26,2 ; lactates 3,1 : acidose respiratoire, PaO2 trop élevée.", ok: true },
            { b: "Gazométrie 2", r: "pH 7,42 ; PaCO2 52 ; PaO2 59 ; HCO3- 31,5 ; Hb 10,9 : en train de compenser ; l'Hb baisse (saignement ?).", ok: true },
            { b: "Auscultation", r: "Sibilances un peu partout, plutôt spastique, pas d'encombrement.", ok: true },
            { b: "Ventilateur", r: "FiO2 60 % qui a été diminuée, ventilation minute 15 L/min (élevée).", ok: true }
          ] },
          { type: "choix", src: "rv_lise1502", items: [
            { t: "Sans curare, son Glasgow serait autour de 10/15 : il est réveillable.", ok: true, why: "Au-dessus de 8, il ouvre les yeux et répond à un ordre moteur." },
            { t: "Avant de parler d'extubation, je vérifie qu'il sait tousser.", ok: true, why: "Critère indispensable." },
            { t: "Critères à réunir : bonne gazométrie, paramètres corrects, FiO2 proche de 21 %, éveil suffisant.", ok: true, why: "Critères du cas." },
            { t: "L'aide peut descendre à 0 : le tube n'ajoute aucune résistance.", ok: false, why: "L'aide minimale qui compense le tube est de 7 à 8 cmH2O." },
            { t: "Épreuve possible : déconnecter et le faire respirer au nez artificiel (T-tube) avec de l'O2.", ok: true, why: "Il n'y a pas de protocole unique et tous les médecins ne la font pas." }
          ] }
        ]
      },
      {
        id: "rv_cas_trach", origine: "cours", src: ["rv_respi4"], patient: "rv_p_trach", fiche: "rv_vi",
        titre: "Patient post-COVID trachéotomisé : bilan de réa et revalidation",
        etapes: [
          { type: "lecture", html: `<p>Patient post-COVID, trachéotomisé, en réanimation depuis 4 semaines après 6 semaines d'alitement. Amyotrophie importante et encombrement bronchique.</p>` },
          { type: "bilans", ordre: ["Identité", "État de conscience", "Paramètres vitaux avec la FiO2", "Constat d'attitude", "Auscultation", "Bilan cutané-trophique", "Bilan fonctionnel"], items: [
            { b: "Identité", r: "Nom, prénom, date de naissance vérifiés sur le bracelet.", ok: true },
            { b: "État de conscience", r: "Glasgow et orientation dans le temps et l'espace.", ok: true },
            { b: "Paramètres vitaux avec la FiO2", r: "FC, FR, TA (cathéter ou brassard), SpO2 à lier à la FiO2, tendance des dernières heures.", ok: true },
            { b: "Constat d'attitude", r: "Lit ou fauteuil, sondes, drains, tirage, respiration paradoxale.", ok: true },
            { b: "Auscultation", r: "Encombrement, sibilances.", ok: true },
            { b: "Bilan cutané-trophique", r: "Escarres, coloration, marbrures.", ok: true },
            { b: "Bilan fonctionnel", r: "Sait-il faire l'exercice ou pas ? Le prof préfère ce bilan global aux degrés précis.", ok: true },
            { b: "Goniométrie complète de toutes les articulations", r: "Pas la priorité selon le prof.", ok: false }
          ] },
          { type: "choix", src: "rv_respi4", items: [
            { t: "Ballon cacahuète en bout de lit : poussée et triple extension pour préparer la marche.", ok: true, why: "Exercice du cours." },
            { t: "Élastique attaché au perroquet pour la flexion de hanche, en vitesse.", ok: true, why: "Travail de l'explosivité." },
            { t: "Poulie au perroquet pour la flexion des deux épaules.", ok: true, why: "Renforcement du membre supérieur." },
            { t: "Appliquer MIRE : motivation, intensité, répétition, encouragements.", ok: true, why: "Principe de revalidation du cours." },
            { t: "Attendre la sortie de réa pour commencer la revalidation.", ok: false, why: "La faiblesse acquise s'installe vite ; on commence tôt." }
          ] }
        ]
      }
    ]
  };

  // Cas du 12/11/2026 (BPCO GOLD 4 obèse) : le CR ne note pas le traitement ; la décision est déduite des règles du cours.
  fVNI.patients.push({ id: "rv_p_obese63", nom: "Femme de 63 ans, BPCO GOLD 4 obèse, en soins intensifs", origine: "cours", src: "rv_cr1211", desc: "125 kg pour 1,60 m, cardiopathie, 2 L/min d'O2 à domicile, dort assise. Amenée par le SMUR pour détresse respiratoire.", attrs: { o2: "masque", dyspnee: true, toux: true, tonneau: true } });
  fVNI.cas.push({
    id: "rv_cas_obese63", origine: "cours", src: ["rv_cr1211"], patient: "rv_p_obese63", fiche: "rv_vni",
    titre: "BPCO GOLD 4 obèse en soins intensifs : lire la gazométrie",
    etapes: [
      { type: "lecture", html: `<p>Patiente de 63 ans amenée par le SMUR pour une détresse respiratoire. BPCO GOLD 4, exacerbations antérieures, cardiopathie. Lasix, L-thyroxine, antihypertenseur. Ancienne fumeuse (1 paquet par jour, arrêt il y a 5 ans). 2 L/min d'O2 à domicile, elle marche dans sa maison.</p>` },
      { type: "anamnese", items: [
        { q: "Taille et poids ?", r: "125 kg pour 1,60 m.", p: 1 },
        { q: "Comment dort-elle ?", r: "En position assise.", p: 2 },
        { q: "A-t-elle perdu connaissance ?", r: "Non.", p: 1 },
        { q: "Quel était son O2 à domicile ?", r: "2 L/min.", p: 1 }
      ] },
      { type: "bilans", ordre: ["Constat d'attitude", "Paramètres vitaux avec le débit d'O2", "Dyspnée", "Toux et expectorations", "Auscultation", "Gazométrie", "Radiographie (ABCDEF)"], items: [
        { b: "Constat d'attitude", r: "Alitée, masque à O2, oxymètre, sonde urinaire, voie centrale, cathéter artériel.", ok: true },
        { b: "Paramètres vitaux avec le débit d'O2", r: "FC 112, FR 22, SpO2 86 % sous masque à 6 L/min, TA 110/82, T° 37,7 °C.", ok: true },
        { b: "Dyspnée", r: "EVA 7 à 8/10.", ok: true },
        { b: "Toux et expectorations", r: "Expectorations vertes et visqueuses ; elle n'arrive pas à tout remonter.", ok: true },
        { b: "Auscultation", r: "Encombrée, hypoventilation (atélectasie probable liée à l'obésité).", ok: true },
        { b: "Gazométrie", r: "pH 7,25 ; PaCO2 75 ; HCO3- 32 ; PaO2 52 ; SaO2 84 %.", ok: true },
        { b: "Radiographie (ABCDEF)", r: "À lire avec la méthode du cours.", ok: true }
      ] },
      { type: "choix", src: "rv_cr1211", items: [
        { t: "pH 7,25 avec PaCO2 75 : acidose respiratoire, partiellement compensée (HCO3- à 32).", ok: true, why: "Le pH reste bas : la compensation ne suffit pas." },
        { t: "Je la verticalise : chez l'obèse couché, la pression pleurale des bases devient positive.", ok: true, why: "Règle du CR du 12/11/2026." },
        { t: "Selon les règles du cours, une acidose hypercapnique fait discuter une VNI à deux niveaux.", ok: true, why: "Le CR ne note pas le traitement de ce cas : c'est la règle générale (fiche VNI)." },
        { t: "Elle désature : je peux augmenter la FiO2, en visant 88 à 92 %.", ok: true, why: "« Si le patient désature : augmenter la FiO2 ou mettre en prone » ; la cible BPCO reste 88 à 92 %." },
        { t: "Je l'aide à désencombrer, puisqu'elle ne remonte pas tout.", ok: true, why: "Encombrement à l'auscultation et toux insuffisante." },
        { t: "Je la mets à plat pour soulager son dos.", ok: false, why: "Couchée, la masse abdominale aggrave l'hypoventilation des bases." }
      ] }
    ]
  });

  for (const p of [fO2, fVNI, fVI]) M.PATHOS[p.id] = p;
  const respi = M.CELLS.find(c => c.id === "respi");
  if (respi) {
    for (const id of [fO2.id, fVNI.id, fVI.id]) if (!respi.pathos.includes(id)) respi.pathos.push(id);
    respi.bientot = (respi.bientot || []).filter(x => !/VNI|ventilation invasive/i.test(x));
  }

  (M.REMARQUES = M.REMARQUES || []).push(
    { g: "Contradictions entre supports", t: "Durée du décubitus ventral", s: "rv_lise2103", txt: "Le Résumé réa BK3 et le CR du 12/11/2026 disent « au moins 16 h par jour » ou « 16 h/24 ». Les notes de Lise (21/03) écrivent « maximum 16 h/24 ». Retiens au moins 16 h par jour. La rotation de la tête et des bras se fait toutes les 2 à 3 h (Lise) ou toutes les 3 h (CR 24/04/2025)." },
    { g: "Contradictions entre supports", t: "Pression du ballonnet", s: "rv_modeemploi", txt: "30 cmH2O dans le Mode d'emploi réa et le CR du 14/11/2024 ; 20 à 30 cmH2O dans le Résumé réa BK3 ; 25 à 30 cmH2O dans le cours VI. La fiche Acronymes parle d'une « seringue de 10 cmH2O » pour dégonfler : il s'agit sans doute d'une seringue de 10 mL. Retiens environ 30 cmH2O, contrôlé au manomètre." },
    { g: "Contradictions entre supports", t: "Plages de PEEP et d'EPAP", s: "rv_cr1911vp", txt: "PEP « norme 5 à 15 » (CR 19/11/2026), 5 à 12 (Mode d'emploi réa, CR VNI 2024), « 10 max, souvent 5 » (Résumé réa BK3), EPAP 5 à 15 (CR 28/11/2024). Retiens : départ à 5, montée progressive selon SpO2 et TA, prudence au-delà de 12 (choc de reventilation)." },
    { g: "Contradictions entre supports", t: "Driving pressure élevée : monter ou baisser la PEP ?", s: "rv_cr241107", txt: "Le CR du 07/11/2024 dit d'augmenter la PEEP pour une driving pressure de 23 ; le cours VI dit de diminuer le Vt et/ou d'augmenter la PEEP, et de diminuer la PEP pour un plateau à 35. Les deux peuvent être vrais (PEP optimale du ballon de baudruche), mais il faut toujours contrôler P plateau, driving pressure et TA après le changement." },
    { g: "Erreurs repérées", t: "Driving pressure assimilée à « crête − plateau »", s: "rv_cours2", txt: "Des notes de cours assimilent la driving pressure à la différence entre crête et plateau. La driving pressure est P plateau − PEP ; crête − plateau reflète les résistances (cours du 19/11/2026)." },
    { g: "Contradictions entre supports", t: "Réglages chez le patient hypotendu", s: "rv_cr1911vm", txt: "Le cours du 19/11/2026 donne pour le même type de patient un Vt de 420 mL « → correction : 200 mL », la version avec cas (GCS 3) donne 280 mL (4 mL/kg) et le CR du 17/10/2024 250 mL (3,6 mL/kg). FR : 12 à 18 (CR 14/11/2024), 21 (CR 17/10/2024), 20 à 22 ou 25 (2026). Tous s'accordent sur PEP 0, FiO2 100 % et Vt bas. Demande à ton prof quel chiffre il attend." },
    { g: "Erreurs repérées", t: "Ventilations minute incohérentes", s: "rv_cr250213", txt: "Pancréatite (CR 13/02/2025) : Vt 570 × FR 12 = 6,8 L/min, pas 4,7. CR 24/04/2025 : 420 × 28 = 11,8 L/min, pas 5,5. Cas « Mr Durand » (CR 17/04/2025) : « 600 mL/min » est un Vt de 600 mL, soit 10,8 L/min à 18 cycles. Le CR du 17/10/2024 écrit « 12 à 14 L/min chez le BPCO » sans justification. Refais toujours le calcul VM = Vt × FR." },
    { g: "Erreurs repérées", t: "« Vasopresseurs pour baisser la TA »", s: "rv_cr2210", txt: "Le CR du 22/10/2026 (OAP) et le CR du 10/10/2024 écrivent qu'on donne un vasopresseur pour « calmer » ou diminuer l'HTA. C'est l'inverse : un vasopresseur (noradrénaline) fait monter la TA. Pour baisser la TA dans un OAP hypertensif, on utilise des vasodilatateurs ou des antihypertenseurs, avec un diurétique." },
    { g: "Erreurs repérées", t: "Ordre de la cascade hémodynamique", s: "rv_cr241114", txt: "Certains CR écrivent « diminue la postcharge puis la précharge ». L'ordre du cours 2026 est : pression thoracique ↑, retour veineux ↓, précharge ↓, débit cardiaque ↓, TA ↓." },
    { g: "Erreurs repérées", t: "Auto-PEP : formulations fausses", s: "rv_resumerea", txt: "On lit « allonger le Ti » pour réduire l'auto-PEP, « en ventilation contrôlée pas de PEEP extrinsèque » (Résumé réa BK3) ou « ventilation normale = air trapping ». Il faut allonger le temps expiratoire (baisser le Ti ou la FR) ; une PEP peut être réglée en VC." },
    { g: "Erreurs repérées", t: "Calcul de dilution de l'O2 (CR 12/12/2024)", s: "rv_cr241212", txt: "6 L/min d'O2 mélangés à 114 L/min d'air donnent (6 × 100 + 114 × 21) / 120 ≈ 25 %, et non « environ 40 % ». Le message reste juste : la FiO2 des lunettes s'effondre quand le débit inspiratoire est grand." },
    { g: "Contradictions entre supports", t: "Glasgow maximal du patient intubé", s: "rv_cr1211", txt: "Le cours du 19/11/2026 donne un maximum de 10 (V noté T), le CR du 12/11/2026 donne 11/15, les notes du cas bradycardie disent « 10/15 ». Ça dépend de la façon de coter le V (1 point ou « T ») : précise ta cotation au jury." },
    { g: "Contradictions entre supports", t: "Vt en VNI", s: "rv_lisetrame", txt: "6 à 8 mL/kg de poids idéal dans la plupart des supports ; 7 à 10 mL/kg dans la trame de Lise et dans Connaissances fondamentales ; 8 à 10 dans le document Ventilation artificielle (ancien). Les QCM retiennent 6 à 8 mL/kg." },
    { g: "Contradictions entre supports", t: "FiO2 du masque à réservoir", s: "rv_duprez", txt: "Le masque à réservoir est souvent présenté comme « 100 % ». Les cours (Duprez, scaillet) donnent 60 à 80 % en réalité. Un CR (13/03/2025) dit qu'il « augmente la capnie car trop étanche » : l'explication habituelle est plutôt le collapsus du sac et la réinhalation quand le débit est insuffisant." },
    { g: "Contradictions entre supports", t: "Optiflow et PaCO2", s: "rv_ficherespi", txt: "La fiche respi écrit que l'Optiflow n'a « aucun effet sur la PaCO2 », alors que d'autres supports citent le lavage de l'espace mort. L'Optiflow n'est pas une ventilation : en acidose hypercapnique, on choisit la VNI." },
    { g: "Erreurs repérées", t: "Sens de « PIF » et seuils du SDRA", s: "rv_cr1911vp", txt: "« PIF » est utilisé pour le rapport PaO2/FiO2 (P/F), alors qu'en ventilation PIF désigne aussi le débit inspiratoire de pointe. Une note dit « PIF > 300 = SDRA sévère » : c'est faux. Berlin : 200 à 300 léger, 100 à 200 modéré, < 100 sévère." },
    { g: "À vérifier avec tes profs", t: "Inclinaison de la tête de lit", s: "rv_lisepremiers", txt: "30° au moins (cours VI), 30 à 45° (Résumé réa BK3), « 45° pour tous et 30° en neuro » (premiers cours de Lise), proclive au maximum 35° dans l'AVC (CR 19/12/2024)." },
    { g: "À vérifier avec tes profs", t: "Critère de FiO2 pour l'extubation", s: "rv_lise1502", txt: "« FiO2 proche de 21 % » (cas bradycardie), « FiO2 < 50 % chez les patients à risque » (rapport de stage). Un cas juge une FiO2 de 60 % acceptable, un autre non." },
    { g: "Erreurs repérées", t: "Test de fuite et test du ballonnet", s: "rv_vi", txt: "Le cours VI range « test du ballonnet (pression 25 à 30) » dans les critères d'extubation. Contrôler la pression du ballonnet n'est pas le test de fuite : le test de fuite consiste à dégonfler le ballonnet et vérifier que l'air passe autour du tube." },
    { g: "Erreurs repérées", t: "Formulations diverses à corriger", s: "rv_vnigazo", txt: "« FR = 119 cpm » (cas de salle de réveil, sans doute 19 ou 29) ; « on ne donne pas d'O2 au BPCO ou au cardiaque » (on en donne, avec une cible) ; « lactates = hypoxémie » (les lactates signent l'hypoxie tissulaire) ; constante de temps notée « T = 4RC » (T = R × C, il faut environ 3 à 4 T pour expirer)." },
    { g: "Contradictions entre supports", t: "Lunettes à haut débit en urgence", s: "rv_scaillet", txt: "Les cours fixent le maximum des lunettes à 6 L/min, mais certains services montent à 10 ou 15 L/min en urgence et pendant une marche courte. Hors urgence, au-delà de 6 L/min, change d'interface." },
    { g: "Erreurs repérées", t: "Calcul de compliance", txt: "Plusieurs calculs de compliance des CR ne tombent pas juste (ex. 420/17 = 24,7 et non 18). Refais toujours le calcul C = Vt / (P plateau − PEP)." },
    { g: "À vérifier avec tes profs", t: "Seuil de dépression d'aspiration", s: "rv_resumerea", txt: "Le Résumé réa BK3 écrit « dépression minimum 200 mmHg ». Selon les sources, ce chiffre est présenté comme un minimum ou comme un maximum à ne pas dépasser. Demande la valeur utilisée dans ton service de stage." },
    { g: "À vérifier avec tes profs", t: "Cas BPCO obèse du 12/11/2026", s: "rv_cr1211", txt: "Le CR ne note pas le traitement de la patiente (pH 7,25, PaCO2 75). Le cas de l'application applique les règles générales du cours (verticalisation, VNI à discuter, cible 88 à 92 %)." }
  );

  const addT = (k, v) => { if (!M.TESTS[k]) M.TESTS[k] = v; };
  addT("rv_rox", { nom: "Indice ROX", cat: "Respiratoire", but: "Prédire le succès ou l'échec d'un haut débit nasal (Optiflow).", deroul: "ROX = (SpO2 / FiO2) / FR, avec la FiO2 en fraction (ex. 0,6).", faux: ["Somme de 3 réponses yeux, verbale et motrice.", "PaO2 divisée par la FiO2.", "Vt divisé par la driving pressure."], cot: "Valeur continue.", positif: "< 4,88 : risque d'échec et d'intubation ; < 3,85 : envisager le décubitus ventral ; > 4,88 : bonne tolérance.", diag: "Insuffisance respiratoire hypoxémique sous haut débit.", incl: "Ne suffit pas seul : on garde la clinique.", src: ["rv_scaillet", "rv_modeemploi"] });
  addT("rv_fuite", { nom: "Test de fuite (avant extubation)", cat: "Réanimation", but: "Vérifier qu'il n'y a pas d'œdème obstructif autour du tube avant d'extuber.", deroul: "On aspire, on dégonfle le ballonnet, on bouche le tube et on regarde si l'air passe autour du tube.", faux: ["On gonfle le ballonnet à 60 cmH2O.", "On fait une pause télé-expiratoire de 10 s.", "On met le patient en décubitus ventral."], cot: "Fuite présente ou absente.", positif: "Pas de passage d'air = obstruction probable : on n'extube pas.", diag: "Œdème laryngé, risque de stridor après extubation.", incl: "Il ne remplace pas les autres critères (conscience, toux, gazométrie, FiO2).", src: ["rv_stagealice"] });
  addT("rv_qsofa", { nom: "Quick SOFA (qSOFA)", cat: "Réanimation", but: "Dépister hors réanimation un patient qui pourrait avoir un sepsis grave.", deroul: "Un point par critère : PAS ≤ 100 mmHg, FR > 22 cpm, confusion (Glasgow < 15).", faux: ["Score de 3 à 15 sur la conscience.", "SpO2 / FiO2 / FR.", "Vt / FR."], cot: "De 0 à 3.", positif: "2 critères ou plus : mauvais pronostic, monitorage et avis de réanimation.", diag: "Sepsis ; le choc septique demande en plus des vasopresseurs pour une PAM ≥ 65 mmHg.", incl: "Outil de dépistage, pas de diagnostic.", src: ["rv_scaillet"] });
  addT("rv_rass", { nom: "Échelle RASS (complément hors cours)", cat: "Réanimation", but: "Coter le niveau de sédation ou d'agitation d'un patient de réanimation.", deroul: "On observe le patient, puis on l'appelle, puis on le stimule physiquement si besoin.", faux: ["Somme yeux, verbale, motrice de 3 à 15.", "Rapport SpO2/FiO2 sur FR.", "Test de dégonflage du ballonnet."], cot: "De +4 (combatif) à −5 (aucune réponse), 0 = éveillé et calme.", positif: "Un patient de −3 à −5 participe peu : mobilisation surtout passive.", diag: "Niveau de sédation.", incl: "Non cité dans les supports MSP : complément standard, à confirmer avec tes profs.", src: ["rv_hors"] });
})();
