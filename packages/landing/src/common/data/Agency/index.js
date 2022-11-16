import BlogImage1 from '../../assets/image/agency/blog/blog-img1.png';

import Member1 from '../../assets/image/agency/team/member-1.webp';
import Member2 from '../../assets/image/agency/team/member-2.webp';
import Member3 from '../../assets/image/agency/team/member-3.webp';
import Member4 from '../../assets/image/agency/team/member-4.webp';
import Member5 from '../../assets/image/agency/team/member-5.webp';
import D20Icon from '../../assets/image/agency/custom/d20-icon.svg'
import BicycleIcon from '../../assets/image/agency/custom/bicycle-icon.svg'
import TapeIcon from '../../assets/image/agency/custom/tape-icon.svg'
import FlashIcon from '../../assets/image/agency/custom/flash-icon.svg'
import PhotoIcon from '../../assets/image/agency/custom/photo-icon.svg'
import DemogIcon from '../../assets/image/agency/custom/demog-icon.svg'

const data = {
  menuItems: [
    {
      label: 'Feature',
      path: '#featureSection',
      offset: '80',
    },
    {
      label: 'Work History',
      path: '#workHistorySection',
      offset: '67',
    },
    {
      label: 'Quality Ledger',
      path: '#qualityLedger',
      offset: '67',
    },
    {
      label: 'SK Reputation',
      path: '#skreputation',
      offset: '67',
    },
    {
      label: '3D Rendering',
      path: '#rendering3d',
      offset: '67',
    },
    {
      label: 'Team Member',
      path: '#teamSection',
      offset: '67',
    },
    {
      label: 'FAQ',
      path: '#faqSection',
      offset: '67',
    },
  ],
  aboutus: [
    {
      id: 1,
      title: 'Amazing communication experience.',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'Best designing experience with trending tools and sizes.',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Training and communication method remotely.',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: '24/7 Hour onine supports.',
      icon: 'flaticon-next',
    },
  ],
  features: [
    {
      id: 1,
      icon: <D20Icon />,
      title: 'Blockchain Consulting',
      description:
        'Get bespoke consulting on all things blockchain from our expert blockchain developers, all based on in-depth analysis of your business needs, market research and latest trends. ',
    },
    
    {
      id: 3,
      icon: <TapeIcon />,
      title: 'NFTs',
      description:
        'Design, development and auditing of Smart Contracts for help you turn any kind of real-world asset or domain-specific business into Non-Fungible Cryptographic Tokens including real estate and collectibles.',
    },
    
    {
      id: 6,
      icon: <DemogIcon/>,
      title: 'DeFi',
      description:
        'As a DeFi development company, we design and develop a range of DeFi products for startups, scale-ups and enterprises to help them gain an edge in the competitive DeFi landscape.',
    },
    {
      id: 2,
      icon: <PhotoIcon/>,
      title: 'Notarization & Traceability',
      description:
        'Quality and safety certifications of assets. We help you restore the chain of trust, right down to the final consumer.',
    },
    {
      id: 4,
      icon: <FlashIcon  />,
      title: 'Smart Contract Auditing',
      description:
        'We audit the provided source code to find and attempt to exploit security vulnerabilities that may allow attackers to seize control of deployed contracts, steal funds, or disrupt services, among others.',
    },
    {
      id: 5,
      icon: <BicycleIcon/>,
      title: 'Dapp',
      description:
        'We are well capable of developing secure and scalable decentralized Web3 applications.',
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Built on Kadena Blockchain',
      description:
        'We use the most scalable and secure blockchain for our projects',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Supply Chain',
      description:
        'Tell the production history of your product and we certificate it.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Custom Design',
      description:
        'Customize your story and the way it will be told on your page.',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Certification',
      description:
        'Certify your production process with transparency and safety.',
    },
  ],
  skReputationFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Quick Deletion of Harmful Materials',
      description:
        'Removal of online articles, videos, images, reviews, personal informations and links deletion.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Improving digital reputation',
      description:
        'Monitoring, Analyzing and improving digital reputation through sophisticated performance analysis.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Removal fake reviews',
      description:
        ' Removal of all fake reviews. service created to give support to companies or people who safeguard their reputation from defamatory reviews.',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Our Customers',
      description:
        'Everyone can request SKReputation services, from private individuals to entrepreneurs, public figures and politicians.',
    },
  ],
  architectureRenderingFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: '3D Visualization',
      description:
        ' We bring unbuilt architecture in life using our extensive experience and cutting edge 3D visualization technology. Exteriors, interiors, VR experiences - what you can imagine, can be visualized.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'We just need a project',
      description:
        'Just give us the project of your architect to build the 3D rendering.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Customized',
      description:
        'Quick and customized service for every customer. Tell us what you want and we’ll make your every 3D wish.',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Always Available',
      description:
        'We are always available to release periodic reports of your solution.',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Quality Ledger',
      thumbnail_url: BlogImage1,
      date: 'Notarization your Product',
      postLink: '#1',
    },
  ],
  teamMember: [
    {
      id: 1,
      name: 'Jim',
      thumbnail_url: Member1,
      designation: 'Product Manager',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 2,
      name: 'Dr. Alexei',
      thumbnail_url: Member2,
      designation: 'Engineer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 3,
      name: 'Murray',
      thumbnail_url: Member3,
      designation: 'Engineer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 4,
      name: 'Billy',
      thumbnail_url: Member4,
      designation: 'UX/UI Designer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 5,
      name: 'Dustin',
      thumbnail_url: Member5,
      designation: 'Engineer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: 'What is Blockchain?',
      description:
        'Blockchain is a public ledger or a distributed database of transactions. Information is immutable and anyone can access the details at any time. As Blockchain is a distributed ledger, there will be no control or central authority of records stored.',
    },
    {
      id: 2,
      title: 'How Blockchain Can Be Used In Businesses?',
      description:
        'By eliminating the middleman, Blockchain permits the secure sharing of business processes like business activities, records and contracts between firms and partners in an encrypted manner. Blockchain Uses cryptography principle to store the data which are impossible to hack, duplicate and misuse.',
    },
    {
      id: 3,
      title: "What's the difference between Web3 and Web2?",
      description:
        'Web2 is the version of the Internet that the world is using now, centralized and controlled by a few companies. Web3 refers to decentralized apps that run on blockchain networks with which users can interact in complete anonymity.',
    },
    {
      id: 4,
      title: 'How much will it cost to develop a dApp?',
      description:
        'The cost of developing a dApp primarily depends upon your requirements. We realize projects in all shapes and sizes, from projects that need to be built for intra-company processes of 500 users to catering to masses like millions of users with a completely different set of features and Smart Contracts bounded.',
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: 'About Us',
      menuItems: [
        {
          id: 3,
          url: '#teamSection',
          text: 'About Us',
        },
        {
          id: 4,
          url: '#4',
          text: 'Copyright',
        },
      ],
    },
    {
      id: 4,
      title: 'Policy',
      menuItems: [
        {
          id: 2,
          url: '#2',
          text: 'Privacy Policy',
        },
        {
          id: 3,
          url: '#2',
          text: 'Terms & Conditions',
        },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1',
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2',
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3',
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4',
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5',
    },
  ],
};
export default data;
