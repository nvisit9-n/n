export interface PreTestModule {
  id: string;
  moduleNumber: number;
  titleNe: string;
  titleEn: string;
  totalQuestions: number;
  marksPerQuestion: number;
  totalMarks: number;
  syllabusScopeNe: string[];
}

export interface PreTestLevelConfig {
  levelId: 'level-4' | 'level-5';
  levelNumber: 4 | 5;
  titleNe: string;
  titleEn: string;
  taglineNe: string;
  totalQuestions: number;
  fullMarks: number;
  passMarks: number;
  passPercentage: number;
  timeMinutes: number;
  negativeMarkingPercent: number; // 20%
  negativeMarkingDeduction: number; // 0.4
  eligibilityNe: string;
  certificateValidityYears: number;
  totalSetsAvailable: number;
  modules: PreTestModule[];
  applicableInstitutions: string[];
  statutoryBasisNe: string;
}

export const PRE_TEST_LEVEL_CONFIGS: Record<'level-4' | 'level-5', PreTestLevelConfig> = {
  'level-4': {
    levelId: 'level-4',
    levelNumber: 4,
    titleNe: 'सहायक स्तर (तह ४) एकीकृत पूर्वयोग्यता परीक्षा',
    titleEn: 'Assistant Level 4 Integrated Common Pre-Test',
    taglineNe: 'संगठित संस्थाहरू (बैंक, संस्थान, प्राधिकरण) को तह ४ का लागि एकीकृत प्रवेश परीक्षा',
    totalQuestions: 50,
    fullMarks: 100,
    passMarks: 40,
    passPercentage: 40,
    timeMinutes: 45,
    negativeMarkingPercent: 20,
    negativeMarkingDeduction: 0.4,
    eligibilityNe: 'मान्यता प्राप्त शिक्षण संस्थाबाट १०+२ (प्लस टु) वा प्रविणता प्रमाणपत्र तह वा सो सरह उत्तीर्ण।',
    certificateValidityYears: 1,
    totalSetsAvailable: 50,
    statutoryBasisNe: 'लोक सेवा आयोग संगठित संस्था कर्मचारी सेवा शर्त तथा पूर्वयोग्यता परीक्षा सञ्चालन कार्यविधि',
    applicableInstitutions: [
      'नेपाल राष्ट्र बैंक (NRB - सहायक)',
      'राष्ट्रिय वाणिज्य बैंक (RBB - सहायक / नगद)',
      'कृषि विकास बैंक (ADBL - लेखापाल / ऋण सहायक)',
      'नेपाल बैंक लिमिटेड (NBL - सहायक)',
      'कर्मचारी सञ्चय कोष (EPF - सहायक)',
      'नागरिक लगानी कोष (CIT - सहायक)',
      'नेपाल टेलिकम (NTC - सहायक)',
      'नेपाल विद्युत प्राधिकरण (NEA - सहायक लेखापाल / मिटर रिडर)',
      'नेपाल आयल निगम (NOC - सहायक)',
      'नेपाल नागरिक उड्डयन प्राधिकरण (CAAN - सहायक)'
    ],
    modules: [
      {
        id: 'mod-1',
        moduleNumber: 1,
        titleNe: 'नेपालको भूगोल, इतिहास, संस्कृति र सम्पदा',
        titleEn: 'Geography, History, Culture & Heritage of Nepal',
        totalQuestions: 8,
        marksPerQuestion: 2,
        totalMarks: 16,
        syllabusScopeNe: [
          'नेपालको भौगोलिक अवस्था, धरातलीय स्वरूप, नदीनाला, तालतलैया र हावापानी',
          'नेपालको प्राचीन, मध्यकालीन र आधुनिक इतिहास (एकीकरण अभियान देखि संघीय लोकतान्त्रिक गणतन्त्र)',
          'धार्मिक, सांस्कृतिक सम्पदा, विश्व सम्पदा सूची, भाषा, साहित्य र चाडपर्वहरू'
        ]
      },
      {
        id: 'mod-2',
        moduleNumber: 2,
        titleNe: 'संविधान, कानुन, बैंकिङ ऐन र सुशासन',
        titleEn: 'Constitution, Governance, Banking Acts & Regulation',
        totalQuestions: 10,
        marksPerQuestion: 2,
        totalMarks: 20,
        syllabusScopeNe: [
          'नेपालको संविधान (मौलिक हक, राज्यका निर्देशक सिद्धान्त, संघीय आर्थिक कार्यप्रणाली)',
          'नेपाल राष्ट्र बैंक ऐन २०५८ र बैंक तथा वित्तीय संस्था सम्बन्धी ऐन (BAFIA) २०७३',
          'बैंकिङ कसूर तथा सजाय ऐन २०६४ र सम्पत्ति शुद्धीकरण (AML/CFT) निवारण ऐन २०६४'
        ]
      },
      {
        id: 'mod-3',
        moduleNumber: 3,
        titleNe: 'अर्थशास्त्र, मौद्रिक प्रणाली, बैंकिङ तथा सार्वजनिक संस्थान',
        titleEn: 'Economics, Monetary System, Banking & Public Enterprises',
        totalQuestions: 10,
        marksPerQuestion: 2,
        totalMarks: 20,
        syllabusScopeNe: [
          'मौद्रिक नीति, खुला बजार कारोबार, ब्याजदर कोरिडोर, CRR र SLR को अवधारणा',
          'निक्षेप संकलन, कर्जा प्रवाह, बैंकिङ जोखिमहरू (Credit, Market, Operational Risk)',
          'नेपालमा सार्वजनिक संस्थानहरूको भूमिका, नाफा-नोक्सान स्थिति र निजीकरण/सुदृढीकरण'
        ]
      },
      {
        id: 'mod-4',
        moduleNumber: 4,
        titleNe: 'लेखाविधि, वित्तीय व्यवस्थापन र आन्तरिक नियन्त्रण',
        titleEn: 'Accounting Principles, Financial Management & Auditing',
        totalQuestions: 6,
        marksPerQuestion: 2,
        totalMarks: 12,
        syllabusScopeNe: [
          'दोहोरो लेखा प्रणालीका सिद्धान्तहरू, गोश्वारा भौचर, खाता, सन्तुलन परीक्षण',
          'बैंक हिसाब मिलान विवरण (BRS), ह्रासकट्टी (Depreciation), अन्तिम हिसाब',
          'आन्तरिक नियन्त्रण प्रणाली र सरकारी तथा व्यावसायिक लेखापरीक्षण'
        ]
      },
      {
        id: 'mod-5',
        moduleNumber: 5,
        titleNe: 'आधारभूत गणित तथा तथ्याङ्क विश्लेषण',
        titleEn: 'Applied Mathematics & Data Interpretation',
        totalQuestions: 6,
        marksPerQuestion: 2,
        totalMarks: 12,
        syllabusScopeNe: [
          'ऐकिक नियम, प्रतिशत, नाफा-नोक्सान, छुट, कमिसन',
          'साधारण ब्याज, चक्रीय ब्याज, अनुपात र समानुपात',
          'औसत, समय र काम, तथ्याङ्क विश्लेषण (बार चार्ट, पाई चार्ट)'
        ]
      },
      {
        id: 'mod-6',
        moduleNumber: 6,
        titleNe: 'सूचना तथा सञ्चार प्रविधि (कम्प्युटर)',
        titleEn: 'Information & Communication Technology (ICT)',
        totalQuestions: 4,
        marksPerQuestion: 2,
        totalMarks: 8,
        syllabusScopeNe: [
          'Computer Hardware, Software, Operating Systems',
          'Word Processing, Spreadsheet (Excel), Presentation, Database Management',
          'Internet, Cyber Security, Digital Banking & Payment Systems (QR, RTGS, IPS)'
        ]
      },
      {
        id: 'mod-7',
        moduleNumber: 7,
        titleNe: 'कार्यालय व्यवस्थापन तथा समसामयिक मामिला',
        titleEn: 'Office Management & Current Affairs',
        totalQuestions: 4,
        marksPerQuestion: 2,
        totalMarks: 8,
        syllabusScopeNe: [
          'दर्ता, चलानी, फाइलिङ, पत्रव्यवहार, टिप्पणी लेखन र अभिलेख व्यवस्थापन',
          'पछिल्लो ६ महिनाका राष्ट्रिय तथा अन्तर्राष्ट्रिय समसामयिक आर्थिक र बैंकिङ घटनाक्रमहरू'
        ]
      },
      {
        id: 'mod-8',
        moduleNumber: 8,
        titleNe: 'भाषा दक्षता परीक्षण (English & Nepali)',
        titleEn: 'Language Comprehension (English & Nepali)',
        totalQuestions: 2,
        marksPerQuestion: 2,
        totalMarks: 4,
        syllabusScopeNe: [
          'English Vocabulary, Grammar, Prepositions, Tense & Voice (१ प्रश्न)',
          'नेपाली व्याकरण, शब्दार्थ, शुद्ध-अशुद्ध र पदवर्ग (१ प्रश्न)'
        ]
      }
    ]
  },
  'level-5': {
    levelId: 'level-5',
    levelNumber: 5,
    titleNe: 'वरिष्ठ सहायक / अधिकृत स्तर (तह ५) एकीकृत पूर्वयोग्यता परीक्षा',
    titleEn: 'Senior Assistant Level 5 Integrated Common Pre-Test',
    taglineNe: 'संगठित संस्थाहरूको तह ५ (वरिष्ठ सहायक / व्यवसाय सहायक) प्रवेश परीक्षा',
    totalQuestions: 50,
    fullMarks: 100,
    passMarks: 40,
    passPercentage: 40,
    timeMinutes: 45,
    negativeMarkingPercent: 20,
    negativeMarkingDeduction: 0.4,
    eligibilityNe: 'मान्यता प्राप्त विश्वविद्यालयबाट वाणिज्य, व्यवस्थापन वा अर्थशास्त्रमा स्नातक तह (Bachelor Degree) उत्तीर्ण।',
    certificateValidityYears: 1,
    totalSetsAvailable: 25,
    statutoryBasisNe: 'लोक सेवा आयोग संगठित संस्था कर्मचारी सेवा शर्त तथा अधिकृत स्तर पूर्वयोग्यता कार्यविधि',
    applicableInstitutions: [
      'राष्ट्रिय वाणिज्य बैंक (RBB - वरिष्ठ सहायक)',
      'कृषि विकास बैंक (ADBL - व्यवसाय सहायक)',
      'नेपाल बैंक लिमिटेड (NBL - वरिष्ठ सहायक)',
      'कर्मचारी सञ्चय कोष (EPF - वरिष्ठ सहायक)',
      'नागरिक लगानी कोष (CIT - वरिष्ठ सहायक)',
      'नेपाल धितोपत्र बोर्ड (SEBON - सहायक अधिकृत)',
      'नेपाल बीमा प्राधिकरण (NIA - सहायक अधिकृत)'
    ],
    modules: [
      {
        id: 'mod-5-1',
        moduleNumber: 1,
        titleNe: 'शासकीय प्रबन्ध, कानुन र बैंकिङ नियमन',
        titleEn: 'Governance, Legal Framework & Banking Regulation',
        totalQuestions: 15,
        marksPerQuestion: 2,
        totalMarks: 30,
        syllabusScopeNe: [
          'नेपालको संविधान, BAFIA २०७३, राष्ट्र बैंक ऐन २०५८',
          'सम्पत्ति शुद्धीकरण निवारण ऐन २०६४ र बैंकिङ कसूर ऐन २०६४',
          'सार्वजनिक खरिद ऐन २०६३, सूचनाको हक र भ्रष्टाचार निवारण'
        ]
      },
      {
        id: 'mod-5-2',
        moduleNumber: 2,
        titleNe: 'समष्टिगत अर्थशास्त्र, मौद्रिक नीति र वित्त बजार',
        titleEn: 'Macroeconomics, Monetary Policy & Capital Market',
        totalQuestions: 15,
        marksPerQuestion: 2,
        totalMarks: 30,
        syllabusScopeNe: [
          'राष्ट्रिय आय, शोधनान्तर स्थिति, मुद्रास्फीति, आर्थिक वृद्धिदर',
          'धितोपत्र बजार, सेयर निष्कासन, दोस्रो बजार नियमन र ऋणपत्र',
          'नेपालको १६औँ आवधिक योजना र बजेटका प्राथमिकताहरू'
        ]
      },
      {
        id: 'mod-5-3',
        moduleNumber: 3,
        titleNe: 'उन्नत वित्तीय लेखा, लेखापरीक्षण र वित्तीय विश्लेषण',
        titleEn: 'Advanced Accounting, Auditing & Financial Ratios',
        totalQuestions: 10,
        marksPerQuestion: 2,
        totalMarks: 20,
        syllabusScopeNe: [
          'वित्तीय विवरणहरूको विश्लेषण (Financial Statement Analysis, CAMELS Framework)',
          'नेपाल वित्तीय प्रतिवेदन मान (NFRS) र आन्तरिक लेखापरीक्षण',
          'पुँजी कोष पर्याप्तता (Capital Adequacy Ratio - CAR) गणना'
        ]
      },
      {
        id: 'mod-5-4',
        moduleNumber: 4,
        titleNe: 'बौद्धिक परीक्षण, विश्लेषणात्मक सीप र व्यवस्थापन',
        titleEn: 'IQ, Analytical Reasoning & Organizational Behavior',
        totalQuestions: 10,
        marksPerQuestion: 2,
        totalMarks: 20,
        syllabusScopeNe: [
          'Analytical Reasoning, Verbal & Non-verbal Ability',
          'संगठनात्मक व्यवहार, मानव संसाधन व्यवस्थापन, उत्प्रेरणा र नेतृत्व',
          'रणनीतिक योजना तथा संकट व्यवस्थापन (Crisis Management)'
        ]
      }
    ]
  }
};

