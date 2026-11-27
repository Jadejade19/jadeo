"use strict";
// MSP Respi : « Notions essentielles en Bilan MK1 » (12 pages) entièrement mis en QCM.
// Placé en tête de la cellule respiratoire. Chaque ligne du document est couverte par au moins une question.
(function () {
  const M = window.MSPDATA; if (!M) return;
  M.SRC.mk1 = { t: "« Notions essentielles en Bilan MK1 » (normes, formules, oxygène, revalidation BPCO, tests seniors, interrogatoire respi)", k: "Document de cours (respi)", f: "Bibliothèque MSP › 08_BASES - anatomie, biomecanique, generalites › notions essentielles en Bilan MK1 (5).pdf" };
  const T = (rows, head) => `<table class="mt">${head ? `<tr>${head.map(h => `<th>${h}</th>`).join("")}</tr>` : ""}${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;
  const W = t => `<p class="small warn">⚠️ ${t}</p>`;

  const pro = [
    { id: "vitaux", titre: "1. Signes vitaux et hémodynamique", src: ["mk1"], html:
      `<p><b>Les 5 signes vitaux :</b> FC, FR, SpO2, TA (systolique, diastolique et moyenne), température.</p>
      <p><b>Au repos :</b></p>${T([["Adulte", "12 à 18 cpm", "60 à 70 bpm"], ["Enfant", "20 à 30 cpm", "70 à 140 bpm"], ["Nourrisson", "30 à 40 cpm", "100 à 160 bpm"], ["Nouveau-né (< 1 semaine)", "40 à 60 cpm", "120 à 160 bpm"]], ["Âge", "FR", "FC"])}
      ${W("La fiche donne 60 à 70 bpm chez l'adulte ; la norme habituelle de repos va de 60 à 100 bpm.")}
      <p><b>Tension artérielle adulte :</b> TAS 140 mmHg max, TAD 90 mmHg max, TAM ≈ 100 mmHg. <b>PAM = (PAS + 2 × PAD) / 3</b>. 1 mmHg = 13,6 mmH2O.</p>
      <p><b>Débit cardiaque</b> = FC × VES = 5 à 6 L/min (adulte au repos). VES : 70 à 150 mL du repos à l'effort. Débit cardiaque = PAM / résistances périphériques. VO2 = débit cardiaque × différence artério-veineuse en O2.</p>
      <p><b>Ce qui influence les résistances périphériques</b> (question posée par la fiche, réponse tirée de la loi de Poiseuille plus bas) : surtout le <b>rayon</b> des vaisseaux (vasoconstriction, vasodilatation), puis la <b>viscosité</b> du sang et la <b>longueur</b> du réseau.</p>
      <p><b>Température :</b> 36,5 à 37,5 °C.</p>
      <p><b>SpO2 :</b> adulte 96 à 98 % ; BPCO 88 à 92 % (acceptable). SaO2 et SpO2 peuvent parfois donner des résultats très différents. SpO2 90 % ≈ PaO2 60 mmHg. Sujet sain : resaturation en ± 30 s, désaturation en ± 100 s.</p>` },
    { id: "volumes", titre: "2. Volumes pulmonaires et DEP", src: ["mk1"], html:
      `<p>Les volumes varient avec l'âge, la taille et le sexe. Adulte « normal » :</p>${T([["Tiffeneau", "> 80 %"], ["VEMS", "3500 à 4000 mL"], ["CPT (capacité pulmonaire totale)", "± 5000 mL"], ["VR (volume résiduel)", "± 1000 mL"], ["VRI (réserve inspiratoire)", "2500 à 3000 mL"], ["VRE (réserve expiratoire)", "± 1000 mL"], ["CI (capacité inspiratoire)", "3000 à 3500 mL"], ["VC (volume courant)", "450 mL (7 à 10 mL/kg de poids corporel idéal)"], ["CRF (capacité résiduelle fonctionnelle)", "2000 mL"], ["CV (capacité vitale)", "4000 à 4500 mL"]])}
      <p><b>Le VRI est environ 3 fois plus grand que le VRE.</b></p>
      ${W("Le seuil d'obstruction de la classification GOLD (figure de la même fiche) est VEMS/CVF < 0,70.")}
      <p><b>DEP théorique</b> (débit expiratoire de pointe) : adolescent de 1,45 m ≈ 350 L/min ; femme de 30 ans, 1,60 m ≈ 490 L/min ; homme de 50 ans, 1,80 m ≈ 620 L/min.</p>` },
    { id: "bio", titre: "3. Gazométrie et biologie", src: ["mk1"], html:
      T([["pH", "7,35 à 7,45"], ["PaO2", "80 à 100 mmHg"], ["PaCO2", "35 à 45 mmHg"], ["Bicarbonates", "20 à 29 mmol/L"], ["BE (excès de base)", "0 ± 2 mEq/L"], ["CRP (marqueur d'inflammation)", "< 6 mg/L"], ["Globules blancs", "4000 à 10 000 /mm³"], ["Globules rouges", "4,6 à 6,2 millions /mm³"], ["Plaquettes", "150 000 à 400 000 /mm³"], ["Hb", "14 à 18 g/dL (toujours plus faible chez la femme)"], ["Acide lactique", "0,3 à 1,3 mmol/L (limite actuelle 2 mmol/L)"], ["Créatinine", "1 mg/dL"], ["Glycémie", "1 g/L"], ["K+", "4 mmol/L"], ["Na+", "140 mmol/L"], ["Cl-", "100 mmol/L"], ["CaO2", "± 20 mL/dL"], ["CvO2", "± 15 mL/dL"], ["PvO2", "35 à 45 mmHg"], ["SvO2", "65 à 75 %"], ["FiCO2", "0,03 %"]]) +
      `<p><b>Sérum physiologique</b> : NaCl 0,9 %. <b>Sérum hypertonique 3 %</b> (pédiatrie) contre l'œdème sous-muqueux ; <b>20 %</b> (adulte) pour provoquer la toux (chiffre de la fiche).</p>
      <p><b>Henderson-Hasselbalch :</b> pH = 6,1 + log (HCO3- / (0,03 × PaCO2)). Repères : log 10 = 1 ; log 100 = 2 ; <b>log 20 = 1,3</b>. Avec HCO3- 24 et PaCO2 40 : 24 / 1,2 = 20, donc pH = 6,1 + 1,3 = 7,4.</p>
      <p><b>Diurèse normale adulte :</b> 800 à 1500 mL par jour.</p>` },
    { id: "gaz", titre: "4. Gaz, pressions et métabolisme", src: ["mk1"], html:
      `<p>Fraction d'un gaz = volume du gaz / volume total de gaz.</p>${T([["N2", "79 %", "PN2 = 760 × 0,79 = 600 mmHg"], ["O2", "21 %", "PO2 = 760 × 0,21 = 160 mmHg ; PiO2 = (760 − 47) × 0,21 = 150 mmHg"], ["CO2 atmosphérique", "0,03 %", "760 × 0,0003 = 0,23 mmHg"], ["CO2 alvéolaire (FACO2)", "± 5 %", "PACO2 = 760 × 0,05 ≈ 40 mmHg"]], ["Gaz", "Fraction", "Pression partielle"])}
      <p>47 mmHg = pression de vapeur d'eau, retirée pour l'air inspiré humidifié.</p>
      <p><b>Espace mort (Vd)</b> = 2 mL/kg de poids corporel idéal.</p>
      <p><b>QR = VCO2 / VO2</b> : 0,78 à 0,80 au repos ; toujours entre 0,70 et 1. VO2 = 250 mL/min et VCO2 = 200 mL/min (adulte au repos).</p>
      <p><b>Ventilation minute</b> = 100 mL/min/kg de poids idéal au repos, soit ± 7 à 8 L/min chez l'adulte.</p>
      <p><b>Pression atmosphérique</b> au niveau de la mer : 760 mmHg = 1013 hPa. Mont-Blanc : ± 370 mmHg selon la fiche.</p>
      ${W("Au sommet du Mont-Blanc (4808 m), la pression réelle est plutôt d'environ 420 mmHg, un peu plus de la moitié de celle du niveau de la mer.")}` },
    { id: "formules", titre: "5. Formules, mécanique et scores", src: ["mk1"], html:
      `<p><b>Écoulement :</b> Q = ΔP / R ; volume insufflé = (ΔP / R) × temps inspiratoire. <b>Résistance (Poiseuille)</b> = 8 × µ × l / (π × r⁴), en cmH2O/L/s (µ = viscosité, l = longueur, r = rayon). Diviser le rayon par 2 multiplie la résistance par 16.</p>
      <p><b>Contenu artériel en O2 :</b> CaO2 = (Hb × 1,34 × SaO2) + (PaO2 × 0,003). Norme ± 210 mL/L de sang (= 21 mL/dL).</p>
      <p><b>Formule de Lorentz (poids idéal) :</b> taille (cm) − 100 − (taille − 150) / 2,5 chez la femme, / 4 chez l'homme.</p>
      <p><b>Quatre formules essentielles :</b></p><ol>
        <li>Va = FR × (Vt − Vd) (FR ± 15 cpm ; Vt 7 à 10 mL/kg ; Vd ± 2 mL/kg)</li>
        <li>PaCO2 = (Patm − PvapH2O) × (FiCO2 + VCO2 / Va) (Patm 760 ; PvapH2O 47 ; FiCO2 0,0003 ; VCO2 ± 200 mL/min ; Va ± 4 L/min au repos)</li>
        <li>PAO2 = PiO2 − (VO2 / Va) × Pb</li>
        <li>pH = 6,1 + log (HCO3- / (0,03 × PaCO2)) (HCO3- 20 à 29 ; PaCO2 35 à 45)</li></ol>
      <p>Conséquence de la formule 2 : si la ventilation alvéolaire baisse de moitié, la PaCO2 double environ (hypoventilation, hypercapnie).</p>
      <p><b>Compliance et résistance des voies aériennes :</b></p>${T([["Normal", "2,5 à 5 cmH2O/L/s", "60 à 200 mL/cmH2O"], ["BPCO", "<b>20 cmH2O/L/s</b>", "60 à 200 mL/cmH2O"], ["ARDS", "2,5 à 5 cmH2O/L/s", "<b>30 mL/cmH2O</b>"]], ["", "Résistance", "Compliance"])}
      <p>L'élastance est l'inverse de la compliance (C = 1/E).</p>
      <p><b>GOLD (VEMS post-bronchodilatateur, VEMS/CVF < 0,70 à tous les stades) :</b></p>${T([["I léger", "VEMS ≥ 80 %", "Réduire les facteurs de risque, vaccin grippe, bronchodilatateur courte durée à la demande"], ["II modéré", "50 % ≤ VEMS < 80 %", "+ un ou plusieurs bronchodilatateurs longue durée en continu, + revalidation"], ["III sévère", "30 % ≤ VEMS < 50 %", "+ corticoïdes inhalés si exacerbations répétées"], ["IV très sévère", "VEMS < 30 %, ou < 50 % avec insuffisance respiratoire chronique", "+ oxygène au long cours si insuffisance respiratoire chronique ; envisager la chirurgie"]], ["Stade", "Critère", "Traitement ajouté"])}
      <p><b>Index de Brinkman</b> = paquets par jour × années de tabagisme. Unité : <b>paquets-années</b> (pas « paquets par année »).</p>
      <p><b>IMC</b> = poids / taille² (OMS) : < 18,5 maigreur ; 18,5 à 25 satisfaisant ; 25 à 30 surpoids ; 30 à 40 obésité ; ≥ 40 obésité morbide.</p>` },
    { id: "o2", titre: "6. Oxygénothérapie", src: ["mk1"], html:
      `<p>FiO2 = volume d'O2 / volume total.</p><ol>
        <li><b>FiO2 = 21 % + 3 % × débit d'O2 (L/min)</b> : la plus utilisée, mais ne tient pas compte du débit inspiratoire du patient.</li>
        <li><b>FiO2 = 21 % + débit d'O2 / (4 × VM)</b> (Duprez et al., Resp Care 2019), VM = ventilation minute.</li>
        <li><b>FiO2 = 21 % + débit d'O2 / (2 × FR)</b> (Duprez 2023, adulte, J Clin Monit Comput).</li></ol>
      <p><b>Systèmes à performance variable</b> (FiO2 trachéale variable selon le débit inspiratoire) : lunettes, sondes, masque simple, masques à réservoir (partiel ou non-rebreathing). <b>À performance fixe</b> : masque Venturi (Ventimask), Optiflow (oxygénation à haut débit). Plus la ventilation minute augmente, plus la FiO2 réelle baisse avec un système à performance variable.</p>
      <p>Débit max : <b>6 L/min</b> pour les lunettes, <b>10 L/min</b> pour le masque simple.</p>
      <p><b>Oxyconcentrateurs</b> : FiO2 ± 93 %. Trois modes : débit constant (L/min), pulse à volume constant (mL), FOMV (fixed oxygen minute volume, mL/min/FR). Portables ≤ 3 L/min en général ; fixes ≤ 5 L/min (nouvelle génération jusqu'à 10 L/min). Les débitmètres sont imprécis, d'autant plus que le débit est élevé.</p>
      <p><b>Sur-oxygénation dangereuse</b> : BPCO, obèse hypoventilant, infarctus, nouveau-né prématuré.</p>
      <p>L'hypoxie hypoxémique débute vers une PaO2 de 55 mmHg.</p>
      <p><b>Bouteille d'O2</b> : volume théorique = volume en eau × pression (bar). Retirer 35 bar de sécurité : à 185 bar lus, il reste réellement 150 bar utilisables.</p>` },
    { id: "bpco", titre: "7. Revalidation BPCO et désencombrement", src: ["mk1"], html:
      `<ol><li>L'électrostimulation est efficace surtout chez le BPCO amyotrophié qui ne peut se déplacer.</li>
      <li>La ventilation à lèvres pincées (pursed lips) est surtout utile et observable chez l'emphysémateux. Elle augmente la vidange (temps expiratoire plus long), a un effet bronchodilatateur mécanique (point d'égale pression déplacé) et, selon la fiche, augmente l'élastance thoraco-pulmonaire (muscles expiratoires).</li>
      <li>Contre la dyspnée : semi-assis, position du cocher de fiacre, <b>sauf en cas d'hypotension</b>.</li>
      <li>Compression thoracique ou abdominale pour expectorer : <b>pas recommandée</b> chez le BPCO modéré à sévère, surtout emphysémateux (collapsus des voies aériennes, baisse du débit de pointe de toux) ; <b>efficace</b> en cas de faiblesse musculaire généralisée.</li>
      <li>O2 à l'effort chez le BPCO seulement s'il est hypoxémique ; seuil d'administration : SpO2 90 %.</li>
      <li>Un ventilateur de table dirigé vers le visage (trijumeau V2 et V3) diminue la plupart des dyspnées du BPCO.</li>
      <li>L'air trapping est souvent la première cause de dyspnée chez le BPCO ; l'hypoxémie en est une cause plus rare.</li>
      <li>Dyspnée chronique : échelle de Sadoul. Dyspnée aiguë : échelle numérique verbale ou Borg.</li>
      <li>Techniques validées de désencombrement : ELTGOL, drainage autogène, ACBT, drainage postural, et ELPr chez l'enfant.</li>
      <li>Qualité de vie du BPCO : questionnaire respiratoire de Saint-Georges, Chronic Respiratory Questionnaire (et SF-36, générique).</li>
      <li>Pressions de référence adulte : PImax ± 100 cmH2O ; PEmax ± 150 cmH2O.</li>
      <li>Désencombrement indiqué si sputum > 30 mL/24 h et impossibilité d'expectorer seul.</li>
      <li>La VNI à deux niveaux de pression vise à améliorer la ventilation alvéolaire et donc à diminuer la PaCO2.</li></ol>` },
    { id: "divers", titre: "8. Physiologie, lois et médicaments", src: ["mk1"], html:
      `<ul><li><b>RCP</b> : 30 compressions pour 2 insufflations.</li>
      <li><b>Paracétamol</b> : max 4 g/jour en 4 prises chez l'adulte ; dose mortelle 10 g en une prise (selon la fiche).</li>
      <li><b>Morphine</b> : nausées et vomissements dans environ 30 % des cas ; constipation très fréquente.</li>
      <li>L'acide acétylsalicylique ne devrait plus être prescrit contre la douleur.</li>
      <li><b>Aérosols</b> : bêta-2 mimétiques (salmétérol, fénotérol, salbutamol) ; anticholinergiques dérivés de l'atropine (ipratropium, tiotropium) ; corticoïdes (budésonide, furoate de fluticasone).</li>
      <li>Débit = vitesse × section.</li>
      <li><b>Loi de Dalton</b> : la pression totale = somme des pressions partielles.</li>
      <li>Deux types d'écoulement : laminaire et turbulent. Le <b>nombre de Reynolds</b> le détermine ; il est proportionnel à la vitesse : plus elle est grande, plus l'écoulement risque d'être turbulent.</li>
      <li><b>Loi de Henry</b> : à température constante, la concentration d'un gaz dissous est proportionnelle à sa pression partielle au-dessus du liquide.</li>
      <li><b>Transport de l'O2</b> : sous forme liée à l'Hb (forme largement majoritaire) et sous forme dissoute.</li>
      <li><b>Transport du CO2</b> : dissous, lié à l'Hb (25 %) et sous forme de HCO3- (forme majoritaire).</li>
      <li>À partir de 25 ans, le VEMS baisse de moins de 30 mL par an (courbe de Fletcher).</li>
      <li>Muscles des membres inférieurs : fibres rouges > blanches. Membres supérieurs : fibres blanches > rouges.</li></ul>
      ${W("La fiche écrit que l'O2 est transporté « principalement sous forme dissoute et liée à l'Hb ». En réalité, environ 98 % est lié à l'Hb ; la forme dissoute est minime (0,003 mL/dL/mmHg, voir la formule du CaO2).")}` },
    { id: "tests", titre: "9. Tests de condition physique (seniors) et interrogatoire", src: ["mk1"], html:
      T([["Assis-debout 30 s", "Force des MI", "Nombre de levers en 30 s, bras croisés sur la poitrine", "12,8", "14,3"], ["Flexion des bras", "Force des MS", "Flexions du coude en 30 s avec haltère de 2 kg (femmes) ou 3 kg (hommes)", "13,4", "15,9"], ["Souplesse assis sur une chaise", "Souplesse des MI", "Assis au bord d'une chaise, jambe tendue : distance doigts-milieu des orteils (cm)", "N/A", "N/A"], ["Aller-retour en marchant", "Agilité, équilibre dynamique", "Secondes pour se lever, marcher 2,5 m, faire demi-tour et se rasseoir", "6,88 s", "5,48 s"], ["Gratte-dos", "Souplesse des MS", "Une main par-dessus l'épaule, l'autre dans le dos : distance entre les majeurs (cm)", "N/A", "N/A"], ["6 minutes marche", "Endurance aérobie", "Mètres parcourus en 6 min sur un circuit de 50 m (et non 30 m ici)", "482 m", "550 m"], ["2 minutes sur place", "Endurance aérobie", "Montées de genou en 2 min jusqu'à mi-distance rotule-crête iliaque", "69", "79"]], ["Test", "Composante", "Description", "Femmes 60-90 ans", "Hommes 60-90 ans"]) +
      `<p>Le lever de chaise en 30 s est une mesure objective prédictive de la mortalité toutes causes chez les seniors. Connaître ces résultats à ± 10 % près.</p>
      <p><b>Interrogatoire du patient respiratoire :</b> commencer par les 5 signes vitaux (FR, FC, TAS, TAD, TAM, SpO2, température), puis, en s'appuyant entre autres sur l'index BODE :</p><ol type="a">
        <li>Taille et poids</li><li>Dyspnée</li><li>Douleur</li><li>Encombrement : sputum > 30 mL/24 h ? couleur, odeur, sang ? difficulté à expectorer ?</li><li>Température</li><li>Sommeil</li><li>Amaigrissement récent</li><li>Capacité fonctionnelle : TM6, lever de chaise, escaliers, Timed Up and Go…</li></ol>` }
  ];

  const q = (id, part, txt, a, d, expl) => ({ id, part, q: txt, a, d, expl, src: "mk1" });
  const qcm = [
    // 1. Signes vitaux
    q("v1", "vitaux", "Les cinq signes vitaux sont (plusieurs réponses) :", ["Fréquence cardiaque", "Fréquence respiratoire", "SpO2", "Tension artérielle", "Température"], ["Glycémie", "Diurèse"]),
    q("v2", "vitaux", "FR normale de l'adulte au repos :", ["12 à 18 cycles/min"], ["20 à 30 cycles/min", "30 à 40 cycles/min", "6 à 10 cycles/min"]),
    q("v3", "vitaux", "FR normale de l'enfant au repos :", ["20 à 30 cycles/min"], ["12 à 18 cycles/min", "30 à 40 cycles/min", "40 à 60 cycles/min"]),
    q("v4", "vitaux", "FR normale du nourrisson au repos :", ["30 à 40 cycles/min"], ["20 à 30 cycles/min", "40 à 60 cycles/min", "12 à 18 cycles/min"]),
    q("v5", "vitaux", "FR normale du nouveau-né de moins d'une semaine :", ["40 à 60 cycles/min"], ["30 à 40 cycles/min", "20 à 30 cycles/min", "60 à 80 cycles/min"]),
    q("v6", "vitaux", "FC de l'adulte au repos selon la fiche MK1 :", ["60 à 70 bpm"], ["100 à 160 bpm", "70 à 140 bpm", "40 à 50 bpm"], "Norme habituelle plus large : 60 à 100 bpm."),
    q("v7", "vitaux", "FC normale de l'enfant au repos :", ["70 à 140 bpm"], ["60 à 70 bpm", "120 à 160 bpm", "160 à 200 bpm"]),
    q("v8", "vitaux", "FC normale du nourrisson au repos :", ["100 à 160 bpm"], ["60 à 70 bpm", "70 à 100 bpm", "160 à 200 bpm"]),
    q("v9", "vitaux", "FC normale du nouveau-né de moins d'une semaine :", ["120 à 160 bpm"], ["70 à 140 bpm", "60 à 100 bpm", "160 à 220 bpm"]),
    q("v10", "vitaux", "Valeurs maximales de la TA chez l'adulte selon la fiche :", ["TAS 140 mmHg et TAD 90 mmHg"], ["TAS 120 mmHg et TAD 60 mmHg", "TAS 160 mmHg et TAD 100 mmHg", "TAS 180 mmHg et TAD 110 mmHg"]),
    q("v11", "vitaux", "Calcul de la pression artérielle moyenne :", ["PAM = (PAS + 2 × PAD) / 3"], ["PAM = (PAS + PAD) / 2", "PAM = (2 × PAS + PAD) / 3", "PAM = PAS − PAD"]),
    q("v12", "vitaux", "TA 120/60 mmHg. La PAM vaut :", ["80 mmHg"], ["90 mmHg", "60 mmHg", "100 mmHg"], "(120 + 2 × 60) / 3 = 240 / 3 = 80 mmHg."),
    q("v13", "vitaux", "TAM de référence de l'adulte donnée par la fiche :", ["100 mmHg"], ["65 mmHg", "120 mmHg", "80 mmHg"]),
    q("v14", "vitaux", "1 mmHg équivaut à :", ["13,6 mmH2O"], ["1,36 mmH2O", "136 mmH2O", "10 mmH2O"], "Soit 1,36 cmH2O."),
    q("v15", "vitaux", "Débit cardiaque :", ["FC × volume d'éjection systolique"], ["FR × volume courant", "PAM × résistances périphériques", "VO2 / différence artério-veineuse"]),
    q("v16", "vitaux", "Débit cardiaque normal de l'adulte au repos :", ["5 à 6 L/min"], ["1 à 2 L/min", "10 à 12 L/min", "20 à 25 L/min"]),
    q("v17", "vitaux", "Volume d'éjection systolique de l'adulte, du repos à l'effort :", ["70 à 150 mL"], ["20 à 40 mL", "200 à 300 mL", "450 à 500 mL"]),
    q("v18", "vitaux", "VO2 =", ["Débit cardiaque × différence artério-veineuse en O2"], ["FC × VES", "PAM / résistances", "VCO2 × QR"]),
    q("v19", "vitaux", "Débit cardiaque =", ["PAM / résistances périphériques"], ["PAM × résistances périphériques", "Résistances / PAM", "PAS − PAD"]),
    q("v20", "vitaux", "Ce qui influence les résistances périphériques (plusieurs réponses) :", ["Le rayon des vaisseaux (vasoconstriction, vasodilatation)", "La viscosité du sang", "La longueur du réseau vasculaire"], ["La SpO2", "La fréquence respiratoire"], "Loi de Poiseuille : R = 8 µ l / (π r⁴). Le rayon a de loin le plus grand effet (puissance 4)."),
    q("v21", "vitaux", "Température corporelle normale :", ["36,5 à 37,5 °C"], ["35 à 36 °C", "37,5 à 38,5 °C", "36 à 39 °C"]),
    q("v22", "vitaux", "SpO2 normale de l'adulte :", ["96 à 98 %"], ["88 à 92 %", "90 à 94 %", "100 % obligatoirement"]),
    q("v23", "vitaux", "SpO2 acceptable chez le BPCO :", ["88 à 92 %"], ["96 à 98 %", "80 à 85 %", "Au-dessus de 95 %"]),
    q("v24", "vitaux", "Une saturation en O2 de 90 % correspond en moyenne à une PaO2 de :", ["60 mmHg"], ["90 mmHg", "40 mmHg", "100 mmHg"]),
    q("v25", "vitaux", "SaO2 (gazométrie) et SpO2 (oxymètre de pouls) :", ["Peuvent parfois donner des résultats très différents"], ["Donnent toujours la même valeur", "La SpO2 est toujours plus fiable", "La SaO2 n'existe pas"]),
    q("v26", "vitaux", "Chez le sujet sain, délais de resaturation et de désaturation :", ["Resaturation en ± 30 s, désaturation en ± 100 s"], ["Resaturation en ± 100 s, désaturation en ± 30 s", "Les deux en ± 10 s", "Les deux en ± 5 min"]),

    // 2. Volumes
    q("vo1", "volumes", "Indice de Tiffeneau normal de l'adulte selon la fiche :", ["> 80 %"], ["< 70 %", "> 50 %", "100 %"], "Le seuil d'obstruction GOLD est VEMS/CVF < 0,70."),
    q("vo2", "volumes", "VEMS de l'adulte « normal » :", ["3500 à 4000 mL"], ["1000 à 1500 mL", "450 mL", "6000 à 7000 mL"]),
    q("vo3", "volumes", "Capacité pulmonaire totale de l'adulte :", ["± 5000 mL"], ["± 2000 mL", "± 1000 mL", "± 10 000 mL"]),
    q("vo4", "volumes", "Volume résiduel de l'adulte :", ["± 1000 mL"], ["± 450 mL", "± 2500 mL", "± 150 mL"]),
    q("vo5", "volumes", "Volume de réserve inspiratoire de l'adulte :", ["2500 à 3000 mL"], ["± 1000 mL", "450 mL", "4000 à 4500 mL"]),
    q("vo6", "volumes", "Volume de réserve expiratoire de l'adulte :", ["± 1000 mL"], ["2500 à 3000 mL", "± 150 mL", "± 2000 mL"]),
    q("vo7", "volumes", "Capacité inspiratoire de l'adulte :", ["3000 à 3500 mL"], ["± 1000 mL", "± 2000 mL", "± 5000 mL"]),
    q("vo8", "volumes", "Volume courant physiologique de l'adulte :", ["450 mL (7 à 10 mL/kg de poids idéal)"], ["150 mL (2 mL/kg)", "1000 mL (15 mL/kg)", "2000 mL"]),
    q("vo9", "volumes", "Capacité résiduelle fonctionnelle de l'adulte :", ["2000 mL"], ["450 mL", "1000 mL", "4000 mL"]),
    q("vo10", "volumes", "Capacité vitale de l'adulte :", ["4000 à 4500 mL"], ["2000 mL", "± 5000 mL", "3000 à 3500 mL"]),
    q("vo11", "volumes", "Rapport entre VRI et VRE :", ["Le VRI est environ 3 fois plus grand que le VRE"], ["Le VRE est environ 3 fois plus grand que le VRI", "Ils sont égaux", "Le VRI est 10 fois plus grand"]),
    q("vo12", "volumes", "Les volumes pulmonaires varient avec (plusieurs réponses) :", ["L'âge", "La taille", "Le sexe"], ["La couleur des yeux", "La latéralité"]),
    q("vo13", "volumes", "DEP théorique d'un adolescent de 1,45 m :", ["350 L/min"], ["490 L/min", "620 L/min", "150 L/min"]),
    q("vo14", "volumes", "DEP théorique d'une femme de 30 ans mesurant 1,60 m :", ["490 L/min"], ["350 L/min", "620 L/min", "250 L/min"]),
    q("vo15", "volumes", "DEP théorique d'un homme de 50 ans mesurant 1,80 m :", ["620 L/min"], ["490 L/min", "350 L/min", "900 L/min"]),

    // 3. Biologie
    q("b1", "bio", "pH artériel normal :", ["7,35 à 7,45"], ["7,25 à 7,35", "7,45 à 7,55", "6,8 à 7,0"]),
    q("b2", "bio", "PaO2 normale :", ["80 à 100 mmHg"], ["35 à 45 mmHg", "60 à 70 mmHg", "150 à 160 mmHg"]),
    q("b3", "bio", "PaCO2 normale :", ["35 à 45 mmHg"], ["80 à 100 mmHg", "20 à 30 mmHg", "50 à 60 mmHg"]),
    q("b4", "bio", "Bicarbonates normaux selon la fiche :", ["20 à 29 mmol/L"], ["35 à 45 mmol/L", "4 à 6 mmol/L", "100 à 110 mmol/L"]),
    q("b5", "bio", "Excès de base (BE) normal :", ["0 ± 2 mEq/L"], ["5 à 10 mEq/L", "− 10 mEq/L", "20 à 29 mEq/L"]),
    q("b6", "bio", "CRP normale :", ["< 6 mg/L"], ["< 60 mg/L", "> 10 mg/L", "100 à 200 mg/L"], "La CRP est un marqueur de l'inflammation."),
    q("b7", "bio", "Globules blancs normaux :", ["4000 à 10 000 /mm³"], ["150 000 à 400 000 /mm³", "4,6 à 6,2 millions /mm³", "500 à 1000 /mm³"]),
    q("b8", "bio", "Globules rouges normaux :", ["4,6 à 6,2 millions /mm³"], ["4000 à 10 000 /mm³", "150 000 à 400 000 /mm³", "1 à 2 millions /mm³"]),
    q("b9", "bio", "Plaquettes normales :", ["150 000 à 400 000 /mm³"], ["4000 à 10 000 /mm³", "4,6 à 6,2 millions /mm³", "15 000 à 40 000 /mm³"]),
    q("b10", "bio", "Hémoglobine normale (homme) :", ["14 à 18 g/dL"], ["8 à 10 g/dL", "20 à 25 g/dL", "4 à 6 g/dL"], "Toujours un peu plus faible chez la femme."),
    q("b11", "bio", "Acide lactique : norme et limite actuelle :", ["0,3 à 1,3 mmol/L ; limite 2 mmol/L"], ["5 à 10 mmol/L ; limite 15 mmol/L", "2 à 4 mmol/L ; limite 6 mmol/L", "0 mmol/L ; toute présence est anormale"]),
    q("b12", "bio", "Créatinine normale :", ["1 mg/dL"], ["10 mg/dL", "0,01 mg/dL", "140 mg/dL"]),
    q("b13", "bio", "Glycémie normale :", ["1 g/L"], ["4 g/L", "0,1 g/L", "10 g/L"]),
    q("b14", "bio", "Associe : K+, Na+, Cl- normaux :", ["K+ 4, Na+ 140, Cl- 100 mmol/L"], ["K+ 140, Na+ 4, Cl- 100 mmol/L", "K+ 100, Na+ 140, Cl- 4 mmol/L", "K+ 40, Na+ 14, Cl- 10 mmol/L"]),
    q("b15", "bio", "Contenu artériel en O2 (CaO2) normal :", ["± 20 mL/dL de sang"], ["± 15 mL/dL de sang", "± 5 mL/dL de sang", "± 50 mL/dL de sang"]),
    q("b16", "bio", "Contenu veineux en O2 (CvO2) normal :", ["± 15 mL/dL de sang"], ["± 20 mL/dL de sang", "± 2 mL/dL de sang", "± 40 mL/dL de sang"]),
    q("b17", "bio", "PvO2 normale :", ["35 à 45 mmHg"], ["80 à 100 mmHg", "10 à 15 mmHg", "60 à 70 mmHg"]),
    q("b18", "bio", "SvO2 normale :", ["65 à 75 %"], ["96 à 98 %", "40 à 50 %", "88 à 92 %"]),
    q("b19", "bio", "FiCO2 de l'air ambiant :", ["0,03 %"], ["5 %", "21 %", "0,3 %"]),
    q("b20", "bio", "Le sérum physiologique est du NaCl à :", ["0,9 %"], ["3 %", "9 %", "20 %"]),
    q("b21", "bio", "En pédiatrie, le sérum hypertonique à 3 % sert à :", ["Lutter contre l'œdème sous-muqueux"], ["Provoquer la toux chez l'adulte", "Remplacer l'oxygène", "Traiter l'hypoglycémie"]),
    q("b22", "bio", "Selon la fiche, le sérum hypertonique à 20 % chez l'adulte sert à :", ["Provoquer la toux"], ["Lutter contre l'œdème sous-muqueux du nourrisson", "Hydrater par voie veineuse", "Fluidifier le sang"]),
    q("b23", "bio", "Équation d'Henderson-Hasselbalch :", ["pH = 6,1 + log (HCO3- / (0,03 × PaCO2))"], ["pH = 6,1 + log ((0,03 × PaCO2) / HCO3-)", "pH = 7,4 − log (PaCO2 / HCO3-)", "pH = 6,1 × log (HCO3- × PaCO2)"]),
    q("b24", "bio", "HCO3- 24 mmol/L et PaCO2 40 mmHg. Le pH vaut :", ["7,4"], ["7,1", "7,7", "6,8"], "24 / (0,03 × 40) = 24 / 1,2 = 20 ; log 20 = 1,3 ; 6,1 + 1,3 = 7,4."),
    q("b25", "bio", "HCO3- 24 mmol/L et PaCO2 80 mmHg. Le pH vaut :", ["7,1 (acidose respiratoire)"], ["7,4", "7,7", "7,25"], "24 / 2,4 = 10 ; log 10 = 1 ; pH = 7,1."),
    q("b26", "bio", "HCO3- 12 mmol/L et PaCO2 40 mmHg. Le pH vaut :", ["7,1 (acidose métabolique)"], ["7,4", "7,7", "6,1"], "12 / 1,2 = 10 ; log 10 = 1 ; pH = 7,1."),
    q("b27", "bio", "HCO3- 48 mmol/L et PaCO2 80 mmHg. Le pH vaut :", ["7,4 (rapport inchangé, compensation)"], ["7,1", "7,7", "8,0"], "48 / 2,4 = 20 ; log 20 = 1,3 ; pH = 7,4."),
    q("b28", "bio", "Valeurs à connaître : log 10, log 100, log 20 :", ["1 ; 2 ; 1,3"], ["10 ; 100 ; 20", "0,1 ; 0,2 ; 0,13", "1 ; 10 ; 2"]),
    q("b29", "bio", "Diurèse normale de l'adulte :", ["800 à 1500 mL par jour"], ["100 à 300 mL par jour", "3 à 5 L par jour", "50 mL par heure exactement, ni plus ni moins"]),

    // 4. Gaz
    q("g1", "gaz", "Fraction d'O2 (FO2) =", ["Volume d'O2 / volume total de gaz"], ["Pression d'O2 / 760", "Volume total / volume d'O2", "Débit d'O2 × 3"]),
    q("g2", "gaz", "Composition de l'air atmosphérique :", ["N2 79 %, O2 21 %, CO2 0,03 %"], ["N2 21 %, O2 79 %, CO2 0,03 %", "N2 79 %, O2 16 %, CO2 5 %", "N2 50 %, O2 50 %"]),
    q("g3", "gaz", "PN2 atmosphérique au niveau de la mer :", ["760 × 0,79 = 600 mmHg"], ["760 × 0,21 = 160 mmHg", "713 × 0,79 = 563 mmHg", "760 mmHg"]),
    q("g4", "gaz", "PO2 atmosphérique au niveau de la mer :", ["760 × 0,21 = 160 mmHg"], ["150 mmHg", "100 mmHg", "40 mmHg"]),
    q("g5", "gaz", "PiO2 (air inspiré humidifié) :", ["(760 − 47) × 0,21 = 150 mmHg"], ["760 × 0,21 = 160 mmHg", "(760 − 40) × 0,21 = 151 mmHg", "100 mmHg"], "47 mmHg = pression de vapeur d'eau à 37 °C."),
    q("g6", "gaz", "Pression de CO2 dans l'air atmosphérique :", ["760 × 0,0003 = 0,23 mmHg"], ["40 mmHg", "5 mmHg", "23 mmHg"]),
    q("g7", "gaz", "FACO2 et PACO2 (alvéolaires) :", ["FACO2 ± 5 % ; PACO2 ≈ 40 mmHg"], ["FACO2 0,03 % ; PACO2 0,23 mmHg", "FACO2 21 % ; PACO2 160 mmHg", "FACO2 15 % ; PACO2 100 mmHg"]),
    q("g8", "gaz", "Espace mort anatomique (Vd) :", ["2 mL/kg de poids idéal"], ["7 à 10 mL/kg", "100 mL/kg", "20 mL/kg"]),
    q("g9", "gaz", "Quotient respiratoire :", ["QR = VCO2 / VO2"], ["QR = VO2 / VCO2", "QR = VCO2 × VO2", "QR = PaCO2 / PaO2"]),
    q("g10", "gaz", "QR au repos :", ["0,78 à 0,80"], ["1,2 à 1,5", "0,5 à 0,6", "Exactement 1"]),
    q("g11", "gaz", "Limites du QR :", ["Entre 0,70 et 1"], ["Entre 0 et 0,5", "Entre 1 et 2", "Il n'a pas de limites"]),
    q("g12", "gaz", "VO2 et VCO2 de l'adulte au repos :", ["VO2 250 mL/min ; VCO2 200 mL/min"], ["VO2 200 mL/min ; VCO2 250 mL/min", "VO2 2,5 L/min ; VCO2 2 L/min", "VO2 25 mL/min ; VCO2 20 mL/min"], "200 / 250 = 0,8 : c'est bien le QR de repos."),
    q("g13", "gaz", "Ventilation minute de repos :", ["100 mL/min/kg de poids idéal, soit ± 7 à 8 L/min"], ["10 mL/min/kg, soit ± 700 mL/min", "1 L/min/kg, soit ± 70 L/min", "450 mL/min"]),
    q("g14", "gaz", "Pression atmosphérique au niveau de la mer :", ["760 mmHg = 1013 hPa"], ["713 mmHg = 950 hPa", "1013 mmHg = 760 hPa", "100 mmHg = 1 bar"]),
    q("g15", "gaz", "Pression au sommet du Mont-Blanc par rapport au niveau de la mer :", ["Environ la moitié"], ["Identique", "Le double", "Environ un dixième"], "La fiche donne ± 370 mmHg ; la valeur réelle à 4808 m est plutôt ± 420 mmHg."),

    // 5. Formules
    q("f1", "formules", "Débit d'un gaz dans les voies aériennes :", ["Q = ΔP / R"], ["Q = R / ΔP", "Q = ΔP × R", "Q = ΔP + R"]),
    q("f2", "formules", "Volume insufflé (ventilation à pression) :", ["(ΔP / R) × temps inspiratoire"], ["ΔP × R × temps inspiratoire", "(R / ΔP) × temps expiratoire", "ΔP / temps inspiratoire"]),
    q("f3", "formules", "Résistance selon Poiseuille :", ["R = 8 µ l / (π r⁴)"], ["R = π r⁴ / (8 µ l)", "R = 8 µ r⁴ / (π l)", "R = µ l / r"]),
    q("f4", "formules", "Si le rayon d'une bronche est divisé par 2, sa résistance est :", ["Multipliée par 16"], ["Multipliée par 2", "Multipliée par 4", "Divisée par 16"], "R est inversement proportionnelle à r⁴ : 2⁴ = 16."),
    q("f5", "formules", "Unité de la résistance des voies aériennes :", ["cmH2O/L/s"], ["mL/cmH2O", "L/min", "mmHg/mL"]),
    q("f6", "formules", "Contenu artériel en O2 :", ["CaO2 = (Hb × 1,34 × SaO2) + (PaO2 × 0,003)"], ["CaO2 = (Hb × 0,003 × SaO2) + (PaO2 × 1,34)", "CaO2 = Hb × PaO2", "CaO2 = SaO2 / PaO2"]),
    q("f7", "formules", "Norme du CaO2 :", ["± 210 mL/L de sang (21 mL/dL)"], ["± 150 mL/L de sang", "± 21 mL/L de sang", "± 500 mL/L de sang"]),
    q("f8", "formules", "Formule de Lorentz (poids idéal) :", ["Taille − 100 − (taille − 150) / 4 chez l'homme ; / 2,5 chez la femme"], ["Taille − 100 − (taille − 150) / 2,5 chez l'homme ; / 4 chez la femme", "Poids / taille²", "Taille − 110 pour tous"]),
    q("f9", "formules", "Poids idéal (Lorentz) d'un homme de 180 cm :", ["72,5 kg"], ["80 kg", "68 kg", "70 kg"], "180 − 100 − (30 / 4) = 80 − 7,5 = 72,5 kg."),
    q("f10", "formules", "Poids idéal (Lorentz) d'une femme de 165 cm :", ["59 kg"], ["65 kg", "61,25 kg", "55 kg"], "165 − 100 − (15 / 2,5) = 65 − 6 = 59 kg."),
    q("f11", "formules", "Ventilation alvéolaire :", ["Va = FR × (Vt − Vd)"], ["Va = FR × Vt", "Va = (FR − Vd) × Vt", "Va = Vt / FR"]),
    q("f12", "formules", "FR 15, Vt 500 mL, Vd 150 mL. Ventilation alvéolaire :", ["5,25 L/min"], ["7,5 L/min", "2,25 L/min", "9,75 L/min"], "15 × (500 − 150) = 15 × 350 = 5250 mL/min."),
    q("f13", "formules", "Même patient (Vd 150 mL), respiration rapide et superficielle : FR 30, Vt 250 mL. Ventilation alvéolaire :", ["3 L/min : elle baisse alors que la ventilation minute est identique"], ["7,5 L/min : identique", "5,25 L/min : identique", "10 L/min : elle augmente"], "30 × (250 − 150) = 3000 mL/min. La VM reste 7,5 L/min, mais l'espace mort prend une part plus grande."),
    q("f14", "formules", "Formule de la PaCO2 :", ["PaCO2 = (Patm − PvapH2O) × (FiCO2 + VCO2 / Va)"], ["PaCO2 = (Patm − PvapH2O) × (FiO2 − VO2 / Va)", "PaCO2 = VCO2 × Va", "PaCO2 = 760 × 0,21"]),
    q("f15", "formules", "Avec Patm 760, PvapH2O 47, FiCO2 0,0003, VCO2 200 mL/min et Va 4 L/min, la PaCO2 vaut environ :", ["36 mmHg"], ["18 mmHg", "72 mmHg", "160 mmHg"], "713 × (0,0003 + 0,05) = 713 × 0,0503 ≈ 36 mmHg."),
    q("f16", "formules", "Si la ventilation alvéolaire est divisée par 2 (VCO2 constante), la PaCO2 :", ["Double environ"], ["Est divisée par 2", "Ne change pas", "Est multipliée par 4"]),
    q("f17", "formules", "Formule de la PAO2 donnée par la fiche :", ["PAO2 = PiO2 − (VO2 / Va) × Pb"], ["PAO2 = PiO2 + (VCO2 / Va)", "PAO2 = (Patm − 47) × FiCO2", "PAO2 = 6,1 + log (VO2 / Va)"]),
    q("f18", "formules", "Repères des 4 formules : FR, Vt et Vd de l'adulte au repos :", ["FR ± 15 cpm ; Vt 7 à 10 mL/kg ; Vd ± 2 mL/kg"], ["FR ± 30 cpm ; Vt 2 mL/kg ; Vd 7 à 10 mL/kg", "FR ± 8 cpm ; Vt 20 mL/kg ; Vd 10 mL/kg", "FR ± 15 cpm ; Vt 2 mL/kg ; Vd 2 mL/kg"]),
    q("f19", "formules", "Ventilation alvéolaire de l'adulte au repos (repère de la fiche) :", ["± 4 L/min"], ["± 0,5 L/min", "± 15 L/min", "± 40 L/min"]),
    q("f20", "formules", "Résistance des voies aériennes normale :", ["2,5 à 5 cmH2O/L/s"], ["20 cmH2O/L/s", "60 à 200 cmH2O/L/s", "0,1 cmH2O/L/s"]),
    q("f21", "formules", "Résistance des voies aériennes dans la BPCO :", ["± 20 cmH2O/L/s (augmentée)"], ["2,5 à 5 cmH2O/L/s (normale)", "± 1 cmH2O/L/s (diminuée)", "60 à 200 cmH2O/L/s"]),
    q("f22", "formules", "Compliance normale :", ["60 à 200 mL/cmH2O"], ["30 mL/cmH2O", "2,5 à 5 mL/cmH2O", "500 à 1000 mL/cmH2O"]),
    q("f23", "formules", "Dans l'ARDS (SDRA) :", ["Compliance basse (± 30 mL/cmH2O), résistance normale"], ["Résistance très élevée (± 20), compliance normale", "Compliance et résistance normales", "Compliance très augmentée"]),
    q("f24", "formules", "Dans la BPCO (tableau de la fiche) :", ["Résistance augmentée (± 20), compliance dans la norme (60 à 200)"], ["Compliance basse (± 30), résistance normale", "Résistance et compliance basses", "Résistance normale, compliance basse"]),
    q("f25", "formules", "Élastance et compliance :", ["L'élastance est l'inverse de la compliance (C = 1/E)"], ["E = C × 2", "Ce sont deux mots pour la même chose", "E = C + R"]),
    q("f26", "formules", "Classification GOLD : critère commun à tous les stades :", ["VEMS/CVF < 0,70 après bronchodilatateur"], ["VEMS < 30 %", "SpO2 < 90 %", "VEMS/CVF > 0,80"]),
    q("f27", "formules", "GOLD I (léger) :", ["VEMS ≥ 80 % de la valeur prédite"], ["50 % ≤ VEMS < 80 %", "30 % ≤ VEMS < 50 %", "VEMS < 30 %"]),
    q("f28", "formules", "GOLD II (modéré) :", ["50 % ≤ VEMS < 80 %"], ["VEMS ≥ 80 %", "30 % ≤ VEMS < 50 %", "VEMS < 30 %"]),
    q("f29", "formules", "GOLD III (sévère) :", ["30 % ≤ VEMS < 50 %"], ["50 % ≤ VEMS < 80 %", "VEMS ≥ 80 %", "VEMS < 20 %"]),
    q("f30", "formules", "GOLD IV (très sévère) (plusieurs réponses) :", ["VEMS < 30 %", "VEMS < 50 % avec insuffisance respiratoire chronique"], ["VEMS < 80 % sans autre critère", "VEMS/CVF > 0,70"]),
    q("f31", "formules", "À partir de quel stade GOLD ajoute-t-on la revalidation et les bronchodilatateurs de longue durée ?", ["Stade II (modéré)"], ["Stade I", "Stade III", "Stade IV seulement"]),
    q("f32", "formules", "Les corticoïdes inhalés s'ajoutent (GOLD) :", ["Au stade III, si exacerbations répétées"], ["Dès le stade I chez tous les patients", "Jamais dans la BPCO", "Au stade II à la place des bronchodilatateurs"]),
    q("f33", "formules", "Au stade GOLD IV, on ajoute (plusieurs réponses) :", ["L'oxygène au long cours si insuffisance respiratoire chronique", "Envisager un traitement chirurgical"], ["L'arrêt des bronchodilatateurs", "L'arrêt de la vaccination"]),
    q("f34", "formules", "À tous les stades GOLD (plusieurs réponses) :", ["Réduire les facteurs de risque", "Vaccin contre la grippe", "Bronchodilatateur de courte durée à la demande"], ["Oxygène au long cours", "Chirurgie"]),
    q("f35", "formules", "Index de Brinkman :", ["Paquets par jour × années de tabagisme"], ["Cigarettes par jour × âge", "Paquets par an / années", "Années de tabagisme / paquets par jour"]),
    q("f36", "formules", "Unité du Brinkman :", ["Paquets-années"], ["Paquets par année", "Cigarettes par jour", "Années"]),
    q("f37", "formules", "1,5 paquet par jour pendant 30 ans :", ["45 paquets-années"], ["20 paquets-années", "31,5 paquets-années", "450 paquets-années"]),
    q("f38", "formules", "Calcul de l'IMC :", ["Poids / taille²"], ["Poids / taille", "Taille² / poids", "Poids × taille"]),
    q("f39", "formules", "IMC normal (OMS) :", ["18,5 à 25 kg/m²"], ["25 à 30 kg/m²", "15 à 18,5 kg/m²", "30 à 35 kg/m²"]),
    q("f40", "formules", "IMC entre 25 et 30 kg/m² :", ["Surpoids"], ["Obésité", "Maigreur", "Obésité morbide"]),
    q("f41", "formules", "IMC entre 30 et 40 kg/m² :", ["Obésité"], ["Surpoids", "Obésité morbide", "Normal"]),
    q("f42", "formules", "IMC à partir duquel on parle d'obésité morbide :", ["40 kg/m²"], ["30 kg/m²", "35 kg/m²", "50 kg/m²"]),
    q("f43", "formules", "IMC sous lequel on parle de maigreur :", ["18,5 kg/m²"], ["20 kg/m²", "16 kg/m²", "25 kg/m²"]),

    // 6. O2
    q("o1", "o2", "Formule de FiO2 la plus utilisée :", ["FiO2 = 21 % + 3 % × débit d'O2 (L/min)"], ["FiO2 = 21 % + 10 % × débit d'O2", "FiO2 = 3 % × débit d'O2", "FiO2 = 21 % × débit d'O2"]),
    q("o2", "o2", "Limite de la formule FiO2 = 21 % + 3 % × L/min :", ["Elle ne tient pas compte du débit inspiratoire du patient"], ["Elle n'est valable qu'au masque Venturi", "Elle surestime toujours la SpO2", "Elle ne marche qu'en pédiatrie"]),
    q("o3", "o2", "Lunettes à 3 L/min. FiO2 estimée par la formule classique :", ["30 %"], ["24 %", "33 %", "50 %"], "21 + 3 × 3 = 30 %."),
    q("o4", "o2", "Formule de Duprez et al. (Resp Care 2019) :", ["FiO2 = 21 % + débit d'O2 / (4 × VM)"], ["FiO2 = 21 % + débit d'O2 / (2 × FR)", "FiO2 = 21 % + 3 % × débit d'O2", "FiO2 = VM / (4 × débit d'O2)"]),
    q("o5", "o2", "Formule de Duprez 2023 chez l'adulte :", ["FiO2 = 21 % + débit d'O2 / (2 × FR)"], ["FiO2 = 21 % + débit d'O2 / (4 × VM)", "FiO2 = 21 % + 2 × FR", "FiO2 = débit d'O2 × FR"]),
    q("o6", "o2", "Avec un système à performance variable, si la ventilation minute augmente, la FiO2 réelle :", ["Diminue"], ["Augmente", "Ne change pas", "Double"], "Relation inversement proportionnelle : plus le patient aspire d'air ambiant, plus l'O2 est dilué."),
    q("o7", "o2", "Systèmes à performance VARIABLE (plusieurs réponses) :", ["Lunettes à oxygène", "Sondes à oxygène", "Masque simple", "Masque à réservoir"], ["Masque Venturi", "Optiflow"]),
    q("o8", "o2", "Systèmes à performance FIXE (plusieurs réponses) :", ["Masque Venturi (Ventimask)", "Optiflow (oxygénation à haut débit)"], ["Lunettes à oxygène", "Masque simple"]),
    q("o9", "o2", "Débit d'O2 maximal aux lunettes (canules nasales) :", ["6 L/min"], ["2 L/min", "10 L/min", "15 L/min"]),
    q("o10", "o2", "Débit d'O2 maximal au masque simple :", ["10 L/min"], ["6 L/min", "3 L/min", "60 L/min"]),
    q("o11", "o2", "FiO2 délivrée par un oxyconcentrateur :", ["± 93 %"], ["± 21 %", "± 50 %", "100 %"]),
    q("o12", "o2", "Modes de délivrance d'un oxyconcentrateur (plusieurs réponses) :", ["Débit constant (L/min)", "Pulse à volume constant (mL)", "FOMV (mL/min/FR)"], ["Pression positive continue", "Ventilation assistée contrôlée"]),
    q("o13", "o2", "Débit max habituel d'un oxyconcentrateur portable :", ["3 L/min"], ["10 L/min", "15 L/min", "1 L/min"]),
    q("o14", "o2", "Débit max habituel d'un oxyconcentrateur fixe :", ["5 L/min (jusqu'à 10 L/min pour la nouvelle génération)"], ["3 L/min", "15 L/min", "60 L/min"]),
    q("o15", "o2", "Les débitmètres à oxygène :", ["Sont imprécis, et l'erreur augmente avec le débit"], ["Sont parfaitement exacts", "Sont imprécis seulement à bas débit", "Délivrent toujours plus que le réglage"]),
    q("o16", "o2", "La sur-oxygénation est dangereuse chez (plusieurs réponses) :", ["Le BPCO", "L'obèse hypoventilant", "Le patient en infarctus", "Le nouveau-né prématuré"], ["L'adulte sain en hypoxémie aiguë"]),
    q("o17", "o2", "L'hypoxie hypoxémique débute vers une PaO2 de :", ["55 mmHg"], ["80 mmHg", "100 mmHg", "35 mmHg"]),
    q("o18", "o2", "Contenance réelle d'une bouteille d'O2 :", ["Volume en eau × (pression lue − 35 bar de sécurité)"], ["Volume en eau × pression lue", "Pression lue / volume en eau", "Volume en eau + 35 bar"]),
    q("o19", "o2", "Le manomètre affiche 185 bar. Pression réellement utilisable :", ["150 bar"], ["185 bar", "220 bar", "35 bar"]),
    q("o20", "o2", "Bouteille de 5 L en eau, 185 bar lus. Volume d'O2 réellement disponible :", ["750 L"], ["925 L", "175 L", "37 L"], "5 × (185 − 35) = 5 × 150 = 750 L."),
    q("o21", "o2", "Définition de la FiO2 :", ["Volume d'O2 / volume total de gaz inspiré"], ["Débit d'O2 / FR", "PaO2 / 760", "SpO2 / 100"]),

    // 7. BPCO
    q("p1", "bpco", "L'électrostimulation chez le BPCO est surtout efficace :", ["Chez le patient amyotrophié qui ne peut se déplacer"], ["Chez le BPCO léger sportif", "Pour désencombrer", "Pour traiter l'hypoxémie"]),
    q("p2", "bpco", "La ventilation à lèvres pincées est surtout utile (et observable) chez :", ["Le patient emphysémateux"], ["Le patient asthmatique en crise", "Le nourrisson", "Le patient ventilé invasivement"]),
    q("p3", "bpco", "Effets de la ventilation à lèvres pincées selon la fiche (plusieurs réponses) :", ["Augmente la vidange pulmonaire (temps expiratoire plus long)", "Effet bronchodilatateur mécanique (point d'égale pression)", "Augmente l'élastance thoraco-pulmonaire (muscles expiratoires)"], ["Augmente la FiO2", "Diminue le temps expiratoire"]),
    q("p4", "bpco", "Position pour soulager la dyspnée, en général :", ["Semi-assis, en cocher de fiacre (sauf hypotension)"], ["Décubitus dorsal strict", "Trendelenburg", "Décubitus ventral"]),
    q("p5", "bpco", "Contre-indication de la position du cocher de fiacre citée par la fiche :", ["L'hypotension"], ["L'hypertension", "La fièvre", "La toux"]),
    q("p6", "bpco", "Compression thoracique ou abdominale pour faire expectorer chez le BPCO modéré à sévère (emphysémateux) :", ["Pas recommandée : elle comprime des voies aériennes et diminue le débit de pointe de toux"], ["Recommandée en première intention", "Recommandée uniquement chez l'emphysémateux", "Sans effet"]),
    q("p7", "bpco", "La compression thoracique ou abdominale pour faire expectorer est généralement efficace chez :", ["Le patient en faiblesse musculaire généralisée"], ["Le BPCO emphysémateux sévère", "Le patient en bronchospasme", "Personne"]),
    q("p8", "bpco", "Oxygène à l'effort chez le BPCO :", ["Utile seulement s'il est hypoxémique"], ["Toujours utile", "Jamais utile", "Utile seulement au repos"]),
    q("p9", "bpco", "Seuil de SpO2 pour administrer l'O2 à l'effort chez le BPCO :", ["90 %"], ["96 %", "85 %", "80 %"]),
    q("p10", "bpco", "Moyen simple efficace contre la plupart des dyspnées du BPCO :", ["Un ventilateur de table dirigé vers le visage (trijumeau V2 et V3)"], ["Un bain froid", "La position couchée à plat", "L'hyperventilation volontaire"]),
    q("p11", "bpco", "Première cause de dyspnée chez le BPCO :", ["L'air trapping (piégeage d'air)"], ["L'hypoxémie", "L'anémie", "La douleur"]),
    q("p12", "bpco", "L'hypoxémie comme cause de dyspnée chez le BPCO :", ["Existe, mais est plus rare que l'air trapping"], ["Est la cause la plus fréquente", "N'existe jamais", "Est la seule cause"]),
    q("p13", "bpco", "Échelle de la dyspnée CHRONIQUE citée :", ["Sadoul"], ["Borg", "Échelle numérique verbale", "Glasgow"]),
    q("p14", "bpco", "Échelles de la dyspnée AIGUË citées (plusieurs réponses) :", ["Échelle numérique verbale", "Borg"], ["Sadoul", "Ashworth"]),
    q("p15", "bpco", "Techniques validées de désencombrement selon la fiche (plusieurs réponses) :", ["ELTGOL", "Drainage autogène", "ACBT", "Drainage postural"], ["Clapping", "Vibrations manuelles"]),
    q("p16", "bpco", "Technique de désencombrement validée ajoutée pour les enfants :", ["ELPr"], ["ELTGOL", "Drainage autogène", "Clapping"]),
    q("p17", "bpco", "Questionnaire principal de qualité de vie du BPCO :", ["Questionnaire respiratoire de Saint-Georges"], ["Échelle de Sadoul", "Index de Barthel", "MMSE"], "La fiche cite aussi le Chronic Respiratory Questionnaire et le SF-36 (générique)."),
    q("p18", "bpco", "PImax de référence de l'adulte :", ["± 100 cmH2O"], ["± 150 cmH2O", "± 20 cmH2O", "± 300 cmH2O"]),
    q("p19", "bpco", "PEmax de référence de l'adulte :", ["± 150 cmH2O"], ["± 100 cmH2O", "± 30 cmH2O", "± 400 cmH2O"]),
    q("p20", "bpco", "Le désencombrement semble indiqué si (plusieurs réponses) :", ["Le sputum dépasse 30 mL/24 h", "Le patient ne peut pas expectorer seul"], ["La SpO2 est à 98 %", "Le patient tousse sec sans sécrétions"]),
    q("p21", "bpco", "But de la VNI à deux niveaux de pression (BiPAP) :", ["Améliorer la ventilation alvéolaire et donc diminuer la PaCO2"], ["Augmenter la PaCO2", "Remplacer l'oxygénothérapie dans tous les cas", "Diminuer la ventilation alvéolaire"]),

    // 8. Divers
    q("d1", "divers", "Rapport compressions / insufflations en RCP :", ["30 compressions pour 2 insufflations"], ["15 pour 2", "30 pour 5", "5 pour 1"]),
    q("d2", "divers", "Dose maximale de paracétamol chez l'adulte :", ["4 g/jour en 4 prises"], ["10 g/jour", "1 g/jour", "8 g/jour en 2 prises"]),
    q("d3", "divers", "Dose mortelle de paracétamol chez l'adulte selon la fiche :", ["10 g en une prise"], ["4 g en une prise", "1 g en une prise", "50 g en une prise"]),
    q("d4", "divers", "Effets indésirables de la morphine (plusieurs réponses) :", ["Nausées et vomissements (environ 30 % des cas)", "Constipation (très fréquente)"], ["Diarrhée constante", "Hypertension sévère"]),
    q("d5", "divers", "L'acide acétylsalicylique pour traiter la douleur :", ["Ne devrait plus être prescrit"], ["Est le premier choix", "Est le seul antidouleur autorisé", "Remplace la morphine"]),
    q("d6", "divers", "Bêta-2 mimétiques cités (plusieurs réponses) :", ["Salmétérol", "Fénotérol", "Salbutamol"], ["Ipratropium", "Budésonide"]),
    q("d7", "divers", "Anticholinergiques (dérivés de l'atropine) cités (plusieurs réponses) :", ["Ipratropium", "Tiotropium"], ["Salbutamol", "Fluticasone"]),
    q("d8", "divers", "Corticoïdes inhalés cités (plusieurs réponses) :", ["Budésonide", "Furoate de fluticasone"], ["Salmétérol", "Tiotropium"]),
    q("d9", "divers", "Relation entre débit, vitesse et section :", ["Débit = vitesse × section"], ["Débit = vitesse / section", "Débit = section / vitesse", "Débit = vitesse + section"]),
    q("d10", "divers", "Loi de Dalton :", ["La pression totale est la somme des pressions partielles"], ["La concentration d'un gaz dissous est proportionnelle à sa pression partielle", "La résistance dépend du rayon à la puissance 4", "Le débit égale vitesse × section"]),
    q("d11", "divers", "Loi de Henry :", ["À température constante, la concentration d'un gaz dissous est proportionnelle à sa pression partielle au-dessus du liquide"], ["La pression totale est la somme des pressions partielles", "Le volume d'un gaz est inversement proportionnel à sa pression", "Le débit est proportionnel au rayon"]),
    q("d12", "divers", "Deux types d'écoulement :", ["Laminaire et turbulent"], ["Laminaire et pulsé", "Continu et alternatif", "Actif et passif"]),
    q("d13", "divers", "Le nombre de Reynolds :", ["Détermine si l'écoulement est laminaire ou turbulent ; il augmente avec la vitesse"], ["Mesure la compliance", "Diminue quand la vitesse augmente", "Mesure la PaO2"]),
    q("d14", "divers", "Plus la vitesse d'écoulement est grande :", ["Plus le risque d'écoulement turbulent est grand"], ["Plus l'écoulement est laminaire", "Moins la résistance compte", "Plus le nombre de Reynolds baisse"]),
    q("d15", "divers", "Sous quelle forme l'O2 est-il transporté de façon largement majoritaire ?", ["Lié à l'hémoglobine"], ["Dissous dans le plasma", "Sous forme de bicarbonates", "Lié à l'albumine"], "La fiche écrit « principalement dissous et lié à l'Hb » ; en réalité ± 98 % est lié à l'Hb (formule du CaO2 : la part dissoute ne vaut que PaO2 × 0,003)."),
    q("d16", "divers", "Les trois formes de transport du CO2 :", ["Dissous, lié à l'Hb (25 %), bicarbonates (forme majoritaire)"], ["Dissous (majoritaire), bicarbonates (5 %), lié à l'albumine", "Uniquement lié à l'Hb", "Uniquement dissous"]),
    q("d17", "divers", "Forme majoritaire du transport du CO2 :", ["Les bicarbonates (HCO3-)"], ["Dissous", "Lié à l'Hb", "Lié aux plaquettes"]),
    q("d18", "divers", "Baisse du VEMS à partir de 25 ans (courbe de Fletcher) chez le non-fumeur :", ["Moins de 30 mL par an"], ["Plus de 100 mL par an", "Aucune baisse", "500 mL par an"]),
    q("d19", "divers", "Types de fibres selon la fiche :", ["MI : fibres rouges > blanches ; MS : fibres blanches > rouges"], ["MI : fibres blanches > rouges ; MS : fibres rouges > blanches", "Uniquement des fibres rouges partout", "Autant de fibres partout"]),

    // 9. Tests seniors et interrogatoire
    q("t1", "tests", "Le test assis-debout de 30 secondes évalue :", ["La force musculaire des membres inférieurs"], ["L'endurance aérobie", "La souplesse des MS", "L'équilibre statique"]),
    q("t2", "tests", "Modalités du test assis-debout de 30 s :", ["Nombre de levers en 30 s, bras croisés sur la poitrine"], ["Temps pour 5 levers avec appui des mains", "Nombre de levers en 1 min avec les accoudoirs", "Temps pour se lever une fois"]),
    q("t3", "tests", "Assis-debout 30 s, moyennes chez les 60-90 ans :", ["Femmes 12,8 ; hommes 14,3"], ["Femmes 14,3 ; hommes 12,8", "Femmes 6,9 ; hommes 5,5", "Femmes 69 ; hommes 79"]),
    q("t4", "tests", "Intérêt particulier du lever de chaise en 30 s chez le senior :", ["Mesure objective prédictive de la mortalité toutes causes"], ["Diagnostic de BPCO", "Mesure de la souplesse", "Évaluation de la mémoire"]),
    q("t5", "tests", "Le test de flexion des bras évalue :", ["La force musculaire des membres supérieurs"], ["La souplesse des membres supérieurs", "L'endurance aérobie", "L'agilité"]),
    q("t6", "tests", "Charge du test de flexion des bras :", ["Haltère de 2 kg pour les femmes, 3 kg pour les hommes"], ["3 kg pour les femmes, 5 kg pour les hommes", "1 kg pour tous", "Sans charge"]),
    q("t7", "tests", "Flexion des bras en 30 s, moyennes chez les 60-90 ans :", ["Femmes 13,4 ; hommes 15,9"], ["Femmes 15,9 ; hommes 13,4", "Femmes 12,8 ; hommes 14,3", "Femmes 482 ; hommes 550"]),
    q("t8", "tests", "Le test de souplesse assis sur une chaise évalue :", ["La souplesse des membres inférieurs"], ["La force des MI", "La souplesse des MS", "L'équilibre dynamique"]),
    q("t9", "tests", "Le gratte-dos évalue :", ["La souplesse des membres supérieurs"], ["La force des MS", "La souplesse des MI", "L'endurance"]),
    q("t10", "tests", "Mesure du gratte-dos :", ["Distance en cm entre les extrémités des majeurs, une main par-dessus l'épaule et l'autre dans le dos"], ["Temps pour toucher l'omoplate opposée", "Nombre de répétitions en 30 s", "Distance doigts-orteils"]),
    q("t11", "tests", "Le test aller-retour en marchant évalue :", ["L'agilité et l'équilibre dynamique"], ["L'endurance aérobie", "La force des MS", "La souplesse"]),
    q("t12", "tests", "Distance à parcourir au test aller-retour en marchant (version de la fiche) :", ["2,5 m"], ["3 m", "10 m", "50 m"], "Attention : le Timed Up and Go classique se fait sur 3 m."),
    q("t13", "tests", "Aller-retour en marchant, moyennes chez les 60-90 ans :", ["Femmes 6,88 s ; hommes 5,48 s"], ["Femmes 5,48 s ; hommes 6,88 s", "Femmes 12,8 s ; hommes 14,3 s", "Femmes 20 s ; hommes 15 s"]),
    q("t14", "tests", "Le test de marche de 6 minutes évalue :", ["L'endurance aérobie"], ["La force des MI", "L'agilité", "La souplesse"]),
    q("t15", "tests", "Longueur du circuit pour le TM6 selon la fiche :", ["50 m"], ["30 m", "10 m", "100 m"], "La fiche précise « et non 30 m dans ce cas-ci »."),
    q("t16", "tests", "TM6, moyennes chez les 60-90 ans :", ["Femmes 482 m ; hommes 550 m"], ["Femmes 550 m ; hommes 482 m", "Femmes 300 m ; hommes 350 m", "Femmes 700 m ; hommes 800 m"]),
    q("t17", "tests", "Le test de 2 minutes sur place évalue :", ["L'endurance aérobie"], ["La force des MS", "La souplesse des MI", "L'équilibre statique"]),
    q("t18", "tests", "Hauteur des genoux au test de 2 minutes sur place :", ["Mi-distance entre la rotule et la crête iliaque"], ["Jusqu'à la hanche", "10 cm du sol", "Jusqu'à la poitrine"]),
    q("t19", "tests", "2 minutes sur place, moyennes chez les 60-90 ans :", ["Femmes 69 ; hommes 79"], ["Femmes 79 ; hommes 69", "Femmes 13,4 ; hommes 15,9", "Femmes 120 ; hommes 140"]),
    q("t20", "tests", "Précision attendue pour les résultats de ces tests :", ["À ± 10 % près"], ["Au chiffre près", "À ± 50 % près", "Inutile de les connaître"]),
    q("t21", "tests", "Par quoi commence l'interrogatoire du patient respiratoire ?", ["Les 5 signes vitaux"], ["Le test de marche de 6 minutes", "La radiographie", "L'auscultation"]),
    q("t22", "tests", "Sur quel index s'appuie, entre autres, l'interrogatoire respiratoire de la fiche ?", ["BODE"], ["Barthel", "Glasgow", "Tinetti"]),
    q("t23", "tests", "Questions de l'interrogatoire respiratoire (plusieurs réponses) :", ["Taille et poids", "Dyspnée", "Douleur", "Encombrement", "Température, sommeil, amaigrissement"], ["Couleur préférée"]),
    q("t24", "tests", "Si le patient se sent encombré, on précise (plusieurs réponses) :", ["Si le sputum dépasse 30 mL/24 h", "La couleur, l'odeur, la présence de sang", "Les difficultés à expectorer"], ["Le groupe sanguin"]),
    q("t25", "tests", "Tests de capacité fonctionnelle cités dans l'interrogatoire (plusieurs réponses) :", ["TM6", "Lever de chaise", "Montée d'escaliers", "Timed Up and Go"], ["Test de Lachman"])
  ];

  const mk1 = {
    id: "respi-mk1", cell: "respi", titre: "Notions essentielles en bilan (MK1)", court: "Notions MK1",
    statut: "Le document entier est repris en QCM, chapitre par chapitre. Les points douteux de la fiche sont signalés.",
    resume: [
      "5 signes vitaux : FC, FR, SpO2, TA (TAS, TAD, PAM), température.",
      "Adulte au repos : FR 12-18 ; SpO2 96-98 % (BPCO 88-92 %) ; T° 36,5-37,5 °C ; PAM = (PAS + 2 PAD) / 3.",
      "Gazo : pH 7,35-7,45 ; PaO2 80-100 ; PaCO2 35-45 ; HCO3- 20-29 ; SpO2 90 % ≈ PaO2 60.",
      "pH = 6,1 + log (HCO3- / 0,03 PaCO2) ; log 20 = 1,3, d'où 7,4.",
      "Va = FR × (Vt − Vd) ; PaCO2 ∝ VCO2 / Va ; Vd 2 mL/kg ; Vt 7-10 mL/kg.",
      "FiO2 ≈ 21 % + 3 % × L/min ; lunettes max 6 L/min, masque simple 10 L/min.",
      "BPCO : air trapping = 1re cause de dyspnée ; O2 à l'effort si SpO2 < 90 % ; pas de compression chez l'emphysémateux.",
      "Désencombrement validé : ELTGOL, drainage autogène, ACBT, drainage postural (+ ELPr chez l'enfant) ; indiqué si sputum > 30 mL/24 h.",
      "GOLD : VEMS/CVF < 0,70 ; I ≥ 80 %, II 50-80, III 30-50, IV < 30 %.",
      "Seniors 60-90 ans : lever de chaise 30 s F 12,8 / H 14,3 ; TM6 F 482 / H 550 m."
    ],
    pro, qcm,
    patients: [{ id: "pmk1", nom: "Illustration : bilan d'un patient respiratoire", origine: "invente", src: "mk1", desc: "Patient dyspnéique : on commence toujours par les 5 signes vitaux.", attrs: { dyspnee: true } }],
    cas: []
  };
  M.PATHOS[mk1.id] = mk1;
  const respi = M.CELLS.find(c => c.id === "respi");
  if (respi && !respi.pathos.includes(mk1.id)) respi.pathos.unshift(mk1.id);
  (M.REMARQUES = M.REMARQUES || []).push(
    { g: "Erreurs repérées", t: "Fiche MK1 : transport de l'O2", s: "mk1", txt: "La fiche écrit que l'O2 est transporté « principalement sous forme dissoute et liée à l'Hb ». Environ 98 % de l'O2 est lié à l'Hb ; la part dissoute est minime (PaO2 × 0,003 mL/dL). Retiens : forme liée à l'Hb largement majoritaire." },
    { g: "Erreurs repérées", t: "Fiche MK1 : pression au Mont-Blanc", s: "mk1", txt: "La fiche donne ± 370 mmHg. À 4808 m, la pression atmosphérique est plutôt d'environ 420 mmHg (un peu plus de la moitié de 760)." },
    { g: "À vérifier avec tes profs", t: "Fiche MK1 : FC normale de l'adulte", s: "mk1", txt: "La fiche donne 60 à 70 bpm. La norme de repos habituelle est 60 à 100 bpm. Les QCM reprennent la valeur de la fiche." },
    { g: "À vérifier avec tes profs", t: "Fiche MK1 : sérum hypertonique à 20 %", s: "mk1", txt: "La fiche indique du NaCl 20 % chez l'adulte pour provoquer la toux. En induction d'expectoration, on utilise d'habitude du NaCl à 3 à 7 %. Demande confirmation avant de le citer au jury." },
    { g: "À vérifier avec tes profs", t: "Fiche MK1 : « TA = PA sauf choc anaphylactique »", s: "mk1", txt: "La phrase « sauf en cas de choc anaphylactique, la tension artérielle est égale à la pression artérielle » n'est pas expliquée dans la fiche. Elle n'a pas été mise en QCM." }
  );
})();
