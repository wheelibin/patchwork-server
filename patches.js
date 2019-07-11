const patch1 = `// ++++++ //
// VOICES //
// ++++++ //

// Bangin' techno shit
DRUMS: 
  - ADE-32 (OUT:1) t> BIA (Trig)
  - ADE-32 (OUT:3) >> Maths (Ch3 IN)
  - ADE-32 (OUT:5) >> Maths (Ch2 IN)  
  - ADE-32 (OUT:6) t> Maths (Ch1 TRIG)
  - Maths (Ch1 Unity) >> Quad VCA (CV 2)
  - Maths (Ch2) >> BIA (Harm)
  - Maths (Ch3) >> BIA (Attack)  
  - Mother-32 (NOISE) -> Quad VCA (IN 2)

// Gnarly acid bass
VOICE 1:	
  - ADE-32 (OUT:2) p> Mother-32 (VCO 1V/OCT)  
  - ADE-32 (OUT:4) t> Maths (Ch4 TRIG)  
  - ADE-32 (OUT:7) >> Mother-32 (VCF CUTOFF)
  - Maths (Ch2) >> Maths (Ch4 FALL)
  - Maths (Ch2) >> Mother-32 (VCF RES.)
  - Maths (Ch4 Unity) >> LXd (12db CV)
  - Disting-Mk4 (A) -> Quad VCA (IN 3)
  - LXd (12db Out) -> Disting-Mk4 (X)  
  - Mother-32 (VCO PULSE) -> LXd (12db In)
  - Mother-32 (VCA) -> AUDIO INTERFACE (Ch1)
  - Quad VCA (4/MIX) -> AUDIO INTERFACE (Ch2)


// +++++++++++++++++ //
// MODULE PARAMETERS //
// +++++++++++++++++ //
* Mother-32:
  // Patchwork RACK_ROW option
  | RACK_ROW = 1 
  | Pulse Width = 1
  | VCO Mod Amount = 2.1
  | Cutoff = 4

* ADE-32:
  | RACK_ROW = 2
  | Ch1 Type = PULSE
  | Ch1 Div = 1
  | Ch1 Offset = 0
  | Ch1 Option = false	
  | Ch2 Type = ARPS
  | Ch2 Div = 1
  | Ch2 Offset = 1/4
  | Ch2 Loop/Arp = 3  
  | Ch3 Type = LFO RMP
  | Ch3 Div = 2
  | Ch3 Offset = 1/4
  | Ch4 Type = LOOPS
  | Ch4 Div = 1
  | Ch4 Offset = 1/4
  | Ch4 Loop/Arp = 2
  | Ch5 Type = LFO RMP
  | Ch5 Div = 16
  | Ch5 Offset = 0
  | Ch6 Type = PULSE
  | Ch6 Div = 2
  | Ch6 Offset = 0
  | Ch7 Type = LFO TRI
  | Ch7 Div = 2
  | Ch7 Offset = 0  

* Maths:
  | RACK_ROW = 2
  | Ch1 Rise = 0
  | Ch1 Fall = 72%
  | Ch1 Response = EXP
  | Ch2 = 1pm
  | Ch3 = 1pm
  | Ch4 Rise = 0
  | Ch4 Fall = 76%
  | Ch4 Response = EXP
  
* BIA: 
  | RACK_ROW = 2
  | Pitch = 25%
  | Spread = 0
  | Harmonics = 0
  | Morph = 0
  | Fold = 0
  | Attack = 25%
  | Decay = 25%
  | SLM = Liquid
  | BAT = Alto
  
* Disting-Mk4: RACK_ROW = 2 | Program = B4 | ClockSpeed = 1/4  

* LXd: RACK_ROW = 2

* Quad VCA:
  | RACK_ROW = 2
  | Ch2 CV = 100%
  | Ch2 Boost = Off
  | Ch2 Response = 60%
  | Ch2 Level = 0
  | Ch3 CV = 0
  | Ch3 Boost = Off
  | Ch3 Level = 75%
  | Ch4 CV = 0
  | Ch4 Boost = Off
  | Ch4 Level = 100%
`;

const mathsBouncingBall = `BouncingBall:
  - A Clock Source (CLOCK OUT) -> Maths (Ch1 TRIG)
	- Maths (Ch1) -> Maths (Ch4 BOTH) 
	- Maths (Ch1 EOR) -> Maths (Ch4 CYCLE)
	- Maths (Ch4) -> VCA or LPG (CV IN)`;

const basicKrell = `Basic Krell:
	- VCO (OUT) -> VCA (IN)	
	- Maths (Ch4 Unity) >> VCA (CV IN)
	- Maths (Ch4 EOC) t> Random Source (Trigger)
	- Random Source (Pitch CV) p> VCO (1V/OCT)
	- Random Source (Pitch CV) p> Maths (Ch4 BOTH)
	

* Maths:

* Random Source:

* VCO:

* VCA:`;

