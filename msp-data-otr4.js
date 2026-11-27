"use strict";
// MSP OTR (4) : cours Papalia MK1 2024-25 « La hanche – thérapie manuelle » et « SIJ » (diapos en images : msp-img-hanmk.js, msp-img-sijmk.js).
(function () {
  const M = window.MSPDATA; if (!M) return;
  const yt = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
  M.SRC.hanmk = { t: "B. Papalia, « La Hanche – Thérapie manuelle MK1 », kiné orthopédique M1 4.9.1, HEPH Condorcet Tournai, 2024-25 (116 diapos)", k: "Cours du professeur", f: "cors papalia › HANCHE_MK1_2024-25_Version_Ligth.pdf" };
  M.SRC.sijmk = { t: "B. Papalia, « SIJ – MK1 », kiné orthopédique M1 4.9.1, HEPH Condorcet Tournai, 2024-25 (113 diapos ; Laslett 2005, Mitchell, Downing)", k: "Cours du professeur", f: "cors papalia › MK1_SIJ_2024__25_Light.pdf" };
  const h = n => "hanmk-" + n, s = n => "sijmk-" + n;
  const T = M.TESTS;
  const set = (id, o) => { if (T[id]) { T[id].img = [...(o.img || []), ...(T[id].img || [])]; T[id].ctx = [...(T[id].ctx || []), ...(o.ctx || [])]; if (o.src) T[id].src = [...new Set([...(T[id].src || []), ...o.src])]; if (o.se) T[id].se = o.se; if (o.sp) T[id].sp = o.sp; } };

  // Images des tests existants
  set("faber", { img: [h(76), h(77), s(22), s(23)], src: ["hanmk", "sijmk"] });
  set("fadir", { img: [h(78), h(79)], ctx: [h(80)], src: ["hanmk"] });
  set("ober", { img: [h(81), h(83)], ctx: [h(82)], src: ["hanmk"] });
  set("thomas", { img: [h(84), h(85), h(86)], ctx: [h(87)], src: ["hanmk"] });
  set("logroll", { img: [h(72), h(70), h(71), h(74)], ctx: [h(68), h(69)], src: ["hanmk"] });
  set("trendel", { img: [h(35), h(33)], ctx: [h(34), h(37), h(38)], src: ["hanmk"] });
  set("thighthrust", { img: [s(15), s(16)], ctx: [s(24)], src: ["sijmk"] });
  set("distraction", { img: [s(18)], ctx: [s(24)], src: ["sijmk"] });
  set("siclust", { ctx: [s(24), s(25), s(90)], src: ["sijmk"] });
  set("tfd", { img: [s(50), s(51), s(53), s(54)], ctx: [s(49), s(52), s(55)], src: ["sijmk"] });
  set("aslr", { img: [s(80), s(81), s(82), s(83)], src: ["sijmk"], se: "90 %", sp: "94 %" });
  set("prone", { img: [s(86), s(87)], src: ["sijmk"] });
  set("beighton", { ctx: [h(67)], src: ["hanmk"] });

  const N = o => ({ video: yt(o.nom + " test physiotutors"), ...o });
  Object.assign(T, {
    compsi: N({ nom: "Test de compression (Volkman)", cat: "Sacro-iliaque", img: [s(19)], but: "Provoquer la sacro-iliaque (étirement des ligaments SI postérieurs).", deroul: "Décubitus latéral ; le kiné place ses mains entre la crête iliaque supra-latérale (côté testé) et le trochanter et pousse vers le bas (5 coups ou maintien 5 s). Variante bilatérale.", faux: ["Pression divergente sur les deux EIAS en décubitus dorsal.", "Pression dans l'axe du fémur, hanche à 90°.", "Hyperflexion d'une hanche et extension de l'autre."], cot: "Douleur familière.", positif: "Reproduit la douleur familière du patient.", diag: "Atteinte sacro-iliaque.", incl: "3e test du cluster de Laslett : à faire si UN SEUL des deux premiers (thigh thrust / distraction) est positif.", se: "0,3-0,7", sp: "0,9", src: ["sijmk"] }),
    sacralthrust: N({ nom: "Sacral thrust (test du rebond)", cat: "Sacro-iliaque", img: [s(20)], but: "Provoquer la sacro-iliaque (ligaments SI antérieurs).", deroul: "Décubitus ventral, tête dans l'axe ; paume sur le sacrum, l'autre main en renfort ; pression postéro-antérieure perpendiculaire à la table (5 coups ou maintien 5 s).", faux: ["Décubitus latéral, poussée sur la crête iliaque.", "Avant-bras croisés sur les EIAS.", "Lever la jambe tendue de 20-30 cm."], cot: "Douleur familière.", positif: "Reproduit la douleur familière.", diag: "Atteinte sacro-iliaque.", incl: "4e test de l'algorithme : si la compression est négative, sacral thrust (+) → SI impliquée ; (−) → SI non impliquée.", se: "0,27-0,53", sp: "0,29-1,00", src: ["sijmk"] }),
    gaenslen: N({ nom: "Test de Gaenslen", cat: "Sacro-iliaque", img: [s(21)], but: "Provoquer la sacro-iliaque en torsion (nutation d'un côté, contre-nutation de l'autre).", deroul: "Décubitus dorsal au bord de la table : une hanche en hyperflexion, l'autre jambe pendante hors de la table ; le kiné accentue l'hyperflexion et l'extension et maintient 5 s. Test bilatéral.", faux: ["Pression postérieure dans l'axe du fémur.", "Flexion-abduction-RE avec pression sur le genou.", "Pression postéro-antérieure sur le sacrum."], cot: "Douleur familière.", positif: "Reproduit la douleur familière (ligaments antérieurs côté fléchi, postérieurs côté tendu).", diag: "Atteinte sacro-iliaque.", incl: "Test complémentaire du cluster ; spécificité faible.", se: "0,71", sp: "0,26", src: ["sijmk"] }),
    fingertest: N({ nom: "Finger test de Fortin", cat: "Sacro-iliaque", but: "Orienter vers une origine sacro-iliaque dès l'anamnèse.", deroul: "Le patient désigne à deux reprises, avec un seul doigt, le point douloureux.", faux: ["Le kiné presse les deux EIAS.", "Le patient lève la jambe tendue.", "Le kiné mesure les malléoles."], cot: "Distance du point par rapport à l'EIPS.", positif: "Point situé à moins d'1 cm de l'EIPS (douleur unilatérale, sous l'épineuse de L5).", diag: "Douleur d'origine sacro-iliaque probable.", incl: "Anamnèse : seuls l'unilatéralité et la localisation sous L5 sont constants. Kappa inter-examinateurs ≈ 0,6.", se: "71 %", sp: "46 %", src: ["sijmk"] }),
    gillet: N({ nom: "Test de Gillet – Rucklaüft", cat: "Sacro-iliaque", img: [s(56), s(57)], but: "Apprécier la mobilité de l'iliaque par rapport au sacrum.", deroul: "Debout, bout des doigts contre un mur ; un pouce sur l'EIPS (mobile), l'autre sous S1 ou sur S2 (fixe). Gillet : flexion de hanche ≥ 90°. Rucklaüft : extension « glissée » de hanche.", faux: ["Flexion complète du tronc assis.", "Pression sur le sacrum en procubitus.", "Le patient lève la cuisse OPPOSÉE au côté palpé (en charge)."], cot: "Déplacement de l'EIPS par rapport au sacrum.", positif: "Normal : à la flexion, l'EIPS descend vers le bas et l'arrière (iliaque postérieur), le sillon se creuse ; à l'extension, l'EIPS monte vers l'avant. Absence de mouvement = fixation.", diag: "Dysfonction (hypomobilité) iliaque.", incl: "Complète TFD/TFA ; à ne pas confondre avec le Stork test (Gillet inversé, côté en charge).", src: ["sijmk"] }),
    longjambe: N({ nom: "Test de longueur de jambe (malléoles)", cat: "Sacro-iliaque", img: [s(58), s(59)], but: "Orienter le type de dysfonction iliaque.", deroul: "Remise à zéro (2-3 triples flexions ou ponts), puis pieds hors de la table, flexion dorsale neutre ; comparer les malléoles internes (pouces sous les malléoles). Même position IMPÉRATIVE pour le Downing.", faux: ["Mesure ombilic-EIAS.", "Hauteur des crêtes iliaques debout.", "Flexion complète du tronc debout."], cot: "Jambe longue / courte du côté du TFD positif.", positif: "Côté du TFD (+) : jambe longue = iliaque probablement fixé en antériorité ; jambe courte = iliaque postérieur.", diag: "Iliaque antérieur ou postérieur.", incl: "Fausse jambe longue = outflare (iliaque antérieur) ; fausse jambe courte = inflare (iliaque postérieur).", src: ["sijmk"] }),
    downing: N({ nom: "Test de Downing (allongement / raccourcissement)", cat: "Sacro-iliaque", img: [s(61), s(62), s(63), s(64)], ctx: [s(60)], but: "Mettre en évidence la mobilité sacro-iliaque (antériorisation / postériorisation de l'iliaque).", deroul: "Même position que le test de longueur. Allongement : adduction + RE (antériorise l'iliaque). Raccourcissement : abduction + RI (+ impaction dans l'axe du fémur, postériorise l'iliaque). On compare les malléoles ; la triple flexion rétablit la longueur.", faux: ["Abduction + RE pour allonger.", "Flexion-adduction-RI à 90°.", "Pression sur les EIAS."], cot: "Variation de longueur en mm.", positif: "Physiologique : 15-20 mm dans chaque sens. Allongement = 0 → iliaque postérieur primaire ; allongement < raccourcissement → postérieur secondaire. Raccourcissement = 0 → iliaque antérieur primaire ; < allongement → antérieur secondaire.", diag: "Type de dysfonction iliaque.", incl: "Le plus « mobilisant » des tests SI mais SANS validité utilisé seul.", src: ["sijmk"] }),
    balance: N({ nom: "Test de la balance", cat: "Sacro-iliaque", img: [s(65), s(67)], but: "Apprécier la qualité de la mobilité sacro-iliaque (fuite ou butée).", deroul: "Décubitus dorsal, tête à plat ; mains sur les deux EIAS, légère poussée vers l'arrière et le dehors (sens des petits bras auriculaires), alternativement.", faux: ["Pression divergente maintenue 5 s (distraction).", "Poussée vers le bas en décubitus latéral.", "Lever la jambe tendue."], cot: "Sensation d'enfoncement, de butée, de remontée controlatérale.", positif: "Normal : léger recul, remontée immédiate de l'autre EIAS, retour élastique. Côté dysfonctionnel : enfoncement (« fuite », iliaque postérieur) ou butée précoce (iliaque antérieur) avec peu de remontée controlatérale.", diag: "Iliaque antérieur ou postérieur.", incl: "Très subjectif : toujours confronter aux autres tests.", src: ["sijmk"] }),
    reperes: N({ nom: "Repères positionnels du bassin (crêtes, EIPS, EIAS, pubis, compas, ischions)", cat: "Sacro-iliaque", img: [s(69), s(70), s(71), s(72), s(73), s(74), s(75)], but: "Confirmer ou infirmer l'hypothèse des tests de mobilité.", deroul: "Debout : hauteur des crêtes iliaques, des EIPS, des EIAS. Décubitus : EIAS (proéminence, hauteur), branches pubiennes (« escalier »), compas ombilic-EIAS, ischions (sourire des plis fessiers).", faux: ["Flexion du tronc avec pouces sous les EIPS.", "Pression postérieure dans l'axe du fémur.", "Adduction + RE puis comparaison des malléoles."], cot: "Asymétries.", positif: "Ex. EIPS basse du côté du TFD (+) : vraie jambe courte, iliaque postérieur ou spasme des abdominaux. Compas : distance ombilic-EIAS = ouverture (outflare) / fermeture (inflare).", diag: "Orientation de la dysfonction.", incl: "Ne prouvent pas une asymétrie osseuse réelle : ils confirment les tests de mobilité.", src: ["sijmk"] }),
    stork: N({ nom: "Stork test (Gillet inversé)", cat: "Sacro-iliaque", img: [s(84), s(85)], but: "Évaluer le contrôle neuromusculaire de la SI en charge (instabilité).", deroul: "Debout face à un mur ; pouces sous l'EIPS et S2 du côté EN CHARGE ; le patient lève la cuisse opposée à 90°.", faux: ["Le pouce est sur l'EIPS du côté qui lève la cuisse.", "Procubitus, pression sur les épineuses.", "Décubitus dorsal, compression des ailes iliaques."], cot: "Bascule de l'EIPS en charge.", positif: "Physiologique : l'EIPS en charge bascule vers l'arrière. Pathologique : bascule vers l'avant (manque d'activation musculaire) ± fasciculations = instabilité SI.", diag: "Instabilité sacro-iliaque.", incl: "Test particulier, pas encore référencé comme tel dans la littérature (Hungerford 2007).", src: ["sijmk"] }),
    symph: N({ nom: "Instabilité de la symphyse pubienne : 4P + abduction 45° et adduction contre résistance", cat: "Sacro-iliaque", img: [s(88), s(89)], but: "Rechercher une instabilité de la symphyse pubienne.", deroul: "4P modifié : décubitus dorsal, hanche à 90° de flexion et 45° d'abduction, compression dans l'axe du fémur. Adduction C/R : hanches à 90°, contraction isométrique des adducteurs contre la résistance du kiné.", faux: ["Hanche à 90° en ADDuction avec pression postérieure (thigh thrust).", "Lever la jambe tendue.", "Pression sur le sacrum."], cot: "Douleur à l'aine.", positif: "Douleur dans l'aine = instabilité de la symphyse pubienne.", diag: "Instabilité de la symphyse pubienne.", incl: "Si une « décoaptation » survient pendant l'adduction C/R, on est dans le traitement, plus dans le testing.", src: ["sijmk"] }),
    rennes: N({ nom: "Signe de Renne (et test de Noble)", cat: "Hanche", img: [s(17)], but: "Rechercher une tendinopathie de la bandelette ilio-tibiale / TFL (syndrome de l'essuie-glace).", deroul: "En appui unipodal, le patient fléchit le genou (≈ 30-40°) : on recherche la douleur latérale au contact du condyle externe. Plusieurs versions existent.", faux: ["Décubitus dorsal, flexion-adduction-RI.", "Pression postérieure dans l'axe du fémur.", "Squeeze test."], cot: "Douleur latérale du genou.", positif: "Reproduit la douleur latérale (condyle fémoral externe).", diag: "Syndrome de l'essuie-glace (ITB, TFL).", incl: "Cité dans le cours hanche (douleur extra-articulaire) et SIJ (diapo 17).", src: ["sijmk", "hanmk"] })
  });

  const P = M.PATHOS;
  const gal = (ks) => `<div class="mslides">${ks.map(k => `<img class="mimg" data-mi="${k}" alt="${k}" loading="lazy">`).join("")}</div>`;
  if (P.hanche) {
    P.hanche.statut += " + cours Papalia MK1 « La hanche – thérapie manuelle » 2024-25 (diapos intégrées).";
    P.hanche.resume.push("<b>Cours Papalia</b> : la pathologie la plus fréquente = COXARTHROSE ; sujet jeune → chercher un conflit (came / tenaille) ; prothèse douloureuse → chercher un effet came. La mesure des amplitudes est très fiable, la force assez fiable, les tests spécifiques ont une utilité LIMITÉE.");
    P.hanche.pro.push({ id: "mk", titre: "Cours Papalia MK1 : examen, red flags, tests (diapos)", src: ["hanmk"], html: `
<p><b>Plaintes : 3 origines</b> : intra-articulaire ; musculo-squelettique extra-articulaire ; à distance (rachis, viscères). Intra-articulaire : aine, face antérieure de cuisse (jusqu'au genou, pas en dessous), trochanter, jamais la crête iliaque, main en « C ». Extra-articulaire : fesse, face postérieure du trochanter (tendinopathie glutéale, ITB/TFL : Noble, Renne) ; peut descendre SOUS le genou.</p>
<p><b>Douleur mécanique de hanche</b> : douleur dans la fesse (attention projection lombaire/SI), après une marche prolongée, enraidissement matinal &lt; 60 min, irradiation vers le genou.</p>
<p><b>Mobilités</b> (toujours comparatives, fixer l'iliaque) : flexion 100-110° coxo-fémorale pure (120-135° avec le bassin), extension 10-20/30°, RE ≈ 45°, RI ≈ 30° (hanche à 90° les amplitudes sont plus grandes : ligament de Bertin détendu). Décubitus ventral genou à 90° : déficit de RI = articulaire ou piriforme ? Hyperlaxité → score de Beighton (≥ 4-5 selon l'âge). Qualité : ressaut = tendon/labrum, craquement = articulaire. Jeune femme laxe hyperlordosée : gêne à l'aine en fin de flexion = non pathologique.</p>
<p><b>Red flags</b> (douleur inflammatoire, à l'appui, limitation sur 2-3 plans) : élévation active (signe clinostatique : impossible de décoller et tenir la jambe tendue &lt; 30°), test de la clé = log-roll de Freiberg (RE/RI maximales puis relâchement : retour élastique ; mains sur cuisse et genou, pas sur le pied), flexion croisée. Consultation médicale : 2 signes chez l'adulte, 1 chez l'enfant.</p>
${gal([h(69), h(70), h(71), h(72), h(74)])}
<p><b>Observation</b> : Trendelenburg (bassin qui tombe côté opposé à l'appui = moyen/petit fessier et TFL faibles), Duchenne de Boulogne (tronc penché au-dessus de la hanche anormale pour réduire la compression), steppage (L5), longueur du pas.</p>
${gal([h(33), h(35), h(37), h(38)])}
<p><b>Diagnostic différentiel</b> : FABER (EIAS opposée fixée, 5 poussées ou 5 s), FADIR (mauvaise spécificité pour le conflit : faux positifs si déficit de flexion, sport exigeant, homme ; plus intéressant pour le sciatique/piriforme), Ober (et Ober modifié), Thomas original et modifié (droit antérieur).</p>
${gal([h(76), h(78), h(80), h(81), h(83), h(84), h(86), h(87)])}
<p><b>Dysfonctions articulaires</b> (tête « logée » dans le sens du roulement, refuse le glide opposé) : antérieure (la plus fréquente, refuse le glide postérieur, limite la flexion, douleur au FADIR) ; postérieure (limite l'extension) ; externe (ABD limitée, fréquente chez l'arthrosique) ; interne ; rotation latérale (RE libre, RI limitée : la plus fréquente) ; rotation médiale (plus rare).</p>
<p><b>Techniques structurelles</b> : décompression du pôle supérieur (glide caudal ; indications : dysfonction ant./post., arthrose supéro-externe, ostéonécrose) ; postériorisation (limitation de flexion ; CI : bursite rétro-trochantérienne hyperalgique) ; antériorisation (limitation d'extension ; CI : ostéonécrose) ; glissement médial (limitation d'ABD, arthrose latérale) ; décompression latérale (arthrose du pôle médial, douleur au FADIR) ; normalisations rotatoires. Correction : flexion → bas + arrière ; extension → haut + avant ; RE → avant + médial ; RI → arrière + latéral ; ABD → bas + médial ; ADD → haut + latéral.</p>
${gal([h(29), h(92), h(95), h(102), h(106), h(108)])}` });
    P.hanche.qcm.push(
      { id: "hm1", part: "mk", q: "Log-roll (test de la clé) : bonne prise selon le cours", a: ["Une main sur la cuisse, l'autre sur le genou"], d: ["Une main sur le pied pour amplifier la rotation", "Les deux mains sur le bassin", "Patient en procubitus"], expl: "Main sur le pied : erreurs par laxité, valgus ou varus de cheville.", src: "hanmk" },
      { id: "hm2", part: "mk", q: "Signe clinostatique positif :", a: ["Impossible de décoller et de tenir la jambe tendue en dessous de 30°"], d: ["Douleur à la RI à 90° de flexion", "Le bassin tombe du côté opposé à l'appui", "Le genou ne descend pas vers la table"], src: "hanmk" },
      { id: "hm3", part: "mk", q: "Red flags de hanche chez l'ENFANT : consultation médicale à partir de", a: ["1 signe positif"], d: ["2 signes positifs", "3 signes positifs", "Jamais chez l'enfant"], src: "hanmk" },
      { id: "hm4", part: "mk", q: "Facteurs de faux positif du FADIR selon le cours :", a: ["Déficit de flexion, sport exigeant pour les MI, sexe masculin"], d: ["Âge > 70 ans, sédentarité, sexe féminin", "Hyperlaxité, grossesse", "Obésité uniquement"], src: "hanmk" },
      { id: "hm5", part: "mk", q: "Douleur mécanique de hanche : enraidissement matinal typique", a: ["Moins de 60 minutes"], d: ["Plus de 2 heures", "Aucun", "Uniquement le soir"], src: "hanmk" },
      { id: "hm6", part: "mk", q: "Hanche à 90° de flexion, les rotations sont plus grandes car…", a: ["Le ligament de Bertin (ilio-fémoral) est détendu"], d: ["Le piriforme devient rotateur externe", "Le labrum se rétracte", "La capsule se tend"], src: "hanmk" },
      { id: "hm7", part: "mk", q: "Dysfonction articulaire de hanche la plus fréquente (anatomie) :", a: ["Antérieure (refuse le glide postérieur)"], d: ["Postérieure", "Interne", "Supérieure"], src: "hanmk" },
      { id: "hm8", part: "mk", q: "Technique de POSTÉRIORISATION : indication principale", a: ["Limitation de flexion (dysfonction antérieure)"], d: ["Limitation d'extension", "Limitation d'abduction", "Ostéonécrose (contre-indication de l'antériorisation)"], src: "hanmk" },
      { id: "hm9", part: "mk", q: "Correction d'une flexion déficitaire (convexe sur concave) :", a: ["Glide vers le bas et l'arrière"], d: ["Glide vers le haut et l'avant", "Glide médial", "Glide latéral"], src: "hanmk" },
      { id: "hm10", part: "mk", q: "Boiterie de Duchenne de Boulogne :", a: ["Le tronc se penche au-dessus de la hanche anormale pour réduire la compression"], d: ["Le bassin tombe du côté opposé à l'appui", "Le pied tape (releveurs)", "Le pas est fauché"], src: "hanmk" }
    );
  }
  if (P["sacro-iliaque"]) {
    const S = P["sacro-iliaque"];
    S.statut += " + cours Papalia MK1 « SIJ » 2024-25 (diapos intégrées).";
    S.resume.push("<b>Cours Papalia</b> : 22 % des lombalgies chroniques sont SI (50 % chez la femme enceinte). 3 groupes : sacro-iliite, dysfonction articulaire, instabilité. Anamnèse : unilatéralité + douleur sous L5 ; finger test de Fortin (&lt; 1 cm de l'EIPS ; Se 71 %, Sp 46 %).");
    S.pro.push({ id: "mk", titre: "Cours Papalia MK1 : provocation, mobilité, instabilité (diapos)", src: ["sijmk"], html: `
<p><b>Épidémiologie</b> : arthrite SI (douleur à la marche et aux sauts, extension la plus douloureuse) ; hypomobilité (chute sur les fesses, torsion, accident ; douleur à la marche, aux changements de position, en statique prolongée) ; hypermobilité (traumatisme, microtraumatismes, hormones dès la 12e semaine de grossesse ; douleur en flexion antérieure, marche rapide, port de charges ; craquements SI ou pubis).</p>
<p><b>Tests de provocation (Laslett 2005)</b> : thigh thrust (le plus sensible), distraction / Ericksen (le plus spécifique), compression / Volkman (Se 0,3-0,7 ; Sp 0,9), sacral thrust (Se 0,27-0,53), Gaenslen (Se 0,71 ; Sp 0,26), FABER/Patrick. Algorithme : thigh thrust + distraction ; si un seul (+) → compression ; si (−) → sacral thrust. 0 test (+) : SI éliminée ; ≥ 3 (+) : SI impliquée. Douleur aiguë connue (hernie, fracture…) : tests non interprétables.</p>
${gal([s(15), s(18), s(19), s(20), s(21), s(22), s(24), s(25)])}
<p><b>Biomécanique</b> : iliaque antérieur ↔ sacrum homolatéral en contre-nutation ; outflare (accompagne l'iliaque antérieur) → fausse jambe LONGUE ; inflare (iliaque postérieur) → fausse jambe COURTE. Iliaque antérieur = surtout traumatique (primaire), fixé par droit antérieur, carré des lombes, adducteurs, TFL ; iliaque postérieur = surtout adaptatif (secondaire), fixé par abdominaux, biceps fémoral, piriforme.</p>
<p><b>Tests fonctionnels</b> : TFD (localise le côté, pas le type), TFA, « transparence » entre les deux (ex. TFD 2 cm à droite, TFA 0,5 cm à droite → iliaque) ; Gillet-Rucklaüft ; longueur de jambe ; Downing (15-20 mm physiologiques ; 0 = dysfonction primaire) ; balance (fuite = postérieur, butée = antérieur) ; repères positionnels.</p>
${gal([s(50), s(55), s(57), s(59), s(61), s(63), s(65), s(74)])}
<p><b>Instabilité lombo-pelvienne</b> : ASLR (le plus discriminant ; Se 90 %, Sp 94 % ; effort 0-5 ; EIAS opposée qui part vers l'avant = +), pelvic belt (mieux avec compression = instabilité SI), stork test, prone instability (lombaire), 4P + ABD 45° et ADD C/R (symphyse).</p>
${gal([s(80), s(82), s(84), s(86), s(88), s(89)])}
<p><b>Raisonnement</b> : 1 test de provocation (+) = suspicion ; 2 = assez bonne assurance ; 3 = confirmation ; tous (−) = pas de SI. Si (+) : dysfonction (hypomobilité), instabilité (SI, symphyse, lombaire) ou sacro-iliite (type spondylarthrite). Traitement global du pubis seulement en cas de dysfonction, PAS d'instabilité.</p>
<p><b>Traitement</b> : Mitchell (muscle energy : inhibition réciproque, boucle gamma ; personnes à risque, femme enceinte, ostéoporose) et techniques directes (Kaltenborn grade III 2 × 30 s) ; iliaque antérieur : décubitus latéral, extension puissante contre la hanche du kiné après 3 expirations ; iliaque postérieur : DD oblique, jambe pendante. Contrôle moteur au Stabilizer : 40 mmHg sous les lombaires, rentrer le ventre → +2 à 4 mmHg ; en procubitus 70 mmHg → transverse correct = 64-60 mmHg, 10 × 10 s.</p>
${gal([s(90), s(98), s(103), s(107), s(108)])}` });
    S.qcm.push(
      { id: "sm1", part: "mk", q: "Proportion des lombalgies chroniques d'origine sacro-iliaque (cours Papalia) :", a: ["22 % (50 % chez la femme enceinte)"], d: ["2 %", "70 %", "50 % chez tous"], src: "sijmk" },
      { id: "sm2", part: "mk", q: "Finger test de Fortin positif :", a: ["Le patient désigne 2 fois un point à moins d'1 cm de l'EIPS"], d: ["Douleur à l'aine au FABER", "Le patient montre sa douleur en « C »", "Douleur bilatérale au-dessus de L5"], src: "sijmk" },
      { id: "sm3", part: "mk", q: "Algorithme de Laslett : thigh thrust (+) mais distraction (−). Étape suivante ?", a: ["Test de compression ; s'il est négatif, sacral thrust"], d: ["Conclure à la SI", "Éliminer la SI", "Gaenslen puis FABER"], src: "sijmk" },
      { id: "sm4", part: "mk", q: "Test de Downing : allongement = 0", a: ["Iliaque postérieur primaire"], d: ["Iliaque antérieur primaire", "Physiologique", "Iliaque postérieur secondaire"], src: "sijmk" },
      { id: "sm5", part: "mk", q: "Manœuvre d'ALLONGEMENT du Downing :", a: ["Adduction + rotation externe"], d: ["Abduction + rotation interne", "Flexion-abduction-RE", "Triple flexion"], src: "sijmk" },
      { id: "sm6", part: "mk", q: "Le TFD permet de déterminer…", a: ["Le côté de la dysfonction, pas son type"], d: ["Le type (antérieur/postérieur)", "Une instabilité", "Une sacro-iliite"], src: "sijmk" },
      { id: "sm7", part: "mk", q: "Iliaque antérieur : fausse jambe… et mécanisme habituel", a: ["Longue (outflare) ; le plus souvent traumatique (primaire)"], d: ["Courte (inflare) ; adaptatif", "Longue ; adaptatif", "Courte ; traumatique"], src: "sijmk" },
      { id: "sm8", part: "mk", q: "Stork test pathologique :", a: ["L'EIPS en charge bascule vers l'avant (± fasciculations)"], d: ["L'EIPS en charge bascule vers l'arrière", "Douleur à l'aine", "Les deux EIPS restent immobiles = normal"], src: "sijmk" },
      { id: "sm9", part: "mk", q: "ASLR : sensibilité / spécificité rapportées dans le cours", a: ["Se 90 % · Sp 94 %"], d: ["Se 27 % · Sp 100 %", "Se 71 % · Sp 26 %", "Se 50 % · Sp 50 %"], src: "sijmk" },
      { id: "sm10", part: "mk", q: "4P avec hanche en ABDuction 45° : douleur à l'aine =", a: ["Instabilité de la symphyse pubienne"], d: ["Atteinte sacro-iliaque", "Tendinopathie du TFL", "Conflit fémoro-acétabulaire"], src: "sijmk" },
      { id: "sm11", part: "mk", q: "Traitement global du pubis : quand ?", a: ["Uniquement en cas de dysfonction SI, pas d'instabilité"], d: ["Toujours en cas d'instabilité", "En cas de sacro-iliite", "Jamais"], src: "sijmk" },
      { id: "sm12", part: "mk", q: "Stabilizer en procubitus : contraction correcte du transverse", a: ["Partir de 70 mmHg et descendre à 64-60 mmHg, 10 × 10 s"], d: ["Monter de 40 à 60 mmHg", "Garder 70 mmHg", "Descendre à 20 mmHg"], src: "sijmk" }
    );
  }
  // ===== Cas de cours manquants (CR OTR 2026-27 et 2024-25) =====
  const L4 = "Bibliothèque MSP › 04_OTR › ";
  M.SRC.og3 = { t: "CR MSP OTR 2026-27, cours 3 : genou, homme de 23 ans, craquement au squat", k: "CR 2026-27", f: L4 + "A › 2026-10 - OTR - Cours 3 genou (craquement squat).pdf" };
  M.SRC.og5 = { t: "CR MSP OTR 2026-27, cours 5 : genou douloureux, patiente de 23 ans (ancienne entorse du LCA)", k: "CR 2026-27", f: L4 + "A › 2026-10 - OTR - Cours 5 genou patiente 23 ans.pdf" };
  M.SRC.o1212 = { t: "MSP ortho-neuro 12/12/2024 (Maes & Paulet) : sacro-iliaque sur maladie de Marfan, puis lombalgie sur SEP", k: "CR 2024-25", f: L4 + "B › Notes de cours MSP 2024-25 › 24.12.12_Pb Sacro-Iliaque sur maladie de Morfan + Lombalgie sur SEP.pdf" };
  M.SRC.o2702 = { t: "MSP ortho 27/02/2025 : pratique simulée, déchirure myo-aponévrotique du gastrocnémien médial (45 ans, badminton)", k: "CR 2024-25", f: L4 + "B › Notes de cours MSP 2024-25 › 25.02.27_Déchirure myo-aponévrotique.pdf" };
  M.SRC.o1303 = { t: "MSP ortho 13/03/2025 (Preuss & Thonnard) : traitement de la déchirure du mollet, critères de retour au badminton ; déchirure des IJ", k: "CR 2024-25", f: L4 + "B › Notes de cours MSP 2024-25 › 25.03.13_ déchirure mollet.pdf" };
  M.SRC.o2111 = { t: "MSP OTR 21/11/2024 : pratique simulée, douleur du mollet droit à l'effort (étudiant de 21 ans, MMA)", k: "CR 2024-25", f: L4 + "B › Notes de cours MSP 2024-25 › 24.11.21_Douleur mollet droit.pdf" };
  const A = (q, p, r) => ({ q, p, r }), B = (b, ok, r) => ({ b, ok, r }), C = (t, ok, why) => why ? { t, ok, why } : { t, ok };

  if (P["genou-bloc3"]) {
    const G = P["genou-bloc3"];
    G.statut += " + CR OTR 2026-27 (cours 3 et 5 : deux cas de genou).";
    G.patients.push(
      { id: "pg3", nom: "Homme de 23 ans · douleur patellaire droite (craquement au squat il y a 4 ans)", origine: "cours", src: "og3", desc: "Musculation 4×/semaine ; douleur au squat, à la presse et à l'accroupissement.", attrs: { douleurs: [{ zone: "genouD", type: "mecanique" }] } },
      { id: "pg5", nom: "Femme de 23 ans · genou droit douloureux et instable (LCA non rééduqué à 16 ans)", origine: "cours", src: "og5", desc: "Agente immobilière, jeune maman, fumeuse ; EVA 0 le matin, 7-8 le soir.", attrs: { douleurs: [{ zone: "genouD", type: "mecanique" }] } });
    (G.cas ||= []).push(
      { id: "casog3", origine: "cours", src: ["og3"], patient: "pg3", titre: "Genou : craquement au squat, douleur patellaire (homme de 23 ans) – CR 2026-27", fiche: "Homme de 23 ans, musculation 4 fois par semaine, mal au genou droit depuis 4 ans depuis un « gros craquement » en milieu-fin d'amplitude de squat.",
        etapes: [
          { type: "anamnese", titre: "Anamnèse", consigne: "Choisis tes questions dans l'ordre (1re question : « Qu'est-ce qui t'amène ? »).", items: [
            A("Qu'est-ce qui t'amène ?", 1, "Mal au genou depuis 4 ans, surtout au sport, moins dans les AVJ."),
            A("Mécanisme ?", 1, "Squat : gros craquement en milieu-fin d'amplitude du genou droit → arrêt, 2-3 semaines de douleur à la marche ; première fois."),
            A("Sport : quoi, combien de fois ?", 1, "Musculation 4 fois par semaine ; 6 mois sans séance de jambes puis reprise progressive."),
            A("Examens, suivi ?", 1, "IRM négative ; isocinétique : 20 % de force en moins à droite ; kiné déjà faite."),
            A("Quand as-tu mal MAINTENANT ? Qu'est-ce qui soulage ?", 1, "Squat, presse, s'accroupir ; douleur patellaire ; mieux avec chaussures d'haltéro, correction du geste et renforcement de la chaîne postérieure."),
            A("EVA ?", 1, "4/10 au sport ; gêne 2 h s'il est mal échauffé."),
            A("Médicaments ?", 2, "Jamais."),
            A("Objectif ?", 1, "Faire du sport sans douleur."),
            A("Détailler longuement le trauma d'il y a 4 ans ?", 3, "Prof : se concentrer sur ce qui l'amène MAINTENANT.")] },
          { type: "bilans", titre: "Bilans", consigne: "Sélectionne les bilans utiles, dans l'ordre.", ordre: ["Constat d'attitude", "Morphostatique", "Douleur", "Cutané-trophique", "Articulaire", "Musculaire", "Fonctionnel"], items: [
            B("Constat d'attitude", true, "Faciès, façon de se lever, de marcher, aide technique, posture assise."),
            B("Morphostatique", true, "Pieds nus, déshabillé ; pas forcément tout le corps. Une maladie de Haglund a été évoquée (lien possible avec le genou via la flexion dorsale)."),
            B("Douleur", true, "Patella globalement ; palper en sachant pourquoi on palpe."),
            B("Cutané-trophique", true, "Périmétrie (+1 cm = positif), hématome, cicatrice, température avec le dos de la main."),
            B("Articulaire", true, "Flexion dorsale en fente contre le mur (10 cm vs 6 cm : déficit à droite ; positif si 1 cm d'écart). Genou : fin de course, mobilité rotulienne, glaçon, rabot, Zohlen, ailerons (plus douloureux à droite). Ménisques : corne postérieure en hyperflexion-compression, test debout en rotation."),
            B("Musculaire", true, "Pont unipodal tenu, testing des rotateurs de hanche (mettre de la force chez un sportif)."),
            B("Fonctionnel", true, "Squat unipodal comparatif ; Y-balance (3 essais, meilleur gardé, positif si > 10 % d'écart) : bascule du bassin vers l'extérieur en appui droit."),
            B("Ligaments collatéraux", false, "Pas nécessaire : la douleur ne coïncide pas et le trauma date de 4 ans.")] },
          { type: "choix", titre: "Raisonnement et traitement", consigne: "Coche les propositions justes.", src: "og3", items: [
            C("Un test SENSIBLE négatif aide à exclure ; un test SPÉCIFIQUE positif aide à confirmer", true),
            C("La bascule du bassin au Y-balance → exclure une cause articulaire de hanche puis tester les rotateurs", true),
            C("Renforcer le moyen fessier en gainage latéral (neutre, flexion, extension, en RI)", true),
            C("Mobilité de hanche à 4 pattes, genou sur un tabouret, en majorant la RI", true),
            C("L'IRM négative prouve qu'il n'y a rien à rééduquer", false, "Il reste un déficit de force de 20 % et un défaut de contrôle."),
            C("À l'examen final, expliquer ce que l'on fait pendant les tests", true)] }] },
      { id: "casog5", origine: "cours", src: ["og5"], patient: "pg5", titre: "Genou douloureux et instable, ancienne entorse du LCA (femme de 23 ans) – CR 2026-27", fiche: "Femme de 23 ans, douleur du genou droit depuis l'âge de 16 ans (entorse du LCA non rééduquée, épanchement, fissure du cartilage) ; reprise forte depuis 8 mois.",
        etapes: [
          { type: "anamnese", titre: "Anamnèse", consigne: "Choisis tes questions dans l'ordre.", items: [
            A("Histoire : localisation, depuis quand, comment ?", 1, "Depuis 16 ans (entorse du LCA non rééduquée) ; reprise forte depuis 8 mois, et depuis 1 an (devenue maman) quand elle bouge beaucoup."),
            A("Facteurs aggravants / soulageants ?", 1, "Escaliers (montée et descente), accroupissement, dès la mise en charge ; tremblements à l'effort."),
            A("EVA sur la journée ?", 1, "0/10 le matin, 7-8/10 le soir."),
            A("Kiné antérieure ?", 1, "20 séances sans changement ; grosse instabilité du genou."),
            A("Métier, sport ?", 1, "Agente immobilière ; aucun sport (MMA arrêté après la blessure)."),
            A("Hygiène de vie ?", 1, "Tabac depuis 9 ans, 10-15 cigarettes par jour (cartilage nourri par imbibition : moins bonne vascularisation)."),
            A("Imagerie ?", 1, "Radio, scanner, IRM : petite instabilité patellaire droite, sinon rien."),
            A("Objectif ?", 1, "Ne plus avoir mal."),
            A("Groupe sanguin ?", 3, "Inutile.")] },
          { type: "lecture", titre: "Bilans du cours", html: `<ul><li><b>Morphostatique</b> : RE de hanche = position antalgique après une atteinte des croisés ; flessum, valgus/varus ; bascule du bassin, « coup de hache ».</li><li><b>Cutané-trophique</b> : périmétrie : 1 cm d'écart = gonflement, 3 cm = amyotrophie.</li><li><b>Douleur</b> : face interne et sous le genou.</li><li><b>Articulaire</b> : d'abord la mobilité de la patella (douleur interne quand elle part en externe = aileron rotulien), signe du glaçon, flexion-extension (douleur interne en fin de flexion et d'extension), palpation des ménisques à 70-80° de flexion.</li><li><b>Musculaire</b> : quadriceps, IJ, adducteurs, abducteurs. <b>Fonctionnel</b> : SLS, unipodal, Y-balance.</li><li><b>Traitement de 1re ligne</b> : isométrie, unipodal, squat, hip thrust.</li></ul>` },
          { type: "choix", titre: "Rappels du cours", consigne: "Coche les propositions justes.", src: "og5", items: [
            C("La laxité est maximale au dernier trimestre de grossesse", true),
            C("SFP : déficit des ratios quadriceps/IJ, abducteurs/adducteurs et des rotateurs", true),
            C("Douleur méniscale : blocage, instabilité, douleur en charge", true),
            C("Le tabac n'a aucun effet sur le cartilage", false, "Moins bonne vascularisation, or le cartilage est nourri par imbibition."),
            C("Commencer le traitement par la pliométrie", false, "1re ligne : isométrie, unipodal, squat, hip thrust.")] }] });
  }

  if (P["sacro-iliaque"]) {
    const S = P["sacro-iliaque"];
    S.patients.push({ id: "pmarfan", nom: "Homme de 35 ans · maladie de Marfan, douleur à l'EIPS droite", origine: "cours", src: "o1212", desc: "Agent immobilier souvent assis, anxieux ; opéré du thorax (cicatrice).", attrs: { anxiete: true, cicatrices: [{ zone: "thorax" }], douleurs: [{ zone: "sacrum", type: "mecanique" }, { zone: "hancheD", type: "mecanique" }] } });
    (S.cas ||= []).push({ id: "casmarfan", origine: "cours", src: ["o1212"], patient: "pmarfan", titre: "Sacro-iliaque sur maladie de Marfan (homme de 35 ans) – CR 12/12/2024", fiche: "Homme de 35 ans, maladie de Marfan diagnostiquée il y a 3 ans (douleurs thoraciques, opéré), revient pour une douleur à l'EIPS droite.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis tes questions dans l'ordre.", items: [
          A("Où est la douleur ? Jusqu'où descend-elle ?", 1, "EIPS droite, parfois fesse et cuisse, jamais sous le genou."),
          A("Quand ? Qu'est-ce qui soulage ?", 1, "Assis (bureau, conduite) ; soulagée en changeant de position ; EVA 4-5/10."),
          A("Antécédents ?", 1, "Maladie de Marfan depuis 3 ans, chirurgie thoracique (cicatrice sensible) ; prise de poids due aux médicaments."),
          A("Travail, loisirs ?", 1, "Agent immobilier souvent assis, télétravail 2 jours/semaine, train ; tennis, padel ; ancien bon niveau au ping-pong."),
          A("Moral ?", 1, "Très anxieux depuis le diagnostic ; tensions des trapèzes."),
          A("Couleur préférée ?", 3, "Inutile.")] },
        { type: "lecture", titre: "Bilans du cours", html: `<ul><li>Morphostatique : RAS ; peu souple au niveau du bassin.</li><li>Articulaire : douleur en flexion de hanche droite, FADIR douloureux (conflit en flexion).</li><li>Cluster de Laslett positif ; TFD (+), TFA (−) → iliaque ; Gillet : dysfonction antérieure (le bassin ne part pas en postérieur) ; Downing ; tests d'instabilité positifs.</li><li>Conclusion : iliaque antérieur ET instable + conflit de hanche en flexion.</li></ul>` },
        { type: "choix", titre: "Traitement", consigne: "Coche les propositions justes.", src: "o1212", items: [
          C("Conflit en flexion : glide inférieur (et postérieur) pendant la flexion, 20 fois puis on reteste", true),
          C("La technique est validée si la douleur diminue d'environ 30 % pour la même amplitude", true),
          C("Auto-exercices : élastique distal sur la cuisse en fente ou pied sur un tabouret (glide postérieur)", true),
          C("TFD (+) et TFA (−) orientent vers le sacrum", false, "Vers l'iliaque."),
          C("Une maladie de Marfan oblige à penser à l'hyperlaxité (instabilité)", true)] }] });
  }

  if (P.dechirure) {
    const D = P.dechirure;
    D.statut += " + CR 27/02/2025, 13/03/2025 et 21/11/2024 (mollet).";
    D.patients.push(
      { id: "pjaspar", nom: "Homme de 45 ans · déchirure myo-aponévrotique du gastrocnémien médial droit (6 cm), J21", origine: "cours", src: "o2702", desc: "Badminton ; boite encore, compense dans les escaliers.", attrs: { douleurs: [{ zone: "molletD", type: "mecanique" }] } },
      { id: "pmma", nom: "Étudiant de 21 ans · douleur du mollet droit à l'effort (MMA, course)", origine: "cours", src: "o2111", desc: "Pic de douleur à l'arrêt de l'effort, ~15-20 s, depuis 3-4 ans.", attrs: { douleurs: [{ zone: "molletD", type: "mecanique" }] } });
    (D.cas ||= []).push(
      { id: "casjaspar", origine: "cours", src: ["o2702", "o1303"], patient: "pjaspar", titre: "Déchirure myo-aponévrotique du mollet au badminton (M. J., 45 ans)", fiche: "Homme de 45 ans, déchirure de 6 cm de la jonction myo-aponévrotique du gastrocnémien médial droit il y a 3 semaines (impulsion après 1 h de badminton, « bulle qui éclate »).",
        etapes: [
          { type: "anamnese", titre: "Anamnèse", consigne: "Ordre conseillé par le prof : médication, pathologies, antécédents traumatiques, chirurgies.", items: [
            A("Prescription et échographie ?", 1, "Déchirure de la jonction myo-aponévrotique de 6 cm, gastrocnémien médial (écho à J2)."),
            A("Que s'est-il passé ? Qu'avez-vous ressenti ?", 1, "Impulsion pour frapper le volant après 1 h de jeu ; « bulle qui éclate »."),
            A("Premiers soins ?", 1, "Dafalgan 2 jours, bandage compressif, massage ; béquilles du mercredi au dimanche."),
            A("Médicaments, pathologies ?", 1, "Un peu d'HTA, maladie auto-immune localisée non évolutive."),
            A("Antécédents traumatiques ?", 1, "Plusieurs entorses plus jeune."),
            A("Sport (fréquence, échauffement, changement récent) ?", 1, "Badminton 1-2×/semaine 2 h en double ; course et vélo occasionnels ; match plus intense → surcharge probable."),
            A("Profession, arrêt de travail (drapeau bleu) ?", 1, "Kiné remplaçant + cabinet ; pas d'arrêt."),
            A("Hygiène de vie (addictions, hydratation, sommeil) ?", 1, "Oubliée par l'étudiant : le prof insiste, utile si la guérison stagne."),
            A("Conduite automobile ?", 3, "Pas pertinent à ce stade.")] },
          { type: "lecture", titre: "Bilans réalisés et débrief", html: `<ul><li><b>Douleur</b> (LITHIASE : localisation, intensité, type, horaire, aggravants, soulageants, évolution) : milieu du mollet ; 6-7/10 à la blessure, 0-1 au repos et à la marche ; pire aux premiers pas du matin ; palpation 5/10.</li><li><b>Articulaire</b> : symétrique sauf la flexion dorsale limitée par la douleur ; tester aussi le genou (muscle bi-articulaire).</li><li><b>Musculaire</b> : douleur aux fortes contractions et à l'étirement du triceps ; montée sur pointes douloureuse à droite ; tester quadriceps et moyen fessier.</li><li><b>Marche, escaliers, équilibre</b> : douleur si le pas s'allonge ; unipodal droit moins bon ; chronométrer (30 s, chrono lancé après stabilisation), compter les erreurs.</li></ul>` },
          { type: "choix", titre: "Traitement et retour au badminton (CR 13/03/2025)", consigne: "Coche les propositions justes.", src: "o1303", items: [
            C("Se baser sur le ressenti du patient plutôt que sur des délais théoriques ; demander le ressenti 12-24 h après", true),
            C("Une déchirure myo-aponévrotique guérit plus vite qu'une déchirure musculaire", false, "C'est l'inverse."),
            C("Étirement progressif sous le seuil douloureux, isométrie, excentrique unipodal, pliométrie en fin de progression", true),
            C("Retour : plus de douleur aux AVJ et escaliers, force et endurance < 20 % d'écart, hop tests, toutes les amplitudes récupérées", true),
            C("Reprendre la course selon le protocole fractionné (Blaise Dubois)", true),
            C("L'électrothérapie remplace le travail actif", false, "Utile avec contraction volontaire, en phase peu mobile.")] }] },
      { id: "casmma", origine: "cours", src: ["o2111"], patient: "pmma", titre: "Douleur du mollet à l'effort chez un étudiant (pratique simulée 21/11/2024)", fiche: "Étudiant de 21 ans, MMA 2×/semaine, course 1×/semaine ; douleur du mollet droit à l'effort depuis 3-4 ans, avec un pic à l'arrêt.",
        etapes: [
          { type: "anamnese", titre: "Anamnèse", consigne: "Choisis tes questions dans l'ordre.", items: [
            A("Pourquoi viens-tu ?", 1, "Douleur forte du mollet droit en course, talons-fesses, montées de genoux ; pic à l'arrêt, disparaît en 15-20 s."),
            A("Depuis quand ? Changement à l'époque ?", 1, "3-4 ans, entre la boxe et le MMA ; rien de changé ; semelles vers 10-12 ans."),
            A("Où exactement ? Ça descend ?", 1, "Bas du mollet, postéro-interne, vers la voûte plantaire ; un peu à la cheville."),
            A("Essoufflement ? Antécédents cardiaques familiaux ?", 1, "Non (diagnostic différentiel vasculaire)."),
            A("Ça ressemble à une crampe ? L'étirement la réveille ?", 1, "Presque une crampe ; l'étirement tire sur l'Achille mais ne réveille pas la douleur."),
            A("Examens, traitements ?", 1, "Aucun examen ; kiné avec électrodes et massages, sans médecin."),
            A("Chaussures, semelles ?", 1, "Conseillé en magasin (attaque talon) ; semelles de 4-5 ans."),
            A("Hygiène de vie ?", 1, "Pas de tabac ni d'alcool ; dort 5-6 h.")] },
          { type: "choix", titre: "Hypothèses", consigne: "Coche les pistes évoquées dans le cours.", src: "o2111", items: [
            C("Douleur basse et latérale au tendon d'Achille : penser au soléaire", true),
            C("Douleur qui descend vers la voûte, en interne, aux pas chassés : penser au tibial postérieur", true),
            C("Interroger l'essoufflement et les antécédents cardiaques", true),
            C("C'est forcément une rupture du tendon d'Achille", false, "Pas de traumatisme, douleur d'effort depuis 3-4 ans.")] }] });
  }

  // ===== Cas neuro et achille (CR 2024-25) =====
  const L2 = "Bibliothèque MSP › 02_NEURO › B › Notes de cours MSP 2024-25 › ";
  M.SRC.n1912 = { t: "MSP neuro-OTR 19/12/2024 : AVC sylvien droit (72 ans), héminégligence et douleur d'épaule, 4 stades de prise en charge", k: "CR 2024-25", f: L2 + "24.12.19_Exercices AVC sylvien, héminégligence et douleur d'épaule.pdf" };
  M.SRC.n1212 = { t: "MSP neuro-respi 12/12/2024 : hémiplégie droite sur hémorragie intraparenchymateuse, pneumonie d'inhalation (65 ans)", k: "CR 2024-25", f: L2 + "24.12.12_ Exercices hémiplegie D et pneumonie d'inhalation.pdf" };
  M.SRC.n2003 = { t: "MSP neuro 20/03/2025 : pratique simulée, syndrome cérébelleux (ataxie, 73 ans)", k: "CR 2024-25", f: L2 + "25.03.20_Syndrome cérébelleux pratique + traitement.pdf" };
  const push = (pid, pat, cas) => { const X = P[pid]; if (!X) return; (X.patients ||= []).push(pat); (X.cas ||= []).push(cas); };

  push("avc-sylvien", { id: "p1912", nom: "Homme de 72 ans · AVC sylvien droit, hémiplégie gauche, héminégligence", origine: "cours", src: "n1912", desc: "Chute contre un radiateur lors de l'AVC, non thrombolysé ; pas de trouble sensitif.", attrs: { hemi: "G", flasque: true, regard: "D", douleurs: [{ zone: "epauleG", type: "mecanique" }] } },
    { id: "cas1912", origine: "cours", src: ["n1912"], patient: "p1912", titre: "AVC sylvien droit : du lit de réa au cabinet (4 stades, 72 ans)", fiche: "Homme de 72 ans, AVC sylvien droit non thrombolysé : hémiplégie gauche, héminégligence, aucun trouble sensitif. Stades : réa (aucune motricité), J+10 (début de motricité, douleur d'épaule), J+21 (spasticité légère), 3 mois (canne, spasticité modérée, négligence persistante).",
      etapes: [
        { type: "choix", titre: "Stade 1 : réanimation, patient alité", consigne: "Coche les priorités justes.", src: "n1912", items: [
          C("Prévenir l'encombrement : le faire respirer à HAUT volume", true),
          C("Installation : décubitus dorsal ou latéral sur le côté SAIN (côté plégique en dernier recours)", true),
          C("Décubitus ventral pour la ventilation", false, "Inconfortable et peu favorable à la ventilation."),
          C("Protéger l'épaule flasque (subluxation de la tête humérale), gouttière pour le MS", true),
          C("Mobiliser en amplitudes maximales sans traction de l'épaule, en évitant les longues séries de flexion > 90° et de RE ; ne pas oublier la main", true),
          C("Surveiller la position vicieuse du MI (flexion-ABD-RE de hanche, flexion du genou, varus équin)", true)] },
        { type: "choix", titre: "Stades suivants", consigne: "Coche les propositions justes.", src: "n1912", items: [
          C("J+10 : douleur d'épaule → installation, recentrage, mobilisations douces, éducation des soignants", true),
          C("Héminégligence : stimuler du côté négligé (gauche)", true),
          C("3 mois : la marche avec canne et la négligence persistante orientent le travail de l'équilibre et de l'exploration", true),
          C("Une héminégligence disparaît toujours en 10 jours", false, "Ici, elle persiste à 3 mois.")] }] });

  push("avc-rea", { id: "p1212", nom: "Homme de 65 ans · hémiplégie droite flasque sur hémorragie, intubé (pneumonie d'inhalation)", origine: "cours", src: "n1212", desc: "Mutique, comprend les consignes simples ; sonde ; probable polyneuropathie.", attrs: { hemi: "D", flasque: true, intube: true, dysarthrie: true } },
    { id: "cas1212", origine: "cours", src: ["n1212"], patient: "p1212", titre: "Hémorragie intraparenchymateuse + pneumonie d'inhalation : soins intensifs puis service neuro (65 ans)", fiche: "Homme de 65 ans : hémorragie intraparenchymateuse drainée, hémiplégie droite flasque, dysarthrie, altération de la conscience ; pneumonie d'inhalation, insuffisance respiratoire aiguë, intubé. « Négligence » droite liée à la perte de sensibilité (pas une vraie héminégligence).",
      etapes: [
        { type: "choix", titre: "Soins intensifs", consigne: "Coche les propositions justes.", src: "n1212", items: [
          C("Ausculter pour décider d'une aspiration (intubé, sédaté : pas d'expectoration possible)", true),
          C("AFE passive très utile ici", false, "Le cours la dit non utile : on aspire."),
          C("Surveiller les signes vitaux pendant les mobilisations ; une désaturation peut signer un encombrement", true),
          C("Savoir interpréter la gazométrie et demander le mode ventilatoire", true),
          C("Proclive 30°, coussins en arrière de l'épaule, recentrage postérieur de la tête humérale (risque de subluxation antérieure)", true),
          C("Flexion d'épaule : quelques-unes à 180° (4-5) puis à 90°, sans tirer ; RE et RI main sur la tête humérale ; mains et doigts ++ (œdème)", true),
          C("MotoMed pour le MS plégique", false, "Non : risque de subluxation et de douleur neuro."),
          C("Repérer voie centrale, perfusion, oxygène, dialyse avant de mobiliser", true)] },
        { type: "choix", titre: "2 semaines plus tard, service neuro", consigne: "Coche les propositions justes.", src: "n1212", items: [
          C("Verticalisation sur table avec sangles (hanche, genoux), en contrôlant saturation et PA", true),
          C("Sangler seulement la jambe parétique pour faire transférer le poids et bouger la jambe saine", true),
          C("Associer des exercices respiratoires", true)] }] });

  push("avc-cerebelleux", { id: "p2003", nom: "Homme de 73 ans · ataxie cérébelleuse progressive (chutes à vélo)", origine: "cours", src: "n2003", desc: "Canne à l'extérieur depuis 1 an ; chutes vers l'arrière en fin de journée ; micrographie depuis 10 ans.", attrs: { polygone: true, aide: "canne", dysarthrie: true, fatigue: true } },
    { id: "cas2003", origine: "cours", src: ["n2003"], patient: "p2003", titre: "Syndrome cérébelleux : pratique simulée (M. D., 73 ans)", fiche: "Homme de 73 ans, troubles de l'équilibre depuis 2-3 ans, gestes de moins en moins précis, chutes répétées à vélo ; prescription : « trouble de l'équilibre, suspicion de Parkinson » ; le neurologue parle d'ataxie.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis tes questions dans l'ordre.", items: [
          A("Pourquoi venez-vous ? Élément déclencheur ?", 1, "Équilibre depuis 2-3 ans, gestes moins précis ; chutes à vélo répétées."),
          A("Que vous a dit le neurologue ? Examens ?", 1, "Ataxie, cervelet impliqué ; IRM, EMG, PET-scan."),
          A("Chutes : fréquence, direction, moment, relevé ?", 1, "Parfois, vers l'arrière, en fin de journée (attention) ; se relève seul, sans gravité."),
          A("Aide technique ?", 1, "Canne depuis 1 an, seulement à l'extérieur."),
          A("Lieu de vie, aides ?", 1, "Chambre à l'étage avec monte-escalier, rampe ; aide-ménagère ; l'épouse fait les courses ; se lave seul."),
          A("Fatigue, sommeil ?", 1, "Très fatigué dès qu'il doit se concentrer sur plusieurs choses (double tâche) ; dort bien."),
          A("Autres professionnels ?", 1, "Logopède (parole, respiration), ophtalmologue, neurologue ; ancienne kiné vestibulaire."),
          A("Écriture, déglutition ?", 2, "N'écrit plus bien depuis 10 ans (micrographie) ; pas de trouble de déglutition."),
          A("Objectifs ?", 1, "Plus d'équilibre, une marche plus souple ; se sent en insécurité, moins attentif.")] },
        { type: "choix", titre: "Raisonnement", consigne: "Coche les propositions justes.", src: "n2003", items: [
          C("Réponses brèves : personnalité ou dysarthrie liée au syndrome ? À investiguer", true),
          C("La micrographie et la prescription imposent de garder Parkinson dans le diagnostic différentiel", true),
          C("Chutes en fin de journée : intégrer la fatigue attentionnelle et la double tâche au bilan", true),
          C("Inutile d'interroger l'aménagement du domicile", false, "Monte-escalier, rampe, salle de bain : essentiel pour le risque de chute.")] }] });

  push("achille", { id: "pach30", nom: "Homme de 30 ans · tendinopathie achilléenne droite chronique (> 6 mois)", origine: "cours", src: "o1912", desc: "Football et course loisir ; éducateur aux horaires variables ; fatigue 8/10.", attrs: { fatigue: true, douleurs: [{ zone: "talonD", type: "mecanique" }] } },
    { id: "casach30", origine: "cours", src: ["o1912"], patient: "pach30", titre: "Tendinopathie achilléenne chronique chez un footballeur (30 ans) – CR 19/12/2024", fiche: "Homme de 30 ans (185 cm, 90 kg), football et course loisir, tendinopathie achilléenne droite depuis plus de 6 mois ; veut profiter de la pause estivale.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis tes questions dans l'ordre.", items: [
          A("Quand avez-vous mal ?", 1, "Matchs et entraînements, pire après l'effort, parfois au repos ; raideur matinale qui passe après 20 pas ; parfois la nuit."),
          A("Antécédents ?", 1, "Lombalgies récidivantes (chiropraxie tous les 3 mois) ; entorse de cheville droite il y a plus d'1 an (déficit de flexion dorsale) ; semelles pour pieds plats abandonnées."),
          A("Hygiène de vie ?", 1, "Alcool régulier, sommeil insuffisant (fatigue 8/10), hydratation insuffisante, stress travail-famille."),
          A("Métier ?", 1, "Éducateur spécialisé, horaires variables (nuits)."),
          A("Objectif ?", 1, "Être soulagé avant la reprise.")] },
        { type: "lecture", titre: "Bilans du cours", html: `<ul><li><b>Constat</b> : appui préférentiel à droite, shift du bassin vers la droite, instabilité lombo-pelvienne en charge.</li><li><b>Douleur</b> : dans le tendon ; triade positive (palpation, étirement, contraction isométrique) ; escaliers en descente.</li><li><b>Articulaire</b> : déficit de flexion dorsale droite (test mur-genou).</li><li><b>Musculaire</b> : triceps symétrique ; moyen et grand fessiers droits faibles (signe de Renne), adducteurs gauches modérément faibles ; dynamomètre possible.</li><li><b>Fonctionnel</b> : instabilité et proprioception de la cheville droite altérées.</li></ul>` },
        { type: "choix", titre: "Raisonnement", consigne: "Coche les propositions justes.", src: "o1912", items: [
          C("Surcharge mécanique par appui à droite et déséquilibre musculaire", true),
          C("Instabilité lombo-pelvienne et faiblesse des fessiers à intégrer au traitement", true),
          C("Les facteurs de vie (sommeil, alcool, stress) comptent dans la récupération", true),
          C("Le triceps étant symétrique, la cheville n'est pas en cause", false, "Déficit de flexion dorsale et instabilité de cheville.")] }] });

  // ===== Cas des notes de Lise (OTR 2023-24) =====
  M.SRC.liseO = { t: "Notes MSP OTR de Lise (2023-24) : opération du genou (09/11), ménisque (11/04), instabilité d'épaule (18/04), SLAP + LLI (21-28/03), déchirure des IJ (19/10), fracture de clavicule (28/09)", k: "Notes d'une étudiante (année antérieure)", f: L4 + "B › Notes de cours MSP de Lise (annee anterieure)" };
  const sc = (q, ok, why) => C(q, ok, why);
  push("genou-bloc3", { id: "pmpfl", nom: "Patiente opérée · reconstruction du LFPM + transposition de la TTA", origine: "cours", src: "liseO", desc: "Sait déjà transférer le poids du corps ; sidération du quadriceps.", attrs: { cicatrices: [{ zone: "genouD", recent: true }], attelleGenou: "D" } },
    { id: "casmpfl", origine: "cours", src: ["liseO"], patient: "pmpfl", titre: "Genou opéré : ligament fémoro-patellaire médial + transposition de TTA (Lise, 09/11/2023)", fiche: "Patiente opérée d'une reconstruction du LFPM et d'une transposition de la tubérosité tibiale antérieure ; elle sait déjà transférer son poids.",
      etapes: [{ type: "choix", titre: "Progression des exercices", consigne: "Coche les propositions justes.", src: "liseO", items: [
        sc("Exercices progressifs, pas régressifs : on peut la mettre directement debout", true),
        sc("Balancer droite-gauche en décharge, sans appui des pieds", false, "Ne sert à rien."),
        sc("Continuer à lever la sidération du quadriceps", true),
        sc("Donner un appui (table, mains), élargir la base, objectiver avec des balances", true),
        sc("Passage du pas avec bâton (attaque talon), skateboard avant-arrière", true),
        sc("Squats variés (complet, demi, sumo, gainé, avec pads) pour reprogrammer un mouvement non douloureux ; glide à l'élastique si cela soulage", true)] }] });
  push("genou-bloc3", { id: "pmen", nom: "Patient · suspicion de lésion méniscale non opérée", origine: "cours", src: "liseO", desc: "Douleur en charge, au pivot.", attrs: { douleurs: [{ zone: "genouD", type: "mecanique" }] } },
    { id: "casmen", origine: "cours", src: ["liseO"], patient: "pmen", titre: "Suspicion de lésion méniscale (Lise, 11/04/2024)", fiche: "Patient avec une suspicion de lésion méniscale, non opérée.",
      etapes: [{ type: "choix", titre: "Bilans et traitement", consigne: "Coche les propositions justes.", src: "liseO", items: [
        sc("Douleur 7-10 (high, irritable) → protéger, hands on, décharge", true),
        sc("Douleur 4-6 (moderate) → idéal pour les exercices", true),
        sc("Douleur 0-3 (low) → augmenter la charge et la stabilité", true),
        sc("Rechercher l'œdème, puis UN test en charge : Thessaly ou duck walk", true),
        sc("Manœuvres d'hyperextension et d'hyperflexion (Papalia)", true),
        sc("Encourager les sports de pivot pendant la phase douloureuse", false, "Éducation : pas de pivot ; la chirurgie dépend des attentes et du degré de lésion.")] }] });
  push("epaule-luxation", { id: "pinst", nom: "Sportif hyperlaxe · douleur d'épaule en charge", origine: "cours", src: "liseO", desc: "Pas gêné dans les AVJ.", attrs: { douleurs: [{ zone: "epauleD", type: "mecanique" }] } },
    { id: "casinst", origine: "cours", src: ["liseO"], patient: "pinst", titre: "Instabilité d'épaule chez un sportif hyperlaxe (Lise, 18/04/2024)", fiche: "Sportif hyperlaxe, douleur d'épaule surtout en charge, sans gêne dans les AVJ.",
      etapes: [{ type: "choix", titre: "Raisonnement", consigne: "Coche les propositions justes.", src: "liseO", items: [
        sc("1re question de Papalia : « Pourriez-vous expliquer les raisons qui vous amènent ? » puis resynthétiser", true),
        sc("Hypothèses : instabilité (hyperlaxe), coiffe (surcharge), surentraînement, conflit, SLAP", true),
        sc("Pas de gêne aux AVJ → on teste directement en charge et en excentrique", true),
        sc("Arc douloureux : le patient copie le geste du kiné, plus fort, plus vite ou chargé si besoin", true),
        sc("Conflit sous-acromial validé par Neer 1, Hawkins et Jobe positifs avec douleur antéro-externe", true),
        sc("Le repos est le traitement principal", false, "L'exercice soigne ; le repos est seulement antalgique.")] }] });
  push("epaule-cools", { id: "pslap", nom: "Patient · douleur d'épaule (SLAP suspecté) + entorse du LLI", origine: "cours", src: "liseO", desc: "Cas travaillé avec l'algorithme de Cools.", attrs: { douleurs: [{ zone: "epauleD", type: "mecanique" }, { zone: "genouD", type: "mecanique" }] } },
    { id: "casslap", origine: "cours", src: ["liseO", "pap"], patient: "pslap", titre: "SLAP et algorithme de Cools (+ entorse du LLI) (Lise, 21-28/03/2024)", fiche: "Douleur d'épaule à catégoriser avec l'algorithme de Cools ; entorse du LLI du genou associée.",
      etapes: [{ type: "choix", titre: "Algorithme de Cools", consigne: "Coche les propositions justes.", src: "liseO", items: [
        sc("Le conflit mécanique de Neer devient un conflit CINÉMATIQUE", true),
        sc("Dépistage : Jobe, Neer, Neer II (en RE), Hawkins, force en RE, arc douloureux", true),
        sc("Si on modifie le symptôme, le problème est fonctionnel (mouvement déprogrammé) plutôt que structurel", true),
        sc("Conflit externe = sous-acromial ; interne = gléno-huméral (postérieur, ou antérieur rare)", true),
        sc("Post-op, épaule gelée ou traumatique entrent dans l'algorithme", false, "Ils en sortent : on a loupé autre chose."),
        sc("L'algorithme est fiable à 100 %", false, "Il aide à décider, sans être infaillible.")] }] });
  push("dechirure", { id: "pij", nom: "Footballeur · déchirure du biceps fémoral droit (3,5 cm), J4", origine: "cours", src: "liseO", desc: "« Clac » en sautant ; boiterie ; contractures fréquentes à droite.", attrs: { douleurs: [{ zone: "cuisseD", type: "mecanique" }] } },
    { id: "casij", origine: "cours", src: ["liseO"], patient: "pij", titre: "Déchirure des IJ chez un footballeur (Lise, 19/10/2023)", fiche: "Footballeur (arrière droit, D3), « clac » en sautant pour intercepter un ballon il y a 4 jours ; écho : 3,5 cm sur le biceps fémoral.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis tes questions dans l'ordre.", items: [
          A("Que s'est-il passé ?", 1, "Saut, « clac », incapable de marcher pendant 2 h puis boiterie ; douleur au tiers supérieur des IJ."),
          A("Premiers soins, examens, médicaments ?", 1, "Glace + massage ; écho à 24 h : 3,5 cm sur le biceps fémoral ; aucun médicament."),
          A("Antécédents, récidive ?", 1, "Déchirure ligamentaire de cheville gauche ; contractures droites fréquentes depuis 4-5 ans."),
          A("Sport, préparation ?", 1, "3 entraînements + 1 match ; moins de renforcement que d'habitude ; match sur synthétique (entraînement sur herbe)."),
          A("Semelles ?", 2, "Oui (jambe plus courte) mais pas au foot."),
          A("Hygiène de vie ?", 1, "Alcool chaque semaine ; fatigué la semaine précédente."),
          A("Travail, conduite ?", 1, "Debout au travail : douleur (drapeau bleu) ; conduite impossible.")] },
        { type: "choix", titre: "Raisonnement", consigne: "Coche les propositions justes.", src: "liseO", items: [
          sc("Facteurs : fatigue, préparation allégée, changement de surface, contractures récidivantes", true),
          sc("Le massage précoce de la zone est recommandé", false, "Le CR du 07/11/2024 met en garde contre le massage précoce (risque de myosite calcifiante)."),
          sc("Douleur soulagée couché, jambe levée et au froid", true)] }] });
  push("anam-papalia", { id: "pclav", nom: "Ingénieur droitier · fracture de la clavicule gauche, 3-4 semaines", origine: "cours", src: "liseO", desc: "Tout est douloureux ; conduite difficile (charnière cervico-dorsale).", attrs: { echarpe: "G", douleurs: [{ zone: "epauleG", type: "mecanique" }, { zone: "cou", type: "mecanique" }] } },
    { id: "casclav", origine: "cours", src: ["liseO"], patient: "pclav", titre: "Fracture de clavicule à 3-4 semaines (Lise, 28/09/2023)", fiche: "Homme droitier, ingénieur, fracture de la clavicule gauche sur chute, vu à 3-4 semaines ; vient de reprendre le travail.",
      etapes: [
        { type: "anamnese", titre: "Anamnèse", consigne: "Choisis tes questions dans l'ordre.", items: [
          A("Lésions associées ? Antécédents d'épaule ?", 1, "Aucune lésion qui change la prise en charge ; aucun antécédent."),
          A("Latéralité, côté atteint ?", 1, "Droitier, fracture à gauche."),
          A("Gêne fonctionnelle ?", 1, "Habillage, sommeil, matin : tout est douloureux."),
          A("Médicaments ?", 1, "Antidouleurs arrêtés ; anti-inflammatoires sans effet."),
          A("Travail, loisirs ?", 1, "Ingénieur, 50 % sédentaire ; VTT, paddle, course."),
          A("Conduite ?", 1, "Très difficile : rotations de tête (charnière cervico-dorsale) et maintien du volant."),
          A("Examens à venir ?", 1, "Radio de contrôle la semaine suivante (consolidation)."),
          A("Moral ?", 2, "Bon, très motivé.")] },
        { type: "choix", titre: "Bilans", consigne: "Coche les propositions justes.", src: "liseO", items: [
          sc("Constat : écharpe, attelle, faciès et attitude antalgiques, position vicieuse", true),
          sc("Bilanter aussi le rachis cervico-dorsal (conduite douloureuse)", true),
          sc("Forcer la mobilité avant la radio de consolidation", false, "Respecter la consolidation : attendre la radio de contrôle.")] }] });

  (M.REMARQUES ||= []).push(
    { g: "Prudence", t: "« Produits laitiers pro-inflammatoires » (pratique simulée 21/11/2024)", s: "o2111", txt: "La question posée dans la pratique simulée affirme que les produits laitiers sont pro-inflammatoires : ce n'est pas démontré (les méta-analyses ne montrent pas d'effet pro-inflammatoire chez l'adulte sain). Ne le cite pas comme un fait à l'examen." },
    { g: "Prudence", t: "SIJ : chiffres de Se/Sp à relativiser", s: "sijmk", txt: "Les diapos donnent des fourchettes larges (sacral thrust Sp 0,29-1,00 ; compression Se 0,3-0,7) et des pourcentages entre parenthèses à côté des noms des tests (90 %, 70 %) qui ne sont pas expliqués : demande au professeur ce qu'ils représentent avant de les citer." },
    { g: "Prudence", t: "Stork test et Downing : prudence", s: "sijmk", txt: "Le cours dit lui-même que le Stork test n'est pas référencé comme tel dans la littérature et que le Downing n'a aucune validité utilisé seul : présente-les comme des tests du cours, à combiner, pas comme des preuves." }
  );
})();
