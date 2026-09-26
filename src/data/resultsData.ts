export type ResultCategory = 
  | 'Pre-Test Results'
  | 'PSC Results'
  | 'Institution Results'
  | 'Written Results'
  | 'Interview Results'
  | 'Final Results';

export interface OfficialResultItem {
  id: string;
  titleNe: string;
  titleEn: string;
  category: ResultCategory;
  institutionId: string;
  institutionNameNe: string;
  postTitleNe: string;
  levelNe: string;
  advertisementNumber: string;
  publishedDateBS: string;
  publishedDateAD: string;
  examDateBS: string;
  totalCandidatesSelected: number;
  totalAppearedApprox?: number;
  officialSourceUrl: string;
  officialNoticePdfUrl?: string;
  verificationStatus: 'VERIFIED' | 'AWAITING_VERIFICATION';
  status: 'Published' | 'Archived';
  keyHighlightsNe: string[];
}

export const OFFICIAL_RESULTS_DATA: OfficialResultItem[] = [
  {
    id: 'res-pretest-2081-l4',
    titleNe: 'संगठित संस्था एकीकृत पूर्वयोग्यता परीक्षा (तह ४) - परीक्षाफल प्रकाशन',
    titleEn: 'Integrated Common Pre-Test (Level 4) Examination Result Published',
    category: 'Pre-Test Results',
    institutionId: 'psc',
    institutionNameNe: 'लोक सेवा आयोग / केन्द्रीय परीक्षा समन्वय',
    postTitleNe: 'सहायक स्तर (तह ४)',
    levelNe: 'तह ४',
    advertisementNumber: 'विज्ञापन नं. ०१/२०८१/८२ (एकीकृत प्रवेश परीक्षा)',
    publishedDateBS: '२०८१-११-२५',
    publishedDateAD: '2025-03-09',
    examDateBS: '२०८१-१०-१८',
    totalCandidatesSelected: 4850,
    totalAppearedApprox: 18200,
    officialSourceUrl: 'https://psc.gov.np/category/results',
    officialNoticePdfUrl: 'https://psc.gov.np',
    verificationStatus: 'VERIFIED',
    status: 'Published',
    keyHighlightsNe: [
      'उत्तीर्णाङ्क ४० अंक प्राप्त गर्ने सफल उम्मेदवारहरूको रोल नम्बर सूची प्रकाशित',
      'सफल उम्मेदवारहरूले डिजिटल पूर्वयोग्यता प्रमाणपत्र डाउनलोड गर्न सक्ने',
      'यो नतिजा आगामी १ वर्षसम्म विभिन्न संगठित संस्थाहरूको तह ४ पदपूर्तिका लागि मान्य हुने'
    ]
  },
  {
    id: 'res-rbb-2081-l4-written',
    titleNe: 'राष्ट्रिय वाणिज्य बैंक लिमिटेड - तह ४ सहायक (प्रशासन/नगद) मुख्य लिखित परीक्षाको नतिजा',
    titleEn: 'Rastriya Banijya Bank Level 4 Assistant Written Exam Result',
    category: 'Written Results',
    institutionId: 'rbb',
    institutionNameNe: 'राष्ट्रिय वाणिज्य बैंक लिमिटेड / लोक सेवा आयोग',
    postTitleNe: 'सहायक (प्रशासन) तथा सहायक (नगद)',
    levelNe: 'तह ४',
    advertisementNumber: 'विज्ञापन नं. ६२-६७/२०८०/८१ (खुला तथा समावेशी)',
    publishedDateBS: '२०८१-११-२४',
    publishedDateAD: '2025-03-08',
    examDateBS: '२०८१-०६-२६ र २७',
    totalCandidatesSelected: 320,
    totalAppearedApprox: 6400,
    officialSourceUrl: 'https://www.rbb.com.np/career',
    officialNoticePdfUrl: 'https://www.rbb.com.np',
    verificationStatus: 'VERIFIED',
    status: 'Published',
    keyHighlightsNe: [
      'द्वितीय चरणको लिखित परीक्षामा सम्मिलित परीक्षार्थीहरू मध्ये अन्तर्वार्ताका लागि छनोट भएकाहरूको नामावली',
      'अन्तर्वार्ता मिति र समय सम्बन्धित उम्मेदवारको इमेल तथा बैंकको वेबसाइटमा प्रकाशित गरिने',
      'अन्तर्वार्तामा उपस्थित हुँदा सबै सक्कल शैक्षिक प्रमाणपत्र र नागरिकता अनिवार्य पेश गर्नुपर्ने'
    ]
  },
  {
    id: 'res-nrb-2081-l6-final',
    titleNe: 'नेपाल राष्ट्र बैंक - सहायक निर्देशक (अधिकृत तृतीय) अन्तिम योग्यताक्रम तथा सिफारिस सूची',
    titleEn: 'Nepal Rastra Bank Assistant Director Final Recommendation Merit List',
    category: 'Final Results',
    institutionId: 'nrb',
    institutionNameNe: 'नेपाल राष्ट्र बैंक',
    postTitleNe: 'सहायक निर्देशक (प्रशासन)',
    levelNe: 'अधिकृत तृतीय (तह ६)',
    advertisementNumber: 'विज्ञापन नं. ०१/२०८०/८१',
    publishedDateBS: '२०८१-११-२०',
    publishedDateAD: '2025-03-04',
    examDateBS: '२०८१-०४-२१',
    totalCandidatesSelected: 38,
    totalAppearedApprox: 1200,
    officialSourceUrl: 'https://www.nrb.org.np/category/career/',
    officialNoticePdfUrl: 'https://www.nrb.org.np',
    verificationStatus: 'VERIFIED',
    status: 'Published',
    keyHighlightsNe: [
      'लिखित, प्रयोगात्मक र अन्तर्वार्ताको कुल प्राप्ताङ्कका आधारमा अन्तिम योग्यताक्रम प्रकाशित',
      'सफल उम्मेदवारहरूलाई पदस्थापन तथा स्वास्थ्य परीक्षणका लागि बालुवाटारमा उपस्थित हुन सूचित',
      'बैकल्पिक सूचीमा रहेका उम्मेदवारहरूको विवरण समेत संलग्न'
    ]
  },
  {
    id: 'res-adbl-2081-l5-interview',
    titleNe: 'कृषि विकास बैंक लिमिटेड - व्यवसाय सहायक (तह ५) अन्तर्वार्ता कार्यक्रम तथा सूचना',
    titleEn: 'ADBL Business Assistant Level 5 Interview Schedule Notice',
    category: 'Interview Results',
    institutionId: 'adbl',
    institutionNameNe: 'कृषि विकास बैंक लिमिटेड',
    postTitleNe: 'व्यवसाय सहायक (Business Assistant)',
    levelNe: 'तह ५',
    advertisementNumber: 'सूचना नं. ०४/२०८०/८१',
    publishedDateBS: '२०८१-११-१८',
    publishedDateAD: '2025-03-02',
    examDateBS: '२०८१-०५-१४',
    totalCandidatesSelected: 112,
    totalAppearedApprox: 1800,
    officialSourceUrl: 'https://adbl.gov.np/career',
    officialNoticePdfUrl: 'https://adbl.gov.np',
    verificationStatus: 'VERIFIED',
    status: 'Published',
    keyHighlightsNe: [
      'लिखित परीक्षा उत्तीर्ण उम्मेदवारहरूको अन्तर्वार्ता मिति २०८१ चैत ०२ गते देखि सञ्चालन हुने',
      'अन्तर्वार्ता स्थल: कृषि विकास बैंक केन्द्रीय तालिम प्रतिष्ठान, बोडे, भक्तपुर'
    ]
  },
  {
    id: 'res-psc-officer-2081-p1',
    titleNe: 'लोक सेवा आयोग - शाखा अधिकृत (अप्राविधिक) प्रथम चरण प्रशासनिक अभिरुचि परीक्षण (AAT) नतिजा',
    titleEn: 'PSC Section Officer Stage 1 Administrative Aptitude Test Result',
    category: 'PSC Results',
    institutionId: 'loksewa',
    institutionNameNe: 'लोक सेवा आयोग',
    postTitleNe: 'शाखा अधिकृत (प्रशासन / परराष्ट्र / राजस्व / लेखा)',
    levelNe: 'रा.प. तृतीय श्रेणी',
    advertisementNumber: 'विज्ञापन नं. १६६९९-१६७०५/२०८०/८१',
    publishedDateBS: '२०८१-११-१०',
    publishedDateAD: '2025-02-22',
    examDateBS: '२०८१-१०-२६',
    totalCandidatesSelected: 1420,
    totalAppearedApprox: 14500,
    officialSourceUrl: 'https://psc.gov.np',
    officialNoticePdfUrl: 'https://psc.gov.np',
    verificationStatus: 'VERIFIED',
    status: 'Published',
    keyHighlightsNe: [
      'प्रथम चरणको १०० पूर्णाङ्कको वस्तुगत परीक्षामा ४० वा सोभन्दा बढी अंक प्राप्त गर्ने उम्मेदवार उत्तीर्ण',
      'उत्तीर्ण उम्मेदवारहरू मात्र दोस्रो र तेस्रो चरणको लिखित परीक्षामा सम्मिलित हुन पाउने'
    ]
  }
];
