interface Project {
  id: number;
  image: string;
  hoverImage?: string;
  extraImage?: string;
  category: string;
  title: string;
  widthClass: string;
  client: string;
}

export const projects: Project[] = [
  {
    id: 1,
    image: "/Images/Projects/Project-1A.png",
    hoverImage: "/Images/Pages/project-1.jpg",
    extraImage: "",
    category: "Design & Strategy",
    title: "Reducing Loss in Nigeria's Tomato Production",
    widthClass: "w-3/5",
    client: "Rockefeller Foundation & Pyxera Global",
  },
  {
    id: 2,
    image: "/Images/Projects/Project-2A.png",
    hoverImage: "/Images/Pages/project-2c.png",
    extraImage: "/Images/Pages/project-2A-Extra.png",
    category: "Design & Strategy",
    title: "Designing a Solution for Nigeria's Wealthiest Individuals",
    widthClass: "w-2/5",
    client: "Union Bank of Nigeria",
  },
  {
    id: 3,
    image: "/Images/Projects/Project-1B.jpg",
    hoverImage: "/Images/Pages/project-3.png",
    extraImage: "",
    category: "Design & Strategy",
    title:
      "Designing a System to Improve Learning for Children Ages 5-8 in Lagos State",
    widthClass: "w-2/5",
    client: "Lagos State Public Schools (Pro-Bono)",
  },
  {
    id: 4,
    image: "/Images/Projects/Project-2Bb.png",
    hoverImage: "/Images/Projects/Project-2B.png",
    extraImage: "",
    category: "Design & Strategy",
    title:
      "Designing a User-Centered Approach to Non-Hormonal Contraceptive Solutions",
    widthClass: "w-3/5",
    client: "Gates Foundation",
  },
  {
    id: 5,
    image: "/Images/Projects/Project-5.png",
    category: "Design & Strategy",
    title: "Reimagining Women's Health with Human-Centered Design",
    widthClass: "w-3/5",
    client: "Gates Foundation",
  },
];

