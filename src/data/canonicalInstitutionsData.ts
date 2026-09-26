export interface InstitutionLevelDetail {
  levelNumber: '3' | '4' | '5' | '6' | '7' | '8';
  levelTitleNe: string;
  levelTitleEn: string;
  postsNe: string[];
  minimumQualificationNe: string;
  requiresPreTest: boolean;
  preTestLevel?: 'Level 4' | 'Level 5';
  selectionStagesNe: string[];
  totalPhases: number;
}

export type InstitutionCategory = 
  | 'Financial Institutions'
  | 'Authorities & Utilities'
  | 'Corporations & Trading'
  | 'Regulatory Bodies'
  | 'Social Security & Funds'
  | 'Civil Service';

export const INSTITUTION_CATEGORIES: InstitutionCategory[] = [
  'Financial Institutions',
  'Authorities & Utilities',
  'Corporations & Trading',
  'Regulatory Bodies',
  'Social Security & Funds',
  'Civil Service'
];

export interface CanonicalInstitution {
  id: string;
  code: string;
  nameNe: string;
  nameEn: string;
  shortName: string;
  taglineNe: string;
  category: InstitutionCategory;
  tags: ('Banking' | 'Sangathit Sanstha' | 'Public Enterprise' | 'Lok Sewa' | 'Financial')[];
  isBanking: boolean;
  isSangathitSanstha: boolean;
  isPublicEnterprise: boolean;
  isLokSewa: boolean;
  requiresPreTest: boolean;
  preTestLevels: ('Level 4' | 'Level 5')[];
  establishedYearBS: string;
  headquartersNe: string;
  officialWebsiteUrl: string;
  officialCareersUrl: string;
  actOrCharterNe: string;
  descriptionNe: string;
  keyExamFocusNe: string[];
  levels: InstitutionLevelDetail[];
  activeVacanciesCount: number;
  totalQuestionsInBank: number;
  syllabusVersion: string;
}