const generative = `COLLISION FRAGMENTS:
-	ADE-32 (OUT:1) g> BIA (Trig)
-	ADE-32 (OUT:2) g> Maths (Ch1 CYCLE)
- ADE-32 (OUT:3) >> uO_C (TRIG 4)
- ADE-32 (OUT:4) >> Plaits (MORPH)
- ADE-32 (OUT:5) >> Plaits (TIMBRE)
- ADE-32 (OUT:6) >> uO_C (CV 2)
- ADE-32 (OUT:7) >> uO_C (CV 3)
- ADE-32 (OUT:8) >> uO_C (CV 1)
- Maths (Ch1 EOR) g> Mother-32 (GATE)
- Maths (Ch2) >> Mother-32 (LFO RATE)
- Maths (Ch3) >> Plaits (HARMO)
- Maths (Ch4) >> Quad VCA (CV 2)
- Maths (Ch4 Unity) >> LXd (12db CV)
- Maths (Ch4 EOC) t> uO_C (TRIG 1)
- Maths (Ch4 EOC) t> uO_C (TRIG 3)
- uO_C (OUT 1) p> Mother-32 (MULT)
- uO_C (OUT 2) p> BIA (Pitch)
- uO_C (OUT 3) p> Mother-32 (VCO 1V/OCT)
- BIA (Out) -> Quad VCA (IN 3)
- Plaits (OUT) -> LXd (12db In)
- Plaits (AUX) -> Quad VCA (IN 2)
- LXd (12db Out) -> Disting-Mk4 (X)
- Disting-Mk4 (A) -> Quad VCA (IN 1)
- Quad VCA (4/MIX) -> AUDIO INTERFACE (IN 2)
- Mother-32 (VCA) -> AUDIO INTERFACE (IN 1)
- Mother-32 (LFO TRI) >> Disting-Mk4 (Z)
- Mother-32 (LFO SQ) >> BIA (B/A/T)
- Mother-32 (VC MIX) >> Disting-Mk4 (Y)
- Mother-32 (MULT 1) p> Plaits (V/OCT)
- Mother-32 (MULT 2) p> Maths (Ch4 BOTH)
- Mother-32 (MULT 2) p> Plaits (MODEL)
- Mother-32 (MULT 2) p> Maths (Ch1 BOTH)


// ----------------- //
// MODULE PARAMETERS //
// ----------------- //

* Mother-32:
// You can control the row using this special parameter
| RACK_ROW = 1 
// Standard module params...
| Pulse Width = 1
| VCO Mod Amount = 2.1
| Cutoff = 4

* ADE-32:
| RACK_ROW = 2
| Ch1 Type = PULSE
| Ch1 Div = 1
| Ch1 Offset = 0
| Ch1 Option = false	
| Ch2 Type = ARPS
| Ch2 Div = 1
| Ch2 Offset = 1/4
| Ch2 Loop/Arp = 3  
| Ch3 Type = LFO RMP
| Ch3 Div = 2
| Ch3 Offset = 1/4
| Ch4 Type = LOOPS
| Ch4 Div = 1
| Ch4 Offset = 1/4
| Ch4 Loop/Arp = 2
| Ch5 Type = LFO RMP
| Ch5 Div = 16
| Ch5 Offset = 0
| Ch6 Type = PULSE
| Ch6 Div = 2
| Ch6 Offset = 0
| Ch7 Type = LFO TRI
| Ch7 Div = 2
| Ch7 Offset = 0  

* Maths:
| RACK_ROW = 2
| Ch1 Rise = 0
| Ch1 Fall = 72%
| Ch1 Response = EXP
| Ch2 = 1pm
| Ch3 = 1pm
| Ch4 Rise = 0
| Ch4 Fall = 76%
| Ch4 Response = EXP

* uO_C:
| RACK_ROW = 2

* BIA: 
| RACK_ROW = 2
| Pitch = 25%
| Spread = 0
| Harmonics = 0
| Morph = 0
| Fold = 0
| Attack = 25%
| Decay = 25%
| SLM = Liquid
| BAT = Alto

* Plaits:
| RACK_ROW = 2

* LXd: RACK_ROW = 2

* Disting-Mk4: RACK_ROW = 2 | Program = B4 | ClockSpeed = 1/4  

* Quad VCA:
| RACK_ROW = 2
| Ch2 CV = 100%
| Ch2 Boost = Off
| Ch2 Response = 60%
| Ch2 Level = 0
| Ch3 CV = 0
| Ch3 Boost = Off
| Ch3 Level = 75%
| Ch4 CV = 0
| Ch4 Boost = Off
| Ch4 Level = 100%


`;

module.exports = { patch1, basicKrell, mathsBouncingBall, generative };
