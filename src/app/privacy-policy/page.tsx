"use client";
import Title from "@/components/Title";
import { useEffect, useRef, useState } from "react";

type Section = {
  id: string;
  title: string;
  htmlContent?: string;
  content: string;
};

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const sectionsRef = useRef<Section[]>([
    {
      id: "introduction",
      title: "Introduction",
      content: `DODO Design Agency ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, disclose, and safeguard your information when you interact with us through our website https://dododesign.africa/, services, or communications.`,
      htmlContent: `
    <p>DODO Design Agency ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use, disclose, and safeguard your information when you interact with us through our website <a href="https://dododesign.africa/" target="_blank" rel="noopener noreferrer" class="text-dodo-yellow hover:underline">https://dododesign.africa/</a>, services, or communications.</p>
  `,
    },
    {
      id: "information-we-collect",
      content: `We may collect the following types of information:
Personal data: Name, email, phone number, job title, company name, and country.
Technical data: IP address, browser type, device information, cookies, and usage data (e.g., pages visited, session duration).
Project-specific Data: Information shared during consultations, such as business goals, user research insights, or design preferences.
Third-party data: Publicly available information or data from partners (e.g., analytics providers like Google Analytics, AWS, MailChimp, LinkedIn, X or Instagram).
`,
      htmlContent: `<p>We may collect the following types of information:</p>
<ul class=" list-disc pl-6">
    <li>Personal data: Name, email, phone number, job title, company name, and country.</li>
    <li>Technical data: IP address, browser type, device information, cookies, and usage data (e.g., pages visited, session duration).</li>
    <li>Project-specific Data: Information shared during consultations, such as business goals, user research insights, or design preferences.</li>
    <li>Third-party data: Publicly available information or data from partners (e.g., analytics providers like Google Analytics, AWS, MailChimp, LinkedIn, X or Instagram).</li>
</ul>
`,
      title: "Information We Collect",
    },
    {
      id: "how-we-use-your-information",
      content: `We use your data to:
To answer any request, query, or inquiry you may submit through a contact form.
Provide the design and consulting services you may request for
Communicate about projects and updates.
Improve our website, services, and client experiences.
Comply with legal obligations and protect against fraud.
Send marketing communications (with your consent).
To enable you to register for an event or webinar
To provide access to reports, articles, or other documents for download
`,
      htmlContent: `<p>We use your data to:</p>
<ul class=" list-disc pl-6">
    <li> To answer any request, query, or inquiry you may submit through a contact form.</li>
    <li> Provide the design and consulting services you may request for</li>
    <li> Communicate about projects and updates.</li>
    <li> Improve our website, services, and client experiences.</li>
    <li> Comply with legal obligations and protect against fraud.</li>
    <li> Send marketing communications (with your consent).</li>
    <li> To enable you to register for an event or webinar</li>
    <li> To provide access to reports, articles, or other documents for download</li>
</ul
`,
      title: "How We Use Your Information",
    },
    {
      id: "legal-basis-for-processing",
      content: `We process data based on:
Performance of a contract: To fulfill service agreements.
Consent: For marketing or optional data collection.
Legitimate interests: To improve operations and security.
Legal compliance: To meet regulatory requirements.
By “legitimate interests”, we refer to necessary and proportionate data processing activities essential for DODO’s business operations, such as fraud prevention, service improvement, and secure client communication  where the benefits are balanced against individual privacy rights and do not override them..
`,
      htmlContent: `<p>We process data based on:</p>
<ul class=" list-disc pl-6">
    <li>Performance of a contract: To fulfill service agreements.</li>
    <li>Consent: For marketing or optional data collection.</li>
    <li>Legitimate interests: To improve operations and security.</li>
    <li>Legal compliance: To meet regulatory requirements.</li>

    <section class=" italic pt-4"> By “legitimate interests”, we refer to necessary and proportionate data processing activities essential for DODO’s business operations, such as fraud prevention, service improvement, and secure client communication  where the benefits are balanced against individual privacy rights and do not override them..</section>
</ul>
`,
      title: "Legal Basis for Processing",
    },
    {
      id: "data-sharing",
      content: `We may share your information with:
Partners: Collaborators (such as vendors, media partners, contract staff) on joint projects (with your consent).
Authorities: (Within or without Nigeria’s judiciary system as the case may be) If required by law or to protect our rights.
Affiliates: (Contract staff or team members) For internal administrative purposes.
`,
      htmlContent: `<p>We may share your information with:</p>
<ul class=" list-disc pl-6">
    <li>Partners: Collaborators (such as vendors, media partners, contract staff) on joint projects (with your consent).</li>
    <li>Authorities: (Within or without Nigeria’s judiciary system as the case may be) If required by law or to protect our rights.</li>
    <li>Affiliates: (Contract staff or team members) For internal administrative purposes.</li>
</ul>
`,
      title: "Data Sharing and Disclosure",
    },
    {
      id: "data-retention",
      content: `We retain personal data only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by applicable law. Retention periods are determined based on the nature of the data, the purpose for which it was collected, applicable legal obligations, and our legitimate business needs.
 Purpose of Data Collection
Service-Specific Retention:
Event registrations: Deleted within 30-90 days post-event (unless consent is given for future communications).
Client projects and contracts: Retained for 6 years post-project completion (to support warranty claims, audits, or contractual obligations).
User Accounts: Inactive accounts are purged after 24 months of dormancy.


 Legal, tax and regulatory requirements
Data such as tax records will be deleted on or before 6 years. 
Medical records will be deleted on or before 6 years unless legally required to retain it.
All other data will be retained only for the period necessary. 
We retain data based on these compliance policies.
European Union (GDPR):
Tax records: 6years (varies by member state).
Marketing consent: 1–2 years (with periodic re-consent checks).
Nigeria (NDPA):
“Necessary period” defined by purpose e.g., customer transactions are typically 5–7 years for financial audits.
Extended retention requires documented justification.
United States:
HIPAA medical records: 6 years post-last interaction (minimum).
California (CCPA): 12-month retention disclosures required for collected categories.


 Best Practices
Retention Schedule:
Marketing leads: 24 months (with opt-out mechanisms).
Contracts: 6 years post-termination (statute of limitations alignment).
Review Process:
Annual audits to reassess retention needs.
Secure deletion methods (e.g., cryptographic erasure for digital data).
`,
      htmlContent: `<p>We retain personal data only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by applicable law. Retention periods are determined based on the nature of the data, the purpose for which it was collected, applicable legal obligations, and our legitimate business needs.</p>

      
<p class="pt-5"> A. Purpose of Data Collection</p>
<ul class="list-disc pl-6 sm:pl-10">
    <li>Service-Specific Retention:</li>
        <ul class=" list-disc pl-6 sm:pl-10 py-2">
            <li>Event registrations: Deleted within 30-90 days post-event (unless consent is given for future communications).</li>
            <li>Client projects and contracts: Retained for 6 years post-project completion (to support warranty claims, audits, or contractual obligations).
            </li>
        </ul>
    <li>User Accounts: Inactive accounts are purged after 24 months of dormancy.</li>
</ul>
<p class="pt-5"> B.  Legal, tax and regulatory requirements</p>
<ul class="list-disc pl-6 sm:pl-10">
<li>Data such as tax records will be deleted on or before 6 years. </li>
<li>Medical records will be deleted on or before 6 years unless legally required to retain it.</li>
<li>All other data will be retained only for the period necessary. </li>
<li>We retain data based on these compliance policies:</li>
<ul class=" list-disc pl-6 sm:pl-10 py-2">
    European Union (GDPR):
    <ul class=" list-disc pl-6 sm:pl-10 py-2">
        <li>Tax records: 6years (varies by member state).</li>
        <li>Marketing consent: 1–2 years (with periodic re-consent checks).</li>
    </ul>
</ul>
<ul class=" list-disc pl-6 sm:pl-10 py-2">
Nigeria (NDPA):
    <ul class=" list-disc pl-6 sm:pl-10 py-2">
        <li>“Necessary period” defined by purpose e.g., customer transactions are typically 5–7 years for financial audits.</li>
        <li>Extended retention requires documented justification.</li>
    </ul>
</ul>
<ul class=" list-disc pl-6 sm:pl-10 py-2">
    United States:
        <ul class=" list-disc pl-6 sm:pl-10 py-2">
            <li>HIPAA medical records: 6 years post-last interaction (minimum).</li>
            <li>California (CCPA): 12-month retention disclosures required for collected categories.</li>
        </ul>
</ul>
</ul>
<p class="pt-5"> C.  Best Practices:</p>
<ul class="list-disc pl-6 sm:pl-10">
    <li>Retention Schedule:</li>
        <ul class=" list-disc pl-6 sm:pl-10 py-2">
            <li>Marketing leads: 24 months (with opt-out mechanisms).</li>
            <li>Contracts: 6 years post-termination (statute of limitations alignment).</li>
        </ul>
    <li>Review Process:</li>
        <ul class=" list-disc pl-6 sm:pl-10 py-2">
            <li>Annual audits to reassess retention needs.</li>
            <li>Secure deletion methods (e.g., cryptographic erasure for digital data).</li>
        </ul>
</ul>
`,
      title: "Data Retention",
    },
    {
      id: "data-security",
      content: `We implement technical and organizational measures to protect personal data against unauthorized access, loss, misuse, or alteration. This includes secure storage, restricted access, and staff training on data privacy practices. 
As data processors, especially operating in Nigeria and potentially across borders, DODO complies with several legal and ethical frameworks that govern how we handle personal data on behalf of clients, such as the Nigeria Data Protection Act (NDPA).
However, if DODO experiences a data breach, the company would follow a structured response to protect affected individuals and comply with legal obligations:

 Immediate Containment and Assessment
Upon discovering a breach, DODO would act quickly to contain the incident, prevent further data loss, and assess the scope and impact. This includes identifying what data was compromised, how the breach occurred, and which individuals or systems are affected.


Notification of Authorities
If the breach is likely to result in a risk to individuals’ rights and freedoms (such as identity theft or reputational harm), DODO would notify the relevant supervisory authority-such as the Nigeria Data Protection Commission (NDPC) or, if applicable, an EU Data Protection Authority-within 72 hours of becoming aware of the breach. The notification would include:
A description of the nature of the breach (including the types and approximate number of individuals and records affected)
Contact details for DODO’s Data Protection Officer or responsible contact
The likely consequences of the breach
Measures taken or proposed to address the breach and mitigate adverse effects.
C. Notification of Affected Individuals
If the breach poses a high risk to the rights and freedoms of affected individuals, DODO would also notify those individuals without undue delay. The communication would be clear and plain, explaining:
The nature of the breach
Likely consequences for the individual
Steps DODO has taken or will take to address the breach.
Advice on how individuals can protect themselves.
Contact details for further information or support.
D. Documentation and Review
DODO would document all breaches, regardless of severity, including the facts, effects, and remedial actions taken. This documentation enables regulatory review and helps DODO improve its data protection practices.

E. Ongoing Communication and Support
DODO would provide ongoing updates to both authorities and affected individuals as more information becomes available or as the situation evolves, ensuring transparency and trust.`,
      htmlContent: `
      <p>We implement technical and organizational measures to protect personal data against unauthorized access, loss, misuse, or alteration. This includes secure storage, restricted access, and staff training on data privacy practices. </p>

      <p class="py-3">As data processors, especially operating in Nigeria and potentially across borders, DODO complies with several legal and ethical frameworks that govern how we handle personal data on behalf of clients, such as the Nigeria Data Protection Act (NDPA).</p>

      <p>However, if DODO experiences a data breach, the company would follow a structured response to protect affected individuals and comply with legal obligations:</p>

      
<p class="pt-5"> A. Immediate Containment and Assessment:
    </br>
    <span>Upon discovering a breach, DODO would act quickly to contain the incident, prevent further data loss, and assess the scope and impact. This includes identifying what data was compromised, how the breach occurred, and which individuals or systems are affected.
    </span>
</p>

<p class="pt-5"> B. Notification of Authorities:
    </br>
    <span>If the breach is likely to result in a risk to individuals’ rights and freedoms (such as identity theft or reputational harm), DODO would notify the relevant supervisory authority-such as the Nigeria Data Protection Commission (NDPC) or, if applicable, an EU Data Protection Authority-within 72 hours of becoming aware of the breach. The notification would include:
    </span>
</p>
<ul class="list-disc pl-6 sm:pl-10">
    <li>A description of the nature of the breach (including the types and approximate number of individuals and records affected)</li>
    <li>Contact details for DODO’s Data Protection Officer or responsible contact</li>
    <li>The likely consequences of the breach</li>
    <li>Measures taken or proposed to address the breach and mitigate adverse effects.</li>
</ul>

<p class="pt-5"> C. Notification of Affected Individuals:
    </br>
    <span>IIf the breach poses a high risk to the rights and freedoms of affected individuals, DODO would also notify those individuals without undue delay. The communication would be clear and plain, explaining:
    </span>
</p>
<ul class="list-disc pl-6 sm:pl-10">
    <li>The nature of the breach</li>
    <li>Likely consequences for the individual</li>
    <li>Steps DODO has taken or will take to address the breach.</li>
    <li>Advice on how individuals can protect themselves.</li>
    <li>Contact details for further information or support.</li>
</ul>

<p class="pt-5"> D. Documentation and Review:
    </br>
    <span>DODO would document all breaches, regardless of severity, including the facts, effects, and remedial actions taken. This documentation enables regulatory review and helps DODO improve its data protection practices.
    </span>
</p>

<p class="pt-5"> E. Ongoing Communication and Support:
    </br>
    <span>DODO would provide ongoing updates to both authorities and affected individuals as more information becomes available or as the situation evolves, ensuring transparency and trust.
    </span>
</p>

`,
      title: "Data Security",
    },
    {
      id: "your-rights",
      content: `You have the right to:
Access, correct, or delete your personal data.
Withdraw consent for marketing or data processing.
Object to processing based on legitimate interests.
Request data portability (where applicable).
To exercise these rights, contact us at hello@dododesign.africa
If you are not satisfied with the response given, lodge complaints with the following supervisory authorities:
Nigeria Data Protection Commission (NDPC): Submit complaints via email to info@ndpc.gov.ng or visit their office in Abuja, Nigeria (If you are a Nigerian).
European Data Protection Supervisor (EDPS): Submit complaints via edps.europa.eu (If you are an EU citizen or live in any of the EU member states)`,
      htmlContent: `<p>You have the right to:</p>
<ul class="list-disc pl-6">
  <li>Access, correct, or delete your personal data.</li>
  <li>Withdraw consent for marketing or data processing.</li>
  <li>Object to processing based on legitimate interests.</li>
  <li>Request data portability (where applicable).</li>
  <li>To exercise these rights, contact us at <a href="mailto:hello@dododesign.africa" class="text-dodo-yellow hover:underline">hello@dododesign.africa</a></li>
  <li>If you are not satisfied with the response given, lodge complaints with the following supervisory authorities:
    <ul class="list-disc pl-6 mt-2">
      <li>Nigeria Data Protection Commission (NDPC): Submit complaints via email to <a href="mailto:info@ndpc.gov.ng" class="text-dodo-yellow hover:underline">info@ndpc.gov.ng</a> or visit their office in Abuja, Nigeria (If you are a Nigerian).</li>
      <li>European Data Protection Supervisor (EDPS): Submit complaints via <a href="https://edps.europa.eu" target="_blank" rel="noopener noreferrer" class="text-dodo-yellow hover:underline">edps.europa.eu</a> (If you are an EU citizen or live in any of the EU member states)</li>
    </ul>
  </li>
</ul>`,
      title: "Your Rights",
    },

    {
      id: "handle-data",
      content: `How We Handle Research Data
As a design and research consulting firm, the responsible collection, use, and protection of research data is central to our work. This includes all forms of data gathered through qualitative and quantitative methods such as interviews, focus group discussions, field observations, surveys, co-creation sessions, ethnographic studies, and digital interactions.
Types of Research Data We Handle
We may collect and process the following categories of research data:
Audio and video recordings from research interviews, FGDs, and workshops (with consent).
Photographs and visual artifacts created or captured during design or fieldwork activities.
Transcripts and notes from recorded sessions or observations.
Survey responses, including demographic and behavioral data.
Participant-generated content (e.g., sketches, co-creation worksheets, etc).
Consent forms.


Our Approach to Handling Research Data
Informed consent: Before any data collection begins, we obtain informed, voluntary consent from participants. This includes explaining:


The purpose of the research
What data will be collected
How it will be used
Who will have access to it
The participant’s right to withdraw at any time


Anonymization and de-identification: Wherever possible, we remove or obscure personal identifiers from research data to protect participant identity. This includes using pseudonyms in transcripts and reports, and blurring or cropping identifiable features in visuals.


Data minimization: We only collect data that is necessary for the specific project goals, and we avoid excessive or intrusive data collection practices.


Secure storage: Research Data is stored on secure servers hosted with reputable cloud providers, like AWS, which offer advanced security features All data is encrypted both in transit and at rest using strong encryption protocols. Physical materials (e.g., handwritten notes or forms) are kept in locked, access-controlled environments. Access to data is limited to authorized project team members..


Data sharing and use:


Research data is only shared with clients, collaborators (such as vendors, media partners) or external parties when necessary for project outcomes, and only in anonymized or aggregated form unless otherwise consented to.


Any use of data for secondary research, publications, or case studies is subject to a separate consent process or ethical review, where applicable.


Data retention and deletion: We retain research data for a specified period based on project needs, legal obligations, or client agreements. After this period, we securely delete or archive the data following best practices and ethical guidelines.


Participant rights: Research participants have the right to:


Access the data they provided,
Request corrections or clarifications,
Withdraw their data (unless anonymized or already used in aggregate),
Request deletion of their data from our systems, where applicable.
8. Ethical oversight and responsibility: We are committed to conducting ethical, inclusive, and culturally sensitive research across all the communities we work with. Our team is trained in research ethics, data protection, and responsible storytelling. We also align our practices with global research ethics guidelines, including ESOMAR, the Belmont Report, and local IRB requirements when applicable.

9. Cross-Border Data Transfers
There may be instances where personal or research data collected in Nigeria (or outside Nigeria) is transferred to other countries for processing, storage, or collaboration purposes.
These transfers may occur, for example, when:
We collaborate with international clients or partners who need access to anonymized research insights or data.


We use cloud-based platforms or services (e.g., transcription tools, data analytics platforms, storage services) hosted outside Nigeria.


Team members or consultants located in other countries need to access project files or research findings.
To safeguard personal and sensitive data transferred outside Nigeria, we implement the following protective measures.
Legal compliance: All cross-border transfers are conducted in accordance with the Nigeria Data Protection Act (NDPA), which requires that data transfers only occur to countries that have adequate data protection laws or where proper safeguards are in place.


Adequate decisions and jurisdiction checks: Where possible, we only transfer data to countries or organizations that are recognized by the Nigerian authorities or relevant international frameworks (e.g., the EU) as having adequate levels of data protection.


Data Transfer Agreements (DTAs): We enter into legally binding agreements such as Standard Contractual Clauses (SCCs) or Data Processing Agreements (DPAs) with third-party service providers, clients, or international partners to ensure the protection and confidentiality of transferred data.


Anonymization and pseudonymization: Whenever feasible, we anonymize or pseudonymize personal or research data before transferring it. This minimizes risks in the unlikely event of a data breach or unauthorized access.


Vendor due diligence: We thoroughly vet international vendors and partners, especially those providing cloud, analytics, or communication services, to ensure they meet high data security and privacy standards.


Security measures: All cross-border data transfers are protected using encryption, secure file-sharing protocols, and access controls to prevent unauthorized access, interception, or loss of data.
`,
      htmlContent: `<p>As a design and research consulting firm, the responsible collection, use, and protection of research data is central to our work. This includes all forms of data gathered through qualitative and quantitative methods such as interviews, focus group discussions, field observations, surveys, co-creation sessions, ethnographic studies, and digital interactions.</p>

<p class="py-6 font-bold">Types of Research Data We Handle<p>

<p">We may collect and process the following categories of research data:</p>

<ul class="list-disc py-6 pl-16">
    <li>Audio and video recordings from research interviews, FGDs, and workshops (with consent).</li>
    <li>Photographs and visual artifacts created or captured during design or fieldwork activities.</li>
    <li>Transcripts and notes from recorded sessions or observations.</li>
    <li>Survey responses, including demographic and behavioral data.</li>
    <li>Participant-generated content (e.g., sketches, co-creation worksheets, etc).</li>
    <li>Consent forms.</li>
</ul>

<p class="py-6 font-bold">Our Approach to Handling Research Data<p>

<ul class="list-none pt-6 pl-6 sm:pl-10">
    <li class="pb-6">
        A. Informed consent: Before any data collection begins, we obtain informed, voluntary consent from participants. This includes explaining:
        <ul class="list-disc py-6 pl-16">
            <li>The purpose of the research</li>
            <li>What data will be collected</li>
            <li>How it will be used</li>
            <li>Who will have access to it</li>
            <li>The participant’s right to withdraw at any time</li>
        </ul>
    </li>
    <li class="pb-6">
        B. Anonymization and de-identification: Wherever possible, we remove or obscure personal identifiers from research data to protect participant identity. This includes using pseudonyms in transcripts and reports, and blurring or cropping identifiable features in visuals.
    </li>
    <li class="pb-6">
       C. Data minimization: We only collect data that is necessary for the specific project goals, and we avoid excessive or intrusive data collection practices.
    </li>
    <li class="pb-6">
       D. Secure storage: Research Data is stored on secure servers hosted with reputable cloud providers, like AWS, which offer advanced security features All data is encrypted both in transit and at rest using strong encryption protocols. Physical materials (e.g., handwritten notes or forms) are kept in locked, access-controlled environments. Access to data is limited to authorized project team members..
    </li>
    <li class="pb-6">
      5. Data sharing and use:
       <ul class="list-disc py-6 pl-16">
            <li>Research data is only shared with clients, collaborators (such as vendors, media partners) or external parties when necessary for project outcomes, and only in anonymized or aggregated form unless otherwise consented to.</li>
            <li>Any use of data for secondary research, publications, or case studies is subject to a separate consent process or ethical review, where applicable.</li>
        </ul>
    </li>
    <li class="pb-6">
      6. Data retention and deletion: We retain research data for a specified period based on project needs, legal obligations, or client agreements. After this period, we securely delete or archive the data following best practices and ethical guidelines.
    </li>
    <li class="pb-6">
      7. Participant rights: Research participants have the right to:
       <ul class="list-disc py-6 pl-16">
            <li>Access the data they provided,</li>
            <li>Request corrections or clarifications,</li>
            <li>Withdraw their data (unless anonymized or already used in aggregate),</li>
            <li>Request deletion of their data from our systems, where applicable.</li>
        </ul>
    </li>

    <li class="pb-6">
        8. Ethical oversight and responsibility: We are committed to conducting ethical, inclusive, and culturally sensitive research across all the communities we work with. Our team is trained in research ethics, data protection, and responsible storytelling. We also align our practices with global research ethics guidelines, including ESOMAR, the Belmont Report, and local IRB requirements when applicable.
    </li>
    
    <li>
        <span>9. Cross-Border Data Transfers: There may be instances where personal or research data collected in Nigeria (or outside Nigeria) is transferred to other countries for processing, storage, or collaboration purposes.</span>


        <span>These transfers may occur, for example, when:</span>
        <ul class="list-disc py-6 pl-16">
            <li>We collaborate with international clients or partners who need access to anonymized research insights or data.</li>
            <li>We use cloud-based platforms or services (e.g., transcription tools, data analytics platforms, storage services) hosted outside Nigeria.</li>
            <li>Team members or consultants located in other countries need to access project files or research findings.</li>
        </ul>
        <span>To safeguard personal and sensitive data transferred outside Nigeria, we implement the following protective measures.</span>
        <ul class="list-none pt-6 pl-16">
                <li class="py-3">A. Legal compliance: All cross-border transfers are conducted in accordance with the Nigeria Data Protection Act (NDPA), which requires that data transfers only occur to countries that have adequate data protection laws or where proper safeguards are in place.</li>
               <li class="py-3">B. Adequate decisions and jurisdiction checks: Where possible, we only transfer data to countries or organizations that are recognized by the Nigerian authorities or relevant international frameworks (e.g., the EU) as having adequate levels of data protection.</li>
                <li class="py-3">C. Data Transfer Agreements (DTAs): We enter into legally binding agreements such as Standard Contractual Clauses (SCCs) or Data Processing Agreements (DPAs) with third-party service providers, clients, or international partners to ensure the protection and confidentiality of transferred data.</li>
                <li class="py-3">D. Anonymization and pseudonymization: Whenever feasible, we anonymize or pseudonymize personal or research data before transferring it. This minimizes risks in the unlikely event of a data breach or unauthorized access.</li>
                <li class="py-3">E. Vendor due diligence: We thoroughly vet international vendors and partners, especially those providing cloud, analytics, or communication services, to ensure they meet high data security and privacy standards.</li>
                <li class="pt-3">F. Security measures: All cross-border data transfers are protected using encryption, secure file-sharing protocols, and access controls to prevent unauthorized access, interception, or loss of data.</li>
        </ul>
    </li>


</ul>
`,
      title: "How We Handle Research Data",
    },
    {
      id: "cookies-tracking",
      content: `Cookies are small text files placed on your device (computer, phone, or tablet) when you visit our website. They help us recognize your device, analyze traffic, remember preferences, and improve functionality. You can manage preferences via your browser settings.

Types of cookies we use:
Essential cookies: Essential cookies are necessary for the basic functionality of our website, ensuring features like login and payment processing work smoothly. For example, session cookies can help keep a user logged in as they navigate different pages of a website, while security cookies protect against fraud; these cookies typically expire once you close your browser, and these types of cookies are always active.
Analytics cookies: Analytics cookies are used to track how visitors interact with our site-such as which pages are visited and how often, helping us improve performance and user experience. Common examples include Google Analytics and Hotjar, which may collect anonymized data like IP addresses, browser types, and referral URLs; these cookies usually have a lifespan ranging from 30 days to two years.
Marketing cookies: Marketing or tracking cookies are primarily used to deliver personalized advertisements and monitor the effectiveness of marketing campaigns. They help us understand your interests by collecting information such as the ads you click on, your browsing behavior across different websites, and your engagement with marketing content. Common examples include tools like Facebook Pixel and LinkedIn Ads. The data gathered by these cookies is used to tailor advertising to your preferences and to analyze campaign performance.
Preference cookies are designed to remember your individual settings and choices, such as your selected language, preferred font size, or regional preferences. By storing these details, these cookies ensure a more personalized and consistent user experience each time you visit the site. Examples include "remember me" login cookies and theme selectors, which help the website recall your preferences without requiring you to reset them on every visit. The lifespan of preference cookies usually ranges from six to twelve months.

How consent is obtained: When you first visit our website, a cookie banner will appear, allowing you to:
Accept all cookies (essential, analytics, marketing, etc.),
Reject all except strictly necessary cookies, or
Customize preferences (e.g., allow analytics but block marketing cookies).
Withdrawing or changing consent:
Persistent tool: Use the button in the website footer to adjust preferences anytime.
Browser settings: Block or delete cookies via your browser’s privacy/security settings (e.g., Chrome: Settings > Privacy and Security > Cookies). Note: Blocking cookies may limit site functionality.`,
      htmlContent: `<p>Cookies are small text files placed on your device (computer, phone, or tablet) when you visit our website. They help us recognize your device, analyze traffic, remember preferences, and improve functionality. You can manage preferences via your browser settings.</p>

<p class="pt-6">A. Types of cookies we use:</p>
    <ul class="list-disc py-6 pl-6 sm:pl-10">
        <li>Essential cookies: Essential cookies are necessary for the basic functionality of our website, ensuring features like login and payment processing work smoothly. For example, session cookies can help keep a user logged in as they navigate different pages of a website, while security cookies protect against fraud; these cookies typically expire once you close your browser, and these types of cookies are always active.</li>
        <li>Analytics cookies: Analytics cookies are used to track how visitors interact with our site-such as which pages are visited and how often, helping us improve performance and user experience. Common examples include Google Analytics and Hotjar, which may collect anonymized data like IP addresses, browser types, and referral URLs; these cookies usually have a lifespan ranging from 30 days to two years.</li>
        <li>Marketing cookies: Marketing or tracking cookies are primarily used to deliver personalized advertisements and monitor the effectiveness of marketing campaigns. They help us understand your interests by collecting information such as the ads you click on, your browsing behavior across different websites, and your engagement with marketing content. Common examples include tools like Facebook Pixel and LinkedIn Ads. The data gathered by these cookies is used to tailor advertising to your preferences and to analyze campaign performance.</li>
        <li>Preference cookies are designed to remember your individual settings and choices, such as your selected language, preferred font size, or regional preferences. By storing these details, these cookies ensure a more personalized and consistent user experience each time you visit the site. Examples include "remember me" login cookies and theme selectors, which help the website recall your preferences without requiring you to reset them on every visit. The lifespan of preference cookies usually ranges from six to twelve months.</li>
            
    </ul>
<p class="pt-6">B. How consent is obtained: When you first visit our website, a cookie banner will appear, allowing you to:</p>
    <ul class="list-disc py-6 pl-6 sm:pl-10">
        <li>Accept all cookies (essential, analytics, marketing, etc.),</li>
        <li>Reject all except strictly necessary cookies, or</li>
        <li>Customize preferences (e.g., allow analytics but block marketing cookies).</li>         
    </ul>

<p class="pt-6">Withdrawing or changing consent:</p>
    <ul class="list-disc py-6 pl-6 sm:pl-10">
        <li>Persistent tool: Use the button in the website footer to adjust preferences anytime.</li>
        <li>Browser settings: Block or delete cookies via your browser’s privacy/security settings (e.g., Chrome: Settings > Privacy and Security > Cookies). Note: Blocking cookies may limit site functionality.</li>
    </ul>`,
      title: "Cookies and Tracking Technologies",
    },
    {
      id: "children",
      content: `Our services are not intended for individuals under the age of 16, or under the legal age of digital consent in their respective jurisdiction, whichever is higher.

In cases where we intentionally process children’s data (e.g., educational projects, youth-focused initiatives):
Parental consent
We require verifiable parental consent (e.g., signed consent forms, video call verification, or credit card confirmation as per applicable law).
Data collection & use
Minimal data: Collect only information necessary for the specific service (e.g., first name, age, project-related inputs).
No sensitive data: Avoid collecting location, biometrics, or health information without explicit justification and additional safeguards.
Purpose limitation: Use data solely for the stated purpose (e.g., educational workshops, design prototypes) and delete it once the purpose is fulfilled.
Parental rights
Access/deletion: Parents/guardians may review, correct, or request deletion of their child’s data. To exercise these rights, parents/guardians may contact us at our designated email address.
Withdrawal: Consent can be withdrawn at any time, after which we will cease processing and delete existing data where feasible.
Security & transparency
Encryption: Data is encrypted in transit and at rest.
Age-appropriate notices: Provide simplified, child-friendly explanations of data practices when interacting directly with minors.
Third parties: Disclose any partners (e.g., schools, NGOs) involved in data processing and ensure contractual compliance with child protection laws.


Exceptions
Incidental collection: If we inadvertently collect a child’s data without consent, we will delete it immediately upon discovery.
Legal compliance: Data may be retained where required by law (e.g., safeguarding obligations) or to protect the child’s vital interests.
`,
      htmlContent: `<p class="pb-4">Our services are not intended for individuals under the age of 16, or under the legal age of digital consent in their respective jurisdiction, whichever is higher.</p>

<p class="pb-4">In cases where we intentionally process children’s data (e.g., educational projects, youth-focused initiatives):</P>
<p class="pt-5">A. Parental consent</p>
    <ul class="list-disc pl-16">
            <li>
                We require verifiable parental consent (e.g., signed consent forms, video call verification, or credit card confirmation as per applicable law).
            </li>
    </ul>
<p class="pt-5">B. Data Collection & use</p>
    <ul class="list-disc pl-16">
        <li>Minimal data: Collect only information necessary for the specific service (e.g., first name, age, project-related inputs).</li>
        <li>No sensitive data: Avoid collecting location, biometrics, or health information without explicit justification and additional safeguards.</li>
        <li>Purpose limitation: Use data solely for the stated purpose (e.g., educational workshops, design prototypes) and delete it once the purpose is fulfilled.</li>
    </ul>
<p class="pt-5">C. Parental rights</p>
    <ul class="list-disc pl-16">
        <li>Access/deletion: Parents/guardians may review, correct, or request deletion of their child’s data. To exercise these rights, parents/guardians may contact us at our designated email address.</li>
        <li>Withdrawal: Consent can be withdrawn at any time, after which we will cease processing and delete existing data where feasible.</li>
    </ul>
<p class="pt-5">D. Security & transparency</p>
    <ul class="list-disc pl-16">
        <li>Encryption: Data is encrypted in transit and at rest.</li>
        <li>Age-appropriate notices: Provide simplified, child-friendly explanations of data practices when interacting directly with minors.</li>
        <li>Third parties: Disclose any partners (e.g., schools, NGOs) involved in data processing and ensure contractual compliance with child protection laws.</li>
    </ul>
<p class="pt-5">E. Exceptions</p>
    <ul class="list-disc pl-16">
        <li>Incidental collection: If we inadvertently collect a child’s data without consent, we will delete it immediately upon discovery.</li>
        <li>Legal compliance: Data may be retained where required by law (e.g., safeguarding obligations) or to protect the child’s vital interests.</li>
    </ul>
`,
      title: "Children's Privacy",
    },
    {
      id: "updates",
      content: `Effective as of April 2025
This Privacy Policy is effective as of April 2025 and will remain in force unless revised. We reserve the right to update or modify this Policy at any time. Any changes will be posted on this page, and we encourage you to review it periodically.
Your continued use of our services after any changes are posted will constitute your acknowledgment of those changes and your agreement to be bound by the updated Privacy Policy.
If we make any material changes to this Policy, we will provide prominent notice on our website to inform you.
`,
      title: "Updates to This Policy",
    },
    {
      id: "contact-us",
      content: `For questions or requests, contact:
Email: hello@dododesign.africa.
Phone number: +234 809 522 1113
Address: 2nd floor, Landmark House, 52-54 Isaac John St, Ikeja GRA, Lagos 101233, Lagos.
`,
      title: "Contact Us",
    },
    // {
    //   id: "children",
    //   content: ``,
    //   title: "Children's Privacy",
    // },
  ]);

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.2, // 20% visibility required
      rootMargin: "-20% 0px -50% 0px", // Top 20%, bottom 65%
    }
  );

  // Observe all sections
  sectionsRef.current.forEach(({ id }) => {
    const section = sectionRefs.current[id];
    if (section) {
      observer.observe(section);
    }
  });
  const hash = window.location.hash.replace("#", "");
  if (hash && sectionRefs.current[hash]) {
    setTimeout(() => scrollToSection(hash), 100);
  }

  return () => {
    sectionsRef.current.forEach(({ id }) => {
      const section = sectionRefs.current[id];
      if (section) observer.unobserve(section);
    });
  };
}, []);

  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      setActiveSection(id);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="px-5 md:px-10 lg:px-[100px] pb-[100px]">
      <div className="header py-10 lg:pt-[160px] lg:pb-[100px]">
        <Title
          text="Privacy Policy"
          className="font-helvetica-bold! tracking-[-1%] md:tracking-[-3px]"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-[140px] min-h-screen">
        {/* Side Navigation */}
        <div className="hidden lg:block w-[380px] bg-white sticky top-40 h-[calc(100vh-160px)] overflow-y-auto">
          <nav>
            <ul className="flex flex-col gap-8">
              {sectionsRef.current.map((section, index) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left leading-[120%] tracking-[-1%] text-[20px] rounded-md transition-colors cursor-pointer ${
                      activeSection === section.id
                        ? "text-dodo-yellow font-helvetica-bold"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {index + 1}. {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 sm:gap-20">
            {sectionsRef.current.map((section, index) => (
              <section
                key={section.id}
                ref={(el) => { 
                  sectionRefs.current[section.id] = el;
                }}
                id={section.id}
                className="scroll-mt-20 flex flex-col gap-6"
              >
                <h2 className="text-xl sm:text-2xl font-helvetica-bold leading-[160%] tracking-[-3%] text-dodo-black mb-0"    >
                  {index + 1}. {section.title}
                </h2>
                <div className="space-y-4 text-gray-700">
                  {section.htmlContent ? (
                    <div
                      className="font-inter text-dodo-black sm:text-[22px] leading-[160%] tracking-[-3%]"
                      dangerouslySetInnerHTML={{ __html: section.htmlContent }}
                    />
                  ) : (
                    section.content.split("\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="font-inter sm:text-[22px] leading-[160%] tracking-[-3%]"
                      >
                        {paragraph}
                      </p>
                    ))
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