export const CANONICAL_INSTITUTIONS: CanonicalInstitution[] = [
  {
    id: 'nrb',
    code: 'NRB',
    nameNe: 'नेपाल राष्ट्र बैंक',
    nameEn: 'Nepal Rastra Bank (Central Bank of Nepal)',
    shortName: 'NRB',
    taglineNe: 'नेपालको केन्द्रीय बैंक - मौद्रिक तथा वित्तीय प्रणालीको नियामक',
    category: 'Financial Institutions',
    tags: ['Banking', 'Sangathit Sanstha', 'Financial'],
    isBanking: true,
    isSangathitSanstha: true,
    isPublicEnterprise: false, // Statutory central bank
    isLokSewa: false,
    requiresPreTest: true,
    preTestLevels: ['Level 4', 'Level 5'],
    establishedYearBS: '२०१३ वैशाख १४',
    headquartersNe: 'बालुवाटार, काठमाडौँ',
    officialWebsiteUrl: 'https://www.nrb.org.np',
    officialCareersUrl: 'https://www.nrb.org.np/category/career/',
    actOrCharterNe: 'नेपाल राष्ट्र बैंक ऐन, २०५८',
    descriptionNe: 'नेपाल राष्ट्र बैंक ऐन २०५८ बमोजिम स्थापित स्वशासित तथा अविच्छिन्न उत्तराधिकारवाला केन्द्रीय बैंक। यसले मौद्रिक नीति, विदेशी विनिमय व्यवस्थापन, नोट निष्कासन र बैंक तथा वित्तीय संस्थाहरूको नियमन/सुपरीवेक्षण गर्दछ।',
    keyExamFocusNe: [
      'नेपाल राष्ट्र बैंक ऐन २०५८ का सम्पूर्ण परिच्छेदहरू र दफाहरू',
      'मौद्रिक नीति तर्जुमा, उपकरणहरू (CRR, SLR, Policy Rate, Repo/Reverse Repo)',
      'एकीकृत निर्देशन (Unified Directives १ देखि २१)',
      'विदेशी विनिमय सञ्चिति, शोधनान्तर स्थिति (BOP), विप्रेषण र बैंकिङ सुशासन'
    ],
    levels: [
      {
        levelNumber: '4',
        levelTitleNe: 'सहायक (प्रशासन) - तह ४',
        levelTitleEn: 'Assistant (Administration) - Level 4',
        postsNe: ['सहायक (प्रशासन)', 'सहायक (लेखा)'],
        minimumQualificationNe: 'मान्यता प्राप्त शिक्षण संस्थाबाट १०+२ (प्लस टु) वा सो सरह उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 4',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा (MCQs)', 'दोस्रो चरण: लिखित परीक्षा (२ पत्र)', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      },
      {
        levelNumber: '6',
        levelTitleNe: 'सहायक निर्देशक (अधिकृत तृतीय) - तह ६',
        levelTitleEn: 'Assistant Director (Officer Level 3) - Level 6',
        postsNe: ['सहायक निर्देशक (प्रशासन)', 'सहायक निर्देशक (लेखा/वित्त)', 'सहायक निर्देशक (IT)'],
        minimumQualificationNe: 'अर्थशास्त्र, वाणिज्य, व्यवस्थापन वा जनप्रशासनमा स्नातकोत्तर (Master Degree) उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 5',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा', 'दोस्रो चरण: विषयगत लिखित परीक्षा', 'तेस्रो चरण: प्रयोगात्मक तथा अन्तर्वार्ता'],
        totalPhases: 3
      }
    ],
    activeVacanciesCount: 2,
    totalQuestionsInBank: 1250,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  },
  {
    id: 'rbb',
    code: 'RBB',
    nameNe: 'राष्ट्रिय वाणिज्य बैंक लिमिटेड',
    nameEn: 'Rastriya Banijya Bank Limited',
    shortName: 'RBB',
    taglineNe: 'नेपाल सरकारको पूर्ण स्वामित्वमा रहेको देशकै अग्रणी वाणिज्य बैंक',
    category: 'Financial Institutions',
    tags: ['Banking', 'Sangathit Sanstha', 'Public Enterprise', 'Financial'],
    isBanking: true,
    isSangathitSanstha: true,
    isPublicEnterprise: true,
    isLokSewa: false,
    requiresPreTest: true,
    preTestLevels: ['Level 4', 'Level 5'],
    establishedYearBS: '२०२२ माघ १०',
    headquartersNe: 'सिंहदरबार प्लाजा, काठमाडौँ',
    officialWebsiteUrl: 'https://www.rbb.com.np',
    officialCareersUrl: 'https://www.rbb.com.np/career',
    actOrCharterNe: 'कम्पनी ऐन २०६३ तथा बैंक तथा वित्तीय संस्था सम्बन्धी ऐन (BAFIA) २०७३',
    descriptionNe: 'नेपाल सरकारको पूर्ण स्वामित्वमा वि.सं. २०२२ मा स्थापित नेपालको सबैभन्दा ठूलो वाणिज्य बैंक। ७७ वटै जिल्लामा शाखा सञ्जाल विस्तार भएको राष्ट्रको भरपर्दो वित्तीय संस्था।',
    keyExamFocusNe: [
      'BAFIA २०७३ र कम्पनी ऐन २०६३ का प्रमुख व्यवस्थाहरू',
      'निक्षेप संकलन, कर्जा लगानी प्रक्रिया र खराब कर्जा (NPL) असुली',
      'बैंकिङ कसूर तथा सजाय ऐन २०६४ र सम्पत्ति शुद्धीकरण (AML/CFT)',
      'दोहोरो लेखा प्रणाली, अन्तिम हिसाब (Final Accounts), बैंक हिसाब मिलान (BRS)'
    ],
    levels: [
      {
        levelNumber: '4',
        levelTitleNe: 'सहायक / सहायक (नगद) - तह ४',
        levelTitleEn: 'Assistant / Cashier - Level 4',
        postsNe: ['सहायक (प्रशासन)', 'सहायक (नगद)', 'सहायक (कानुन)'],
        minimumQualificationNe: 'प्रविणता प्रमाणपत्र तह वा १०+२ (प्लस टु) उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 4',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा (MCQs ५० प्रश्न)', 'दोस्रो चरण: लिखित परीक्षा (प्रथम र द्वितीय पत्र)', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      },
      {
        levelNumber: '5',
        levelTitleNe: 'वरिष्ठ सहायक - तह ५',
        levelTitleEn: 'Senior Assistant - Level 5',
        postsNe: ['वरिष्ठ सहायक (प्रशासन)', 'वरिष्ठ सहायक (नगद)', 'वरिष्ठ सहायक (IT)'],
        minimumQualificationNe: 'वाणिज्य, व्यवस्थापन वा अर्थशास्त्र मूल विषय लिई स्नातक तह उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 5',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा', 'दोस्रो चरण: लिखित परीक्षा', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      }
    ],
    activeVacanciesCount: 1,
    totalQuestionsInBank: 980,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  },
  {
    id: 'adbl',
    code: 'ADBL',
    nameNe: 'कृषि विकास बैंक लिमिटेड',
    nameEn: 'Agricultural Development Bank Limited',
    shortName: 'ADBL',
    taglineNe: 'कृषि, ग्रामीण तथा समग्र राष्ट्रिय अर्थतन्त्रको मेरुदण्ड',
    category: 'Financial Institutions',
    tags: ['Banking', 'Sangathit Sanstha', 'Public Enterprise', 'Financial'],
    isBanking: true,
    isSangathitSanstha: true,
    isPublicEnterprise: true,
    isLokSewa: false,
    requiresPreTest: true,
    preTestLevels: ['Level 4', 'Level 5'],
    establishedYearBS: '२०२४ माघ ०७',
    headquartersNe: 'रामशाहपथ, काठमाडौँ',
    officialWebsiteUrl: 'https://adbl.gov.np',
    officialCareersUrl: 'https://adbl.gov.np/career',
    actOrCharterNe: 'कृषि विकास बैंक ऐन २०२४ (हाल BAFIA २०७३ अन्तर्गत "क" वर्ग)',
    descriptionNe: 'नेपालको कृषि, साना तथा मझौला उद्योग र ग्रामीण बैंकिङको विस्तार गर्ने उद्देश्यले वि.सं. २०२४ मा स्थापित "क" वर्गको वाणिज्य बैंक। यसमा नेपाल सरकारको ५१% स्वामित्व रहेको छ।',
    keyExamFocusNe: [
      'कृषि कर्जा, ग्रामीण वित्त, विपन्न वर्ग कर्जा निर्देशिका',
      'बैंक तथा वित्तीय संस्था सम्बन्धी ऐन (BAFIA) २०७३',
      'परियोजना विश्लेषण, धितो मूल्याङ्कन र कर्जा जोखिम व्यवस्थापन',
      'लेखापरीक्षण, आन्तरिक नियन्त्रण र सरकारी कृषि नीतिहरू'
    ],
    levels: [
      {
        levelNumber: '4',
        levelTitleNe: 'लेखापाल / ऋण सहायक - तह ४',
        levelTitleEn: 'Accountant / Loan Assistant - Level 4',
        postsNe: ['लेखापाल (प्रशासन)', 'ऋण सहायक'],
        minimumQualificationNe: '१०+२ वा प्रविणता प्रमाणपत्र तह उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 4',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा', 'दोस्रो चरण: लिखित परीक्षा', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      },
      {
        levelNumber: '5',
        levelTitleNe: 'व्यवसाय सहायक - तह ५',
        levelTitleEn: 'Business Assistant - Level 5',
        postsNe: ['व्यवसाय सहायक', 'कानुन सहायक', 'IT सहायक'],
        minimumQualificationNe: 'व्यवस्थापन, वाणिज्य वा अर्थशास्त्रमा स्नातक उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 5',
        selectionStagesNe: ['प्रथम चरण: लिखित परीक्षा (प्रथम पत्र)', 'दोस्रो चरण: द्वितीय पत्र (सेवा सम्बन्धी)', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      }
    ],
    activeVacanciesCount: 1,
    totalQuestionsInBank: 890,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  },
  {
    id: 'nbl',
    code: 'NBL',
    nameNe: 'नेपाल बैंक लिमिटेड',
    nameEn: 'Nepal Bank Limited',
    shortName: 'NBL',
    taglineNe: 'नेपालको पहिलो बैंक - आधुनिक बैंकिङ इतिहासको प्रणेता',
    category: 'Financial Institutions',
    tags: ['Banking', 'Sangathit Sanstha', 'Public Enterprise', 'Financial'],
    isBanking: true,
    isSangathitSanstha: true,
    isPublicEnterprise: true,
    isLokSewa: false,
    requiresPreTest: true,
    preTestLevels: ['Level 4', 'Level 5'],
    establishedYearBS: '१९९४ कात्तिक ३०',
    headquartersNe: 'धर्मपथ, काठमाडौँ',
    officialWebsiteUrl: 'https://www.nepalbank.com.np',
    officialCareersUrl: 'https://www.nepalbank.com.np/career',
    actOrCharterNe: 'नेपाल बैंक कानुन १९९४ (हाल BAFIA २०७३ अन्तर्गत "क" वर्ग)',
    descriptionNe: 'वि.सं. १९९४ मा स्थापित नेपालको सर्वप्रथम आधुनिक बैंक। नेपाल सरकार र सर्वसाधारणको संयुक्त लगानी रहेको ऐतिहासिक वाणिज्य बैंक।',
    keyExamFocusNe: [
      'नेपालको आधुनिक बैंकिङ विकासक्रम र ऐतिहासिक चरणहरू',
      'BAFIA २०७३, बैंकिङ कसूर ऐन २०६४, विनिमय पत्र ऐन २०३४',
      'निक्षेप व्यवस्थापन, प्रतितपत्र (LC) र बैंक जमानत (BG)',
      'नेपाल राष्ट्र बैंकका निर्देशनहरू र वित्तीय अनुपात विश्लेषण'
    ],
    levels: [
      {
        levelNumber: '3',
        levelTitleNe: 'कनिष्ठ सहायक - तह ३',
        levelTitleEn: 'Junior Assistant - Level 3',
        postsNe: ['कनिष्ठ सहायक (स्वर्ण परीक्षक)', 'कनिष्ठ सहायक (प्रशासन)'],
        minimumQualificationNe: 'एसईई (SEE) वा एसएलसी उत्तीर्ण।',
        requiresPreTest: false,
        selectionStagesNe: ['लिखित परीक्षा', 'प्रयोगात्मक परीक्षा', 'अन्तर्वार्ता'],
        totalPhases: 2
      },
      {
        levelNumber: '4',
        levelTitleNe: 'सहायक - तह ४',
        levelTitleEn: 'Assistant - Level 4',
        postsNe: ['सहायक (प्रशासन)', 'सहायक (IT)'],
        minimumQualificationNe: '१०+२ वा सो सरह उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 4',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा', 'दोस्रो चरण: लिखित परीक्षा', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      }
    ],
    activeVacanciesCount: 1,
    totalQuestionsInBank: 820,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  },
  {
    id: 'epf',
    code: 'EPF',
    nameNe: 'कर्मचारी सञ्चय कोष',
    nameEn: 'Employees Provident Fund',
    shortName: 'EPF (KOSH)',
    taglineNe: 'राष्ट्रसेवक तथा संगठित संस्थाका श्रमिकहरूको सामाजिक सुरक्षाको आधार',
    category: 'Social Security & Funds',
    tags: ['Banking', 'Sangathit Sanstha', 'Public Enterprise', 'Financial'],
    isBanking: true, // Major statutory financial fund
    isSangathitSanstha: true,
    isPublicEnterprise: true,
    isLokSewa: false,
    requiresPreTest: true,
    preTestLevels: ['Level 4', 'Level 5'],
    establishedYearBS: '२०१९ असोज ०१',
    headquartersNe: 'पुल्चोक, ललितपुर',
    officialWebsiteUrl: 'https://epfnepal.com.np',
    officialCareersUrl: 'https://epfnepal.com.np/career',
    actOrCharterNe: 'कर्मचारी सञ्चय कोष ऐन, २०१९',
    descriptionNe: 'सरकारी कर्मचारी, शिक्षक तथा संगठित संस्थाका कर्मचारीहरूको सञ्चय कोष कट्टी रकम संकलन, व्यवस्थापन तथा सामाजिक सुरक्षण सुविधाहरू प्रदान गर्ने विशिष्टीकृत वित्तीय कोष।',
    keyExamFocusNe: [
      'कर्मचारी सञ्चय कोष ऐन २०१९ र कोषका विनियमावलीहरू',
      'सञ्चय कोष रकम परिचालन, दीर्घकालीन लगानी तथा प्रतिफल',
      'सामाजिक सुरक्षा, निवृत्तिभरण (पेन्सन) व्यवस्थापन र अवकाश कोष',
      'लेखापरीक्षण, सम्पत्ति व्यवस्थापन र जोखिम नियन्त्रण'
    ],
    levels: [
      {
        levelNumber: '4',
        levelTitleNe: 'सहायक - तह ४',
        levelTitleEn: 'Assistant - Level 4',
        postsNe: ['सहायक (प्रशासन)', 'सहायक (लेखा)'],
        minimumQualificationNe: '१०+२ वा प्रविणता प्रमाणपत्र तह उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 4',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा (MCQs)', 'दोस्रो चरण: मुख्य लिखित परीक्षा', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      },
      {
        levelNumber: '5',
        levelTitleNe: 'वरिष्ठ सहायक - तह ५',
        levelTitleEn: 'Senior Assistant - Level 5',
        postsNe: ['वरिष्ठ सहायक'],
        minimumQualificationNe: 'वाणिज्य, व्यवस्थापन वा अर्थशास्त्रमा स्नातक।',
        requiresPreTest: true,
        preTestLevel: 'Level 5',
        selectionStagesNe: ['प्रथम चरण: लिखित परीक्षा', 'दोस्रो चरण: सेवा सम्बन्धी', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      }
    ],
    activeVacanciesCount: 1,
    totalQuestionsInBank: 640,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  },
  {
    id: 'cit',
    code: 'CIT',
    nameNe: 'नागरिक लगानी कोष',
    nameEn: 'Citizen Investment Trust',
    shortName: 'CIT (NLK)',
    taglineNe: 'नागरिकको स-साना बचत संकलन गरी पुँजी निर्माण र राष्ट्रिय विकासमा योगदान',
    category: 'Social Security & Funds',
    tags: ['Banking', 'Sangathit Sanstha', 'Public Enterprise', 'Financial'],
    isBanking: true, // Non-bank financial institution
    isSangathitSanstha: true,
    isPublicEnterprise: true,
    isLokSewa: false,
    requiresPreTest: true,
    preTestLevels: ['Level 4', 'Level 5'],
    establishedYearBS: '२०४७ चैत ०४',
    headquartersNe: 'नयाँ बानेश्वर, काठमाडौँ',
    officialWebsiteUrl: 'https://nlk.org.np',
    officialCareersUrl: 'https://nlk.org.np/career',
    actOrCharterNe: 'नागरिक लगानी कोष ऐन, २०४७',
    descriptionNe: 'नागरिक लगानी कोष ऐन २०४७ अन्तर्गत स्थापित संविधिक संस्था। यसले स्वैच्छिक बचत कार्यक्रम, उपदान, पेन्सन तथा नागरिक एकांक योजनामार्फत पुँजी बजारमा महत्त्वपूर्ण भूमिका खेल्दछ।',
    keyExamFocusNe: [
      'नागरिक लगानी कोष ऐन २०४७ र कोष सञ्चालन नियमावली',
      'पुँजी बजार, सेयर बजार (Stock Market), म्युचुअल फण्ड र ऋणपत्र',
      'कर्मचारी बचत वृद्धि योजना र नागरिक पेन्सन योजना',
      'आर्थिक सूचकांकहरू र लगानी विविधीकरण सिद्धान्त'
    ],
    levels: [
      {
        levelNumber: '4',
        levelTitleNe: 'सहायक - तह ४',
        levelTitleEn: 'Assistant - Level 4',
        postsNe: ['सहायक (प्रशासन)', 'सहायक (लेखा)'],
        minimumQualificationNe: '१०+२ वा प्रविणता प्रमाणपत्र तह उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 4',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा', 'दोस्रो चरण: लिखित परीक्षा', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      },
      {
        levelNumber: '5',
        levelTitleNe: 'वरिष्ठ सहायक - तह ५',
        levelTitleEn: 'Senior Assistant - Level 5',
        postsNe: ['वरिष्ठ सहायक'],
        minimumQualificationNe: 'स्नातक तह उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 5',
        selectionStagesNe: ['प्रथम चरण: लिखित परीक्षा', 'दोस्रो चरण: विषयगत', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      }
    ],
    activeVacanciesCount: 1,
    totalQuestionsInBank: 580,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  },
  {
    id: 'ntc',
    code: 'NTC',
    nameNe: 'नेपाल दूरसञ्चार कम्पनी लिमिटेड (नेपाल टेलिकम)',
    nameEn: 'Nepal Telecom (Nepal Doorsanchar Company Ltd.)',
    shortName: 'NTC',
    taglineNe: 'राष्ट्रको सञ्चार - देशभर आधुनिक दूरसञ्चार सेवा',
    category: 'Authorities & Utilities',
    tags: ['Sangathit Sanstha', 'Public Enterprise'],
    isBanking: false,
    isSangathitSanstha: true,
    isPublicEnterprise: true,
    isLokSewa: false,
    requiresPreTest: true,
    preTestLevels: ['Level 4'],
    establishedYearBS: '२०३२ (कम्पनी रूपान्तरण: २०६० माघ २२)',
    headquartersNe: 'भद्रकाली प्लाजा, काठमाडौँ',
    officialWebsiteUrl: 'https://www.ntc.net.np',
    officialCareersUrl: 'https://www.ntc.net.np/career',
    actOrCharterNe: 'दूरसञ्चार ऐन २०५३ तथा कम्पनी ऐन २०६३',
    descriptionNe: 'नेपालको सबैभन्दा ठूलो र विश्वसनीय सरकारी दूरसञ्चार सेवा प्रदायक। देशभर ताररहित (Wireless), अप्टिकल फाइबर (FTTH) र मोबाइल सेवा प्रदान गर्ने सार्वजनिक संस्थान।',
    keyExamFocusNe: [
      'दूरसञ्चार ऐन २०५३ र नियमावली २०५४',
      'कम्पनी ऐन २०६३ र उपभोक्ता संरक्षण',
      'सूचना तथा सञ्चार प्रविधि (ICT), डेटा नेटवर्क र भ्वाइस सेवा',
      'कार्यालय व्यवस्थापन, ग्राहक सेवा र बजारीकरण'
    ],
    levels: [
      {
        levelNumber: '4',
        levelTitleNe: 'सहायक (प्रशासन / प्राविधिक) - तह ४',
        levelTitleEn: 'Assistant - Level 4',
        postsNe: ['सहायक (प्रशासन)', 'टेक्निसियन (प्राविधिक)'],
        minimumQualificationNe: '१०+२ वा सो सरह उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 4',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा', 'दोस्रो चरण: लिखित परीक्षा', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      }
    ],
    activeVacanciesCount: 1,
    totalQuestionsInBank: 720,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  },
  {
    id: 'nea',
    code: 'NEA',
    nameNe: 'नेपाल विद्युत प्राधिकरण',
    nameEn: 'Nepal Electricity Authority',
    shortName: 'NEA',
    taglineNe: 'उज्यालो नेपालको संवाहक - जलविद्युत उत्पादन, प्रसारण तथा वितरण',
    category: 'Authorities & Utilities',
    tags: ['Sangathit Sanstha', 'Public Enterprise'],
    isBanking: false,
    isSangathitSanstha: true,
    isPublicEnterprise: true,
    isLokSewa: false,
    requiresPreTest: true,
    preTestLevels: ['Level 4'],
    establishedYearBS: '२०४२ भदौ ०१',
    headquartersNe: 'रत्नपार्क, दरबारमार्ग, काठमाडौँ',
    officialWebsiteUrl: 'https://www.nea.org.np',
    officialCareersUrl: 'https://www.nea.org.np/career',
    actOrCharterNe: 'नेपाल विद्युत प्राधिकरण ऐन, २०४१',
    descriptionNe: 'विद्युत उत्पादन, प्रसारण र वितरणलाई सक्षम, भरपर्दो र सुलभ बनाउन वि.सं. २०४१ को ऐन बमोजिम स्थापित सरकारी स्वामित्वको अग्रणी प्राधिकरण।',
    keyExamFocusNe: [
      'नेपाल विद्युत प्राधिकरण ऐन २०४१ र विद्युत चोरी नियन्त्रण ऐन २०५८',
      'जलविद्युत नीति, ऊर्जा व्यापार र क्रसबोर्डर प्रसारण लाइन',
      'कार्यालय सञ्चालन, जिन्सी व्यवस्थापन र खरिद ऐन २०६३',
      'महसुल निर्धारण र ग्राहक सेवा व्यवस्थापन'
    ],
    levels: [
      {
        levelNumber: '4',
        levelTitleNe: 'सहायक लेखापाल / सिनियर मिटर रिडर - तह ४',
        levelTitleEn: 'Assistant Accountant / Meter Reader - Level 4',
        postsNe: ['सहायक लेखापाल', 'सिनियर मिटर रिडर', 'फोरम्यान (विद्युत)'],
        minimumQualificationNe: '१०+२ वा सो सरह उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 4',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा', 'दोस्रो चरण: लिखित परीक्षा', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      }
    ],
    activeVacanciesCount: 1,
    totalQuestionsInBank: 680,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  },
  {
    id: 'noc',
    code: 'NOC',
    nameNe: 'नेपाल आयल निगम लिमिटेड',
    nameEn: 'Nepal Oil Corporation Limited',
    shortName: 'NOC',
    taglineNe: 'पेट्रोलियम पदार्थको आयात, भण्डारण तथा वितरणको राष्ट्रिय जिम्मेवारी',
    category: 'Corporations & Trading',
    tags: ['Sangathit Sanstha', 'Public Enterprise'],
    isBanking: false,
    isSangathitSanstha: true,
    isPublicEnterprise: true,
    isLokSewa: false,
    requiresPreTest: true,
    preTestLevels: ['Level 4'],
    establishedYearBS: '२०२७ पुस २६',
    headquartersNe: 'टेकु, काठमाडौँ',
    officialWebsiteUrl: 'https://noc.org.np',
    officialCareersUrl: 'https://noc.org.np/career',
    actOrCharterNe: 'कम्पनी ऐन अन्तर्गत स्थापित सरकारी संस्थान',
    descriptionNe: 'नेपालभर पेट्रोलियम पदार्थ, डिजेल, पेट्रोल, हवाई इन्धन तथा एलपी ग्यासको एकाधिकार आयात, भण्डारण र वितरण गर्ने सार्वजनिक व्यापारिक संस्थान।',
    keyExamFocusNe: [
      'पेट्रोलियम आपूर्ति व्यवस्था, भण्डारण क्षमता र स्वचालित मूल्य प्रणाली (Automated Pricing)',
      'नेपाल आयल निगमको विनियम, सार्वजनिक खरिद ऐन २०६३',
      'आयात व्यापार, भन्सार प्रक्रिया र गुणस्तर परीक्षण',
      'लेखा प्रणाली, इन्भेन्टरी नियन्त्रण र सुरक्षा मापदण्ड'
    ],
    levels: [
      {
        levelNumber: '4',
        levelTitleNe: 'सहायक - तह ४',
        levelTitleEn: 'Assistant - Level 4',
        postsNe: ['सहायक (प्रशासन)', 'सहायक (लेखा)', 'ल्याब सहायक'],
        minimumQualificationNe: '१०+२ वा सो सरह उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 4',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा', 'दोस्रो चरण: लिखित परीक्षा', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      }
    ],
    activeVacanciesCount: 0,
    totalQuestionsInBank: 450,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  },
  {
    id: 'caan',
    code: 'CAAN',
    nameNe: 'नेपाल नागरिक उड्डयन प्राधिकरण',
    nameEn: 'Civil Aviation Authority of Nepal',
    shortName: 'CAAN',
    taglineNe: 'हवाई उड्डयनको सुरक्षा, नियमन तथा विमानस्थल विकास र व्यवस्थापन',
    category: 'Authorities & Utilities',
    tags: ['Sangathit Sanstha', 'Public Enterprise'],
    isBanking: false,
    isSangathitSanstha: true,
    isPublicEnterprise: true,
    isLokSewa: false,
    requiresPreTest: true,
    preTestLevels: ['Level 4', 'Level 5'],
    establishedYearBS: '२०५५ पुस १६',
    headquartersNe: 'बबरमहल, काठमाडौँ',
    officialWebsiteUrl: 'https://caanepal.gov.np',
    officialCareersUrl: 'https://caanepal.gov.np/career',
    actOrCharterNe: 'नेपाल नागरिक उड्डयन प्राधिकरण ऐन, २०५३',
    descriptionNe: 'नेपालको हवाई क्षेत्रको नियामक तथा अन्तर्राष्ट्रिय र आन्तरिक विमानस्थलहरूको सञ्चालन तथा सुरक्षा व्यवस्थापन गर्ने स्वायत्त संविधिक निकाय।',
    keyExamFocusNe: [
      'नेपाल नागरिक उड्डयन प्राधिकरण ऐन २०५३ र नागरिक उड्डयन नियमावली',
      'ICAO मापदण्ड, हवाई सुरक्षा नियमन र आपतकालीन उद्धार',
      'विमानस्थल सञ्चालन, हवाई ट्राफिक व्यवस्थापन र शुल्क प्रणाली',
      'सामान्य प्रशासन, लेखा व्यवस्थापन र अंग्रेजी भाषा दक्षता'
    ],
    levels: [
      {
        levelNumber: '4',
        levelTitleNe: 'सहायक (प्रशासन / प्राविधिक) - तह ४',
        levelTitleEn: 'Assistant - Level 4',
        postsNe: ['सहायक (प्रशासन)', 'सहायक (लेखा)', 'फायर टेक्निसियन'],
        minimumQualificationNe: '१०+२ वा सो सरह उत्तीर्ण।',
        requiresPreTest: true,
        preTestLevel: 'Level 4',
        selectionStagesNe: ['प्रथम चरण: पूर्वयोग्यता परीक्षा', 'दोस्रो चरण: लिखित परीक्षा', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      }
    ],
    activeVacanciesCount: 1,
    totalQuestionsInBank: 510,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  },
  {
    id: 'sebon',
    code: 'SEBON',
    nameNe: 'नेपाल धितोपत्र बोर्ड',
    nameEn: 'Securities Board of Nepal',
    shortName: 'SEBON',
    taglineNe: 'पुँजी बजारको विकास, विस्तार र लगानीकर्ताको हित संरक्षणको सर्वोच्च नियामक',
    category: 'Regulatory Bodies',
    tags: ['Banking', 'Sangathit Sanstha', 'Financial'],
    isBanking: true, // Capital market regulator
    isSangathitSanstha: true,
    isPublicEnterprise: false, // Statutory Regulatory Body
    isLokSewa: false,
    requiresPreTest: true,
    preTestLevels: ['Level 5'],
    establishedYearBS: '२०५० जेठ २५',
    headquartersNe: 'जावलाखेल, ललितपुर',
    officialWebsiteUrl: 'https://sebon.gov.np',
    officialCareersUrl: 'https://sebon.gov.np/career',
    actOrCharterNe: 'धितोपत्र सम्बन्धी ऐन, २०६३',
    descriptionNe: 'धितोपत्र सम्बन्धी ऐन २०६३ बमोजिम नेपालको सेयर बजार, स्टक ब्रोकर, मर्चेन्ट बैंकर र सूचीकृत कम्पनीहरूको नियमन गर्ने सर्वोच्च निकाय।',
    keyExamFocusNe: [
      'धितोपत्र सम्बन्धी ऐन २०६३ र नियमावलीहरू',
      'प्राथमिक सेयर निष्कासन (IPO), दोस्रो बजार (NEPSE) र सेयर कारोबार',
      'म्युचुअल फन्ड, क्रेडिट रेटिङ र डिबेन्चर व्यवस्थापन',
      'इन्साइडर ट्रेडिङ नियन्त्रण र लगानीकर्ता हित संरक्षण'
    ],
    levels: [
      {
        levelNumber: '5',
        levelTitleNe: 'सहायक (अधिकृत स्तर) - तह ५',
        levelTitleEn: 'Assistant Officer - Level 5',
        postsNe: ['सहायक (प्रशासन)', 'सहायक (लेखा/वित्त)'],
        minimumQualificationNe: 'वाणिज्य, व्यवस्थापन वा अर्थशास्त्रमा स्नातक।',
        requiresPreTest: true,
        preTestLevel: 'Level 5',
        selectionStagesNe: ['प्रथम चरण: लिखित परीक्षा', 'दोस्रो चरण: विषयगत परीक्षा', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      }
    ],
    activeVacanciesCount: 0,
    totalQuestionsInBank: 420,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  },
  {
    id: 'loksewa',
    code: 'PSC',
    nameNe: 'लोक सेवा आयोग (नेपाल निजामती सेवा)',
    nameEn: 'Public Service Commission (Nepal Civil Service)',
    shortName: 'LOK SEWA',
    taglineNe: 'योग्यता, निष्पक्षता र स्वच्छता - राष्ट्रसेवाको सर्वोच्च संवैधानिक अंग',
    category: 'Civil Service',
    tags: ['Lok Sewa'],
    isBanking: false,
    isSangathitSanstha: false,
    isPublicEnterprise: false,
    isLokSewa: true,
    requiresPreTest: false, // Uses its own PSC Stages
    preTestLevels: [],
    establishedYearBS: '२००८ असार ०१',
    headquartersNe: 'अनामनगर, काठमाडौँ',
    officialWebsiteUrl: 'https://psc.gov.np',
    officialCareersUrl: 'https://psc.gov.np/category/notices',
    actOrCharterNe: 'नेपालको संविधान धारा २४२ एवं लोक सेवा आयोग ऐन २०७९',
    descriptionNe: 'नेपालको संविधान बमोजिम निजामती सेवा, सुरक्षा निकाय तथा संगठित संस्थाका पदहरूमा स्थायी पदपूर्तिका लागि परीक्षा सञ्चालन गर्ने निष्पक्ष संवैधानिक निकाय।',
    keyExamFocusNe: [
      'नेपालको संविधान (मौलिक हक, राज्यका निर्देशक सिद्धान्त, संघीय संरचना)',
      'नेपालको भूगोल, इतिहास, संस्कृति, आर्थिक सूचकांक र समसामयिक घटनाहरू',
      'शासकीय प्रबन्ध (Governance), सार्वजनिक सेवा प्रवाह र जनप्रशासन',
      'बौद्धिक परीक्षण (IQ - Verbal, Numerical & Spatial Ability)'
    ],
    levels: [
      {
        levelNumber: '4',
        levelTitleNe: 'खरिदार (रा.प.अनं. द्वितीय श्रेणी)',
        levelTitleEn: 'Kharidar (Non-Gazetted 2nd Class)',
        postsNe: ['खरिदार (प्रशासन)', 'खरिदार (लेखा)', 'खरिदार (राजस्व)'],
        minimumQualificationNe: 'एसईई (SEE) मा कम्तीमा GPA २.० वा एसएलसी उत्तीर्ण।',
        requiresPreTest: false,
        selectionStagesNe: ['प्रथम चरण: सामान्य ज्ञान र सामान्य अभिक्षमता परीक्षण (MCQs १०० पूर्णाङ्क)', 'दोस्रो चरण: लिखित परीक्षा (कार्यालय सञ्चालन र गणित)', 'तेस्रो चरण: अन्तर्वार्ता'],
        totalPhases: 3
      },
      {
        levelNumber: '5',
        levelTitleNe: 'नायब सुब्बा (रा.प.अनं. प्रथम श्रेणी)',
        levelTitleEn: 'Nayab Subba (Non-Gazetted 1st Class)',
        postsNe: ['नायब सुब्बा (प्रशासन)', 'नायब सुब्बा (राजस्व)', 'नायब सुब्बा (लेखा)'],
        minimumQualificationNe: 'प्रविणता प्रमाणपत्र तह वा १०+२ उत्तीर्ण।',
        requiresPreTest: false,
        selectionStagesNe: ['प्रथम चरण: सामान्य ज्ञान र बौद्धिक परीक्षण (MCQs १०० पूर्णाङ्क)', 'दोस्रो चरण: समसामयिक अध्ययन र सार्वजनिक सेवा व्यवस्थापन', 'तेस्रो चरण: कम्प्युटर सीप परीक्षण र अन्तर्वार्ता'],
        totalPhases: 3
      },
      {
        levelNumber: '6',
        levelTitleNe: 'शाखा अधिकृत (रा.प. तृतीय श्रेणी)',
        levelTitleEn: 'Section Officer (Gazetted 3rd Class)',
        postsNe: ['शाखा अधिकृत (प्रशासन)', 'शाखा अधिकृत (परराष्ट्र)', 'शाखा अधिकृत (राजस्व/लेखा)'],
        minimumQualificationNe: 'मान्यता प्राप्त विश्वविद्यालयबाट कुनै पनि विषयमा स्नातक तह (Bachelor Degree) उत्तीर्ण।',
        requiresPreTest: false,
        selectionStagesNe: ['प्रथम चरण: प्रशासनिक अभिरुचि परीक्षण (AAT: GK + IQ + English)', 'दोस्रो चरण: शासन प्रणाली र समसामयिक विषय (लिखित परीक्षा)', 'तेस्रो चरण: सेवा सम्बन्धी लिखित परीक्षा', 'चौथो चरण: समूह छलफल, सीप परीक्षण र अन्तर्वार्ता'],
        totalPhases: 4
      }
    ],
    activeVacanciesCount: 3,
    totalQuestionsInBank: 2400,
    syllabusVersion: '२०८१/८२ अद्यावधिक'
  }
];

export const getInstitutionById = (id: string): CanonicalInstitution | undefined => {
  return CANONICAL_INSTITUTIONS.find(inst => inst.id.toLowerCase() === id.toLowerCase() || inst.code.toLowerCase() === id.toLowerCase());
};

export const getInstitutionsByCategory = (category: InstitutionCategory): CanonicalInstitution[] => {
  return CANONICAL_INSTITUTIONS.filter(inst => inst.category === category);
};

export const getBankingInstitutions = (): CanonicalInstitution[] => {
  return CANONICAL_INSTITUTIONS.filter(inst => inst.isBanking);
};

export const getSangathitInstitutions = (): CanonicalInstitution[] => {
  return CANONICAL_INSTITUTIONS.filter(inst => inst.isSangathitSanstha);
};

export const getPublicEnterprises = (): CanonicalInstitution[] => {
  return CANONICAL_INSTITUTIONS.filter(inst => inst.isPublicEnterprise);
};