export interface PreTestPathwayStep {
  stepNumber: number;
  titleNe: string;
  descNe: string;
  statusTextNe: string;
}

export const PRE_TEST_PATHWAY_STEPS: PreTestPathwayStep[] = [
  {
    stepNumber: 1,
    titleNe: 'केन्द्रीय पूर्वयोग्यता परीक्षा (Pre-Test) तयारी',
    descNe: 'तह ४ वा तह ५ को ५० वस्तुगत बहुवैकल्पिक प्रश्नहरूको एकीकृत पाठ्यक्रम अनुसार नियमित अभ्यास गर्नुहोस्।',
    statusTextNe: 'सिकाई तथा अभ्यास'
  },
  {
    stepNumber: 2,
    titleNe: 'पूर्वयोग्यता परीक्षा उत्तीर्ण (Pre-Test Pass)',
    descNe: '४०% उत्तीर्णाङ्क (४० अङ्क) प्राप्त गरी सफल हुनुहोस्। गलत उत्तरमा २०% नेगेटिभ मार्किङ हुनेछ।',
    statusTextNe: 'न्यूनतम ४० अङ्क'
  },
  {
    stepNumber: 3,
    titleNe: 'वैध प्रमाणपत्र तथा योग्यता सूचीकरण (Certificate / Validity)',
    descNe: 'Pre-Test उत्तीर्ण भएको प्रमाणपत्र प्राप्त हुन्छ, जुन निर्धारित समयावधिसम्म (१-२ वर्ष) वैध रहन्छ।',
    statusTextNe: 'प्रमाणपत्र प्राप्त'
  },
  {
    stepNumber: 4,
    titleNe: 'संगठित संस्थाका पदपूर्तिमा आवेदन (Apply to Specific Institutions)',
    descNe: 'प्रमाणपत्रका आधारमा राष्ट्रिय वाणिज्य बैंक, कृषि विकास बैंक, नेपाल टेलिकम आदि संस्थाका पदहरूमा आवेदन दिनुहोस्।',
    statusTextNe: 'पदपूर्ति आवेदन'
  },
  {
    stepNumber: 5,
    titleNe: 'संस्थागत मुख्य लिखित परीक्षा तथा छनोट (Main Exam & Selection)',
    descNe: 'सम्बन्धित संस्थाको विशिष्टीकृत विषयगत मुख्य लिखित परीक्षा, प्रयोगात्मक परीक्षा र अन्तर्वार्तामा सहभागी भई स्थायी नियुक्ति पाउनुहोस्।',
    statusTextNe: 'अन्तिम नियुक्ति'
  }
];
