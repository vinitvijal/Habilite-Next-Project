import { Check } from 'lucide-react'

export default function CVSection() {
  return (
    <div className=" w-full mx-auto pt-6 pb-6 space-y-8">
      {/* Memberships Section */}
      <section>
        <h2 className="text-2xl font-semibold text-first mb-4">Memberships</h2>
        <ul className="space-y-2">
          {memberships.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-first" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-first mb-4">Current Positions</h2>
        <ul className="space-y-2">
          {currentPositions.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-first" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Work Experience Section */}
      <section>
        <h2 className="text-2xl font-semibold text-first mb-4">Work Experience</h2>
        <ul className="space-y-2">
          {experience.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-first" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-2xl font-semibold text-first mb-4">Education & Training</h2>
        <ul className="space-y-2">
          {education.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-first" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-first mb-4">Fellowship</h2>
        <ul className="space-y-2">
          {fellowship.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-first" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-first mb-4">Journal & Publications</h2>
        <ul className="space-y-2">
          {publications.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-first" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-first mb-4">Research Publications</h2>
        <ul className="space-y-2">
          {research.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 mt-0.5 flex-shrink-0 text-first" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

const memberships = [
    "Indian Medical Association (IMA)",
    "Indian Association of Gastrointestinal Endosurgeons (IAGES)",
    "Association of Surgeons of India (ASI)",
    "Society of Endoscopic and Laparoscopic Surgeons of Asia",
    "International College of Surgeons (ICS)",
    "Association of Minimal Access Surgeons of India (AMASI)",
    "Asia Pacific Hernia Society (APHS)",
    "Hernia Society of India (IHS)",
    "Obesity Surgery Society of India (OSSI)"
]


const fellowship = [
    "AMASI - FMAS (Fellow in Minimal Access Surgery)",
    "IAGES - FALS-Bariatric Surgery (Fellow in Advanced Laparoscopy Surgery)"
]

const currentPositions = [
    "Senior Consultant - Department of Minimal Access and Bariatric Surgery at Apollo Spectra Hospital, Kailash Colony, New Delhi",
    "Senior Consultant - Department of Minimal Access and Bariatric Surgery at Indraprastha Apollo Hospital, Sarita Vihar, New Delhi"
]

const experience = [
    "Department of Minimal Access Surgery - Max Super Specialty Hospital, Vaishali (January 2015 to August 2017)",
    "Department of GI and Minimal Access Surgery - R.G. Stone hospital, New Delhi (March 2011 to December 2014)",
    "Department of Gastro Intestinal and Minimal Access Surgery - RLKC hospital and Metro Heart Institute, New Delhi (January 2008 to February 2011)",
    "Department of Minimal Access and Bariatric Surgery - Arrowe Park Hospital, Wirral, Liverpool, U.K (March 2006 to December 2007)",
    "Department of Minimal Access and Bariatric Surgery - North Middlesex University Hospital, Edmonton, U.K (March 2005 to February 2006)",
]

const education = [
  "MBBS - Institute of Medical Sciences, Banaras Hindu University, India (1997)",
  "MS (General Surgery) - Institute of Medical Sciences, Banaras Hindu University, India (2002)",
  "MRCS - Royal College of Surgeons, Edinburgh, U.K. (2007)",
  "MMed (Surgery) - National University of Singapore, Singapore (2008)",
]

const publications = [
    "T.K.Lahiri, D.Agrawal, K.Agrawal: Pure Red Cell Aplasia associated with Thymoma: Case Report. Indian Journal of Chest Diseases & Allied Sciences, 2002; Vol. 44:249-252",
"T.K.Lahiri, D.Agrawal, K.Agrawal: Chest Wall Reconstruction in Primary Chest Wall Tumors and In Impalement Injury of the Chest. The Antiseptic, May 2002 Vol. 99 No. 5: 476-485",
"T.K.Lahiri, D.Agrawal, K.Agrawal: “Thoracic Outlet Syndrome – An Update”: The Antiseptic, Sep 2000; Vol. 97 No. 9: 413-418",
"T.K.Lahiri, D.Agrawal, K.Agrawal: “Primary Chest Wall Tumors” Indian Journal of Clinical Practice, April 1999; Vol.30 No.1: 33-38"
]

const research = [
    "Incidence of severe hypoproteinaemia in patients undergoing duodenal switch surgery: Arrow Park Hospital, Liverpool, U.K.",
"Advantages of laparoscopic appendicectomy and cost effectiveness: Arrow Park Hospital, Wirral, Liverpool, U.K.",
"Subcutaneous Emphysema in TEP patients: Incidence and Prevention: Dr. Ram Manohar Lohia Hospital, New Delhi,2004",
"Evaluation of Various Diagnostic Procedures in Bronchogenic Carcinoma: Institute of Medical Sciences, BHU, Varanasi"
]