export const projectDetails = [
  {
    id: 1,
    heroImage: "/Images/Projects/Project1/hero.png",
    urlTitle: "Reducing Loss in Nigeria's Tomato Production",
    title:
      "Identifying Opportunities to Minimize Losses in Nigeria’s Tomato Production",
    description:
      "Nigeria is one of the world’s largest producers of tomatoes, with a large population that consumes tomatoes on a daily basis, the nation consumes more than is produced. Coupled with the huge loss that occurs during and after the harvesting of the fragile fruit, the country suffered an estimated 40% of tomato loss. This deficit caused the country to greatly rely on imports to satisfy demand, with $1 billion spent yearly to import tomato paste, while 75 percent of the local harvest goes to waste, mainly post-harvest. ",
    client: "Rockefeller Foundation & Pyxera Global",
    location: "lagos, kano, port harcourt, Nigeria",
    content: [
      {
        text: "<p>Within post harvest practices, the handling technologies, also known as raffia baskets, account for much of this loss. In working with The Rockefeller Foundation, we were asked to conduct research into Post-Harvest Loss (PHL) in the country’s tomato value chain, specifically looking at how this loss happens while the fragile fruits are handled and transported in the baskets, on their post-harvest journey from farm to market.</p><p> After 2 and a half months, 6 states, countless farms and open markets, we compiled data obtained from hours of field work and synthesis, submitted a robust report containing rich data, recommendations, and insights to stakeholders.</p><p> Today, partly due to efforts from the initiative, tomato production has increased to about 2.3 million tonnes, from 1.7 million tonnes prior to the initiative.</p>",

        caption: "Prototypes of different shapes and materials were explored to guage the containers' effectiveness",
        images: ["/Images/Projects/Project1/1.png"],
      },
      {
        text: "<p class=leading-[140%]><strong class=' leading-[120%] font-helvetica-bold'>Designing new ways of farming and harvesting tomatoes</strong></p> <p class=pt-4>  We immersed ourselves in the farms, homes and communities of about 300 farmers, basket weavers, and stakeholders, using methods like in-situ observation, contextual inquiries​​​​​​​ and community engagement discussions. We focused not only on the journey of the tomatoes, but that of the baskets as well, from ‘market’- where the baskets are built, sold and purchased, to ‘farms’- and then to the tomato markets, where the produce is sold, and then to disintegration (or recycling in some cases).</p><p> We tested different forms and shapes using paper explorations to more high fidelity prototypes using materials like raffia, the local ‘geza’, and bamboo. Our testing with farmers and basket makers highlighted their affinities and trust levels to new technologies.</p><p>To substantiate our findings from qualitative research, we carried out quantitative research with close to 300 male and female tomato farmers from various Local Government Areas in the country’s top tomato producing locale. In doing this, we discovered patterns in the farmers’ use of the current baskets, their level of affinity to new technology, as well as their expectations of price and value.</p><p>Our report held rich and vivid data, discoveries, recommendations and insights recorded and delivered to the Rockefeller Foundation. This was designed to inform and equip stakeholders’ actions, in the most seamless way, towards successfully handling tomatoes post-harvest.</p>",

        caption: "",
        images: ["/Images/Projects/Project1/2.png"],
      },
      {
        text: "<p class=leading-[140%]><strong class=' leading-[120%] font-helvetica-bold'>Decreasing Post-Harvest Loss Over the Years</strong></p> <p class=pt-4>  As of 2020, tomato production has increased from about 1.7 million tons to 2.3 million tons, thanks to this initiative, as well as many ongoing efforts of others across the nation. Though national demand stands at about 3 million tons, the improvement over the years and the ongoing efforts being implemented continue to push towards growth.</p>",

        caption: "Testing prototypes of basket forms and shapes",
        images: ["/Images/Projects/Project1/3.png"],
      },
    ],
    quote:
      "To effectively reduce loss, both farmers and basket makers must embrace change, and for them to embrace change, a  visible, tangible demonstration as to the benefits of this new change will enable adoption and acceptance of the new system.",
    methods: [
      "Context inquiry",
      "Stakeholder mapping",
      "Participant recruitment",
      "In-situ observational research",
      "Community engagement sessions",
      "Quantitative research",
      "Prototyping",
      "Stakeholder report building",
    ],
  },
  {
    id: 2,
    heroImage: "/Images/Projects/Project2/hero.png",
    urlTitle: "Designing a Solution for Nigeria's Wealthiest Individuals",
    title: "Designing a Solution for Nigeria’s Wealthiest Individuals",
    description:
      "In 2019, Union Bank of Nigeria asked us to work with their product and strategy team to validate hypotheses they’d gotten in extensive market research and then to uncover opportunities within the High Net-worth Individuals’ (HNWIs or HNIs) customer segment for their digital app. ",
    client: "Union Bank of Nigeria",
    location: "lagos, port harcourt, & kano, Nigeria",
    content: [
      {
        text: "<p>Our team travelled to 3 core geo-political regions that gave an apt cultural representation of the people group we were studying. We carried out in-depth contextual research and later prototyped and tested probable solutions, as well as hypotheses that the bank’s strategy team already gathered with users within the demographic.</p> <p class=' py-3'> The result was a submission of a robust prototype along with a report that shared rich insights and recommendations in the behaviour patterns, lifestyles, goals and needs of this affluent group.</p><p> All this led to a successful 2021 launch of a financial product that catered to the unique financial and lifestyle needs of the HNI segment in the country.</p>",

        caption: "Photo credit: ImageFX",
        images: ["/Images/Projects/Project2/1.png"],
      },
      {
        text: "<p class=leading-[140%]><strong class=' leading-[120%] font-helvetica-bold'>Understanding Nigeria’s Wealthy through contextual research and multiple prototyping and testing</strong></p> <p class=pt-4>  To answer the bank’s brief, we studied over 100 individuals across 3 key states. For a period of 5 weeks, we immersed ourselves in the lives of CEOs, CFOs, multi-millionaire business men and women, young millionaires and investors. We visited their workplaces, homes, social gatherings and places of leisure to learn about everything that was important to them and finally their relationship to money.</p> <p class=pt-4>  thematic analysis, we drew out insights from our findings, interpreted them into features and interactions on a digital platform, and then carried out a series of prototyping and testing sessions with users. We tested with low fidelity paper prototypes, and then with more refined prototypes on digital devices, as we continued getting feedback.</p>",

        caption: "Capturing a moment from our synthesis session",
        images: ["/Images/Projects/Project2/2.png"],
      },
      {
        text: "Leveraging the insights we’d arrived at enabled us to develop features that resonated with this people group by catering to their growing needs and desires. For instance, we discovered that the affluent gravitate more towards more exclusive rewarding experiences as they rise, this resulted as a feature on the app that can be described as a digital replica of an exclusive private club experience containing all the bells and whistles that the uber wealthy were accustomed to, from private, luxurious events to exclusive investments deals. ",

        caption: "Insights derived from our research",
        images: [
          "/Images/Projects/Project2/3.png",
          "/Images/Projects/Project2/4.png",
          "/Images/Projects/Project2/5.png",
        ],
      },
      {
        text: "<p>Learning that the HNIs had an incredibly soft spot for families, regardless of their past experience, upbringing, religion and even cultural influences, we designed the product to tie in the inclusion of family-oriented goals and needs. A feature we built around this insight was grounded in the fact that wealthy Nigerians often sent their children overseas to study. Tying their financial goals to their love of family, we developed an avenue for investing on the app that allowed them to put away money required for this stage of their families’ lives.</p> <p class='pt-3'> Building from a place of understanding and insight, the final outcome was a solid financial product that combined investment opportunities with personalized lifestyle solutions for the HNI. The solution was well received by the public at its March 2021 launch, and has since grown to reach more customer segments.</p>",

        caption: "Hi-fidelity prototypes tested with participants",
        images: ["/Images/Projects/Project2/6.png"],
      },
    ],
    quote:
      "Nigeria’s affluent value exclusive experiences. Their status in life and their journey to arrive at it has nurtured a desire for private and exclusive networks and experiences that are invaluable.",
    methods: [
      "Persona Mapping",
      "Participant recruitment",
      "Contextual-interviews",
      "Observation",
      "Wire-framing",
      "Thematic analysis",
      "Prototyping",
    ],
  },
  {
    id: 3,
    heroImage: "/Images/Projects/Project3/hero.png",
    urlTitle:
      "Designing a System to Improve Learning for Children Ages 5-8 in Lagos State",

    title:
      "Designing a System to Improve Learning for Children Ages 5-8 in Lagos State",
    description:
      "In sub-Saharan Africa, a large percentage of children lack access to quality education. To address this problem in Nigeria, we set out to explore ways to improve the learning and development of children of ages 5-8 years within the underclass public school system. Carrying out Human-centered design, the team leveraged design methods to design a measurable and resourceful system that employs the efforts of the key trifecta: parents, teachers and children, to track, measure and improve children’s learning and development.",
    client: "Lagos State Public Schools (Pro-Bono)",
    location: "lagos, nigeria ",
    content: [
      {
        text: "<p>We studied a total of 15 teachers, multiple students and parents in two different tiers of public schools: Federal and State, engaging with parents at home and in PTA (Parent Teacher Associations) Meetings, carrying out semi-structured interviews, intercepts, shadowing and observations to learn about their beliefs, lifestyles and experiences with children’s learning, and at school environments. We probed into their future aspirations and current experiences around education, and collected data into themes, drawing out insights and turning them into ideas to test further.</p> <p class='mt-3'>We quickly discovered that though many existed, there were 3 main characters at play when considering the learning and development of the average 5-8 year old public school child. Parents, teachers and the children themselves were integral to a child’s successful development and leveraging their relationship in the context of Nigerian public school education had the potential to greatly improve the development of the public school child, in the early years. </p>",

        caption: "SWOT analysis for children’s Learning and Development",
        images: ["/Images/Projects/Project3/1.png"],
      },
      {
        text: "<p>Inspired by the SWOT framework, we converted the elements into 4 areas we discovered many of the children we studied fell into in their learning and development journey. Under each category, each child is evaluated by i) activities and habits that they are strong in, ii) those that they need to improve on, iii) those that they show potential to thrive in, and iv) those that they should avoid. In the child’s development, we focused on 6 key areas of development - <strong class='leading-[120%] font-helvetica-bold'>General, Social, Language, Literacy, Math & Logic and Other Skills.</strong> </p><p class='mt-3'>Using friendly and visually engaging aides, we created prototypes using physical and digital means. For physical prototypes, we used color coded sheets where stakeholders could grade each child’s ‘performance’ simply on paper, and access resources on a simple digital platform. With a diverse audience in mind, we devised a basic way feature phones could be used by parents who didn’t have smart phones or weren’t tech savvy so they could actively participate in accessing resources to help their children at home, while sharing information.</p>",

        caption: "Testing prototypes with teachers",
        images: ["/Images/Projects/Project3/2.png"],
      },
      {
        text: "We built a working prototype of the system, made up of a framework that employs the efforts of the key trifecta: parents, teachers and children, to track and measure their learning progress. The framework contains an easy grading, reward and support resource that allows all 3 stakeholders: parents, children and teachers to measure where a child is excelling or needing assistance in 6 core developmental areas. The solution provides all stakeholders, from active web users to those with limited technical skills, seamless access to curated resources through the web, SMS (for feature phones), or printed materials, ensuring targeted support for each child. During prototype testing, we discovered that teachers were already overwhelmed with their daily responsibilities. To address this, we integrated the system directly into their term plans and the school’s existing schedule. This approach offered structure, support, and ease, allowing instructors to use the tool effortlessly.",

        caption: "The Uplearn framework for learning",
        images: ["/Images/Projects/Project3/3.png"],
      },
    ],
    quote:
      "The ‘AHA’ moment for us came when we understood that there was already a powerful network between the trifecta of parents, children and teachers, and leveraging this triad to aid children’s learning, could be a game-changer.",
    methods: [
      "Secondary research",
      "Ethnographic research",
      "Semi-structured interviews",
      "Synthesis and analysis",
      "UX research and design",
      "Prototyping",
    ],
  },
  {
    id: 4,
    heroImage: "/Images/Projects/Project4/hero.png",
    urlTitle:
      "Designing a User-Centered Approach to Non-Hormonal Contraceptive Solutions",
    title:
      "A User-Centered Approach to Designing Non-Hormonal Contraceptive Solutions",
    description:
      "Millions of women around the world lack access to optimal healthcare in varied forms, in countries such as Nigeria, Kenya and India, one of those ways is lack of adequate family planning and contraception methods. In Nigeria, less than 17% of married women aged 15 to 49 use modern forms of contraception, indicating the country's low contraceptive prevalence rate (CPR).",
    client: "Gates Foundation",
    location: "lagos, kano, port harcourt, nigeria ",
    content: [
      {
        text: "<p>Funded by the Gates Foundation (GF), in partnership with Catapult Design, our team sought to understand and address women’s needs and preferences for non-hormonal contraceptives. The study unearthed the needs and preferences of women and helped to inform the creation of prototypes of non-hormonal solutions based on women's needs, experiences and priorities.</p>",

        caption: "",
        images: ["/Images/Projects/Project4/1.png"],
      },
      {
        text: "<p>Informed by preliminary desk research, our team, along with the partnering firm devised a 3 phase research plan which involved engaging with women across the country, first in one-on-one interviews and focus group discussions, then in testing of preliminary developed prototypes.</p><p>We engaged with over 500 participants across Nigeria, distributed throughout urban and peri-urban areas. Amongst these participants, we had Women of Reproductive Age who were selected based on the most vulnerable segments, ‘influencers’ such as partners/husbands, family members, friends, neighbors, ‘street sisters’, and ‘enablers’ which consisted of religious and community leaders, as well as healthcare providers. </p>",

        caption: "User researchers in interview sessions with the women",
        images: ["/Images/Projects/Project4/2.png"],
      },
      {
        text: "<p>Over multiple phases, our team of designers, user researchers and medical practitioners underwent in-depth interviews, focus group discussions, and co-creation activities to identify the desires of women, and the trade-offs they have when it comes to contraceptives.</p><p>We studied the women’s decision-making journey across key moments that influenced their choice and use of contraceptives. We synthesized the data we gathered from the field and were able to draw out insights and meaningful findings.</p>",

        caption: "",
        images: ["/Images/Projects/Project4/3.png"],
      },
      {
        text: "<p>Using 11 attributes most likely to drive demand for contraceptives and to give us an idea of their ideal contraceptive, our study reveals that the top 3 prioritized attributes of the women were Access - a contraceptive that is readily available, Efficacy - being risk-free and 100% effective and Side effects - with little to no side effects. Our findings along with the selected prototypes that consisted of popular attributes provided the Gates Foundation with actionable insights to guide future contraceptive development. The robust prototypes and synthesized learnings create a pathway for practical solutions that address women’s unmet needs.</p>",

        caption: "Multiple product concepts tested with the women",
        images: ["/Images/Projects/Project4/4.png"],
      },
    ],
    quote:
      "Our findings along with the selected prototypes that consisted of popular attributes provided the Gates Foundation with actionable insights to guide future contraceptive development. The robust prototypes and synthesized learnings create a pathway for practical solutions that address women’s unmet needs.",
    methods: [
      "Secondary research",
      "Participant recruitment",
      "Field research",
      "Synthesis and analysis",
      "Prototyping",
      "Stakeholder report and update",
    ],
  },
  {
    id: 5,
    heroImage: "/Images/Projects/Project5/hero.png",
    client: "Gates Foundation",
    urlTitle: "Reimagining Women's Health with Human-Centered Design",
    title: "Reimagining Women's Health with Human-Centered Design",
    description:
      "In global majority countries, the health challenges faced by women and girls are often overlooked by innovations designed for other contexts. For example, Nigeria has one of the world’s highest maternal mortality rates, 576 deaths per 100,000 live births, resulting in over 80,000 preventable deaths annually. Only 19% of women use modern contraceptives, and more than 26,000 die each year from breast and cervical cancer, largely due to limited access and culturally mismatched interventions.",
    location: "lagos, kano, port harcourt, nigeria ",
    content: [
      {
        text: "<p>The WHI (Women’s Health Innovation) team at the Gates Foundation aims to shift this paradigm by ensuring that interventions, ranging from products and diagnostics to services and delivery strategies, are developed with and for the women and girls most affected by these conditions. To achieve this, we sought to get the lived realities of women, engaging them as active partners and leaders in decision-making.</p> <p class=mt-4>The study explored key hypotheses, with our team focusing specifically on the first:</p> <p><span class=font-helvetica-medium>Hypothesis 1:</span> <span class=italic>If women are provided with education, counseling, and the opportunity to try new vaginal insertable products (such as the dapivirine ring), they will demonstrate increased user acceptance and sustained interest over time.</span> </p> <p class=mt-4>This hypothesis was investigated across four key areas:</p> <ul class=pl-5 md:pl-8><li class=list-disc>Usage and Experience</li><li class=list-disc>Barriers and Enablers</li><li class=list-disc>Education and Counseling</li><li class=list-disc>Suggestions and Future Considerations</li></ul>",

        images: ["/Images/Projects/Project5/1.png"],
        caption:
          "Women co-creating with prototypes to share insights on what makes their experience feel personal",
      },
      {
        text: "<p>We developed a comprehensive research plan, which consisted of detailed logistical plans suited to the 2 different regions we were to work in, a comprehensive research guide which consisted of interview questions, FGDs (Focus Group Discussions) and co-creation activities, to help us deeply explore the areas of focus. </p> <p>Our journey began with curiosity and empathy. We knew that to truly understand the realities of women’s health in Nigeria, we had to step into their world, not as distant observers, but as partners.</p><p className=mt-4>We began with secondary research, reviewing existing reports and studies related to our focus area for innovation: menstrual hygiene, STI/HIV prevention, family planning, and bundled offerings (combining two or more areas). The findings we uncovered from preliminary studies became a key bridge to our understanding of the lived experiences of the women we were looking to study.</p><p>To kick off our study, we recruited 30 women from the Northern and Southern parts of Nigeria, each representing a vulnerable segment (vulnerable according to the Pathways categorization of women who are more at risk to social, economic, cultural and environmental outcomes) to form a panel. The goal was not just to assemble a panel, but to build an intimate community of women who would be the voices of the larger populace. WhatsApp groups were formed to create a long-term connection and build trust. This became our virtual meeting room. Here, women could speak freely, for some in their native dialects sharing personal stories, they also used the medium to ask us questions.</p>",

        images: ["/Images/Projects/Project5/3.png"],
        caption:
          "During these activities, we used a variety of methods and tools to uncover the women’s motivations, lifestyle choices, behaviour patterns, needs, and priorities",
      },
      {
        text: "<p class=mt-4>Beyond discussions and WhatsApp groups, we sat together in intimate settings that allowed us to delve deeply into the areas of study. During these activities, we used a variety of methods and tools to uncover the women’s motivations, lifestyle choices, behavior patterns, needs, influences, and priorities to validate the hypothesis. Our team probed into the women’s expectations, fears, as well as sensitive topics such as family, faith, finances, and community. To explore further, we used prototypes to uncover what would make the experiences and product feel truly personal to users.</p>",

        images: ["/Images/Projects/Project5/4.png"],
        caption:
          "Affirmation cards used as inspiring props to spark confidence, and open conversation during the session",
      },
      {
        text: "<p>As stories unfolded, we began to weave together patterns and themes. We saw how cost played a factor, with some women prioritizing efficacy, hence, choosing their health over cost, we observed their risk perception; how they perceived health risks and what influenced their decision-making. We noted the key people, within their family and communities, that played major influences in their lives (people such as women, partners, religious and community leaders). We also observed key features that the women prioritized. All of this aided our gathering of key findings and insights used to reframe the hypothesis to local contexts, and opportunity areas to be later developed.</p><p class=mt-4>We shared these discoveries with the stakeholders, as living stories; snapshots, voice notes, quotes and reflections from the women’s stories, keeping the humans at the center of every decision. At the end of our work, we delivered the insights gathered from our engagements with the women, categorizing them into emerging themes, and classified by segment. Through quotes, reflections, and media, we were able to share insightful data that held the voices and perspectives of these women, rich data which would be used to further uncover opportunity areas in women’s health.</p>",

        caption: "Miro board capturing our research planning session ",
        images: ["/Images/Projects/Project5/5.png"],
      },
    ],
    quote:
      "Through quotes, reflections, and media, we were able to share insightful data that held the voices and perspectives of these women, rich data which would be used to further uncover opportunity areas in women’s health.",
    methods: [
      "Secondary research",
      "Participant recruitment",
      "Field research",
      "Synthesis and analysis",
      "Stakeholder report",
    ],
  },
];
